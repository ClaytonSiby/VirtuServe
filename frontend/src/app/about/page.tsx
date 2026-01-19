"use client";

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
} from "lucide-react";
import founderImage from "@/assets/sheridan.JPG";
import Link from "next/link";
import PageContainer from "@/components/ui/PageContainer";
import styles from "./about.module.css";

export default function About() {
  return (
    <main className="min-h-screen bg-white">
      {/* Hero Section - Split Layout */}
      <section className="relative pt-32 pb-20 md:pt-40 md:pb-28 overflow-hidden bg-gradient-to-br from-slate-900 via-primary-950 to-slate-950">
        <div className="absolute inset-0 opacity-30">
          <div className="absolute top-1/4 right-0 w-[600px] h-[600px] bg-gradient-radial from-primary-500/20 to-transparent blur-3xl"></div>
          <div className="absolute bottom-1/4 left-0 w-[600px] h-[600px] bg-gradient-radial from-accent-500/15 to-transparent blur-3xl"></div>
        </div>

        {/* Decorative elements */}
        <div className="absolute top-20 left-10 w-72 h-72 border border-white/10 rounded-full opacity-20"></div>
        <div className="absolute bottom-20 right-10 w-96 h-96 border border-white/10 rounded-full opacity-20"></div>

        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-7xl mx-auto">
            <div className="grid lg:grid-cols-2 gap-16 items-center">
              {/* Left: Content */}
              <div className="space-y-8">
                <div className="inline-flex items-center gap-2.5 bg-white/10 backdrop-blur-md border border-white/20 rounded-full px-5 py-2.5 shadow-lg shadow-black/20">
                  <Heart className="w-4 h-4 text-accent-400" />
                  <span className="text-xs font-semibold text-white/90 uppercase tracking-[0.2em]">
                    Our Story
                  </span>
                </div>

                <div className="space-y-6">
                  <h1 className="text-6xl md:text-7xl lg:text-8xl font-extralight text-white leading-[0.95] tracking-tighter">
                    About
                    <span className="block mt-2 bg-gradient-to-r from-slate-800 via-primary-900 to-slate-900 bg-clip-text text-transparent font-light">
                      VirtuServe
                    </span>
                  </h1>

                  <div className="h-1 w-24 bg-gradient-to-r from-slate-900 to-primary-950 rounded-full"></div>
                </div>

                <p className="text-xl md:text-2xl text-gray-300 font-light leading-relaxed max-w-xl">
                  Building lasting partnerships with international clients
                  through professional excellence and genuine care
                </p>
              </div>

              {/* Right: Visual Element */}
              <div className="relative h-80 lg:h-96">
                <div className="absolute inset-0 bg-gradient-to-br from-gray-700/50 via-gray-800/60 to-gray-900/70 backdrop-blur-xl rounded-[2.5rem] shadow-2xl border border-white/10 overflow-hidden">
                  <div className="absolute inset-0 flex items-center justify-center p-10">
                    <div className="text-center space-y-8">
                      <div className="flex items-center justify-center gap-12">
                        <div className="text-center group">
                          <div className="text-6xl md:text-7xl font-light text-white mb-2 tracking-tight group-hover:scale-110 transition-transform duration-300">
                            10<span className="text-accent-400">+</span>
                          </div>
                          <div className="text-sm text-gray-300 font-medium uppercase tracking-widest">
                            Years
                          </div>
                        </div>
                        <div className="w-px h-20 bg-gradient-to-b from-transparent via-gray-500 to-transparent"></div>
                        <div className="text-center group">
                          <div className="text-6xl md:text-7xl font-light text-accent-400 mb-2 tracking-tight group-hover:scale-110 transition-transform duration-300">
                            500<span className="text-primary-400">+</span>
                          </div>
                          <div className="text-sm text-gray-300 font-medium uppercase tracking-widest">
                            Clients
                          </div>
                        </div>
                      </div>
                      <div className="pt-6 space-y-2">
                        <div className="flex items-center justify-center gap-2 text-sm text-gray-300">
                          <Globe className="w-4 h-4 text-primary-400" />
                          <span className="font-light">Trusted Worldwide</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                {/* Floating accent elements */}
                <div className="absolute -top-4 -right-4 w-32 h-32 bg-accent-500/30 rounded-full blur-2xl opacity-40"></div>
                <div className="absolute -bottom-4 -left-4 w-32 h-32 bg-primary-500/30 rounded-full blur-2xl opacity-40"></div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Our Story */}
      <section className="py-28 md:py-40 bg-gradient-to-b from-white via-gray-50/30 to-white">
        <PageContainer>
          <div className="text-center mb-20 md:mb-28">
            <div className="inline-flex items-center gap-2.5 bg-gradient-to-r from-slate-900/10 to-primary-950/10 border border-slate-700/30 rounded-full px-5 py-3 mb-8 shadow-sm">
              <div className="w-1.5 h-1.5 rounded-full bg-accent-500"></div>
              <span className="text-xs font-semibold text-accent-700 uppercase tracking-[0.25em]">
                Our Story
              </span>
            </div>
            <h2 className="text-5xl md:text-6xl lg:text-7xl font-extralight mb-8 text-gray-900 tracking-tight leading-tight">
              From desk to{" "}
              <span className="block md:inline bg-gradient-to-r from-slate-900 via-primary-950 to-slate-950 bg-clip-text text-transparent font-light">
                global impact
              </span>
            </h2>
            <p className="text-xl md:text-2xl text-gray-600 font-light max-w-3xl mx-auto leading-relaxed">
              Empowering businesses worldwide through professional excellence
            </p>
          </div>
          <div className="max-w-5xl mx-auto">
            <div className="relative bg-gradient-to-br from-slate-50/95 via-white to-primary-50/80 border border-slate-700/30 rounded-[2.5rem] p-12 md:p-20 shadow-2xl hover:shadow-[0_20px_80px_-15px_rgba(15,23,42,0.3)] hover:border-slate-900/40 transition-all duration-700 overflow-hidden group">
              {/* Animated gradient orbs */}
              <div className="absolute top-0 right-0 w-96 h-96 bg-gradient-radial from-primary-200/40 to-transparent blur-3xl opacity-60 group-hover:opacity-100 transition-opacity duration-700" />
              <div className="absolute bottom-0 left-0 w-96 h-96 bg-gradient-radial from-slate-200/40 to-transparent blur-3xl opacity-60 group-hover:opacity-100 transition-opacity duration-700" />

              {/* Decorative corner accents */}
              <div className="absolute top-8 right-8 w-24 h-24 border-t-2 border-r-2 border-slate-900/20 rounded-tr-3xl"></div>
              <div className="absolute bottom-8 left-8 w-24 h-24 border-b-2 border-l-2 border-slate-900/20 rounded-bl-3xl"></div>

              {/* Elegant quote mark with gradient */}
              <div className="absolute top-12 left-12 text-9xl font-serif bg-gradient-to-br from-slate-900/20 via-primary-950/15 to-slate-950/20 bg-clip-text text-transparent leading-none">
                &ldquo;
              </div>

              <div className="relative z-10 space-y-10">
                <p className="text-2xl md:text-3xl bg-gradient-to-br from-slate-800 via-slate-700 to-primary-800 bg-clip-text text-transparent font-light leading-relaxed tracking-tight">
                  We help businesses reclaim their time to focus on growth—not
                  administrative tasks. Serving international clients across
                  time zones and industries.
                </p>

                {/* Elegant divider */}
                <div className="flex items-center gap-6 py-2">
                  <div className="flex-1 h-px bg-gradient-to-r from-transparent via-slate-700/40 to-slate-900/30" />
                  <div className="w-3 h-3 rounded-full bg-gradient-to-br from-slate-900 to-primary-950 shadow-lg shadow-slate-900/30"></div>
                  <div className="flex-1 h-px bg-gradient-to-l from-transparent via-slate-700/40 to-slate-900/30" />
                </div>

                <p className="text-xl md:text-2xl text-slate-700 font-light leading-relaxed">
                  From startups to established enterprises, we deliver tailored
                  support that treats your business with the care it deserves.
                  Building lasting partnerships, not transactions.
                </p>

                {/* Decorative footer accent */}
                <div className="pt-4 flex items-center gap-3">
                  <div className="h-1 w-16 bg-gradient-to-r from-slate-900 via-primary-950 to-slate-950 rounded-full"></div>
                  <div className="h-1 w-8 bg-gradient-to-r from-primary-950 to-slate-700 rounded-full opacity-60"></div>
                  <div className="h-1 w-4 bg-slate-700/40 rounded-full"></div>
                </div>
              </div>
            </div>
          </div>
        </PageContainer>
      </section>

      {/* Founder Bio */}
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
          <div className="relative z-10 text-center mb-16">
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-light text-white mb-5 tracking-tight leading-[1.1]">
              Meet{" "}
              <span className="font-normal bg-gradient-to-r from-accent-300 via-primary-200 to-accent-300 bg-clip-text text-transparent">
                Sheridan
              </span>
            </h2>
            <p className="text-lg md:text-xl text-primary-100/90 font-light max-w-2xl mx-auto leading-relaxed">
              The founder behind VirtuServe
            </p>
          </div>
          <div className="relative z-10 grid lg:grid-cols-3 gap-12 max-w-7xl mx-auto">
            {/* Photo and Quick Bio */}
            <div className="lg:col-span-1">
              <div className="relative bg-gradient-to-br from-slate-50/95 via-white to-primary-50/80 border border-slate-700/30 rounded-[2.5rem] p-10 shadow-2xl hover:shadow-[0_20px_80px_-15px_rgba(15,23,42,0.3)] hover:border-slate-900/40 transition-all duration-700 sticky top-24 overflow-hidden group">
                {/* Decorative gradient orbs */}
                <div className="absolute top-0 right-0 w-40 h-40 bg-gradient-radial from-primary-200/40 to-transparent blur-3xl opacity-60 group-hover:opacity-100 transition-opacity duration-700" />
                <div className="absolute bottom-0 left-0 w-40 h-40 bg-gradient-radial from-slate-200/30 to-transparent blur-3xl opacity-60 group-hover:opacity-100 transition-opacity duration-700" />

                {/* Corner accent */}
                <div className="absolute top-6 right-6 w-16 h-16 border-t-2 border-r-2 border-slate-900/10 rounded-tr-2xl"></div>

                <div className="relative z-10">
                  <div className="aspect-square rounded-[2rem] mb-8 overflow-hidden border-2 border-slate-700/20 group-hover:border-slate-900/40 group-hover:scale-105 transition-all duration-700 shadow-xl group-hover:shadow-2xl">
                    <Image
                      src={founderImage}
                      alt="Sheridan De Laroche - Founder & Lead VA"
                      className="w-full h-full object-cover"
                      priority
                    />
                  </div>
                  <h3 className="text-3xl md:text-4xl font-light bg-gradient-to-r from-slate-900 via-slate-800 to-primary-900 bg-clip-text text-transparent mb-2 tracking-tight">
                    Sheridan De Laroche
                  </h3>
                  <p className="text-slate-700 font-medium mb-2 text-sm uppercase tracking-[0.2em]">
                    Founder & Lead VA
                  </p>
                  <p className="text-slate-600 text-sm mb-8 font-light leading-relaxed">
                    International Property Manager & Executive Assistant
                  </p>

                  {/* Elegant divider */}
                  <div className="flex items-center gap-3 mb-8">
                    <div className="flex-1 h-px bg-gradient-to-r from-transparent via-slate-700/30 to-slate-900/20" />
                    <div className="w-2 h-2 rounded-full bg-gradient-to-br from-slate-900 to-primary-950 shadow-sm"></div>
                    <div className="flex-1 h-px bg-gradient-to-l from-transparent via-slate-700/30 to-slate-900/20" />
                  </div>

                  <div className="flex gap-3">
                    <a
                      href="https://www.linkedin.com/in/sheridan-de-laroche-ba4506127/"
                      className="flex-1 px-5 py-3.5 rounded-2xl bg-gradient-to-br from-slate-900 via-primary-950 to-slate-950 text-white text-sm font-medium border border-slate-800 hover:shadow-2xl hover:-translate-y-1 hover:scale-105 transition-all duration-300 text-center"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      LinkedIn
                    </a>
                    <a
                      href="/contact"
                      className="flex-1 px-5 py-3.5 rounded-2xl border border-slate-700/30 text-slate-900 text-sm font-medium hover:border-slate-900 hover:bg-slate-50 hover:shadow-xl hover:-translate-y-1 transition-all duration-300 text-center"
                    >
                      Contact
                    </a>
                  </div>
                </div>
              </div>
            </div>

            {/* Detailed Bio and Experience */}
            <div className="lg:col-span-2 space-y-8">
              {/* Bio */}
              <div className="relative bg-gradient-to-br from-slate-50/95 via-white to-primary-50/80 border border-slate-700/30 rounded-[2.5rem] p-10 md:p-14 shadow-2xl hover:shadow-[0_20px_80px_-15px_rgba(15,23,42,0.3)] hover:border-slate-900/40 transition-all duration-700 overflow-hidden group">
                {/* Animated gradient orbs */}
                <div className="absolute top-0 right-0 w-64 h-64 bg-gradient-radial from-primary-200/40 to-transparent blur-3xl opacity-60 group-hover:opacity-100 transition-opacity duration-700" />
                <div className="absolute bottom-0 left-0 w-64 h-64 bg-gradient-radial from-slate-200/30 to-transparent blur-3xl opacity-60 group-hover:opacity-100 transition-opacity duration-700" />

                {/* Decorative corner elements */}
                <div className="absolute top-8 right-8 w-20 h-20 border-t-2 border-r-2 border-slate-900/15 rounded-tr-3xl"></div>
                <div className="absolute bottom-8 left-8 w-20 h-20 border-b-2 border-l-2 border-slate-900/15 rounded-bl-3xl"></div>

                <div className="relative z-10">
                  <div className="flex items-center gap-4 mb-10">
                    <div className="flex items-center gap-3">
                      <div className="h-1 w-12 bg-gradient-to-r from-slate-900 via-primary-950 to-slate-950 rounded-full"></div>
                      <div className="h-1 w-6 bg-gradient-to-r from-primary-950 to-slate-700 rounded-full opacity-60"></div>
                    </div>
                  </div>

                  <h4 className="text-3xl md:text-4xl lg:text-5xl font-extralight bg-gradient-to-r from-slate-900 via-slate-800 to-primary-900 bg-clip-text text-transparent mb-10 tracking-tight leading-tight">
                    Expertise & Background
                  </h4>

                  <div className="space-y-8 text-slate-700 leading-relaxed">
                    <p className="text-xl md:text-2xl font-light text-slate-800 leading-relaxed">
                      Sheridan brings dual expertise as an International
                      Property Manager and Executive Assistant, delivering
                      exceptional results for clients across borders.
                    </p>

                    {/* Elegant separator */}
                    <div className="flex items-center gap-4 py-2">
                      <div className="w-2 h-2 rounded-full bg-gradient-to-br from-slate-900 to-primary-950 shadow-sm"></div>
                      <div className="flex-1 h-px bg-gradient-to-r from-slate-700/30 to-transparent"></div>
                    </div>

                    <p className="text-lg md:text-xl font-light leading-relaxed">
                      With a proven track record managing diverse portfolios and
                      supporting senior executives, she excels at complex
                      scheduling, travel coordination, and confidential
                      matters—all handled with precision and discretion.
                    </p>
                    <p className="text-lg md:text-xl font-light leading-relaxed">
                      Her strength lies in building productive relationships
                      while thriving in fast-paced environments, making her an
                      invaluable partner for organizational growth.
                    </p>
                  </div>
                </div>
              </div>

              {/* Professional Experience */}
              <div className="relative bg-gradient-to-br from-slate-50/95 via-white to-primary-50/80 border border-slate-700/30 rounded-[2.5rem] p-10 md:p-14 shadow-2xl hover:shadow-[0_20px_80px_-15px_rgba(15,23,42,0.3)] hover:border-slate-900/40 transition-all duration-700 overflow-hidden">
                {/* Gradient orbs */}
                <div className="absolute bottom-0 right-0 w-64 h-64 bg-gradient-radial from-primary-200/40 to-transparent blur-3xl opacity-60" />

                <div className="relative z-10">
                  <div className="flex items-center gap-4 mb-10">
                    <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-slate-900 via-primary-950 to-slate-950 flex items-center justify-center border border-slate-800 shadow-xl">
                      <Users className="w-7 h-7 text-white" />
                    </div>
                    <h4 className="text-2xl md:text-3xl font-light bg-gradient-to-r from-slate-900 to-primary-900 bg-clip-text text-transparent">
                      Key Expertise
                    </h4>
                  </div>

                  <div className="space-y-4">
                    <div className="flex items-start gap-5 p-6 md:p-7 rounded-[2rem] bg-white/90 border border-slate-700/30 hover:border-slate-900 hover:shadow-2xl hover:-translate-y-1 transition-all duration-500 group">
                      <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-slate-900 via-primary-950 to-slate-950 text-white flex items-center justify-center flex-shrink-0 border border-slate-800 shadow-lg group-hover:scale-110 group-hover:rotate-3 transition-all duration-500">
                        <Target className="w-7 h-7" />
                      </div>
                      <div className="flex-1">
                        <h5 className="text-lg font-semibold text-slate-900 mb-2 tracking-tight">
                          Property Management
                        </h5>
                        <p className="text-sm md:text-base text-slate-600 font-light leading-relaxed">
                          International & national portfolio oversight with
                          proven cost-effective strategies
                        </p>
                      </div>
                    </div>

                    <div className="flex items-start gap-5 p-6 md:p-7 rounded-[2rem] bg-white/90 border border-slate-700/30 hover:border-slate-900 hover:shadow-2xl hover:-translate-y-1 transition-all duration-500 group">
                      <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-slate-900 via-primary-950 to-slate-950 text-white flex items-center justify-center flex-shrink-0 border border-slate-800 shadow-lg group-hover:scale-110 group-hover:rotate-3 transition-all duration-500">
                        <Zap className="w-7 h-7" />
                      </div>
                      <div className="flex-1">
                        <h5 className="text-lg font-semibold text-slate-900 mb-2 tracking-tight">
                          Executive Support
                        </h5>
                        <p className="text-sm md:text-base text-slate-600 font-light leading-relaxed">
                          High-level assistance to senior executives with
                          exceptional organizational expertise
                        </p>
                      </div>
                    </div>

                    <div className="flex items-start gap-5 p-6 md:p-7 rounded-[2rem] bg-white/90 border border-slate-700/30 hover:border-slate-900 hover:shadow-2xl hover:-translate-y-1 transition-all duration-500 group">
                      <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-slate-900 via-primary-950 to-slate-950 text-white flex items-center justify-center flex-shrink-0 border border-slate-800 shadow-lg group-hover:scale-110 group-hover:rotate-3 transition-all duration-500">
                        <Globe className="w-7 h-7" />
                      </div>
                      <div className="flex-1">
                        <h5 className="text-lg font-semibold text-slate-900 mb-2 tracking-tight">
                          International Operations
                        </h5>
                        <p className="text-sm md:text-base text-slate-600 font-light leading-relaxed">
                          Cross-border coordination and management with cultural
                          fluency
                        </p>
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
      <section className="py-20 md:py-24 bg-white">
        <PageContainer>
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 bg-accent-50 border border-accent-200/50 rounded-full px-5 py-2.5 mb-6">
              <Target className="w-4 h-4 text-accent-600" />
              <span className="text-sm font-light text-accent-800 uppercase tracking-[0.2em]">
                Core Values
              </span>
            </div>
            <h2 className="text-4xl md:text-5xl font-light text-gray-900 mb-4">
              What Drives Us
            </h2>
          </div>
          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            <div className="bg-gradient-to-br from-white to-gray-50 border border-slate-700/30 rounded-3xl p-10 hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 text-center group">
              <div className="w-20 h-20 bg-gradient-to-br from-slate-900 via-primary-950 to-slate-950 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 group-hover:rotate-3 transition-all duration-500 shadow-lg">
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
            <div className="bg-gradient-to-br from-white to-gray-50 border border-slate-700/30 rounded-3xl p-10 hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 text-center group">
              <div className="w-20 h-20 bg-gradient-to-br from-slate-900 via-primary-950 to-slate-950 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 group-hover:rotate-3 transition-all duration-500 shadow-lg">
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
            <div className="bg-gradient-to-br from-white to-gray-50 border border-slate-700/30 rounded-3xl p-10 hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 text-center group">
              <div className="w-20 h-20 bg-gradient-to-br from-slate-900 via-primary-950 to-slate-950 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 group-hover:rotate-3 transition-all duration-500 shadow-lg">
                <Target className="w-10 h-10 text-white" />
              </div>
              <h3 className="text-2xl font-light mb-4 text-gray-900">
                Results-Driven
              </h3>
              <p className="text-gray-600 leading-relaxed">
                We focus on outcomes that move your business forward. Every task
                is completed with your goals in mind.
              </p>
            </div>
          </div>
        </PageContainer>
      </section>

      {/* What Makes Us Different */}
      <section className="py-20 md:py-24 bg-gradient-to-b from-gray-50 to-white">
        <PageContainer>
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-light text-gray-900 mb-4">
              What Makes Us{" "}
              <span className="bg-gradient-to-r from-slate-900 to-slate-950 bg-clip-text text-transparent font-normal">
                Different
              </span>
            </h2>
          </div>
          <div className="grid md:grid-cols-2 gap-6 md:gap-8 max-w-6xl mx-auto">
            <div className="bg-white border border-slate-700/30 rounded-3xl p-8 hover:shadow-xl hover:border-slate-900 transition-all duration-500 group">
              <div className="flex gap-4">
                <div className="w-14 h-14 bg-gradient-to-br from-slate-900 to-primary-950 rounded-2xl flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform duration-500">
                  <Zap className="w-7 h-7 text-white" />
                </div>
                <div>
                  <h3 className="text-xl font-medium mb-3 text-gray-900">
                    Proactive Communication
                  </h3>
                  <p className="text-gray-600 leading-relaxed">
                    We don&apos;t wait for you to check in. We provide regular
                    updates, flag potential issues early, and keep you informed
                    every step of the way.
                  </p>
                </div>
              </div>
            </div>
            <div className="bg-white border border-gray-200/50 rounded-3xl p-8 hover:shadow-xl hover:border-blue-200 transition-all duration-500 group">
              <div className="flex gap-4">
                <div className="w-14 h-14 bg-gradient-to-br from-slate-900 to-primary-950 rounded-2xl flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform duration-500">
                  <Users className="w-7 h-7 text-white" />
                </div>
                <div>
                  <h3 className="text-xl font-medium mb-3 text-gray-900">
                    International Experience
                  </h3>
                  <p className="text-gray-600 leading-relaxed">
                    Having worked with clients across multiple countries and
                    industries, we understand different business cultures and
                    adapt accordingly.
                  </p>
                </div>
              </div>
            </div>
            <div className="bg-white border border-gray-200/50 rounded-3xl p-8 hover:shadow-xl hover:border-purple-200 transition-all duration-500 group">
              <div className="flex gap-4">
                <div className="w-14 h-14 bg-gradient-to-br from-slate-900 to-primary-950 rounded-2xl flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform duration-500">
                  <Award className="w-7 h-7 text-white" />
                </div>
                <div>
                  <h3 className="text-xl font-medium mb-3 text-gray-900">
                    Professional Training
                  </h3>
                  <p className="text-gray-600 leading-relaxed">
                    Continuously updated skills in the latest tools and best
                    practices ensure you receive modern, efficient service.
                  </p>
                </div>
              </div>
            </div>
            <div className="bg-white border border-slate-700/30 rounded-3xl p-8 hover:shadow-xl hover:border-slate-900 transition-all duration-500 group">
              <div className="flex gap-4">
                <div className="w-14 h-14 bg-gradient-to-br from-slate-900 to-primary-950 rounded-2xl flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform duration-500">
                  <Heart className="w-7 h-7 text-white" />
                </div>
                <div>
                  <h3 className="text-xl font-medium mb-3 text-gray-900">
                    Personalized Service
                  </h3>
                  <p className="text-gray-600 leading-relaxed">
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
      <section className="relative py-24 md:py-32 overflow-hidden bg-white">
        <div className="absolute inset-0 bg-gradient-to-br from-accent-50/50 via-transparent to-primary-50/50"></div>

        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-6xl mx-auto">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              {/* Left: Content */}
              <div className="space-y-6">
                <div className="inline-flex items-center gap-2 bg-primary-100/80 border border-primary-300/50 rounded-full px-4 py-2">
                  <span className="text-xs font-medium text-primary-700 uppercase tracking-wider">
                    Get Started
                  </span>
                </div>

                <h2 className="text-4xl md:text-5xl lg:text-6xl font-light text-gray-900 leading-tight">
                  Let&apos;s work together
                </h2>

                <p className="text-lg md:text-xl text-gray-600 font-light leading-relaxed">
                  Experience professional virtual assistance tailored to your
                  needs. Book a free consultation and discover how we can help
                  transform your workflow.
                </p>

                <div className="pt-4 space-y-4">
                  <Link
                    href="/contact"
                    className="inline-flex items-center gap-3 bg-gradient-to-br from-slate-900 via-primary-950 to-slate-950 text-white px-10 py-4 rounded-xl font-semibold text-lg shadow-lg shadow-slate-900/20 hover:shadow-xl hover:shadow-slate-900/30 transition-all duration-300 hover:-translate-y-0.5"
                  >
                    Start Your Journey
                    <ArrowRight className="w-5 h-5" />
                  </Link>

                  <div className="flex flex-wrap gap-6 text-sm text-gray-600">
                    <span className="flex items-center gap-2">
                      <CheckCircle className="w-4 h-4 text-accent-500" />
                      Free consultation
                    </span>
                    <span className="flex items-center gap-2">
                      <CheckCircle className="w-4 h-4 text-accent-500" />
                      Quick response
                    </span>
                    <span className="flex items-center gap-2">
                      <CheckCircle className="w-4 h-4 text-accent-500" />
                      No pressure
                    </span>
                  </div>
                </div>
              </div>

              {/* Right: Stats/Features Cards */}
              <div className="grid grid-cols-2 gap-4">
                <div className="bg-gradient-to-br from-white to-primary-50/50 border border-primary-200/60 rounded-2xl p-6 hover:shadow-lg transition-shadow duration-300">
                  <div className="text-4xl font-bold text-accent-600 mb-2">
                    500+
                  </div>
                  <div className="text-sm text-gray-700 font-medium">
                    Happy Clients
                  </div>
                </div>

                <div className="bg-gradient-to-br from-white to-accent-50/50 border border-accent-200/60 rounded-2xl p-6 hover:shadow-lg transition-shadow duration-300">
                  <div className="text-4xl font-bold text-primary-600 mb-2">
                    98%
                  </div>
                  <div className="text-sm text-gray-700 font-medium">
                    Satisfaction
                  </div>
                </div>

                <div className="bg-gradient-to-br from-white to-accent-50/50 border border-accent-200/60 rounded-2xl p-6 hover:shadow-lg transition-shadow duration-300">
                  <div className="text-4xl font-bold text-primary-600 mb-2">
                    24/7
                  </div>
                  <div className="text-sm text-gray-700 font-medium">
                    Support
                  </div>
                </div>

                <div className="bg-gradient-to-br from-white to-primary-50/50 border border-primary-200/60 rounded-2xl p-6 hover:shadow-lg transition-shadow duration-300">
                  <div className="text-4xl font-bold text-accent-600 mb-2">
                    10+
                  </div>
                  <div className="text-sm text-gray-700 font-medium">
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
