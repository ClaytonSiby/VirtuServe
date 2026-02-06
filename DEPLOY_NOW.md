# 🎯 IMMEDIATE ACTION PLAN - Heroku Deployment

## ✅ What We've Done

1. ✅ Created `Procfile` - Tells Heroku how to run your backend
2. ✅ Created `runtime.txt` - Specifies Python 3.11.9
3. ✅ Created `requirements.txt` - Lists Python dependencies at root
4. ✅ Created `heroku.yml` - Alternative Docker deployment config
5. ✅ Updated CORS in `backend/app/main.py` - Added production domains
6. ✅ Created deployment scripts and guides
7. ✅ Committed and pushed to GitHub

## 🚀 NEXT STEPS (Do This Now!)

### Option 1: Automated Setup (RECOMMENDED)

Run the interactive setup script:

```bash
cd /Users/claytonsiby/Documents/Github/personal/virtuserve
./setup-heroku-interactive.sh
```

This script will:
- Check Heroku CLI installation ✅
- Login to Heroku
- Create both apps (backend + frontend)
- Configure buildpacks and environment variables
- Optionally deploy immediately

### Option 2: Manual Setup (Step by Step)

If you prefer manual control, follow these commands:

#### 1. Login to Heroku
```bash
heroku login
```

#### 2. Create Backend App
```bash
heroku create virtuserve-api
heroku buildpacks:set heroku/python -a virtuserve-api
```

#### 3. Set Backend Environment Variables
```bash
heroku config:set \
  API_HOST=0.0.0.0 \
  ENVIRONMENT=production \
  ALLOWED_ORIGINS=https://virtuserveva.com,https://www.virtuserveva.com \
  -a virtuserve-api
```

#### 4. Create Frontend App
```bash
heroku create virtuserve-web
heroku buildpacks:add -i 1 https://github.com/timanovsky/subdir-heroku-buildpack.git -a virtuserve-web
heroku buildpacks:add heroku/nodejs -a virtuserve-web
```

#### 5. Set Frontend Environment Variables
```bash
heroku config:set \
  PROJECT_PATH=frontend \
  NEXT_PUBLIC_API_URL=https://virtuserve-api.herokuapp.com \
  NODE_ENV=production \
  -a virtuserve-web
```

#### 6. Add Git Remotes
```bash
git remote add heroku-backend https://git.heroku.com/virtuserve-api.git
git remote add heroku-frontend https://git.heroku.com/virtuserve-web.git
```

#### 7. Deploy Backend
```bash
git push heroku-backend develop:main
```

#### 8. Deploy Frontend
```bash
git push heroku-frontend develop:main
```

#### 9. Verify Deployments
```bash
# Check backend health
curl https://virtuserve-api.herokuapp.com/api/health

# Open frontend in browser
heroku open -a virtuserve-web
```

## 🌐 Configure Custom Domain (virtuserveva.com)

After successful deployment:

### 1. Add Domain to Heroku
```bash
heroku domains:add virtuserveva.com -a virtuserve-web
heroku domains:add www.virtuserveva.com -a virtuserve-web
```

### 2. Get DNS Targets
```bash
heroku domains -a virtuserve-web
```

You'll see output like:
```
=== virtuserve-web Heroku Domain
virtuserve-web.herokuapp.com

=== virtuserve-web Custom Domains
Domain Name          DNS Record Type  DNS Target
───────────────────  ───────────────  ─────────────────────────
virtuserveva.com     ALIAS or ANAME   xxx-123.herokudns.com
www.virtuserveva.com CNAME            xxx-456.herokudns.com
```

### 3. Configure DNS at Your Domain Registrar

Go to your domain registrar (GoDaddy, Namecheap, Google Domains, etc.) and add:

**For Root Domain (virtuserveva.com):**
```
Type:  ALIAS or ANAME (or CNAME if those aren't available)
Name:  @ or leave blank
Value: xxx-123.herokudns.com (from Heroku output)
TTL:   Automatic or 3600
```

**For WWW Subdomain (www.virtuserveva.com):**
```
Type:  CNAME
Name:  www
Value: xxx-456.herokudns.com (from Heroku output)
TTL:   Automatic or 3600
```

**Optional - For API Subdomain (api.virtuserveva.com):**
```bash
# First add to Heroku
heroku domains:add api.virtuserveva.com -a virtuserve-api

# Then add DNS record:
Type:  CNAME
Name:  api
Value: (DNS target from Heroku)
TTL:   Automatic or 3600
```

### 4. Wait for DNS Propagation

DNS changes typically take:
- 5-30 minutes (fastest)
- Up to 24-48 hours (worst case)

Check propagation:
```bash
dig virtuserveva.com
dig www.virtuserveva.com
```

### 5. Verify SSL Certificate

Heroku automatically provisions SSL certificates:
```bash
heroku certs -a virtuserve-web
```

Wait for status: `Cert issued`

## 🔍 Troubleshooting

### Build Failed?
```bash
# View logs
heroku logs --tail -a virtuserve-api

# Common issues:
# - Missing dependencies in requirements.txt
# - Wrong Python version
# - Syntax errors in code
```

### App Crashed?
```bash
# Check dyno status
heroku ps -a virtuserve-api

# Restart app
heroku restart -a virtuserve-api

# View error logs
heroku logs --tail -a virtuserve-api
```

### Frontend Can't Connect to Backend?
```bash
# Check environment variable
heroku config:get NEXT_PUBLIC_API_URL -a virtuserve-web

# Should be: https://virtuserve-api.herokuapp.com
# If wrong, fix it:
heroku config:set NEXT_PUBLIC_API_URL=https://virtuserve-api.herokuapp.com -a virtuserve-web

# Redeploy frontend
git push heroku-frontend develop:main
```

### DNS Not Resolving?
1. Verify DNS records at registrar
2. Check Heroku DNS targets: `heroku domains -a virtuserve-web`
3. Use DNS checker: https://dnschecker.org
4. Be patient - can take up to 48 hours

## 📊 Monitor Your Apps

### View Logs in Real-Time
```bash
# Backend logs
heroku logs --tail -a virtuserve-api

# Frontend logs
heroku logs --tail -a virtuserve-web
```

### Check Application Status
```bash
heroku ps -a virtuserve-api
heroku ps -a virtuserve-web
```

### View Configuration
```bash
heroku config -a virtuserve-api
heroku config -a virtuserve-web
```

## 💰 Pricing & Scaling

### Free Tier (Current)
- 550-1000 dyno hours/month
- Apps sleep after 30 minutes of inactivity
- Limited to 1 web dyno per app

### Upgrade to Hobby ($7/month per dyno)
```bash
heroku ps:type hobby -a virtuserve-api
heroku ps:type hobby -a virtuserve-web
```

Benefits:
- Never sleeps
- Better performance
- More dyno hours

## ✅ Post-Deployment Checklist

- [ ] Backend deployed successfully
- [ ] Frontend deployed successfully
- [ ] Backend health check returns 200: `https://virtuserve-api.herokuapp.com/api/health`
- [ ] Frontend loads: `https://virtuserve-web.herokuapp.com`
- [ ] Custom domain added to Heroku
- [ ] DNS records configured at registrar
- [ ] Wait for DNS propagation (check with `dig virtuserveva.com`)
- [ ] SSL certificate issued (check with `heroku certs -a virtuserve-web`)
- [ ] Test website at `https://virtuserveva.com`
- [ ] Test API at `https://api.virtuserveva.com` (if configured)
- [ ] Test contact form submission
- [ ] Verify CORS (check browser console for errors)
- [ ] Monitor logs for errors
- [ ] Consider upgrading to Hobby tier for production

## 🎯 Expected URLs After Deployment

- **Backend API**: https://virtuserve-api.herokuapp.com
- **Backend Docs**: https://virtuserve-api.herokuapp.com/docs
- **Backend Health**: https://virtuserve-api.herokuapp.com/api/health
- **Frontend**: https://virtuserve-web.herokuapp.com
- **Custom Domain**: https://virtuserveva.com (after DNS)
- **WWW**: https://www.virtuserveva.com (after DNS)
- **API (optional)**: https://api.virtuserveva.com (if configured)

## 📚 Documentation Files

1. **QUICKSTART_HEROKU.md** - 5-minute quick start guide
2. **HEROKU_DEPLOYMENT_GUIDE.md** - Comprehensive deployment guide
3. **setup-heroku-interactive.sh** - Interactive setup script
4. **deploy-heroku.sh** - Deployment automation script
5. **THIS FILE** - Immediate action plan

## 🆘 Need Help?

1. Check logs: `heroku logs --tail -a <app-name>`
2. Review Heroku docs: https://devcenter.heroku.com/
3. Check Heroku status: https://status.heroku.com/
4. Review our comprehensive guide: `HEROKU_DEPLOYMENT_GUIDE.md`

---

## 🚀 TLDR - Start Here!

```bash
# Run this ONE command to get started:
./setup-heroku-interactive.sh
```

Follow the prompts, and you'll have your app deployed in 10 minutes! 🎉
