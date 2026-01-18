import pytest
from fastapi.testclient import TestClient
from app.main import app


@pytest.fixture
def client():
    """Test client fixture"""
    return TestClient(app)


@pytest.fixture
def sample_message():
    """Sample message for testing"""
    return {
        "message": "Hello, I need assistance",
        "language": "en"
    }
