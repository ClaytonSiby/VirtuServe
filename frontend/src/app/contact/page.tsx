"use client";

import { useState } from "react";
import {
  Calendar,
  Mail,
  Phone,
  User,
  Building,
  MessageSquare,
  Send,
} from "lucide-react";
import PageContainer from "@/components/ui/PageContainer";
import BookingCalendar from "@/components/BookingCalendar";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    company: "",
    phone: "",
    service: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<
    "idle" | "success" | "error"
  >("idle");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        setSubmitStatus("success");
        setFormData({
          name: "",
          email: "",
          company: "",
          phone: "",
          service: "",
          message: "",
        });
      } else {
        setSubmitStatus("error");
      }
    } catch {
      setSubmitStatus("error");
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >,
  ) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <main className="min-h-screen bg-gradient-to-br from-primary-50/20 via-white to-accent-50/15">
      <section className="pt-32 pb-24 md:pt-40 md:pb-36">
        <PageContainer>
          <div className="mb-20 md:mb-24 text-center">
            <div className="inline-flex items-center gap-2.5 bg-white/80 backdrop-blur-xl border border-gray-200/40 rounded-full px-5 py-2.5 mb-8 shadow-sm">
              <div className="w-1.5 h-1.5 rounded-full bg-accent-500"></div>
              <span className="text-[10px] font-medium text-gray-600 uppercase tracking-[0.25em]">
                Let&apos;s Connect
              </span>
            </div>

            <h1 className="text-6xl md:text-7xl lg:text-8xl font-extralight text-gray-900 mb-6 tracking-tight leading-tight">
              Get In Touch
            </h1>

            <div className="flex items-center justify-center gap-3 opacity-60 mb-6">
              <div className="h-[1px] w-12 bg-gradient-to-r from-transparent via-accent-400 to-transparent"></div>
              <div className="w-1 h-1 rounded-full bg-accent-400"></div>
              <div className="h-[1px] w-12 bg-gradient-to-r from-transparent via-primary-400 to-transparent"></div>
            </div>

            <p className="text-lg md:text-xl text-gray-600 font-light max-w-3xl mx-auto leading-relaxed">
              Ready to transform your workflow? Choose your preferred way to
              connect.
            </p>
          </div>
          <div className="grid lg:grid-cols-5 gap-12 xl:gap-16">
            {/* Contact Information */}
            <div className="lg:col-span-2 space-y-8">
              <div className="bg-gradient-to-br from-accent-50/60 via-white to-primary-50/40 rounded-2xl p-8 border border-gray-200/60 shadow-md">
                <p className="text-lg text-gray-700 font-light leading-relaxed">
                  We&apos;ll respond within 24 hours or schedule a call at your
                  convenience.
                </p>
              </div>

              <div className="space-y-5">
                <a
                  href="mailto:hello@virtuserve.com"
                  className="group flex items-start gap-5 p-6 bg-white border border-gray-200/80 rounded-2xl hover:shadow-xl hover:border-accent-300/70 transition-all duration-300"
                >
                  <div className="w-14 h-14 bg-gradient-to-br from-accent-100 to-accent-50 rounded-xl flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform duration-300 shadow-sm">
                    <Mail className="w-6 h-6 text-accent-600" />
                  </div>
                  <div className="flex-1">
                    <h3 className="font-medium text-gray-900 mb-2 text-lg tracking-wide">
                      Email
                    </h3>
                    <p className="text-accent-600 font-medium text-base mb-1">
                      hello@virtuserve.com
                    </p>
                    <p className="text-gray-500 text-sm font-light">
                      24-hour response time
                    </p>
                  </div>
                </a>

                <a
                  href="#booking"
                  className="group flex items-start gap-5 p-6 bg-white border border-gray-200/80 rounded-2xl hover:shadow-xl hover:border-primary-300/70 transition-all duration-300"
                >
                  <div className="w-14 h-14 bg-gradient-to-br from-primary-100 to-primary-50 rounded-xl flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform duration-300 shadow-sm">
                    <Calendar className="w-6 h-6 text-primary-600" />
                  </div>
                  <div className="flex-1">
                    <h3 className="font-medium text-gray-900 mb-2 text-lg tracking-wide">
                      Discovery Call
                    </h3>
                    <p className="text-primary-600 font-medium text-base mb-1">
                      Free 30-minute consultation
                    </p>
                    <p className="text-gray-500 text-sm font-light inline-flex items-center gap-1.5">
                      Book below{" "}
                      <span className="text-accent-500 text-lg">↓</span>
                    </p>
                  </div>
                </a>

                <a
                  href="tel:+27828997062"
                  className="group flex items-start gap-5 p-6 bg-white border border-gray-200/80 rounded-2xl hover:shadow-xl hover:border-accent-300/70 transition-all duration-300"
                >
                  <div className="w-14 h-14 bg-gradient-to-br from-accent-100 to-accent-50 rounded-xl flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform duration-300 shadow-sm">
                    <Phone className="w-6 h-6 text-accent-600" />
                  </div>
                  <div className="flex-1">
                    <h3 className="font-medium text-gray-900 mb-2 text-lg tracking-wide">
                      Phone
                    </h3>
                    <p className="text-accent-600 font-medium text-base mb-1">
                      +27 82 899 7062
                    </p>
                    <p className="text-gray-500 text-sm font-light">
                      Business hours
                    </p>
                  </div>
                </a>
              </div>

              <div className="relative bg-gradient-to-br from-accent-50/50 via-white to-primary-50/40 border border-gray-200/70 p-8 rounded-2xl overflow-hidden shadow-md">
                <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-radial from-accent-100/50 to-transparent blur-2xl" />
                <div className="relative z-10">
                  <h3 className="text-lg font-medium text-gray-900 mb-5 tracking-wide">
                    What Happens Next
                  </h3>
                  <ul className="space-y-4 text-gray-700">
                    <li className="flex items-start gap-3.5 text-base font-light">
                      <span className="flex items-center justify-center w-6 h-6 rounded-full bg-gradient-to-br from-accent-500 to-accent-600 text-white text-xs font-medium flex-shrink-0 mt-0.5 shadow-sm">
                        1
                      </span>
                      <span>Quick response within 24 hours</span>
                    </li>
                    <li className="flex items-start gap-3.5 text-base font-light">
                      <span className="flex items-center justify-center w-6 h-6 rounded-full bg-gradient-to-br from-accent-400 to-accent-500 text-white text-xs font-medium flex-shrink-0 mt-0.5 shadow-sm">
                        2
                      </span>
                      <span>Free consultation to discuss your needs</span>
                    </li>
                    <li className="flex items-start gap-3.5 text-base font-light">
                      <span className="flex items-center justify-center w-6 h-6 rounded-full bg-gradient-to-br from-primary-400 to-primary-500 text-white text-xs font-medium flex-shrink-0 mt-0.5 shadow-sm">
                        3
                      </span>
                      <span>Custom proposal tailored for you</span>
                    </li>
                    <li className="flex items-start gap-3.5 text-base font-light">
                      <span className="flex items-center justify-center w-6 h-6 rounded-full bg-gradient-to-br from-primary-500 to-primary-600 text-white text-xs font-medium flex-shrink-0 mt-0.5 shadow-sm">
                        4
                      </span>
                      <span>No pressure, just possibilities</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>

            {/* Contact Form */}
            <div className="lg:col-span-3">
              <form
                onSubmit={handleSubmit}
                className="relative bg-gradient-to-br from-white via-gray-50/30 to-white border border-gray-200/80 p-10 md:p-12 rounded-[2rem] shadow-xl hover:shadow-2xl transition-all duration-500 overflow-hidden group"
              >
                <div className="absolute top-0 right-0 w-72 h-72 bg-gradient-radial from-primary-100/40 to-transparent blur-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
                <div className="absolute bottom-0 left-0 w-72 h-72 bg-gradient-radial from-accent-100/40 to-transparent blur-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-700" />

                <div className="relative z-10">
                  <div className="mb-10">
                    <h3 className="text-4xl md:text-5xl font-extralight mb-3 text-gray-900 tracking-tight">
                      Send a Message
                    </h3>
                    <p className="text-base text-gray-600 font-light">
                      Fill out the form below and we&apos;ll get back to you
                      within 24 hours
                    </p>
                  </div>

                  <div className="space-y-6">
                    <div className="grid md:grid-cols-2 gap-6">
                      <div>
                        <label
                          htmlFor="name"
                          className="block text-sm font-medium mb-3 text-gray-800 tracking-wide"
                        >
                          Full Name <span className="text-accent-600">*</span>
                        </label>
                        <div className="relative">
                          <User className="absolute left-4 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
                          <input
                            type="text"
                            id="name"
                            name="name"
                            value={formData.name}
                            onChange={handleChange}
                            required
                            className="w-full pl-12 pr-4 py-4 border border-gray-300 rounded-xl focus:ring-2 focus:ring-accent-400/50 focus:border-accent-400 bg-white text-gray-900 transition-all hover:border-gray-400 font-light text-base"
                            placeholder="John Doe"
                          />
                        </div>
                      </div>

                      <div>
                        <label
                          htmlFor="email"
                          className="block text-sm font-medium mb-3 text-gray-800 tracking-wide"
                        >
                          Email Address{" "}
                          <span className="text-accent-600">*</span>
                        </label>
                        <div className="relative">
                          <Mail className="absolute left-4 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
                          <input
                            type="email"
                            id="email"
                            name="email"
                            value={formData.email}
                            onChange={handleChange}
                            required
                            className="w-full pl-12 pr-4 py-4 border border-gray-300 rounded-xl focus:ring-2 focus:ring-accent-400/50 focus:border-accent-400 bg-white text-gray-900 transition-all hover:border-gray-400 font-light text-base"
                            placeholder="john@company.com"
                          />
                        </div>
                      </div>
                    </div>

                    <div className="grid md:grid-cols-2 gap-6">
                      <div>
                        <label
                          htmlFor="company"
                          className="block text-sm font-medium mb-3 text-gray-800 tracking-wide"
                        >
                          Company Name
                        </label>
                        <div className="relative">
                          <Building className="absolute left-4 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
                          <input
                            type="text"
                            id="company"
                            name="company"
                            value={formData.company}
                            onChange={handleChange}
                            className="w-full pl-12 pr-4 py-4 border border-gray-300 rounded-xl focus:ring-2 focus:ring-accent-400/50 focus:border-accent-400 bg-white text-gray-900 transition-all hover:border-gray-400 font-light text-base"
                            placeholder="Your Company"
                          />
                        </div>
                      </div>

                      <div>
                        <label
                          htmlFor="phone"
                          className="block text-sm font-medium mb-3 text-gray-800 tracking-wide"
                        >
                          Phone Number
                        </label>
                        <div className="relative">
                          <Phone className="absolute left-4 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
                          <input
                            type="tel"
                            id="phone"
                            name="phone"
                            value={formData.phone}
                            onChange={handleChange}
                            className="w-full pl-12 pr-4 py-4 border border-gray-300 rounded-xl focus:ring-2 focus:ring-accent-400/50 focus:border-accent-400 bg-white text-gray-900 transition-all hover:border-gray-400 font-light text-base"
                            placeholder="+27 82 899 7062"
                          />
                        </div>
                      </div>
                    </div>

                    <div>
                      <label
                        htmlFor="service"
                        className="block text-sm font-medium mb-3 text-gray-800 tracking-wide"
                      >
                        Service Interested In
                      </label>
                      <select
                        id="service"
                        name="service"
                        value={formData.service}
                        onChange={handleChange}
                        className="w-full px-4 py-4 border border-gray-300 rounded-xl focus:ring-2 focus:ring-accent-400/50 focus:border-accent-400 bg-white text-gray-900 transition-all hover:border-gray-400 cursor-pointer font-light text-base"
                      >
                        <option value="">Select a service</option>
                        <option value="administrative">
                          Administrative Support
                        </option>
                        <option value="customer-service">
                          Customer Service
                        </option>
                        <option value="digital-marketing">
                          Digital Marketing
                        </option>
                        <option value="project-coordination">
                          Project Coordination
                        </option>
                        <option value="email-management">
                          Email Management
                        </option>
                        <option value="bookkeeping">Basic Bookkeeping</option>
                        <option value="other">Other</option>
                      </select>
                    </div>

                    <div>
                      <label
                        htmlFor="message"
                        className="block text-sm font-medium mb-3 text-gray-800 tracking-wide"
                      >
                        Message <span className="text-accent-600">*</span>
                      </label>
                      <div className="relative">
                        <MessageSquare className="absolute left-4 top-5 w-5 h-5 text-gray-400" />
                        <textarea
                          id="message"
                          name="message"
                          value={formData.message}
                          onChange={handleChange}
                          required
                          rows={6}
                          className="w-full pl-12 pr-4 py-4 border border-gray-300 rounded-xl focus:ring-2 focus:ring-accent-400/50 focus:border-accent-400 bg-white text-gray-900 transition-all hover:border-gray-400 resize-none font-light text-base"
                          placeholder="Tell us about your needs..."
                        />
                      </div>
                    </div>

                    <button
                      type="submit"
                      disabled={isSubmitting}
                      className="w-full bg-gradient-to-r from-accent-600 to-primary-600 text-white py-5 rounded-xl font-medium text-lg hover:shadow-2xl hover:shadow-accent-500/30 hover:-translate-y-1 disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:translate-y-0 transition-all duration-300 flex items-center justify-center gap-3 mt-8 tracking-wide"
                    >
                      {isSubmitting ? (
                        <span className="flex items-center gap-2">
                          <span className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                          Sending...
                        </span>
                      ) : (
                        <>
                          <Send className="w-5 h-5" />
                          Send Message
                        </>
                      )}
                    </button>

                    {submitStatus === "success" && (
                      <div className="bg-gradient-to-br from-accent-50 to-primary-50 border border-accent-300 text-accent-800 p-5 rounded-xl shadow-sm">
                        <p className="font-light">
                          ✓ Message sent successfully!
                        </p>
                        <p className="text-sm mt-1 text-accent-700">
                          We&apos;ll get back to you within 24 hours.
                        </p>
                      </div>
                    )}

                    {submitStatus === "error" && (
                      <div className="bg-red-50 border border-red-300 text-red-800 p-5 rounded-xl shadow-sm">
                        <p className="font-light">× Something went wrong</p>
                        <p className="text-sm mt-1 text-red-700">
                          Please try again or email us directly at
                          hello@virtuserve.com
                        </p>
                      </div>
                    )}
                  </div>
                </div>
              </form>
            </div>
          </div>
        </PageContainer>
      </section>

      {/* Booking Calendar Section */}
      <section
        id="booking"
        className="py-28 md:py-40 bg-gradient-to-b from-gray-50 via-white to-gray-50/50"
      >
        <PageContainer>
          <div className="text-center mb-20 md:mb-24">
            <div className="inline-flex items-center gap-2.5 bg-primary-50/90 backdrop-blur-sm border border-primary-200/70 rounded-full px-6 py-3 mb-8 shadow-md">
              <div className="w-2 h-2 rounded-full bg-primary-500"></div>
              <span className="text-xs font-semibold text-primary-700 uppercase tracking-[0.2em]">
                Book a Call
              </span>
            </div>
            <h2 className="text-5xl md:text-6xl lg:text-7xl font-extralight mb-8 text-gray-900 tracking-tight leading-tight">
              Choose Your{" "}
              <span className="bg-gradient-to-r from-primary-600 via-accent-600 to-primary-600 bg-clip-text text-transparent font-light">
                Time
              </span>
            </h2>
            <p className="text-xl md:text-2xl text-gray-600 font-light max-w-3xl mx-auto leading-relaxed">
              Select a convenient slot for your free 30-minute discovery call
            </p>
            <div className="flex items-center justify-center gap-4 mt-6">
              <div className="h-px w-20 bg-gradient-to-r from-transparent to-primary-300"></div>
              <div className="w-2 h-2 rounded-full bg-primary-400"></div>
              <div className="h-px w-20 bg-gradient-to-l from-transparent to-accent-300"></div>
            </div>
          </div>

          <BookingCalendar />
        </PageContainer>
      </section>
    </main>
  );
}
