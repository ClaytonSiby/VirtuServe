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
    <div className="max-w-6xl mx-auto">
      <div className="grid lg:grid-cols-5 gap-8">
        {/* Calendar */}
        <div className="lg:col-span-3">
          <div className="bg-gradient-to-br from-white via-gray-50/30 to-white border border-gray-200/50 rounded-[2rem] p-8 md:p-10 shadow-lg backdrop-blur-sm">
            {/* Month Navigation */}
            <div className="flex items-center justify-between mb-8 pb-6 border-b border-gray-200/50">
              <h3 className="text-3xl font-extralight text-gray-900 tracking-tight">
                {monthYear}
              </h3>
              <div className="flex gap-3">
                <button
                  onClick={goToPreviousMonth}
                  className="w-10 h-10 rounded-xl bg-white border border-gray-200/60 hover:bg-gray-50 hover:border-accent-300 hover:shadow-md transition-all duration-300 flex items-center justify-center group"
                  aria-label="Previous month"
                >
                  <ChevronLeft className="w-5 h-5 text-gray-600 group-hover:text-accent-600 transition-colors" />
                </button>
                <button
                  onClick={goToNextMonth}
                  className="w-10 h-10 rounded-xl bg-white border border-gray-200/60 hover:bg-gray-50 hover:border-accent-300 hover:shadow-md transition-all duration-300 flex items-center justify-center group"
                  aria-label="Next month"
                >
                  <ChevronRight className="w-5 h-5 text-gray-600 group-hover:text-accent-600 transition-colors" />
                </button>
              </div>
            </div>

            {/* Days of Week */}
            <div className="grid grid-cols-7 gap-3 mb-4">
              {daysOfWeek.map((day) => (
                <div
                  key={day}
                  className="text-center text-xs font-medium text-gray-500 uppercase tracking-[0.15em] py-3"
                >
                  {day}
                </div>
              ))}
            </div>

            {/* Calendar Days */}
            <div className="grid grid-cols-7 gap-3">
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
                      aspect-square rounded-2xl flex items-center justify-center text-sm font-light transition-all duration-300 relative overflow-hidden
                      ${
                        disabled
                          ? "text-gray-300 cursor-not-allowed bg-gray-50/50"
                          : selected
                            ? "bg-gradient-to-br from-accent-500 to-primary-500 text-white shadow-lg shadow-accent-200/50 scale-105 font-medium ring-2 ring-accent-200/50"
                            : today
                              ? "bg-white border-2 border-accent-400 text-accent-700 font-medium hover:shadow-md hover:scale-105"
                              : "bg-white border border-gray-200/60 hover:border-accent-300 hover:shadow-md hover:scale-105 text-gray-700"
                      }
                    `}
                  >
                    {day}
                    {selected && (
                      <div className="absolute inset-0 bg-white/10 animate-pulse"></div>
                    )}
                  </button>
                );
              })}
            </div>
          </div>
        </div>

        {/* Time Slots & Booking Info */}
        <div className="lg:col-span-2">
          <div className="bg-gradient-to-br from-white via-gray-50/30 to-white border border-gray-200/50 rounded-[2rem] p-8 shadow-lg sticky top-24 backdrop-blur-sm">
            <div className="flex items-center gap-4 mb-8 pb-6 border-b border-gray-200/50">
              <div className="w-12 h-12 rounded-2xl bg-gradient-to-br from-accent-50 to-primary-50 flex items-center justify-center border border-accent-200/30 shadow-sm">
                <CalendarIcon className="w-6 h-6 text-accent-600" />
              </div>
              <div>
                <h4 className="text-base font-medium text-gray-900 mb-1">
                  Discovery Call
                </h4>
                <p className="text-sm text-gray-500 flex items-center gap-1.5">
                  <Clock className="w-3.5 h-3.5" />
                  <span className="font-light">30 minutes</span>
                </p>
              </div>
            </div>

            {!selectedDate ? (
              <div className="text-center py-12">
                <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-gray-50 to-white border border-gray-200/60 flex items-center justify-center mx-auto mb-4 shadow-sm">
                  <CalendarIcon className="w-8 h-8 text-gray-400" />
                </div>
                <p className="text-sm text-gray-500 font-light leading-relaxed">
                  Select a date to view
                  <br />
                  available times
                </p>
              </div>
            ) : (
              <>
                <div className="mb-6 p-4 bg-gradient-to-br from-accent-50/50 to-primary-50/50 rounded-xl border border-accent-200/30">
                  <p className="text-xs font-medium text-gray-600 uppercase tracking-wider mb-2">
                    Selected Date
                  </p>
                  <p className="text-sm text-gray-900 font-light leading-relaxed">
                    {formatSelectedDate()}
                  </p>
                </div>

                <div className="mb-6">
                  <p className="text-xs font-medium text-gray-600 uppercase tracking-wider mb-4">
                    Available Times
                  </p>
                  <div className="space-y-2.5 max-h-[350px] overflow-y-auto pr-2 custom-scrollbar">
                    {timeSlots.map((time) => (
                      <button
                        key={time}
                        onClick={() => setSelectedTime(time)}
                        className={`
                          w-full px-4 py-3.5 rounded-xl text-sm font-light transition-all duration-300 text-left flex items-center justify-between group
                          ${
                            selectedTime === time
                              ? "bg-gradient-to-br from-accent-500 to-primary-500 text-white shadow-lg shadow-accent-200/50 scale-[1.02]"
                              : "bg-white border border-gray-200/60 hover:border-accent-300 hover:shadow-md hover:scale-[1.02] text-gray-700"
                          }
                        `}
                      >
                        <span
                          className={selectedTime === time ? "font-medium" : ""}
                        >
                          {time}
                        </span>
                        {selectedTime === time && (
                          <Check className="w-4 h-4 animate-in fade-in duration-200" />
                        )}
                      </button>
                    ))}
                  </div>
                </div>

                {selectedTime && (
                  <button className="w-full mt-6 px-6 py-4 rounded-xl bg-gradient-to-br from-accent-500 to-primary-500 text-white font-medium shadow-lg shadow-accent-200/50 hover:shadow-xl hover:-translate-y-1 hover:scale-[1.02] transition-all duration-300 tracking-wide">
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
        <div className="mt-10 bg-gradient-to-br from-white via-gray-50/30 to-white border border-gray-200/50 rounded-[2rem] p-8 shadow-lg backdrop-blur-sm animate-in fade-in slide-in-from-bottom-4 duration-500">
          <div className="flex items-center justify-between flex-wrap gap-6">
            <div className="flex items-center gap-5">
              <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-accent-50 to-primary-50 flex items-center justify-center border border-accent-200/30 shadow-sm">
                <Check className="w-7 h-7 text-accent-600" />
              </div>
              <div>
                <p className="text-base font-medium text-gray-900 mb-1">
                  Booking Summary
                </p>
                <p className="text-sm text-gray-600 font-light">
                  {formatSelectedDate()} at {selectedTime}
                </p>
              </div>
            </div>
            <button className="px-8 py-4 rounded-xl bg-gradient-to-br from-accent-500 to-primary-500 text-white font-medium shadow-lg shadow-accent-200/50 hover:shadow-xl hover:-translate-y-1 hover:scale-105 transition-all duration-300 tracking-wide">
              Complete Booking
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
