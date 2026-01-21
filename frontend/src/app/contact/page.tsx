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
  CheckCircle,
  AlertCircle,
} from "lucide-react";
import PageContainer from "@/components/ui/PageContainer";
import CalendlyWidget from "@/components/CalendlyWidget";
import { submitContactForm } from "@/lib/api";

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
  const [errorMessage, setErrorMessage] = useState("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus("idle");
    setErrorMessage("");

    try {
      const response = await submitContactForm(formData);

      if (response.success) {
        setSubmitStatus("success");
        setFormData({
          name: "",
          email: "",
          company: "",
          phone: "",
          service: "",
          message: "",
        });

        // Reset success message after 5 seconds
        setTimeout(() => {
          setSubmitStatus("idle");
        }, 5000);
      } else {
        setSubmitStatus("error");
        setErrorMessage(response.message || "Failed to submit the form");
      }
    } catch (error) {
      setSubmitStatus("error");
      setErrorMessage(
        "Unable to connect to the server. Please try again later.",
      );
      console.error("Contact form error:", error);
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
    <main className="min-h-screen bg-gradient-to-br from-gray-50 via-white to-gray-50">
      <section className="relative pt-32 pb-24 md:pt-40 md:pb-36 bg-gradient-to-br from-white/90 via-[#F2F1EF]/50 to-[#D8CFD0]/8">
        {/* Animated background elements */}
        <div className="absolute inset-0">
          <div
            className="absolute top-1/4 right-0 w-[600px] h-[600px] bg-[#D8CFD0]/25 rounded-full blur-3xl animate-pulse"
            style={{ animationDuration: "8s" }}
          ></div>
          <div
            className="absolute bottom-1/4 left-0 w-[600px] h-[600px] bg-[#B1A6A4]/20 rounded-full blur-3xl animate-pulse"
            style={{ animationDuration: "6s" }}
          ></div>
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-[#697184]/10 rounded-full blur-3xl"></div>
        </div>

        {/* Decorative grid overlay */}
        <div className="absolute inset-0 opacity-20">
          <div
            className="absolute inset-0"
            style={{
              backgroundImage: `radial-gradient(circle at 2px 2px, rgba(105, 113, 132, 0.15) 1px, transparent 0)`,
              backgroundSize: "48px 48px",
            }}
          ></div>
        </div>

        {/* Floating decorative shapes */}
        <div className="absolute top-20 left-10 w-72 h-72 border-2 border-[#697184]/15 rounded-full opacity-40 animate-[spin_20s_linear_infinite]"></div>
        <div className="absolute bottom-20 right-10 w-96 h-96 border-2 border-[#B1A6A4]/15 rounded-full opacity-40 animate-[spin_25s_linear_infinite_reverse]"></div>

        <PageContainer>
          <div className="relative z-10 mb-20 md:mb-24 text-center">
            <div className="inline-flex items-center gap-2.5 bg-white/80 backdrop-blur-md border border-[#697184]/20 rounded-full px-5 py-2.5 mb-8 shadow-sm">
              <span className="text-xs font-semibold text-[#697184] uppercase tracking-[0.2em]">
                Let&apos;s Connect
              </span>
            </div>

            <h1 className="text-6xl md:text-7xl lg:text-8xl font-extralight text-[#413F3D] mb-6 tracking-tighter leading-[0.95]">
              Get In Touch
            </h1>

            <div className="flex items-center justify-center gap-3 opacity-60 mb-6">
              <div className="h-[1px] w-12 bg-gradient-to-r from-transparent via-[#697184]/60 to-transparent"></div>
              <div className="w-1 h-1 rounded-full bg-[#697184]"></div>
              <div className="h-[1px] w-12 bg-gradient-to-r from-transparent via-[#697184]/60 to-transparent"></div>
            </div>

            <p className="text-xl md:text-2xl text-[#413F3D]/80 font-light max-w-3xl mx-auto leading-relaxed">
              Ready to transform your workflow? Choose your preferred way to
              connect.
            </p>
          </div>
          <div className="relative z-10 grid lg:grid-cols-5 gap-12 xl:gap-16">
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
                  className="group flex items-start gap-5 p-6 bg-white border border-gray-200/80 rounded-2xl hover:shadow-xl hover:border-accent-300/70 transition-all duration-300 overflow-hidden"
                >
                  <div className="w-14 h-14 bg-gradient-to-br from-accent-100 to-accent-50 rounded-xl flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform duration-300 shadow-sm">
                    <Mail className="w-6 h-6 text-accent-600" />
                  </div>
                  <div className="flex-1 min-w-0">
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
                  className="group flex items-start gap-5 p-6 bg-white border border-gray-200/80 rounded-2xl hover:shadow-xl hover:border-primary-300/70 transition-all duration-300 overflow-hidden"
                >
                  <div className="w-14 h-14 bg-gradient-to-br from-primary-100 to-primary-50 rounded-xl flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform duration-300 shadow-sm">
                    <Calendar className="w-6 h-6 text-primary-600" />
                  </div>
                  <div className="flex-1 min-w-0">
                    <h3 className="font-medium text-gray-900 mb-2 text-lg tracking-wide">
                      Discovery Call
                    </h3>
                    <p className="text-primary-600 font-medium text-base mb-1">
                      Free 30-minute discovery call
                    </p>
                    <p className="text-gray-500 text-sm font-light inline-flex items-center gap-1.5">
                      Book below{" "}
                      <span className="text-accent-500 text-lg">↓</span>
                    </p>
                  </div>
                </a>

                <a
                  href="tel:+27828997062"
                  className="group flex items-start gap-5 p-6 bg-white border border-gray-200/80 rounded-2xl hover:shadow-xl hover:border-accent-300/70 transition-all duration-300 overflow-hidden"
                >
                  <div className="w-14 h-14 bg-gradient-to-br from-accent-100 to-accent-50 rounded-xl flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform duration-300 shadow-sm">
                    <Phone className="w-6 h-6 text-accent-600" />
                  </div>
                  <div className="flex-1 min-w-0">
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
                    <li className="flex items-center gap-3.5 text-base font-light">
                      <span className="flex items-center justify-center w-6 h-6 rounded-full bg-gradient-to-br from-accent-500 to-accent-600 text-white text-xs font-medium flex-shrink-0 shadow-sm">
                        1
                      </span>
                      <span>Quick response within 24 hours</span>
                    </li>
                    <li className="flex items-center gap-3.5 text-base font-light">
                      <span className="flex items-center justify-center w-6 h-6 rounded-full bg-gradient-to-br from-[#D8CFD0] to-[#B1A6A4] text-white text-xs font-medium flex-shrink-0 shadow-sm">
                        2
                      </span>
                      <span>Free discovery call to discuss your needs</span>
                    </li>
                    <li className="flex items-center gap-3.5 text-base font-light">
                      <span className="flex items-center justify-center w-6 h-6 rounded-full bg-gradient-to-br from-primary-400 to-primary-500 text-white text-xs font-medium flex-shrink-0 shadow-sm">
                        3
                      </span>
                      <span>Custom proposal tailored for you</span>
                    </li>
                    <li className="flex items-center gap-3.5 text-base font-light">
                      <span className="flex items-center justify-center w-6 h-6 rounded-full bg-gradient-to-br from-primary-500 to-primary-600 text-white text-xs font-medium flex-shrink-0 shadow-sm">
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
                      className="w-full bg-gradient-to-r from-[#697184] via-[#413F3D] to-[#697184] text-white py-5 rounded-2xl font-semibold text-lg hover:shadow-2xl hover:shadow-[#697184]/30 hover:-translate-y-1 disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:translate-y-0 transition-all duration-300 flex items-center justify-center gap-3 mt-8 tracking-wide"
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
                      <div className="bg-gradient-to-br from-green-50 to-emerald-50 border border-green-300 text-green-800 p-5 rounded-xl shadow-sm flex items-start gap-3">
                        <CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                        <div>
                          <p className="font-medium">
                            Message sent successfully!
                          </p>
                          <p className="text-sm mt-1 text-green-700 font-light">
                            We&apos;ll get back to you within 24 hours.
                          </p>
                        </div>
                      </div>
                    )}

                    {submitStatus === "error" && (
                      <div className="bg-red-50 border border-red-300 text-red-800 p-5 rounded-xl shadow-sm flex items-start gap-3">
                        <AlertCircle className="w-5 h-5 text-red-600 flex-shrink-0 mt-0.5" />
                        <div>
                          <p className="font-medium">Something went wrong</p>
                          <p className="text-sm mt-1 text-red-700 font-light">
                            {errorMessage ||
                              "Please try again or email us directly at hello@virtuserve.com"}
                          </p>
                        </div>
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
        className="relative py-28 md:py-40 bg-gradient-to-br from-slate-50 via-gray-50 to-primary-50/30 overflow-hidden"
      >
        {/* Elegant background effects */}
        <div className="absolute inset-0">
          <div className="absolute top-0 left-1/4 w-[500px] h-[500px] bg-gradient-radial from-accent-500/8 to-transparent blur-3xl" />
          <div className="absolute bottom-0 right-1/4 w-[600px] h-[600px] bg-gradient-radial from-primary-500/10 to-transparent blur-3xl" />
          <div className="absolute top-1/2 left-0 w-[400px] h-[400px] bg-gradient-radial from-slate-400/5 to-transparent blur-3xl" />
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_120%,rgba(120,119,198,0.03),rgba(255,255,255,0))]" />

          {/* Subtle grid pattern */}
          <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808008_1px,transparent_1px),linear-gradient(to_bottom,#80808008_1px,transparent_1px)] bg-[size:64px_64px]" />
        </div>

        <PageContainer>
          <div className="relative z-10 text-center mb-20 md:mb-24">
            <div className="inline-flex items-center gap-2.5 bg-gradient-to-r from-slate-50/95 via-primary-50/90 to-slate-50/95 backdrop-blur-sm border border-slate-700/30 rounded-full px-6 py-3 mb-8 shadow-lg hover:shadow-xl hover:border-slate-900/40 transition-all duration-300">
              <div className="w-2 h-2 rounded-full bg-gradient-to-br from-slate-900 to-primary-950 shadow-sm"></div>
              <span className="text-xs font-semibold bg-gradient-to-r from-slate-900 to-primary-950 bg-clip-text text-transparent uppercase tracking-[0.2em]">
                Book a Call
              </span>
            </div>
            <h2 className="text-5xl md:text-6xl lg:text-7xl font-extralight mb-8 text-gray-900 tracking-tight leading-tight">
              Choose Your{" "}
              <span className="bg-gradient-to-r from-slate-700 via-primary-800 to-slate-800 bg-clip-text text-transparent font-light">
                Time
              </span>
            </h2>
            <p className="text-xl md:text-2xl text-gray-600 font-light max-w-3xl mx-auto leading-relaxed">
              Select a convenient slot for your free 30-minute discovery call
            </p>
            <div className="flex items-center justify-center gap-4 mt-8">
              <div className="h-px w-24 bg-gradient-to-r from-transparent via-slate-700/40 to-slate-900/30"></div>
              <div className="w-3 h-3 rounded-full bg-gradient-to-br from-slate-900 to-primary-950 shadow-lg shadow-slate-900/30"></div>
              <div className="h-px w-24 bg-gradient-to-l from-transparent via-slate-700/40 to-slate-900/30"></div>
            </div>
          </div>

          <div className="relative z-10">
            <CalendlyWidget />
          </div>
        </PageContainer>
      </section>
    </main>
  );
}
