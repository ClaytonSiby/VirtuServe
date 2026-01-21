"use client";

import React from "react";
import Link from "next/link";
import { useState, useEffect } from "react";
import { usePathname } from "next/navigation";
import { Menu, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

export default function Navigation() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <React.Fragment>
      <motion.nav
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className="fixed top-0 left-0 right-0 z-50"
      >
        <div
          className={`transition-all duration-300 ${
            scrolled
              ? "bg-white/80 backdrop-blur-xl border-b border-[#697184]/10 shadow-lg"
              : "bg-white/60 backdrop-blur-md shadow-md"
          }`}
        >
          <div className="container mx-auto px-4">
            <div className="flex items-center h-20">
              {/* Logo - Client Selected Design */}
              <Link href="/" className="flex items-center gap-3 group">
                <motion.div
                  whileHover={{ scale: 1.05 }}
                  transition={{ duration: 0.4, ease: "easeOut" }}
                  className="relative"
                >
                  <svg
                    width="56"
                    height="56"
                    viewBox="0 0 60 50"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    className="drop-shadow-lg"
                  >
                    {/* V icon with color palette */}
                    <path
                      d="M0 0 L20 0 L30 50 Z"
                      fill="#697184"
                      className="group-hover:opacity-90 transition-opacity duration-300"
                    />
                    <path
                      d="M40 0 L60 0 L30 50 Z"
                      fill="#413F3D"
                      className="group-hover:opacity-90 transition-opacity duration-300"
                    />
                  </svg>
                </motion.div>
                <div className="flex flex-col">
                  <span className="text-3xl font-semibold bg-gradient-to-r from-[#697184] via-[#413F3D] to-[#697184] bg-clip-text text-transparent tracking-tight">
                    VirtuServe
                  </span>
                  <span className="text-[11px] font-medium text-[#B1A6A4] tracking-[0.3em] uppercase -mt-0.5">
                    Excellence Delivered
                  </span>
                </div>
              </Link>

              {/* Desktop Navigation - Centered */}
              <div className="hidden md:flex items-center gap-2 flex-1 justify-center">
                {[
                  { href: "/", label: "Home" },
                  { href: "/services", label: "Services" },
                  { href: "/about", label: "About" },
                  { href: "/faq", label: "FAQ" },
                  { href: "/contact", label: "Contact" },
                ].map((item) => {
                  const isActive = pathname === item.href;
                  return (
                    <Link key={item.href} href={item.href}>
                      <motion.div
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        className={`relative transition-all px-5 py-2.5 rounded-full font-medium group ${
                          isActive
                            ? "text-[#697184]"
                            : "text-[#413F3D] hover:text-[#697184]"
                        }`}
                      >
                        {item.label}
                        <motion.div
                          className={`absolute bottom-1 left-1/2 transform -translate-x-1/2 h-0.5 bg-gradient-to-r from-[#697184] via-[#413F3D] to-[#697184] transition-all duration-300 rounded-full ${
                            isActive ? "w-3/4" : "w-0 group-hover:w-3/4"
                          }`}
                        />
                      </motion.div>
                    </Link>
                  );
                })}
              </div>

              {/* Get Started Button - Right Side */}
              <div className="hidden md:block">
                <Link href="/contact">
                  <motion.div
                    whileHover={{ scale: 1.05, y: -2 }}
                    whileTap={{ scale: 0.95 }}
                    className="relative group bg-gradient-to-br from-[#697184] via-[#413F3D] to-[#697184] text-white px-8 py-3 rounded-full font-semibold overflow-hidden shadow-lg hover:shadow-xl hover:shadow-[#697184]/30 transition-all duration-300"
                  >
                    <span className="relative z-10 flex items-center gap-2">
                      Get Started
                    </span>
                    <div className="absolute inset-0 bg-gradient-to-r from-[#413F3D] via-[#697184] to-[#413F3D] opacity-0 group-hover:opacity-100 transition-opacity"></div>
                  </motion.div>
                </Link>
              </div>

              {/* Mobile Menu Button */}
              <motion.button
                whileTap={{ scale: 0.9 }}
                onClick={() => setIsOpen(!isOpen)}
                className="md:hidden text-gray-700 p-2 hover:bg-accent-100 rounded-xl transition ml-auto"
              >
                {isOpen ? <X size={24} /> : <Menu size={24} />}
              </motion.button>
            </div>
          </div>
        </div>
      </motion.nav>

      {/* Mobile Navigation - Side Drawer */}
      <AnimatePresence>
        {isOpen && (
          <>
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3 }}
              className="fixed inset-0 bg-black/50 backdrop-blur-sm z-[60]"
              onClick={() => setIsOpen(false)}
            />

            {/* Side Drawer */}
            <motion.div
              initial={{ x: "-100%" }}
              animate={{ x: 0 }}
              exit={{ x: "-100%" }}
              transition={{ duration: 0.3, ease: "easeInOut" }}
              className="fixed top-0 left-0 bottom-0 w-80 max-w-[85vw] bg-gradient-to-br from-[#F2F1EF]/95 via-[#D8CFD0]/90 to-[#F2F1EF]/95 backdrop-blur-md shadow-2xl z-[70] overflow-y-auto"
            >
              {/* Drawer Header */}
              <div className="p-6 border-b border-gray-200">
                <div className="flex items-center justify-between">
                  <Link
                    href="/"
                    className="flex items-center gap-3"
                    onClick={() => setIsOpen(false)}
                  >
                    <svg
                      width="45"
                      height="45"
                      viewBox="0 0 60 50"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                      className="drop-shadow-lg"
                    >
                      <path d="M0 0 L20 0 L30 50 Z" fill="#697184" />
                      <path d="M40 0 L60 0 L30 50 Z" fill="#413F3D" />
                    </svg>
                    <div className="flex flex-col">
                      <span className="text-2xl font-semibold bg-gradient-to-r from-[#697184] via-[#413F3D] to-[#697184] bg-clip-text text-transparent tracking-tight">
                        VirtuServe
                      </span>
                      <span className="text-[10px] font-medium text-[#B1A6A4] tracking-[0.3em] uppercase -mt-0.5">
                        Excellence Delivered
                      </span>
                    </div>
                  </Link>
                  <button
                    type="button"
                    onClick={() => setIsOpen(false)}
                    className="p-2 hover:bg-gray-100 rounded-xl transition"
                    aria-label="Close menu"
                  >
                    <X size={24} className="text-gray-700" />
                  </button>
                </div>
              </div>

              {/* Drawer Content */}
              <div className="py-6 px-4 space-y-2">
                {[
                  { href: "/", label: "Home" },
                  { href: "/services", label: "Services" },
                  { href: "/about", label: "About" },
                  { href: "/faq", label: "FAQ" },
                  { href: "/contact", label: "Contact Us" },
                ].map((item, index) => {
                  const isActive = pathname === item.href;
                  return (
                    <motion.div
                      key={item.href}
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: index * 0.1 }}
                    >
                      <Link
                        href={item.href}
                        className={`block transition px-4 py-3 rounded-xl font-light text-lg ${
                          isActive
                            ? "text-[#697184] font-semibold"
                            : "text-gray-700 hover:text-[#697184] hover:bg-[#D8CFD0]/20"
                        }`}
                        onClick={() => setIsOpen(false)}
                      >
                        {item.label}
                      </Link>
                    </motion.div>
                  );
                })}
                <motion.div
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.4 }}
                  className="pt-4"
                >
                  <Link
                    href="/contact"
                    className="block bg-gradient-to-br from-[#697184] via-[#413F3D] to-[#697184] text-white text-center px-4 py-3 rounded-xl font-semibold shadow-lg hover:shadow-xl transition-all"
                    onClick={() => setIsOpen(false)}
                  >
                    Get Started
                  </Link>
                </motion.div>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </React.Fragment>
  );
}
