import Link from "next/link";
import {
  Mail,
  Linkedin,
  Twitter,
  Instagram,
  Phone,
  ArrowRight,
} from "lucide-react";

export default function Footer() {
  return (
    <footer className="relative bg-gradient-to-br from-primary-900/98 via-accent-900/95 to-primary-800/98 text-white overflow-hidden">
      {/* Elegant background effects */}
      <div className="absolute inset-0">
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-gradient-radial from-accent-400/15 to-transparent blur-3xl" />
        <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-gradient-radial from-primary-400/10 to-transparent blur-3xl" />
        <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black/10" />
      </div>

      {/* Main Footer Content */}
      <div className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Top Section */}
        <div className="py-12 md:py-16 border-b border-white/10">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-8 lg:gap-12">
            <div className="lg:col-span-5">
              <Link
                href="/"
                className="inline-flex items-center gap-3 mb-6 group"
              >
                <svg
                  width="35"
                  height="35"
                  viewBox="0 0 60 50"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  className="transition-transform group-hover:scale-110 duration-300"
                >
                  {/* Simple V icon */}
                  <path
                    d="M0 0 L20 0 L30 50 Z"
                    fill="white"
                    className="opacity-90 group-hover:opacity-100 transition-opacity"
                  />
                  <path
                    d="M40 0 L60 0 L30 50 Z"
                    fill="white"
                    className="opacity-90 group-hover:opacity-100 transition-opacity"
                  />
                </svg>
                <div className="flex flex-col">
                  <span className="text-xl font-normal text-white tracking-tight">
                    VirtuServe
                  </span>
                  <span className="text-[9px] font-light text-gray-400 tracking-[0.3em] uppercase -mt-0.5">
                    Excellence Delivered
                  </span>
                </div>
              </Link>
              <p className="text-gray-400/90 text-sm leading-relaxed mb-6 max-w-sm">
                Professional virtual assistant services designed to elevate your
                business operations with precision and care.
              </p>
              {/* Social Links */}
              <div className="flex gap-3">
                <a
                  href="#"
                  className="group w-10 h-10 rounded-xl bg-white/5 backdrop-blur-sm border border-white/10 hover:bg-white/10 hover:border-white/20 flex items-center justify-center transition-all duration-300 hover:-translate-y-1"
                  aria-label="LinkedIn"
                >
                  <Linkedin
                    size={18}
                    className="text-gray-400/80 group-hover:text-white transition-colors"
                  />
                </a>
                <a
                  href="#"
                  className="group w-10 h-10 rounded-xl bg-white/5 backdrop-blur-sm border border-white/10 hover:bg-white/10 hover:border-white/20 flex items-center justify-center transition-all duration-300 hover:-translate-y-1"
                  aria-label="Twitter"
                >
                  <Twitter
                    size={18}
                    className="text-gray-400/80 group-hover:text-white transition-colors"
                  />
                </a>
                <a
                  href="#"
                  className="group w-10 h-10 rounded-xl bg-white/5 backdrop-blur-sm border border-white/10 hover:bg-white/10 hover:border-white/20 flex items-center justify-center transition-all duration-300 hover:-translate-y-1"
                  aria-label="Instagram"
                >
                  <Instagram
                    size={18}
                    className="text-gray-400/80 group-hover:text-white transition-colors"
                  />
                </a>
              </div>
            </div>

            {/* Navigation Columns */}
            <div className="lg:col-span-2">
              <h4 className="text-xs font-medium text-white/90 mb-4 tracking-wider uppercase">
                Quick Links
              </h4>
              <ul className="space-y-3">
                {[
                  { href: "/services", label: "Our Services" },
                  { href: "/about", label: "About Us" },
                  { href: "/contact", label: "Book Discovery Call" },
                  { href: "/faq", label: "FAQ" },
                ].map((link) => (
                  <li key={link.href}>
                    <Link
                      href={link.href}
                      className="text-gray-400 hover:text-white transition-colors text-sm inline-flex items-center gap-2 group"
                    >
                      <ArrowRight
                        size={14}
                        className="opacity-0 -ml-5 group-hover:opacity-100 group-hover:ml-0 transition-all"
                      />
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            <div className="lg:col-span-2">
              <h4 className="text-xs font-medium text-white/90 mb-4 tracking-wider uppercase">
                Resources
              </h4>
              <ul className="space-y-3">
                {[
                  { href: "/services#pricing", label: "Pricing Plans" },
                  { href: "/about#values", label: "Why Choose Us" },
                  { href: "/services#how-it-works", label: "How It Works" },
                  { href: "/privacy", label: "Privacy & Security" },
                ].map((link) => (
                  <li key={link.label}>
                    <Link
                      href={link.href}
                      className="text-gray-400 hover:text-white transition-colors text-sm inline-flex items-center gap-2 group"
                    >
                      <ArrowRight
                        size={14}
                        className="opacity-0 -ml-5 group-hover:opacity-100 group-hover:ml-0 transition-all"
                      />
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            <div className="lg:col-span-3">
              <h4 className="text-xs font-medium text-white/90 mb-4 tracking-wider uppercase">
                Get In Touch
              </h4>
              <div className="space-y-3">
                <a
                  href="mailto:hello@virtuserve.com"
                  className="text-gray-400 hover:text-white transition-colors text-sm flex items-start gap-3 group"
                >
                  <Mail
                    size={18}
                    className="flex-shrink-0 mt-0.5 group-hover:text-accent-400 transition-colors"
                  />
                  <span className="break-all">hello@virtuserve.com</span>
                </a>
                <a
                  href="tel:+27828997062"
                  className="text-gray-400 hover:text-white transition-colors text-sm flex items-center gap-3 group"
                >
                  <Phone
                    size={18}
                    className="flex-shrink-0 group-hover:text-accent-400 transition-colors"
                  />
                  <span>+27 82 899 7062</span>
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="py-6">
          <div className="flex flex-col sm:flex-row justify-between items-center gap-4 text-sm">
            <p className="text-gray-400">
              &copy; 2026 VirtuServe. All rights reserved.
            </p>
            <div className="flex gap-6">
              <Link
                href="/privacy"
                className="text-gray-400 hover:text-white transition-colors"
              >
                Privacy Policy
              </Link>
              <Link
                href="/terms"
                className="text-gray-400 hover:text-white transition-colors"
              >
                Terms of Service
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
