# VirtuServe - Professional Virtual Assistant Services

> **Empowering businesses worldwide with exceptional virtual assistant services**

A modern, full-stack web application for professional virtual assistant services. Built with FastAPI (Python), Next.js 14 (React/TypeScript), Tailwind CSS, and fully containerized with Docker.

## 🚀 Features

- **Modern Stack**: Next.js 14, FastAPI, TypeScript, Tailwind CSS
- **Responsive Design**: Mobile-first, accessible across all devices
- **SEO Optimized**: Meta tags, structured data, sitemap, robots.txt, Google Analytics, Tag Manager
- **Contact & Booking**: Forms with validation, Calendly integration
- **Production-Ready**: Docker, CI/CD pipelines, comprehensive tests
- **API Documentation**: Auto-generated Swagger UI and ReDoc
- **Performance Monitoring**: Core Web Vitals tracking, custom performance metrics
- **Analytics Integration**: Google Analytics 4, Google Tag Manager, Search Console ready

## 📋 Prerequisites

| Software | Version | Required |
|----------|---------|----------|
| Python | 3.13.x | Yes (⚠️ Not 3.14) |
| Node.js | 20.x LTS | Yes |
| Docker | 24.x+ | Optional |
| Git | 2.x | Yes |

**Install Python 3.13:**
```bash
# macOS
brew install python@3.13

# Ubuntu/Debian
sudo apt install python3.13 python3.13-venv

# Verify
python3.13 --version
```

## 🛠️ Installation

### Quick Start (Automated)

```bash
# Clone repository
git clone https://github.com/ClaytonSiby/VirtuServe.git
cd VirtuServe

# Fix Python environment and install dependencies
./fix-python-venv.sh

# Install frontend dependencies
cd frontend && npm install

# Start development servers
make dev
```

### Manual Setup

**Backend:**
```bash
cd backend
python3.13 -m venv venv
source venv/bin/activate  # Windows: venv\Scripts\activate
pip install --upgrade pip
pip install -r requirements.txt
uvicorn app.main:app --reload --host 0.0.0.0 --port 8000
```

**Frontend:**
```bash
cd frontend
npm install
npm run dev
```

**Docker:**
```bash
# Development
docker-compose -f docker-compose.dev.yml up

# Production
docker-compose up -d
```

## 🔧 Configuration

Create environment files:

**Backend** (`backend/.env`):
```bash
API_HOST=0.0.0.0
API_PORT=8000
CORS_ORIGINS=http://localhost:3000,https://yourdomain.com
```

**Frontend** (`frontend/.env`):
```bash
NEXT_PUBLIC_API_URL=http://localhost:8000
NEXT_PUBLIC_SITE_URL=http://localhost:3000
NEXT_PUBLIC_CALENDLY_URL=https://calendly.com/your-username/discovery-call

# Google Services (for production)
NEXT_PUBLIC_GA_MEASUREMENT_ID=G-XXXXXXXXXX
NEXT_PUBLIC_GTM_ID=GTM-XXXXXXX
NEXT_PUBLIC_GOOGLE_SITE_VERIFICATION=your-verification-code
```

> 📚 **SEO Setup:** See [SEO_QUICK_START.md](./docs/SEO_QUICK_START.md) for Google Services setup.
> 
> 🚀 **Production Config:** See [PRODUCTION_ENV_SETUP.md](./docs/PRODUCTION_ENV_SETUP.md) for Heroku and GitHub Pages environment variable setup.

## 🌐 Access

- Frontend: http://localhost:3000
- Backend API: http://localhost:8000
- API Docs: http://localhost:8000/docs
- Health Check: http://localhost:8000/api/health


## 🧪 Testing

```bash
# All tests
make test

# Backend only
cd backend && source venv/bin/activate && pytest

# Frontend only
cd frontend && npm test

# With coverage
pytest --cov=app --cov-report=html
npm test -- --coverage
```

## 📝 API Endpoints

**Health Check**
```
GET /api/health
```

**Contact Form**
```
POST /api/contact
{
  "name": "John Doe",
  "email": "john@example.com",
  "message": "I'm interested in your services"
}
```

**Booking**
```
POST /api/booking
{
  "name": "Jane Doe",
  "email": "jane@example.com",
  "date": "2026-02-15",
  "time": "10:00",
  "timezone": "America/New_York"
}
```

**Get Availability**
```
GET /api/availability
```

## 🚀 Deployment

**Heroku (Production)**
- Push to `main` branch auto-deploys via GitHub Actions
- Backend: `virtuserve-api-8d1e0b1a84d7.herokuapp.com`
- Frontend: `virtuserveva.com`

**GitHub Pages (Develop)**
- Push to `develop` branch auto-deploys to `claytonsiby.github.io/VirtuServe`

**Manual Deploy:**
```bash
# Backend
git subtree push --prefix backend heroku-backend main

# Frontend
git subtree push --prefix frontend heroku-frontend main
```

## 🐛 Troubleshooting

**Python 3.14 version error:**
```bash
rm -rf backend/venv .venv
./fix-python-venv.sh
```

**Backend not connecting:**
```bash
curl http://localhost:8000/api/health
# Check CORS settings and .env configuration
```

**Frontend build errors:**
```bash
cd frontend
rm -rf .next node_modules
npm install
npm run build
```

## 📁 Project Structure

```
virtuserve/
├── backend/                # FastAPI API
│   ├── app/
│   │   ├── api/routes/    # Health, contact, assistant endpoints
│   │   ├── models/        # Pydantic models
│   │   └── services/      # Business logic
│   ├── tests/             # pytest tests
│   └── venv/              # Virtual environment (local)
├── frontend/              # Next.js 14 App
│   ├── src/
│   │   ├── app/          # Pages (home, about, services, contact)
│   │   ├── components/   # React components
│   │   └── lib/          # API client, utilities
│   └── public/           # Static assets
├── .github/workflows/    # CI/CD pipelines
├── docker-compose.yml    # Production Docker config
├── Makefile             # Development commands
└── fix-python-venv.sh   # Python setup helper
```

## 🤝 Contributing

1. Fork the repository
2. Create feature branch: `git checkout -b feature/name`
3. Commit changes: `git commit -m "Add feature"`
4. Push: `git push origin feature/name`
5. Open Pull Request

## 📧 Contact

**VirtuServe** - Professional Virtual Assistant Services

- 🌐 [virtuserveva.com](https://virtuserveva.com)
- 📧 info@virtuserveva.com
- 📅 [Book Discovery Call](https://calendly.com/virtuserve)

---

**Built with Next.js, FastAPI, Tailwind CSS, Docker**
