# Deployment Guide

## Overview

This project uses a multi-environment deployment strategy:

- **Production (Heroku)**: Deployed from `main` branch
- **QA/UAT (GitHub Pages)**: Deployed from `develop` branch

## Branch Strategy

- `main` - Production-ready code (deploys to Heroku)
- `develop` - QA/UAT code (deploys to GitHub Pages)

## Heroku Deployment (Production)

### Prerequisites
- Changes must be merged to `main` branch
- Ensure all tests pass on `develop` before merging

### Deployment Steps

1. **Merge develop to main**:
   ```bash
   git checkout main
   git pull origin main
   git merge develop
   git push origin main
   ```

2. **Deploy Backend to Heroku**:
   ```bash
   git subtree push --prefix backend heroku-backend main
   ```

3. **Deploy Frontend to Heroku**:
   ```bash
   git subtree push --prefix frontend heroku-frontend main
   ```

4. **Verify Deployment**:
   - Backend: https://virtuserve-api-8d1e0b1a84d7.herokuapp.com/api/health
   - Frontend: https://virtuserveva.com

### Quick Deploy Script

For convenience, you can deploy both apps at once:

```bash
#!/bin/bash
# deploy-production.sh

echo "🚀 Deploying to Production (Heroku)"

# Ensure we're on main branch
current_branch=$(git branch --show-current)
if [ "$current_branch" != "main" ]; then
    echo "❌ Error: Must be on main branch to deploy to production"
    echo "Current branch: $current_branch"
    exit 1
fi

# Deploy backend
echo "📦 Deploying backend..."
git subtree push --prefix backend heroku-backend main

# Deploy frontend
echo "🎨 Deploying frontend..."
git subtree push --prefix frontend heroku-frontend main

echo "✅ Production deployment complete!"
echo "Backend: https://virtuserve-api-8d1e0b1a84d7.herokuapp.com/api/health"
echo "Frontend: https://virtuserveva.com"
```

Make it executable:
```bash
chmod +x deploy-production.sh
./deploy-production.sh
```

## GitHub Pages Deployment (QA/UAT)

### Automatic Deployment
- Pushes to `develop` branch automatically trigger GitHub Actions
- Workflow builds and deploys to GitHub Pages
- URL: https://claytonsiby.github.io/VirtuServe

### Configuration
- GitHub Pages uses `next.config.pages.js` for static export
- Heroku uses `next.config.js` for server-side rendering
- Workflow automatically swaps configs during build

### Manual Trigger
You can manually trigger the deployment from GitHub Actions tab.

## Configuration Differences

### Heroku Configuration (`next.config.js`)
- Server-side rendering enabled
- No `output: 'export'`
- No basePath or assetPrefix
- Optimized for dynamic routes

### GitHub Pages Configuration (`next.config.pages.js`)
- Static export enabled (`output: 'export'`)
- Uses `/VirtuServe` basePath
- Pre-rendered static files only

## Environment Variables

### Heroku (Production)
```bash
# Backend
heroku config:set KEY=value --app virtuserve-api

# Frontend
heroku config:set NEXT_PUBLIC_API_URL=https://virtuserve-api-8d1e0b1a84d7.herokuapp.com --app virtuserve-web
heroku config:set NEXT_PUBLIC_SITE_URL=https://virtuserveva.com --app virtuserve-web
heroku config:set NEXT_PUBLIC_CALENDLY_URL=your_calendly_url --app virtuserve-web
```

### GitHub Pages (QA/UAT)
Set in GitHub repository secrets:
- `NEXT_PUBLIC_API_URL`: Backend API URL
- `NEXT_PUBLIC_CALENDLY_URL`: Calendly widget URL

## Rollback Procedures

### Heroku Rollback
```bash
# View recent releases
heroku releases --app virtuserve-web
heroku releases --app virtuserve-api

# Rollback to previous version
heroku rollback v# --app virtuserve-web
heroku rollback v# --app virtuserve-api
```

### GitHub Pages Rollback
- Revert the commit on `develop` branch
- Push to trigger new deployment

## Monitoring

### Heroku Logs
```bash
# Frontend logs
heroku logs --tail --app virtuserve-web

# Backend logs
heroku logs --tail --app virtuserve-api
```

### GitHub Actions
- View workflow runs in GitHub Actions tab
- Check build logs for errors

## Troubleshooting

### Heroku Deployment Fails
1. Check buildpacks: `heroku buildpacks --app APP_NAME`
2. Verify branch: Must be on `main` branch
3. Check logs: `heroku logs --tail --app APP_NAME`
4. Ensure subtree path is correct

### GitHub Pages Build Fails
1. Check GitHub Actions logs
2. Verify `next.config.pages.js` exists
3. Ensure `develop` branch is up to date
4. Check for missing environment variables

### Config Issues
- Heroku uses `next.config.js` (NO static export)
- GitHub Pages uses `next.config.pages.js` (WITH static export)
- Never swap these configs manually in the repository

## Best Practices

1. **Always test on develop first**: Merge to `develop`, test on GitHub Pages, then merge to `main`
2. **Never deploy directly from develop to Heroku**: Always use `main` branch for production
3. **Keep configs separate**: Don't modify `next.config.js` with static export settings
4. **Monitor after deployment**: Check logs and test critical paths
5. **Document changes**: Update this guide when deployment process changes
