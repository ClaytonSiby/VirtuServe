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
      {/* Main Footer Content */}
      <div className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Top Section */}
        <div className="py-16 md:py-20 border-b border-white/10">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 lg:gap-16">
            <div className="lg:col-span-5 space-y-6">
              <Link href="/" className="inline-flex items-end gap-1.5 group">
                <svg
                  width="48"
                  height="48"
                  viewBox="0 0 60 50"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  className="transition-transform group-hover:scale-105 duration-300 drop-shadow-xl mb-1"
                >
                  {/* V icon with color palette */}
                  <path
                    d="M0 0 L20 0 L30 50 Z"
                    fill="#697184"
                    className="opacity-95 group-hover:opacity-100 transition-opacity"
                  />
                  <path
                    d="M40 0 L60 0 L30 50 Z"
                    fill="#F2F1EF"
                    className="opacity-95 group-hover:opacity-100 transition-opacity"
                  />
                </svg>
                <div className="flex flex-col pb-1">
                  <span
                    className="text-[36px] md:text-[40px] leading-none"
                    style={{
                      fontFamily: "Georgia, serif",
                      fontWeight: 400,
                      color: "#F2F1EF",
                      letterSpacing: "-0.05em",
                    }}
                  >
                    irtuServe
                  </span>
                  <span
                    className="text-[9px] font-light text-[#B1A6A4] tracking-[0.4em] uppercase mt-1 opacity-90"
                    style={{ fontFamily: "Arial, Helvetica, sans-serif" }}
                  >
                    EXCELLENCE DELIVERED
                  </span>
                </div>
              </Link>
              <p className="text-gray-300 text-[15px] leading-[1.7] max-w-md font-light">
                Professional virtual assistant services designed to elevate your
                business operations with precision and care.
              </p>
              {/* Social Links */}
              <div className="flex gap-3">
                <a
                  href="https://www.linkedin.com/company/virtuserve-professional-virtual-assistance/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group w-11 h-11 rounded-2xl bg-white/5 backdrop-blur-sm border border-white/10 hover:bg-[#697184] hover:border-[#697184] flex items-center justify-center transition-all duration-300 hover:-translate-y-1 hover:shadow-lg hover:shadow-[#697184]/20"
                  aria-label="Follow us on LinkedIn"
                >
                  <Linkedin
                    size={19}
                    className="text-gray-300 group-hover:text-white transition-colors"
                  />
                </a>
                <a
                  href="https://www.facebook.com/share/17xb1hXBjv/?mibextid=wwXIfr"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group w-11 h-11 rounded-2xl bg-white/5 backdrop-blur-sm border border-white/10 hover:bg-[#697184] hover:border-[#697184] flex items-center justify-center transition-all duration-300 hover:-translate-y-1 hover:shadow-lg hover:shadow-[#697184]/20"
                  aria-label="Follow us on Facebook"
                >
                  <Facebook
                    size={19}
                    className="text-gray-300 group-hover:text-white transition-colors"
                  />
                </a>
                <a
                  href="https://www.instagram.com/virtu.serve_?igsh=MWdneHA0aGpoYTNwaw=="
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group w-11 h-11 rounded-2xl bg-white/5 backdrop-blur-sm border border-white/10 hover:bg-[#697184] hover:border-[#697184] flex items-center justify-center transition-all duration-300 hover:-translate-y-1 hover:shadow-lg hover:shadow-[#697184]/20"
                  aria-label="Follow us on Instagram"
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
              <h4 className="text-[11px] font-bold text-white mb-5 tracking-[0.2em] uppercase">
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
              <h4 className="text-[11px] font-bold text-white mb-5 tracking-[0.2em] uppercase">
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
              <h4 className="text-[11px] font-bold text-white mb-5 tracking-[0.2em] uppercase">
                Get In Touch
              </h4>
              <div className="space-y-4">
                <a
                  href="mailto:info@virtuserveva.com"
                  className="text-gray-300 hover:text-white transition-colors text-[15px] font-light flex items-start gap-3 group"
                >
                  <div className="w-10 h-10 rounded-xl bg-white/5 border border-white/10 group-hover:bg-[#697184] group-hover:border-[#697184] flex items-center justify-center flex-shrink-0 transition-all duration-300">
                    <Mail
                      size={18}
                      className="group-hover:text-white transition-colors"
                    />
                  </div>
                  <div className="flex flex-col gap-1 pt-1">
                    <span className="text-[10px] text-gray-400 uppercase tracking-[0.15em] font-semibold">
                      Email
                    </span>
                    <span className="break-all">info@virtuserveva.com</span>
                  </div>
                </a>
                <a
                  href="tel:+27828997062"
                  className="text-gray-300 hover:text-white transition-colors text-[15px] font-light flex items-start gap-3 group"
                >
                  <div className="w-10 h-10 rounded-xl bg-white/5 border border-white/10 group-hover:bg-[#697184] group-hover:border-[#697184] flex items-center justify-center flex-shrink-0 transition-all duration-300">
                    <Phone
                      size={18}
                      className="group-hover:text-white transition-colors"
                    />
                  </div>
                  <div className="flex flex-col gap-1 pt-1">
                    <span className="text-[10px] text-gray-400 uppercase tracking-[0.15em] font-semibold">
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
            <p className="text-gray-400 text-[13px] font-light">
              &copy; 2026 VirtuServe. All rights reserved.
            </p>
            <div className="flex gap-8">
              <Link
                href="/privacy"
                className="text-gray-400 hover:text-white transition-colors text-[13px] font-light"
              >
                Privacy Policy
              </Link>
              <Link
                href="/terms"
                className="text-gray-400 hover:text-white transition-colors text-[13px] font-light"
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
