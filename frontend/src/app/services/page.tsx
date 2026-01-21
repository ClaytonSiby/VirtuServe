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

export default function Services() {
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
      <section className="relative pt-32 pb-20 md:pt-40 md:pb-24 overflow-hidden bg-gradient-to-br from-white/90 via-[#F2F1EF]/50 to-[#D8CFD0]/8">
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

        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto text-center space-y-6">
            <div className="inline-flex items-center gap-2 bg-white/80 backdrop-blur-md border border-[#697184]/20 rounded-full px-5 py-2.5 shadow-sm">
              <span className="text-xs font-medium text-[#697184] uppercase tracking-[0.25em]">
                What We Offer
              </span>
            </div>

            <h1 className="text-6xl md:text-7xl lg:text-8xl font-extralight text-[#413F3D] leading-tight tracking-tight">
              Our Services
            </h1>

            <p className="text-xl md:text-2xl text-[#413F3D]/70 font-light leading-relaxed max-w-2xl mx-auto">
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
                  <div className="relative mb-6">
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
                  <div className="relative mb-6">
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
                  <div className="relative mb-6">
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
                  <div className="relative mb-6">
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
      <section className="py-20 md:py-32 bg-gradient-to-b from-white to-gray-50">
        <PageContainer>
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 bg-accent-50 border border-accent-200/50 rounded-full px-5 py-2.5 mb-6">
              <DollarSign className="w-4 h-4 text-accent-600" />
              <span className="text-sm font-light text-accent-800 uppercase tracking-[0.2em]">
                Pricing Plans
              </span>
            </div>
            <h2 className="text-4xl md:text-5xl font-light text-gray-900 mb-4">
              Flexible Pricing Options
            </h2>
            <p className="lead max-w-2xl mx-auto">
              Choose a plan that works for your business needs and budget
            </p>
          </div>
          <div className="grid sm:grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8 max-w-7xl mx-auto">
            <div className="bg-white border-2 border-slate-700/50 rounded-3xl p-8 lg:p-10 hover:shadow-2xl hover:border-slate-900 transition-all duration-500 hover:-translate-y-2">
              <h3 className="text-2xl md:text-3xl font-light mb-2 text-gray-900">
                Starter
              </h3>
              <p className="text-gray-600 mb-6">Perfect for small tasks</p>
              <div className="text-4xl md:text-5xl font-bold text-accent-600 mb-8 flex items-center gap-3">
                <Clock className="w-10 h-10" />
                10 hrs
              </div>
              <ul className="space-y-4">
                <li className="flex items-center gap-3">
                  <CheckCircle className="w-5 h-5 text-accent-600 flex-shrink-0" />
                  <span className="text-gray-700">Email management</span>
                </li>
                <li className="flex items-center gap-3">
                  <CheckCircle className="w-5 h-5 text-accent-600 flex-shrink-0" />
                  <span className="text-gray-700">Calendar scheduling</span>
                </li>
                <li className="flex items-center gap-3">
                  <CheckCircle className="w-5 h-5 text-accent-600 flex-shrink-0" />
                  <span className="text-gray-700">Basic admin tasks</span>
                </li>
              </ul>
            </div>

            <div className="bg-white border-2 border-slate-900 rounded-3xl p-8 lg:p-10 relative shadow-2xl hover:-translate-y-2 transition-all duration-500 hover:shadow-slate-900/20">
              <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 bg-gradient-to-r from-slate-900 to-primary-950 text-white px-6 py-2 rounded-full text-sm font-normal shadow-lg">
                Popular
              </div>
              <h3 className="text-2xl md:text-3xl font-light mb-2 text-gray-900">
                Professional
              </h3>
              <p className="text-gray-600 mb-6">For growing businesses</p>
              <div className="text-4xl md:text-5xl font-bold text-accent-600 mb-8 flex items-center gap-3">
                <Clock className="w-10 h-10" />
                25 hrs
              </div>
              <ul className="space-y-4">
                <li className="flex items-center gap-3">
                  <CheckCircle className="w-5 h-5 text-accent-600 flex-shrink-0" />
                  <span className="text-gray-700">All Starter features</span>
                </li>
                <li className="flex items-center gap-3">
                  <CheckCircle className="w-5 h-5 text-accent-600 flex-shrink-0" />
                  <span className="text-gray-700">
                    Customer service support
                  </span>
                </li>
                <li className="flex items-center gap-3">
                  <CheckCircle className="w-5 h-5 text-accent-600 flex-shrink-0" />
                  <span className="text-gray-700">Social media management</span>
                </li>
                <li className="flex items-center gap-3">
                  <CheckCircle className="w-5 h-5 text-accent-600 flex-shrink-0" />
                  <span className="text-gray-700">Priority support</span>
                </li>
              </ul>
            </div>

            <div className="bg-white border-2 border-slate-700/50 rounded-3xl p-8 lg:p-10 hover:shadow-2xl hover:border-slate-900 transition-all duration-500 hover:-translate-y-2">
              <h3 className="text-2xl md:text-3xl font-light mb-2 text-gray-900">
                Enterprise
              </h3>
              <p className="text-gray-600 mb-6">For established companies</p>
              <div className="text-4xl md:text-5xl font-bold text-accent-600 mb-8 flex items-center gap-3">
                <Clock className="w-10 h-10" />
                50+ hrs
              </div>
              <ul className="space-y-4">
                <li className="flex items-center gap-3">
                  <CheckCircle className="w-5 h-5 text-accent-600 flex-shrink-0" />
                  <span className="text-gray-700">
                    All Professional features
                  </span>
                </li>
                <li className="flex items-center gap-3">
                  <CheckCircle className="w-5 h-5 text-accent-600 flex-shrink-0" />
                  <span className="text-gray-700">Dedicated VA team</span>
                </li>
                <li className="flex items-center gap-3">
                  <CheckCircle className="w-5 h-5 text-accent-600 flex-shrink-0" />
                  <span className="text-gray-700">Custom workflows</span>
                </li>
                <li className="flex items-center gap-3">
                  <CheckCircle className="w-5 h-5 text-accent-600 flex-shrink-0" />
                  <span className="text-gray-700">
                    UK: 9AM-5PM | SA: 8AM-5PM
                  </span>
                </li>
              </ul>
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
