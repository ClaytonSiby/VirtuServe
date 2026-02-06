# VirtuServe - Professional Virtual Assistant Services Website

A modern, SEO-optimized website for virtual assistant services targeting international clients and companies. Built with FastAPI (backend) and Next.js (frontend), fully dockerized with comprehensive testing.

## 🎯 Overview

VirtuServe is a professional marketing website for virtual assistant services featuring:
- **Home**: Digital storefront with compelling introduction and service overview
- **Services**: Detailed breakdown of VA offerings (administrative support, customer service, digital marketing, etc.)
- **About**: Professional background and experience to build trust with international clients
- **Portfolio**: Client testimonials and case studies
- **Contact**: Professional contact forms with integrated booking system for discovery calls

## 🚀 Features

### Frontend Features
- **Modern Stack**: Next.js 14 with TypeScript and Tailwind CSS
- **Mobile-Friendly Design**: Fully responsive across all devices
- **SEO Optimized**: Proper meta tags, structured data, sitemap, and robots.txt
- **Fast Loading**: Optimized for performance (loads in under 2 seconds)
- **Secure**: HTTPS ready with proper security headers

### Backend Features
- **FastAPI**: Modern Python web framework
- **Contact Forms**: With spam protection and email notifications
- **Calendly Integration**: Seamless booking system for discovery calls integrated with Calendly
- **Professional Email**: Support for custom domain email addresses

### What's Included
✅ Booking Calendar System - Integrated scheduling for discovery calls  
✅ Contact Forms - Professional forms with spam protection  
✅ Mobile-Friendly Design - Perfect on phones, tablets, and desktops  
✅ Custom Domain Support - Professional web address  
✅ Professional Email Addresses - Up to 5 custom email addresses  
✅ Fast Loading & Secure - HTTPS security, optimized performance  
✅ Search Engine Optimization - Basic SEO setup for Google visibility  
✅ Modern, Clean Design - Professional design for international clients

## 📋 Prerequisites

- Docker & Docker Compose
- Python 3.11+ (for local development)
- Node.js 20+ (for local development)
- Make (optional, for using Makefile commands)

## 🛠️ Quick Start

### Using Make (Recommended)

1. **View all available commands:**
   ```bash
   make help
   ```

2. **Start the application in production mode:**
   ```bash
   make up
   ```

3. **Start the application in development mode:**
   ```bash
   make dev
   ```

4. **Run tests:**
   ```bash
   make test
   ```

### Using Docker Compose

1. **Production mode:**
   ```bash
   docker-compose up -d
   ```

2. **Development mode:**
   ```bash
   docker-compose -f docker-compose.dev.yml up
   ```

## 🌐 Access the Application

- **Frontend**: http://localhost:3000
- **Backend API**: http://localhost:8000
- **API Documentation**: http://localhost:8000/docs
- **Health Check**: http://localhost:8000/api/health

## 📁 Project Structure

```
virtuserve/
├── backend/                 # FastAPI backend
│   ├── app/
│   │   ├── api/
│   │   │   └── routes/
│   │   │       ├── health.py       # Health check endpoint
│   │   │       └── contact.py      # Contact & booking endpoints
│   │   ├── models/          # Data models
│   │   ├── services/        # Business logic
│   │   └── main.py         # Application entry point
│   ├── tests/              # Backend tests
│   ├── Dockerfile
│   ├── requirements.txt
│   └── pytest.ini
├── frontend/               # Next.js frontend
│   ├── src/
│   │   ├── app/
│   │   │   ├── page.tsx            # Home page
│   │   │   ├── services/page.tsx   # Services page
│   │   │   ├── about/page.tsx      # About page
│   │   │   ├── portfolio/page.tsx  # Portfolio page
│   │   │   ├── contact/page.tsx    # Contact page
│   │   │   ├── layout.tsx          # Root layout
│   │   │   └── sitemap.ts          # SEO sitemap
│   │   ├── components/
│   │   │   ├── Navigation.tsx      # Main navigation
│   │   │   └── Footer.tsx          # Site footer
│   │   ├── lib/
│   │   │   ├── api.ts             # API client
│   │   │   └── seo.ts             # SEO utilities
│   │   └── __tests__/     # Frontend tests
│   ├── public/
│   │   ├── robots.txt              # SEO robots file
│   │   └── schema.json             # Structured data
│   ├── Dockerfile
│   ├── package.json
│   └── next.config.js
├── docker-compose.yml      # Production Docker Compose
├── docker-compose.dev.yml  # Development Docker Compose
├── Makefile               # Build and deployment commands
└── README.md
```

## 🧪 Testing

### Run All Tests
```bash
make test
```

### Backend Tests Only
```bash
make test-backend
```

### Frontend Tests Only
```bash
make test-frontend
```

### Test Coverage
```bash
make test-coverage
```

## 🎨 Code Quality

### Lint All Code
```bash
make lint
```

### Format All Code
```bash
make format
```

## 🔧 Development

### Local Backend Development
```bash
cd backend
python -m venv venv
source venv/bin/activate  # On Windows: venv\Scripts\activate
pip install -r requirements.txt
uvicorn app.main:app --reload
```

### Local Frontend Development
```bash
cd frontend
npm install
npm run dev
```

### Environment Variables

Copy the example environment files and configure as needed:

```bash
cp .env.example .env
cp backend/.env.example backend/.env
cp frontend/.env.example frontend/.env
```

**Important Variables:**
- `NEXT_PUBLIC_API_URL`: Backend API URL
- `NEXT_PUBLIC_SITE_URL`: Your website URL (for SEO)
- `NEXT_PUBLIC_CALENDLY_URL`: Your Calendly scheduling link (e.g., https://calendly.com/your-username/discovery-call)
- Email service credentials (SendGrid, AWS SES, etc.)

## 🐳 Docker Commands

### View Running Containers
```bash
make ps
```

### View Logs
```bash
make logs              # All services
make logs-backend      # Backend only
make logs-frontend     # Frontend only
```

### Shell Access
```bash
make shell-backend     # Access backend container
make shell-frontend    # Access frontend container
```

### Stop Services
```bash
make down
```

### Clean Up
```bash
make clean             # Remove containers and build artifacts
make clean-all         # Deep clean including node_modules
```

## 📝 API Documentation

Once the backend is running, visit:
- **Swagger UI**: http://localhost:8000/docs
- **ReDoc**: http://localhost:8000/redoc

## 🔌 API Endpoints

### Health Check
```
GET /api/health
```

### Contact Form
```
POST /api/contact
{
  "name": "John Doe",
  "email": "john@example.com",
  "company": "Company Inc",
  "phone": "+1234567890",
  "service": "administrative",
  "message": "I need assistance with..."
}
```

### Book Discovery Call
```
POST /api/booking
{
  "name": "Jane Smith",
  "email": "jane@example.com",
  "phone": "+1234567890",
  "date": "2026-01-20",
  "time": "10:00",
  "timezone": "UTC",
  "message": "Looking forward to discussing..."
}
```

### Get Available Slots
GET /api/availability
```

## 🚢 Production Deployment

### Deployment Strategy

This project uses a **multi-environment deployment strategy**:

- **Production (Heroku)**: Deployed from `main` branch
  - Frontend: https://virtuserveva.com
  - Backend: https://virtuserve-api-8d1e0b1a84d7.herokuapp.com
  
- **QA/UAT (GitHub Pages)**: Deployed from `develop` branch
  - URL: https://claytonsiby.github.io/VirtuServe
  - Automatically deploys on push via GitHub Actions

### Quick Deploy to Production

**Using the deployment script:**

```bash
# Ensure you're on main branch
git checkout main
git pull origin main

# If you have changes in develop, merge them first
git merge develop

# Deploy to Heroku (frontend + backend)
./deploy-production.sh
```

**Manual deployment:**

```bash
# Deploy backend
git subtree push --prefix backend heroku-backend main

# Deploy frontend
git subtree push --prefix frontend heroku-frontend main
```

> 📖 **For detailed deployment instructions**, see [DEPLOYMENT.md](DEPLOYMENT.md)

### Build Production Images (Docker)
```bash
make build
```

### Start Production Services (Docker)
```bash
make prod
```

### Calendly Integration Setup

The application uses Calendly for scheduling discovery calls. To set it up:

1. **Create a Calendly Account** (if you don't have one)
   - Visit https://calendly.com and sign up
   - Create an event type for your discovery calls (e.g., "30-Minute Discovery Call")

2. **Get Your Calendly URL**
   - In Calendly, go to your event type
   - Copy the scheduling link (e.g., `https://calendly.com/your-username/discovery-call`)

3. **Configure Environment Variable**
   - Add to `frontend/.env`:
     ```
     NEXT_PUBLIC_CALENDLY_URL=https://calendly.com/your-username/discovery-call
     ```

4. **Customize Your Calendly Settings**
   - Set your availability hours
   - Configure time zones
   - Add custom questions
   - Set up email notifications
   - Customize booking confirmation messages

The Calendly widget is embedded on the contact page and matches your site's branding with primary color (#1e40af).

### Deployment Checklist
- [ ] Configure custom domain
- [ ] Set up professional email addresses
- [ ] Configure SSL/HTTPS certificates
- [ ] Set up email service (SendGrid, AWS SES)
- [ ] Set up Calendly account and configure discovery call event type
- [ ] Add NEXT_PUBLIC_CALENDLY_URL to frontend environment variables
- [ ] Set up analytics (Google Analytics, Plausible)
- [ ] Configure environment variables
- [ ] Test contact form submissions
- [ ] Test Calendly booking widget
- [ ] Test booking system
- [ ] Verify SEO meta tags
- [ ] Submit sitemap to search engines
- [ ] Test mobile responsiveness
- [ ] Run performance audits

## 🔐 Security

- Never commit `.env` files
- Use environment variables for sensitive data
- Keep dependencies updated
- Enable HTTPS in production
- Implement rate limiting for contact forms
- Add CAPTCHA for spam protection (recommended)

## 📚 Tech Stack

**Frontend:**
- Next.js 14 (App Router)
- React 18
- TypeScript
- Tailwind CSS
- Lucide React (icons)
- Jest & React Testing Library

**Backend:**
- FastAPI
- Python 3.11
- Pydantic
- Pytest
- Uvicorn

**Infrastructure:**
- Docker
- Docker Compose
- Make

## 🎯 Roadmap

- [ ] Add database integration (PostgreSQL) for storing contacts and bookings
- [ ] Implement email service integration (SendGrid/AWS SES)
- [ ] Add calendar API integration (Google Calendar/Calendly)
- [ ] Implement CAPTCHA for form spam protection
- [ ] Add analytics tracking (Google Analytics)
- [ ] Create blog section for content marketing
- [ ] Add multi-language support
- [ ] Implement admin dashboard
- [ ] Add client portal functionality
- [ ] Set up automated email responses

## 📄 Customization Guide

### Updating Content

1. **Company Information**: Update in `frontend/src/components/Footer.tsx`
2. **Services Offered**: Modify `frontend/src/app/services/page.tsx`
3. **About Story**: Edit `frontend/src/app/about/page.tsx`
4. **Testimonials**: Update `frontend/src/app/portfolio/page.tsx`
5. **Contact Details**: Modify `frontend/src/app/contact/page.tsx`
6. **SEO Metadata**: Update `frontend/src/lib/seo.ts`

### Branding

1. **Colors**: Update `frontend/tailwind.config.js`
2. **Logo**: Replace in `frontend/public/`
3. **Images**: Add to `frontend/public/`
4. **Fonts**: Update in `frontend/src/app/globals.css`

## 🤝 Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## 📄 License

This project is licensed under the MIT License.

## 🙋 Support

For support, please:
- Open an issue in the repository
- Email: hello@virtuserve.com
- Visit: https://virtuserve.com/contact

---

**Built with ❤️ for virtual assistants serving international clients**

## 🚀 Features

- **Modern Stack**: FastAPI backend + Next.js frontend
- **Real-time Chat**: Interactive chat interface with AI assistant
- **Multi-language Support**: Built for international clients
- **Dockerized**: Fully containerized application
- **Test Coverage**: Comprehensive test suites for both frontend and backend
- **Development Ready**: Hot-reload enabled for fast development

## 📋 Prerequisites

- Docker & Docker Compose
- Python 3.11+ (for local development)
- Node.js 20+ (for local development)
- Make (optional, for using Makefile commands)

## 🛠️ Quick Start

### Using Make (Recommended)

1. **View all available commands:**
   ```bash
   make help
   ```

2. **Start the application in production mode:**
   ```bash
   make up
   ```

3. **Start the application in development mode:**
   ```bash
   make dev
   ```

4. **Run tests:**
   ```bash
   make test
   ```

### Using Docker Compose

1. **Production mode:**
   ```bash
   docker-compose up -d
   ```

2. **Development mode:**
   ```bash
   docker-compose -f docker-compose.dev.yml up
   ```

## 🌐 Access the Application

- **Frontend**: http://localhost:3000
- **Backend API**: http://localhost:8000
- **API Documentation**: http://localhost:8000/docs
- **Health Check**: http://localhost:8000/api/health

## 📁 Project Structure

```
virtuserve/
├── backend/                 # FastAPI backend
│   ├── app/
│   │   ├── api/            # API routes
│   │   ├── models/         # Data models
│   │   ├── services/       # Business logic
│   │   └── main.py         # Application entry point
│   ├── tests/              # Backend tests
│   ├── Dockerfile
│   ├── requirements.txt
│   └── pytest.ini
├── frontend/               # Next.js frontend
│   ├── src/
│   │   ├── app/           # Next.js app directory
│   │   ├── components/    # React components
│   │   ├── lib/           # Utilities and API client
│   │   └── __tests__/     # Frontend tests
│   ├── Dockerfile
│   ├── package.json
│   └── jest.config.js
├── docker-compose.yml      # Production Docker Compose
├── docker-compose.dev.yml  # Development Docker Compose
├── Makefile               # Build and deployment commands
└── README.md
```

## 🧪 Testing

### Run All Tests
```bash
make test
```

### Backend Tests Only
```bash
make test-backend
```

### Frontend Tests Only
```bash
make test-frontend
```

### Test Coverage
```bash
make test-coverage
```

## 🎨 Code Quality

### Lint All Code
```bash
make lint
```

### Format All Code
```bash
make format
```

### Backend Linting
```bash
make lint-backend
```

### Frontend Linting
```bash
make lint-frontend
```

## 🔧 Development

### Local Backend Development
```bash
cd backend
python -m venv venv
source venv/bin/activate  # On Windows: venv\Scripts\activate
pip install -r requirements.txt
uvicorn app.main:app --reload
```

### Local Frontend Development
```bash
cd frontend
npm install
npm run dev
```

### Environment Variables

Copy the example environment files and configure as needed:

```bash
cp .env.example .env
cp backend/.env.example backend/.env
cp frontend/.env.example frontend/.env
```

## 🐳 Docker Commands

### View Running Containers
```bash
make ps
```

### View Logs
```bash
make logs              # All services
make logs-backend      # Backend only
make logs-frontend     # Frontend only
```

### Shell Access
```bash
make shell-backend     # Access backend container
make shell-frontend    # Access frontend container
```

### Stop Services
```bash
make down
```

### Clean Up
```bash
make clean             # Remove containers and build artifacts
make clean-all         # Deep clean including node_modules
```

## 🏥 Health Checks

Check the health of all services:
```bash
make health
```

Or manually:
- Backend: `curl http://localhost:8000/api/health`
- Frontend: `curl http://localhost:3000`

## 📝 API Documentation

Once the backend is running, visit:
- **Swagger UI**: http://localhost:8000/docs
- **ReDoc**: http://localhost:8000/redoc

## 🔌 API Endpoints

### Health Check
```
GET /api/health
```

### Chat with Assistant
```
POST /api/assistant/chat
{
  "message": "Hello, I need assistance",
  "conversation_id": "optional-conversation-id",
  "language": "en"
}
```

### Get Conversation History
```
GET /api/assistant/conversations/{conversation_id}
```

## 🚢 Production Deployment

### Build Production Images
```bash
make build
```

### Start Production Services
```bash
make prod
```

## 🤝 Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## 📄 License

This project is licensed under the MIT License.

## 🙋 Support

For support, please open an issue in the repository or contact the development team.

## 🎯 Roadmap

- [ ] Add database integration (PostgreSQL)
- [ ] Implement user authentication
- [ ] Add conversation history persistence
- [ ] Integrate with AI providers (OpenAI, Anthropic)
- [ ] Add WebSocket support for real-time updates
- [ ] Implement file upload capabilities
- [ ] Add multi-language UI support
- [ ] Create admin dashboard
- [ ] Add analytics and monitoring
- [ ] Implement rate limiting

## 🔐 Security

- Never commit `.env` files
- Use environment variables for sensitive data
- Keep dependencies updated
- Follow security best practices

## 📚 Tech Stack

**Backend:**
- FastAPI
- Python 3.11
- Pydantic
- Pytest
- Uvicorn

**Frontend:**
- Next.js 14
- React 18
- TypeScript
- Tailwind CSS
- Jest & React Testing Library

**Infrastructure:**
- Docker
- Docker Compose
- Make
