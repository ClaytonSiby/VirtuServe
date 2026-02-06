"use client";

import { useState } from "react";
import {
  ChevronLeft,
  ChevronRight,
  Clock,
  Calendar as CalendarIcon,
  Check,
  Sparkles,
  Video,
} from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

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

const daysOfWeek = ["S", "M", "T", "W", "T", "F", "S"];

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
    <div className="max-w-7xl mx-auto">
      {/* Premium Header Card */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="relative overflow-hidden bg-gradient-to-br from-slate-900 via-primary-950 to-slate-950 rounded-[2.5rem] p-10 md:p-12 mb-10 shadow-2xl"
      >
        {/* Animated gradient orbs */}
        <div className="absolute top-0 right-0 w-96 h-96 bg-gradient-radial from-primary-500/20 to-transparent blur-3xl animate-pulse"></div>
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-gradient-radial from-slate-500/15 to-transparent blur-3xl animate-pulse delay-1000"></div>

        <div className="relative z-10 grid md:grid-cols-3 gap-8 items-center">
          <div className="md:col-span-2">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-12 h-12 rounded-2xl bg-white/10 backdrop-blur-sm border border-white/20 flex items-center justify-center">
                <Sparkles className="w-6 h-6 text-white" />
              </div>
              <span className="text-xs font-semibold text-white/80 uppercase tracking-[0.25em]">
                Free Discovery Call
              </span>
            </div>
            <h3 className="text-4xl md:text-5xl font-extralight text-white mb-4 tracking-tight leading-tight">
              Schedule Your <span className="font-light">Discovery Call</span>
            </h3>
            <p className="text-lg text-white/70 font-light leading-relaxed max-w-2xl">
              Let&apos;s discuss how we can elevate your business. Choose a
              convenient time for a personalized 30-minute discovery call.
            </p>
          </div>

          <div className="flex flex-col gap-4">
            <div className="flex items-center gap-3 p-4 bg-white/10 backdrop-blur-sm border border-white/20 rounded-2xl">
              <Clock className="w-5 h-5 text-white/80" />
              <div>
                <p className="text-xs text-white/60 font-medium uppercase tracking-wider">
                  Duration
                </p>
                <p className="text-white font-light">30 minutes</p>
              </div>
            </div>
            <div className="flex items-center gap-3 p-4 bg-white/10 backdrop-blur-sm border border-white/20 rounded-2xl">
              <Video className="w-5 h-5 text-white/80" />
              <div>
                <p className="text-xs text-white/60 font-medium uppercase tracking-wider">
                  Format
                </p>
                <p className="text-white font-light">Video Call</p>
              </div>
            </div>
          </div>
        </div>
      </motion.div>

      <div className="grid lg:grid-cols-3 gap-8">
        {/* Premium Calendar */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="lg:col-span-2"
        >
          <div className="relative overflow-hidden bg-white rounded-[2.5rem] p-10 md:p-12 shadow-[0_20px_80px_-15px_rgba(15,23,42,0.25)] border border-slate-700/20">
            {/* Decorative gradient overlay */}
            <div className="absolute top-0 right-0 w-64 h-64 bg-gradient-radial from-primary-100/40 to-transparent blur-3xl pointer-events-none"></div>

            <div className="relative z-10">
              {/* Elegant Month Navigation */}
              <div className="flex items-center justify-between mb-10 pb-8 border-b border-slate-200">
                <div>
                  <h3 className="text-4xl font-extralight text-slate-900 tracking-tight mb-2">
                    {currentDate.toLocaleString("default", { month: "long" })}
                  </h3>
                  <p className="text-slate-500 font-light">
                    {currentDate.getFullYear()}
                  </p>
                </div>
                <div className="flex gap-2">
                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    onClick={goToPreviousMonth}
                    className="w-12 h-12 rounded-2xl bg-gradient-to-br from-slate-50 to-white border border-slate-200 hover:border-slate-900 hover:shadow-lg transition-all duration-300 flex items-center justify-center group"
                    aria-label="Previous month"
                  >
                    <ChevronLeft className="w-5 h-5 text-slate-600 group-hover:text-slate-900 transition-colors" />
                  </motion.button>
                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    onClick={goToNextMonth}
                    className="w-12 h-12 rounded-2xl bg-gradient-to-br from-slate-50 to-white border border-slate-200 hover:border-slate-900 hover:shadow-lg transition-all duration-300 flex items-center justify-center group"
                    aria-label="Next month"
                  >
                    <ChevronRight className="w-5 h-5 text-slate-600 group-hover:text-slate-900 transition-colors" />
                  </motion.button>
                </div>
              </div>

              {/* Days of Week - Premium Style */}
              <div className="grid grid-cols-7 gap-2 mb-3">
                {daysOfWeek.map((day, index) => (
                  <div
                    key={index}
                    className="text-center text-xs font-semibold text-slate-500 uppercase tracking-widest py-4"
                  >
                    {day}
                  </div>
                ))}
              </div>

              {/* Calendar Days - Refined Design */}
              <div className="grid grid-cols-7 gap-2">
                {Array.from({ length: startingDayOfWeek }).map((_, index) => (
                  <div key={`empty-${index}`} className="aspect-square" />
                ))}

                {Array.from({ length: daysInMonth }).map((_, index) => {
                  const day = index + 1;
                  const disabled = isPast(day);
                  const selected = isSelected(day);
                  const today = isToday(day);

                  return (
                    <motion.button
                      key={day}
                      whileHover={!disabled ? { scale: 1.1 } : {}}
                      whileTap={!disabled ? { scale: 0.95 } : {}}
                      onClick={() => !disabled && selectDate(day)}
                      disabled={disabled}
                      className={`
                        aspect-square rounded-2xl flex items-center justify-center text-base font-light transition-all duration-300 relative overflow-hidden
                        ${
                          disabled
                            ? "text-slate-300 cursor-not-allowed bg-slate-50/50"
                            : selected
                              ? "bg-gradient-to-br from-slate-900 via-primary-950 to-slate-950 text-white shadow-2xl shadow-slate-900/40 font-medium"
                              : today
                                ? "bg-gradient-to-br from-slate-50 to-white border-2 border-slate-900 text-slate-900 font-semibold shadow-lg"
                                : "bg-gradient-to-br from-white to-slate-50 hover:from-slate-50 hover:to-white border border-slate-200 hover:border-slate-900 hover:shadow-xl text-slate-700 hover:text-slate-900"
                        }
                      `}
                    >
                      <span className="relative z-10">{day}</span>
                      {selected && (
                        <>
                          <motion.div
                            initial={{ scale: 0 }}
                            animate={{ scale: 1 }}
                            className="absolute inset-0 bg-white/10"
                          />
                          <div className="absolute inset-0 bg-gradient-to-tr from-white/10 to-transparent"></div>
                        </>
                      )}
                      {today && !selected && (
                        <div className="absolute bottom-1 left-1/2 transform -translate-x-1/2 w-1 h-1 rounded-full bg-slate-900"></div>
                      )}
                    </motion.button>
                  );
                })}
              </div>
            </div>
          </div>
        </motion.div>

        {/* Premium Time Slots Sidebar */}
        <motion.div
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="lg:col-span-1"
        >
          <div className="sticky top-24">
            <div className="relative overflow-hidden bg-white rounded-[2.5rem] p-8 shadow-[0_20px_80px_-15px_rgba(15,23,42,0.25)] border border-slate-700/20">
              {/* Decorative gradient */}
              <div className="absolute top-0 right-0 w-48 h-48 bg-gradient-radial from-slate-100/60 to-transparent blur-2xl pointer-events-none"></div>

              <div className="relative z-10">
                <AnimatePresence mode="wait">
                  {!selectedDate ? (
                    <motion.div
                      key="empty"
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      exit={{ opacity: 0 }}
                      className="text-center py-16"
                    >
                      <div className="w-20 h-20 rounded-3xl bg-gradient-to-br from-slate-50 to-slate-100 border border-slate-200 flex items-center justify-center mx-auto mb-6 shadow-sm">
                        <CalendarIcon className="w-10 h-10 text-slate-400" />
                      </div>
                      <h4 className="text-xl font-light text-slate-900 mb-3">
                        Select a Date
                      </h4>
                      <p className="text-sm text-slate-500 font-light leading-relaxed max-w-[200px] mx-auto">
                        Choose an available date from the calendar to see time
                        slots
                      </p>
                    </motion.div>
                  ) : (
                    <motion.div
                      key="selected"
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -20 }}
                    >
                      {/* Selected Date Display */}
                      <div className="mb-8 p-6 bg-gradient-to-br from-slate-50 to-slate-100/50 rounded-2xl border border-slate-200 shadow-sm">
                        <p className="text-xs font-semibold text-slate-500 uppercase tracking-widest mb-3">
                          Selected Date
                        </p>
                        <p className="text-lg text-slate-900 font-light leading-relaxed">
                          {formatSelectedDate()}
                        </p>
                      </div>

                      {/* Time Slots */}
                      <div>
                        <div className="flex items-center justify-between mb-5">
                          <p className="text-xs font-semibold text-slate-500 uppercase tracking-widest">
                            Available Times
                          </p>
                          <span className="text-xs text-slate-400 font-light">
                            {timeSlots.length} slots
                          </span>
                        </div>
                        <div className="space-y-3 max-h-[420px] overflow-y-auto pr-2 custom-scrollbar">
                          {timeSlots.map((time, index) => (
                            <motion.button
                              key={time}
                              initial={{ opacity: 0, x: -20 }}
                              animate={{ opacity: 1, x: 0 }}
                              transition={{ delay: index * 0.05 }}
                              whileHover={{ scale: 1.02 }}
                              whileTap={{ scale: 0.98 }}
                              onClick={() => setSelectedTime(time)}
                              className={`
                                w-full px-5 py-4 rounded-2xl text-sm font-light transition-all duration-300 flex items-center justify-between group relative overflow-hidden
                                ${
                                  selectedTime === time
                                    ? "bg-gradient-to-br from-slate-900 via-primary-950 to-slate-950 text-white shadow-2xl shadow-slate-900/40 border border-slate-800"
                                    : "bg-gradient-to-br from-white to-slate-50 hover:from-slate-50 hover:to-white border border-slate-200 hover:border-slate-900 hover:shadow-xl text-slate-700 hover:text-slate-900"
                                }
                              `}
                            >
                              <span
                                className={`relative z-10 ${selectedTime === time ? "font-medium" : ""}`}
                              >
                                {time}
                              </span>
                              {selectedTime === time && (
                                <motion.div
                                  initial={{ scale: 0, rotate: -180 }}
                                  animate={{ scale: 1, rotate: 0 }}
                                  transition={{
                                    type: "spring",
                                    stiffness: 200,
                                  }}
                                >
                                  <Check className="w-5 h-5" />
                                </motion.div>
                              )}
                              {selectedTime === time && (
                                <div className="absolute inset-0 bg-gradient-to-tr from-white/10 to-transparent"></div>
                              )}
                            </motion.button>
                          ))}
                        </div>
                      </div>

                      {/* Confirm Button */}
                      <AnimatePresence>
                        {selectedTime && (
                          <motion.button
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            exit={{ opacity: 0, y: 20 }}
                            whileHover={{ scale: 1.02, y: -2 }}
                            whileTap={{ scale: 0.98 }}
                            className="w-full mt-8 px-6 py-5 rounded-2xl bg-gradient-to-br from-slate-900 via-primary-950 to-slate-950 text-white font-medium shadow-2xl shadow-slate-900/40 hover:shadow-[0_20px_60px_-15px_rgba(15,23,42,0.5)] transition-all duration-300 tracking-wide border border-slate-800 relative overflow-hidden group"
                          >
                            <span className="relative z-10 flex items-center justify-center gap-2">
                              <Check className="w-5 h-5" />
                              Confirm Booking
                            </span>
                            <div className="absolute inset-0 bg-gradient-to-tr from-white/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                          </motion.button>
                        )}
                      </AnimatePresence>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            </div>
          </div>
        </motion.div>
      </div>

      {/* Premium Summary Bar */}
      <AnimatePresence>
        {selectedDate && selectedTime && (
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 40 }}
            transition={{ type: "spring", stiffness: 200, damping: 25 }}
            className="mt-10 relative overflow-hidden bg-gradient-to-br from-slate-900 via-primary-950 to-slate-950 rounded-[2.5rem] p-8 md:p-10 shadow-2xl"
          >
            {/* Animated background effect */}
            <div className="absolute inset-0 bg-gradient-to-tr from-white/5 to-transparent opacity-50"></div>
            <div className="absolute top-0 right-0 w-96 h-96 bg-gradient-radial from-primary-500/20 to-transparent blur-3xl animate-pulse"></div>

            <div className="relative z-10 flex items-center justify-between flex-wrap gap-6">
              <div className="flex items-center gap-6">
                <motion.div
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  transition={{ type: "spring", stiffness: 200, delay: 0.2 }}
                  className="w-16 h-16 rounded-2xl bg-white/10 backdrop-blur-sm border border-white/20 flex items-center justify-center shadow-lg"
                >
                  <Check className="w-8 h-8 text-white" />
                </motion.div>
                <div>
                  <p className="text-base font-semibold text-white/90 mb-2 flex items-center gap-2">
                    <Sparkles className="w-4 h-4" />
                    Ready to Book
                  </p>
                  <p className="text-sm text-white/70 font-light">
                    {formatSelectedDate()} at {selectedTime}
                  </p>
                </div>
              </div>
              <motion.button
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.95 }}
                className="px-10 py-5 rounded-2xl bg-white text-slate-900 font-medium shadow-2xl hover:shadow-[0_20px_60px_-15px_rgba(255,255,255,0.4)] transition-all duration-300 tracking-wide relative overflow-hidden group"
              >
                <span className="relative z-10">Complete Booking</span>
                <div className="absolute inset-0 bg-gradient-to-br from-slate-50 to-white opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </motion.button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
