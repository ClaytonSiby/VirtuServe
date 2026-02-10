import type { Metadata } from "next";
import { FileText, Scale, AlertCircle, CheckCircle, Mail } from "lucide-react";
import Link from "next/link";
import PageContainer from "@/components/ui/PageContainer";

export const metadata: Metadata = {
  title: "Terms of Service | VirtuServe",
  description:
    "Read VirtuServe's Terms of Service. Understand the terms and conditions governing the use of our virtual assistant services.",
};

export default function Terms() {
  const lastUpdated = "January 18, 2026";

  return (
    <main className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="relative pt-32 pb-20 md:pt-40 md:pb-28 overflow-hidden bg-gradient-to-br from-[#F8F7F5] via-[#F4F3F1] to-[#F2F1EF]">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <div className="inline-flex items-center gap-2 bg-[#D8CFD0]/30 backdrop-blur-md border border-[#697184]/20 rounded-full px-5 py-2.5 mb-6 shadow-lg">
            <Scale className="w-4 h-4 text-[#697184]" />
            <span className="text-xs font-semibold text-[#697184] uppercase tracking-[0.2em]">
              Legal
            </span>
          </div>
          <h1 className="text-6xl md:text-7xl lg:text-8xl font-extralight mb-6 text-[#413F3D] tracking-tighter leading-[0.95]">
            Terms of{" "}
            <span className="font-light italic text-[#697184]">Service</span>
          </h1>
          <p className="text-xl md:text-2xl text-[#413F3D]/80 max-w-3xl mx-auto leading-relaxed font-light">
            The terms and conditions governing our services
          </p>
          <p className="text-sm text-[#697184]/70 mt-6 font-medium">
            Last updated: {lastUpdated}
          </p>
        </div>
      </section>

      {/* Content */}
      <section className="py-20 md:py-32">
        <PageContainer>
          <div className="max-w-4xl mx-auto">
            {/* Agreement to Terms */}
            <div className="bg-white border border-primary-200/60 rounded-3xl p-8 md:p-10 mb-8 shadow-sm">
              <div className="flex items-start gap-4 mb-6">
                <div className="w-12 h-12 rounded-xl bg-accent-100 flex items-center justify-center border border-accent-200 flex-shrink-0">
                  <FileText className="w-6 h-6 text-accent-600" />
                </div>
                <div>
                  <h2 className="text-2xl md:text-3xl font-light text-[#413F3D] mb-3 tracking-tight">
                    Agreement to Terms
                  </h2>
                  <p className="text-base text-[#413F3D]/70 leading-relaxed">
                    By accessing or using VirtuServe&apos;s virtual assistant
                    services, you agree to be bound by these Terms of Service.
                    If you disagree with any part of these terms, you may not
                    access our services. These terms apply to all visitors,
                    users, and others who access or use the service.
                  </p>
                </div>
              </div>
            </div>

            {/* Services Description */}
            <div className="bg-white border border-primary-200/60 rounded-3xl p-8 md:p-10 mb-8 shadow-sm">
              <h2 className="text-2xl md:text-3xl font-light text-[#413F3D] mb-6 tracking-tight">
                Services Description
              </h2>
              <div className="space-y-4 text-base text-[#413F3D]/70 leading-relaxed">
                <p>
                  VirtuServe provides professional virtual assistant services
                  including but not limited to:
                </p>
                <ul className="space-y-2 ml-4">
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-5 h-5 text-accent-600 flex-shrink-0 mt-0.5" />
                    <span>Administrative support and email management</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-5 h-5 text-accent-600 flex-shrink-0 mt-0.5" />
                    <span>Calendar coordination and scheduling</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-5 h-5 text-accent-600 flex-shrink-0 mt-0.5" />
                    <span>Customer service and communication management</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-5 h-5 text-accent-600 flex-shrink-0 mt-0.5" />
                    <span>Project coordination and task management</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-5 h-5 text-accent-600 flex-shrink-0 mt-0.5" />
                    <span>Other business support services as agreed upon</span>
                  </li>
                </ul>
                <p>
                  The specific services provided will be outlined in your
                  individual service agreement or proposal.
                </p>
              </div>
            </div>

            {/* User Responsibilities */}
            <div className="bg-white border border-primary-200/60 rounded-3xl p-8 md:p-10 mb-8 shadow-sm">
              <h2 className="text-2xl md:text-3xl font-light text-[#413F3D] mb-6 tracking-tight">
                User Responsibilities
              </h2>
              <div className="space-y-4 text-base text-[#413F3D]/70 leading-relaxed">
                <p>When using our services, you agree to:</p>
                <ul className="space-y-3">
                  <li className="flex items-start gap-2">
                    <span className="text-accent-600 mt-1">•</span>
                    <span>
                      Provide accurate, current, and complete information
                    </span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-accent-600 mt-1">•</span>
                    <span>
                      Maintain the security of your account credentials
                    </span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-accent-600 mt-1">•</span>
                    <span>
                      Communicate clearly and professionally with our team
                    </span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-accent-600 mt-1">•</span>
                    <span>
                      Provide necessary access and information for task
                      completion
                    </span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-accent-600 mt-1">•</span>
                    <span>
                      Make timely payments according to your service agreement
                    </span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-accent-600 mt-1">•</span>
                    <span>Use our services only for lawful purposes</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-accent-600 mt-1">•</span>
                    <span>
                      Respect intellectual property and confidential information
                    </span>
                  </li>
                </ul>
              </div>
            </div>

            {/* Payment Terms */}
            <div className="bg-white border border-primary-200/60 rounded-3xl p-8 md:p-10 mb-8 shadow-sm">
              <h2 className="text-2xl md:text-3xl font-light text-[#413F3D] mb-6 tracking-tight">
                Payment Terms
              </h2>
              <div className="space-y-4 text-base text-[#413F3D]/70 leading-relaxed">
                <p>
                  <strong className="text-[#413F3D] font-normal">
                    Billing:
                  </strong>{" "}
                  Services are billed according to the package or hourly rate
                  agreed upon in your service agreement. Invoices are typically
                  issued monthly or as otherwise specified.
                </p>
                <p>
                  <strong className="text-[#413F3D] font-normal">
                    Payment Methods:
                  </strong>{" "}
                  We accept various payment methods including credit cards, bank
                  transfers, and other methods as mutually agreed upon.
                </p>
                <p>
                  <strong className="text-[#413F3D] font-normal">
                    Late Payments:
                  </strong>{" "}
                  Payments are due within the timeframe specified on the
                  invoice. Late payments may result in suspension of services
                  and may incur additional fees.
                </p>
                <p>
                  <strong className="text-[#413F3D] font-normal">
                    Refunds:
                  </strong>{" "}
                  Refund policies are outlined in your individual service
                  agreement. Generally, payments for completed work are
                  non-refundable.
                </p>
              </div>
            </div>

            {/* Confidentiality */}
            <div className="bg-white border border-primary-200/60 rounded-3xl p-8 md:p-10 mb-8 shadow-sm">
              <h2 className="text-2xl md:text-3xl font-light text-[#413F3D] mb-6 tracking-tight">
                Confidentiality
              </h2>
              <p className="text-base text-[#413F3D]/70 leading-relaxed mb-4">
                We understand the sensitive nature of the information you may
                share with us. VirtuServe commits to:
              </p>
              <ul className="space-y-2 text-base text-[#413F3D]/70 leading-relaxed">
                <li className="flex items-start gap-2">
                  <span className="text-accent-600 mt-1">•</span>
                  <span>
                    Maintain strict confidentiality of all client information
                  </span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-accent-600 mt-1">•</span>
                  <span>
                    Use information solely for providing agreed-upon services
                  </span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-accent-600 mt-1">•</span>
                  <span>
                    Implement appropriate security measures to protect your data
                  </span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-accent-600 mt-1">•</span>
                  <span>
                    Sign additional non-disclosure agreements when requested
                  </span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-accent-600 mt-1">•</span>
                  <span>
                    Not disclose information to third parties without consent
                  </span>
                </li>
              </ul>
            </div>

            {/* Service Modifications and Termination */}
            <div className="bg-white border border-primary-200/60 rounded-3xl p-8 md:p-10 mb-8 shadow-sm">
              <h2 className="text-2xl md:text-3xl font-light text-[#413F3D] mb-6 tracking-tight">
                Service Modifications and Termination
              </h2>
              <div className="space-y-4 text-base text-[#413F3D]/70 leading-relaxed">
                <p>
                  <strong className="text-[#413F3D] font-normal">
                    Modifications:
                  </strong>{" "}
                  We reserve the right to modify, suspend, or discontinue any
                  aspect of our services at any time. We will provide reasonable
                  notice of significant changes.
                </p>
                <p>
                  <strong className="text-[#413F3D] font-normal">
                    Termination by Client:
                  </strong>{" "}
                  You may terminate services according to the notice period
                  specified in your service agreement, typically 30 days written
                  notice.
                </p>
                <p>
                  <strong className="text-[#413F3D] font-normal">
                    Termination by VirtuServe:
                  </strong>{" "}
                  We reserve the right to terminate services with notice if
                  terms are violated or for non-payment.
                </p>
              </div>
            </div>

            {/* Limitation of Liability */}
            <div className="bg-white border border-primary-200/60 rounded-3xl p-8 md:p-10 mb-8 shadow-sm">
              <div className="flex items-start gap-4 mb-6">
                <div className="w-12 h-12 rounded-xl bg-accent-100 flex items-center justify-center border border-accent-200 flex-shrink-0">
                  <AlertCircle className="w-6 h-6 text-accent-600" />
                </div>
                <div>
                  <h2 className="text-2xl md:text-3xl font-light text-[#413F3D] mb-3 tracking-tight">
                    Limitation of Liability
                  </h2>
                  <p className="text-base text-[#413F3D]/70 leading-relaxed">
                    VirtuServe shall not be liable for any indirect, incidental,
                    special, consequential, or punitive damages resulting from
                    your use of or inability to use the service. Our total
                    liability shall not exceed the amount paid by you for
                    services in the three months preceding the claim.
                  </p>
                </div>
              </div>
            </div>

            {/* Changes to Terms */}
            <div className="bg-white border border-primary-200/60 rounded-3xl p-8 md:p-10 mb-8 shadow-sm">
              <h2 className="text-2xl md:text-3xl font-light text-[#413F3D] mb-6 tracking-tight">
                Changes to Terms
              </h2>
              <p className="text-base text-[#413F3D]/70 leading-relaxed">
                We reserve the right to modify these terms at any time. We will
                notify users of any material changes via email or through our
                service. Continued use of services after changes constitutes
                acceptance of the modified terms.
              </p>
            </div>

            {/* Contact Information */}
            <div className="bg-accent-50 border border-accent-200/60 rounded-3xl p-8 md:p-10">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-xl bg-accent-100 flex items-center justify-center border border-accent-200 flex-shrink-0">
                  <Mail className="w-6 h-6 text-accent-600" />
                </div>
                <div>
                  <h2 className="text-2xl md:text-3xl font-light text-[#413F3D] mb-3 tracking-tight">
                    Questions About These Terms?
                  </h2>
                  <p className="text-base text-[#413F3D]/70 leading-relaxed mb-4">
                    If you have any questions about these Terms of Service,
                    please contact us:
                  </p>
                  <div className="space-y-2 text-base text-[#413F3D]/70">
                    <p>
                      <strong className="text-[#413F3D] font-normal">
                        Email:
                      </strong>{" "}
                      <a
                        href="mailto:legal@virtuserve.com"
                        className="text-accent-600 hover:text-accent-700 transition-colors"
                      >
                        legal@virtuserve.com
                      </a>
                    </p>
                    <p>
                      <strong className="text-[#413F3D] font-normal">
                        Phone:
                      </strong>{" "}
                      +27 82 899 7062
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
