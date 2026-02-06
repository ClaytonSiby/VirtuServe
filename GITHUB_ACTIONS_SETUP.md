# GitHub Actions Auto-Deploy Setup Guide

This guide explains how to configure automatic deployments to Heroku when you push to the `main` branch.

## Required GitHub Secrets

You need to add two secrets to your GitHub repository:

### 1. Get Your Heroku API Key

1. Log in to Heroku: https://dashboard.heroku.com
2. Click on your profile picture (top right)
3. Click **Account Settings**
4. Scroll down to **API Key**
5. Click **Reveal** to see your API key
6. Copy the API key

### 2. Get Your Heroku Email

This is the email address you use to log in to Heroku.

### 3. Add Secrets to GitHub

1. Go to your GitHub repository: https://github.com/ClaytonSiby/VirtuServe
2. Click **Settings** (top menu)
3. In the left sidebar, click **Secrets and variables** → **Actions**
4. Click **New repository secret**

Add these two secrets:

**Secret 1:**
- Name: `HEROKU_API_KEY`
- Value: [Your Heroku API key from step 1]

**Secret 2:**
- Name: `HEROKU_EMAIL`
- Value: [Your Heroku email address]

## How It Works

Once secrets are configured:

1. **Push to `main` branch** → Automatic deployment starts
2. **Backend** deploys to `virtuserve-api` 
3. **Frontend** deploys to `virtuserve-web`
4. **Success notification** appears in GitHub Actions

## Monitoring Deployments

### View Deployment Status
- GitHub: https://github.com/ClaytonSiby/VirtuServe/actions
- Heroku Backend: https://dashboard.heroku.com/apps/virtuserve-api/activity
- Heroku Frontend: https://dashboard.heroku.com/apps/virtuserve-web/activity

### Check Logs
```bash
# Backend logs
heroku logs --tail --app virtuserve-api

# Frontend logs
heroku logs --tail --app virtuserve-web
```

## Rollback Procedure

If a deployment causes issues:

### Option 1: GitHub Actions (Recommended)
1. Go to: https://github.com/ClaytonSiby/VirtuServe/actions
2. Find the last successful deployment
3. Click **Re-run all jobs**

### Option 2: Heroku Rollback
```bash
# View releases
heroku releases --app virtuserve-web
heroku releases --app virtuserve-api

# Rollback to previous version
heroku rollback v# --app virtuserve-web
heroku rollback v# --app virtuserve-api
```

### Option 3: Git Revert
```bash
# Revert the problematic commit
git revert HEAD
git push origin main
# This will trigger a new deployment with the reverted code
```

## Workflow Details

The auto-deploy workflow (`.github/workflows/deploy-heroku.yml`) runs on:
- ✅ Every push to `main` branch
- ✅ Manual trigger from GitHub Actions tab

It performs these steps:
1. Checks out the code
2. Deploys `backend/` directory to `virtuserve-api`
3. Deploys `frontend/` directory to `virtuserve-web`
4. Notifies on success

## Manual Deploy Option

You can still deploy manually if needed:

```bash
# Using the script
./deploy-production.sh

# Or manually
git subtree push --prefix backend heroku-backend main
git subtree push --prefix frontend heroku-frontend main
```

## Best Practices

1. **Always test on `develop` first**: Push to `develop`, verify on GitHub Pages
2. **Merge to `main` only when ready**: The merge will trigger production deployment
3. **Watch the deployment**: Check GitHub Actions to ensure successful deployment
4. **Test after deployment**: Visit https://virtuserveva.com to verify
5. **Monitor for issues**: Keep an eye on Heroku logs for the first few minutes

## Deployment Flow

```
develop branch
    ↓
  [Test on GitHub Pages]
    ↓
  [Verify everything works]
    ↓
Merge to main
    ↓
  [GitHub Actions triggers]
    ↓
  [Auto-deploy to Heroku]
    ↓
  [Production live]
```

## Troubleshooting

### Deployment Fails

**Check GitHub Actions logs:**
- Go to: https://github.com/ClaytonSiby/VirtuServe/actions
- Click on the failed workflow
- Review the error messages

**Common issues:**
- Missing secrets: Add `HEROKU_API_KEY` and `HEROKU_EMAIL`
- Invalid API key: Regenerate in Heroku settings
- Build errors: Check the build logs in GitHub Actions

### Secrets Not Working

1. Verify secrets are named exactly:
   - `HEROKU_API_KEY` (not `HEROKU_KEY` or `API_KEY`)
   - `HEROKU_EMAIL` (not `EMAIL` or `HEROKU_USER`)

2. Regenerate Heroku API key:
   - Heroku Dashboard → Account Settings → API Key → Regenerate
   - Update the GitHub secret with new key

### Build Succeeds but App Doesn't Work

1. Check Heroku logs for runtime errors
2. Verify environment variables are set in Heroku
3. Test the API health endpoint: https://virtuserve-api-8d1e0b1a84d7.herokuapp.com/api/health

## Disabling Auto-Deploy

If you need to temporarily disable auto-deploy:

1. Go to: https://github.com/ClaytonSiby/VirtuServe/actions
2. Click **Workflows** in left sidebar
3. Find "Deploy to Heroku Production"
4. Click the ⋮ menu → **Disable workflow**

To re-enable, follow the same steps and click **Enable workflow**.

## Cost Implications

- ✅ GitHub Actions: Free for public repositories
- ✅ Heroku deployments: No additional cost (same as manual deployments)
- ✅ Your monthly Heroku cost remains $10 (covered by credits)

Auto-deploy **does not increase your Heroku costs** - you're still running the same apps on the same dynos.
