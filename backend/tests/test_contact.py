import pytest
from fastapi.testclient import TestClient


def test_contact_form_submission(client):
    """Test contact form endpoint"""
    payload = {
        "name": "John Doe",
        "email": "john@example.com",
        "company": "Test Company",
        "phone": "+1234567890",
        "service": "administrative",
        "message": "I need help with administrative tasks"
    }
    response = client.post("/api/contact", json=payload)
    assert response.status_code == 200
    data = response.json()
    assert data["success"] == True
    assert "timestamp" in data


def test_contact_form_invalid_email(client):
    """Test contact form with invalid email"""
    payload = {
        "name": "John Doe",
        "email": "invalid-email",
        "message": "Test message"
    }
    response = client.post("/api/contact", json=payload)
    assert response.status_code == 422  # Validation error


def test_booking_submission(client):
    """Test booking endpoint"""
    payload = {
        "name": "Jane Smith",
        "email": "jane@example.com",
        "phone": "+1234567890",
        "date": "2026-01-20",
        "time": "10:00",
        "timezone": "UTC",
        "message": "Looking forward to the call"
    }
    response = client.post("/api/booking", json=payload)
    assert response.status_code == 200
    data = response.json()
    assert data["success"] == True


def test_get_availability(client):
    """Test availability endpoint"""
    response = client.get("/api/availability")
    assert response.status_code == 200
    data = response.json()
    assert "available_slots" in data
    assert "timezone" in data
