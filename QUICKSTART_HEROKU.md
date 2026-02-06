# VirtuServe - Quick Heroku Deployment

## 🚀 Quick Start (5 Minutes)

### Step 1: Install Heroku CLI (if not installed)
```bash
brew tap heroku/brew && brew install heroku
```

### Step 2: Login to Heroku
```bash
heroku login
```

### Step 3: Run the Deployment Script
```bash
./deploy-heroku.sh
```

Choose option **4** (Setup New Apps) and follow the prompts.

### Step 4: Deploy Your Apps
```bash
# Deploy backend
git push heroku-backend develop:main

# Deploy frontend  
git push heroku-frontend develop:main
```

### Step 5: Configure Custom Domain
```bash
# Add domain to frontend app
heroku domains:add virtuserveva.com -a virtuserve-web
heroku domains:add www.virtuserveva.com -a virtuserve-web

# Get DNS targets
heroku domains -a virtuserve-web
```

### Step 6: Update DNS Records at Your Domain Registrar

Add these records at your domain registrar (GoDaddy, Namecheap, etc.):

**Root Domain:**
- Type: `ALIAS` or `ANAME` (or `CNAME` if ALIAS not supported)
- Name: `@` or blank
- Value: `<target-from-heroku>.herokudns.com`

**WWW Subdomain:**
- Type: `CNAME`
- Name: `www`
- Value: `<target-from-heroku>.herokudns.com`

**API Subdomain (optional):**
- Type: `CNAME`  
- Name: `api`
- Value: `<target-from-heroku>.herokudns.com`

### Step 7: Verify Deployment

```bash
# Check backend
curl https://virtuserve-api.herokuapp.com/api/health

# Open frontend
heroku open -a virtuserve-web
```

---

## 🔍 Troubleshooting

### Build Failed?
```bash
heroku logs --tail -a virtuserve-api
```

### App Crashed?
```bash
heroku restart -a virtuserve-api
heroku ps -a virtuserve-api
```

### Frontend Can't Connect to Backend?
Check your frontend environment variable:
```bash
heroku config -a virtuserve-web
```

Should show: `NEXT_PUBLIC_API_URL=https://virtuserve-api.herokuapp.com`

---

## 📚 Full Documentation

See [HEROKU_DEPLOYMENT_GUIDE.md](./HEROKU_DEPLOYMENT_GUIDE.md) for complete details.

---

## 💡 Pro Tips

1. **Enable automatic deploys**: Connect GitHub in Heroku Dashboard → Deploy tab
2. **Monitor your apps**: Install Heroku CLI and use `heroku logs --tail`
3. **Scale for production**: Consider Hobby tier ($7/mo) to prevent sleeping
4. **SSL**: Heroku provides free SSL certificates automatically
5. **Environment variables**: Never commit secrets, use `heroku config:set`

---

## 🌐 Your URLs

After deployment:
- **Backend API**: `https://virtuserve-api.herokuapp.com`
- **Frontend**: `https://virtuserve-web.herokuapp.com`
- **Custom Domain**: `https://virtuserveva.com` (after DNS propagation)
- **API Docs**: `https://virtuserve-api.herokuapp.com/docs`

---

## ✅ Checklist

- [ ] Heroku CLI installed
- [ ] Logged into Heroku
- [ ] Created backend app
- [ ] Created frontend app
- [ ] Deployed backend
- [ ] Deployed frontend
- [ ] Added custom domain
- [ ] Updated DNS records
- [ ] Verified SSL certificate
- [ ] Tested all endpoints
- [ ] Tested contact form

---

Need help? Check the logs:
```bash
heroku logs --tail -a virtuserve-api
heroku logs --tail -a virtuserve-web
```
