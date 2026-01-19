"use client";

import Link from "next/link";
import {
  Calendar,
  Mail,
  Globe,
  Zap,
  Search,
  CheckCircle,
  Sparkles,
  ArrowRight,
  TrendingUp,
  Users,
  Star,
  Quote,
  Target,
  BarChart3,
  Headphones,
} from "lucide-react";
import { motion } from "framer-motion";

export default function Home() {
  return (
    <main className="min-h-screen bg-gradient-to-br from-slate-50 via-white to-gray-50">
      {/* Hero Section - Refined & Eye-Catching */}
      <section className="relative py-16 md:py-20 overflow-hidden bg-gradient-to-br from-slate-900/[0.08] via-primary-950/[0.10] to-slate-950/[0.08]">
        {/* Elegant background effects */}
        <div className="absolute inset-0">
          <div className="absolute top-1/2 right-0 w-[600px] h-[600px] bg-gradient-radial from-accent-500/10 to-transparent blur-3xl" />
          <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-gradient-radial from-primary-500/10 to-transparent blur-3xl" />
        </div>

        <div className="container mx-auto px-4 relative z-10 pt-12 md:pt-16">
          <div className="max-w-7xl mx-auto">
            <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-start">
              {/* Left: Hero Content */}
              <motion.div
                initial={{ opacity: 0, x: -30 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, ease: "easeOut" }}
                className="space-y-8 lg:pt-8"
              >
                {/* Premium Badge */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, ease: "easeOut" }}
                  className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gradient-to-r from-slate-900/10 to-primary-950/10 border border-slate-700/30"
                >
                  <Sparkles className="w-3.5 h-3.5 text-slate-900" />
                  <span className="text-xs font-medium text-primary-900 tracking-wider uppercase">
                    Premium Virtual Services
                  </span>
                </motion.div>

                {/* Headline - Balanced Typography */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: 0.1, ease: "easeOut" }}
                  className="space-y-4"
                >
                  <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight leading-[1.1]">
                    <span className="bg-gradient-to-r from-slate-700 to-primary-800 bg-clip-text text-transparent">
                      Elevate Your Business
                    </span>
                    <br />
                    <span className="relative inline-block mt-2">
                      <span className="bg-gradient-to-r from-slate-700 to-slate-800 bg-clip-text text-transparent">
                        with Expert Support
                      </span>
                      <motion.div
                        initial={{ scaleX: 0 }}
                        animate={{ scaleX: 1 }}
                        transition={{
                          duration: 1,
                          delay: 0.5,
                          ease: "easeOut",
                        }}
                        className="absolute -bottom-2 left-0 right-0 h-0.5 bg-gradient-to-r from-slate-700 to-slate-800 rounded-full origin-left"
                      />
                    </span>
                  </h1>
                </motion.div>

                {/* Description */}
                <motion.p
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
                  className="text-lg text-primary-700 max-w-xl leading-relaxed"
                >
                  Premium virtual assistant services for entrepreneurs and
                  companies ready to scale with sophistication.
                </motion.p>

                {/* CTA Buttons */}
                <div className="flex flex-col sm:flex-row gap-4 pt-2">
                  <Link href="/contact">
                    <motion.button
                      whileHover={{ scale: 1.02, y: -2 }}
                      whileTap={{ scale: 0.98 }}
                      className="group relative px-8 py-4 bg-gradient-to-br from-slate-900 via-primary-950 to-slate-950 text-white rounded-xl font-semibold shadow-xl shadow-slate-900/25 hover:shadow-slate-900/40 transition-all duration-300 flex items-center justify-center gap-2 overflow-hidden"
                    >
                      <span className="relative z-10 flex items-center gap-2">
                        Get Started
                        <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-300" />
                      </span>
                      <div className="absolute inset-0 bg-gradient-to-r from-slate-800 to-primary-900 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                    </motion.button>
                  </Link>
                  <Link href="/services">
                    <motion.button
                      whileHover={{ scale: 1.02, y: -2 }}
                      whileTap={{ scale: 0.98 }}
                      className="px-8 py-4 bg-white/80 backdrop-blur-sm text-primary-900 rounded-xl font-semibold border-2 border-slate-700 hover:border-slate-900 hover:shadow-xl hover:shadow-slate-900/15 transition-all duration-300 flex items-center justify-center gap-2"
                    >
                      View Services
                    </motion.button>
                  </Link>
                </div>

                {/* Trust Indicators - Compact */}
                <div className="flex flex-wrap items-center gap-6 pt-4">
                  <div className="flex items-center gap-2">
                    <div className="flex -space-x-2">
                      {[1, 2, 3].map((i) => (
                        <motion.div
                          key={i}
                          initial={{ scale: 0 }}
                          animate={{ scale: 1 }}
                          transition={{
                            delay: 0.6 + i * 0.08,
                            duration: 0.4,
                            type: "spring",
                          }}
                          className="w-9 h-9 rounded-full bg-gradient-to-br from-slate-700 to-primary-900 border-2 border-white shadow-md"
                        />
                      ))}
                    </div>
                    <div>
                      <div className="flex gap-0.5 mb-0.5">
                        {[1, 2, 3, 4, 5].map((star) => (
                          <Star
                            key={star}
                            className="w-3 h-3 fill-accent-500 text-accent-500"
                          />
                        ))}
                      </div>
                      <p className="text-xs font-semibold text-primary-800">
                        500+ Clients
                      </p>
                    </div>
                  </div>
                  <div className="h-8 w-px bg-primary-300" />
                  <div>
                    <p className="text-xl font-bold text-primary-900">98%</p>
                    <p className="text-xs text-primary-600">Retention</p>
                  </div>
                </div>
              </motion.div>

              {/* Right: Feature Cards - Compact & Visual */}
              <motion.div
                initial={{ opacity: 0, x: 30 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
                className="lg:sticky lg:top-24"
              >
                {/* Sophisticated Services Network Animation */}
                <div className="relative bg-gradient-to-br from-white via-primary-50/30 to-accent-50/30 backdrop-blur-sm rounded-3xl p-8 md:p-10 shadow-2xl border border-slate-700/30/40 overflow-hidden group">
                  {/* Animated Background Effects */}
                  <div className="absolute inset-0 opacity-30">
                    <div className="absolute top-0 right-0 w-64 h-64 bg-gradient-radial from-accent-300/30 to-transparent blur-3xl" />
                    <div className="absolute bottom-0 left-0 w-64 h-64 bg-gradient-radial from-primary-300/30 to-transparent blur-3xl" />
                  </div>

                  <div className="relative z-10">
                    <motion.h3
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      transition={{ duration: 0.6, delay: 0.1 }}
                      className="text-2xl md:text-3xl font-light text-primary-900 mb-2"
                    >
                      Professional Excellence
                    </motion.h3>
                    <motion.p
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      transition={{ duration: 0.6, delay: 0.2 }}
                      className="text-primary-600 text-sm md:text-base font-light leading-relaxed mb-8"
                    >
                      Seamlessly connected services tailored to your business
                      needs
                    </motion.p>

                    {/* Redesigned Services Network */}
                    <div className="relative h-[500px] sm:h-[520px] md:h-[480px]">
                      {/* Connection Lines using CSS */}
                      <div className="absolute inset-0">
                        {/* Line to Admin (Top) */}
                        <motion.div
                          initial={{ scaleY: 0, opacity: 0 }}
                          animate={{ scaleY: 1, opacity: 1 }}
                          transition={{ duration: 0.8, delay: 0.4 }}
                          className="absolute left-1/2 top-[10%] sm:top-[12%] w-0.5 h-[35%] sm:h-[38%] -translate-x-1/2 origin-bottom"
                          style={{
                            background:
                              "linear-gradient(to bottom, #697184, transparent)",
                          }}
                        />

                        {/* Line to Support (Bottom) */}
                        <motion.div
                          initial={{ scaleY: 0, opacity: 0 }}
                          animate={{ scaleY: 1, opacity: 1 }}
                          transition={{ duration: 0.8, delay: 0.5 }}
                          className="absolute left-1/2 bottom-[10%] sm:bottom-[12%] w-0.5 h-[35%] sm:h-[38%] -translate-x-1/2 origin-top"
                          style={{
                            background:
                              "linear-gradient(to top, #697184, transparent)",
                          }}
                        />

                        {/* Line to Marketing (Top Right) */}
                        <motion.div
                          initial={{ scale: 0, opacity: 0 }}
                          animate={{ scale: 1, opacity: 1 }}
                          transition={{ duration: 0.8, delay: 0.6 }}
                          className="absolute top-[25%] sm:top-[28%] right-[5%] sm:right-[8%] w-[38%] sm:w-[35%] h-0.5 origin-right"
                          style={{
                            background:
                              "linear-gradient(to left, #697184, transparent)",
                            transform: "rotate(-25deg)",
                            transformOrigin: "right center",
                          }}
                        />

                        {/* Line to Analytics (Bottom Right) */}
                        <motion.div
                          initial={{ scale: 0, opacity: 0 }}
                          animate={{ scale: 1, opacity: 1 }}
                          transition={{ duration: 0.8, delay: 0.7 }}
                          className="absolute bottom-[25%] sm:bottom-[28%] right-[5%] sm:right-[8%] w-[38%] sm:w-[35%] h-0.5 origin-right"
                          style={{
                            background:
                              "linear-gradient(to left, #697184, transparent)",
                            transform: "rotate(25deg)",
                            transformOrigin: "right center",
                          }}
                        />

                        {/* Line to Scheduling (Top Left) */}
                        <motion.div
                          initial={{ scale: 0, opacity: 0 }}
                          animate={{ scale: 1, opacity: 1 }}
                          transition={{ duration: 0.8, delay: 0.8 }}
                          className="absolute top-[25%] sm:top-[28%] left-[5%] sm:left-[8%] w-[38%] sm:w-[35%] h-0.5 origin-left"
                          style={{
                            background:
                              "linear-gradient(to right, #697184, transparent)",
                            transform: "rotate(25deg)",
                            transformOrigin: "left center",
                          }}
                        />

                        {/* Line to Operations (Bottom Left) */}
                        <motion.div
                          initial={{ scale: 0, opacity: 0 }}
                          animate={{ scale: 1, opacity: 1 }}
                          transition={{ duration: 0.8, delay: 0.9 }}
                          className="absolute bottom-[25%] sm:bottom-[28%] left-[5%] sm:left-[8%] w-[38%] sm:w-[35%] h-0.5 origin-left"
                          style={{
                            background:
                              "linear-gradient(to right, #697184, transparent)",
                            transform: "rotate(-25deg)",
                            transformOrigin: "left center",
                          }}
                        />
                      </div>

                      {/* Badge */}
                      <motion.div
                        initial={{ opacity: 0, scale: 0.9 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.6, delay: 0.3 }}
                        className="absolute bottom-2 left-0 sm:bottom-2 sm:right-2 sm:left-auto z-30 inline-flex items-center gap-2 bg-gradient-to-r from-accent-100 to-primary-100 border border-accent-200/60 rounded-full px-3 py-1.5 shadow-lg backdrop-blur-sm"
                      >
                        <div className="w-1.5 h-1.5 rounded-full bg-accent-500 animate-pulse" />
                        <span className="text-[10px] font-semibold text-primary-900 uppercase tracking-wider">
                          Integrated Services
                        </span>
                      </motion.div>

                      {/* Center Hub */}
                      <motion.div
                        initial={{ scale: 0, rotate: -180 }}
                        animate={{ scale: 1, rotate: 0 }}
                        transition={{
                          duration: 0.8,
                          type: "spring",
                          stiffness: 200,
                          damping: 15,
                        }}
                        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-20"
                      >
                        <div className="relative">
                          <motion.div
                            animate={{
                              boxShadow: [
                                "0 0 20px rgba(196, 170, 168, 0.4)",
                                "0 0 40px rgba(196, 170, 168, 0.6)",
                                "0 0 20px rgba(196, 170, 168, 0.4)",
                              ],
                            }}
                            transition={{
                              duration: 2,
                              repeat: Infinity,
                            }}
                            className="w-20 h-20 sm:w-24 sm:h-24 bg-gradient-to-br from-white via-primary-50 to-accent-50 rounded-2xl sm:rounded-3xl flex items-center justify-center shadow-2xl border-2 border-slate-700"
                          >
                            <motion.div
                              animate={{ rotate: 360 }}
                              transition={{
                                duration: 20,
                                repeat: Infinity,
                                ease: "linear",
                              }}
                            >
                              <Target className="w-10 h-10 sm:w-12 sm:h-12 text-accent-600" />
                            </motion.div>
                          </motion.div>
                          <motion.div
                            animate={{
                              scale: [1, 1.3, 1],
                              opacity: [0.5, 0, 0.5],
                            }}
                            transition={{
                              duration: 2,
                              repeat: Infinity,
                            }}
                            className="absolute inset-0 border-2 border-accent-400/60 rounded-2xl sm:rounded-3xl"
                          />
                        </div>
                      </motion.div>

                      {/* Service Nodes */}
                      {/* Admin - Top */}
                      <motion.div
                        initial={{ scale: 0, y: 20 }}
                        animate={{ scale: 1, y: 0 }}
                        transition={{ delay: 1, type: "spring" }}
                        whileHover={{ scale: 1.1, y: -5 }}
                        className="absolute top-0 left-1/2 -translate-x-1/2 z-10"
                      >
                        <div className="relative group">
                          <div className="absolute inset-0 bg-gradient-to-br from-accent-400/40 to-primary-400/40 rounded-xl sm:rounded-2xl blur-xl group-hover:blur-2xl transition-all" />
                          <div className="relative bg-white rounded-xl sm:rounded-2xl p-2.5 sm:p-3 shadow-xl border-2 border-accent-200 group-hover:border-accent-400 transition-all">
                            <div className="w-12 h-12 sm:w-14 sm:h-14 bg-gradient-to-br from-accent-500 to-accent-600 rounded-lg sm:rounded-xl flex items-center justify-center">
                              <Mail className="w-6 h-6 sm:w-7 sm:h-7 text-white" />
                            </div>
                          </div>
                          <p className="text-primary-900 text-[10px] sm:text-xs font-bold mt-1.5 sm:mt-2 text-center">
                            Admin
                          </p>
                        </div>
                      </motion.div>

                      {/* Marketing - Top Right */}
                      <motion.div
                        initial={{ scale: 0, x: -20 }}
                        animate={{ scale: 1, x: 0 }}
                        transition={{ delay: 1.1, type: "spring" }}
                        whileHover={{ scale: 1.1, y: -5 }}
                        className="absolute top-[16%] sm:top-[18%] right-0 sm:right-2 z-10"
                      >
                        <div className="relative group">
                          <div className="absolute inset-0 bg-gradient-to-br from-primary-400/40 to-beige-400/40 rounded-xl sm:rounded-2xl blur-xl group-hover:blur-2xl transition-all" />
                          <div className="relative bg-white rounded-xl sm:rounded-2xl p-2.5 sm:p-3 shadow-xl border-2 border-slate-700 group-hover:border-slate-900 transition-all">
                            <div className="w-12 h-12 sm:w-14 sm:h-14 bg-gradient-to-br from-primary-500 to-primary-600 rounded-lg sm:rounded-xl flex items-center justify-center">
                              <TrendingUp className="w-6 h-6 sm:w-7 sm:h-7 text-white" />
                            </div>
                          </div>
                          <p className="text-primary-900 text-[10px] sm:text-xs font-bold mt-1.5 sm:mt-2 text-center">
                            Marketing
                          </p>
                        </div>
                      </motion.div>

                      {/* Analytics - Bottom Right */}
                      <motion.div
                        initial={{ scale: 0, x: -20 }}
                        animate={{ scale: 1, x: 0 }}
                        transition={{ delay: 1.2, type: "spring" }}
                        whileHover={{ scale: 1.1, y: -5 }}
                        className="absolute bottom-[16%] sm:bottom-[18%] right-0 sm:right-2 z-10"
                      >
                        <div className="relative group">
                          <div className="absolute inset-0 bg-gradient-to-br from-beige-400/40 to-primary-300/40 rounded-xl sm:rounded-2xl blur-xl group-hover:blur-2xl transition-all" />
                          <div className="relative bg-white rounded-xl sm:rounded-2xl p-2.5 sm:p-3 shadow-xl border-2 border-beige-300 group-hover:border-beige-400 transition-all">
                            <div className="w-12 h-12 sm:w-14 sm:h-14 bg-gradient-to-br from-beige-400 to-beige-500 rounded-lg sm:rounded-xl flex items-center justify-center">
                              <BarChart3 className="w-6 h-6 sm:w-7 sm:h-7 text-white" />
                            </div>
                          </div>
                          <p className="text-primary-900 text-[10px] sm:text-xs font-bold mt-1.5 sm:mt-2 text-center">
                            Analytics
                          </p>
                        </div>
                      </motion.div>

                      {/* Support - Bottom */}
                      <motion.div
                        initial={{ scale: 0, y: -20 }}
                        animate={{ scale: 1, y: 0 }}
                        transition={{ delay: 1.3, type: "spring" }}
                        whileHover={{ scale: 1.1, y: -5 }}
                        className="absolute bottom-0 left-1/2 -translate-x-1/2 z-10"
                      >
                        <div className="relative group">
                          <div className="absolute inset-0 bg-gradient-to-br from-accent-400/40 to-primary-400/40 rounded-xl sm:rounded-2xl blur-xl group-hover:blur-2xl transition-all" />
                          <div className="relative bg-white rounded-xl sm:rounded-2xl p-2.5 sm:p-3 shadow-xl border-2 border-slate-700 group-hover:border-slate-900 transition-all">
                            <div className="w-12 h-12 sm:w-14 sm:h-14 bg-gradient-to-br from-accent-500 to-primary-500 rounded-lg sm:rounded-xl flex items-center justify-center">
                              <Headphones className="w-6 h-6 sm:w-7 sm:h-7 text-white" />
                            </div>
                          </div>
                          <p className="text-primary-900 text-[10px] sm:text-xs font-bold mt-1.5 sm:mt-2 text-center">
                            Support
                          </p>
                        </div>
                      </motion.div>

                      {/* Operations - Bottom Left */}
                      <motion.div
                        initial={{ scale: 0, x: 20 }}
                        animate={{ scale: 1, x: 0 }}
                        transition={{ delay: 1.4, type: "spring" }}
                        whileHover={{ scale: 1.1, y: -5 }}
                        className="absolute bottom-[16%] sm:bottom-[18%] left-0 sm:left-2 z-10"
                      >
                        <div className="relative group">
                          <div className="absolute inset-0 bg-gradient-to-br from-primary-400/40 to-accent-400/40 rounded-xl sm:rounded-2xl blur-xl group-hover:blur-2xl transition-all" />
                          <div className="relative bg-white rounded-xl sm:rounded-2xl p-2.5 sm:p-3 shadow-xl border-2 border-slate-700 group-hover:border-slate-900 transition-all">
                            <div className="w-12 h-12 sm:w-14 sm:h-14 bg-gradient-to-br from-primary-500 to-accent-500 rounded-lg sm:rounded-xl flex items-center justify-center">
                              <Zap className="w-6 h-6 sm:w-7 sm:h-7 text-white" />
                            </div>
                          </div>
                          <p className="text-primary-900 text-[10px] sm:text-xs font-bold mt-1.5 sm:mt-2 text-center">
                            Operations
                          </p>
                        </div>
                      </motion.div>

                      {/* Scheduling - Top Left */}
                      <motion.div
                        initial={{ scale: 0, x: 20 }}
                        animate={{ scale: 1, x: 0 }}
                        transition={{ delay: 1.5, type: "spring" }}
                        whileHover={{ scale: 1.1, y: -5 }}
                        className="absolute top-[16%] sm:top-[18%] left-0 sm:left-2 z-10"
                      >
                        <div className="relative group">
                          <div className="absolute inset-0 bg-gradient-to-br from-accent-300/40 to-primary-300/40 rounded-xl sm:rounded-2xl blur-xl group-hover:blur-2xl transition-all" />
                          <div className="relative bg-white rounded-xl sm:rounded-2xl p-2.5 sm:p-3 shadow-xl border-2 border-accent-200 group-hover:border-accent-400 transition-all">
                            <div className="w-12 h-12 sm:w-14 sm:h-14 bg-gradient-to-br from-accent-400 to-primary-400 rounded-lg sm:rounded-xl flex items-center justify-center">
                              <Calendar className="w-6 h-6 sm:w-7 sm:h-7 text-white" />
                            </div>
                          </div>
                          <p className="text-primary-900 text-xs font-bold mt-2 text-center">
                            Scheduling
                          </p>
                        </div>
                      </motion.div>
                    </div>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Overview */}
      <section className="relative py-24 md:py-32 bg-gradient-to-br from-slate-50 via-gray-50 to-primary-50/30 overflow-hidden">
        {/* Elegant background effects */}
        <div className="absolute inset-0">
          <div className="absolute top-0 left-1/4 w-[500px] h-[500px] bg-gradient-radial from-accent-500/8 to-transparent blur-3xl" />
          <div className="absolute bottom-0 right-1/4 w-[600px] h-[600px] bg-gradient-radial from-primary-500/10 to-transparent blur-3xl" />
          <div className="absolute top-1/2 left-0 w-[400px] h-[400px] bg-gradient-radial from-slate-400/5 to-transparent blur-3xl" />
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_120%,rgba(120,119,198,0.03),rgba(255,255,255,0))]" />

          {/* Subtle grid pattern */}
          <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808008_1px,transparent_1px),linear-gradient(to_bottom,#80808008_1px,transparent_1px)] bg-[size:64px_64px]" />
        </div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-7xl mx-auto">
            {/* Section Header */}
            <div className="mb-20 text-center">
              <div className="inline-flex items-center gap-2.5 px-6 py-3 rounded-full bg-gradient-to-r from-slate-50/95 via-primary-50/90 to-slate-50/95 backdrop-blur-sm border border-slate-700/30 mb-8 shadow-lg hover:shadow-xl hover:border-slate-900/40 transition-all duration-300">
                <div className="w-2 h-2 rounded-full bg-gradient-to-br from-slate-900 to-primary-950 shadow-sm" />
                <span className="text-xs font-semibold bg-gradient-to-r from-slate-900 to-primary-950 bg-clip-text text-transparent tracking-[0.25em] uppercase">
                  Service Breakdown
                </span>
              </div>
              <h2 className="text-4xl md:text-5xl lg:text-6xl font-extralight text-gray-900 mb-6 tracking-tight leading-tight">
                Explore Our{" "}
                <span className="bg-gradient-to-r from-slate-700 via-primary-800 to-slate-800 bg-clip-text text-transparent font-light">
                  Services
                </span>
              </h2>
              <p className="text-xl md:text-2xl text-gray-600 font-light max-w-2xl mx-auto leading-relaxed mb-8">
                Comprehensive solutions tailored to your needs
              </p>

              {/* Elegant divider */}
              <div className="flex items-center justify-center gap-4 mt-8">
                <div className="h-px w-24 bg-gradient-to-r from-transparent via-slate-700/40 to-slate-900/30"></div>
                <div className="w-3 h-3 rounded-full bg-gradient-to-br from-slate-900 to-primary-950 shadow-lg shadow-slate-900/30"></div>
                <div className="h-px w-24 bg-gradient-to-l from-transparent via-slate-700/40 to-slate-900/30"></div>
              </div>
            </div>

            {/* Modern Service Cards Grid */}
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {/* Service Card 1 */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
                className="group relative bg-gradient-to-br from-white via-slate-50/30 to-white border border-slate-700/30 rounded-[2rem] p-10 hover:shadow-[0_20px_80px_-15px_rgba(15,23,42,0.3)] hover:-translate-y-2 hover:border-slate-900/40 transition-all duration-700 overflow-hidden"
              >
                {/* Gradient orb */}
                <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-radial from-primary-100/40 to-transparent blur-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-700" />

                <div className="relative z-10">
                  <div className="w-20 h-20 bg-gradient-to-br from-slate-900 via-primary-950 to-slate-950 rounded-[1.5rem] flex items-center justify-center mb-8 group-hover:scale-110 group-hover:rotate-6 transition-all duration-500 shadow-xl border border-slate-800">
                    <Mail className="w-9 h-9 text-white" />
                  </div>
                  <h3 className="text-2xl font-medium text-slate-900 mb-4 tracking-tight">
                    Administrative Support
                  </h3>
                  <p className="text-slate-600 font-light leading-relaxed mb-6">
                    Email management, scheduling, data entry, and document
                    organization
                  </p>
                  <Link
                    href="/services"
                    className="inline-flex items-center gap-2 text-slate-900 font-medium text-sm group-hover:gap-4 transition-all duration-300 hover:text-primary-950"
                  >
                    Learn more <ArrowRight className="w-4 h-4" />
                  </Link>
                </div>
              </motion.div>

              {/* Service Card 2 */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.1 }}
                className="group relative bg-gradient-to-br from-white via-slate-50/30 to-white border border-slate-700/30 rounded-[2rem] p-10 hover:shadow-[0_20px_80px_-15px_rgba(15,23,42,0.3)] hover:-translate-y-2 hover:border-slate-900/40 transition-all duration-700 overflow-hidden"
              >
                <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-radial from-primary-100/40 to-transparent blur-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-700" />

                <div className="relative z-10">
                  <div className="w-20 h-20 bg-gradient-to-br from-slate-900 via-primary-950 to-slate-950 rounded-[1.5rem] flex items-center justify-center mb-8 group-hover:scale-110 group-hover:rotate-6 transition-all duration-500 shadow-xl border border-slate-800">
                    <Users className="w-9 h-9 text-white" />
                  </div>
                  <h3 className="text-2xl font-medium text-slate-900 mb-4 tracking-tight">
                    Customer Support
                  </h3>
                  <p className="text-slate-600 font-light leading-relaxed mb-6">
                    Professional inquiry handling, CRM management, and client
                    relations
                  </p>
                  <Link
                    href="/services"
                    className="inline-flex items-center gap-2 text-slate-900 font-medium text-sm group-hover:gap-4 transition-all duration-300 hover:text-primary-950"
                  >
                    Learn more <ArrowRight className="w-4 h-4" />
                  </Link>
                </div>
              </motion.div>

              {/* Service Card 3 */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.2 }}
                className="group relative bg-gradient-to-br from-white via-slate-50/30 to-white border border-slate-700/30 rounded-[2rem] p-10 hover:shadow-[0_20px_80px_-15px_rgba(15,23,42,0.3)] hover:-translate-y-2 hover:border-slate-900/40 transition-all duration-700 overflow-hidden"
              >
                <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-radial from-primary-100/40 to-transparent blur-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-700" />

                <div className="relative z-10">
                  <div className="w-20 h-20 bg-gradient-to-br from-slate-900 via-primary-950 to-slate-950 rounded-[1.5rem] flex items-center justify-center mb-8 group-hover:scale-110 group-hover:rotate-6 transition-all duration-500 shadow-xl border border-slate-800">
                    <Globe className="w-9 h-9 text-white" />
                  </div>
                  <h3 className="text-2xl font-medium text-slate-900 mb-4 tracking-tight">
                    Social Media Management
                  </h3>
                  <p className="text-slate-600 font-light leading-relaxed mb-6">
                    Content scheduling, community engagement, and analytics
                  </p>
                  <Link
                    href="/services"
                    className="inline-flex items-center gap-2 text-slate-900 font-medium text-sm group-hover:gap-4 transition-all duration-300 hover:text-primary-950"
                  >
                    Learn more <ArrowRight className="w-4 h-4" />
                  </Link>
                </div>
              </motion.div>

              {/* Service Card 4 */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.3 }}
                className="group relative bg-gradient-to-br from-white via-slate-50/30 to-white border border-slate-700/30 rounded-[2rem] p-10 hover:shadow-[0_20px_80px_-15px_rgba(15,23,42,0.3)] hover:-translate-y-2 hover:border-slate-900/40 transition-all duration-700 overflow-hidden"
              >
                <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-radial from-primary-100/40 to-transparent blur-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-700" />

                <div className="relative z-10">
                  <div className="w-20 h-20 bg-gradient-to-br from-slate-900 via-primary-950 to-slate-950 rounded-[1.5rem] flex items-center justify-center mb-8 group-hover:scale-110 group-hover:rotate-6 transition-all duration-500 shadow-xl border border-slate-800">
                    <Search className="w-9 h-9 text-white" />
                  </div>
                  <h3 className="text-2xl font-medium text-slate-900 mb-4 tracking-tight">
                    Research & Analysis
                  </h3>
                  <p className="text-slate-600 font-light leading-relaxed mb-6">
                    Market research, competitor analysis, and data insights
                  </p>
                  <Link
                    href="/services"
                    className="inline-flex items-center gap-2 text-slate-900 font-medium text-sm group-hover:gap-4 transition-all duration-300 hover:text-primary-950"
                  >
                    Learn more <ArrowRight className="w-4 h-4" />
                  </Link>
                </div>
              </motion.div>

              {/* Service Card 5 */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.4 }}
                className="group relative bg-gradient-to-br from-white via-slate-50/30 to-white border border-slate-700/30 rounded-[2rem] p-10 hover:shadow-[0_20px_80px_-15px_rgba(15,23,42,0.3)] hover:-translate-y-2 hover:border-slate-900/40 transition-all duration-700 overflow-hidden"
              >
                <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-radial from-primary-100/40 to-transparent blur-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-700" />

                <div className="relative z-10">
                  <div className="w-20 h-20 bg-gradient-to-br from-slate-900 via-primary-950 to-slate-950 rounded-[1.5rem] flex items-center justify-center mb-8 group-hover:scale-110 group-hover:rotate-6 transition-all duration-500 shadow-xl border border-slate-800">
                    <Sparkles className="w-9 h-9 text-white" />
                  </div>
                  <h3 className="text-2xl font-medium text-slate-900 mb-4 tracking-tight">
                    Content Creation
                  </h3>
                  <p className="text-slate-600 font-light leading-relaxed mb-6">
                    Blog posts, newsletters, marketing copy, and presentations
                  </p>
                  <Link
                    href="/services"
                    className="inline-flex items-center gap-2 text-slate-900 font-medium text-sm group-hover:gap-4 transition-all duration-300 hover:text-primary-950"
                  >
                    Learn more <ArrowRight className="w-4 h-4" />
                  </Link>
                </div>
              </motion.div>

              {/* Service Card 6 */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.5 }}
                className="group relative bg-gradient-to-br from-white via-slate-50/30 to-white border border-slate-700/30 rounded-[2rem] p-10 hover:shadow-[0_20px_80px_-15px_rgba(15,23,42,0.3)] hover:-translate-y-2 hover:border-slate-900/40 transition-all duration-700 overflow-hidden"
              >
                <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-radial from-primary-100/40 to-transparent blur-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-700" />

                <div className="relative z-10">
                  <div className="w-20 h-20 bg-gradient-to-br from-slate-900 via-primary-950 to-slate-950 rounded-[1.5rem] flex items-center justify-center mb-8 group-hover:scale-110 group-hover:rotate-6 transition-all duration-500 shadow-xl border border-slate-800">
                    <Calendar className="w-9 h-9 text-white" />
                  </div>
                  <h3 className="text-2xl font-semibold text-slate-900 mb-4 tracking-tight">
                    Project Coordination
                  </h3>
                  <p className="text-slate-600 font-light leading-relaxed mb-6">
                    Task management, team coordination, and deadline tracking
                  </p>
                  <Link
                    href="/services"
                    className="inline-flex items-center gap-2 text-slate-900 font-medium text-sm group-hover:gap-4 transition-all duration-300 hover:text-primary-950"
                  >
                    Learn more <ArrowRight className="w-4 h-4" />
                  </Link>
                </div>
              </motion.div>
            </div>

            {/* CTA Section within Services */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.6 }}
              className="mt-20 relative bg-gradient-to-br from-slate-50/95 via-white to-primary-50/80 rounded-[2.5rem] p-12 md:p-16 lg:p-20 text-center border border-slate-700/30 shadow-2xl hover:shadow-[0_20px_80px_-15px_rgba(15,23,42,0.3)] hover:border-slate-900/40 transition-all duration-700 overflow-hidden"
            >
              {/* Decorative gradient orbs */}
              <div className="absolute top-0 right-0 w-96 h-96 bg-gradient-radial from-primary-200/40 to-transparent blur-3xl opacity-60" />
              <div className="absolute bottom-0 left-0 w-96 h-96 bg-gradient-radial from-slate-200/30 to-transparent blur-3xl opacity-60" />

              {/* Decorative corner accents */}
              <div className="absolute top-8 right-8 w-24 h-24 border-t-2 border-r-2 border-slate-900/15 rounded-tr-3xl"></div>
              <div className="absolute bottom-8 left-8 w-24 h-24 border-b-2 border-l-2 border-slate-900/15 rounded-bl-3xl"></div>

              <div className="relative z-10">
                <h3 className="text-3xl md:text-4xl lg:text-5xl font-extralight bg-gradient-to-r from-slate-900 via-slate-800 to-primary-900 bg-clip-text text-transparent mb-6 tracking-tight leading-tight">
                  Need a Custom Solution?
                </h3>
                <p className="text-slate-700 text-lg md:text-xl font-light leading-relaxed mb-10 max-w-2xl mx-auto">
                  We tailor our services to match your specific business
                  requirements
                </p>

                {/* Elegant divider */}
                <div className="flex items-center justify-center gap-3 mb-10">
                  <div className="h-px w-16 bg-gradient-to-r from-transparent via-slate-700/40 to-slate-900/30"></div>
                  <div className="w-2 h-2 rounded-full bg-gradient-to-br from-slate-900 to-primary-950 shadow-sm"></div>
                  <div className="h-px w-16 bg-gradient-to-l from-transparent via-slate-700/40 to-slate-900/30"></div>
                </div>

                <Link href="/contact">
                  <motion.button
                    whileHover={{ scale: 1.05, y: -4 }}
                    whileTap={{ scale: 0.95 }}
                    className="group px-10 py-5 bg-gradient-to-br from-slate-900 via-primary-950 to-slate-950 text-white rounded-2xl font-medium text-lg shadow-2xl hover:shadow-[0_20px_60px_-15px_rgba(15,23,42,0.5)] transition-all duration-300 inline-flex items-center gap-3 border border-slate-800"
                  >
                    Get in Touch
                    <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                  </motion.button>
                </Link>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Client Success Metrics */}
      <section className="py-32 bg-gradient-to-b from-white via-beige-200/20 to-white relative overflow-hidden">
        {/* Enhanced gradient orbs */}
        <div className="absolute inset-0 opacity-60">
          <div className="absolute top-1/4 left-0 w-[600px] h-[600px] bg-gradient-radial from-accent-200/30 to-transparent blur-3xl"></div>
          <div className="absolute bottom-1/4 right-0 w-[600px] h-[600px] bg-gradient-radial from-primary-200/30 to-transparent blur-3xl"></div>
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[400px] h-[400px] bg-gradient-radial from-slate-200/20 to-transparent blur-3xl"></div>
        </div>

        <div className="container mx-auto px-4 relative z-10">
          <div className="text-center mb-24">
            {/* Refined Dark Badge */}
            <div className="inline-flex items-center gap-2.5 px-7 py-3.5 rounded-full bg-slate-900 mb-8 shadow-[0_20px_50px_-15px_rgba(15,23,42,0.3)]">
              <div className="flex items-center gap-1.5">
                <div className="w-1.5 h-1.5 bg-accent-400 rounded-full animate-pulse"></div>
                <div
                  className="w-1.5 h-1.5 bg-white/60 rounded-full animate-pulse"
                  style={{ animationDelay: "0.2s" }}
                ></div>
              </div>
              <span className="text-[11px] font-bold text-white uppercase tracking-[0.25em]">
                Success Stories
              </span>
            </div>

            <h2 className="text-4xl md:text-5xl lg:text-6xl font-extralight mb-8 text-slate-900 tracking-tight leading-[0.95]">
              Trusted by
              <span className="block mt-2 font-light">Industry Leaders</span>
            </h2>
            <p className="text-xl md:text-2xl text-slate-600 max-w-2xl mx-auto leading-relaxed font-light">
              Real results from businesses that chose excellence
            </p>
          </div>

          {/* Testimonials Grid - Clean Design */}
          <div className="grid md:grid-cols-3 gap-6 max-w-7xl mx-auto mb-24">
            {/* Testimonial 1 */}
            <div className="group relative">
              <div className="absolute inset-0 bg-gradient-to-br from-slate-900 via-primary-950 to-slate-900 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-700 blur-xl"></div>
              <div className="relative bg-white border border-slate-200/80 p-8 rounded-3xl hover:shadow-[0_40px_80px_-20px_rgba(15,23,42,0.2)] transition-all duration-700 hover:-translate-y-1 hover:border-slate-300">
                <div className="mb-6">
                  <Quote
                    className="w-12 h-12 text-accent-500/40"
                    strokeWidth={1.5}
                  />
                </div>

                <div className="flex items-center gap-1.5 mb-6">
                  {[1, 2, 3, 4, 5].map((star) => (
                    <Star
                      key={star}
                      className="w-4 h-4 fill-accent-500 text-accent-500"
                    />
                  ))}
                </div>

                <p className="text-slate-700 leading-[1.8] mb-8 text-[15px] font-light">
                  &quot;VirtuServe transformed our workflow. Their attention to
                  detail and professionalism is unmatched. Highly
                  recommend!&quot;
                </p>

                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-gradient-to-br from-slate-800 to-primary-900 rounded-full flex items-center justify-center text-white font-semibold text-sm flex-shrink-0">
                    SM
                  </div>
                  <div>
                    <p className="font-semibold text-slate-900 text-[15px]">
                      Sarah Mitchell
                    </p>
                    <p className="text-[13px] text-slate-500 font-medium">
                      CEO, TechStart Inc.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Testimonial 2 */}
            <div className="group relative">
              <div className="absolute inset-0 bg-gradient-to-br from-accent-500 via-primary-500 to-accent-600 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-700 blur-xl"></div>
              <div className="relative bg-white border border-slate-200/80 p-8 rounded-3xl hover:shadow-[0_40px_80px_-20px_rgba(15,23,42,0.2)] transition-all duration-700 hover:-translate-y-1 hover:border-slate-300">
                <div className="mb-6">
                  <Quote
                    className="w-12 h-12 text-accent-500/40"
                    strokeWidth={1.5}
                  />
                </div>

                <div className="flex items-center gap-1.5 mb-6">
                  {[1, 2, 3, 4, 5].map((star) => (
                    <Star
                      key={star}
                      className="w-4 h-4 fill-accent-500 text-accent-500"
                    />
                  ))}
                </div>

                <p className="text-slate-700 leading-[1.8] mb-8 text-[15px] font-light">
                  &quot;Exceptional service! They handled everything seamlessly,
                  giving us more time to focus on growth. A game changer.&quot;
                </p>

                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-gradient-to-br from-accent-400 to-accent-600 rounded-full flex items-center justify-center text-white font-semibold text-sm flex-shrink-0">
                    JC
                  </div>
                  <div>
                    <p className="font-semibold text-slate-900 text-[15px]">
                      James Chen
                    </p>
                    <p className="text-[13px] text-slate-500 font-medium">
                      Founder, Digital Wave
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Testimonial 3 */}
            <div className="group relative">
              <div className="absolute inset-0 bg-gradient-to-br from-primary-500 via-slate-900 to-primary-600 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-700 blur-xl"></div>
              <div className="relative bg-white border border-slate-200/80 p-8 rounded-3xl hover:shadow-[0_40px_80px_-20px_rgba(15,23,42,0.2)] transition-all duration-700 hover:-translate-y-1 hover:border-slate-300">
                <div className="mb-6">
                  <Quote
                    className="w-12 h-12 text-accent-500/40"
                    strokeWidth={1.5}
                  />
                </div>

                <div className="flex items-center gap-1.5 mb-6">
                  {[1, 2, 3, 4, 5].map((star) => (
                    <Star
                      key={star}
                      className="w-4 h-4 fill-accent-500 text-accent-500"
                    />
                  ))}
                </div>

                <p className="text-slate-700 leading-[1.8] mb-8 text-[15px] font-light">
                  &quot;Professional, reliable, and efficient. VirtuServe
                  exceeded our expectations in every way. Five stars!&quot;
                </p>

                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-gradient-to-br from-primary-400 to-primary-600 rounded-full flex items-center justify-center text-white font-semibold text-sm flex-shrink-0">
                    EP
                  </div>
                  <div>
                    <p className="font-semibold text-slate-900 text-[15px]">
                      Emily Parker
                    </p>
                    <p className="text-[13px] text-slate-500 font-medium">
                      Director, Global Ventures
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Stats Bar - Enhanced with Icons */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-6xl mx-auto">
            <div className="group relative">
              <div className="absolute inset-0 bg-gradient-to-br from-accent-500/10 to-primary-500/10 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 blur-lg"></div>
              <div className="relative text-center p-6 bg-white border border-slate-200/80 rounded-2xl hover:shadow-xl hover:border-slate-300 transition-all duration-500">
                <div className="flex items-center justify-center gap-3 mb-2">
                  <Users
                    className="w-6 h-6 text-accent-600"
                    strokeWidth={1.5}
                  />
                  <p className="text-3xl font-bold text-slate-900">500+</p>
                </div>
                <p className="text-[11px] text-slate-600 font-bold uppercase tracking-[0.15em]">
                  Happy Clients
                </p>
              </div>
            </div>
            <div className="group relative">
              <div className="absolute inset-0 bg-gradient-to-br from-primary-500/10 to-accent-500/10 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 blur-lg"></div>
              <div className="relative text-center p-6 bg-white border border-slate-200/80 rounded-2xl hover:shadow-xl hover:border-slate-300 transition-all duration-500">
                <div className="flex items-center justify-center gap-3 mb-2">
                  <TrendingUp
                    className="w-6 h-6 text-accent-600"
                    strokeWidth={1.5}
                  />
                  <p className="text-3xl font-bold text-slate-900">98%</p>
                </div>
                <p className="text-[11px] text-slate-600 font-bold uppercase tracking-[0.15em]">
                  Satisfaction Rate
                </p>
              </div>
            </div>
            <div className="group relative">
              <div className="absolute inset-0 bg-gradient-to-br from-accent-500/10 to-slate-900/10 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 blur-lg"></div>
              <div className="relative text-center p-6 bg-white border border-slate-200/80 rounded-2xl hover:shadow-xl hover:border-slate-300 transition-all duration-500">
                <div className="flex items-center justify-center gap-3 mb-2">
                  <Headphones
                    className="w-6 h-6 text-accent-600"
                    strokeWidth={1.5}
                  />
                  <p className="text-3xl font-bold text-slate-900">24/7</p>
                </div>
                <p className="text-[11px] text-slate-600 font-bold uppercase tracking-[0.15em]">
                  Support Available
                </p>
              </div>
            </div>
            <div className="group relative">
              <div className="absolute inset-0 bg-gradient-to-br from-primary-500/10 to-slate-900/10 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 blur-lg"></div>
              <div className="relative text-center p-6 bg-white border border-slate-200/80 rounded-2xl hover:shadow-xl hover:border-slate-300 transition-all duration-500">
                <div className="flex items-center justify-center gap-3 mb-2">
                  <Sparkles
                    className="w-6 h-6 text-accent-600"
                    strokeWidth={1.5}
                  />
                  <p className="text-3xl font-bold text-slate-900">10+</p>
                </div>
                <p className="text-[11px] text-slate-600 font-bold uppercase tracking-[0.15em]">
                  Years Experience
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section - Ultra Premium Redesign */}
      <section className="relative py-32 md:py-40 overflow-hidden bg-gradient-to-b from-slate-50 to-white">
        {/* Minimal Background */}
        <div className="absolute inset-0">
          <div className="absolute top-1/3 left-1/4 w-96 h-96 bg-gradient-radial from-accent-200/15 to-transparent blur-3xl"></div>
          <div className="absolute bottom-1/3 right-1/4 w-96 h-96 bg-gradient-radial from-primary-200/15 to-transparent blur-3xl"></div>
        </div>

        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-5xl mx-auto">
            {/* Premium Dark CTA Card */}
            <div className="relative bg-gradient-to-br from-slate-900 via-primary-950 to-slate-900 rounded-[2.5rem] p-12 md:p-16 lg:p-20 shadow-[0_50px_100px_-30px_rgba(15,23,42,0.4)] overflow-hidden">
              {/* Decorative grid pattern */}
              <div
                className="absolute inset-0 opacity-[0.03]"
                style={{
                  backgroundImage:
                    "radial-gradient(circle, white 1px, transparent 1px)",
                  backgroundSize: "30px 30px",
                }}
              ></div>

              {/* Gradient accents */}
              <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-gradient-radial from-accent-500/10 to-transparent blur-3xl"></div>
              <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-gradient-radial from-primary-500/10 to-transparent blur-3xl"></div>

              <div className="relative z-10">
                {/* Badge */}
                <div className="flex justify-center mb-10">
                  <div className="inline-flex items-center gap-2.5 px-7 py-3.5 rounded-full bg-white/10 backdrop-blur-md border border-white/20">
                    <div className="flex items-center gap-1.5">
                      <div className="w-1.5 h-1.5 bg-accent-400 rounded-full animate-pulse"></div>
                      <div
                        className="w-1.5 h-1.5 bg-white/60 rounded-full animate-pulse"
                        style={{ animationDelay: "0.2s" }}
                      ></div>
                    </div>
                    <span className="text-[11px] font-bold text-white uppercase tracking-[0.25em]">
                      Let&apos;s Work Together
                    </span>
                  </div>
                </div>

                {/* Heading */}
                <div className="text-center mb-12">
                  <h2 className="text-4xl md:text-5xl lg:text-6xl font-extralight mb-6 text-white leading-[1.1] tracking-tight">
                    Transform Your Business
                    <span className="block mt-2 font-light">
                      Starting Today
                    </span>
                  </h2>
                  <p className="text-lg md:text-xl text-white/70 font-light leading-relaxed max-w-2xl mx-auto">
                    Join forward-thinking companies that trust us to streamline
                    their operations
                  </p>
                </div>

                {/* CTA Button */}
                <div className="flex justify-center mb-16">
                  <Link
                    href="/contact"
                    className="group relative inline-flex items-center gap-3 bg-white text-slate-900 px-12 py-5 rounded-2xl font-semibold text-base overflow-hidden transition-all duration-500 hover:shadow-[0_30px_60px_-15px_rgba(255,255,255,0.3)] hover:-translate-y-1"
                  >
                    <span className="relative z-10 flex items-center gap-3">
                      Book Free Consultation
                      <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" />
                    </span>
                    <div className="absolute inset-0 bg-gradient-to-r from-white via-slate-50 to-white opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                  </Link>
                </div>

                {/* Benefits */}
                <div className="grid md:grid-cols-3 gap-6 max-w-4xl mx-auto">
                  <div className="flex items-center justify-center gap-3 text-white/90">
                    <CheckCircle
                      className="w-5 h-5 text-accent-400 flex-shrink-0"
                      strokeWidth={2}
                    />
                    <span className="text-sm font-medium">
                      No commitment required
                    </span>
                  </div>
                  <div className="flex items-center justify-center gap-3 text-white/90">
                    <CheckCircle
                      className="w-5 h-5 text-accent-400 flex-shrink-0"
                      strokeWidth={2}
                    />
                    <span className="text-sm font-medium">
                      Response within 24 hours
                    </span>
                  </div>
                  <div className="flex items-center justify-center gap-3 text-white/90">
                    <CheckCircle
                      className="w-5 h-5 text-accent-400 flex-shrink-0"
                      strokeWidth={2}
                    />
                    <span className="text-sm font-medium">
                      Free consultation
                    </span>
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
