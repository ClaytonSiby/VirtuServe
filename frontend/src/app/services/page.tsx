"use client";

import {
  CheckCircle,
  Clock,
  DollarSign,
  Headphones,
  TrendingUp,
  FileText,
  Calendar as CalendarIcon,
  Mail as MailIcon,
  ArrowRight,
  Lightbulb,
  Award,
  Users,
  Shield,
} from "lucide-react";
import Link from "next/link";
import PageContainer from "@/components/ui/PageContainer";
import { useState, useEffect } from "react";

export default function Services() {
  const [currency, setCurrency] = useState<"GBP" | "ZAR">("GBP");
  const [currencySymbol, setCurrencySymbol] = useState("£");

  useEffect(() => {
    // Detect user location
    const detectLocation = async () => {
      try {
        // Try to get timezone first
        const timezone = Intl.DateTimeFormat().resolvedOptions().timeZone;

        if (
          timezone.includes("Africa/Johannesburg") ||
          timezone.includes("Africa/")
        ) {
          setCurrency("ZAR");
          setCurrencySymbol("R");
        } else {
          // Default to GBP, or use IP geolocation API if needed
          setCurrency("GBP");
          setCurrencySymbol("£");
        }
      } catch {
        // Default to GBP on error
        setCurrency("GBP");
        setCurrencySymbol("£");
      }
    };

    detectLocation();
  }, []);

  // Pricing in GBP and ZAR (approximate conversion: 1 GBP = 23 ZAR)
  const pricing = {
    starter: {
      GBP: { monthly: 800, hourly: 20, placement: 1000 },
      ZAR: { monthly: 18400, hourly: 460, placement: 23000 },
    },
    professional: {
      GBP: { monthly: 1280, hourly: 16, placement: 1000 },
      ZAR: { monthly: 29440, hourly: 368, placement: 23000 },
    },
    expertise: {
      GBP: { monthly: 2240, hourly: 14, placement: 1000 },
      ZAR: { monthly: 51520, hourly: 322, placement: 23000 },
    },
  };

  const services = [
    {
      icon: FileText,
      title: "Administrative Support",
      description:
        "Streamline your daily operations with expert administrative assistance",
      features: [
        "Email management and organization",
        "Calendar coordination and scheduling",
        "Data entry and database management",
        "Document preparation and formatting",
        "Travel arrangements and itinerary planning",
        "Meeting coordination and minutes",
      ],
    },
    {
      icon: Headphones,
      title: "Customer Service",
      description:
        "Enhance your client relationships with professional customer support",
      features: [
        "Client inquiry handling and response",
        "Customer relationship management (CRM)",
        "Support ticket management",
        "Live chat support",
        "Follow-up communications",
        "Customer satisfaction surveys",
      ],
    },
    {
      icon: TrendingUp,
      title: "Digital Marketing",
      description:
        "Boost your online presence with strategic digital marketing support",
      features: [
        "Social media management and posting",
        "Content creation and copywriting",
        "Email marketing campaigns",
        "Basic SEO optimization",
        "Analytics and reporting",
        "Community engagement management",
      ],
    },
    {
      icon: CalendarIcon,
      title: "Project Coordination",
      description: "Keep your projects on track with organized coordination",
      features: [
        "Project timeline management",
        "Team communication facilitation",
        "Resource allocation and tracking",
        "Progress monitoring and reporting",
        "Deadline management",
        "Stakeholder updates",
      ],
    },
    {
      icon: MailIcon,
      title: "Email & Communication Management",
      description:
        "Never miss an important message with professional inbox management",
      features: [
        "Email inbox organization and filtering",
        "Priority message identification",
        "Response drafting and sending",
        "Newsletter management",
        "Subscription management",
        "Spam filtering and cleanup",
      ],
    },
    {
      icon: DollarSign,
      title: "Basic Bookkeeping",
      description:
        "Keep your finances organized with basic bookkeeping support",
      features: [
        "Invoice preparation and tracking",
        "Expense tracking and categorization",
        "Receipt organization",
        "Payment follow-ups",
        "Financial report preparation",
        "Budget monitoring assistance",
      ],
    },
  ];

  return (
    <main className="min-h-screen bg-white">
      {/* Hero Section - Minimal & Clean */}
      <section className="relative pt-32 pb-20 md:pt-40 md:pb-24 overflow-hidden bg-[#FAFAF9]">
        {/* Elegant organic background */}
        <div className="absolute inset-0">
          {/* Subtle layered gradient backdrop */}
          <div className="absolute inset-0 bg-gradient-to-br from-[#F2F1EF]/60 via-[#FAFAF9] to-[#D8CFD0]/30"></div>

          {/* Elegant flowing organic shapes */}
          <div className="absolute top-0 right-0 w-[600px] h-[600px] opacity-20">
            <svg viewBox="0 0 600 600" className="w-full h-full">
              <path
                d="M150,50 Q250,80 350,50 T550,100 Q580,200 500,300 T400,500 Q300,550 200,480 T50,300 Q20,150 150,50 Z"
                fill="url(#gradient-blob1)"
              />
              <defs>
                <linearGradient
                  id="gradient-blob1"
                  x1="0%"
                  y1="0%"
                  x2="100%"
                  y2="100%"
                >
                  <stop offset="0%" stopColor="#697184" stopOpacity="0.15" />
                  <stop offset="100%" stopColor="#B1A6A4" stopOpacity="0.25" />
                </linearGradient>
              </defs>
            </svg>
          </div>

          <div className="absolute bottom-0 left-0 w-[600px] h-[600px] opacity-20">
            <svg viewBox="0 0 600 600" className="w-full h-full">
              <path
                d="M100,150 Q200,100 300,150 T500,200 Q550,300 480,400 T350,550 Q250,580 150,500 T50,350 Q30,200 100,150 Z"
                fill="url(#gradient-blob2)"
              />
              <defs>
                <linearGradient
                  id="gradient-blob2"
                  x1="0%"
                  y1="0%"
                  x2="100%"
                  y2="100%"
                >
                  <stop offset="0%" stopColor="#D8CFD0" stopOpacity="0.2" />
                  <stop offset="100%" stopColor="#697184" stopOpacity="0.15" />
                </linearGradient>
              </defs>
            </svg>
          </div>

          {/* Minimal dot pattern overlay */}
          <div
            className="absolute inset-0"
            style={{
              backgroundImage:
                "radial-gradient(circle, rgba(105, 113, 132, 0.08) 1px, transparent 1px)",
              backgroundSize: "30px 30px",
            }}
          ></div>

          {/* Subtle light rays */}
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[1px] h-32 bg-gradient-to-b from-[#697184]/20 to-transparent"></div>
          <div className="absolute top-0 left-1/3 w-[1px] h-24 bg-gradient-to-b from-[#B1A6A4]/15 to-transparent"></div>
          <div className="absolute top-0 left-2/3 w-[1px] h-24 bg-gradient-to-b from-[#D8CFD0]/15 to-transparent"></div>
        </div>

        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto text-center space-y-6">
            <div className="inline-flex items-center gap-2 bg-white/80 backdrop-blur-md border border-[#697184]/20 rounded-full px-5 py-2.5 shadow-sm">
              <span className="text-xs font-semibold text-[#697184] uppercase tracking-[0.2em]">
                What We Offer
              </span>
            </div>

            <h1 className="text-6xl md:text-7xl lg:text-8xl font-extralight text-[#413F3D] leading-[0.95] tracking-tighter">
              Our Services
            </h1>

            <p className="text-xl md:text-2xl text-[#413F3D]/80 font-light leading-relaxed max-w-2xl mx-auto">
              Comprehensive virtual assistant solutions designed to transform
              your business operations
            </p>
          </div>
        </div>
      </section>

      {/* Premium Trust Indicators */}
      <section className="py-16 md:py-20 relative overflow-hidden">
        {/* Subtle background elements */}
        <div className="absolute inset-0 bg-gradient-to-b from-[#F2F1EF] via-[#D8CFD0]/20 to-[#F2F1EF]"></div>
        <div className="absolute top-1/2 left-1/4 w-96 h-96 bg-gradient-radial from-[#B1A6A4]/15 to-transparent blur-3xl opacity-60"></div>
        <div className="absolute top-1/2 right-1/4 w-80 h-80 bg-gradient-radial from-[#697184]/10 to-transparent blur-3xl opacity-50"></div>

        <PageContainer>
          <div className="relative z-10">
            {/* Refined section intro */}
            <div className="text-center mb-12">
              <div className="inline-flex items-center gap-2.5 px-6 py-2.5 rounded-full bg-[#F2F1EF]/80 backdrop-blur-sm border border-[#697184]/30 mb-6 shadow-md">
                <span className="text-xs font-semibold text-[#697184] tracking-[0.25em] uppercase">
                  Why Choose Us
                </span>
              </div>
              <p className="text-lg md:text-xl text-[#697184]/80 font-light max-w-2xl mx-auto leading-relaxed">
                Excellence in every interaction, security in every process
              </p>
            </div>

            {/* Premium trust badges grid */}
            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {/* Badge 1 - Innovative Working */}
              <div className="group relative">
                <div className="absolute inset-0 bg-[#D8CFD0]/10 rounded-3xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                <div className="relative bg-white border-2 border-slate-900/10 rounded-3xl p-8 hover:border-slate-900/25 transition-all duration-500 shadow-[0_8px_30px_rgb(0,0,0,0.04)] hover:shadow-[0_20px_60px_-15px_rgba(15,23,42,0.2)] hover:-translate-y-1">
                  {/* Icon */}
                  <div className="relative mb-6 flex justify-center">
                    <div className="absolute inset-0 bg-[#697184] rounded-2xl blur-lg opacity-20 group-hover:opacity-30 transition-opacity duration-500"></div>
                    <div className="relative w-16 h-16 bg-[#697184] rounded-2xl flex items-center justify-center group-hover:scale-110 group-hover:rotate-6 transition-all duration-500 shadow-xl border-2 border-[#697184]/50">
                      <Lightbulb className="w-8 h-8 text-white" />
                    </div>
                  </div>

                  <h3 className="text-base font-semibold text-slate-900 text-center leading-tight group-hover:text-primary-900 transition-colors duration-300">
                    Innovative Working Activities
                  </h3>
                </div>
              </div>

              {/* Badge 2 - Client Satisfaction */}
              <div className="group relative">
                <div className="absolute inset-0 bg-[#D8CFD0]/10 rounded-3xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                <div className="relative bg-white border-2 border-slate-900/10 rounded-3xl p-8 hover:border-slate-900/25 transition-all duration-500 shadow-[0_8px_30px_rgb(0,0,0,0.04)] hover:shadow-[0_20px_60px_-15px_rgba(15,23,42,0.2)] hover:-translate-y-1">
                  <div className="relative mb-6 flex justify-center">
                    <div className="absolute inset-0 bg-[#697184] rounded-2xl blur-lg opacity-20 group-hover:opacity-30 transition-opacity duration-500"></div>
                    <div className="relative w-16 h-16 bg-[#697184] rounded-2xl flex items-center justify-center group-hover:scale-110 group-hover:rotate-6 transition-all duration-500 shadow-xl border-2 border-[#697184]/50">
                      <Award className="w-8 h-8 text-white" />
                    </div>
                  </div>

                  <h3 className="text-base font-semibold text-slate-900 text-center leading-tight group-hover:text-primary-900 transition-colors duration-300">
                    100% Client Satisfaction
                  </h3>
                </div>
              </div>

              {/* Badge 3 - Dedicated Team */}
              <div className="group relative">
                <div className="absolute inset-0 bg-[#D8CFD0]/10 rounded-3xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                <div className="relative bg-white border-2 border-slate-900/10 rounded-3xl p-8 hover:border-slate-900/25 transition-all duration-500 shadow-[0_8px_30px_rgb(0,0,0,0.04)] hover:shadow-[0_20px_60px_-15px_rgba(15,23,42,0.2)] hover:-translate-y-1">
                  <div className="relative mb-6 flex justify-center">
                    <div className="absolute inset-0 bg-[#697184] rounded-2xl blur-lg opacity-20 group-hover:opacity-30 transition-opacity duration-500"></div>
                    <div className="relative w-16 h-16 bg-[#697184] rounded-2xl flex items-center justify-center group-hover:scale-110 group-hover:rotate-6 transition-all duration-500 shadow-xl border-2 border-[#697184]/50">
                      <Users className="w-8 h-8 text-white" />
                    </div>
                  </div>

                  <h3 className="text-base font-semibold text-slate-900 text-center leading-tight group-hover:text-primary-900 transition-colors duration-300">
                    Dedicated Team Member
                  </h3>
                </div>
              </div>

              {/* Badge 4 - Safe & Secure */}
              <div className="group relative">
                <div className="absolute inset-0 bg-[#D8CFD0]/10 rounded-3xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                <div className="relative bg-white border-2 border-slate-900/10 rounded-3xl p-8 hover:border-slate-900/25 transition-all duration-500 shadow-[0_8px_30px_rgb(0,0,0,0.04)] hover:shadow-[0_20px_60px_-15px_rgba(15,23,42,0.2)] hover:-translate-y-1">
                  <div className="relative mb-6 flex justify-center">
                    <div className="absolute inset-0 bg-[#697184] rounded-2xl blur-lg opacity-20 group-hover:opacity-30 transition-opacity duration-500"></div>
                    <div className="relative w-16 h-16 bg-[#697184] rounded-2xl flex items-center justify-center group-hover:scale-110 group-hover:rotate-6 transition-all duration-500 shadow-xl border-2 border-[#697184]/50">
                      <Shield className="w-8 h-8 text-white" />
                    </div>
                  </div>

                  <h3 className="text-base font-semibold text-slate-900 text-center leading-tight group-hover:text-primary-900 transition-colors duration-300">
                    Safe &amp; Secure Environment
                  </h3>
                </div>
              </div>
            </div>
          </div>
        </PageContainer>
      </section>

      {/* Elegant Divider */}
      <section className="py-12 relative overflow-hidden">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="flex items-center justify-center gap-8">
              {/* Left decoration */}
              <div className="flex items-center gap-3">
                <div className="flex gap-1.5">
                  <div className="w-1 h-1 rounded-full bg-slate-900/20"></div>
                  <div className="w-1 h-1 rounded-full bg-slate-900/30"></div>
                  <div className="w-1 h-1 rounded-full bg-slate-900/40"></div>
                </div>
                <div className="h-px w-24 md:w-40 bg-gradient-to-r from-transparent via-slate-900/30 to-slate-900/50"></div>
              </div>

              {/* Center ornament */}
              <div className="relative flex-shrink-0">
                <div className="absolute inset-0 bg-[#697184] rounded-full blur-md opacity-30"></div>
                <div className="relative w-4 h-4 rounded-full bg-[#697184] shadow-xl ring-4 ring-white/80"></div>
              </div>

              {/* Right decoration */}
              <div className="flex items-center gap-3">
                <div className="h-px w-24 md:w-40 bg-gradient-to-l from-transparent via-slate-900/30 to-slate-900/50"></div>
                <div className="flex gap-1.5">
                  <div className="w-1 h-1 rounded-full bg-slate-900/40"></div>
                  <div className="w-1 h-1 rounded-full bg-slate-900/30"></div>
                  <div className="w-1 h-1 rounded-full bg-slate-900/20"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="relative py-20 md:py-24 bg-gradient-to-b from-[#F2F1EF]/50 via-white/80 to-[#F2F1EF]/50">
        {/* Elegant subtle background */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute top-0 left-1/4 w-[500px] h-[500px] bg-[#D8CFD0]/25 blur-3xl" />
          <div className="absolute bottom-0 right-1/4 w-[600px] h-[600px] bg-[#B1A6A4]/15 blur-3xl" />

          {/* Decorative circles */}
          <div className="absolute top-20 right-20 w-64 h-64 border border-[#697184]/8 rounded-full"></div>
          <div className="absolute bottom-20 left-20 w-80 h-80 border border-[#B1A6A4]/8 rounded-full"></div>
        </div>

        <PageContainer>
          {/* Redesigned centered header */}
          <div className="relative z-10 text-center mb-16">
            {/* Premium badge */}
            <div className="inline-flex items-center gap-2.5 px-7 py-3 rounded-full bg-white/80 border-2 border-[#697184]/30 mb-8 shadow-lg hover:shadow-xl hover:border-[#697184]/40 transition-all duration-500 group backdrop-blur-sm">
              <span className="text-[11px] font-extrabold text-[#697184] tracking-[0.3em] uppercase">
                Service Breakdown
              </span>
            </div>

            {/* Large heading */}
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-light text-[#413F3D] mb-5 tracking-tight leading-[1.1]">
              Explore Our{" "}
              <span className="font-normal text-[#697184]">Services</span>
            </h2>

            {/* Subtitle */}
            <p className="text-lg md:text-xl text-[#697184] font-light max-w-2xl mx-auto leading-relaxed mb-8">
              Comprehensive solutions tailored to your needs
            </p>

            {/* Subtle accent */}
            <div className="flex items-center justify-center gap-4">
              <div className="h-px w-16 bg-[#697184]/30"></div>
              <div className="w-1.5 h-1.5 rounded-full bg-[#697184]"></div>
              <div className="h-px w-16 bg-[#697184]/30"></div>
            </div>
          </div>
          <div className="relative z-10 grid lg:grid-cols-2 gap-6 md:gap-8">
            {services.map((service, index) => (
              <div
                key={index}
                className="relative bg-white border border-[#697184]/25 p-8 md:p-10 rounded-3xl shadow-sm hover:shadow-2xl hover:border-[#697184]/45 transition-all duration-500 hover:-translate-y-2 group overflow-hidden"
              >
                {/* Elegant background accent */}
                <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-radial from-[#B1A6A4]/30 to-transparent blur-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                <div className="relative z-10">
                  <div className="flex items-start gap-5 mb-6">
                    <div className="w-16 h-16 bg-[#697184] rounded-2xl flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-all duration-500 border border-[#697184]/50">
                      <service.icon className="w-8 h-8 text-[#F2F1EF]" />
                    </div>
                    <div className="flex-1">
                      <h3 className="text-2xl font-light text-gray-900 mb-2 tracking-tight">
                        {service.title}
                      </h3>
                      <p className="text-gray-600 leading-relaxed text-sm">
                        {service.description}
                      </p>
                    </div>
                  </div>
                  <div className="h-px bg-gradient-to-r from-transparent via-[#697184]/25 to-transparent mb-6" />
                  <ul className="space-y-3">
                    {service.features.map((feature, fIndex) => (
                      <li
                        key={fIndex}
                        className="flex items-start gap-3 group/item"
                      >
                        <div className="w-5 h-5 rounded-full bg-[#D8CFD0]/40 border border-[#697184]/40 flex items-center justify-center flex-shrink-0 mt-0.5 group-hover/item:scale-110 transition-transform">
                          <CheckCircle className="w-3.5 h-3.5 text-[#697184]" />
                        </div>
                        <span className="text-gray-700 font-light leading-relaxed">
                          {feature}
                        </span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </PageContainer>
      </section>

      {/* How It Works */}
      <section className="py-20 md:py-24 bg-white">
        <PageContainer>
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 bg-[#D8CFD0]/20 border border-[#697184]/20 rounded-full px-5 py-2.5 mb-6">
              <div className="w-2 h-2 bg-[#697184] rounded-full animate-pulse"></div>
              <span className="text-sm font-light text-[#413F3D] uppercase tracking-[0.2em]">
                Simple Process
              </span>
            </div>
            <h2 className="text-4xl md:text-5xl font-light text-[#413F3D] mb-4">
              How It Works
            </h2>
          </div>
          <div className="relative grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {/* Premium Animated Connectors with Multiple Visual Layers */}
            <div className="hidden md:block absolute top-10 left-0 right-0 h-1">
              {/* Base gradient line with subtle glow */}
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-[#697184]/30 to-transparent opacity-30 blur-[1px]" />

              {/* First Connector - Enhanced */}
              <div className="absolute left-[16.66%] right-[50%] h-full">
                {/* Static dark gradient base */}
                <div className="absolute inset-0 bg-gradient-to-r from-[#697184]/40 via-[#413F3D]/50 to-[#697184]/40 rounded-full" />

                {/* Flowing shimmer effect */}
                <div className="absolute inset-0 overflow-hidden rounded-full">
                  <div className="absolute inset-0 bg-gradient-to-r from-transparent via-[#F2F1EF]/40 to-transparent animate-flowRight" />
                </div>

                {/* Flowing color gradient */}
                <div className="absolute inset-0 overflow-hidden rounded-full">
                  <div className="absolute inset-0 bg-gradient-to-r from-transparent via-[#B1A6A4]/60 to-transparent animate-flowRight" />
                </div>

                {/* Glow effect underneath */}
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-[#B1A6A4]/20 to-transparent blur-md" />

                {/* Pulsing dot */}
                <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2">
                  <div className="relative">
                    <div className="absolute inset-0 w-3 h-3 bg-[#B1A6A4] rounded-full blur-sm animate-pulse" />
                    <div className="relative w-2.5 h-2.5 bg-gradient-to-br from-[#B1A6A4] to-[#697184] rounded-full shadow-lg shadow-[#B1A6A4]/50 animate-pulse" />
                  </div>
                </div>

                {/* Particle effects */}
                <div className="absolute left-1/4 top-1/2 -translate-y-1/2 w-1 h-1 bg-[#B1A6A4]/60 rounded-full animate-pulse" />
                <div
                  className="absolute left-3/4 top-1/2 -translate-y-1/2 w-1 h-1 bg-[#697184]/60 rounded-full animate-pulse"
                  style={{ animationDelay: "0.3s" }}
                />
              </div>

              {/* Second Connector - Enhanced with delay */}
              <div className="absolute left-[50%] right-[16.66%] h-full">
                {/* Static dark gradient base */}
                <div className="absolute inset-0 bg-gradient-to-r from-[#697184]/40 via-[#413F3D]/50 to-[#697184]/40 rounded-full" />

                {/* Flowing shimmer effect */}
                <div className="absolute inset-0 overflow-hidden rounded-full">
                  <div
                    className="absolute inset-0 bg-gradient-to-r from-transparent via-[#F2F1EF]/40 to-transparent animate-flowRight"
                    style={{ animationDelay: "1s" }}
                  />
                </div>

                {/* Flowing color gradient */}
                <div className="absolute inset-0 overflow-hidden rounded-full">
                  <div
                    className="absolute inset-0 bg-gradient-to-r from-transparent via-[#D8CFD0]/60 to-transparent animate-flowRight"
                    style={{ animationDelay: "1s" }}
                  />
                </div>

                {/* Glow effect underneath */}
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-[#D8CFD0]/20 to-transparent blur-md" />

                {/* Pulsing dot */}
                <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2">
                  <div className="relative">
                    <div
                      className="absolute inset-0 w-3 h-3 bg-[#D8CFD0] rounded-full blur-sm animate-pulse"
                      style={{ animationDelay: "0.5s" }}
                    />
                    <div
                      className="relative w-2.5 h-2.5 bg-gradient-to-br from-[#D8CFD0] to-[#697184] rounded-full shadow-lg shadow-[#D8CFD0]/50 animate-pulse"
                      style={{ animationDelay: "0.5s" }}
                    />
                  </div>
                </div>

                {/* Particle effects */}
                <div
                  className="absolute left-1/4 top-1/2 -translate-y-1/2 w-1 h-1 bg-[#D8CFD0]/60 rounded-full animate-pulse"
                  style={{ animationDelay: "0.8s" }}
                />
                <div
                  className="absolute left-3/4 top-1/2 -translate-y-1/2 w-1 h-1 bg-[#B1A6A4]/60 rounded-full animate-pulse"
                  style={{ animationDelay: "1.1s" }}
                />
              </div>
            </div>

            {/* Step 1 */}
            <div className="text-center group relative">
              <div className="relative inline-block">
                <div className="absolute inset-0 bg-gradient-to-br from-slate-900/20 via-primary-950/20 to-slate-950/20 rounded-2xl blur-xl group-hover:blur-2xl transition-all duration-500" />
                <div className="relative w-20 h-20 rounded-2xl flex items-center justify-center text-3xl font-semibold mx-auto mb-6 bg-[#697184] text-white group-hover:scale-110 group-hover:rotate-3 transition-all duration-500 shadow-lg border border-slate-800">
                  1
                </div>
              </div>
              <h3 className="text-xl font-semibold mb-3 text-slate-900 tracking-tight">
                Book a Discovery Call
              </h3>
              <p className="text-[#413F3D]/70 leading-relaxed font-light">
                Schedule a free discovery call to discuss your needs and how we
                can help
              </p>
            </div>

            {/* Step 2 */}
            <div className="text-center group relative">
              <div className="relative inline-block">
                <div className="absolute inset-0 bg-gradient-to-br from-slate-900/20 via-primary-950/20 to-slate-950/20 rounded-2xl blur-xl group-hover:blur-2xl transition-all duration-500" />
                <div className="relative w-20 h-20 rounded-2xl flex items-center justify-center text-3xl font-semibold mx-auto mb-6 bg-[#697184] text-white group-hover:scale-110 group-hover:rotate-3 transition-all duration-500 shadow-lg border border-slate-800">
                  2
                </div>
              </div>
              <h3 className="text-xl font-semibold mb-3 text-slate-900 tracking-tight">
                Custom Plan Creation
              </h3>
              <p className="text-[#413F3D]/70 leading-relaxed font-light">
                We&apos;ll create a tailored service plan based on your specific
                requirements
              </p>
            </div>

            {/* Step 3 - Fixed gradient */}
            <div className="text-center group relative">
              <div className="relative inline-block">
                <div className="absolute inset-0 bg-gradient-to-br from-slate-900/20 via-primary-950/20 to-slate-950/20 rounded-2xl blur-xl group-hover:blur-2xl transition-all duration-500" />
                <div className="relative w-20 h-20 rounded-2xl flex items-center justify-center text-3xl font-semibold mx-auto mb-6 bg-[#697184] text-white group-hover:scale-110 group-hover:rotate-3 transition-all duration-500 shadow-lg border border-slate-800">
                  3
                </div>
              </div>
              <h3 className="text-xl font-semibold mb-3 text-slate-900 tracking-tight">
                Get Started
              </h3>
              <p className="text-[#413F3D]/70 leading-relaxed font-light">
                We begin working on your tasks with regular updates and clear
                communication
              </p>
            </div>
          </div>
        </PageContainer>
      </section>

      {/* Pricing Tiers */}
      <section className="relative py-20 md:py-32 overflow-hidden">
        {/* Unique sophisticated background */}
        <div className="absolute inset-0">
          {/* Base gradient with soft color transitions */}
          <div className="absolute inset-0 bg-gradient-to-br from-white via-[#F2F1EF]/30 to-white" />

          {/* Layered mesh gradients for depth */}
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_left,_var(--tw-gradient-stops))] from-[#697184]/5 via-transparent to-transparent" />
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom_right,_var(--tw-gradient-stops))] from-[#B1A6A4]/6 via-transparent to-transparent" />
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-[#D8CFD0]/4 via-transparent to-transparent" />

          {/* Decorative floating orbs */}
          <div className="absolute top-20 left-10 w-72 h-72 bg-gradient-to-br from-[#697184]/8 to-transparent rounded-full blur-3xl opacity-60" />
          <div className="absolute bottom-20 right-10 w-96 h-96 bg-gradient-to-tl from-[#D8CFD0]/10 to-transparent rounded-full blur-3xl opacity-50" />
          <div className="absolute top-1/2 left-1/3 w-80 h-80 bg-gradient-to-tr from-[#B1A6A4]/6 to-transparent rounded-full blur-3xl opacity-40" />

          {/* Elegant grid pattern overlay */}
          <div className="absolute inset-0 opacity-[0.015]">
            <div
              className="absolute inset-0"
              style={{
                backgroundImage: `
                  repeating-linear-gradient(0deg, #697184 0px, #697184 1px, transparent 1px, transparent 60px),
                  repeating-linear-gradient(90deg, #697184 0px, #697184 1px, transparent 1px, transparent 60px)
                `,
              }}
            />
          </div>

          {/* Subtle dot pattern */}
          <div className="absolute inset-0 opacity-[0.03]">
            <div
              className="absolute inset-0"
              style={{
                backgroundImage: `radial-gradient(circle at 2px 2px, rgba(105, 113, 132, 0.4) 1px, transparent 0)`,
                backgroundSize: "40px 40px",
              }}
            />
          </div>

          {/* Floating decorative shapes */}
          <div className="absolute top-32 right-20 w-64 h-64 border border-[#697184]/10 rounded-full opacity-30" />
          <div className="absolute bottom-32 left-20 w-56 h-56 border-2 border-[#B1A6A4]/10 rounded-full opacity-40" />

          {/* Gradient accent lines */}
          <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#697184]/20 to-transparent" />
          <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#B1A6A4]/20 to-transparent" />
        </div>

        <PageContainer>
          <div className="relative z-10 text-center mb-16">
            <div className="inline-flex items-center gap-2 bg-white/80 backdrop-blur-sm border border-[#697184]/10 rounded-full px-5 py-2.5 mb-8 shadow-sm">
              <DollarSign
                className="w-4 h-4 text-[#697184]/70"
                strokeWidth={1.5}
              />
              <span className="text-xs font-medium text-[#697184]/70 uppercase tracking-[0.2em]">
                Pricing Plans
              </span>
            </div>
            <h2 className="text-5xl md:text-6xl font-normal text-[#413F3D] mb-6 leading-tight">
              Flexible Pricing Options
            </h2>
            <p className="text-lg md:text-xl text-[#697184]/70 font-light leading-relaxed max-w-2xl mx-auto">
              Choose a plan that works for your business needs and budget
            </p>
          </div>

          <div className="relative z-10 grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-[1400px] mx-auto px-4">
            {/* Starter */}
            <div className="group relative cursor-pointer">
              <div className="relative bg-white rounded-3xl p-6 border-2 border-[#697184]/15 hover:border-[#697184]/30 transition-all duration-300 hover:shadow-xl min-h-[500px] flex flex-col">
                <div className="mb-4">
                  <h3 className="text-2xl font-medium text-[#413F3D] mb-2">
                    Starter
                  </h3>
                  <p className="text-sm text-[#697184]/70">
                    40 hours per month
                  </p>
                </div>

                <div className="mb-4">
                  <p className="text-xs text-[#697184]/60 font-light mb-1">
                    from
                  </p>
                  <div className="flex items-baseline gap-1.5 mb-0.5">
                    <span className="text-4xl font-light text-[#413F3D] tracking-tight">
                      {currencySymbol}
                      {pricing.starter[currency].monthly.toLocaleString()}
                    </span>
                    <span className="text-xs text-[#697184]/60 font-light">
                      /month
                    </span>
                  </div>
                  <div className="text-xs text-[#697184]/60 font-light">
                    {currencySymbol}
                    {pricing.starter[currency].hourly}/hr
                  </div>
                </div>

                <div className="space-y-3">
                  <div className="flex items-start gap-3">
                    <CheckCircle
                      className="w-5 h-5 text-[#697184]/70 flex-shrink-0 mt-0.5"
                      strokeWidth={1.5}
                    />
                    <span className="text-sm text-[#413F3D]/80">
                      Onboarding & account support
                    </span>
                  </div>
                  <div className="flex items-start gap-3">
                    <CheckCircle
                      className="w-5 h-5 text-[#697184]/70 flex-shrink-0 mt-0.5"
                      strokeWidth={1.5}
                    />
                    <span className="text-sm text-[#413F3D]/80">
                      No setup fees or recruitment costs
                    </span>
                  </div>
                </div>
              </div>
            </div>

            {/* Professional (Popular) */}
            <div className="group relative cursor-pointer">
              <div className="absolute -top-4 left-1/2 -translate-x-1/2 z-10">
                <div className="bg-[#413F3D] text-white px-5 py-1.5 rounded-full text-xs font-medium shadow-lg">
                  Popular
                </div>
              </div>
              <div className="relative bg-white rounded-3xl p-6 border-2 border-[#413F3D]/80 hover:border-[#413F3D] transition-all duration-300 shadow-lg hover:shadow-2xl pt-10 min-h-[500px] flex flex-col">
                <div className="mb-4">
                  <h3 className="text-2xl font-medium text-[#413F3D] mb-2">
                    Professional
                  </h3>
                  <p className="text-sm text-[#697184]/70">
                    80 hours per month
                  </p>
                </div>

                <div className="mb-4">
                  <p className="text-xs text-[#697184]/60 font-light mb-1">
                    from
                  </p>
                  <div className="flex items-baseline gap-1.5 mb-0.5">
                    <span className="text-4xl font-light text-[#413F3D] tracking-tight">
                      {currencySymbol}
                      {pricing.professional[currency].monthly.toLocaleString()}
                    </span>
                    <span className="text-xs text-[#697184]/60 font-light">
                      /month
                    </span>
                  </div>
                  <div className="text-xs text-[#697184]/60 font-light">
                    {currencySymbol}
                    {pricing.professional[currency].hourly}/hr
                  </div>
                </div>

                <div className="space-y-3">
                  <div className="flex items-start gap-3">
                    <CheckCircle
                      className="w-5 h-5 text-[#697184]/70 flex-shrink-0 mt-0.5"
                      strokeWidth={1.5}
                    />
                    <span className="text-sm text-[#413F3D]/80">
                      Onboarding & account support
                    </span>
                  </div>
                  <div className="flex items-start gap-3">
                    <CheckCircle
                      className="w-5 h-5 text-[#697184]/70 flex-shrink-0 mt-0.5"
                      strokeWidth={1.5}
                    />
                    <span className="text-sm text-[#413F3D]/80">
                      No setup fees or recruitment costs
                    </span>
                  </div>
                </div>
              </div>
            </div>

            {/* Enterprise */}
            <div className="group relative cursor-pointer">
              <div className="relative bg-white rounded-3xl p-6 border-2 border-[#697184]/15 hover:border-[#697184]/30 transition-all duration-300 hover:shadow-xl min-h-[500px] flex flex-col">
                <div className="mb-4">
                  <h3 className="text-2xl font-medium text-[#413F3D] mb-2">
                    Expert
                  </h3>
                  <p className="text-sm text-[#697184]/70">
                    160 hours per month
                  </p>
                </div>

                <div className="mb-4">
                  <p className="text-xs text-[#697184]/60 font-light mb-1">
                    from
                  </p>
                  <div className="flex items-baseline gap-1.5 mb-0.5">
                    <span className="text-4xl font-light text-[#413F3D] tracking-tight">
                      {currencySymbol}
                      {pricing.expertise[currency].monthly.toLocaleString()}
                    </span>
                    <span className="text-xs text-[#697184]/60 font-light">
                      /month
                    </span>
                  </div>
                  <div className="text-xs text-[#697184]/60 font-light">
                    {currencySymbol}
                    {pricing.expertise[currency].hourly}/hr
                  </div>
                </div>

                <div className="space-y-3">
                  <div className="flex items-start gap-3">
                    <CheckCircle
                      className="w-5 h-5 text-[#697184]/70 flex-shrink-0 mt-0.5"
                      strokeWidth={1.5}
                    />
                    <span className="text-sm text-[#413F3D]/80">
                      Onboarding & account support
                    </span>
                  </div>
                  <div className="flex items-start gap-3">
                    <CheckCircle
                      className="w-5 h-5 text-[#697184]/70 flex-shrink-0 mt-0.5"
                      strokeWidth={1.5}
                    />
                    <span className="text-sm text-[#413F3D]/80">
                      No setup fees or recruitment costs
                    </span>
                  </div>
                </div>
              </div>
            </div>

            {/* Custom */}
            <div className="group relative cursor-pointer">
              <div className="relative bg-white rounded-3xl p-6 border-2 border-[#697184]/15 hover:border-[#697184]/30 transition-all duration-300 hover:shadow-xl min-h-[500px] flex flex-col">
                <div className="mb-4">
                  <h3 className="text-2xl font-medium text-[#413F3D] mb-2">
                    Custom
                  </h3>
                  <p className="text-sm text-[#697184]/70">
                    Tailored to your needs
                  </p>
                </div>

                <div className="mb-4">
                  <p className="text-xs text-[#697184]/60 font-light mb-1">
                    <Clock
                      className="w-4 h-4 inline-block mr-1 -mt-0.5"
                      strokeWidth={1.5}
                    />
                    Flexible
                  </p>
                  <div className="flex items-baseline gap-1.5 mb-0.5">
                    <span className="text-4xl font-light text-[#413F3D] tracking-tight">
                      Contact us
                    </span>
                  </div>
                  <div className="text-xs text-[#697184]/60 font-light">
                    for a quote
                  </div>
                </div>

                <div className="space-y-3">
                  <div className="flex items-start gap-3">
                    <CheckCircle
                      className="w-5 h-5 text-[#697184]/70 flex-shrink-0 mt-0.5"
                      strokeWidth={1.5}
                    />
                    <span className="text-sm text-[#413F3D]/80">
                      Time-limited projects
                    </span>
                  </div>
                  <div className="flex items-start gap-3">
                    <CheckCircle
                      className="w-5 h-5 text-[#697184]/70 flex-shrink-0 mt-0.5"
                      strokeWidth={1.5}
                    />
                    <span className="text-sm text-[#413F3D]/80">
                      Ad-hoc tasks
                    </span>
                  </div>
                  <div className="flex items-start gap-3">
                    <CheckCircle
                      className="w-5 h-5 text-[#697184]/70 flex-shrink-0 mt-0.5"
                      strokeWidth={1.5}
                    />
                    <span className="text-sm text-[#413F3D]/80">
                      Multiple hires or teams
                    </span>
                  </div>
                  <div className="flex items-start gap-3">
                    <CheckCircle
                      className="w-5 h-5 text-[#697184]/70 flex-shrink-0 mt-0.5"
                      strokeWidth={1.5}
                    />
                    <span className="text-sm text-[#413F3D]/80">
                      Custom requirements
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </PageContainer>
      </section>

      {/* CTA - Elegant Wave Design */}
      <section className="relative py-28 md:py-40 overflow-hidden bg-gradient-to-b from-[#F2F1EF]/30 via-white/90 to-[#B1A6A4]/10">
        {/* Elegant flowing waves background */}
        <div className="absolute inset-0">
          {/* Wave layer 1 */}
          <div className="absolute bottom-0 left-0 right-0 h-[600px]">
            <svg
              className="absolute bottom-0 w-full h-full"
              viewBox="0 0 1440 600"
              preserveAspectRatio="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M0,350 C320,280 480,320 720,300 C960,280 1120,340 1440,320 L1440,600 L0,600 Z"
                fill="#F2F1EF"
                fillOpacity="0.4"
              />
            </svg>
          </div>

          {/* Wave layer 2 */}
          <div className="absolute bottom-0 left-0 right-0 h-[500px]">
            <svg
              className="absolute bottom-0 w-full h-full"
              viewBox="0 0 1440 500"
              preserveAspectRatio="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M0,280 C360,220 540,260 720,240 C900,220 1080,280 1440,260 L1440,500 L0,500 Z"
                fill="#D8CFD0"
                fillOpacity="0.15"
              />
            </svg>
          </div>

          {/* Wave layer 3 */}
          <div className="absolute bottom-0 left-0 right-0 h-[400px]">
            <svg
              className="absolute bottom-0 w-full h-full"
              viewBox="0 0 1440 400"
              preserveAspectRatio="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M0,200 C400,150 600,180 800,170 C1000,160 1200,190 1440,180 L1440,400 L0,400 Z"
                fill="#B1A6A4"
                fillOpacity="0.1"
              />
            </svg>
          </div>

          {/* Decorative elements */}
          <div className="absolute top-[15%] left-[10%] w-2 h-2 rounded-full bg-[#697184] opacity-20"></div>
          <div className="absolute top-[25%] right-[15%] w-3 h-3 rounded-full bg-[#D8CFD0] opacity-25"></div>
          <div className="absolute top-[50%] left-[20%] w-1.5 h-1.5 rounded-full bg-[#B1A6A4] opacity-20"></div>
          <div className="absolute bottom-[45%] right-[30%] w-2.5 h-2.5 rounded-full bg-[#697184] opacity-15"></div>

          {/* Curved accent lines */}
          <div
            className="absolute top-[30%] left-0 w-full h-px bg-[#697184] opacity-5"
            style={{ transform: "rotate(1.5deg)" }}
          ></div>
          <div
            className="absolute top-[70%] right-0 w-full h-px bg-[#B1A6A4] opacity-5"
            style={{ transform: "rotate(-1.5deg)" }}
          ></div>
        </div>

        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-4xl mx-auto">
            {/* Glass card */}
            <div className="relative bg-white/70 backdrop-blur-2xl rounded-[2.5rem] p-12 md:p-16 shadow-[0_20px_70px_-15px_rgba(105,113,132,0.12)] border border-[#697184]/10 overflow-hidden">
              {/* Subtle accents */}
              <div className="absolute top-0 right-0 w-48 h-48 bg-[#D8CFD0] opacity-5 rounded-full blur-3xl"></div>
              <div className="absolute bottom-0 left-0 w-48 h-48 bg-[#697184] opacity-5 rounded-full blur-3xl"></div>

              <div className="relative z-10 text-center">
                <div className="inline-flex items-center gap-2.5 bg-white border border-[#697184]/15 rounded-full px-5 py-2.5 mb-8 shadow-sm">
                  <span className="text-xs font-medium text-[#697184] uppercase tracking-[0.2em]">
                    Services Provided
                  </span>
                </div>

                <h2 className="text-5xl md:text-6xl lg:text-7xl font-semibold mb-6 text-[#413F3D] leading-[1.1] tracking-tight">
                  Ready to elevate your business?
                </h2>

                <p className="text-xl md:text-2xl text-[#413F3D]/70 font-light leading-relaxed mb-10">
                  Focus on growth while we handle the details
                </p>

                <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-10">
                  <Link
                    href="/contact"
                    className="group px-8 sm:px-10 py-4 sm:py-5 bg-gradient-to-r from-[#697184] via-[#413F3D] to-[#697184] text-white rounded-2xl font-semibold text-base sm:text-lg shadow-lg hover:shadow-xl hover:shadow-[#697184]/30 transition-all duration-300 flex items-center gap-3"
                  >
                    Book Discovery Call
                    <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                  </Link>
                  <a
                    href="tel:+27828997062"
                    className="px-10 py-5 bg-white border-2 border-[#697184]/20 text-[#413F3D] rounded-xl font-medium text-lg hover:border-[#697184]/40 hover:bg-white/80 transition-all duration-300"
                  >
                    +27 82 899 7062
                  </a>
                </div>

                <div className="flex flex-wrap items-center justify-center gap-6 text-sm text-[#413F3D]/70 font-light">
                  <span className="flex items-center gap-2">
                    <CheckCircle className="w-4 h-4 text-[#697184]" />
                    Free consultation
                  </span>
                  <span className="flex items-center gap-2">
                    <CheckCircle className="w-4 h-4 text-[#697184]" />
                    24-hour response
                  </span>
                  <span className="flex items-center gap-2">
                    <CheckCircle className="w-4 h-4 text-[#697184]" />
                    No commitment
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
