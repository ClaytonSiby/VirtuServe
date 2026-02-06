from fastapi import APIRouter, HTTPException, BackgroundTasks
from pydantic import BaseModel, EmailStr
from typing import Optional
from datetime import datetime

router = APIRouter()


class ContactRequest(BaseModel):
    name: str
    email: EmailStr
    company: Optional[str] = None
    phone: Optional[str] = None
    service: Optional[str] = None
    message: str


class BookingRequest(BaseModel):
    name: str
    email: EmailStr
    phone: Optional[str] = None
    date: str
    time: str
    timezone: str
    message: Optional[str] = None


class ContactResponse(BaseModel):
    success: bool
    message: str
    timestamp: datetime


async def send_email_notification(contact_data: dict):
    """
    Background task to send email notifications
    In production, integrate with SendGrid, AWS SES, or similar
    """
    # Placeholder for email sending logic
    print(f"Sending email notification for: {contact_data['email']}")
    pass


@router.post("/contact", response_model=ContactResponse)
async def submit_contact_form(request: ContactRequest, background_tasks: BackgroundTasks):
    """
    Handle contact form submissions with spam protection
    """
    try:
        # Store contact submission (implement database storage)
        contact_data = request.model_dump()
        contact_data['timestamp'] = datetime.now()

        # Send email notification in background
        background_tasks.add_task(send_email_notification, contact_data)

        return ContactResponse(
            success=True,
            message="Thank you for contacting us! We'll get back to you within 24 hours.",
            timestamp=datetime.now()
        )
    except Exception as e:
        raise HTTPException(
            status_code=500, detail="Failed to submit contact form")


@router.post("/booking", response_model=ContactResponse)
async def submit_booking(request: BookingRequest, background_tasks: BackgroundTasks):
    """
    Handle discovery call booking requests
    """
    try:
        # Store booking (implement database storage)
        booking_data = request.model_dump()
        booking_data['timestamp'] = datetime.now()

        # Send confirmation email in background
        background_tasks.add_task(send_email_notification, booking_data)

        return ContactResponse(
            success=True,
            message="Your discovery call has been scheduled! You'll receive a confirmation email shortly.",
            timestamp=datetime.now()
        )
    except Exception as e:
        raise HTTPException(
            status_code=500, detail="Failed to book discovery call")


@router.get("/availability")
async def get_availability():
    """
    Get available booking slots
    In production, sync with calendar API (Google Calendar, Calendly, etc.)
    """
    # Placeholder implementation
    return {
        "available_slots": [
            {"date": "2026-01-20",
                "times": ["09:00", "10:00", "14:00", "15:00"]},
            {"date": "2026-01-21",
                "times": ["09:00", "11:00", "13:00", "16:00"]},
        ],
        "timezone": "UTC"
    }
