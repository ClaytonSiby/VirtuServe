#!/bin/bash

# VirtuServe - Fix Python Virtual Environment
# This script recreates the virtual environment with Python 3.13

set -e

echo "🔧 VirtuServe - Fixing Python Virtual Environment"
echo "================================================="
echo ""

# Colors for output
RED='\033[0;31m'
GREEN='\033[0;32m'
YELLOW='\033[1;33m'
NC='\033[0m' # No Color

# Check if Python 3.13 is available
if ! command -v python3.13 &> /dev/null; then
    echo -e "${RED}❌ Python 3.13 is not installed!${NC}"
    echo ""
    echo "Please install Python 3.13:"
    echo "  macOS (Homebrew): brew install python@3.13"
    echo "  Ubuntu/Debian:    sudo apt install python3.13 python3.13-venv"
    echo "  Official:         https://www.python.org/downloads/"
    exit 1
fi

echo -e "${GREEN}✅ Python 3.13 found!${NC}"
python3.13 --version
echo ""

# Remove old virtual environments
echo "🗑️  Removing old virtual environments..."
if [ -d ".venv" ]; then
    rm -rf .venv
    echo "  - Removed root .venv"
fi

if [ -d "backend/venv" ]; then
    rm -rf backend/venv
    echo "  - Removed backend/venv"
fi

echo ""

# Create  new virtual environment
echo "🐍 Creating new virtual environment with Python 3.13..."
cd backend
python3.13 -m venv venv

echo ""
echo -e "${GREEN}✅ Virtual environment created successfully!${NC}"
echo ""

# Activate and install dependencies
echo "📦 Installing backend dependencies..."
./venv/bin/pip install --upgrade pip
./venv/bin/pip install -r requirements.txt

echo ""
echo -e "${GREEN}✅ Setup complete!${NC}"
echo ""
echo "To activate the virtual environment:"
echo "  cd backend"
echo "  source venv/bin/activate"
echo ""
echo "To start the backend server:"
echo "  cd backend"
echo "  source venv/bin/activate"
echo "  uvicorn app.main:app --reload --host 0.0.0.0 --port 8000"
echo ""
