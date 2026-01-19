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
import styles from "./services.module.css";

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
      <section className="relative pt-32 pb-20 md:pt-40 md:pb-24 overflow-hidden bg-gradient-to-br from-slate-900 via-primary-950 to-slate-950">
        <div className="absolute inset-0 opacity-30">
          <div className="absolute top-0 right-1/4 w-96 h-96 bg-gradient-radial from-accent-500/20 to-transparent blur-3xl"></div>
          <div className="absolute bottom-0 left-1/4 w-96 h-96 bg-gradient-radial from-primary-500/15 to-transparent blur-3xl"></div>
        </div>

        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto text-center space-y-6">
            <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-md border border-white/20 rounded-full px-4 py-2 shadow-sm">
              <span className="text-xs font-medium text-white/90 uppercase tracking-wider">
                What We Offer
              </span>
            </div>

            <h1 className="text-5xl md:text-6xl lg:text-7xl font-extralight text-white leading-tight tracking-tight">
              Our Services
            </h1>

            <p className="text-xl md:text-2xl text-gray-300 font-light leading-relaxed max-w-2xl mx-auto">
              Comprehensive virtual assistant solutions designed to transform
              your business operations
            </p>
          </div>
        </div>
      </section>

      {/* Premium Trust Indicators */}
      <section className="py-16 md:py-20 relative overflow-hidden">
        {/* Subtle background elements */}
        <div className="absolute inset-0 bg-gradient-to-b from-white via-slate-50/30 to-white"></div>
        <div className="absolute top-1/2 left-1/4 w-96 h-96 bg-gradient-radial from-primary-200/20 via-slate-200/10 to-transparent blur-3xl opacity-60"></div>
        <div className="absolute top-1/2 right-1/4 w-80 h-80 bg-gradient-radial from-slate-300/15 via-primary-200/10 to-transparent blur-3xl opacity-50"></div>

        <PageContainer>
          <div className="relative z-10">
            {/* Refined section intro */}
            <div className="text-center mb-12">
              <div className="inline-flex items-center gap-2.5 px-6 py-2.5 rounded-full bg-gradient-to-r from-white/80 via-slate-50/90 to-white/80 backdrop-blur-sm border border-slate-900/10 mb-6 shadow-md">
                <div className="w-2 h-2 rounded-full bg-gradient-to-br from-slate-900 to-primary-950 animate-pulse"></div>
                <span className="text-xs font-bold bg-gradient-to-r from-slate-900 to-primary-950 bg-clip-text text-transparent tracking-[0.2em] uppercase">
                  Why Choose Us
                </span>
              </div>
              <p className="text-base md:text-lg text-slate-600 font-light max-w-2xl mx-auto">
                Excellence in every interaction, security in every process
              </p>
            </div>

            {/* Premium trust badges grid */}
            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {/* Badge 1 - Innovative Working */}
              <div className="group relative">
                <div className="absolute inset-0 bg-gradient-to-br from-slate-900/5 via-primary-950/5 to-slate-950/5 rounded-3xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                <div className="relative bg-white border-2 border-slate-900/10 rounded-3xl p-8 hover:border-slate-900/25 transition-all duration-500 shadow-[0_8px_30px_rgb(0,0,0,0.04)] hover:shadow-[0_20px_60px_-15px_rgba(15,23,42,0.2)] hover:-translate-y-1">
                  {/* Icon */}
                  <div className="relative mb-6">
                    <div className="absolute inset-0 bg-gradient-to-br from-slate-900 via-primary-950 to-slate-950 rounded-2xl blur-lg opacity-20 group-hover:opacity-30 transition-opacity duration-500"></div>
                    <div className="relative w-16 h-16 bg-gradient-to-br from-slate-900 via-primary-950 to-slate-950 rounded-2xl flex items-center justify-center group-hover:scale-110 group-hover:rotate-6 transition-all duration-500 shadow-xl border-2 border-slate-800/50">
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
                <div className="absolute inset-0 bg-gradient-to-br from-slate-900/5 via-primary-950/5 to-slate-950/5 rounded-3xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                <div className="relative bg-white border-2 border-slate-900/10 rounded-3xl p-8 hover:border-slate-900/25 transition-all duration-500 shadow-[0_8px_30px_rgb(0,0,0,0.04)] hover:shadow-[0_20px_60px_-15px_rgba(15,23,42,0.2)] hover:-translate-y-1">
                  <div className="relative mb-6">
                    <div className="absolute inset-0 bg-gradient-to-br from-slate-900 via-primary-950 to-slate-950 rounded-2xl blur-lg opacity-20 group-hover:opacity-30 transition-opacity duration-500"></div>
                    <div className="relative w-16 h-16 bg-gradient-to-br from-slate-900 via-primary-950 to-slate-950 rounded-2xl flex items-center justify-center group-hover:scale-110 group-hover:rotate-6 transition-all duration-500 shadow-xl border-2 border-slate-800/50">
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
                <div className="absolute inset-0 bg-gradient-to-br from-slate-900/5 via-primary-950/5 to-slate-950/5 rounded-3xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                <div className="relative bg-white border-2 border-slate-900/10 rounded-3xl p-8 hover:border-slate-900/25 transition-all duration-500 shadow-[0_8px_30px_rgb(0,0,0,0.04)] hover:shadow-[0_20px_60px_-15px_rgba(15,23,42,0.2)] hover:-translate-y-1">
                  <div className="relative mb-6">
                    <div className="absolute inset-0 bg-gradient-to-br from-slate-900 via-primary-950 to-slate-950 rounded-2xl blur-lg opacity-20 group-hover:opacity-30 transition-opacity duration-500"></div>
                    <div className="relative w-16 h-16 bg-gradient-to-br from-slate-900 via-primary-950 to-slate-950 rounded-2xl flex items-center justify-center group-hover:scale-110 group-hover:rotate-6 transition-all duration-500 shadow-xl border-2 border-slate-800/50">
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
                <div className="absolute inset-0 bg-gradient-to-br from-slate-900/5 via-primary-950/5 to-slate-950/5 rounded-3xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                <div className="relative bg-white border-2 border-slate-900/10 rounded-3xl p-8 hover:border-slate-900/25 transition-all duration-500 shadow-[0_8px_30px_rgb(0,0,0,0.04)] hover:shadow-[0_20px_60px_-15px_rgba(15,23,42,0.2)] hover:-translate-y-1">
                  <div className="relative mb-6">
                    <div className="absolute inset-0 bg-gradient-to-br from-slate-900 via-primary-950 to-slate-950 rounded-2xl blur-lg opacity-20 group-hover:opacity-30 transition-opacity duration-500"></div>
                    <div className="relative w-16 h-16 bg-gradient-to-br from-slate-900 via-primary-950 to-slate-950 rounded-2xl flex items-center justify-center group-hover:scale-110 group-hover:rotate-6 transition-all duration-500 shadow-xl border-2 border-slate-800/50">
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
                <div className="absolute inset-0 bg-gradient-to-br from-slate-900 via-primary-950 to-slate-950 rounded-full blur-md opacity-30"></div>
                <div className="relative w-4 h-4 rounded-full bg-gradient-to-br from-slate-900 via-primary-950 to-slate-950 shadow-xl ring-4 ring-white/80"></div>
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
      <section className="relative py-20 md:py-24 bg-gradient-to-br from-slate-700 via-primary-800 to-slate-700">
        {/* Elegant diagonal flowing waves and stars background */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          {/* Diagonal flowing waves - bottom left to top right */}
          <div
            className={`absolute inset-0 bg-gradient-to-br from-accent-500/30 via-accent-600/15 to-transparent ${styles.diagonalWave1}`}
          />

          <div
            className={`absolute inset-0 bg-gradient-to-br from-primary-500/28 via-primary-600/13 to-transparent ${styles.diagonalWave2}`}
          />

          <div
            className={`absolute inset-0 bg-gradient-to-br from-accent-600/22 via-accent-500/10 to-transparent ${styles.diagonalWave3}`}
          />

          {/* Diagonal accent lines */}
          <div
            className={`absolute inset-0 h-px bg-gradient-to-br from-transparent via-accent-400/40 to-transparent opacity-70 ${styles.accentLine1}`}
          />
          <div
            className={`absolute inset-0 h-px bg-gradient-to-br from-transparent via-primary-400/35 to-transparent opacity-60 ${styles.accentLine2}`}
          />

          {/* Scattered stars */}
          <div className="absolute top-[8%] left-[12%] w-1 h-1 rounded-full bg-accent-400/60 shadow-sm shadow-accent-400/40" />
          <div className="absolute top-[15%] right-[8%] w-1.5 h-1.5 rounded-full bg-primary-300/70 shadow-md shadow-primary-300/50" />
          <div className="absolute top-[22%] left-[25%] w-0.5 h-0.5 rounded-full bg-white/50" />
          <div className="absolute top-[12%] right-[28%] w-1 h-1 rounded-full bg-accent-500/65 shadow-sm shadow-accent-500/45" />
          <div className="absolute top-[28%] left-[35%] w-1.5 h-1.5 rounded-full bg-primary-400/60 shadow-md shadow-primary-400/40" />
          <div className="absolute top-[18%] right-[42%] w-0.5 h-0.5 rounded-full bg-white/40" />
          <div className="absolute top-[35%] left-[15%] w-1 h-1 rounded-full bg-accent-400/55 shadow-sm shadow-accent-400/35" />
          <div className="absolute top-[25%] right-[55%] w-1.5 h-1.5 rounded-full bg-primary-300/65 shadow-md shadow-primary-300/45" />
          <div className="absolute top-[32%] left-[48%] w-0.5 h-0.5 rounded-full bg-white/45" />
          <div className="absolute top-[40%] right-[18%] w-1 h-1 rounded-full bg-accent-500/60 shadow-sm shadow-accent-500/40" />
          <div className="absolute top-[45%] left-[62%] w-0.5 h-0.5 rounded-full bg-white/50" />
          <div className="absolute top-[38%] right-[65%] w-1.5 h-1.5 rounded-full bg-primary-400/65 shadow-md shadow-primary-400/45" />
        </div>

        <PageContainer>
          {/* Redesigned centered header */}
          <div className="relative z-10 text-center mb-16">
            {/* Premium badge */}
            <div className="inline-flex items-center gap-2.5 px-7 py-3 rounded-full bg-gradient-to-r from-white/10 via-white/5 to-white/10 border-2 border-white/20 mb-8 shadow-lg hover:shadow-xl hover:border-white/30 transition-all duration-500 group backdrop-blur-sm">
              <div className="w-2 h-2 rounded-full bg-gradient-to-br from-accent-400 to-primary-400 shadow-sm group-hover:scale-125 transition-transform duration-300" />
              <span className="text-[11px] font-extrabold bg-gradient-to-r from-white via-accent-100 to-white bg-clip-text text-transparent tracking-[0.3em] uppercase">
                Service Breakdown
              </span>
              <div className="w-2 h-2 rounded-full bg-gradient-to-br from-primary-400 to-accent-400 shadow-sm group-hover:scale-125 transition-transform duration-300" />
            </div>

            {/* Large heading */}
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-light text-white mb-5 tracking-tight leading-[1.1]">
              Explore Our{" "}
              <span className="font-normal bg-gradient-to-r from-accent-300 via-primary-200 to-accent-300 bg-clip-text text-transparent">
                Services
              </span>
            </h2>

            {/* Subtitle */}
            <p className="text-lg md:text-xl text-primary-100/90 font-light max-w-2xl mx-auto leading-relaxed mb-8">
              Comprehensive solutions tailored to your needs
            </p>

            {/* Subtle accent */}
            <div className="flex items-center justify-center gap-4">
              <div className="h-px w-16 bg-gradient-to-r from-transparent to-white/30"></div>
              <div className="w-1.5 h-1.5 rounded-full bg-accent-300/60"></div>
              <div className="h-px w-16 bg-gradient-to-l from-transparent to-white/30"></div>
            </div>
          </div>
          <div className="relative z-10 grid lg:grid-cols-2 gap-6 md:gap-8">
            {services.map((service, index) => (
              <div
                key={index}
                className="relative bg-gradient-to-br from-white to-primary-50/30 border border-primary-200/60 p-8 md:p-10 rounded-3xl shadow-sm hover:shadow-2xl hover:border-accent-300/50 transition-all duration-500 hover:-translate-y-2 group overflow-hidden"
              >
                {/* Elegant background accent */}
                <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-radial from-accent-100/40 to-transparent blur-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                <div className="relative z-10">
                  <div className="flex items-start gap-5 mb-6">
                    <div className="w-16 h-16 bg-gradient-to-br from-slate-900 to-primary-950 rounded-2xl flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-all duration-500 border border-slate-800">
                      <service.icon className="w-8 h-8 text-primary-700" />
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
                  <div className="h-px bg-gradient-to-r from-transparent via-primary-200 to-transparent mb-6" />
                  <ul className="space-y-3">
                    {service.features.map((feature, fIndex) => (
                      <li
                        key={fIndex}
                        className="flex items-start gap-3 group/item"
                      >
                        <div className="w-5 h-5 rounded-full bg-accent-100 border border-accent-300 flex items-center justify-center flex-shrink-0 mt-0.5 group-hover/item:scale-110 transition-transform">
                          <CheckCircle className="w-3.5 h-3.5 text-accent-600" />
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
            <div className="inline-flex items-center gap-2 bg-accent-50 border border-accent-200/50 rounded-full px-5 py-2.5 mb-6">
              <div className="w-2 h-2 bg-accent-600 rounded-full animate-pulse"></div>
              <span className="text-sm font-light text-accent-800 uppercase tracking-[0.2em]">
                Simple Process
              </span>
            </div>
            <h2 className="text-4xl md:text-5xl font-light text-gray-900 mb-4">
              How It Works
            </h2>
          </div>
          <div className="relative grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {/* Premium Animated Connectors with Multiple Visual Layers */}
            <div className="hidden md:block absolute top-10 left-0 right-0 h-1">
              {/* Base gradient line with subtle glow */}
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-slate-300 to-transparent opacity-30 blur-[1px]" />

              {/* First Connector - Enhanced */}
              <div className="absolute left-[16.66%] right-[50%] h-full">
                {/* Static dark gradient base */}
                <div className="absolute inset-0 bg-gradient-to-r from-slate-900/40 via-primary-950/50 to-slate-900/40 rounded-full" />

                {/* Flowing shimmer effect */}
                <div className="absolute inset-0 overflow-hidden rounded-full">
                  <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/40 to-transparent animate-flowRight" />
                </div>

                {/* Flowing color gradient */}
                <div className="absolute inset-0 overflow-hidden rounded-full">
                  <div className="absolute inset-0 bg-gradient-to-r from-transparent via-accent-500/60 to-transparent animate-flowRight" />
                </div>

                {/* Glow effect underneath */}
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-accent-500/20 to-transparent blur-md" />

                {/* Pulsing dot */}
                <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2">
                  <div className="relative">
                    <div className="absolute inset-0 w-3 h-3 bg-accent-500 rounded-full blur-sm animate-pulse" />
                    <div className="relative w-2.5 h-2.5 bg-gradient-to-br from-accent-400 to-accent-600 rounded-full shadow-lg shadow-accent-500/50 animate-pulse" />
                  </div>
                </div>

                {/* Particle effects */}
                <div className="absolute left-1/4 top-1/2 -translate-y-1/2 w-1 h-1 bg-accent-400/60 rounded-full animate-pulse" />
                <div
                  className="absolute left-3/4 top-1/2 -translate-y-1/2 w-1 h-1 bg-primary-400/60 rounded-full animate-pulse"
                  style={{ animationDelay: "0.3s" }}
                />
              </div>

              {/* Second Connector - Enhanced with delay */}
              <div className="absolute left-[50%] right-[16.66%] h-full">
                {/* Static dark gradient base */}
                <div className="absolute inset-0 bg-gradient-to-r from-slate-900/40 via-primary-950/50 to-slate-900/40 rounded-full" />

                {/* Flowing shimmer effect */}
                <div className="absolute inset-0 overflow-hidden rounded-full">
                  <div
                    className="absolute inset-0 bg-gradient-to-r from-transparent via-white/40 to-transparent animate-flowRight"
                    style={{ animationDelay: "1s" }}
                  />
                </div>

                {/* Flowing color gradient */}
                <div className="absolute inset-0 overflow-hidden rounded-full">
                  <div
                    className="absolute inset-0 bg-gradient-to-r from-transparent via-primary-500/60 to-transparent animate-flowRight"
                    style={{ animationDelay: "1s" }}
                  />
                </div>

                {/* Glow effect underneath */}
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-primary-500/20 to-transparent blur-md" />

                {/* Pulsing dot */}
                <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2">
                  <div className="relative">
                    <div
                      className="absolute inset-0 w-3 h-3 bg-primary-500 rounded-full blur-sm animate-pulse"
                      style={{ animationDelay: "0.5s" }}
                    />
                    <div
                      className="relative w-2.5 h-2.5 bg-gradient-to-br from-primary-400 to-primary-600 rounded-full shadow-lg shadow-primary-500/50 animate-pulse"
                      style={{ animationDelay: "0.5s" }}
                    />
                  </div>
                </div>

                {/* Particle effects */}
                <div
                  className="absolute left-1/4 top-1/2 -translate-y-1/2 w-1 h-1 bg-primary-400/60 rounded-full animate-pulse"
                  style={{ animationDelay: "0.8s" }}
                />
                <div
                  className="absolute left-3/4 top-1/2 -translate-y-1/2 w-1 h-1 bg-accent-400/60 rounded-full animate-pulse"
                  style={{ animationDelay: "1.1s" }}
                />
              </div>
            </div>

            {/* Step 1 */}
            <div className="text-center group relative">
              <div className="relative inline-block">
                <div className="absolute inset-0 bg-gradient-to-br from-slate-900/20 via-primary-950/20 to-slate-950/20 rounded-2xl blur-xl group-hover:blur-2xl transition-all duration-500" />
                <div className="relative w-20 h-20 rounded-2xl flex items-center justify-center text-3xl font-semibold mx-auto mb-6 bg-gradient-to-br from-slate-900 via-primary-950 to-slate-950 text-white group-hover:scale-110 group-hover:rotate-3 transition-all duration-500 shadow-lg border border-slate-800">
                  1
                </div>
              </div>
              <h3 className="text-xl font-semibold mb-3 text-slate-900 tracking-tight">
                Book a Discovery Call
              </h3>
              <p className="text-slate-600 leading-relaxed font-light">
                Schedule a free consultation to discuss your needs and how we
                can help
              </p>
            </div>

            {/* Step 2 */}
            <div className="text-center group relative">
              <div className="relative inline-block">
                <div className="absolute inset-0 bg-gradient-to-br from-slate-900/20 via-primary-950/20 to-slate-950/20 rounded-2xl blur-xl group-hover:blur-2xl transition-all duration-500" />
                <div className="relative w-20 h-20 rounded-2xl flex items-center justify-center text-3xl font-semibold mx-auto mb-6 bg-gradient-to-br from-slate-900 via-primary-950 to-slate-950 text-white group-hover:scale-110 group-hover:rotate-3 transition-all duration-500 shadow-lg border border-slate-800">
                  2
                </div>
              </div>
              <h3 className="text-xl font-semibold mb-3 text-slate-900 tracking-tight">
                Custom Plan Creation
              </h3>
              <p className="text-slate-600 leading-relaxed font-light">
                We&apos;ll create a tailored service plan based on your specific
                requirements
              </p>
            </div>

            {/* Step 3 - Fixed gradient */}
            <div className="text-center group relative">
              <div className="relative inline-block">
                <div className="absolute inset-0 bg-gradient-to-br from-slate-900/20 via-primary-950/20 to-slate-950/20 rounded-2xl blur-xl group-hover:blur-2xl transition-all duration-500" />
                <div className="relative w-20 h-20 rounded-2xl flex items-center justify-center text-3xl font-semibold mx-auto mb-6 bg-gradient-to-br from-slate-900 via-primary-950 to-slate-950 text-white group-hover:scale-110 group-hover:rotate-3 transition-all duration-500 shadow-lg border border-slate-800">
                  3
                </div>
              </div>
              <h3 className="text-xl font-semibold mb-3 text-slate-900 tracking-tight">
                Get Started
              </h3>
              <p className="text-slate-600 leading-relaxed font-light">
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
                  <span className="text-gray-700">24/7 availability</span>
                </li>
              </ul>
            </div>
          </div>
        </PageContainer>
      </section>

      {/* CTA */}
      <section className="relative py-28 md:py-40 overflow-hidden bg-gradient-to-br from-slate-900 via-primary-950 to-slate-950">
        <div className="absolute inset-0">
          <div className="absolute top-1/4 right-0 w-[800px] h-[800px] bg-gradient-radial from-accent-400/20 to-transparent blur-3xl"></div>
          <div className="absolute bottom-1/4 left-0 w-[800px] h-[800px] bg-gradient-radial from-primary-400/15 to-transparent blur-3xl"></div>
          <div
            className="absolute inset-0 opacity-[0.03]"
            style={{
              backgroundImage:
                "url(\"data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E\")",
            }}
          />
        </div>

        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <div className="inline-flex items-center gap-2.5 bg-white/10 backdrop-blur-md border border-white/20 rounded-full px-5 py-2.5 mb-8">
              <span className="text-xs font-medium text-white uppercase tracking-[0.2em]">
                Services Provided
              </span>
            </div>

            <h2 className="text-5xl md:text-6xl lg:text-7xl font-light mb-6 text-white leading-[1.1] tracking-tight">
              Ready to elevate your business?
            </h2>

            <p className="text-xl md:text-2xl text-white/80 font-light leading-relaxed mb-10">
              Focus on growth while we handle the details
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-10">
              <Link
                href="/contact"
                className="group px-10 py-5 bg-white text-primary-900 rounded-xl font-semibold text-lg shadow-2xl hover:shadow-white/20 hover:scale-105 transition-all duration-300 flex items-center gap-3"
              >
                Book Your Discovery Call
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Link>
              <a
                href="tel:+27828997062"
                className="px-10 py-5 bg-white/10 backdrop-blur-sm text-white border-2 border-white/30 rounded-xl font-medium text-lg hover:bg-white/20 hover:border-white/50 transition-all duration-300"
              >
                +27 82 899 7062
              </a>
            </div>

            <div className="flex flex-wrap items-center justify-center gap-6 text-sm text-white/70 font-light">
              <span className="flex items-center gap-2">
                <CheckCircle className="w-4 h-4 text-white/90" />
                Free consultation
              </span>
              <span className="flex items-center gap-2">
                <CheckCircle className="w-4 h-4 text-white/90" />
                24-hour response
              </span>
              <span className="flex items-center gap-2">
                <CheckCircle className="w-4 h-4 text-white/90" />
                No commitment
              </span>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
