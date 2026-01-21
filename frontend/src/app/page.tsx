"use client";

import Link from "next/link";
import Image from "next/image";
import {
  Calendar,
  Mail,
  Globe,
  Search,
  CheckCircle,
  Sparkles,
  ArrowRight,
  TrendingUp,
  Users,
  Star,
  Quote,
} from "lucide-react";
import { motion } from "framer-motion";

export default function Home() {
  return (
    <main className="min-h-screen">
      {/* Hero Section - Premium & Modern */}
      <section className="relative min-h-[70vh] overflow-hidden flex items-center pt-20 pb-12 bg-transparent">
        {/* Sophisticated mesh gradient background */}
        <div className="absolute inset-0">
          {/* Elegant mesh gradient */}
          <div className="absolute inset-0 bg-gradient-to-br from-white/95 via-[#F2F1EF]/40 to-white/95" />

          {/* Overlay gradient for subtle depth */}
          <div className="absolute inset-0 bg-gradient-to-tr from-[#697184]/3 via-transparent to-[#B1A6A4]/2" />

          {/* Subtle animated orbs */}
          <div className="absolute inset-0">
            <motion.div
              animate={{
                opacity: [0.02, 0.04, 0.02],
                scale: [1, 1.08, 1],
                x: [0, 30, 0],
                y: [0, 20, 0],
              }}
              transition={{
                duration: 12,
                repeat: Infinity,
                ease: "easeInOut",
              }}
              className="absolute top-1/4 left-1/4 w-[600px] h-[600px] bg-gradient-to-br from-[#697184]/6 via-[#B1A6A4]/4 to-transparent blur-3xl rounded-full"
            />
            <motion.div
              animate={{
                opacity: [0.025, 0.05, 0.025],
                scale: [1, 1.06, 1],
                x: [0, -30, 0],
                y: [0, 25, 0],
              }}
              transition={{
                duration: 15,
                repeat: Infinity,
                ease: "easeInOut",
                delay: 3,
              }}
              className="absolute bottom-1/4 right-1/4 w-[500px] h-[500px] bg-gradient-to-tl from-[#D8CFD0]/5 via-[#697184]/3 to-transparent blur-3xl rounded-full"
            />
            <motion.div
              animate={{
                opacity: [0.015, 0.035, 0.015],
                scale: [1, 1.04, 1],
              }}
              transition={{
                duration: 10,
                repeat: Infinity,
                ease: "easeInOut",
                delay: 5,
              }}
              className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[700px] bg-gradient-to-br from-[#B1A6A4]/4 to-transparent blur-3xl rounded-full"
            />
          </div>

          {/* Subtle mesh gradient overlay */}
          <div className="absolute inset-0 opacity-30">
            <div
              className="absolute inset-0"
              style={{
                backgroundImage: `
                radial-gradient(circle at 20% 50%, rgba(105, 113, 132, 0.025) 0%, transparent 50%),
                radial-gradient(circle at 80% 80%, rgba(177, 166, 164, 0.025) 0%, transparent 50%),
                radial-gradient(circle at 40% 20%, rgba(216, 207, 208, 0.02) 0%, transparent 50%)
              `,
              }}
            />
          </div>

          {/* Elegant grid pattern */}
          <div className="absolute inset-0 opacity-[0.008]">
            <div
              className="absolute inset-0"
              style={{
                backgroundImage:
                  "repeating-linear-gradient(0deg, #697184 0px, #697184 1px, transparent 1px, transparent 50px), repeating-linear-gradient(90deg, #697184 0px, #697184 1px, transparent 1px, transparent 50px)",
              }}
            />
          </div>

          {/* Soft vignette effect */}
          <div className="absolute inset-0 bg-gradient-radial from-transparent via-transparent to-white/30" />

          {/* Additional elegant floating elements */}
          <div className="absolute top-10 left-10 w-96 h-96 border border-[#697184]/5 rounded-full opacity-40"></div>
          <div className="absolute bottom-10 right-10 w-[32rem] h-[32rem] border border-[#B1A6A4]/5 rounded-full opacity-40"></div>
        </div>

        <div className="container mx-auto px-4 sm:px-6 relative z-10 py-8">
          <div className="max-w-7xl mx-auto">
            <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
              {/* Left: Redesigned Premium Content */}
              <motion.div
                initial={{ opacity: 0, x: -60 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{
                  duration: 1.2,
                  ease: [0.22, 1, 0.36, 1],
                  delay: 0.3,
                }}
                className="relative space-y-7 order-1"
              >
                {/* Premium badge with enhanced design */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: 0.5 }}
                  className="inline-flex items-center gap-2.5 px-5 py-2.5 rounded-2xl bg-gradient-to-r from-[#F2F1EF] to-[#D8CFD0]/50 backdrop-blur-xl border border-[#697184]/30 shadow-lg"
                >
                  <motion.div
                    animate={{
                      scale: [1, 1.2, 1],
                      rotate: [0, 180, 360],
                    }}
                    transition={{
                      duration: 3,
                      repeat: Infinity,
                      ease: "easeInOut",
                    }}
                  >
                    <Sparkles className="w-4 h-4 text-[#697184]" />
                  </motion.div>
                  <span className="text-xs font-bold bg-gradient-to-r from-[#697184] to-[#413F3D] bg-clip-text text-transparent tracking-[0.2em] uppercase">
                    Elite Virtual Support
                  </span>
                </motion.div>

                {/* Powerful headline */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: 0.6 }}
                  className="space-y-5"
                >
                  <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight leading-[0.95]">
                    <span className="block mb-2">
                      <span className="text-[#413F3D]">Your Business,</span>
                    </span>
                    <span className="block relative">
                      <span className="relative inline-block">
                        <span className="bg-gradient-to-r from-[#697184] via-[#413F3D] to-[#697184] bg-clip-text text-transparent">
                          Elevated
                        </span>
                        <motion.div
                          initial={{ scaleX: 0 }}
                          animate={{ scaleX: 1 }}
                          transition={{
                            duration: 1.5,
                            delay: 1.2,
                            ease: "easeOut",
                          }}
                          className="absolute -bottom-2 left-0 right-0 h-1.5 bg-gradient-to-r from-[#697184]/30 via-[#B1A6A4]/40 to-transparent rounded-full origin-left"
                        />
                      </span>
                    </span>
                  </h1>

                  <motion.p
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 0.8, delay: 0.8 }}
                    className="text-lg md:text-xl text-[#697184] font-normal leading-relaxed max-w-xl"
                  >
                    Where sophisticated{" "}
                    <span className="text-[#413F3D] font-semibold italic">
                      virtual assistance
                    </span>{" "}
                    meets visionary ambition. Transform your operations with
                    premium support tailored for excellence.
                  </motion.p>
                </motion.div>

                {/* Modern CTA Buttons */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: 0.9 }}
                  className="flex flex-col sm:flex-row gap-4"
                >
                  <Link href="/contact">
                    <motion.button
                      whileHover={{ scale: 1.02, y: -3 }}
                      whileTap={{ scale: 0.98 }}
                      className="group relative px-8 py-4 bg-gradient-to-r from-[#697184] via-[#413F3D] to-[#697184] text-white rounded-2xl font-bold shadow-2xl shadow-[#697184]/30 hover:shadow-[#697184]/50 transition-all duration-300 flex items-center justify-center gap-3 overflow-hidden"
                    >
                      <span className="relative z-10 flex items-center gap-3">
                        Begin Your Journey
                        <motion.div
                          animate={{ x: [0, 5, 0] }}
                          transition={{
                            duration: 1.5,
                            repeat: Infinity,
                            ease: "easeInOut",
                          }}
                        >
                          <ArrowRight className="w-5 h-5" />
                        </motion.div>
                      </span>
                      <motion.div
                        className="absolute inset-0 bg-gradient-to-l from-[#697184] via-[#413F3D] to-[#697184]"
                        initial={{ x: "100%" }}
                        whileHover={{ x: 0 }}
                        transition={{ duration: 0.4 }}
                      />
                    </motion.button>
                  </Link>
                  <Link href="/services">
                    <motion.button
                      whileHover={{ scale: 1.02, y: -3 }}
                      whileTap={{ scale: 0.98 }}
                      className="px-8 py-4 bg-[#F2F1EF] backdrop-blur-xl text-[#413F3D] rounded-2xl font-bold border-2 border-[#697184]/40 hover:border-[#697184] hover:shadow-2xl hover:shadow-[#697184]/20 transition-all duration-300"
                    >
                      Explore Services
                    </motion.button>
                  </Link>
                </motion.div>

                {/* Redesigned Trust Indicators */}
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 0.8, delay: 1.1 }}
                  className="grid grid-cols-2 lg:grid-cols-4 gap-4 pt-2"
                >
                  {/* Client Rating */}
                  <motion.div
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    transition={{ type: "spring", delay: 1.2 }}
                    className="col-span-2 lg:col-span-2 p-4 bg-[#F2F1EF]/90 backdrop-blur-xl rounded-2xl border border-[#697184]/20 shadow-lg"
                  >
                    <div className="flex items-center gap-2.5 mb-1.5">
                      <div className="flex -space-x-2">
                        {[1, 2, 3].map((i) => (
                          <div
                            key={i}
                            className="w-7 h-7 rounded-full bg-gradient-to-br from-[#697184] via-[#B1A6A4] to-[#413F3D] border-2 border-white shadow-md flex items-center justify-center text-white text-[9px] font-bold"
                          >
                            {i}
                          </div>
                        ))}
                      </div>
                      <div className="flex gap-0.5">
                        {[1, 2, 3, 4, 5].map((star) => (
                          <Star
                            key={star}
                            className="w-3.5 h-3.5 fill-[#697184] text-[#697184]"
                          />
                        ))}
                      </div>
                    </div>
                    <p className="text-xs font-bold text-[#413F3D]">
                      100+ Satisfied Clients
                    </p>
                  </motion.div>

                  {/* Retention Rate */}
                  <motion.div
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    transition={{ type: "spring", delay: 1.3 }}
                    className="p-4 bg-gradient-to-br from-[#D8CFD0]/50 to-[#B1A6A4]/30 backdrop-blur-xl rounded-2xl border border-[#D8CFD0]/30 shadow-lg"
                  >
                    <p className="text-2xl font-bold text-[#413F3D] mb-0.5">
                      98%
                    </p>
                    <p className="text-[10px] text-[#697184] font-semibold uppercase tracking-wide">
                      Retention
                    </p>
                  </motion.div>

                  {/* Support Hours */}
                  <motion.div
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    transition={{ type: "spring", delay: 1.4 }}
                    className="min-h-[120px] flex flex-col justify-center p-4 bg-gradient-to-br from-[#B1A6A4]/20 to-[#D8CFD0]/30 backdrop-blur-xl rounded-2xl border border-[#697184]/20 shadow-lg"
                  >
                    <Globe className="w-5 h-5 text-[#697184] mb-1.5" />
                    <p className="text-[8px] text-[#697184] font-semibold uppercase tracking-wider mb-0.5">
                      Support Hours
                    </p>
                    <p className="text-[9px] font-bold text-[#413F3D] leading-tight">
                      UK: 9AM-5PM
                      <br />
                      SA: 8AM-5PM
                    </p>
                  </motion.div>
                </motion.div>
              </motion.div>

              {/* Right: Captivating Image with Left Curve */}
              <motion.div
                initial={{ opacity: 0, x: 60 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 1.2, ease: [0.22, 1, 0.36, 1] }}
                className="relative order-2"
              >
                <div className="relative">
                  {/* Multi-layered ambient glow */}
                  <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 2, delay: 0.5 }}
                    className="absolute -inset-12 bg-gradient-to-br from-[#697184]/20 via-[#B1A6A4]/15 to-[#f8f9fa]/10 blur-3xl"
                  />

                  {/* Floating decorative shapes */}
                  <motion.div
                    animate={{
                      y: [0, -15, 0],
                      rotate: [0, 5, 0],
                    }}
                    transition={{
                      duration: 6,
                      repeat: Infinity,
                      ease: "easeInOut",
                    }}
                    className="absolute -top-8 -left-8 w-32 h-32 bg-gradient-to-br from-[#697184]/10 to-[#B1A6A4]/10 rounded-full blur-2xl"
                  />

                  <motion.div
                    animate={{
                      y: [0, 20, 0],
                      rotate: [0, -8, 0],
                    }}
                    transition={{
                      duration: 8,
                      repeat: Infinity,
                      ease: "easeInOut",
                      delay: 1,
                    }}
                    className="absolute -bottom-12 -right-12 w-40 h-40 bg-gradient-to-tl from-[#B1A6A4]/10 to-[#413F3D]/10 rounded-full blur-2xl"
                  />

                  {/* Image container with organic fluid shape */}
                  <motion.div
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{
                      duration: 1.2,
                      delay: 0.4,
                      ease: [0.22, 1, 0.36, 1],
                    }}
                    className="relative overflow-hidden"
                    style={{
                      borderRadius: "40% 60% 70% 30% / 50% 60% 40% 50%",
                    }}
                  >
                    {/* Glass-morphic gradient border frame */}
                    <div
                      className="absolute -inset-[1px] bg-gradient-to-br from-[#697184]/40 via-[#B1A6A4]/30 to-transparent"
                      style={{
                        borderRadius: "40% 60% 70% 30% / 50% 60% 40% 50%",
                      }}
                    />

                    <div
                      className="relative bg-gradient-to-br from-white/60 to-white/40 backdrop-blur-sm p-1"
                      style={{
                        borderRadius: "3rem 3rem 3rem 8rem",
                      }}
                    >
                      <div
                        className="relative overflow-hidden"
                        style={{
                          borderRadius: "2.75rem 2.75rem 2.75rem 7.75rem",
                        }}
                      >
                        <Image
                          src="/virtual_assistant.jpg"
                          alt="Premium Virtual Assistant"
                          width={600}
                          height={750}
                          className="w-full aspect-[4/5] object-cover"
                        />

                        {/* Sophisticated gradient overlays for blending */}
                        <div className="absolute inset-0 bg-gradient-to-t from-[#f8f9fa]/40 via-transparent to-transparent" />
                        <div className="absolute inset-0 bg-gradient-to-br from-white/10 via-transparent to-[#B1A6A4]/10" />
                        <div className="absolute inset-0 bg-gradient-to-l from-transparent via-transparent to-[#f8f9fa]/20" />

                        {/* Edge fade effect for seamless blending */}
                        <div className="absolute top-0 left-0 right-0 h-24 bg-gradient-to-b from-[#f8f9fa]/30 to-transparent" />
                        <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-[#f8f9fa]/50 to-transparent" />
                      </div>
                    </div>

                    {/* Animated accent lines */}
                    <motion.div
                      initial={{ scaleX: 0 }}
                      animate={{ scaleX: 1 }}
                      transition={{ duration: 1.5, delay: 1, ease: "easeOut" }}
                      className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-[#f8f9fa] via-[#697184] to-[#f8f9fa] origin-center"
                    />

                    {/* Subtle shimmer effect */}
                    <motion.div
                      initial={{ x: "-100%" }}
                      animate={{ x: "200%" }}
                      transition={{
                        duration: 3,
                        repeat: Infinity,
                        repeatDelay: 5,
                        ease: "easeInOut",
                      }}
                      className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent skew-x-12"
                    />
                  </motion.div>

                  {/* Scattered decorative dots for depth */}
                  {[...Array(6)].map((_, i) => (
                    <motion.div
                      key={i}
                      initial={{ opacity: 0, scale: 0 }}
                      animate={{ opacity: [0.3, 0.6, 0.3], scale: 1 }}
                      transition={{
                        duration: 3,
                        repeat: Infinity,
                        delay: i * 0.5,
                        ease: "easeInOut",
                      }}
                      className="absolute w-1.5 h-1.5 rounded-full bg-gradient-to-br from-[#697184] to-[#B1A6A4]"
                      style={{
                        top: `${15 + i * 12}%`,
                        left: i % 2 === 0 ? "-4%" : "auto",
                        right: i % 2 === 1 ? "-4%" : "auto",
                      }}
                    />
                  ))}
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Overview */}
      <section className="relative py-24 md:py-32 bg-gradient-to-b from-white/50 via-[#F2F1EF]/60 to-white/50 overflow-hidden">
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
              <div className="inline-flex items-center gap-2.5 px-6 py-3 rounded-full bg-gradient-to-r from-slate-50/95 via-primary-50/90 to-slate-50/95 backdrop-blur-sm border border-slate-700/30 mb-8 shadow-lg hover:shadow-xl hover:border-[#697184]/30 transition-all duration-300">
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
                className="group relative bg-white border border-[#697184]/20 rounded-[2rem] p-10 hover:shadow-xl hover:-translate-y-2 hover:border-[#697184]/30 transition-all duration-700 overflow-hidden"
              >
                {/* Ambient glow effect */}
                <div className="absolute top-0 right-0 w-32 h-32 bg-[#D8CFD0]/20 blur-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-700" />

                <div className="relative z-10">
                  <div className="w-20 h-20 bg-[#697184] rounded-[1.5rem] flex items-center justify-center mb-8 group-hover:scale-110 group-hover:rotate-6 transition-all duration-500 shadow-xl border border-[#697184]/50">
                    <Mail className="w-9 h-9 text-white" />
                  </div>
                  <h3 className="text-2xl font-medium text-[#413F3D] mb-4 tracking-tight">
                    Administrative Support
                  </h3>
                  <p className="text-[#413F3D]/70 font-light leading-relaxed mb-6">
                    Email management, scheduling, data entry, and document
                    organization
                  </p>
                  <Link
                    href="/services"
                    className="inline-flex items-center gap-2 text-[#413F3D] font-medium text-sm group-hover:gap-4 transition-all duration-300 hover:text-[#697184]"
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
                className="group relative bg-white border border-[#697184]/20 rounded-[2rem] p-10 hover:shadow-xl hover:-translate-y-2 hover:border-[#D8CFD0]/40 transition-all duration-700 overflow-hidden"
              >
                <div className="absolute top-0 right-0 w-32 h-32 bg-[#B1A6A4]/20 blur-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-700" />

                <div className="relative z-10">
                  <div className="w-20 h-20 bg-[#697184] rounded-[1.5rem] flex items-center justify-center mb-8 group-hover:scale-110 group-hover:rotate-6 transition-all duration-500 shadow-xl border border-[#697184]/50">
                    <Users className="w-9 h-9 text-white" />
                  </div>
                  <h3 className="text-2xl font-medium text-[#413F3D] mb-4 tracking-tight">
                    Customer Support
                  </h3>
                  <p className="text-[#413F3D]/70 font-light leading-relaxed mb-6">
                    Professional inquiry handling, CRM management, and client
                    relations
                  </p>
                  <Link
                    href="/services"
                    className="inline-flex items-center gap-2 text-[#413F3D] font-medium text-sm group-hover:gap-4 transition-all duration-300 hover:text-[#697184]"
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
                className="group relative bg-white border border-[#697184]/20 rounded-[2rem] p-10 hover:shadow-xl hover:-translate-y-2 hover:border-[#697184]/30 transition-all duration-700 overflow-hidden"
              >
                <div className="absolute top-0 right-0 w-32 h-32 bg-[#D8CFD0]/20 blur-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-700" />

                <div className="relative z-10">
                  <div className="w-20 h-20 bg-gradient-to-br from-[#B1A6A4] to-[#697184] rounded-[1.5rem] flex items-center justify-center mb-8 group-hover:scale-110 group-hover:rotate-6 transition-all duration-500 shadow-xl border border-[#B1A6A4]/50">
                    <Globe className="w-9 h-9 text-white" />
                  </div>
                  <h3 className="text-2xl font-medium text-[#413F3D] mb-4 tracking-tight">
                    Social Media Management
                  </h3>
                  <p className="text-[#413F3D]/70 font-light leading-relaxed mb-6">
                    Content scheduling, community engagement, and analytics
                  </p>
                  <Link
                    href="/services"
                    className="inline-flex items-center gap-2 text-[#413F3D] font-medium text-sm group-hover:gap-4 transition-all duration-300 hover:text-[#697184]"
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
                className="group relative bg-white border border-[#697184]/20 rounded-[2rem] p-10 hover:shadow-xl hover:-translate-y-2 hover:border-[#B1A6A4]/40 transition-all duration-700 overflow-hidden"
              >
                <div className="absolute top-0 right-0 w-32 h-32 bg-[#D8CFD0]/25 blur-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-700" />

                <div className="relative z-10">
                  <div className="w-20 h-20 bg-gradient-to-br from-[#D8CFD0] to-[#697184] rounded-[1.5rem] flex items-center justify-center mb-8 group-hover:scale-110 group-hover:rotate-6 transition-all duration-500 shadow-xl border border-[#D8CFD0]/50">
                    <Search className="w-9 h-9 text-white" />
                  </div>
                  <h3 className="text-2xl font-medium text-[#413F3D] mb-4 tracking-tight">
                    Research & Analysis
                  </h3>
                  <p className="text-[#413F3D]/70 font-light leading-relaxed mb-6">
                    Market research, competitor analysis, and data insights
                  </p>
                  <Link
                    href="/services"
                    className="inline-flex items-center gap-2 text-[#413F3D] font-medium text-sm group-hover:gap-4 transition-all duration-300 hover:text-[#697184]"
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
                className="group relative bg-white border border-[#697184]/20 rounded-[2rem] p-10 hover:shadow-xl hover:-translate-y-2 hover:border-[#697184]/30 transition-all duration-700 overflow-hidden"
              >
                <div className="absolute top-0 right-0 w-32 h-32 bg-[#D8CFD0]/20 blur-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-700" />

                <div className="relative z-10">
                  <div className="w-20 h-20 bg-[#697184] rounded-[1.5rem] flex items-center justify-center mb-8 group-hover:scale-110 group-hover:rotate-6 transition-all duration-500 shadow-xl border border-[#697184]/50">
                    <Sparkles className="w-9 h-9 text-white" />
                  </div>
                  <h3 className="text-2xl font-medium text-[#413F3D] mb-4 tracking-tight">
                    Content Creation
                  </h3>
                  <p className="text-[#413F3D]/70 font-light leading-relaxed mb-6">
                    Blog posts, newsletters, marketing copy, and presentations
                  </p>
                  <Link
                    href="/services"
                    className="inline-flex items-center gap-2 text-[#413F3D] font-medium text-sm group-hover:gap-4 transition-all duration-300 hover:text-[#697184]"
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
                className="group relative bg-white border border-[#697184]/20 rounded-[2rem] p-10 hover:shadow-xl hover:-translate-y-2 hover:border-[#697184]/30 transition-all duration-700 overflow-hidden"
              >
                <div className="absolute top-0 right-0 w-32 h-32 bg-[#D8CFD0]/20 blur-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-700" />

                <div className="relative z-10">
                  <div className="w-20 h-20 bg-[#697184] rounded-[1.5rem] flex items-center justify-center mb-8 group-hover:scale-110 group-hover:rotate-6 transition-all duration-500 shadow-xl border border-[#697184]/50">
                    <Calendar className="w-9 h-9 text-white" />
                  </div>
                  <h3 className="text-2xl font-semibold text-[#413F3D] mb-4 tracking-tight">
                    Project Coordination
                  </h3>
                  <p className="text-[#413F3D]/70 font-light leading-relaxed mb-6">
                    Task management, team coordination, and deadline tracking
                  </p>
                  <Link
                    href="/services"
                    className="inline-flex items-center gap-2 text-[#413F3D] font-medium text-sm group-hover:gap-4 transition-all duration-300 hover:text-[#697184]"
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
              className="mt-20 relative bg-white rounded-[2.5rem] p-12 md:p-16 lg:p-20 text-center border border-[#697184]/20 shadow-2xl hover:shadow-xl hover:border-[#697184]/30 transition-all duration-700 overflow-hidden"
            >
              {/* Subtle decorative elements */}
              <div className="absolute top-0 right-0 w-96 h-96 bg-[#D8CFD0]/15 blur-3xl opacity-60" />
              <div className="absolute bottom-0 left-0 w-96 h-96 bg-[#B1A6A4]/10 blur-3xl opacity-60" />

              {/* Decorative corner accents */}
              <div className="absolute top-8 right-8 w-24 h-24 border-t-2 border-r-2 border-[#697184]/15 rounded-tr-3xl"></div>
              <div className="absolute bottom-8 left-8 w-24 h-24 border-b-2 border-l-2 border-[#697184]/15 rounded-bl-3xl"></div>

              <div className="relative z-10">
                <h3 className="text-3xl md:text-4xl lg:text-5xl font-extralight text-[#413F3D] mb-6 tracking-tight leading-tight">
                  Need a Custom Solution?
                </h3>
                <p className="text-[#697184] text-lg md:text-xl font-light leading-relaxed mb-10 max-w-2xl mx-auto">
                  We tailor our services to match your specific business
                  requirements
                </p>

                {/* Elegant divider */}
                <div className="flex items-center justify-center gap-3 mb-10">
                  <div className="h-px w-16 bg-[#697184]/30"></div>
                  <div className="w-2 h-2 rounded-full bg-[#697184] shadow-sm"></div>
                  <div className="h-px w-16 bg-[#697184]/30"></div>
                </div>

                <Link href="/contact">
                  <motion.button
                    whileHover={{ scale: 1.05, y: -4 }}
                    whileTap={{ scale: 0.95 }}
                    className="group px-10 py-5 bg-gradient-to-r from-[#697184] via-[#413F3D] to-[#697184] text-white rounded-2xl font-semibold text-lg shadow-2xl hover:shadow-[0_20px_60px_-15px_rgba(105,113,132,0.5)] transition-all duration-300 inline-flex items-center gap-3"
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

      {/* Client Success Metrics - Redesigned */}
      <section className="relative py-20 md:py-24 overflow-hidden bg-gradient-to-br from-[#F2F1EF]/60 via-white to-[#F2F1EF]/40">
        {/* Sophisticated light background with elegant patterns */}
        <div className="absolute inset-0">
          {/* Soft gradient orbs */}
          <div className="absolute top-10 right-20 w-[300px] h-[300px] bg-[#D8CFD0]/15 rounded-full blur-3xl"></div>
          <div className="absolute bottom-10 left-20 w-[350px] h-[350px] bg-[#B1A6A4]/12 rounded-full blur-3xl"></div>
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[250px] h-[250px] bg-[#697184]/08 rounded-full blur-3xl"></div>

          {/* Elegant geometric pattern */}
          <svg
            className="absolute inset-0 w-full h-full opacity-[0.03]"
            xmlns="http://www.w3.org/2000/svg"
          >
            <defs>
              <pattern
                id="elegant-grid"
                x="0"
                y="0"
                width="80"
                height="80"
                patternUnits="userSpaceOnUse"
              >
                <circle cx="40" cy="40" r="1" fill="#697184" />
                <line
                  x1="40"
                  y1="0"
                  x2="40"
                  y2="80"
                  stroke="#697184"
                  strokeWidth="0.5"
                  opacity="0.3"
                />
                <line
                  x1="0"
                  y1="40"
                  x2="80"
                  y2="40"
                  stroke="#697184"
                  strokeWidth="0.5"
                  opacity="0.3"
                />
              </pattern>
            </defs>
            <rect width="100%" height="100%" fill="url(#elegant-grid)" />
          </svg>

          {/* Subtle accent shapes */}
          <div className="absolute top-20 left-1/4 w-24 h-24 border border-[#697184]/10 rounded-full"></div>
          <div className="absolute bottom-20 right-1/3 w-32 h-32 border border-[#D8CFD0]/15 rounded-full"></div>
          <div className="absolute top-1/3 right-20 w-2 h-2 rounded-full bg-[#B1A6A4]/30"></div>
          <div className="absolute bottom-1/3 left-1/3 w-1.5 h-1.5 rounded-full bg-[#697184]/25"></div>
        </div>

        <div className="container mx-auto px-4 relative z-10">
          {/* Header */}
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2.5 px-6 py-3 rounded-full bg-white/80 backdrop-blur-sm border border-[#697184]/20 mb-6 shadow-sm">
              <span className="text-xs font-semibold text-[#413F3D] uppercase tracking-[0.25em]">
                Success Stories
              </span>
            </div>

            <h2 className="text-4xl md:text-5xl lg:text-6xl font-extralight mb-6 text-[#413F3D] tracking-tight leading-[1.1]">
              Trusted by
              <span className="block mt-1 text-[#697184] font-light">
                Industry Leaders
              </span>
            </h2>
            <p className="text-lg md:text-xl text-[#697184]/80 max-w-2xl mx-auto leading-relaxed font-light">
              Real results from businesses that chose excellence
            </p>
          </div>

          {/* Testimonials Grid - Compact & Elegant */}
          <div className="grid md:grid-cols-3 gap-6 max-w-7xl mx-auto mb-16">
            {/* Testimonial 1 */}
            <div className="group relative">
              <div className="absolute inset-0 bg-[#697184]/5 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 blur-lg"></div>
              <div className="relative bg-white/90 backdrop-blur-sm border border-[#697184]/15 p-8 rounded-2xl hover:shadow-[0_20px_40px_-15px_rgba(65,63,61,0.12)] transition-all duration-500 hover:-translate-y-1 hover:border-[#697184]/25">
                {/* Quote icon */}
                <div className="mb-6">
                  <div className="w-12 h-12 rounded-xl bg-[#F2F1EF]/60 flex items-center justify-center">
                    <Quote
                      className="w-6 h-6 text-[#697184]"
                      strokeWidth={1.5}
                    />
                  </div>
                </div>

                {/* Stars */}
                <div className="flex items-center gap-1 mb-6">
                  {[1, 2, 3, 4, 5].map((star) => (
                    <Star
                      key={star}
                      className="w-4 h-4 fill-[#D8CFD0] text-[#D8CFD0]"
                    />
                  ))}
                </div>

                {/* Testimonial text */}
                <p className="text-[#413F3D]/80 leading-[1.7] mb-8 text-[15px] font-light">
                  &quot;VirtuServe transformed our workflow. Their attention to
                  detail and professionalism is unmatched. Highly
                  recommend!&quot;
                </p>

                {/* Author */}
                <div className="flex items-center gap-3 pt-6 border-t border-[#697184]/10">
                  <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-[#697184] to-[#413F3D] flex items-center justify-center text-white font-semibold text-sm flex-shrink-0 shadow-md">
                    SM
                  </div>
                  <div>
                    <p className="font-semibold text-[#413F3D] text-[15px]">
                      Sarah Mitchell
                    </p>
                    <p className="text-xs text-[#697184]/70 font-medium">
                      CEO, TechStart Inc.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Testimonial 2 */}
            <div className="group relative">
              <div className="absolute inset-0 bg-[#D8CFD0]/10 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 blur-lg"></div>
              <div className="relative bg-white/90 backdrop-blur-sm border border-[#697184]/15 p-8 rounded-2xl hover:shadow-[0_20px_40px_-15px_rgba(65,63,61,0.12)] transition-all duration-500 hover:-translate-y-1 hover:border-[#697184]/25">
                {/* Quote icon */}
                <div className="mb-6">
                  <div className="w-12 h-12 rounded-xl bg-[#D8CFD0]/40 flex items-center justify-center">
                    <Quote
                      className="w-6 h-6 text-[#697184]"
                      strokeWidth={1.5}
                    />
                  </div>
                </div>

                {/* Stars */}
                <div className="flex items-center gap-1 mb-6">
                  {[1, 2, 3, 4, 5].map((star) => (
                    <Star
                      key={star}
                      className="w-4 h-4 fill-[#D8CFD0] text-[#D8CFD0]"
                    />
                  ))}
                </div>

                {/* Testimonial text */}
                <p className="text-[#413F3D]/80 leading-[1.7] mb-8 text-[15px] font-light">
                  &quot;Exceptional service! They handled everything seamlessly,
                  giving us more time to focus on growth. A game changer.&quot;
                </p>

                {/* Author */}
                <div className="flex items-center gap-3 pt-6 border-t border-[#697184]/10">
                  <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-[#D8CFD0] to-[#B1A6A4] flex items-center justify-center text-white font-semibold text-sm flex-shrink-0 shadow-md">
                    JC
                  </div>
                  <div>
                    <p className="font-semibold text-[#413F3D] text-[15px]">
                      James Chen
                    </p>
                    <p className="text-xs text-[#697184]/70 font-medium">
                      Founder, Digital Wave
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Testimonial 3 */}
            <div className="group relative">
              <div className="absolute inset-0 bg-[#B1A6A4]/10 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 blur-lg"></div>
              <div className="relative bg-white/90 backdrop-blur-sm border border-[#697184]/15 p-8 rounded-2xl hover:shadow-[0_20px_40px_-15px_rgba(65,63,61,0.12)] transition-all duration-500 hover:-translate-y-1 hover:border-[#697184]/25">
                {/* Quote icon */}
                <div className="mb-6">
                  <div className="w-12 h-12 rounded-xl bg-[#B1A6A4]/30 flex items-center justify-center">
                    <Quote
                      className="w-6 h-6 text-[#697184]"
                      strokeWidth={1.5}
                    />
                  </div>
                </div>

                {/* Stars */}
                <div className="flex items-center gap-1 mb-6">
                  {[1, 2, 3, 4, 5].map((star) => (
                    <Star
                      key={star}
                      className="w-4 h-4 fill-[#D8CFD0] text-[#D8CFD0]"
                    />
                  ))}
                </div>

                {/* Testimonial text */}
                <p className="text-[#413F3D]/80 leading-[1.7] mb-8 text-[15px] font-light">
                  &quot;Professional, reliable, and efficient. VirtuServe
                  exceeded our expectations in every way. Five stars!&quot;
                </p>

                {/* Author */}
                <div className="flex items-center gap-3 pt-6 border-t border-[#697184]/10">
                  <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-[#B1A6A4] to-[#697184] flex items-center justify-center text-white font-semibold text-sm flex-shrink-0 shadow-md">
                    EP
                  </div>
                  <div>
                    <p className="font-semibold text-[#413F3D] text-[15px]">
                      Emily Parker
                    </p>
                    <p className="text-xs text-[#697184]/70 font-medium">
                      Director, Global Ventures
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Stats Bar - Compact */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-6xl mx-auto">
            <div className="group relative">
              <div className="absolute inset-0 bg-[#697184]/5 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              <div className="relative text-center p-6 bg-white/80 backdrop-blur-sm border border-[#697184]/15 rounded-xl hover:shadow-md hover:border-[#697184]/25 transition-all duration-500">
                <Users
                  className="w-7 h-7 text-[#697184] mx-auto mb-2"
                  strokeWidth={1.5}
                />
                <p className="text-3xl font-extralight text-[#413F3D] mb-1">
                  100+
                </p>
                <p className="text-[10px] text-[#697184]/70 font-medium uppercase tracking-[0.12em]">
                  Happy Clients
                </p>
              </div>
            </div>

            <div className="group relative">
              <div className="absolute inset-0 bg-[#697184]/5 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              <div className="relative text-center p-6 bg-white/80 backdrop-blur-sm border border-[#697184]/15 rounded-xl hover:shadow-md hover:border-[#697184]/25 transition-all duration-500">
                <TrendingUp
                  className="w-7 h-7 text-[#697184] mx-auto mb-2"
                  strokeWidth={1.5}
                />
                <p className="text-3xl font-extralight text-[#413F3D] mb-1">
                  98%
                </p>
                <p className="text-[10px] text-[#697184]/70 font-medium uppercase tracking-[0.12em]">
                  Satisfaction Rate
                </p>
              </div>
            </div>

            <div className="group relative">
              <div className="absolute inset-0 bg-[#697184]/5 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              <div className="relative text-center p-6 bg-white/80 backdrop-blur-sm border border-[#697184]/15 rounded-xl hover:shadow-md hover:border-[#697184]/25 transition-all duration-500">
                <Globe
                  className="w-7 h-7 text-[#697184] mx-auto mb-2"
                  strokeWidth={1.5}
                />
                <p className="text-[10px] text-[#697184]/70 font-medium uppercase tracking-[0.12em] mb-1">
                  Support Hours
                </p>
                <p className="text-xs font-semibold text-[#413F3D] leading-tight">
                  UK: 9AM-5PM
                  <br />
                  SA: 8AM-5PM
                </p>
              </div>
            </div>

            <div className="group relative">
              <div className="absolute inset-0 bg-[#697184]/5 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              <div className="relative text-center p-6 bg-white/80 backdrop-blur-sm border border-[#697184]/15 rounded-xl hover:shadow-md hover:border-[#697184]/25 transition-all duration-500">
                <Sparkles
                  className="w-7 h-7 text-[#697184] mx-auto mb-2"
                  strokeWidth={1.5}
                />
                <p className="text-3xl font-extralight text-[#413F3D] mb-1">
                  10+
                </p>
                <p className="text-[10px] text-[#697184]/70 font-medium uppercase tracking-[0.12em]">
                  Years Experience
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Elegant Divider */}
      <div className="relative py-16 bg-white overflow-hidden">
        <div className="container mx-auto px-4">
          <div className="relative flex items-center justify-center">
            {/* Center ornament */}
            <div className="relative flex items-center gap-3">
              <div className="h-px w-16 md:w-32 bg-gradient-to-r from-transparent to-[#697184]/20"></div>
              <div className="flex items-center gap-2">
                <div className="w-1.5 h-1.5 rounded-full bg-[#D8CFD0]"></div>
                <div className="w-2 h-2 rounded-full bg-[#697184]/30"></div>
                <div className="w-1.5 h-1.5 rounded-full bg-[#B1A6A4]"></div>
              </div>
              <div className="h-px w-16 md:w-32 bg-gradient-to-l from-transparent to-[#697184]/20"></div>
            </div>
          </div>
        </div>
      </div>

      {/* CTA Section - Elegant Wave Design */}
      <section className="relative py-32 md:py-40 overflow-hidden bg-gradient-to-b from-[#F2F1EF]/30 via-white/90 to-[#B1A6A4]/10">
        {/* Elegant flowing waves background */}
        <div className="absolute inset-0">
          {/* Wave layer 1 - Bottom flowing curve */}
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

          {/* Wave layer 2 - Middle flowing curve */}
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

          {/* Wave layer 3 - Top flowing curve */}
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

          {/* Decorative floating circles */}
          <div className="absolute top-20 left-[15%] w-2 h-2 rounded-full bg-[#697184] opacity-20"></div>
          <div className="absolute top-[30%] right-[20%] w-3 h-3 rounded-full bg-[#D8CFD0] opacity-25"></div>
          <div className="absolute bottom-[40%] left-[25%] w-1.5 h-1.5 rounded-full bg-[#B1A6A4] opacity-20"></div>
          <div className="absolute top-[45%] right-[35%] w-2.5 h-2.5 rounded-full bg-[#697184] opacity-15"></div>

          {/* Subtle curved line accents */}
          <div
            className="absolute top-[25%] left-0 w-full h-px bg-[#697184] opacity-5"
            style={{ transform: "rotate(2deg)" }}
          ></div>
          <div
            className="absolute top-[65%] right-0 w-full h-px bg-[#B1A6A4] opacity-5"
            style={{ transform: "rotate(-1deg)" }}
          ></div>
        </div>

        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-5xl mx-auto">
            {/* Premium Glass Card */}
            <div className="relative bg-white/70 backdrop-blur-2xl rounded-[2.5rem] p-12 md:p-16 lg:p-20 shadow-[0_20px_70px_-15px_rgba(105,113,132,0.12)] border border-[#697184]/10 overflow-hidden">
              {/* Subtle inner accents */}
              <div className="absolute top-0 right-0 w-48 h-48 bg-[#D8CFD0] opacity-5 rounded-full blur-3xl"></div>
              <div className="absolute bottom-0 left-0 w-48 h-48 bg-[#697184] opacity-5 rounded-full blur-3xl"></div>

              <div className="relative z-10">
                {/* Badge */}
                <div className="flex justify-center mb-10">
                  <div className="inline-flex items-center gap-2.5 px-7 py-3.5 rounded-full bg-white/80 backdrop-blur-md border border-[#697184]/20 shadow-sm">
                    <div className="flex items-center gap-1.5">
                      <div className="w-1.5 h-1.5 bg-[#697184] rounded-full animate-pulse"></div>
                      <div
                        className="w-1.5 h-1.5 bg-[#697184] opacity-40 rounded-full animate-pulse"
                        style={{ animationDelay: "0.2s" }}
                      ></div>
                    </div>
                    <span className="text-[11px] font-bold text-[#413F3D] uppercase tracking-[0.25em]">
                      Let&apos;s Work Together
                    </span>
                  </div>
                </div>

                {/* Heading */}
                <div className="text-center mb-12">
                  <h2 className="text-4xl md:text-5xl lg:text-6xl font-semibold mb-6 text-[#413F3D] leading-[1.1] tracking-tight">
                    Transform Your Business
                    <span className="block mt-2 font-normal">
                      Starting Today
                    </span>
                  </h2>
                  <p className="text-lg md:text-xl text-[#413F3D]/70 font-light leading-relaxed max-w-2xl mx-auto">
                    Join forward-thinking companies that trust us to streamline
                    their operations
                  </p>
                </div>

                {/* CTA Button */}
                <div className="flex justify-center mb-16">
                  <Link
                    href="/contact"
                    className="group relative inline-flex items-center gap-3 bg-gradient-to-r from-[#697184] via-[#413F3D] to-[#697184] text-white px-12 py-5 rounded-2xl font-semibold text-base overflow-hidden transition-all duration-500 hover:shadow-[0_20px_50px_-15px_rgba(105,113,132,0.4)] hover:-translate-y-1"
                  >
                    <span className="relative z-10 flex items-center gap-3">
                      Book Discovery Call
                      <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" />
                    </span>
                  </Link>
                </div>

                {/* Benefits */}
                <div className="grid md:grid-cols-3 gap-6 max-w-4xl mx-auto">
                  <div className="flex items-center justify-center gap-3 text-[#413F3D]/80">
                    <CheckCircle
                      className="w-5 h-5 text-[#697184] flex-shrink-0"
                      strokeWidth={2}
                    />
                    <span className="text-sm font-medium">
                      No commitment required
                    </span>
                  </div>
                  <div className="flex items-center justify-center gap-3 text-[#413F3D]/80">
                    <CheckCircle
                      className="w-5 h-5 text-[#697184] flex-shrink-0"
                      strokeWidth={2}
                    />
                    <span className="text-sm font-medium">
                      Response within 24 hours
                    </span>
                  </div>
                  <div className="flex items-center justify-center gap-3 text-[#413F3D]/80">
                    <CheckCircle
                      className="w-5 h-5 text-[#D8CFD0] flex-shrink-0"
                      strokeWidth={2}
                    />
                    <span className="text-sm font-medium">
                      Free discovery call
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
