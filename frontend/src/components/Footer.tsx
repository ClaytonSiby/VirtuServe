import Link from "next/link";
import {
  Mail,
  Linkedin,
  Facebook,
  Instagram,
  Phone,
  ArrowRight,
} from "lucide-react";

export default function Footer() {
  return (
    <footer className="relative bg-[#413F3D] text-white overflow-hidden">
      {/* Sophisticated wave background */}
      <div className="absolute inset-0">
        {/* Top wave layer */}
        <div className="absolute top-0 left-0 right-0 h-[200px]">
          <svg
            className="absolute top-0 w-full h-full"
            viewBox="0 0 1440 200"
            preserveAspectRatio="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M0,80 C320,20 480,60 720,40 C960,20 1120,80 1440,60 L1440,0 L0,0 Z"
              fill="#697184"
              fillOpacity="0.3"
            />
          </svg>
        </div>

        {/* Second wave layer */}
        <div className="absolute top-0 left-0 right-0 h-[150px]">
          <svg
            className="absolute top-0 w-full h-full"
            viewBox="0 0 1440 150"
            preserveAspectRatio="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M0,60 C360,10 540,50 720,30 C900,10 1080,70 1440,50 L1440,0 L0,0 Z"
              fill="#B1A6A4"
              fillOpacity="0.15"
            />
          </svg>
        </div>

        {/* Subtle decorative elements */}
        <div className="absolute top-16 right-20 w-3 h-3 rounded-full bg-[#D8CFD0] opacity-20"></div>
        <div className="absolute top-32 right-40 w-2 h-2 rounded-full bg-[#F2F1EF] opacity-15"></div>
        <div className="absolute top-24 left-32 w-2.5 h-2.5 rounded-full bg-[#B1A6A4] opacity-20"></div>

        {/* Elegant accent lines */}
        <div className="absolute top-40 left-0 w-48 h-px bg-white opacity-5 rotate-12"></div>
        <div className="absolute bottom-40 right-0 w-64 h-px bg-white opacity-5 -rotate-6"></div>
      </div>

      {/* Main Footer Content */}
      <div className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Top Section */}
        <div className="py-16 md:py-20 border-b border-white/10">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 lg:gap-16">
            <div className="lg:col-span-5 space-y-6">
              <Link href="/" className="inline-flex items-center gap-3 group">
                <svg
                  width="60"
                  height="60"
                  viewBox="0 0 60 50"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  className="transition-transform group-hover:scale-110 duration-300 drop-shadow-2xl"
                >
                  {/* V icon with color palette */}
                  <path
                    d="M0 0 L20 0 L30 50 Z"
                    fill="#B1A6A4"
                    className="opacity-90 group-hover:opacity-100 transition-opacity"
                  />
                  <path
                    d="M40 0 L60 0 L30 50 Z"
                    fill="#f8f9fa"
                    className="opacity-90 group-hover:opacity-100 transition-opacity"
                  />
                </svg>
                <div className="flex flex-col">
                  <span className="text-3xl font-semibold text-white tracking-tight">
                    VirtuServe
                  </span>
                  <span className="text-xs font-medium text-[#D8CFD0] tracking-[0.3em] uppercase -mt-0.5">
                    Excellence Delivered
                  </span>
                </div>
              </Link>
              <p className="text-gray-300 text-base leading-relaxed max-w-md">
                Professional virtual assistant services designed to elevate your
                business operations with precision and care.
              </p>
              {/* Social Links */}
              <div className="flex gap-3">
                <a
                  href="#"
                  className="group w-11 h-11 rounded-2xl bg-white/5 backdrop-blur-sm border border-white/10 hover:bg-[#697184] hover:border-[#697184] flex items-center justify-center transition-all duration-300 hover:-translate-y-1 hover:shadow-lg hover:shadow-[#697184]/20"
                  aria-label="LinkedIn"
                >
                  <Linkedin
                    size={19}
                    className="text-gray-300 group-hover:text-white transition-colors"
                  />
                </a>
                <a
                  href="#"
                  className="group w-11 h-11 rounded-2xl bg-white/5 backdrop-blur-sm border border-white/10 hover:bg-[#697184] hover:border-[#697184] flex items-center justify-center transition-all duration-300 hover:-translate-y-1 hover:shadow-lg hover:shadow-[#697184]/20"
                  aria-label="Facebook"
                >
                  <Facebook
                    size={19}
                    className="text-gray-300 group-hover:text-white transition-colors"
                  />
                </a>
                <a
                  href="#"
                  className="group w-11 h-11 rounded-2xl bg-white/5 backdrop-blur-sm border border-white/10 hover:bg-[#697184] hover:border-[#697184] flex items-center justify-center transition-all duration-300 hover:-translate-y-1 hover:shadow-lg hover:shadow-[#697184]/20"
                  aria-label="Instagram"
                >
                  <Instagram
                    size={19}
                    className="text-gray-300 group-hover:text-white transition-colors"
                  />
                </a>
              </div>
            </div>

            {/* Navigation Columns */}
            <div className="lg:col-span-2">
              <h4 className="text-sm font-bold text-white/90 mb-5 tracking-[0.15em] uppercase">
                Quick Links
              </h4>
              <ul className="space-y-3.5">
                {[
                  { href: "/services", label: "Our Services" },
                  { href: "/about", label: "About Us" },
                  { href: "/contact", label: "Book Discovery Call" },
                  { href: "/faq", label: "FAQ" },
                ].map((link) => (
                  <li key={link.href}>
                    <Link
                      href={link.href}
                      className="text-gray-300 hover:text-white transition-all duration-300 text-base inline-flex items-center gap-2 group"
                    >
                      <ArrowRight
                        size={16}
                        className="opacity-0 -ml-6 group-hover:opacity-100 group-hover:ml-0 transition-all text-[#D8CFD0]"
                      />
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            <div className="lg:col-span-2">
              <h4 className="text-sm font-bold text-white/90 mb-5 tracking-[0.15em] uppercase">
                Resources
              </h4>
              <ul className="space-y-3.5">
                {[
                  { href: "/services#pricing", label: "Pricing Plans" },
                  { href: "/about#values", label: "Why Choose Us" },
                  { href: "/services#how-it-works", label: "How It Works" },
                  { href: "/privacy", label: "Privacy & Security" },
                ].map((link) => (
                  <li key={link.label}>
                    <Link
                      href={link.href}
                      className="text-gray-300 hover:text-white transition-all duration-300 text-base inline-flex items-center gap-2 group"
                    >
                      <ArrowRight
                        size={16}
                        className="opacity-0 -ml-6 group-hover:opacity-100 group-hover:ml-0 transition-all text-[#D8CFD0]"
                      />
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            <div className="lg:col-span-3">
              <h4 className="text-sm font-bold text-white/90 mb-5 tracking-[0.15em] uppercase">
                Get In Touch
              </h4>
              <div className="space-y-4">
                <a
                  href="mailto:hello@virtuserve.com"
                  className="text-gray-300 hover:text-white transition-colors text-base flex items-start gap-3 group"
                >
                  <div className="w-10 h-10 rounded-xl bg-white/5 border border-white/10 group-hover:bg-[#697184] group-hover:border-[#697184] flex items-center justify-center flex-shrink-0 transition-all duration-300">
                    <Mail
                      size={18}
                      className="group-hover:text-white transition-colors"
                    />
                  </div>
                  <div className="flex flex-col gap-1 pt-1">
                    <span className="text-xs text-gray-400 uppercase tracking-wider">
                      Email
                    </span>
                    <span className="break-all">hello@virtuserve.com</span>
                  </div>
                </a>
                <a
                  href="tel:+27828997062"
                  className="text-gray-300 hover:text-white transition-colors text-base flex items-start gap-3 group"
                >
                  <div className="w-10 h-10 rounded-xl bg-white/5 border border-white/10 group-hover:bg-[#697184] group-hover:border-[#697184] flex items-center justify-center flex-shrink-0 transition-all duration-300">
                    <Phone
                      size={18}
                      className="group-hover:text-white transition-colors"
                    />
                  </div>
                  <div className="flex flex-col gap-1 pt-1">
                    <span className="text-xs text-gray-400 uppercase tracking-wider">
                      Phone
                    </span>
                    <span>+27 82 899 7062</span>
                  </div>
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="py-8">
          <div className="flex flex-col sm:flex-row justify-between items-center gap-4">
            <p className="text-gray-400 text-sm">
              &copy; 2026 VirtuServe. All rights reserved.
            </p>
            <div className="flex gap-8">
              <Link
                href="/privacy"
                className="text-gray-400 hover:text-white transition-colors text-sm"
              >
                Privacy Policy
              </Link>
              <Link
                href="/terms"
                className="text-gray-400 hover:text-white transition-colors text-sm"
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
