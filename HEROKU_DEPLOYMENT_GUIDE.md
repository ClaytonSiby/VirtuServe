# VirtuServe Heroku Deployment Guide

This guide will help you deploy your VirtuServe application to Heroku with a custom domain.

## Architecture Overview

Your application has a **monorepo structure** with:
- **Backend**: Python FastAPI (port 8000)
- **Frontend**: Next.js/React (port 3000)

## Deployment Strategy: Two Separate Heroku Apps

Since you have a monorepo, the best approach is to create **two separate Heroku apps**:
1. **virtuserve-api** (Backend)
2. **virtuserve-web** (Frontend)

---

## 📦 Prerequisites

1. Install Heroku CLI:
   ```bash
   brew tap heroku/brew && brew install heroku
   ```

2. Login to Heroku:
   ```bash
   heroku login
   ```

---

## 🚀 Part 1: Deploy Backend API

### Step 1: Create Backend Heroku App

```bash
# Create app with a specific name
heroku create virtuserve-api

# Or let Heroku generate a name
heroku create
```

### Step 2: Set Environment Variables

```bash
heroku config:set API_HOST=0.0.0.0 -a virtuserve-api
heroku config:set API_PORT=$PORT -a virtuserve-api
heroku config:set ENVIRONMENT=production -a virtuserve-api
heroku config:set ALLOWED_ORIGINS=https://virtuserveva.com,https://www.virtuserveva.com -a virtuserve-api
```

### Step 3: Deploy Backend

**Option A: Using Buildpack (Recommended)**
```bash
# Set Python buildpack
heroku buildpacks:set heroku/python -a virtuserve-api

# Deploy from your develop branch
git push heroku develop:main

# Or if deploying from main branch
git push heroku main
```

**Option B: Using Docker (Alternative)**
```bash
# Set stack to container
heroku stack:set container -a virtuserve-api

# Deploy
git push heroku develop:main
```

### Step 4: Verify Backend Deployment

```bash
# Open app in browser
heroku open -a virtuserve-api

# Check logs
heroku logs --tail -a virtuserve-api

# Test API endpoint
curl https://virtuserve-api.herokuapp.com/api/health
```

---

## 🎨 Part 2: Deploy Frontend

### Step 1: Create Frontend Heroku App

```bash
heroku create virtuserve-web
```

### Step 2: Configure Frontend Build

First, update your Next.js configuration to support monorepo deployment. Create a `package.json` at the root if needed, or configure the frontend to deploy properly.

### Step 3: Set Environment Variables

```bash
# Set the backend API URL (use your backend Heroku app URL)
heroku config:set NEXT_PUBLIC_API_URL=https://virtuserve-api.herokuapp.com -a virtuserve-web
heroku config:set NODE_ENV=production -a virtuserve-web
```

### Step 4: Deploy Frontend Using Subdir Buildpack

Since your frontend is in a subdirectory, use the subdir buildpack:

```bash
# Add subdir buildpack first
heroku buildpacks:add -i 1 https://github.com/timanovsky/subdir-heroku-buildpack.git -a virtuserve-web

# Add Node.js buildpack
heroku buildpacks:add heroku/nodejs -a virtuserve-web

# Set project path
heroku config:set PROJECT_PATH=frontend -a virtuserve-web

# Deploy
git push heroku develop:main
```

### Step 5: Verify Frontend Deployment

```bash
heroku open -a virtuserve-web
heroku logs --tail -a virtuserve-web
```

---

## 🌐 Part 3: Configure Custom Domain (virtuserveva.com)

### Step 1: Add Custom Domain to Frontend App

```bash
# Add your custom domain
heroku domains:add virtuserveva.com -a virtuserve-web
heroku domains:add www.virtuserveva.com -a virtuserve-web

# Get DNS targets
heroku domains -a virtuserve-web
```

### Step 2: Configure DNS Records

You'll need to add DNS records at your domain registrar. Heroku will provide you with DNS targets (something like `xxx.herokudns.com`).

**For Root Domain (virtuserveva.com):**
- **Type**: ALIAS or ANAME (if supported) or CNAME
- **Name**: @ or blank
- **Value**: `<target-provided-by-heroku>.herokudns.com`

**For WWW Subdomain (www.virtuserveva.com):**
- **Type**: CNAME
- **Name**: www
- **Value**: `<target-provided-by-heroku>.herokudns.com`

### Step 3: Add Custom Domain to Backend (Optional)

If you want a custom domain for your API (e.g., api.virtuserveva.com):

```bash
heroku domains:add api.virtuserveva.com -a virtuserve-api
```

Then add a CNAME record:
- **Type**: CNAME
- **Name**: api
- **Value**: `<target-provided-by-heroku>.herokudns.com`

### Step 4: Enable SSL (Automatic)

Heroku automatically provides free SSL certificates for custom domains:

```bash
# Verify SSL status
heroku certs:auto:enable -a virtuserve-web
heroku certs -a virtuserve-web
```

---

## 🔧 Part 4: Update CORS Settings

After deployment, update your backend CORS settings to allow requests from your production domain:

**File: `backend/app/main.py`**

```python
# Configure CORS
app.add_middleware(
    CORSMiddleware,
    allow_origins=[
        "http://localhost:3000",
        "http://frontend:3000",
        "https://virtuserveva.com",
        "https://www.virtuserveva.com",
        "https://virtuserve-web.herokuapp.com"  # Your Heroku frontend URL
    ],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)
```

Then redeploy the backend:
```bash
git add .
git commit -m "Update CORS for production domain"
git push heroku develop:main
```

---

## 📊 Monitoring and Maintenance

### Check Application Status
```bash
heroku ps -a virtuserve-api
heroku ps -a virtuserve-web
```

### View Logs
```bash
heroku logs --tail -a virtuserve-api
heroku logs --tail -a virtuserve-web
```

### Scale Dynos (if needed)
```bash
# Check current dyno usage
heroku ps -a virtuserve-api

# Scale up if needed (requires paid plan)
heroku ps:scale web=2 -a virtuserve-api
```

### Set Up Continuous Deployment (Optional)

You can enable automatic deploys from GitHub:
1. Go to your Heroku Dashboard
2. Select your app
3. Go to "Deploy" tab
4. Connect to GitHub
5. Enable "Automatic Deploys" from your `develop` branch

---

## 🐛 Troubleshooting

### Build Fails
```bash
# Check build logs
heroku logs --tail -a virtuserve-api

# Verify buildpack
heroku buildpacks -a virtuserve-api
```

### Application Crashes
```bash
# Restart dynos
heroku restart -a virtuserve-api

# Check dyno status
heroku ps -a virtuserve-api
```

### DNS Not Resolving
- DNS changes can take 24-48 hours to propagate
- Use `dig virtuserveva.com` to check DNS records
- Verify records at your domain registrar

### SSL Certificate Issues
```bash
# Check certificate status
heroku certs -a virtuserve-web

# Force certificate refresh
heroku certs:auto:refresh -a virtuserve-web
```

---

## 💰 Pricing Considerations

- **Free Tier**: 550-1000 dyno hours per month (with credit card verification)
- **Hobby Tier**: $7/month per dyno (never sleeps)
- **Professional**: $25/month per dyno (with more resources)

For production, consider at least the Hobby tier to prevent your app from sleeping.

---

## ✅ Post-Deployment Checklist

- [ ] Backend deployed and accessible
- [ ] Frontend deployed and accessible
- [ ] Custom domain added and DNS configured
- [ ] SSL certificate active (check for HTTPS)
- [ ] CORS configured for production domain
- [ ] Environment variables set correctly
- [ ] API endpoints working from frontend
- [ ] Contact form functioning
- [ ] Test on mobile devices
- [ ] Monitor logs for errors

---

## 📞 Need Help?

- Heroku Docs: https://devcenter.heroku.com/
- Heroku Status: https://status.heroku.com/
- Community: https://help.heroku.com/

---

## Alternative: Single App Deployment with Docker

If you prefer deploying as a single app using Docker Compose (more complex):

1. Create a `heroku.yml` at root
2. Use Heroku's container stack
3. Configure a reverse proxy (nginx) to route requests

This approach is more advanced and requires additional configuration.
