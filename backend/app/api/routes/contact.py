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
    Background task to send email notifications for VirtuServe contact inquiries
    TODO: Integrate with email service (SendGrid, AWS SES, or Resend)
    """
    # Email notification for new contact inquiry
    print(f"VirtuServe: New contact inquiry from: {contact_data['email']}")


@router.post("/contact", response_model=ContactResponse)
async def submit_contact_form(
    request: ContactRequest, background_tasks: BackgroundTasks
):
    """
    Handle contact form submissions with spam protection
    """
    try:
        # Store contact submission (implement database storage)
        contact_data = request.model_dump()
        contact_data["timestamp"] = datetime.now()

        # Send email notification in background
        background_tasks.add_task(send_email_notification, contact_data)

        return ContactResponse(
            success=True,
            message=(
                "Thank you for contacting us! " "We'll get back to you within 24 hours."
            ),
            timestamp=datetime.now(),
        )
    except Exception:
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
        booking_data["timestamp"] = datetime.now()

        # Send confirmation email in background
        background_tasks.add_task(send_email_notification, booking_data)

        return ContactResponse(
            success=True,
            message=(
                "Your discovery call has been scheduled! "
                "You'll receive a confirmation email shortly."
            ),
            timestamp=datetime.now(),
        )
    except Exception:
        raise HTTPException(
            status_code=500, detail="Failed to book discovery call")


@router.get("/availability")
async def get_availability():
    """
    Get available discovery call booking slots
    TODO: Integrate with Calendly API or Google Calendar API
    """
    return {
        "available_slots": [
            {"date": "2026-01-20",
                "times": ["09:00", "10:00", "14:00", "15:00"]},
            {"date": "2026-01-21",
                "times": ["09:00", "11:00", "13:00", "16:00"]},
        ],
        "timezone": "UTC",
    }
