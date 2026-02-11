# Quick Setup: Production Environment Variables

> **⚡ Fast track guide for setting up Google Services in production**

## 🎯 What You Need

Get these from your Google accounts:
- ✅ **GA4 ID**: `G-XXXXXXXXXX` from [analytics.google.com](https://analytics.google.com)
- ✅ **GTM ID**: `GTM-XXXXXXX` from [tagmanager.google.com](https://tagmanager.google.com)
- ✅ **Verification Code**: From [search.google.com/search-console](https://search.google.com/search-console)

---

## 🟣 Heroku Setup (5 minutes)

### Method 1: Dashboard (Easiest)

1. Go to: https://dashboard.heroku.com/apps/virtuserve-web
2. Click **Settings** → **Reveal Config Vars**
3. Add these:

```plaintext
NEXT_PUBLIC_GA_MEASUREMENT_ID      →  G-XXXXXXXXXX
NEXT_PUBLIC_GTM_ID                 →  GTM-XXXXXXX
NEXT_PUBLIC_GOOGLE_SITE_VERIFICATION  →  your-code-here
NEXT_PUBLIC_SITE_URL               →  https://virtuserveva.com
NEXT_PUBLIC_API_URL                →  https://virtuserve-api-8d1e0b1a84d7.herokuapp.com
NEXT_PUBLIC_CALENDLY_URL           →  https://calendly.com/virtuserve/discovery-call
```

✅ Done! Heroku auto-restarts the app.

### Method 2: CLI (For Developers)

```bash
heroku config:set \
  NEXT_PUBLIC_GA_MEASUREMENT_ID="G-XXXXXXXXXX" \
  NEXT_PUBLIC_GTM_ID="GTM-XXXXXXX" \
  NEXT_PUBLIC_GOOGLE_SITE_VERIFICATION="your-code" \
  NEXT_PUBLIC_SITE_URL="https://virtuserveva.com" \
  NEXT_PUBLIC_API_URL="https://virtuserve-api-8d1e0b1a84d7.herokuapp.com" \
  NEXT_PUBLIC_CALENDLY_URL="https://calendly.com/virtuserve/discovery-call" \
  --app virtuserve-web
```

---

## 🟢 GitHub Secrets (3 minutes)

For GitHub Pages testing environment:

1. Go to: https://github.com/ClaytonSiby/VirtuServe/settings/secrets/actions
2. Click **New repository secret**
3. Add these:

```plaintext
Name: NEXT_PUBLIC_GA_MEASUREMENT_ID
Value: G-XXXXXXXXXX

Name: NEXT_PUBLIC_GTM_ID
Value: GTM-XXXXXXX

Name: NEXT_PUBLIC_GOOGLE_SITE_VERIFICATION
Value: your-verification-code
```

Optional (for separate dev analytics):
```plaintext
Name: NEXT_PUBLIC_GA_MEASUREMENT_ID_DEV
Value: G-YYYYYYYYYY

Name: NEXT_PUBLIC_GTM_ID_DEV
Value: GTM-YYYYYYY
```

---

## ✅ Verify Setup

### Check Heroku Config
```bash
heroku config --app virtuserve-web
```

### Test Production Site
1. Visit: https://virtuserveva.com
2. Open console (F12) - no errors should appear
3. Check Google Analytics Realtime - you should appear
4. Use [Google Tag Assistant](https://chrome.google.com/webstore/detail/tag-assistant-legacy-by-g/kejbdjndbnbjgmefkgdddjlbokphdefk)

### Deploy
```bash
git push origin main  # Auto-deploys to Heroku
```

---

## 🆘 Quick Troubleshooting

**Not tracking?**
- Check config vars are set: `heroku config --app virtuserve-web`
- Verify ID format: `G-XXXXXXXXXX` (exactly 10 chars after G-)
- Check browser console for errors
- Wait 24-48 hours for first data in Google Analytics

**Build failing?**
- Check GitHub Actions: https://github.com/ClaytonSiby/VirtuServe/actions
- Verify repository secrets are set correctly
- Re-run the workflow

**Need manual restart?**
```bash
heroku restart --app virtuserve-web
```

---

## 📚 Full Documentation

For detailed setup instructions, see:
- **[PRODUCTION_ENV_SETUP.md](./PRODUCTION_ENV_SETUP.md)** - Complete guide
- **[GOOGLE_SEARCH_CONSOLE_SETUP.md](./GOOGLE_SEARCH_CONSOLE_SETUP.md)** - Google Services setup

---

**Ready to go!** 🚀 After setting these variables, your site will have full analytics tracking and SEO optimization.
