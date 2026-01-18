"use client";

import Link from "next/link";
import {
  Calendar,
  Mail,
  Globe,
  Shield,
  Zap,
  Search,
  CheckCircle,
  Sparkles,
  ArrowRight,
  TrendingUp,
  Users,
  Clock,
  Star,
  Target,
  Award,
  BarChart3,
  Headphones,
} from "lucide-react";
import { motion } from "framer-motion";

export default function Home() {
  return (
    <main className="min-h-screen bg-gradient-to-br from-beige-50 via-white to-beige-200/20">
      {/* Hero Section - Refined & Eye-Catching */}
      <section className="relative py-16 md:py-20 overflow-hidden">
        {/* Elegant background effects */}
        <div className="absolute inset-0">
          <div className="absolute top-1/2 right-0 w-[600px] h-[600px] bg-gradient-radial from-accent-200/20 to-transparent blur-3xl" />
          <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-gradient-radial from-primary-200/15 to-transparent blur-3xl" />
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
                  className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gradient-to-r from-accent-500/10 to-primary-500/10 border border-accent-300/30"
                >
                  <Sparkles className="w-3.5 h-3.5 text-accent-600" />
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
                  <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight leading-[1.1]">
                    <span className="bg-gradient-to-r from-primary-900 to-primary-700 bg-clip-text text-transparent">
                      Elevate Your Business
                    </span>
                    <br />
                    <span className="relative inline-block mt-2">
                      <span className="bg-gradient-to-r from-accent-600 to-primary-600 bg-clip-text text-transparent">
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
                        className="absolute -bottom-2 left-0 right-0 h-0.5 bg-gradient-to-r from-accent-500 to-primary-500 rounded-full origin-left"
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
                      className="group relative px-8 py-4 bg-gradient-to-r from-accent-500 to-primary-500 text-white rounded-xl font-semibold shadow-xl shadow-accent-500/25 hover:shadow-accent-500/40 transition-all duration-300 flex items-center justify-center gap-2 overflow-hidden"
                    >
                      <span className="relative z-10 flex items-center gap-2">
                        Get Started
                        <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-300" />
                      </span>
                      <div className="absolute inset-0 bg-gradient-to-r from-accent-600 to-primary-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                    </motion.button>
                  </Link>
                  <Link href="/services">
                    <motion.button
                      whileHover={{ scale: 1.02, y: -2 }}
                      whileTap={{ scale: 0.98 }}
                      className="px-8 py-4 bg-white/80 backdrop-blur-sm text-primary-900 rounded-xl font-semibold border-2 border-primary-300 hover:border-accent-500 hover:shadow-xl hover:shadow-accent-500/15 transition-all duration-300 flex items-center justify-center gap-2"
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
                          className="w-9 h-9 rounded-full bg-gradient-to-br from-accent-400 to-primary-400 border-2 border-white shadow-md"
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
                <div className="relative bg-gradient-to-br from-white via-primary-50/30 to-accent-50/30 backdrop-blur-sm rounded-3xl p-8 md:p-10 shadow-2xl border border-primary-200/40 overflow-hidden group">
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
                    <div className="relative h-[400px] md:h-[480px]">
                      {/* Connection Lines using CSS */}
                      <div className="absolute inset-0">
                        {/* Line to Admin (Top) */}
                        <motion.div
                          initial={{ scaleY: 0, opacity: 0 }}
                          animate={{ scaleY: 1, opacity: 1 }}
                          transition={{ duration: 0.8, delay: 0.4 }}
                          className="absolute left-1/2 top-[12%] w-0.5 h-[38%] -translate-x-1/2 origin-bottom"
                          style={{
                            background: 'linear-gradient(to bottom, #697184, transparent)',
                          }}
                        />
                        
                        {/* Line to Support (Bottom) */}
                        <motion.div
                          initial={{ scaleY: 0, opacity: 0 }}
                          animate={{ scaleY: 1, opacity: 1 }}
                          transition={{ duration: 0.8, delay: 0.5 }}
                          className="absolute left-1/2 bottom-[12%] w-0.5 h-[38%] -translate-x-1/2 origin-top"
                          style={{
                            background: 'linear-gradient(to top, #697184, transparent)',
                          }}
                        />
                        
                        {/* Line to Marketing (Top Right) */}
                        <motion.div
                          initial={{ scale: 0, opacity: 0 }}
                          animate={{ scale: 1, opacity: 1 }}
                          transition={{ duration: 0.8, delay: 0.6 }}
                          className="absolute top-[28%] right-[8%] w-[35%] h-0.5 origin-right"
                          style={{
                            background: 'linear-gradient(to left, #697184, transparent)',
                            transform: 'rotate(-25deg)',
                            transformOrigin: 'right center',
                          }}
                        />
                        
                        {/* Line to Analytics (Bottom Right) */}
                        <motion.div
                          initial={{ scale: 0, opacity: 0 }}
                          animate={{ scale: 1, opacity: 1 }}
                          transition={{ duration: 0.8, delay: 0.7 }}
                          className="absolute bottom-[28%] right-[8%] w-[35%] h-0.5 origin-right"
                          style={{
                            background: 'linear-gradient(to left, #697184, transparent)',
                            transform: 'rotate(25deg)',
                            transformOrigin: 'right center',
                          }}
                        />
                        
                        {/* Line to Scheduling (Top Left) */}
                        <motion.div
                          initial={{ scale: 0, opacity: 0 }}
                          animate={{ scale: 1, opacity: 1 }}
                          transition={{ duration: 0.8, delay: 0.8 }}
                          className="absolute top-[28%] left-[8%] w-[35%] h-0.5 origin-left"
                          style={{
                            background: 'linear-gradient(to right, #697184, transparent)',
                            transform: 'rotate(25deg)',
                            transformOrigin: 'left center',
                          }}
                        />
                        
                        {/* Line to Operations (Bottom Left) */}
                        <motion.div
                          initial={{ scale: 0, opacity: 0 }}
                          animate={{ scale: 1, opacity: 1 }}
                          transition={{ duration: 0.8, delay: 0.9 }}
                          className="absolute bottom-[28%] left-[8%] w-[35%] h-0.5 origin-left"
                          style={{
                            background: 'linear-gradient(to right, #697184, transparent)',
                            transform: 'rotate(-25deg)',
                            transformOrigin: 'left center',
                          }}
                        />
                      </div>

                      {/* Badge */}
                      <motion.div
                        initial={{ opacity: 0, scale: 0.9 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.6, delay: 0.3 }}
                        className="absolute bottom-2 right-2 z-30 inline-flex items-center gap-2 bg-gradient-to-r from-accent-100 to-primary-100 border border-accent-200/60 rounded-full px-3 py-1.5 shadow-lg backdrop-blur-sm"
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
                            className="w-24 h-24 bg-gradient-to-br from-white via-primary-50 to-accent-50 rounded-3xl flex items-center justify-center shadow-2xl border-2 border-primary-200"
                          >
                            <motion.div
                              animate={{ rotate: 360 }}
                              transition={{
                                duration: 20,
                                repeat: Infinity,
                                ease: "linear",
                              }}
                            >
                              <Target className="w-12 h-12 text-accent-600" />
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
                            className="absolute inset-0 border-2 border-accent-400/60 rounded-3xl"
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
                          <div className="absolute inset-0 bg-gradient-to-br from-accent-400/40 to-primary-400/40 rounded-2xl blur-xl group-hover:blur-2xl transition-all" />
                          <div className="relative bg-white rounded-2xl p-3 shadow-xl border-2 border-accent-200 group-hover:border-accent-400 transition-all">
                            <div className="w-14 h-14 bg-gradient-to-br from-accent-500 to-accent-600 rounded-xl flex items-center justify-center">
                              <Mail className="w-7 h-7 text-white" />
                            </div>
                          </div>
                          <p className="text-primary-900 text-xs font-bold mt-2 text-center">Admin</p>
                        </div>
                      </motion.div>

                      {/* Marketing - Top Right */}
                      <motion.div
                        initial={{ scale: 0, x: -20 }}
                        animate={{ scale: 1, x: 0 }}
                        transition={{ delay: 1.1, type: "spring" }}
                        whileHover={{ scale: 1.1, y: -5 }}
                        className="absolute top-[18%] right-0 z-10"
                      >
                        <div className="relative group">
                          <div className="absolute inset-0 bg-gradient-to-br from-primary-400/40 to-beige-400/40 rounded-2xl blur-xl group-hover:blur-2xl transition-all" />
                          <div className="relative bg-white rounded-2xl p-3 shadow-xl border-2 border-primary-200 group-hover:border-primary-400 transition-all">
                            <div className="w-14 h-14 bg-gradient-to-br from-primary-500 to-primary-600 rounded-xl flex items-center justify-center">
                              <TrendingUp className="w-7 h-7 text-white" />
                            </div>
                          </div>
                          <p className="text-primary-900 text-xs font-bold mt-2 text-center">Marketing</p>
                        </div>
                      </motion.div>

                      {/* Analytics - Bottom Right */}
                      <motion.div
                        initial={{ scale: 0, x: -20 }}
                        animate={{ scale: 1, x: 0 }}
                        transition={{ delay: 1.2, type: "spring" }}
                        whileHover={{ scale: 1.1, y: -5 }}
                        className="absolute bottom-[18%] right-0 z-10"
                      >
                        <div className="relative group">
                          <div className="absolute inset-0 bg-gradient-to-br from-beige-400/40 to-primary-300/40 rounded-2xl blur-xl group-hover:blur-2xl transition-all" />
                          <div className="relative bg-white rounded-2xl p-3 shadow-xl border-2 border-beige-300 group-hover:border-beige-400 transition-all">
                            <div className="w-14 h-14 bg-gradient-to-br from-beige-400 to-beige-500 rounded-xl flex items-center justify-center">
                              <BarChart3 className="w-7 h-7 text-white" />
                            </div>
                          </div>
                          <p className="text-primary-900 text-xs font-bold mt-2 text-center">Analytics</p>
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
                          <div className="absolute inset-0 bg-gradient-to-br from-accent-400/40 to-primary-400/40 rounded-2xl blur-xl group-hover:blur-2xl transition-all" />
                          <div className="relative bg-white rounded-2xl p-3 shadow-xl border-2 border-accent-300 group-hover:border-accent-500 transition-all">
                            <div className="w-14 h-14 bg-gradient-to-br from-accent-500 to-primary-500 rounded-xl flex items-center justify-center">
                              <Headphones className="w-7 h-7 text-white" />
                            </div>
                          </div>
                          <p className="text-primary-900 text-xs font-bold mt-2 text-center">Support</p>
                        </div>
                      </motion.div>

                      {/* Operations - Bottom Left */}
                      <motion.div
                        initial={{ scale: 0, x: 20 }}
                        animate={{ scale: 1, x: 0 }}
                        transition={{ delay: 1.4, type: "spring" }}
                        whileHover={{ scale: 1.1, y: -5 }}
                        className="absolute bottom-[18%] left-0 z-10"
                      >
                        <div className="relative group">
                          <div className="absolute inset-0 bg-gradient-to-br from-primary-400/40 to-accent-400/40 rounded-2xl blur-xl group-hover:blur-2xl transition-all" />
                          <div className="relative bg-white rounded-2xl p-3 shadow-xl border-2 border-primary-300 group-hover:border-primary-500 transition-all">
                            <div className="w-14 h-14 bg-gradient-to-br from-primary-500 to-accent-500 rounded-xl flex items-center justify-center">
                              <Zap className="w-7 h-7 text-white" />
                            </div>
                          </div>
                          <p className="text-primary-900 text-xs font-bold mt-2 text-center">Operations</p>
                        </div>
                      </motion.div>

                      {/* Scheduling - Top Left */}
                      <motion.div
                        initial={{ scale: 0, x: 20 }}
                        animate={{ scale: 1, x: 0 }}
                        transition={{ delay: 1.5, type: "spring" }}
                        whileHover={{ scale: 1.1, y: -5 }}
                        className="absolute top-[18%] left-0 z-10"
                      >
                        <div className="relative group">
                          <div className="absolute inset-0 bg-gradient-to-br from-accent-300/40 to-primary-300/40 rounded-2xl blur-xl group-hover:blur-2xl transition-all" />
                          <div className="relative bg-white rounded-2xl p-3 shadow-xl border-2 border-accent-200 group-hover:border-accent-400 transition-all">
                            <div className="w-14 h-14 bg-gradient-to-br from-accent-400 to-primary-400 rounded-xl flex items-center justify-center">
                              <Calendar className="w-7 h-7 text-white" />
                            </div>
                          </div>
                          <p className="text-primary-900 text-xs font-bold mt-2 text-center">Scheduling</p>
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
      <section className="py-24 md:py-32 bg-gradient-to-b from-white to-beige-50/50 relative overflow-hidden">
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-7xl mx-auto">
            {/* Section Header */}
            <div className="mb-16 text-center">
              <div className="inline-flex items-center gap-2 px-5 py-2 rounded-full bg-primary-100/60 border border-primary-300/30 mb-6">
                <div className="w-1.5 h-1.5 rounded-full bg-accent-500" />
                <span className="text-xs font-medium text-primary-800 tracking-wider uppercase">
                  Service Breakdown
                </span>
              </div>
              <h2 className="text-4xl md:text-5xl lg:text-6xl font-light text-primary-900 mb-6 tracking-tight">
                Explore Our Services
              </h2>
              <p className="text-lg md:text-xl text-primary-700 max-w-2xl mx-auto leading-relaxed">
                Comprehensive solutions tailored to your needs
              </p>
            </div>

            {/* Modern Service Cards Grid */}
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {/* Service Card 1 */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
                className="group bg-white/80 backdrop-blur-sm border border-primary-200 rounded-3xl p-8 hover:shadow-2xl hover:-translate-y-1 hover:border-accent-300 transition-all duration-500"
              >
                <div className="w-16 h-16 bg-gradient-to-br from-accent-500 to-accent-600 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 group-hover:rotate-3 transition-all duration-300">
                  <Mail className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-bold text-primary-900 mb-3">
                  Administrative Support
                </h3>
                <p className="text-primary-700 leading-relaxed mb-4">
                  Email management, scheduling, data entry, and document
                  organization
                </p>
                <Link
                  href="/services"
                  className="inline-flex items-center gap-2 text-accent-600 font-semibold text-sm group-hover:gap-3 transition-all"
                >
                  Learn more <ArrowRight className="w-4 h-4" />
                </Link>
              </motion.div>

              {/* Service Card 2 */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.1 }}
                className="group bg-white/80 backdrop-blur-sm border border-primary-200 rounded-3xl p-8 hover:shadow-2xl hover:-translate-y-1 hover:border-accent-300 transition-all duration-500"
              >
                <div className="w-16 h-16 bg-gradient-to-br from-primary-400 to-primary-500 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 group-hover:rotate-3 transition-all duration-300">
                  <Users className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-bold text-primary-900 mb-3">
                  Customer Support
                </h3>
                <p className="text-primary-700 leading-relaxed mb-4">
                  Professional inquiry handling, CRM management, and client
                  relations
                </p>
                <Link
                  href="/services"
                  className="inline-flex items-center gap-2 text-accent-600 font-semibold text-sm group-hover:gap-3 transition-all"
                >
                  Learn more <ArrowRight className="w-4 h-4" />
                </Link>
              </motion.div>

              {/* Service Card 3 */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.2 }}
                className="group bg-white/80 backdrop-blur-sm border border-primary-200 rounded-3xl p-8 hover:shadow-2xl hover:-translate-y-1 hover:border-accent-300 transition-all duration-500"
              >
                <div className="w-16 h-16 bg-gradient-to-br from-accent-600 to-primary-500 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 group-hover:rotate-3 transition-all duration-300">
                  <Globe className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-bold text-primary-900 mb-3">
                  Social Media Management
                </h3>
                <p className="text-primary-700 leading-relaxed mb-4">
                  Content scheduling, community engagement, and analytics
                </p>
                <Link
                  href="/services"
                  className="inline-flex items-center gap-2 text-accent-600 font-semibold text-sm group-hover:gap-3 transition-all"
                >
                  Learn more <ArrowRight className="w-4 h-4" />
                </Link>
              </motion.div>

              {/* Service Card 4 */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.3 }}
                className="group bg-white/80 backdrop-blur-sm border border-primary-200 rounded-3xl p-8 hover:shadow-2xl hover:-translate-y-1 hover:border-accent-300 transition-all duration-500"
              >
                <div className="w-16 h-16 bg-gradient-to-br from-primary-800 to-primary-900 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 group-hover:rotate-3 transition-all duration-300">
                  <Search className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-bold text-primary-900 mb-3">
                  Research & Analysis
                </h3>
                <p className="text-primary-700 leading-relaxed mb-4">
                  Market research, competitor analysis, and data insights
                </p>
                <Link
                  href="/services"
                  className="inline-flex items-center gap-2 text-accent-600 font-semibold text-sm group-hover:gap-3 transition-all"
                >
                  Learn more <ArrowRight className="w-4 h-4" />
                </Link>
              </motion.div>

              {/* Service Card 5 */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.4 }}
                className="group bg-white/80 backdrop-blur-sm border border-primary-200 rounded-3xl p-8 hover:shadow-2xl hover:-translate-y-1 hover:border-accent-300 transition-all duration-500"
              >
                <div className="w-16 h-16 bg-gradient-to-br from-accent-400 to-primary-400 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 group-hover:rotate-3 transition-all duration-300">
                  <Sparkles className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-bold text-primary-900 mb-3">
                  Content Creation
                </h3>
                <p className="text-primary-700 leading-relaxed mb-4">
                  Blog posts, newsletters, marketing copy, and presentations
                </p>
                <Link
                  href="/services"
                  className="inline-flex items-center gap-2 text-accent-600 font-semibold text-sm group-hover:gap-3 transition-all"
                >
                  Learn more <ArrowRight className="w-4 h-4" />
                </Link>
              </motion.div>

              {/* Service Card 6 */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.5 }}
                className="group bg-white/80 backdrop-blur-sm border border-primary-200 rounded-3xl p-8 hover:shadow-2xl hover:-translate-y-1 hover:border-accent-300 transition-all duration-500"
              >
                <div className="w-16 h-16 bg-gradient-to-br from-primary-500 to-accent-500 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 group-hover:rotate-3 transition-all duration-300">
                  <Calendar className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-bold text-primary-900 mb-3">
                  Project Coordination
                </h3>
                <p className="text-primary-700 leading-relaxed mb-4">
                  Task management, team coordination, and deadline tracking
                </p>
                <Link
                  href="/services"
                  className="inline-flex items-center gap-2 text-accent-600 font-semibold text-sm group-hover:gap-3 transition-all"
                >
                  Learn more <ArrowRight className="w-4 h-4" />
                </Link>
              </motion.div>
            </div>

            {/* CTA Section within Services */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.6 }}
              className="mt-16 bg-gradient-to-br from-primary-50 via-beige-50 to-accent-50 rounded-3xl p-12 md:p-16 text-center border border-primary-200 relative overflow-hidden"
            >
              <div className="absolute top-0 right-0 w-96 h-96 bg-gradient-radial from-accent-200/30 to-transparent blur-3xl" />
              <div className="absolute bottom-0 left-0 w-96 h-96 bg-gradient-radial from-primary-200/20 to-transparent blur-3xl" />
              <div className="relative z-10">
                <h3 className="text-3xl md:text-4xl lg:text-5xl font-light text-primary-900 mb-4">
                  Need a Custom Solution?
                </h3>
                <p className="text-primary-700 text-lg leading-relaxed mb-8 max-w-2xl mx-auto">
                  We tailor our services to match your specific business
                  requirements
                </p>
                <Link href="/contact">
                  <motion.button
                    whileHover={{ scale: 1.05, y: -2 }}
                    whileTap={{ scale: 0.95 }}
                    className="group px-8 py-4 bg-gradient-to-r from-accent-500 to-primary-500 text-white rounded-xl font-normal text-lg shadow-lg hover:shadow-2xl transition-all duration-300 inline-flex items-center gap-2"
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
        <div className="absolute inset-0">
          <div className="absolute top-1/4 left-0 w-96 h-96 bg-accent-200/20 rounded-full blur-3xl"></div>
          <div className="absolute bottom-1/4 right-0 w-96 h-96 bg-beige-200/30 rounded-full blur-3xl"></div>
        </div>

        <div className="container mx-auto px-4 relative z-10">
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 px-5 py-2 rounded-full bg-primary-100/60 border border-primary-300/30 mb-6">
              <Users className="w-4 h-4 text-accent-600" />
              <span className="text-xs font-medium text-primary-800 tracking-wider uppercase">
                Client Testimonials
              </span>
            </div>
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-light mb-4 text-primary-900 tracking-tight">
              Trusted by{" "}
              <span className="bg-gradient-to-r from-accent-600 to-primary-600 bg-clip-text text-transparent">
                Industry Leaders
              </span>
            </h2>
            <p className="text-lg md:text-xl text-primary-700 max-w-2xl mx-auto leading-relaxed">
              See how we've helped businesses achieve their goals
            </p>
          </div>

          {/* Testimonials Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-7xl mx-auto mb-16">
            {/* Testimonial 1 */}
            <div className="group relative bg-white/80 backdrop-blur-sm border border-primary-200 p-6 rounded-2xl hover:shadow-xl transition-all duration-300 hover:-translate-y-1 hover:border-accent-300">
              <div className="flex items-center gap-1 mb-4">
                {[1, 2, 3, 4, 5].map((star) => (
                  <Star
                    key={star}
                    className="w-4 h-4 fill-accent-500 text-accent-500"
                  />
                ))}
              </div>
              <p className="text-primary-700 leading-relaxed mb-4 italic">
                "VirtuServe transformed our workflow. Their attention to detail
                and professionalism is unmatched. Highly recommend!"
              </p>
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 bg-gradient-to-br from-accent-400 to-primary-400 rounded-full flex items-center justify-center text-white font-semibold">
                  SM
                </div>
                <div>
                  <p className="font-semibold text-primary-900">
                    Sarah Mitchell
                  </p>
                  <p className="text-xs text-primary-600">
                    CEO, TechStart Inc.
                  </p>
                </div>
              </div>
            </div>

            {/* Testimonial 2 */}
            <div className="group relative bg-white/80 backdrop-blur-sm border border-primary-200 p-6 rounded-2xl hover:shadow-xl transition-all duration-300 hover:-translate-y-1 hover:border-accent-300">
              <div className="flex items-center gap-1 mb-4">
                {[1, 2, 3, 4, 5].map((star) => (
                  <Star
                    key={star}
                    className="w-4 h-4 fill-accent-500 text-accent-500"
                  />
                ))}
              </div>
              <p className="text-primary-700 leading-relaxed mb-4 italic">
                "Exceptional service! They handled everything seamlessly, giving
                us more time to focus on growth. A game changer."
              </p>
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 bg-gradient-to-br from-accent-400 to-accent-500 rounded-full flex items-center justify-center text-white font-semibold">
                  JC
                </div>
                <div>
                  <p className="font-semibold text-primary-900">James Chen</p>
                  <p className="text-xs text-primary-600">
                    Founder, Digital Wave
                  </p>
                </div>
              </div>
            </div>

            {/* Testimonial 3 */}
            <div className="group relative bg-white/80 backdrop-blur-sm border border-primary-200 p-6 rounded-2xl hover:shadow-xl transition-all duration-300 hover:-translate-y-1 hover:border-accent-300">
              <div className="flex items-center gap-1 mb-4">
                {[1, 2, 3, 4, 5].map((star) => (
                  <Star
                    key={star}
                    className="w-4 h-4 fill-accent-500 text-accent-500"
                  />
                ))}
              </div>
              <p className="text-primary-700 leading-relaxed mb-4 italic">
                "Professional, reliable, and efficient. VirtuServe exceeded our
                expectations in every way. Five stars!"
              </p>
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 bg-gradient-to-br from-primary-400 to-primary-500 rounded-full flex items-center justify-center text-white font-semibold">
                  EP
                </div>
                <div>
                  <p className="font-semibold text-primary-900">Emily Parker</p>
                  <p className="text-xs text-primary-600">
                    Director, Global Ventures
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Stats Bar */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-5xl mx-auto">
            <div className="text-center p-6 bg-white/80 backdrop-blur-sm rounded-2xl border border-primary-200">
              <p className="text-4xl font-bold text-accent-600 mb-2">500+</p>
              <p className="text-sm text-primary-700 font-medium">
                Happy Clients
              </p>
            </div>
            <div className="text-center p-6 bg-white/80 backdrop-blur-sm rounded-2xl border border-primary-200">
              <p className="text-4xl font-bold text-accent-600 mb-2">98%</p>
              <p className="text-sm text-primary-700 font-medium">
                Satisfaction Rate
              </p>
            </div>
            <div className="text-center p-6 bg-white/80 backdrop-blur-sm rounded-2xl border border-primary-200">
              <p className="text-4xl font-bold text-accent-600 mb-2">24/7</p>
              <p className="text-sm text-primary-700 font-medium">
                Support Available
              </p>
            </div>
            <div className="text-center p-6 bg-white/80 backdrop-blur-sm rounded-2xl border border-primary-200">
              <p className="text-4xl font-bold text-accent-600 mb-2">10+</p>
              <p className="text-sm text-primary-700 font-medium">
                Years Experience
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section - Redesigned */}
      <section className="relative py-24 md:py-32 overflow-hidden">
        {/* Elegant Background */}
        <div className="absolute inset-0 bg-gradient-to-br from-primary-50 via-accent-50/30 to-beige-50"></div>
        <div className="absolute inset-0 opacity-40">
          <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-gradient-radial from-accent-300/30 to-transparent blur-3xl"></div>
          <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-gradient-radial from-primary-300/30 to-transparent blur-3xl"></div>
        </div>

        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-6xl mx-auto">
            {/* Main CTA Card */}
            <div className="relative bg-gradient-to-br from-white via-white to-primary-50/30 rounded-3xl p-10 md:p-16 shadow-2xl border border-primary-200/60 overflow-hidden">
              {/* Decorative Elements */}
              <div className="absolute top-0 right-0 w-64 h-64 bg-gradient-radial from-accent-200/20 to-transparent blur-2xl"></div>
              <div className="absolute bottom-0 left-0 w-64 h-64 bg-gradient-radial from-primary-200/20 to-transparent blur-2xl"></div>

              <div className="relative z-10">
                {/* Badge */}
                <div className="flex justify-center mb-8">
                  <div className="inline-flex items-center gap-2 bg-gradient-to-r from-accent-100 to-primary-100 border border-accent-200/60 rounded-full px-5 py-2.5">
                    <div className="w-2 h-2 bg-accent-500 rounded-full animate-pulse"></div>
                    <span className="text-xs font-semibold text-primary-900 uppercase tracking-wider">
                      Ready to Get Started?
                    </span>
                  </div>
                </div>

                {/* Heading */}
                <div className="text-center mb-6">
                  <h2 className="text-4xl md:text-5xl lg:text-6xl font-light mb-4 text-primary-900 leading-tight">
                    Transform Your Business
                    <span className="block mt-2 bg-gradient-to-r from-accent-600 via-accent-500 to-primary-600 bg-clip-text text-transparent font-normal">
                      Starting Today
                    </span>
                  </h2>
                  <p className="text-lg md:text-xl text-primary-600 font-light leading-relaxed max-w-2xl mx-auto mt-6">
                    Join forward-thinking companies that trust us to streamline
                    their operations and accelerate growth
                  </p>
                </div>

                {/* CTA Button */}
                <div className="flex justify-center mb-12">
                  <Link
                    href="/contact"
                    className="group relative inline-flex items-center gap-3 bg-gradient-to-br from-accent-500 to-primary-500 text-white px-10 py-5 rounded-xl font-normal text-lg overflow-hidden transition-all duration-300 hover:shadow-2xl hover:shadow-accent-500/30 hover:-translate-y-1"
                  >
                    <span className="relative z-10">
                      Book Free Consultation
                    </span>
                    <ArrowRight className="w-5 h-5 relative z-10 group-hover:translate-x-1 transition-transform" />
                    <div className="absolute inset-0 bg-gradient-to-r from-accent-600 to-primary-600 opacity-0 group-hover:opacity-100 transition-opacity"></div>
                  </Link>
                </div>

                {/* Benefits Grid */}
                <div className="grid md:grid-cols-3 gap-6 max-w-4xl mx-auto">
                  <div className="flex flex-col items-center text-center group">
                    <div className="w-14 h-14 bg-gradient-to-br from-white to-primary-50 border border-primary-200/60 rounded-2xl flex items-center justify-center mb-3 group-hover:scale-110 group-hover:shadow-lg transition-all duration-300">
                      <CheckCircle className="w-6 h-6 text-accent-600" />
                    </div>
                    <span className="font-medium text-primary-900">
                      No commitment required
                    </span>
                  </div>
                  <div className="flex flex-col items-center text-center group">
                    <div className="w-14 h-14 bg-gradient-to-br from-white to-primary-50 border border-primary-200/60 rounded-2xl flex items-center justify-center mb-3 group-hover:scale-110 group-hover:shadow-lg transition-all duration-300">
                      <CheckCircle className="w-6 h-6 text-accent-600" />
                    </div>
                    <span className="font-medium text-primary-900">
                      Response within 24 hours
                    </span>
                  </div>
                  <div className="flex flex-col items-center text-center group">
                    <div className="w-14 h-14 bg-gradient-to-br from-white to-primary-50 border border-primary-200/60 rounded-2xl flex items-center justify-center mb-3 group-hover:scale-110 group-hover:shadow-lg transition-all duration-300">
                      <CheckCircle className="w-6 h-6 text-accent-600" />
                    </div>
                    <span className="font-medium text-primary-900">
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
