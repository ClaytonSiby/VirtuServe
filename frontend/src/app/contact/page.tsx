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
import SectionHeader from "@/components/ui/SectionHeader";
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
    } catch (error) {
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
    <main className="min-h-screen bg-white">
      {/* Hero Section - Compact & Modern */}
      <section className="relative pt-28 pb-12 md:pt-36 md:pb-16 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-accent-50/50 via-white to-primary-50/50"></div>
        <div className="absolute inset-0 opacity-20">
          <div className="absolute top-0 right-1/3 w-96 h-96 bg-gradient-radial from-accent-300/50 to-transparent blur-3xl"></div>
          <div className="absolute bottom-0 left-1/3 w-96 h-96 bg-gradient-radial from-primary-300/40 to-transparent blur-3xl"></div>
        </div>

        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-3xl mx-auto text-center space-y-6">
            <div className="inline-flex items-center gap-2 bg-white border border-gray-200 rounded-full px-4 py-2 shadow-sm">
              <div className="w-1.5 h-1.5 rounded-full bg-accent-500"></div>
              <span className="text-xs font-light text-gray-700 uppercase tracking-wider">
                Let's Connect
              </span>
            </div>

            <h1 className="text-5xl md:text-6xl lg:text-7xl font-extralight text-gray-900 leading-tight tracking-tight">
              Get In Touch
            </h1>

            <p className="text-xl md:text-2xl text-gray-600 font-light leading-relaxed">
              Ready to transform your workflow? Let's start the conversation.
            </p>
          </div>
        </div>
      </section>

      <section className="py-24 md:py-36 bg-gradient-to-b from-white via-gray-50/30 to-white">
        <PageContainer>
          <div className="mb-16 md:mb-20 text-center">
            <div className="inline-flex items-center gap-2 bg-white border border-gray-200 rounded-full px-4 py-2 mb-6 shadow-sm">
              <span className="text-xs font-light text-gray-700 uppercase tracking-wider">
                Contact
              </span>
            </div>
            <h2 className="text-5xl md:text-6xl lg:text-7xl font-extralight text-gray-900 mb-6 tracking-tight">
              Start Your Journey
            </h2>
            <p className="text-xl md:text-2xl text-gray-600 font-light max-w-2xl mx-auto leading-relaxed">
              Choose your preferred way to connect
            </p>
          </div>
          <div className="grid lg:grid-cols-5 gap-12 xl:gap-16">
            {/* Contact Information */}
            <div className="lg:col-span-2 space-y-8">
              <div className="bg-gradient-to-br from-gray-50/50 to-white rounded-2xl p-6 border border-gray-100">
                <p className="text-base text-gray-700 font-light leading-relaxed">
                  We'll respond within 24 hours or schedule a call at your
                  convenience.
                </p>
              </div>

              <div className="space-y-4">
                <a
                  href="mailto:hello@virtuserve.com"
                  className="group flex items-start gap-4 p-5 bg-white border border-gray-200/60 rounded-xl hover:shadow-lg hover:border-accent-300/60 transition-all duration-300"
                >
                  <div className="w-12 h-12 bg-gradient-to-br from-accent-100 to-accent-50 rounded-lg flex items-center justify-center flex-shrink-0 group-hover:scale-105 transition-transform duration-300">
                    <Mail className="w-6 h-6 text-accent-600" />
                  </div>
                  <div className="flex-1">
                    <h3 className="font-light text-gray-900 mb-1">Email</h3>
                    <p className="text-accent-600 font-light text-sm mb-0.5">
                      hello@virtuserve.com
                    </p>
                    <p className="text-gray-500 text-xs font-light">
                      24-hour response time
                    </p>
                  </div>
                </a>

                <a
                  href="#booking"
                  className="group flex items-start gap-4 p-5 bg-white border border-gray-200/60 rounded-xl hover:shadow-lg hover:border-primary-300/60 transition-all duration-300"
                >
                  <div className="w-12 h-12 bg-gradient-to-br from-primary-100 to-primary-50 rounded-lg flex items-center justify-center flex-shrink-0 group-hover:scale-105 transition-transform duration-300">
                    <Calendar className="w-6 h-6 text-primary-600" />
                  </div>
                  <div className="flex-1">
                    <h3 className="font-light text-gray-900 mb-1">
                      Discovery Call
                    </h3>
                    <p className="text-primary-600 font-light text-sm mb-0.5">
                      Free 30-minute consultation
                    </p>
                    <p className="text-gray-500 text-xs font-light inline-flex items-center gap-1">
                      Book below <span className="text-accent-500">↓</span>
                    </p>
                  </div>
                </a>

                <a
                  href="tel:+27828997062"
                  className="group flex items-start gap-4 p-5 bg-white border border-gray-200/60 rounded-xl hover:shadow-lg hover:border-accent-300/60 transition-all duration-300"
                >
                  <div className="w-12 h-12 bg-gradient-to-br from-accent-100 to-accent-50 rounded-lg flex items-center justify-center flex-shrink-0 group-hover:scale-105 transition-transform duration-300">
                    <Phone className="w-6 h-6 text-accent-600" />
                  </div>
                  <div className="flex-1">
                    <h3 className="font-light text-gray-900 mb-1">Phone</h3>
                    <p className="text-accent-600 font-light text-sm mb-0.5">
                      +27 82 899 7062
                    </p>
                    <p className="text-gray-500 text-xs font-light">
                      Business hours
                    </p>
                  </div>
                </a>
              </div>

              <div className="relative bg-gradient-to-br from-accent-50/40 via-white to-primary-50/30 border border-gray-200/60 p-6 rounded-xl overflow-hidden">
                <div className="absolute top-0 right-0 w-24 h-24 bg-gradient-radial from-accent-100/40 to-transparent blur-2xl" />
                <div className="relative z-10">
                  <h3 className="text-base font-light text-gray-900 mb-4 tracking-tight">
                    What Happens Next
                  </h3>
                  <ul className="space-y-2.5 text-gray-700">
                    <li className="flex items-start gap-2.5 text-sm font-light">
                      <span className="flex items-center justify-center w-5 h-5 rounded-full bg-accent-500 text-white text-xs font-light flex-shrink-0 mt-0.5">
                        1
                      </span>
                      <span>Quick response within 24 hours</span>
                    </li>
                    <li className="flex items-start gap-3 font-light">
                      <span className="flex items-center justify-center w-5 h-5 rounded-full bg-accent-100 text-accent-600 text-xs font-light flex-shrink-0 mt-0.5">
                        2
                      </span>
                      <span>Free consultation to discuss your needs</span>
                    </li>
                    <li className="flex items-start gap-3 font-light">
                      <span className="flex items-center justify-center w-5 h-5 rounded-full bg-accent-100 text-accent-600 text-xs font-light flex-shrink-0 mt-0.5">
                        3
                      </span>
                      <span>Custom proposal tailored for you</span>
                    </li>
                    <li className="flex items-start gap-3 font-light">
                      <span className="flex items-center justify-center w-5 h-5 rounded-full bg-accent-100 text-accent-600 text-xs font-light flex-shrink-0 mt-0.5">
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
                className="relative bg-white border border-gray-200/60 p-8 md:p-10 rounded-3xl shadow-sm hover:shadow-xl transition-all duration-500 overflow-hidden group"
              >
                <div className="absolute top-0 right-0 w-64 h-64 bg-gradient-radial from-primary-50/50 to-transparent blur-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
                <div className="relative z-10">
                  <h3 className="text-3xl md:text-4xl font-extralight mb-8 text-gray-900 tracking-tight">
                    Send a Message
                  </h3>

                  <div className="space-y-5">
                    <div>
                      <label
                        htmlFor="name"
                        className="block text-sm font-light mb-2.5 text-gray-700"
                      >
                        Full Name *
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
                          className="w-full pl-12 pr-4 py-3.5 border border-gray-300 rounded-xl focus:ring-2 focus:ring-accent-400/50 focus:border-accent-400 bg-white text-gray-900 transition-all hover:border-gray-400"
                          placeholder="John Doe"
                        />
                      </div>
                    </div>

                    <div>
                      <label
                        htmlFor="email"
                        className="block text-sm font-light mb-2.5 text-gray-700"
                      >
                        Email Address *
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
                          className="w-full pl-12 pr-4 py-3.5 border border-gray-300 rounded-xl focus:ring-2 focus:ring-accent-400/50 focus:border-accent-400 bg-white text-gray-900 transition-all hover:border-gray-400"
                          placeholder="john@company.com"
                        />
                      </div>
                    </div>

                    <div>
                      <label
                        htmlFor="company"
                        className="block text-sm font-light mb-2.5 text-gray-700"
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
                          className="w-full pl-12 pr-4 py-3.5 border border-gray-300 rounded-xl focus:ring-2 focus:ring-accent-400/50 focus:border-accent-400 bg-white text-gray-900 transition-all hover:border-gray-400"
                          placeholder="Your Company"
                        />
                      </div>
                    </div>

                    <div>
                      <label
                        htmlFor="phone"
                        className="block text-sm font-light mb-2.5 text-gray-700"
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
                          className="w-full pl-12 pr-4 py-3.5 border border-gray-300 rounded-xl focus:ring-2 focus:ring-accent-400/50 focus:border-accent-400 bg-white text-gray-900 transition-all hover:border-gray-400"
                          placeholder="+27 82 899 7062"
                        />
                      </div>
                    </div>

                    <div>
                      <label
                        htmlFor="service"
                        className="block text-sm font-light mb-2.5 text-gray-700"
                      >
                        Service Interested In
                      </label>
                      <select
                        id="service"
                        name="service"
                        value={formData.service}
                        onChange={handleChange}
                        className="w-full px-4 py-3.5 border border-gray-300 rounded-xl focus:ring-2 focus:ring-accent-400/50 focus:border-accent-400 bg-white text-gray-900 transition-all hover:border-gray-400 cursor-pointer"
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
                        className="block text-sm font-light mb-2.5 text-gray-700"
                      >
                        Message *
                      </label>
                      <div className="relative">
                        <MessageSquare className="absolute left-4 top-4 w-5 h-5 text-gray-400" />
                        <textarea
                          id="message"
                          name="message"
                          value={formData.message}
                          onChange={handleChange}
                          required
                          rows={5}
                          className="w-full pl-12 pr-4 py-3.5 border border-gray-300 rounded-xl focus:ring-2 focus:ring-accent-400/50 focus:border-accent-400 bg-white text-gray-900 transition-all hover:border-gray-400 resize-none"
                          placeholder="Tell us about your needs..."
                        />
                      </div>
                    </div>

                    <button
                      type="submit"
                      disabled={isSubmitting}
                      className="w-full bg-gradient-to-r from-accent-600 to-accent-700 text-white py-4 rounded-xl font-light text-lg hover:shadow-xl hover:shadow-accent-500/25 hover:-translate-y-1 disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:translate-y-0 transition-all duration-300 flex items-center justify-center gap-2.5 mt-6"
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
                          We'll get back to you within 24 hours.
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
        className="py-24 md:py-36 bg-gradient-to-b from-gray-50 via-white to-gray-50/50"
      >
        <PageContainer>
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2.5 bg-primary-50/80 backdrop-blur-sm border border-primary-200/60 rounded-full px-5 py-2.5 mb-6">
              <div className="w-2 h-2 rounded-full bg-primary-500 animate-pulse" />
              <span className="text-xs font-light text-primary-700 uppercase tracking-[0.15em]">
                Book a Call
              </span>
            </div>
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-extralight mb-6 text-gray-900 tracking-tight">
              Choose Your Time
            </h2>
            <p className="text-xl text-gray-600 font-light max-w-2xl mx-auto leading-relaxed">
              Select a convenient slot for your free 30-minute discovery call
            </p>
          </div>

          <BookingCalendar />
        </PageContainer>
      </section>
    </main>
  );
}
