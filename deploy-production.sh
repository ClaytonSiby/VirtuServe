#!/bin/bash
# deploy-production.sh - Deploy to Heroku Production

set -e  # Exit on error

echo "🚀 Deploying to Production (Heroku)"
echo ""

# Ensure we're on main branch
current_branch=$(git branch --show-current)
if [ "$current_branch" != "main" ]; then
    echo "❌ Error: Must be on main branch to deploy to production"
    echo "   Current branch: $current_branch"
    echo ""
    echo "   To deploy to production:"
    echo "   1. git checkout main"
    echo "   2. git pull origin main"
    echo "   3. git merge develop"
    echo "   4. ./deploy-production.sh"
    exit 1
fi

# Check for uncommitted changes
if ! git diff-index --quiet HEAD --; then
    echo "⚠️  Warning: You have uncommitted changes"
    read -p "   Continue anyway? (y/n) " -n 1 -r
    echo ""
    if [[ ! $REPLY =~ ^[Yy]$ ]]; then
        exit 1
    fi
fi

echo "📦 Deploying backend to Heroku..."
git subtree push --prefix backend heroku-backend main
echo "✅ Backend deployed successfully"
echo ""

echo "🎨 Deploying frontend to Heroku..."
git subtree push --prefix frontend heroku-frontend main
echo "✅ Frontend deployed successfully"
echo ""

echo "✅ Production deployment complete!"
echo ""
echo "🔗 URLs:"
echo "   Backend API:  https://virtuserve-api-8d1e0b1a84d7.herokuapp.com/api/health"
echo "   Frontend Web: https://virtuserveva.com"
echo ""
echo "📊 Monitor logs:"
echo "   heroku logs --tail --app virtuserve-api"
echo "   heroku logs --tail --app virtuserve-web"
