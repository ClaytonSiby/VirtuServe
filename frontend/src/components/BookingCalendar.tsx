"use client";

import { useState } from "react";
import {
  ChevronLeft,
  ChevronRight,
  Clock,
  Calendar as CalendarIcon,
  Check,
} from "lucide-react";

const timeSlots = [
  "09:00 AM",
  "10:00 AM",
  "11:00 AM",
  "12:00 PM",
  "01:00 PM",
  "02:00 PM",
  "03:00 PM",
  "04:00 PM",
  "05:00 PM",
];

const daysOfWeek = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];

export default function BookingCalendar() {
  const [currentDate, setCurrentDate] = useState(new Date());
  const [selectedDate, setSelectedDate] = useState<Date | null>(null);
  const [selectedTime, setSelectedTime] = useState<string | null>(null);

  const getDaysInMonth = (date: Date) => {
    const year = date.getFullYear();
    const month = date.getMonth();
    const firstDay = new Date(year, month, 1);
    const lastDay = new Date(year, month + 1, 0);
    const daysInMonth = lastDay.getDate();
    const startingDayOfWeek = firstDay.getDay();

    return { daysInMonth, startingDayOfWeek };
  };

  const { daysInMonth, startingDayOfWeek } = getDaysInMonth(currentDate);

  const goToPreviousMonth = () => {
    setCurrentDate(
      new Date(currentDate.getFullYear(), currentDate.getMonth() - 1),
    );
    setSelectedDate(null);
    setSelectedTime(null);
  };

  const goToNextMonth = () => {
    setCurrentDate(
      new Date(currentDate.getFullYear(), currentDate.getMonth() + 1),
    );
    setSelectedDate(null);
    setSelectedTime(null);
  };

  const selectDate = (day: number) => {
    const selected = new Date(
      currentDate.getFullYear(),
      currentDate.getMonth(),
      day,
    );
    setSelectedDate(selected);
    setSelectedTime(null);
  };

  const isToday = (day: number) => {
    const today = new Date();
    return (
      today.getDate() === day &&
      today.getMonth() === currentDate.getMonth() &&
      today.getFullYear() === currentDate.getFullYear()
    );
  };

  const isPast = (day: number) => {
    const today = new Date();
    today.setHours(0, 0, 0, 0);
    const checkDate = new Date(
      currentDate.getFullYear(),
      currentDate.getMonth(),
      day,
    );
    return checkDate < today;
  };

  const isSelected = (day: number) => {
    if (!selectedDate) return false;
    return (
      selectedDate.getDate() === day &&
      selectedDate.getMonth() === currentDate.getMonth() &&
      selectedDate.getFullYear() === currentDate.getFullYear()
    );
  };

  const monthYear = currentDate.toLocaleString("default", {
    month: "long",
    year: "numeric",
  });

  const formatSelectedDate = () => {
    if (!selectedDate) return "";
    return selectedDate.toLocaleDateString("default", {
      weekday: "long",
      month: "long",
      day: "numeric",
      year: "numeric",
    });
  };

  return (
    <div className="max-w-5xl mx-auto">
      <div className="grid lg:grid-cols-3 gap-8">
        {/* Calendar */}
        <div className="lg:col-span-2">
          <div className="bg-white border border-primary-200/60 rounded-3xl p-6 md:p-8 shadow-sm">
            {/* Month Navigation */}
            <div className="flex items-center justify-between mb-6 pb-6 border-b border-primary-200/40">
              <h3 className="text-2xl font-light text-primary-900">
                {monthYear}
              </h3>
              <div className="flex gap-2">
                <button
                  onClick={goToPreviousMonth}
                  className="p-2 rounded-xl border border-primary-200 hover:bg-primary-50 hover:border-accent-400 transition-all duration-300"
                  aria-label="Previous month"
                >
                  <ChevronLeft className="w-5 h-5 text-primary-700" />
                </button>
                <button
                  onClick={goToNextMonth}
                  className="p-2 rounded-xl border border-primary-200 hover:bg-primary-50 hover:border-accent-400 transition-all duration-300"
                  aria-label="Next month"
                >
                  <ChevronRight className="w-5 h-5 text-primary-700" />
                </button>
              </div>
            </div>

            {/* Days of Week */}
            <div className="grid grid-cols-7 gap-2 mb-3">
              {daysOfWeek.map((day) => (
                <div
                  key={day}
                  className="text-center text-sm font-medium text-accent-600 uppercase tracking-wider py-2"
                >
                  {day}
                </div>
              ))}
            </div>

            {/* Calendar Days */}
            <div className="grid grid-cols-7 gap-2">
              {/* Empty cells for days before month starts */}
              {Array.from({ length: startingDayOfWeek }).map((_, index) => (
                <div key={`empty-${index}`} className="aspect-square" />
              ))}

              {/* Actual days */}
              {Array.from({ length: daysInMonth }).map((_, index) => {
                const day = index + 1;
                const disabled = isPast(day);
                const selected = isSelected(day);
                const today = isToday(day);

                return (
                  <button
                    key={day}
                    onClick={() => !disabled && selectDate(day)}
                    disabled={disabled}
                    className={`
                      aspect-square rounded-xl flex items-center justify-center text-sm font-light transition-all duration-300
                      ${
                        disabled
                          ? "text-gray-300 cursor-not-allowed"
                          : selected
                            ? "bg-gradient-to-br from-accent-500 to-primary-500 text-white shadow-md scale-105 font-normal"
                            : today
                              ? "border-2 border-accent-400 text-accent-700 font-medium hover:bg-accent-50"
                              : "border border-primary-200 hover:border-accent-400 hover:bg-primary-50 text-primary-800"
                      }
                    `}
                  >
                    {day}
                  </button>
                );
              })}
            </div>
          </div>
        </div>

        {/* Time Slots & Booking Info */}
        <div className="lg:col-span-1">
          <div className="bg-gradient-to-br from-white to-primary-50/50 border border-primary-200/60 rounded-3xl p-6 shadow-sm sticky top-24">
            <div className="flex items-center gap-3 mb-6 pb-6 border-b border-primary-200/40">
              <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-accent-100 to-primary-100 flex items-center justify-center border border-primary-200">
                <CalendarIcon className="w-5 h-5 text-accent-700" />
              </div>
              <div>
                <h4 className="text-sm font-medium text-primary-900">
                  Discovery Call
                </h4>
                <p className="text-xs text-gray-600 flex items-center gap-1 mt-0.5">
                  <Clock className="w-3 h-3" />
                  30 minutes
                </p>
              </div>
            </div>

            {!selectedDate ? (
              <div className="text-center py-8">
                <div className="w-12 h-12 rounded-xl bg-primary-100 flex items-center justify-center mx-auto mb-3">
                  <CalendarIcon className="w-6 h-6 text-primary-600" />
                </div>
                <p className="text-sm text-gray-600 font-light">
                  Select a date to view available times
                </p>
              </div>
            ) : (
              <>
                <div className="mb-4">
                  <p className="text-sm font-medium text-primary-900 mb-2">
                    Selected Date
                  </p>
                  <p className="text-sm text-gray-600 font-light">
                    {formatSelectedDate()}
                  </p>
                </div>

                <div className="mb-4">
                  <p className="text-sm font-medium text-primary-900 mb-3">
                    Available Times
                  </p>
                  <div className="space-y-2 max-h-[400px] overflow-y-auto pr-2 scrollbar-thin scrollbar-thumb-primary-300 scrollbar-track-primary-50">
                    {timeSlots.map((time) => (
                      <button
                        key={time}
                        onClick={() => setSelectedTime(time)}
                        className={`
                          w-full px-4 py-3 rounded-xl text-sm font-light transition-all duration-300 text-left flex items-center justify-between
                          ${
                            selectedTime === time
                              ? "bg-gradient-to-br from-accent-500 to-primary-500 text-white shadow-md"
                              : "border border-primary-200 hover:border-accent-400 hover:bg-primary-50 text-primary-800"
                          }
                        `}
                      >
                        <span>{time}</span>
                        {selectedTime === time && <Check className="w-4 h-4" />}
                      </button>
                    ))}
                  </div>
                </div>

                {selectedTime && (
                  <button className="w-full mt-6 px-6 py-3 rounded-xl bg-gradient-to-br from-accent-500 to-primary-500 text-white font-normal shadow-lg hover:shadow-xl hover:-translate-y-0.5 transition-all duration-300">
                    Confirm Booking
                  </button>
                )}
              </>
            )}
          </div>
        </div>
      </div>

      {/* Summary Bar */}
      {selectedDate && selectedTime && (
        <div className="mt-8 bg-gradient-to-br from-primary-50 via-white to-beige-50 border border-primary-200/60 rounded-2xl p-6 shadow-sm">
          <div className="flex items-center justify-between flex-wrap gap-4">
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-accent-100 to-primary-100 flex items-center justify-center border border-primary-200">
                <Check className="w-6 h-6 text-accent-700" />
              </div>
              <div>
                <p className="text-sm font-medium text-primary-900">
                  Booking Summary
                </p>
                <p className="text-sm text-gray-600 font-light">
                  {formatSelectedDate()} at {selectedTime}
                </p>
              </div>
            </div>
            <button className="px-8 py-3 rounded-xl bg-gradient-to-br from-accent-500 to-primary-500 text-white font-normal shadow-lg hover:shadow-xl hover:-translate-y-0.5 transition-all duration-300">
              Complete Booking
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
