.PHONY: help install build up down restart logs clean test test-backend test-frontend lint format dev prod venv

# Default target
help:
	@echo "VirtuServe - Virtual Assistant Application"
	@echo ""
	@echo "Available commands:"
	@echo "  make venv             - Create Python virtual environment"
	@echo "  make install          - Install all dependencies (backend + frontend)"
	@echo "  make build            - Build Docker images"
	@echo "  make up               - Start all services in production mode"
	@echo "  make dev              - Start all services in development mode with hot-reload"
	@echo "  make down             - Stop all services"
	@echo "  make restart          - Restart all services"
	@echo "  make logs             - View logs from all services"
	@echo "  make logs-backend     - View backend logs"
	@echo "  make logs-frontend    - View frontend logs"
	@echo "  make clean            - Remove containers, volumes, and build artifacts"
	@echo "  make test             - Run all tests (backend + frontend)"
	@echo "  make test-backend     - Run backend tests"
	@echo "  make test-frontend    - Run frontend tests"
	@echo "  make lint             - Lint all code"
	@echo "  make lint-backend     - Lint backend code"
	@echo "  make lint-frontend    - Lint frontend code"
	@echo "  make format           - Format all code"
	@echo "  make format-backend   - Format backend code"
	@echo "  make format-frontend  - Format frontend code"
	@echo "  make shell-backend    - Open shell in backend container"
	@echo "  make shell-frontend   - Open shell in frontend container"
	@echo "  make db-init          - Initialize database (if needed)"
	@echo "  make health           - Check health of all services"

# Virtual Environment
venv:
	@echo "🐍 Creating Python virtual environment..."
	cd backend && python3 -m venv venv
	@echo "✅ Virtual environment created at backend/venv"
	@echo "To activate, run: source backend/venv/bin/activate"

# Installation
install: install-backend install-frontend
	@echo "✅ All dependencies installed"

install-backend:
	@echo "📦 Installing backend dependencies..."
	cd backend && pip install -r requirements.txt

install-frontend:
	@echo "📦 Installing frontend dependencies..."
	cd frontend && npm install

# Docker Build
build:
	@echo "🔨 Building Docker images..."
	docker-compose build

build-no-cache:
	@echo "🔨 Building Docker images (no cache)..."
	docker-compose build --no-cache

# Start Services
up: build
	@echo "🚀 Starting services in production mode..."
	docker-compose up -d
	@echo "✅ Services started!"
	@echo "Frontend: http://localhost:3000"
	@echo "Backend API: http://localhost:8000"
	@echo "API Docs: http://localhost:8000/docs"

dev:
	@echo "🚀 Starting services in development mode..."
	docker-compose -f docker-compose.dev.yml up
	@echo "✅ Services started in development mode!"

prod: up

# Stop Services
down:
	@echo "🛑 Stopping services..."
	docker-compose down
	docker-compose -f docker-compose.dev.yml down 2>/dev/null || true
	@echo "✅ Services stopped"

stop: down

# Restart Services
restart: down up
	@echo "✅ Services restarted"

# Logs
logs:
	docker-compose logs -f

logs-backend:
	docker-compose logs -f backend

logs-frontend:
	docker-compose logs -f frontend

# Clean
clean: down
	@echo "🧹 Cleaning up..."
	docker-compose down -v --remove-orphans
	docker-compose -f docker-compose.dev.yml down -v --remove-orphans 2>/dev/null || true
	rm -rf backend/__pycache__
	rm -rf backend/**/__pycache__
	rm -rf backend/.pytest_cache
	rm -rf backend/htmlcov
	rm -rf backend/.coverage
	rm -rf frontend/.next
	rm -rf frontend/node_modules/.cache
	rm -rf frontend/coverage
	@echo "✅ Cleanup complete"

clean-all: clean
	@echo "🧹 Deep cleaning..."
	rm -rf frontend/node_modules
	docker system prune -af --volumes
	@echo "✅ Deep cleanup complete"

# Tests
test: test-backend test-frontend
	@echo "✅ All tests completed"

test-backend:
	@echo "🧪 Running backend tests..."
	cd backend && pytest -v --cov=app --cov-report=term-missing

test-backend-watch:
	@echo "🧪 Running backend tests in watch mode..."
	cd backend && pytest-watch

test-frontend:
	@echo "🧪 Running frontend tests..."
	cd frontend && npm test

test-frontend-watch:
	@echo "🧪 Running frontend tests in watch mode..."
	cd frontend && npm run test:watch

test-coverage:
	@echo "📊 Generating test coverage reports..."
	cd backend && pytest --cov=app --cov-report=html
	cd frontend && npm run test:coverage
	@echo "✅ Coverage reports generated"
	@echo "Backend: backend/htmlcov/index.html"
	@echo "Frontend: frontend/coverage/lcov-report/index.html"

# Linting
lint: lint-backend lint-frontend
	@echo "✅ All linting completed"

lint-backend:
	@echo "🔍 Linting backend code..."
	cd backend && flake8 app tests
	cd backend && mypy app

lint-frontend:
	@echo "🔍 Linting frontend code..."
	cd frontend && npm run lint

# Formatting
format: format-backend format-frontend
	@echo "✅ All code formatted"

format-backend:
	@echo "✨ Formatting backend code..."
	cd backend && black app tests

format-frontend:
	@echo "✨ Formatting frontend code..."
	cd frontend && npm run lint -- --fix

# Shell Access
shell-backend:
	docker-compose exec backend /bin/bash

shell-frontend:
	docker-compose exec frontend /bin/sh

# Health Check
health:
	@echo "🏥 Checking service health..."
	@curl -f http://localhost:8000/api/health 2>/dev/null && echo "✅ Backend is healthy" || echo "❌ Backend is not responding"
	@curl -f http://localhost:3000 2>/dev/null && echo "✅ Frontend is healthy" || echo "❌ Frontend is not responding"

# Database (placeholder for future use)
db-init:
	@echo "📊 Database initialization..."
	@echo "ℹ️  No database configured yet"

# Development helpers
dev-backend:
	@echo "🚀 Starting backend in development mode..."
	cd backend && uvicorn app.main:app --reload --host 0.0.0.0 --port 8000

dev-frontend:
	@echo "🚀 Starting frontend in development mode..."
	cd frontend && npm run dev

# Quick commands
ps:
	docker-compose ps

stats:
	docker stats

# CI/CD helpers
ci-test: install test lint
	@echo "✅ CI tests passed"

ci-build: build
	@echo "✅ CI build complete"
