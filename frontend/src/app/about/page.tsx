"use client";

import React from "react";
import Image from "next/image";
import {
  Award,
  Globe,
  Heart,
  Target,
  Users,
  Zap,
  ArrowRight,
  CheckCircle,
  Calendar,
  MessageCircle,
  Pencil,
  FolderKanban,
  Building2,
  Briefcase,
} from "lucide-react";
import Link from "next/link";
import PageContainer from "@/components/ui/PageContainer";
import { getImagePath } from "@/lib/utils";

export default function About() {
  return (
    <main className="min-h-screen bg-white scroll-smooth">
      {/* Hero Section - Split Layout */}
      <section className="relative pt-32 pb-20 md:pt-40 md:pb-28 overflow-hidden bg-gradient-to-br from-white/90 via-[#F2F1EF]/50 to-[#D8CFD0]/8">
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
          <div className="max-w-7xl mx-auto">
            <div className="grid lg:grid-cols-2 gap-16 items-center">
              {/* Left: Content */}
              <div className="space-y-8">
                <div className="inline-flex items-center gap-2.5 bg-[#D8CFD0]/30 backdrop-blur-md border border-[#697184]/20 rounded-full px-5 py-2.5 shadow-lg">
                  <Heart className="w-4 h-4 text-[#697184]" />
                  <span className="text-xs font-semibold text-[#697184] uppercase tracking-[0.2em]">
                    Our Story
                  </span>
                </div>

                <div className="space-y-6">
                  <h1 className="text-6xl md:text-7xl lg:text-8xl font-extralight text-[#413F3D] leading-[0.95] tracking-tighter">
                    About
                    <span className="block mt-2 text-[#697184] font-light">
                      VirtuServe
                    </span>
                  </h1>

                  <div className="h-1 w-24 bg-[#697184] rounded-full"></div>
                </div>

                <p className="text-xl md:text-2xl text-[#413F3D]/80 font-light leading-relaxed max-w-xl">
                  Building lasting partnerships with international clients
                  through professional excellence and genuine care
                </p>
              </div>

              {/* Right: Visual Element */}
              <div className="relative h-80 lg:h-96">
                <div className="absolute inset-0 bg-white/60 backdrop-blur-xl rounded-[2.5rem] shadow-2xl border border-[#697184]/20 overflow-hidden">
                  <div className="absolute inset-0 flex items-center justify-center p-10">
                    <div className="text-center space-y-8">
                      <div className="flex items-center justify-center gap-12">
                        <div className="text-center group">
                          <div className="text-6xl md:text-7xl font-light text-[#697184] mb-2 tracking-tight group-hover:scale-110 transition-transform duration-300">
                            10<span className="text-[#B1A6A4]">+</span>
                          </div>
                          <div className="text-sm text-[#413F3D] font-medium uppercase tracking-widest">
                            Years
                          </div>
                        </div>
                        <div className="w-px h-20 bg-[#697184]/30"></div>
                        <div className="text-center group">
                          <div className="text-6xl md:text-7xl font-light text-[#697184] mb-2 tracking-tight group-hover:scale-110 transition-transform duration-300">
                            100<span className="text-[#B1A6A4]">+</span>
                          </div>
                          <div className="text-sm text-[#413F3D] font-medium uppercase tracking-widest">
                            Clients
                          </div>
                        </div>
                      </div>
                      <div className="pt-6 space-y-2">
                        <div className="flex items-center justify-center gap-2 text-sm text-[#697184]">
                          <Globe className="w-4 h-4 text-[#697184]" />
                          <span className="font-light">Trusted Worldwide</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                {/* Floating accent elements */}
                <div className="absolute -top-4 -right-4 w-32 h-32 bg-[#B1A6A4]/20 rounded-full blur-2xl"></div>
                <div className="absolute -bottom-4 -left-4 w-32 h-32 bg-[#697184]/20 rounded-full blur-2xl"></div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Our Story - Modern Elegant Layout */}
      <section className="relative py-20 md:py-32 bg-gradient-to-b from-gray-50/50 to-white overflow-hidden">
        {/* Minimal background effects */}
        <div className="absolute inset-0">
          <div className="absolute top-1/3 right-1/4 w-[600px] h-[600px] bg-[#D8CFD0]/8 blur-3xl" />
        </div>

        <PageContainer>
          <div className="relative z-10 max-w-7xl mx-auto">
            {/* Asymmetric Grid Layout */}
            <div className="grid lg:grid-cols-12 gap-12 lg:gap-16 items-start lg:items-center">
              {/* Left: Heading - Takes 5 columns */}
              <div className="lg:col-span-5 space-y-8">
                <div className="inline-block">
                  <span className="text-[11px] font-bold text-[#697184] uppercase tracking-[0.25em] border-b-2 border-[#697184]/40 pb-2">
                    Our Story
                  </span>
                </div>

                <h2 className="text-5xl md:text-6xl lg:text-[5rem] font-light text-[#413F3D] leading-[1.05] tracking-[-0.02em]">
                  From Desk to{" "}
                  <span className="block mt-4 font-serif font-normal italic text-[#697184]">
                    Global Impact
                  </span>
                </h2>

                {/* Decorative line */}
                <div className="flex items-center gap-4 pt-2">
                  <div className="w-16 h-[2px] bg-gradient-to-r from-[#697184]/40 to-[#697184]/10" />
                  <div className="w-2 h-2 rounded-full bg-[#697184]/50" />
                </div>
              </div>

              {/* Right: Content - Takes 7 columns */}
              <div className="lg:col-span-7 space-y-10">
                {/* First Content Block */}
                <div className="relative pl-8 border-l-[3px] border-[#697184]/25 hover:border-[#697184]/40 transition-colors duration-500">
                  <p className="text-[22px] md:text-[26px] text-[#413F3D] font-light leading-[1.6] tracking-[-0.01em]">
                    We help businesses reclaim their time to focus on growth—not
                    administrative tasks. Serving international clients across
                    time zones and industries.
                  </p>
                </div>

                {/* Second Content Block */}
                <div className="relative pl-8 border-l-[3px] border-[#B1A6A4]/20 hover:border-[#B1A6A4]/35 transition-colors duration-500">
                  <p className="text-[18px] md:text-[21px] text-[#413F3D]/75 font-light leading-[1.65] tracking-[-0.01em]">
                    From startups to established enterprises, we deliver
                    tailored support that treats your business with the care it
                    deserves. Building lasting partnerships, not transactions.
                  </p>
                </div>

                {/* Subtle tag line */}
                <div className="pl-8 pt-2">
                  <p className="text-[15px] text-[#697184]/60 font-light italic tracking-wide">
                    Empowering businesses worldwide through professional
                    excellence
                  </p>
                </div>
              </div>
            </div>
          </div>
        </PageContainer>
      </section>

      {/* Meet Our Team - Unified Section */}
      <section className="relative py-20 md:py-28 bg-white overflow-hidden">
        {/* Sophisticated background elements */}
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#697184]/30 to-transparent" />
          <div className="absolute top-20 right-1/4 w-[600px] h-[600px] bg-[#D8CFD0]/8 rounded-full blur-3xl" />
          <div className="absolute bottom-20 left-1/4 w-[500px] h-[500px] bg-[#B1A6A4]/8 rounded-full blur-3xl" />
          <div
            className="absolute inset-0"
            style={{
              backgroundImage:
                "radial-gradient(circle at 1px 1px, rgba(105, 113, 132, 0.03) 1px, transparent 0)",
              backgroundSize: "50px 50px",
            }}
          />
        </div>

        <PageContainer>
          {/* Elegant header */}
          <div className="relative z-10 text-center mb-16">
            <div className="flex items-center justify-center gap-3 mb-8">
              <div className="h-px w-20 bg-gradient-to-r from-transparent to-[#697184]/40" />
              <div className="w-1.5 h-1.5 rounded-full bg-[#697184]" />
              <div className="h-px w-20 bg-gradient-to-l from-transparent to-[#697184]/40" />
            </div>
            <h2 className="text-5xl md:text-6xl font-extralight text-[#413F3D] mb-5 tracking-tight">
              Meet Our{" "}
              <span className="font-light italic text-[#697184]">Team</span>
            </h2>
            <p className="text-base md:text-lg text-[#413F3D]/70 font-light max-w-2xl mx-auto leading-relaxed">
              Exceptional professionals dedicated to your success
            </p>
          </div>

          {/* Team Grid - Magazine-Style Layout */}
          <div className="relative z-10 max-w-7xl mx-auto space-y-20">
            {/* Sheridan's Profile - Featured */}
            <div className="group">
              <div className="grid lg:grid-cols-[420px_1fr] gap-16 items-start">
                {/* Profile Image Column */}
                <div className="relative">
                  <div className="sticky top-32">
                    {/* Decorative frame */}
                    <div className="absolute -inset-4 bg-gradient-to-br from-[#697184]/5 to-[#B1A6A4]/5 rounded-[3rem] -z-10" />
                    <div className="relative rounded-[2.5rem] overflow-hidden shadow-[0_20px_60px_-15px_rgba(65,63,61,0.2)] group-hover:shadow-[0_25px_70px_-15px_rgba(105,113,132,0.3)] transition-all duration-700">
                      <Image
                        src={getImagePath("/assets/sheridan.JPG")}
                        alt="Sheridan De Laroche - Founder & Lead VA"
                        width={420}
                        height={560}
                        className="w-full aspect-[3/4] object-cover group-hover:scale-[1.02] transition-transform duration-700"
                        priority
                      />
                      {/* Gradient overlay */}
                      <div className="absolute inset-0 bg-gradient-to-t from-[#413F3D]/20 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
                    </div>
                    {/* Floating badge */}
                    <div className="absolute -bottom-6 -right-6 bg-white rounded-2xl p-5 shadow-[0_10px_40px_-10px_rgba(65,63,61,0.3)]">
                      <div className="text-center">
                        <div className="text-3xl font-light text-[#697184] mb-1">
                          16+
                        </div>
                        <div className="text-xs text-[#413F3D]/60 uppercase tracking-wider">
                          Years Experience
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Content Column */}
                <div className="pt-6 space-y-8">
                  {/* Header */}
                  <div>
                    <div className="inline-flex items-center gap-2 px-4 py-2 bg-[#697184]/8 rounded-full mb-6">
                      <span className="text-[#697184] font-medium text-xs uppercase tracking-[0.25em]">
                        Founder & Lead VA
                      </span>
                    </div>
                    <h3 className="text-5xl md:text-6xl font-extralight text-[#413F3D] mb-6 tracking-tight leading-[1.1]">
                      Sheridan
                      <br />
                      De Laroche
                    </h3>
                    <p className="text-xl font-light text-[#413F3D]/80 leading-relaxed">
                      Highly accomplished professional with over 16 years&apos;
                      experience in international property management, executive
                      support, and operational leadership.
                    </p>
                  </div>

                  {/* Divider */}
                  <div className="flex items-center gap-4">
                    <div className="w-1 h-1 rounded-full bg-[#697184]" />
                    <div className="flex-1 h-px bg-gradient-to-r from-[#697184]/40 to-transparent" />
                  </div>

                  {/* Professional Background */}
                  <div className="space-y-5">
                    <p className="text-base font-light text-[#413F3D]/80 leading-relaxed">
                      Sheridan brings 16 years&apos; experience spanning
                      international property management and executive support,
                      with a proven track record working alongside developers,
                      architects, CEOs, and COOs. Her expertise covers the full
                      property lifecycle—from acquisition and development
                      through to operational delivery and tenant
                      management—serving as a trusted strategic partner to
                      senior leadership.
                    </p>
                    <p className="text-base font-light text-[#413F3D]/70 leading-relaxed">
                      For the past 2.5 years, she&apos;s worked fully remotely,
                      managing property portfolios and executive priorities
                      across time zones. As an operations-focused leader, she
                      designs and implements scalable processes and systems to
                      improve efficiency, compliance, and service
                      delivery—operating with exceptional autonomy while
                      combining strategic thinking with operational execution.
                    </p>
                  </div>

                  {/* Areas of Expertise */}
                  <div>
                    <h4 className="text-sm font-medium text-[#697184] uppercase tracking-[0.2em] mb-6">
                      Areas of Expertise
                    </h4>
                    <div className="grid sm:grid-cols-2 gap-5">
                      <div className="bg-white rounded-2xl p-6 border border-[#697184]/10 hover:border-[#697184]/30 hover:shadow-lg transition-all duration-300">
                        <div className="flex items-start gap-4 mb-3">
                          <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-[#697184] to-[#413F3D] flex items-center justify-center flex-shrink-0">
                            <Building2 className="w-5 h-5 text-white" />
                          </div>
                          <h5 className="font-medium text-[#413F3D] pt-2">
                            Property Management
                          </h5>
                        </div>
                        <p className="text-sm font-light text-[#413F3D]/70 leading-relaxed">
                          International and national portfolio oversight, tenant
                          relations, and full lifecycle property operations.
                        </p>
                      </div>
                      <div className="bg-white rounded-2xl p-6 border border-[#697184]/10 hover:border-[#697184]/30 hover:shadow-lg transition-all duration-300">
                        <div className="flex items-start gap-4 mb-3">
                          <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-[#697184] to-[#413F3D] flex items-center justify-center flex-shrink-0">
                            <Briefcase className="w-5 h-5 text-white" />
                          </div>
                          <h5 className="font-medium text-[#413F3D] pt-2">
                            Executive Assistance
                          </h5>
                        </div>
                        <p className="text-sm font-light text-[#413F3D]/70 leading-relaxed">
                          Calendar and inbox management, travel coordination,
                          meeting preparation, and confidential document
                          handling.
                        </p>
                      </div>
                      <div className="bg-white rounded-2xl p-6 border border-[#697184]/10 hover:border-[#697184]/30 hover:shadow-lg transition-all duration-300">
                        <div className="flex items-start gap-4 mb-3">
                          <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-[#697184] to-[#413F3D] flex items-center justify-center flex-shrink-0">
                            <Target className="w-5 h-5 text-white" />
                          </div>
                          <h5 className="font-medium text-[#413F3D] pt-2">
                            Operations & Process Design
                          </h5>
                        </div>
                        <p className="text-sm font-light text-[#413F3D]/70 leading-relaxed">
                          Developing scalable systems, SOP creation, workflow
                          optimization, and efficiency improvements.
                        </p>
                      </div>
                      <div className="bg-white rounded-2xl p-6 border border-[#697184]/10 hover:border-[#697184]/30 hover:shadow-lg transition-all duration-300">
                        <div className="flex items-start gap-4 mb-3">
                          <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-[#697184] to-[#413F3D] flex items-center justify-center flex-shrink-0">
                            <Globe className="w-5 h-5 text-white" />
                          </div>
                          <h5 className="font-medium text-[#413F3D] pt-2">
                            Remote Team Coordination
                          </h5>
                        </div>
                        <p className="text-sm font-light text-[#413F3D]/70 leading-relaxed">
                          Cross-timezone stakeholder management, remote project
                          oversight, and virtual team leadership.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Ashley's Profile - Detailed */}
            <div className="group">
              <div className="grid lg:grid-cols-[1fr_420px] gap-16 items-start">
                {/* Content Column */}
                <div className="pt-6 space-y-8 lg:order-1">
                  {/* Header */}
                  <div>
                    <div className="inline-flex items-center gap-2 px-4 py-2 bg-[#B1A6A4]/8 rounded-full mb-6">
                      <span className="text-[#B1A6A4] font-medium text-xs uppercase tracking-[0.25em]">
                        Virtual Assistant
                      </span>
                    </div>
                    <h3 className="text-5xl md:text-6xl font-extralight text-[#413F3D] mb-4 tracking-tight leading-[1.1]">
                      Ashley
                      <br />
                      Janse van Vuuren
                    </h3>
                    <p className="text-sm font-light text-[#413F3D]/60 uppercase tracking-wider mb-6">
                      BA Strategic Brand Communication · Vega School, South
                      Africa
                    </p>
                  </div>

                  {/* Divider */}
                  <div className="flex items-center gap-4">
                    <div className="w-1 h-1 rounded-full bg-[#B1A6A4]" />
                    <div className="flex-1 h-px bg-gradient-to-r from-[#B1A6A4]/40 to-transparent" />
                  </div>

                  {/* Expertise & Background */}
                  <div>
                    <p className="text-base font-light text-[#413F3D]/80 leading-relaxed">
                      Ashley brings a strong blend of executive-level
                      administrative support, customer experience management,
                      and strategic coordination to her clients. As a third-year
                      BA Strategic Brand Communication student at Vega School in
                      South Africa, she combines academic insight with hands-on
                      experience—understanding not just task execution, but
                      brand voice, communication strategy, and audience
                      engagement. Detail-oriented and proactive, she supports
                      founders and executives by managing operations smoothly
                      behind the scenes.
                    </p>
                  </div>

                  {/* Key Expertise Grid */}
                  <div>
                    <h4 className="text-sm font-medium text-[#697184] uppercase tracking-[0.2em] mb-6">
                      Areas of Expertise
                    </h4>
                    <div className="grid sm:grid-cols-2 gap-5">
                      <div className="bg-gradient-to-br from-white to-[#F2F1EF]/30 rounded-2xl p-6 border border-[#697184]/10 hover:border-[#B1A6A4]/30 hover:shadow-lg transition-all duration-300">
                        <div className="flex items-start gap-4 mb-3">
                          <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-[#B1A6A4] to-[#697184] flex items-center justify-center flex-shrink-0">
                            <Calendar className="w-5 h-5 text-white" />
                          </div>
                          <h5 className="font-medium text-[#413F3D] pt-2">
                            Administrative & Executive Support
                          </h5>
                        </div>
                        <p className="text-sm font-light text-[#413F3D]/70 leading-relaxed">
                          Inbox and calendar management, document creation,
                          travel coordination, and SOP development.
                        </p>
                      </div>

                      <div className="bg-gradient-to-br from-white to-[#F2F1EF]/30 rounded-2xl p-6 border border-[#697184]/10 hover:border-[#B1A6A4]/30 hover:shadow-lg transition-all duration-300">
                        <div className="flex items-start gap-4 mb-3">
                          <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-[#B1A6A4] to-[#697184] flex items-center justify-center flex-shrink-0">
                            <MessageCircle className="w-5 h-5 text-white" />
                          </div>
                          <h5 className="font-medium text-[#413F3D] pt-2">
                            Customer & Client Support
                          </h5>
                        </div>
                        <p className="text-sm font-light text-[#413F3D]/70 leading-relaxed">
                          Client communication, CRM management, onboarding, and
                          retention to enhance customer experience.
                        </p>
                      </div>

                      <div className="bg-gradient-to-br from-white to-[#F2F1EF]/30 rounded-2xl p-6 border border-[#697184]/10 hover:border-[#B1A6A4]/30 hover:shadow-lg transition-all duration-300">
                        <div className="flex items-start gap-4 mb-3">
                          <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-[#B1A6A4] to-[#697184] flex items-center justify-center flex-shrink-0">
                            <Pencil className="w-5 h-5 text-white" />
                          </div>
                          <h5 className="font-medium text-[#413F3D] pt-2">
                            Social Media & Content
                          </h5>
                        </div>
                        <p className="text-sm font-light text-[#413F3D]/70 leading-relaxed">
                          Content planning, scheduling, community management,
                          and brand-aligned content creation.
                        </p>
                      </div>

                      <div className="bg-gradient-to-br from-white to-[#F2F1EF]/30 rounded-2xl p-6 border border-[#697184]/10 hover:border-[#B1A6A4]/30 hover:shadow-lg transition-all duration-300">
                        <div className="flex items-start gap-4 mb-3">
                          <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-[#B1A6A4] to-[#697184] flex items-center justify-center flex-shrink-0">
                            <FolderKanban className="w-5 h-5 text-white" />
                          </div>
                          <h5 className="font-medium text-[#413F3D] pt-2">
                            Project Coordination
                          </h5>
                        </div>
                        <p className="text-sm font-light text-[#413F3D]/70 leading-relaxed">
                          Task management, timeline tracking, and team
                          coordination using Asana, Slack, and Google Workspace.
                        </p>
                      </div>
                    </div>
                  </div>

                  {/* Tools */}
                  <div className="bg-white rounded-2xl p-6 border border-[#697184]/10">
                    <h4 className="text-sm font-medium text-[#697184] uppercase tracking-[0.2em] mb-4">
                      Tools & Platforms
                    </h4>
                    <div className="flex flex-wrap gap-3">
                      {[
                        "Google Workspace",
                        "Microsoft Office",
                        "Slack",
                        "Zoom / Teams",
                        "Canva",
                        "Asana",
                      ].map((tool) => (
                        <span
                          key={tool}
                          className="px-4 py-2 bg-[#F2F1EF] rounded-full text-sm font-light text-[#413F3D]/80"
                        >
                          {tool}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Profile Image Column */}
                <div className="relative lg:order-2">
                  <div className="sticky top-32">
                    {/* Decorative frame */}
                    <div className="absolute -inset-4 bg-gradient-to-bl from-[#B1A6A4]/5 to-[#D8CFD0]/5 rounded-[3rem] -z-10" />
                    <div className="relative rounded-[2.5rem] overflow-hidden shadow-[0_20px_60px_-15px_rgba(65,63,61,0.2)] group-hover:shadow-[0_25px_70px_-15px_rgba(177,166,164,0.3)] transition-all duration-700">
                      <Image
                        src={getImagePath(
                          "/assets/assistant_ashley_image.jpeg",
                        )}
                        alt="Ashley Janse van Vuuren - Virtual Assistant"
                        width={420}
                        height={560}
                        className="w-full aspect-[3/4] object-cover group-hover:scale-[1.02] transition-transform duration-700"
                      />
                      {/* Gradient overlay */}
                      <div className="absolute inset-0 bg-gradient-to-t from-[#413F3D]/20 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
                    </div>
                    {/* Floating badge */}
                    <div className="absolute -bottom-6 -left-6 bg-white rounded-2xl p-5 shadow-[0_10px_40px_-10px_rgba(65,63,61,0.3)]">
                      <div className="text-center">
                        <div className="text-2xl font-light text-[#B1A6A4] mb-1">
                          Strategic
                        </div>
                        <div className="text-xs text-[#413F3D]/60 uppercase tracking-wider">
                          Brand Communication
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </PageContainer>
      </section>

      {/* Values */}
      <section className="relative py-20 md:py-24 bg-gradient-to-b from-[#F2F1EF]/40 via-white/90 to-[#B1A6A4]/8 overflow-hidden">
        {/* Decorative background elements */}
        <div className="absolute inset-0 opacity-30">
          <div className="absolute top-20 right-10 w-[400px] h-[400px] bg-[#D8CFD0]/20 rounded-full blur-3xl" />
          <div className="absolute bottom-20 left-10 w-[400px] h-[400px] bg-[#B1A6A4]/20 rounded-full blur-3xl" />
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-[#697184]/10 rounded-full blur-3xl" />
        </div>

        <PageContainer>
          <div className="relative z-10">
            <div className="text-center mb-16">
              <div className="inline-flex items-center gap-2 bg-white/80 backdrop-blur-sm border border-[#697184]/20 rounded-full px-5 py-2.5 mb-6 shadow-sm">
                <Target className="w-4 h-4 text-[#697184]" />
                <span className="text-sm font-light text-[#697184] uppercase tracking-[0.2em]">
                  Core Values
                </span>
              </div>
              <h2 className="text-4xl md:text-5xl font-light text-gray-900 mb-4">
                What Drives Us
              </h2>
            </div>
            <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
              <div className="bg-white/80 backdrop-blur-sm border border-[#697184]/20 rounded-3xl p-10 hover:shadow-2xl hover:bg-white transition-all duration-500 hover:-translate-y-2 text-center group">
                <div className="w-20 h-20 bg-gradient-to-br from-[#697184] to-[#413F3D] rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 group-hover:rotate-3 transition-all duration-500 shadow-lg">
                  <Heart className="w-10 h-10 text-white" />
                </div>
                <h3 className="text-2xl font-light mb-4 text-primary-900">
                  Reliability
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  You can count on us to deliver consistent, high-quality work
                  every single time. We meet deadlines and exceed expectations.
                </p>
              </div>
              <div className="bg-white/80 backdrop-blur-sm border border-[#697184]/20 rounded-3xl p-10 hover:shadow-2xl hover:bg-white transition-all duration-500 hover:-translate-y-2 text-center group">
                <div className="w-20 h-20 bg-gradient-to-br from-[#697184] to-[#413F3D] rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 group-hover:rotate-3 transition-all duration-500 shadow-lg">
                  <Globe className="w-10 h-10 text-white" />
                </div>
                <h3 className="text-2xl font-light mb-4 text-gray-900">
                  Global Perspective
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  Working across time zones and cultures, we bring a diverse
                  perspective and adapt to your unique business needs.
                </p>
              </div>
              <div className="bg-white/80 backdrop-blur-sm border border-[#697184]/20 rounded-3xl p-10 hover:shadow-2xl hover:bg-white transition-all duration-500 hover:-translate-y-2 text-center group">
                <div className="w-20 h-20 bg-gradient-to-br from-[#697184] to-[#413F3D] rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 group-hover:rotate-3 transition-all duration-500 shadow-lg">
                  <Target className="w-10 h-10 text-white" />
                </div>
                <h3 className="text-2xl font-light mb-4 text-gray-900">
                  Results-Driven
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  We focus on outcomes that move your business forward. Every
                  task is completed with your goals in mind.
                </p>
              </div>
            </div>
          </div>
        </PageContainer>
      </section>

      {/* What Makes Us Different */}
      <section className="py-20 md:py-24 bg-gradient-to-b from-gray-50 to-white">
        <PageContainer>
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-serif font-light text-gray-900 mb-4 tracking-tight">
              What Makes Us{" "}
              <span className="font-serif font-normal italic">Different</span>
            </h2>
          </div>
          <div className="grid md:grid-cols-2 gap-6 md:gap-8 max-w-6xl mx-auto">
            <div className="bg-white border border-[#697184]/15 rounded-3xl p-8 hover:shadow-xl hover:border-[#697184]/30 transition-all duration-500 group">
              <div className="flex gap-4">
                <div className="w-14 h-14 bg-[#697184] rounded-2xl flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform duration-500">
                  <Zap className="w-7 h-7 text-white" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-3 text-gray-900 tracking-tight">
                    Proactive Communication
                  </h3>
                  <p className="text-[15px] text-gray-600 leading-relaxed font-light">
                    We don&apos;t wait for you to check in. We provide regular
                    updates, flag potential issues early, and keep you informed
                    every step of the way.
                  </p>
                </div>
              </div>
            </div>
            <div className="bg-white border border-[#697184]/15 rounded-3xl p-8 hover:shadow-xl hover:border-[#697184]/30 transition-all duration-500 group">
              <div className="flex gap-4">
                <div className="w-14 h-14 bg-[#697184] rounded-2xl flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform duration-500">
                  <Users className="w-7 h-7 text-white" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-3 text-gray-900 tracking-tight">
                    International Experience
                  </h3>
                  <p className="text-[15px] text-gray-600 leading-relaxed font-light">
                    Having worked with clients across multiple countries and
                    industries, we understand different business cultures and
                    adapt accordingly.
                  </p>
                </div>
              </div>
            </div>
            <div className="bg-white border border-[#697184]/15 rounded-3xl p-8 hover:shadow-xl hover:border-[#697184]/30 transition-all duration-500 group">
              <div className="flex gap-4">
                <div className="w-14 h-14 bg-[#697184] rounded-2xl flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform duration-500">
                  <Award className="w-7 h-7 text-white" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-3 text-gray-900 tracking-tight">
                    Professional Training
                  </h3>
                  <p className="text-[15px] text-gray-600 leading-relaxed font-light">
                    Continuously updated skills in the latest tools and best
                    practices ensure you receive modern, efficient service.
                  </p>
                </div>
              </div>
            </div>
            <div className="bg-white border border-[#697184]/15 rounded-3xl p-8 hover:shadow-xl hover:border-[#697184]/30 transition-all duration-500 group">
              <div className="flex gap-4">
                <div className="w-14 h-14 bg-[#697184] rounded-2xl flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform duration-500">
                  <Heart className="w-7 h-7 text-white" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-3 text-gray-900 tracking-tight">
                    Personalized Service
                  </h3>
                  <p className="text-[15px] text-gray-600 leading-relaxed font-light">
                    No cookie-cutter solutions. We take time to understand your
                    business, your preferences, and your goals to deliver
                    customized support.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </PageContainer>
      </section>

      {/* CTA */}
      <section className="relative py-24 md:py-32 overflow-hidden bg-gradient-to-br from-[#F2F1EF]/40 via-white/80 to-[#D8CFD0]/10">
        <div className="absolute inset-0">
          <div className="absolute top-1/4 left-1/4 w-[500px] h-[500px] bg-[#D8CFD0]/15 blur-3xl" />
          <div className="absolute bottom-1/4 right-1/4 w-[500px] h-[500px] bg-[#B1A6A4]/10 blur-3xl" />
        </div>

        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-6xl mx-auto">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              {/* Left: Content */}
              <div className="space-y-6">
                <div className="inline-flex items-center gap-2 bg-[#D8CFD0]/30 border border-[#697184]/30 rounded-full px-4 py-2">
                  <span className="text-xs font-medium text-[#697184] uppercase tracking-wider">
                    Get Started
                  </span>
                </div>

                <h2 className="text-4xl md:text-5xl lg:text-6xl font-light text-[#413F3D] leading-tight">
                  Let&apos;s work together
                </h2>

                <p className="text-lg md:text-xl text-[#413F3D]/80 font-light leading-relaxed">
                  Experience professional virtual assistance tailored to your
                  needs. Book a free discovery call and discover how we can help
                  transform your workflow.
                </p>

                <div className="pt-4 space-y-4">
                  <Link
                    href="/contact"
                    className="inline-flex items-center gap-3 bg-gradient-to-r from-[#697184] via-[#413F3D] to-[#697184] text-white px-10 py-4 rounded-2xl font-semibold text-lg shadow-lg shadow-[#697184]/20 hover:shadow-xl hover:shadow-[#697184]/30 transition-all duration-300 hover:-translate-y-0.5"
                  >
                    Start Your Journey
                    <ArrowRight className="w-5 h-5" />
                  </Link>

                  <div className="flex flex-wrap gap-6 text-sm text-[#413F3D]/70">
                    <span className="flex items-center gap-2">
                      <CheckCircle className="w-4 h-4 text-[#D8CFD0]" />
                      Free discovery call
                    </span>
                    <span className="flex items-center gap-2">
                      <CheckCircle className="w-4 h-4 text-[#B1A6A4]" />
                      Quick response
                    </span>
                    <span className="flex items-center gap-2">
                      <CheckCircle className="w-4 h-4 text-[#697184]" />
                      No pressure
                    </span>
                  </div>
                </div>
              </div>

              {/* Right: Stats/Features Cards */}
              <div className="grid grid-cols-2 gap-4">
                <div className="bg-[#F2F1EF]/90 backdrop-blur-xl border border-[#697184]/15 rounded-2xl p-6 hover:shadow-lg hover:border-[#697184]/25 transition-all duration-300">
                  <div className="text-4xl font-bold text-[#697184] mb-2">
                    100+
                  </div>
                  <div className="text-sm text-[#413F3D]/70 font-medium">
                    Happy Clients
                  </div>
                </div>

                <div className="bg-[#D8CFD0]/30 backdrop-blur-xl border border-[#697184]/15 rounded-2xl p-6 hover:shadow-lg hover:border-[#697184]/25 transition-all duration-300">
                  <div className="text-4xl font-bold text-[#697184] mb-2">
                    98%
                  </div>
                  <div className="text-sm text-[#413F3D]/70 font-medium">
                    Satisfaction
                  </div>
                </div>

                <div className="bg-[#B1A6A4]/15 backdrop-blur-xl border border-[#697184]/15 rounded-2xl p-6 hover:shadow-lg hover:border-[#697184]/25 transition-all duration-300">
                  <div className="space-y-3 mb-3">
                    <div>
                      <div className="text-[10px] text-[#697184]/50 font-semibold uppercase tracking-[0.15em] mb-1">
                        United Kingdom
                      </div>
                      <div className="text-3xl font-bold text-[#697184] leading-none">
                        9
                        <span className="text-base font-normal text-[#697184]/70">
                          am
                        </span>{" "}
                        – 5
                        <span className="text-base font-normal text-[#697184]/70">
                          pm
                        </span>
                      </div>
                    </div>
                    <div className="relative py-2">
                      <div className="absolute inset-0 flex items-center">
                        <div className="w-full border-t border-[#697184]/20"></div>
                      </div>
                      <div className="relative flex justify-center">
                        <span className="bg-[#B1A6A4]/15 px-2 text-[10px] text-[#697184]/40">
                          •
                        </span>
                      </div>
                    </div>
                    <div>
                      <div className="text-[10px] text-[#697184]/50 font-semibold uppercase tracking-[0.15em] mb-1">
                        South Africa
                      </div>
                      <div className="text-3xl font-bold text-[#697184] leading-none">
                        8
                        <span className="text-base font-normal text-[#697184]/70">
                          am
                        </span>{" "}
                        – 5
                        <span className="text-base font-normal text-[#697184]/70">
                          pm
                        </span>
                      </div>
                    </div>
                  </div>
                  <div className="text-sm text-[#413F3D]/70 font-medium">
                    Support Hours
                  </div>
                </div>

                <div className="bg-[#D8CFD0]/40 backdrop-blur-xl border border-[#697184]/15 rounded-2xl p-6 hover:shadow-lg hover:border-[#697184]/25 transition-all duration-300">
                  <div className="text-4xl font-bold text-[#697184] mb-2">
                    10+
                  </div>
                  <div className="text-sm text-[#413F3D]/70 font-medium">
                    Years Experience
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
