#!/bin/bash

# VirtuServe Heroku Deployment Script
# This script helps deploy both backend and frontend to Heroku

set -e

echo "🚀 VirtuServe Heroku Deployment Script"
echo "======================================="
echo ""

# Colors
GREEN='\033[0;32m'
BLUE='\033[0;34m'
RED='\033[0;31m'
NC='\033[0m' # No Color

# Check if Heroku CLI is installed
if ! command -v heroku &> /dev/null; then
    echo -e "${RED}❌ Heroku CLI is not installed${NC}"
    echo "Install it with: brew tap heroku/brew && brew install heroku"
    exit 1
fi

echo -e "${GREEN}✅ Heroku CLI is installed${NC}"

# Login check
if ! heroku auth:whoami &> /dev/null; then
    echo -e "${BLUE}🔐 Please login to Heroku${NC}"
    heroku login
fi

echo ""
echo "Select deployment option:"
echo "1. Deploy Backend Only"
echo "2. Deploy Frontend Only"
echo "3. Deploy Both (Recommended)"
echo "4. Setup New Apps"
echo ""
read -p "Enter your choice (1-4): " choice

case $choice in
    1)
        echo -e "${BLUE}📦 Deploying Backend...${NC}"
        read -p "Enter backend app name (e.g., virtuserve-api): " backend_app
        
        # Check if app exists
        if heroku apps:info -a $backend_app &> /dev/null; then
            echo -e "${GREEN}App exists, deploying...${NC}"
            git push heroku develop:main
        else
            echo -e "${RED}App doesn't exist. Please create it first with option 4${NC}"
            exit 1
        fi
        ;;
    
    2)
        echo -e "${BLUE}🎨 Deploying Frontend...${NC}"
        read -p "Enter frontend app name (e.g., virtuserve-web): " frontend_app
        
        if heroku apps:info -a $frontend_app &> /dev/null; then
            echo -e "${GREEN}App exists, deploying...${NC}"
            git push heroku develop:main
        else
            echo -e "${RED}App doesn't exist. Please create it first with option 4${NC}"
            exit 1
        fi
        ;;
    
    3)
        echo -e "${BLUE}🚀 Deploying Both Apps...${NC}"
        read -p "Enter backend app name: " backend_app
        read -p "Enter frontend app name: " frontend_app
        
        echo -e "${BLUE}Deploying backend...${NC}"
        git push https://git.heroku.com/$backend_app.git develop:main
        
        echo -e "${BLUE}Deploying frontend...${NC}"
        git push https://git.heroku.com/$frontend_app.git develop:main
        
        echo -e "${GREEN}✅ Both apps deployed!${NC}"
        ;;
    
    4)
        echo -e "${BLUE}🆕 Setting up new Heroku apps...${NC}"
        
        read -p "Enter backend app name (e.g., virtuserve-api): " backend_app
        read -p "Enter frontend app name (e.g., virtuserve-web): " frontend_app
        
        # Create backend app
        echo -e "${BLUE}Creating backend app...${NC}"
        heroku create $backend_app
        heroku buildpacks:set heroku/python -a $backend_app
        
        # Set backend environment variables
        heroku config:set API_HOST=0.0.0.0 -a $backend_app
        heroku config:set ENVIRONMENT=production -a $backend_app
        heroku config:set ALLOWED_ORIGINS=https://virtuserveva.com,https://www.virtuserveva.com,https://$frontend_app.herokuapp.com -a $backend_app
        
        # Create frontend app
        echo -e "${BLUE}Creating frontend app...${NC}"
        heroku create $frontend_app
        heroku buildpacks:add -i 1 https://github.com/timanovsky/subdir-heroku-buildpack.git -a $frontend_app
        heroku buildpacks:add heroku/nodejs -a $frontend_app
        heroku config:set PROJECT_PATH=frontend -a $frontend_app
        heroku config:set NEXT_PUBLIC_API_URL=https://$backend_app.herokuapp.com -a $frontend_app
        heroku config:set NODE_ENV=production -a $frontend_app
        
        # Add git remotes
        git remote add heroku-backend https://git.heroku.com/$backend_app.git
        git remote add heroku-frontend https://git.heroku.com/$frontend_app.git
        
        echo -e "${GREEN}✅ Apps created successfully!${NC}"
        echo ""
        echo "Next steps:"
        echo "1. Deploy backend: git push heroku-backend develop:main"
        echo "2. Deploy frontend: git push heroku-frontend develop:main"
        echo "3. Add custom domain: heroku domains:add virtuserveva.com -a $frontend_app"
        ;;
    
    *)
        echo -e "${RED}Invalid choice${NC}"
        exit 1
        ;;
esac

echo ""
echo -e "${GREEN}✅ Deployment complete!${NC}"
echo ""
echo "Useful commands:"
echo "  heroku logs --tail -a <app-name>  # View logs"
echo "  heroku open -a <app-name>         # Open app in browser"
echo "  heroku ps -a <app-name>           # Check dyno status"
echo ""
