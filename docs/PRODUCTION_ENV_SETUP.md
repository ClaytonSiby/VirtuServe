# Production Environment Setup Guide for VirtuServe

## Overview

This guide explains how to set up environment variables for Google Services (Analytics, Tag Manager, Search Console) across your deployment platforms:

- **GitHub Pages** (Testing - develop branch): `https://claytonsiby.github.io/VirtuServe`
- **Heroku** (Production - main branch): `https://virtuserveva.com`

---

## 📋 Prerequisites

Before starting, ensure you have:

1. ✅ Google Analytics 4 Measurement ID
2. ✅ Google Tag Manager Container ID
3. ✅ Google Search Console Verification Code
4. ✅ Access to GitHub Repository Settings
5. ✅ Access to Heroku Dashboard or Heroku CLI

> **New to Google Services?** Follow [GOOGLE_SEARCH_CONSOLE_SETUP.md](./GOOGLE_SEARCH_CONSOLE_SETUP.md) first.

---

## 🔐 Environment Variables Reference

### Required Variables

| Variable | Format | Example | Where to Get |
|----------|--------|---------|--------------|
| `NEXT_PUBLIC_GA_MEASUREMENT_ID` | G-XXXXXXXXXX | G-ABC123DEF456 | [Google Analytics](https://analytics.google.com/) → Admin → Data Streams |
| `NEXT_PUBLIC_GTM_ID` | GTM-XXXXXXX | GTM-ABC1234 | [Google Tag Manager](https://tagmanager.google.com/) → Admin → Container ID |
| `NEXT_PUBLIC_GOOGLE_SITE_VERIFICATION` | alphanumeric string | abc123def456... | [Search Console](https://search.google.com/search-console) → Settings → Ownership |
| `NEXT_PUBLIC_CALENDLY_URL` | Full URL | https://calendly.com/... | Your Calendly account |

### Optional Variables (Already Set)

| Variable | GitHub Pages Value | Heroku Value |
|----------|-------------------|--------------|
| `NEXT_PUBLIC_SITE_URL` | https://claytonsiby.github.io/VirtuServe | https://virtuserveva.com |
| `NEXT_PUBLIC_API_URL` | Auto-configured | Auto-configured |

---

## 🚀 Setup Instructions

### Option 1: GitHub Repository Secrets (For Both Platforms)

#### Step 1: Navigate to Repository Settings

1. Go to: `https://github.com/ClaytonSiby/VirtuServe`
2. Click **Settings** tab
3. In the left sidebar, click **Secrets and variables** → **Actions**

#### Step 2: Add Secrets

Click **New repository secret** for each of these:

**For GitHub Pages (Testing Environment):**
```plaintext
Name: NEXT_PUBLIC_GA_MEASUREMENT_ID_DEV
Value: G-XXXXXXXXXX (Your testing GA4 ID - optional, can use same as prod)

Name: NEXT_PUBLIC_GTM_ID_DEV
Value: GTM-XXXXXXX (Your testing GTM ID - optional, can use same as prod)
```

**For Production (Can be used by both Heroku and GitHub Pages):**
```plaintext
Name: NEXT_PUBLIC_GA_MEASUREMENT_ID
Value: G-XXXXXXXXXX (Your production GA4 ID)

Name: NEXT_PUBLIC_GTM_ID
Value: GTM-XXXXXXX (Your production GTM ID)

Name: NEXT_PUBLIC_GOOGLE_SITE_VERIFICATION
Value: your-verification-code-here (No quotes, just the code)

Name: NEXT_PUBLIC_CALENDLY_URL
Value: https://calendly.com/virtuserve/discovery-call
```

**Note:** The `_DEV` suffixed secrets are optional. If not set, the testing site will use the production IDs (which is fine for analytics).

#### Step 3: Verify Secrets Added

You should now see all secrets listed (values are hidden for security).

---

## 🟣 Heroku Production Setup

You have **three methods** to set environment variables on Heroku. Choose the one that's most convenient:

### Method 1: Heroku Dashboard (Easiest)

#### For Frontend (virtuserve-web)

1. **Go to Heroku Dashboard**
   - Visit: https://dashboard.heroku.com/apps/virtuserve-web
   - Or navigate: Dashboard → Apps → virtuserve-web

2. **Open Settings**
   - Click the **Settings** tab
   - Scroll to **Config Vars** section
   - Click **Reveal Config Vars**

3. **Add Config Vars**
   
   Add each of these (click "Add" after each):
   
   ```plaintext
   KEY: NEXT_PUBLIC_GA_MEASUREMENT_ID
   VALUE: G-XXXXXXXXXX
   
   KEY: NEXT_PUBLIC_GTM_ID
   VALUE: GTM-XXXXXXX
   
   KEY: NEXT_PUBLIC_GOOGLE_SITE_VERIFICATION
   VALUE: your-verification-code-here
   
   KEY: NEXT_PUBLIC_SITE_URL
   VALUE: https://virtuserveva.com
   
   KEY: NEXT_PUBLIC_CALENDLY_URL
   VALUE: https://calendly.com/virtuserve/discovery-call
   
   KEY: NEXT_PUBLIC_API_URL
   VALUE: https://virtuserve-api-8d1e0b1a84d7.herokuapp.com
   ```

4. **Verify Config Vars**
   - All variables should now be listed
   - No need to redeploy manually - Heroku will restart the app automatically

#### For Backend (virtuserve-api)

The backend doesn't need Google Services environment variables, but ensure these are set:

1. Go to: https://dashboard.heroku.com/apps/virtuserve-api
2. Settings → Config Vars
3. Verify these exist (add if missing):
   
   ```plaintext
   KEY: API_HOST
   VALUE: 0.0.0.0
   
   KEY: API_PORT
   VALUE: 8000
   
   KEY: CORS_ORIGINS
   VALUE: https://virtuserveva.com,https://claytonsiby.github.io
   ```

---

### Method 2: Heroku CLI (For Developers)

If you prefer using the command line:

#### Step 1: Install Heroku CLI

```bash
# macOS
brew tap heroku/brew && brew install heroku

# Or download from: https://devcenter.heroku.com/articles/heroku-cli
```

#### Step 2: Login to Heroku

```bash
heroku login
```

#### Step 3: Set Config Vars for Frontend

```bash
# Set all environment variables at once
heroku config:set \
  NEXT_PUBLIC_GA_MEASUREMENT_ID="G-XXXXXXXXXX" \
  NEXT_PUBLIC_GTM_ID="GTM-XXXXXXX" \
  NEXT_PUBLIC_GOOGLE_SITE_VERIFICATION="your-verification-code" \
  NEXT_PUBLIC_SITE_URL="https://virtuserveva.com" \
  NEXT_PUBLIC_CALENDLY_URL="https://calendly.com/virtuserve/discovery-call" \
  NEXT_PUBLIC_API_URL="https://virtuserve-api-8d1e0b1a84d7.herokuapp.com" \
  --app virtuserve-web
```

#### Step 4: Verify Configuration

```bash
# View all config vars
heroku config --app virtuserve-web

# View specific config var
heroku config:get NEXT_PUBLIC_GA_MEASUREMENT_ID --app virtuserve-web
```

---

### Method 3: Automated Script (Advanced)

Create a script to set all variables at once:

**`scripts/set-heroku-env.sh`** (Create this file):

```bash
#!/bin/bash

# Set your values here
GA_ID="G-XXXXXXXXXX"
GTM_ID="GTM-XXXXXXX"
VERIFICATION_CODE="your-verification-code"
CALENDLY_URL="https://calendly.com/virtuserve/discovery-call"

# Frontend app
echo "🚀 Setting environment variables for virtuserve-web..."
heroku config:set \
  NEXT_PUBLIC_GA_MEASUREMENT_ID="$GA_ID" \
  NEXT_PUBLIC_GTM_ID="$GTM_ID" \
  NEXT_PUBLIC_GOOGLE_SITE_VERIFICATION="$VERIFICATION_CODE" \
  NEXT_PUBLIC_SITE_URL="https://virtuserveva.com" \
  NEXT_PUBLIC_CALENDLY_URL="$CALENDLY_URL" \
  NEXT_PUBLIC_API_URL="https://virtuserve-api-8d1e0b1a84d7.herokuapp.com" \
  --app virtuserve-web

echo "✅ Done! Environment variables set."
echo "Heroku is automatically restarting the app..."
```

**Usage:**
```bash
chmod +x scripts/set-heroku-env.sh
./scripts/set-heroku-env.sh
```

---

## 🧪 Testing & Verification

### Verify GitHub Pages (Develop Branch)

1. **Trigger Deployment**
   ```bash
   git checkout develop
   git push origin develop
   ```

2. **Check GitHub Actions**
   - Go to: https://github.com/ClaytonSiby/VirtuServe/actions
   - Watch "Deploy to GitHub Pages (Develop)" workflow
   - Should complete successfully

3. **Test the Live Site**
   - Visit: https://claytonsiby.github.io/VirtuServe
   - Open Browser Console (F12)
   - Check for:
     ```
     No console errors related to Google Analytics or GTM
     ```

4. **Verify Google Analytics**
   - Go to: https://analytics.google.com/
   - Navigate to: Realtime report
   - Visit your GitHub Pages site
   - You should appear as an active user (if GA ID is set)

5. **Verify Google Tag Manager**
   - Install: [Google Tag Assistant Chrome Extension](https://chrome.google.com/webstore/detail/tag-assistant-legacy-by-g/kejbdjndbnbjgmefkgdddjlbokphdefk)
   - Visit your GitHub Pages site
   - Click the extension icon
   - You should see your GTM container (if GTM ID is set)

---

### Verify Heroku Production

1. **Trigger Deployment**
   ```bash
   git checkout main
   git push origin main
   ```

2. **Check GitHub Actions**
   - Go to: https://github.com/ClaytonSiby/VirtuServe/actions
   - Watch "Deploy to Heroku Production" workflow
   - Should complete successfully

3. **Verify Config Vars Set**
   ```bash
   heroku config --app virtuserve-web
   ```
   
   You should see all `NEXT_PUBLIC_*` variables listed.

4. **Check Heroku Logs**
   ```bash
   heroku logs --tail --app virtuserve-web
   ```
   
   Look for any errors during startup.

5. **Test the Live Site**
   - Visit: https://virtuserveva.com
   - Open Browser Console (F12)
   - No errors should appear

6. **Verify Google Analytics**
   - Go to: https://analytics.google.com/
   - Navigate to: Realtime report
   - Visit https://virtuserveva.com
   - You should appear as an active user within 30 seconds

7. **Verify Google Tag Manager**
   - Install: [Google Tag Assistant](https://chrome.google.com/webstore/detail/tag-assistant-legacy-by-g/kejbdjndbnbjgmefkgdddjlbokphdefk)
   - Visit: https://virtuserveva.com
   - Click the extension
   - Your GTM container should show as "Working"

8. **Test PageSpeed Insights**
   ```
   Visit: https://pagespeed.web.dev/
   Test: https://virtuserveva.com
   Check: Should score 90+ with analytics loaded
   ```

---

## 🔄 Deployment Workflow

### Development → Testing (GitHub Pages)

```bash
# Make changes
git checkout develop
git add .
git commit -m "Your changes"
git push origin develop

# Automatically deploys to:
# https://claytonsiby.github.io/VirtuServe
```

### Testing → Production (Heroku)

```bash
# Merge develop to main
git checkout main
git merge develop
git push origin main

# Automatically deploys to:
# https://virtuserveva.com
```

---

## 🐛 Troubleshooting

### Issue: Environment Variables Not Working on Heroku

**Check if vars are set:**
```bash
heroku config --app virtuserve-web
```

**If missing, set them:**
```bash
heroku config:set NEXT_PUBLIC_GA_MEASUREMENT_ID="G-XXX" --app virtuserve-web
```

**Force restart:**
```bash
heroku restart --app virtuserve-web
```

---

### Issue: Analytics Not Tracking

**1. Check Browser Console**
- Open DevTools (F12) → Console
- Look for errors mentioning `gtag` or `dataLayer`

**2. Verify Environment Variable Format**
- GA4 ID must be: `G-XXXXXXXXXX` (exactly 10 characters after G-)
- GTM ID must be: `GTM-XXXXXXX` (7 characters after GTM-)
- No quotes, spaces, or special characters

**3. Check Network Tab**
- Open DevTools (F12) → Network
- Filter by "analytics" or "gtm"
- You should see requests being made

**4. Test with Google Tag Assistant**
- Install the Chrome extension
- Visit your site
- Click the extension icon
- Tags should show as "Working"

---

### Issue: GitHub Actions Build Failing

**Check the workflow logs:**
1. Go to: https://github.com/ClaytonSiby/VirtuServe/actions
2. Click on the failed workflow
3. Check which step failed

**Common causes:**
- Missing repository secrets
- Typo in secret names (they're case-sensitive)
- Invalid environment variable format

**Fix:**
1. Go to Repository Settings → Secrets and variables → Actions
2. Verify all secrets are present and correctly named
3. Re-run the workflow

---

### Issue: Different Analytics for Dev vs Prod

**Solution:**

You can use separate GA4 properties for testing and production:

1. **Create Two GA4 Properties:**
   - "VirtuServe Development" → Get Measurement ID (e.g., `G-DEV123456`)
   - "VirtuServe Production" → Get Measurement ID (e.g., `G-PROD789012`)

2. **Set Different Secrets in GitHub:**
   ```plaintext
   NEXT_PUBLIC_GA_MEASUREMENT_ID_DEV=G-DEV123456 (for GitHub Pages)
   NEXT_PUBLIC_GA_MEASUREMENT_ID=G-PROD789012 (for Heroku)
   ```

3. **Update Heroku Config:**
   ```bash
   heroku config:set NEXT_PUBLIC_GA_MEASUREMENT_ID="G-PROD789012" --app virtuserve-web
   ```

---

### Issue: Heroku App Not Restarting After Config Change

**Manual restart:**
```bash
heroku restart --app virtuserve-web
```

**Check if app is running:**
```bash
heroku ps --app virtuserve-web
```

**Force redeploy:**
```bash
git commit --allow-empty -m "Force redeploy"
git push origin main
```

---

## 📊 Best Practices

### 1. Use Separate Analytics for Dev and Prod

✅ **Recommended:**
- Development: `G-DEV123456`
- Production: `G-PROD789012`

❌ **Avoid:**
- Using the same GA4 ID for both (mixes test and real data)

### 2. Test on GitHub Pages First

Before deploying to production (Heroku):
1. ✅ Test changes on develop branch (GitHub Pages)
2. ✅ Verify analytics tracking works
3. ✅ Check for console errors
4. ✅ Then merge to main for production

### 3. Keep Secrets Secret

- ❌ Never commit `.env` or `.env.local` files
- ❌ Never hardcode API keys in code
- ✅ Always use environment variables
- ✅ Use GitHub Secrets and Heroku Config Vars

### 4. Document Your IDs

Keep a secure record of your Google Service IDs:

```plaintext
📝 Google Services IDs (Keep Secure)
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
Production GA4:     G-XXXXXXXXXX
Production GTM:     GTM-XXXXXXX
Development GA4:    G-YYYYYYYYYY (optional)
Development GTM:    GTM-YYYYYYY (optional)
Verification Code:  abc123def456...
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
```

Store this in a secure password manager (1Password, LastPass, etc.)

---

## ✅ Deployment Checklist

### Before First Deployment

- [ ] Google Analytics 4 account created
- [ ] Google Tag Manager container created
- [ ] Google Search Console property verified
- [ ] All Google Service IDs documented
- [ ] GitHub repository secrets added
- [ ] Heroku config vars added
- [ ] Both `next.config.js` and `next.config.pages.js` updated
- [ ] GitHub Actions workflow updated

### After Each Deployment

- [ ] GitHub Actions workflow completed successfully
- [ ] Site is accessible (no 500/404 errors)
- [ ] No console errors in browser
- [ ] Google Analytics shows real-time visitor (you)
- [ ] Google Tag Manager tags firing (check with extension)
- [ ] PageSpeed Insights score > 90

---

## 🆘 Getting Help

### Check Status

**GitHub Pages:**
- Status: https://github.com/ClaytonSiby/VirtuServe/actions
- Logs: Click on latest workflow run

**Heroku:**
```bash
# Check if app is running
heroku ps --app virtuserve-web

# View recent logs
heroku logs --tail --app virtuserve-web

# Check config
heroku config --app virtuserve-web
```

### Useful Commands

```bash
# View all Heroku apps
heroku apps

# Open app in browser
heroku open --app virtuserve-web

# Run a one-off command
heroku run echo $NEXT_PUBLIC_GA_MEASUREMENT_ID --app virtuserve-web

# Restart app
heroku restart --app virtuserve-web
```

### Resources

- [Heroku Config Vars Documentation](https://devcenter.heroku.com/articles/config-vars)
- [GitHub Actions Secrets Documentation](https://docs.github.com/en/actions/security-guides/encrypted-secrets)
- [Next.js Environment Variables](https://nextjs.org/docs/basic-features/environment-variables)

---

## 🎯 Quick Reference

### GitHub Pages Environment Variables (Optional)

Set in: Repository Settings → Secrets and variables → Actions

```plaintext
NEXT_PUBLIC_GA_MEASUREMENT_ID_DEV (optional - for separate dev analytics)
NEXT_PUBLIC_GTM_ID_DEV (optional - for separate dev tag manager)
NEXT_PUBLIC_GOOGLE_SITE_VERIFICATION (same for both environments)
NEXT_PUBLIC_CALENDLY_URL (already set)
```

### Heroku Config Vars (Required)

Set in: Heroku Dashboard → virtuserve-web → Settings → Config Vars

```plaintext
NEXT_PUBLIC_GA_MEASUREMENT_ID (required)
NEXT_PUBLIC_GTM_ID (required)
NEXT_PUBLIC_GOOGLE_SITE_VERIFICATION (required)
NEXT_PUBLIC_SITE_URL=https://virtuserveva.com
NEXT_PUBLIC_API_URL=https://virtuserve-api-8d1e0b1a84d7.herokuapp.com
NEXT_PUBLIC_CALENDLY_URL (required)
```

### Deployment URLs

```plaintext
Testing:    https://claytonsiby.github.io/VirtuServe
Production: https://virtuserveva.com
Backend:    https://virtuserve-api-8d1e0b1a84d7.herokuapp.com
```

---

**Last Updated:** February 11, 2026  
**Version:** 1.0  
**Status:** ✅ Ready for Production
