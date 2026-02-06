#!/bin/bash

# 🚀 VirtuServe Heroku Deployment - Step by Step
# Run this script or copy-paste the commands one by one

echo "======================================"
echo "🚀 VirtuServe Heroku Deployment"
echo "======================================"
echo ""
echo "This will guide you through deploying your app to Heroku"
echo "and configuring your custom domain: virtuserveva.com"
echo ""

# Step 1: Check Heroku CLI
echo "Step 1: Checking Heroku CLI..."
if command -v heroku &> /dev/null; then
    echo "✅ Heroku CLI is installed"
    heroku --version
else
    echo "❌ Heroku CLI not found. Installing..."
    echo "Run: brew tap heroku/brew && brew install heroku"
    exit 1
fi

echo ""
echo "Step 2: Login to Heroku"
echo "Press Enter to continue..."
read
heroku login

echo ""
echo "Step 3: Create Backend App"
echo "This will host your FastAPI backend"
echo ""
read -p "Enter backend app name (leave blank for random name): " BACKEND_APP

if [ -z "$BACKEND_APP" ]; then
    echo "Creating app with random name..."
    BACKEND_OUTPUT=$(heroku create 2>&1)
    BACKEND_APP=$(echo "$BACKEND_OUTPUT" | grep -o 'https://git.heroku.com/[^.]*\.git' | sed 's/https:\/\/git.heroku.com\///;s/\.git//')
else
    heroku create $BACKEND_APP
fi

echo "✅ Backend app: $BACKEND_APP"

echo ""
echo "Step 4: Configure Backend"
heroku buildpacks:set heroku/python -a $BACKEND_APP

echo "Setting environment variables..."
heroku config:set \
  API_HOST=0.0.0.0 \
  ENVIRONMENT=production \
  ALLOWED_ORIGINS=https://virtuserveva.com,https://www.virtuserveva.com \
  -a $BACKEND_APP

echo ""
echo "Step 5: Create Frontend App"
echo "This will host your Next.js frontend"
echo ""
read -p "Enter frontend app name (leave blank for random name): " FRONTEND_APP

if [ -z "$FRONTEND_APP" ]; then
    echo "Creating app with random name..."
    FRONTEND_OUTPUT=$(heroku create 2>&1)
    FRONTEND_APP=$(echo "$FRONTEND_OUTPUT" | grep -o 'https://git.heroku.com/[^.]*\.git' | sed 's/https:\/\/git.heroku.com\///;s/\.git//')
else
    heroku create $FRONTEND_APP
fi

echo "✅ Frontend app: $FRONTEND_APP"

echo ""
echo "Step 6: Configure Frontend Buildpacks"
echo "Adding subdir buildpack for monorepo..."
heroku buildpacks:add -i 1 https://github.com/timanovsky/subdir-heroku-buildpack.git -a $FRONTEND_APP
heroku buildpacks:add heroku/nodejs -a $FRONTEND_APP

echo "Setting environment variables..."
heroku config:set \
  PROJECT_PATH=frontend \
  NEXT_PUBLIC_API_URL=https://$BACKEND_APP.herokuapp.com \
  NODE_ENV=production \
  -a $FRONTEND_APP

echo ""
echo "Step 7: Add Git Remotes"
git remote add heroku-backend https://git.heroku.com/$BACKEND_APP.git
git remote add heroku-frontend https://git.heroku.com/$FRONTEND_APP.git

echo ""
echo "✅ Apps created successfully!"
echo ""
echo "======================================"
echo "📦 Now deploy your apps:"
echo "======================================"
echo ""
echo "1️⃣  Deploy Backend:"
echo "   git push heroku-backend develop:main"
echo ""
echo "2️⃣  Deploy Frontend:"
echo "   git push heroku-frontend develop:main"
echo ""
echo "3️⃣  Add Custom Domain:"
echo "   heroku domains:add virtuserveva.com -a $FRONTEND_APP"
echo "   heroku domains:add www.virtuserveva.com -a $FRONTEND_APP"
echo ""
echo "4️⃣  Get DNS Targets:"
echo "   heroku domains -a $FRONTEND_APP"
echo ""
echo "5️⃣  Configure DNS at your domain registrar:"
echo "   - Add ALIAS/CNAME record for @ pointing to Heroku DNS target"
echo "   - Add CNAME record for www pointing to Heroku DNS target"
echo ""
echo "6️⃣  Verify Deployment:"
echo "   heroku open -a $BACKEND_APP"
echo "   heroku open -a $FRONTEND_APP"
echo ""
echo "======================================"
echo "🔍 Useful Commands:"
echo "======================================"
echo "View logs:"
echo "  heroku logs --tail -a $BACKEND_APP"
echo "  heroku logs --tail -a $FRONTEND_APP"
echo ""
echo "Check status:"
echo "  heroku ps -a $BACKEND_APP"
echo "  heroku ps -a $FRONTEND_APP"
echo ""
echo "Restart app:"
echo "  heroku restart -a $BACKEND_APP"
echo ""
echo "======================================"
echo ""
echo "Would you like to deploy now? (y/n)"
read -p "> " DEPLOY_NOW

if [ "$DEPLOY_NOW" = "y" ] || [ "$DEPLOY_NOW" = "Y" ]; then
    echo ""
    echo "🚀 Deploying Backend..."
    git push heroku-backend develop:main
    
    echo ""
    echo "🎨 Deploying Frontend..."
    git push heroku-frontend develop:main
    
    echo ""
    echo "✅ Deployment complete!"
    echo ""
    echo "Your apps are live at:"
    echo "  Backend:  https://$BACKEND_APP.herokuapp.com"
    echo "  Frontend: https://$FRONTEND_APP.herokuapp.com"
    echo ""
    echo "Next: Configure your custom domain virtuserveva.com"
    echo "Run: heroku domains:add virtuserveva.com -a $FRONTEND_APP"
else
    echo ""
    echo "Skipping deployment. Run the commands above when ready."
fi

echo ""
echo "======================================"
echo "📚 Documentation:"
echo "======================================"
echo "See QUICKSTART_HEROKU.md for quick reference"
echo "See HEROKU_DEPLOYMENT_GUIDE.md for detailed guide"
echo ""
