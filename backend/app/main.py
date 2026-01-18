from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
from app.api.routes import contact, health

app = FastAPI(
    title="VirtuServe API",
    description="Professional Virtual Assistant Services API for international clients and companies",
    version="1.0.0"
)

# Configure CORS
app.add_middleware(
    CORSMiddleware,
    allow_origins=["http://localhost:3000", "http://frontend:3000"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

# Include routers
app.include_router(health.router, prefix="/api", tags=["health"])
app.include_router(
    contact.router, prefix="/api", tags=["contact"])


@app.get("/")
async def root():
    return {
        "message": "Welcome to VirtuServe API - Professional Virtual Assistant Services",
        "docs": "/docs",
        "version": "1.0.0"
    }
