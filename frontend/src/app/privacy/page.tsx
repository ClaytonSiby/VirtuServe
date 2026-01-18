import type { Metadata } from "next";
import { Shield, Lock, Eye, Database, Mail, Calendar } from "lucide-react";
import Link from "next/link";
import PageContainer from "@/components/ui/PageContainer";

export const metadata: Metadata = {
  title: "Privacy Policy | VirtuServe",
  description:
    "Learn how VirtuServe collects, uses, and protects your personal information. Our commitment to your privacy and data security.",
};

export default function Privacy() {
  const lastUpdated = "January 18, 2026";

  return (
    <main className="min-h-screen bg-gradient-to-b from-primary-50 via-white to-primary-50/50">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-primary-900/95 via-accent-900/90 to-primary-800/95 text-white py-24 md:py-32 overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute top-0 left-1/4 w-[500px] h-[500px] bg-gradient-radial from-accent-400/20 to-transparent blur-3xl"></div>
          <div className="absolute bottom-0 right-1/4 w-[500px] h-[500px] bg-gradient-radial from-primary-400/15 to-transparent blur-3xl"></div>
          <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-white/5"></div>
        </div>
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-md border border-white/20 rounded-full px-4 py-2 mb-6">
            <Shield className="w-4 h-4 text-white/90" />
            <span className="text-xs font-light text-white/90 uppercase tracking-wider">
              Legal
            </span>
          </div>
          <h1 className="text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-light mb-6 leading-tight">
            Privacy Policy
          </h1>
          <p className="lead max-w-3xl mx-auto text-white/85 leading-relaxed">
            Your privacy and data security are our top priorities
          </p>
          <p className="text-sm text-white/70 mt-6">
            Last updated: {lastUpdated}
          </p>
        </div>
      </section>

      {/* Content */}
      <section className="py-20 md:py-32">
        <PageContainer>
          <div className="max-w-4xl mx-auto">
            {/* Introduction */}
            <div className="bg-gradient-to-br from-white to-primary-50/30 border border-primary-200/60 rounded-3xl p-8 md:p-10 mb-8 shadow-sm">
              <div className="flex items-start gap-4 mb-6">
                <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-accent-100 to-primary-100 flex items-center justify-center border border-accent-200 flex-shrink-0">
                  <Shield className="w-6 h-6 text-accent-600" />
                </div>
                <div>
                  <h2 className="text-2xl font-light text-primary-900 mb-3">
                    Introduction
                  </h2>
                  <p className="text-gray-700 leading-relaxed">
                    At VirtuServe, we are committed to protecting your privacy
                    and ensuring the security of your personal information. This
                    Privacy Policy explains how we collect, use, disclose, and
                    safeguard your information when you use our virtual
                    assistant services.
                  </p>
                </div>
              </div>
            </div>

            {/* Information We Collect */}
            <div className="bg-gradient-to-br from-white to-primary-50/30 border border-primary-200/60 rounded-3xl p-8 md:p-10 mb-8 shadow-sm">
              <div className="flex items-start gap-4 mb-6">
                <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-accent-100 to-primary-100 flex items-center justify-center border border-accent-200 flex-shrink-0">
                  <Database className="w-6 h-6 text-accent-600" />
                </div>
                <div className="flex-1">
                  <h2 className="text-2xl font-light text-primary-900 mb-6">
                    Information We Collect
                  </h2>
                  <div className="space-y-6">
                    <div>
                      <h3 className="text-lg font-medium text-primary-900 mb-3">
                        Personal Information
                      </h3>
                      <ul className="space-y-2 text-gray-700">
                        <li className="flex items-start gap-2">
                          <span className="text-accent-600 mt-1">•</span>
                          <span>
                            Name and contact information (email, phone number)
                          </span>
                        </li>
                        <li className="flex items-start gap-2">
                          <span className="text-accent-600 mt-1">•</span>
                          <span>Company name and business information</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <span className="text-accent-600 mt-1">•</span>
                          <span>Payment and billing information</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <span className="text-accent-600 mt-1">•</span>
                          <span>Communication preferences</span>
                        </li>
                      </ul>
                    </div>
                    <div>
                      <h3 className="text-lg font-medium text-primary-900 mb-3">
                        Service Data
                      </h3>
                      <ul className="space-y-2 text-gray-700">
                        <li className="flex items-start gap-2">
                          <span className="text-accent-600 mt-1">•</span>
                          <span>
                            Information you provide for task completion
                          </span>
                        </li>
                        <li className="flex items-start gap-2">
                          <span className="text-accent-600 mt-1">•</span>
                          <span>Files, documents, and correspondence</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <span className="text-accent-600 mt-1">•</span>
                          <span>Calendar and scheduling information</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <span className="text-accent-600 mt-1">•</span>
                          <span>Service usage and interaction data</span>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* How We Use Your Information */}
            <div className="bg-gradient-to-br from-white to-primary-50/30 border border-primary-200/60 rounded-3xl p-8 md:p-10 mb-8 shadow-sm">
              <div className="flex items-start gap-4 mb-6">
                <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-accent-100 to-primary-100 flex items-center justify-center border border-accent-200 flex-shrink-0">
                  <Eye className="w-6 h-6 text-accent-600" />
                </div>
                <div className="flex-1">
                  <h2 className="text-2xl font-light text-primary-900 mb-6">
                    How We Use Your Information
                  </h2>
                  <div className="space-y-4 text-gray-700">
                    <p className="leading-relaxed">
                      We use the information we collect to:
                    </p>
                    <ul className="space-y-2">
                      <li className="flex items-start gap-2">
                        <span className="text-accent-600 mt-1">•</span>
                        <span>
                          Provide, maintain, and improve our virtual assistant
                          services
                        </span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-accent-600 mt-1">•</span>
                        <span>
                          Process transactions and send related information
                        </span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-accent-600 mt-1">•</span>
                        <span>
                          Communicate with you about services, updates, and
                          promotions
                        </span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-accent-600 mt-1">•</span>
                        <span>
                          Respond to your inquiries and support requests
                        </span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-accent-600 mt-1">•</span>
                        <span>
                          Monitor and analyze usage patterns to improve user
                          experience
                        </span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-accent-600 mt-1">•</span>
                        <span>
                          Detect, prevent, and address technical issues or
                          security threats
                        </span>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>

            {/* Data Security */}
            <div className="bg-gradient-to-br from-white to-primary-50/30 border border-primary-200/60 rounded-3xl p-8 md:p-10 mb-8 shadow-sm">
              <div className="flex items-start gap-4 mb-6">
                <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-accent-100 to-primary-100 flex items-center justify-center border border-accent-200 flex-shrink-0">
                  <Lock className="w-6 h-6 text-accent-600" />
                </div>
                <div className="flex-1">
                  <h2 className="text-2xl font-light text-primary-900 mb-6">
                    Data Security
                  </h2>
                  <p className="text-gray-700 leading-relaxed mb-4">
                    We implement industry-standard security measures to protect
                    your personal information from unauthorized access,
                    disclosure, alteration, or destruction. These measures
                    include:
                  </p>
                  <ul className="space-y-2 text-gray-700">
                    <li className="flex items-start gap-2">
                      <span className="text-accent-600 mt-1">•</span>
                      <span>Encryption of data in transit and at rest</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-accent-600 mt-1">•</span>
                      <span>Regular security audits and assessments</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-accent-600 mt-1">•</span>
                      <span>
                        Strict access controls and authentication procedures
                      </span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-accent-600 mt-1">•</span>
                      <span>Secure data backup and recovery systems</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-accent-600 mt-1">•</span>
                      <span>
                        Employee training on data protection best practices
                      </span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>

            {/* Your Rights */}
            <div className="bg-gradient-to-br from-white to-primary-50/30 border border-primary-200/60 rounded-3xl p-8 md:p-10 mb-8 shadow-sm">
              <h2 className="text-2xl font-light text-primary-900 mb-6">
                Your Rights
              </h2>
              <div className="space-y-4 text-gray-700">
                <p className="leading-relaxed">You have the right to:</p>
                <ul className="space-y-2">
                  <li className="flex items-start gap-2">
                    <span className="text-accent-600 mt-1">•</span>
                    <span>Access and receive a copy of your personal data</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-accent-600 mt-1">•</span>
                    <span>
                      Request correction of inaccurate or incomplete information
                    </span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-accent-600 mt-1">•</span>
                    <span>Request deletion of your personal data</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-accent-600 mt-1">•</span>
                    <span>Opt-out of marketing communications</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-accent-600 mt-1">•</span>
                    <span>
                      Withdraw consent where processing is based on consent
                    </span>
                  </li>
                </ul>
              </div>
            </div>

            {/* Contact Us */}
            <div className="bg-gradient-to-br from-accent-50 to-primary-50 border border-accent-200/60 rounded-3xl p-8 md:p-10">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-accent-100 to-primary-100 flex items-center justify-center border border-accent-200 flex-shrink-0">
                  <Mail className="w-6 h-6 text-accent-600" />
                </div>
                <div>
                  <h2 className="text-2xl font-light text-primary-900 mb-3">
                    Contact Us
                  </h2>
                  <p className="text-gray-700 leading-relaxed mb-4">
                    If you have any questions about this Privacy Policy or how
                    we handle your personal information, please contact us:
                  </p>
                  <div className="space-y-2 text-gray-700">
                    <p>
                      <strong>Email:</strong>{" "}
                      <a
                        href="mailto:privacy@virtuserve.com"
                        className="text-accent-600 hover:text-accent-700 transition-colors"
                      >
                        privacy@virtuserve.com
                      </a>
                    </p>
                    <p>
                      <strong>Phone:</strong> +27 82 899 7062
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Back to Home */}
            <div className="mt-12 text-center">
              <Link
                href="/"
                className="inline-flex items-center gap-2 text-accent-600 hover:text-accent-700 font-medium transition-colors"
              >
                ← Back to Home
              </Link>
            </div>
          </div>
        </PageContainer>
      </section>
    </main>
  );
}
