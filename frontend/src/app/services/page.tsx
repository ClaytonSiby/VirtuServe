import type { Metadata } from "next";
import {
  CheckCircle,
  Clock,
  DollarSign,
  Headphones,
  TrendingUp,
  FileText,
  Calendar as CalendarIcon,
  Mail as MailIcon,
  ArrowRight,
} from "lucide-react";
import Link from "next/link";
import SectionHeader from "@/components/ui/SectionHeader";
import PageContainer from "@/components/ui/PageContainer";

export const metadata: Metadata = {
  title: "Virtual Assistant Services | VirtuServe",
  description:
    "Detailed breakdown of VA services including administrative support, customer service, digital marketing, and more. Organized clearly for potential clients.",
};

export default function Services() {
  const services = [
    {
      icon: FileText,
      title: "Administrative Support",
      description:
        "Streamline your daily operations with expert administrative assistance",
      features: [
        "Email management and organization",
        "Calendar coordination and scheduling",
        "Data entry and database management",
        "Document preparation and formatting",
        "Travel arrangements and itinerary planning",
        "Meeting coordination and minutes",
      ],
    },
    {
      icon: Headphones,
      title: "Customer Service",
      description:
        "Enhance your client relationships with professional customer support",
      features: [
        "Client inquiry handling and response",
        "Customer relationship management (CRM)",
        "Support ticket management",
        "Live chat support",
        "Follow-up communications",
        "Customer satisfaction surveys",
      ],
    },
    {
      icon: TrendingUp,
      title: "Digital Marketing",
      description:
        "Boost your online presence with strategic digital marketing support",
      features: [
        "Social media management and posting",
        "Content creation and copywriting",
        "Email marketing campaigns",
        "Basic SEO optimization",
        "Analytics and reporting",
        "Community engagement management",
      ],
    },
    {
      icon: CalendarIcon,
      title: "Project Coordination",
      description: "Keep your projects on track with organized coordination",
      features: [
        "Project timeline management",
        "Team communication facilitation",
        "Resource allocation and tracking",
        "Progress monitoring and reporting",
        "Deadline management",
        "Stakeholder updates",
      ],
    },
    {
      icon: MailIcon,
      title: "Email & Communication Management",
      description:
        "Never miss an important message with professional inbox management",
      features: [
        "Email inbox organization and filtering",
        "Priority message identification",
        "Response drafting and sending",
        "Newsletter management",
        "Subscription management",
        "Spam filtering and cleanup",
      ],
    },
    {
      icon: DollarSign,
      title: "Basic Bookkeeping",
      description:
        "Keep your finances organized with basic bookkeeping support",
      features: [
        "Invoice preparation and tracking",
        "Expense tracking and categorization",
        "Receipt organization",
        "Payment follow-ups",
        "Financial report preparation",
        "Budget monitoring assistance",
      ],
    },
  ];

  return (
    <main className="min-h-screen bg-white">
      {/* Hero Section - Minimal & Clean */}
      <section className="relative pt-32 pb-20 md:pt-40 md:pb-24 overflow-hidden bg-gradient-to-b from-gray-50 via-white to-transparent">
        <div className="absolute inset-0 opacity-40">
          <div className="absolute top-0 right-1/4 w-96 h-96 bg-gradient-radial from-accent-200/40 to-transparent blur-3xl"></div>
          <div className="absolute bottom-0 left-1/4 w-96 h-96 bg-gradient-radial from-primary-200/30 to-transparent blur-3xl"></div>
        </div>

        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto text-center space-y-6">
            <div className="inline-flex items-center gap-2 bg-white border border-gray-200 rounded-full px-4 py-2 shadow-sm">
              <span className="text-xs font-medium text-gray-700 uppercase tracking-wider">
                What We Offer
              </span>
            </div>

            <h1 className="text-5xl md:text-6xl lg:text-7xl font-extralight text-gray-900 leading-tight tracking-tight">
              Our Services
            </h1>

            <p className="text-xl md:text-2xl text-gray-600 font-light leading-relaxed max-w-2xl mx-auto">
              Comprehensive virtual assistant solutions designed to transform
              your business operations
            </p>
          </div>
        </div>
      </section>

      {/* Highlights */}
      <section className="py-12 bg-white border-y border-gray-100">
        <PageContainer>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {[
              "Innovative Working Activities",
              "100% Client Satisfaction",
              "Dedicated Team Member",
              "Safe & Secure Environment",
            ].map((label) => (
              <div
                key={label}
                className="px-5 py-3.5 rounded-2xl bg-gradient-to-br from-gray-50 to-white border border-primary-200/50 text-primary-800 text-sm font-light text-center hover:shadow-md transition-shadow duration-300"
              >
                {label}
              </div>
            ))}
          </div>
        </PageContainer>
      </section>

      {/* Services Grid */}
      <section className="py-20 md:py-24 bg-gradient-to-b from-white to-gray-50">
        <PageContainer>
          <SectionHeader
            align="left"
            label={
              <>
                <div className="w-2 h-2 bg-accent-600 rounded-full animate-pulse" />
                <span className="text-sm font-light text-primary-900 uppercase tracking-[0.2em]">
                  Service Breakdown
                </span>
              </>
            }
            title="Explore Our Services"
            subtitle="Comprehensive solutions tailored to your needs"
          />
          <div className="grid lg:grid-cols-2 gap-6 md:gap-8">
            {services.map((service, index) => (
              <div
                key={index}
                className="relative bg-gradient-to-br from-white to-primary-50/30 border border-primary-200/60 p-8 md:p-10 rounded-3xl shadow-sm hover:shadow-2xl hover:border-accent-300/50 transition-all duration-500 hover:-translate-y-2 group overflow-hidden"
              >
                {/* Elegant background accent */}
                <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-radial from-accent-100/40 to-transparent blur-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                <div className="relative z-10">
                  <div className="flex items-start gap-5 mb-6">
                    <div className="w-16 h-16 bg-gradient-to-br from-primary-100 to-accent-100 rounded-2xl flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-all duration-500 border border-primary-200">
                      <service.icon className="w-8 h-8 text-primary-700" />
                    </div>
                    <div className="flex-1">
                      <h3 className="text-2xl font-light text-gray-900 mb-2 tracking-tight">
                        {service.title}
                      </h3>
                      <p className="text-gray-600 leading-relaxed text-sm">
                        {service.description}
                      </p>
                    </div>
                  </div>
                  <div className="h-px bg-gradient-to-r from-transparent via-primary-200 to-transparent mb-6" />
                  <ul className="space-y-3">
                    {service.features.map((feature, fIndex) => (
                      <li
                        key={fIndex}
                        className="flex items-start gap-3 group/item"
                      >
                        <div className="w-5 h-5 rounded-full bg-accent-100 border border-accent-300 flex items-center justify-center flex-shrink-0 mt-0.5 group-hover/item:scale-110 transition-transform">
                          <CheckCircle className="w-3.5 h-3.5 text-accent-600" />
                        </div>
                        <span className="text-gray-700 font-light leading-relaxed">
                          {feature}
                        </span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </PageContainer>
      </section>

      {/* How It Works */}
      <section className="py-20 md:py-24 bg-white">
        <PageContainer>
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 bg-accent-50 border border-accent-200/50 rounded-full px-5 py-2.5 mb-6">
              <div className="w-2 h-2 bg-accent-600 rounded-full animate-pulse"></div>
              <span className="text-sm font-light text-accent-800 uppercase tracking-[0.2em]">
                Simple Process
              </span>
            </div>
            <h2 className="text-4xl md:text-5xl font-light text-gray-900 mb-4">
              How It Works
            </h2>
          </div>
          <div className="relative grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {/* Connection lines */}
            <div className="hidden md:block absolute top-10 left-0 right-0 h-0.5 bg-gradient-to-r from-transparent via-accent-300 to-transparent" />
            <div className="hidden md:block absolute top-10 left-1/4 w-1/4 h-0.5">
              <div className="w-full h-full bg-gradient-to-r from-accent-400 to-primary-400 animate-pulse" />
            </div>
            <div className="hidden md:block absolute top-10 right-1/4 w-1/4 h-0.5">
              <div
                className="w-full h-full bg-gradient-to-r from-primary-400 to-accent-400 animate-pulse"
                style={{ animationDelay: "0.5s" }}
              />
            </div>

            <div className="text-center group relative">
              <div className="relative inline-block">
                <div className="absolute inset-0 bg-accent-500/20 rounded-2xl blur-xl group-hover:blur-2xl transition-all duration-500" />
                <div className="relative w-20 h-20 rounded-2xl flex items-center justify-center text-3xl font-light mx-auto mb-6 bg-gradient-to-br from-accent-500 to-accent-600 text-white group-hover:scale-110 group-hover:rotate-3 transition-all duration-500 shadow-lg">
                  1
                </div>
              </div>
              <h3 className="text-xl font-light mb-3 text-gray-900">
                Book a Discovery Call
              </h3>
              <p className="text-gray-600 leading-relaxed font-light">
                Schedule a free consultation to discuss your needs and how we
                can help
              </p>
            </div>

            <div className="text-center group relative">
              <div className="relative inline-block">
                <div className="absolute inset-0 bg-primary-500/20 rounded-2xl blur-xl group-hover:blur-2xl transition-all duration-500" />
                <div className="relative w-20 h-20 rounded-2xl flex items-center justify-center text-3xl font-light mx-auto mb-6 bg-gradient-to-br from-primary-700 to-primary-800 text-white group-hover:scale-110 group-hover:rotate-3 transition-all duration-500 shadow-lg">
                  2
                </div>
              </div>
              <h3 className="text-xl font-light mb-3 text-gray-900">
                Custom Plan Creation
              </h3>
              <p className="text-gray-600 leading-relaxed font-light">
                We&apos;ll create a tailored service plan based on your specific
                requirements
              </p>
            </div>

            <div className="text-center group relative">
              <div className="relative inline-block">
                <div className="absolute inset-0 bg-accent-500/20 rounded-2xl blur-xl group-hover:blur-2xl transition-all duration-500" />
                <div className="relative w-20 h-20 rounded-2xl flex items-center justify-center text-3xl font-light mx-auto mb-6 bg-gradient-to-br from-accent-500 to-accent-600 text-white group-hover:scale-110 group-hover:rotate-3 transition-all duration-500 shadow-lg">
                  3
                </div>
              </div>
              <h3 className="text-xl font-light mb-3 text-gray-900">
                Get Started
              </h3>
              <p className="text-gray-600 leading-relaxed font-light">
                We begin working on your tasks with regular updates and clear
                communication
              </p>
            </div>
          </div>
        </PageContainer>
      </section>

      {/* Pricing Tiers */}
      <section className="py-20 md:py-32 bg-gradient-to-b from-white to-gray-50">
        <PageContainer>
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 bg-accent-50 border border-accent-200/50 rounded-full px-5 py-2.5 mb-6">
              <DollarSign className="w-4 h-4 text-accent-600" />
              <span className="text-sm font-light text-accent-800 uppercase tracking-[0.2em]">
                Pricing Plans
              </span>
            </div>
            <h2 className="text-4xl md:text-5xl font-light text-gray-900 mb-4">
              Flexible Pricing Options
            </h2>
            <p className="lead max-w-2xl mx-auto">
              Choose a plan that works for your business needs and budget
            </p>
          </div>
          <div className="grid sm:grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8 max-w-7xl mx-auto">
            <div className="bg-white border-2 border-gray-200/50 rounded-3xl p-8 lg:p-10 hover:shadow-2xl hover:border-accent-200 transition-all duration-500 hover:-translate-y-2">
              <h3 className="text-2xl md:text-3xl font-light mb-2 text-gray-900">
                Starter
              </h3>
              <p className="text-gray-600 mb-6">Perfect for small tasks</p>
              <div className="text-4xl md:text-5xl font-bold text-accent-600 mb-8 flex items-center gap-3">
                <Clock className="w-10 h-10" />
                10 hrs
              </div>
              <ul className="space-y-4">
                <li className="flex items-center gap-3">
                  <CheckCircle className="w-5 h-5 text-accent-600 flex-shrink-0" />
                  <span className="text-gray-700">Email management</span>
                </li>
                <li className="flex items-center gap-3">
                  <CheckCircle className="w-5 h-5 text-accent-600 flex-shrink-0" />
                  <span className="text-gray-700">Calendar scheduling</span>
                </li>
                <li className="flex items-center gap-3">
                  <CheckCircle className="w-5 h-5 text-accent-600 flex-shrink-0" />
                  <span className="text-gray-700">Basic admin tasks</span>
                </li>
              </ul>
            </div>

            <div className="bg-white border-2 border-accent-500 rounded-3xl p-8 lg:p-10 relative shadow-2xl hover:-translate-y-2 transition-all duration-500 hover:shadow-accent-500/20">
              <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 bg-gradient-to-r from-accent-500 to-accent-600 text-white px-6 py-2 rounded-full text-sm font-normal shadow-lg">
                Popular
              </div>
              <h3 className="text-2xl md:text-3xl font-light mb-2 text-gray-900">
                Professional
              </h3>
              <p className="text-gray-600 mb-6">For growing businesses</p>
              <div className="text-4xl md:text-5xl font-bold text-accent-600 mb-8 flex items-center gap-3">
                <Clock className="w-10 h-10" />
                25 hrs
              </div>
              <ul className="space-y-4">
                <li className="flex items-center gap-3">
                  <CheckCircle className="w-5 h-5 text-accent-600 flex-shrink-0" />
                  <span className="text-gray-700">All Starter features</span>
                </li>
                <li className="flex items-center gap-3">
                  <CheckCircle className="w-5 h-5 text-accent-600 flex-shrink-0" />
                  <span className="text-gray-700">
                    Customer service support
                  </span>
                </li>
                <li className="flex items-center gap-3">
                  <CheckCircle className="w-5 h-5 text-accent-600 flex-shrink-0" />
                  <span className="text-gray-700">Social media management</span>
                </li>
                <li className="flex items-center gap-3">
                  <CheckCircle className="w-5 h-5 text-accent-600 flex-shrink-0" />
                  <span className="text-gray-700">Priority support</span>
                </li>
              </ul>
            </div>

            <div className="bg-white border-2 border-gray-200/50 rounded-3xl p-8 lg:p-10 hover:shadow-2xl hover:border-accent-200 transition-all duration-500 hover:-translate-y-2">
              <h3 className="text-2xl md:text-3xl font-light mb-2 text-gray-900">
                Enterprise
              </h3>
              <p className="text-gray-600 mb-6">For established companies</p>
              <div className="text-4xl md:text-5xl font-bold text-accent-600 mb-8 flex items-center gap-3">
                <Clock className="w-10 h-10" />
                50+ hrs
              </div>
              <ul className="space-y-4">
                <li className="flex items-center gap-3">
                  <CheckCircle className="w-5 h-5 text-accent-600 flex-shrink-0" />
                  <span className="text-gray-700">
                    All Professional features
                  </span>
                </li>
                <li className="flex items-center gap-3">
                  <CheckCircle className="w-5 h-5 text-accent-600 flex-shrink-0" />
                  <span className="text-gray-700">Dedicated VA team</span>
                </li>
                <li className="flex items-center gap-3">
                  <CheckCircle className="w-5 h-5 text-accent-600 flex-shrink-0" />
                  <span className="text-gray-700">Custom workflows</span>
                </li>
                <li className="flex items-center gap-3">
                  <CheckCircle className="w-5 h-5 text-accent-600 flex-shrink-0" />
                  <span className="text-gray-700">24/7 availability</span>
                </li>
              </ul>
            </div>
          </div>
        </PageContainer>
      </section>

      {/* CTA */}
      <section className="relative py-28 md:py-40 overflow-hidden bg-gradient-to-br from-primary-900 via-accent-900 to-primary-800">
        <div className="absolute inset-0">
          <div className="absolute top-1/4 right-0 w-[800px] h-[800px] bg-gradient-radial from-accent-400/20 to-transparent blur-3xl"></div>
          <div className="absolute bottom-1/4 left-0 w-[800px] h-[800px] bg-gradient-radial from-primary-400/15 to-transparent blur-3xl"></div>
          <div
            className="absolute inset-0 opacity-[0.03]"
            style={{
              backgroundImage:
                "url(\"data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E\")",
            }}
          />
        </div>

        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <div className="inline-flex items-center gap-2.5 bg-white/10 backdrop-blur-md border border-white/20 rounded-full px-5 py-2.5 mb-8">
              <span className="text-xs font-medium text-white uppercase tracking-[0.2em]">
                Services Provided
              </span>
            </div>

            <h2 className="text-5xl md:text-6xl lg:text-7xl font-light mb-6 text-white leading-[1.1] tracking-tight">
              Ready to elevate your business?
            </h2>

            <p className="text-xl md:text-2xl text-white/80 font-light leading-relaxed mb-10">
              Focus on growth while we handle the details
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-10">
              <Link
                href="/contact"
                className="group px-10 py-5 bg-white text-primary-900 rounded-xl font-semibold text-lg shadow-2xl hover:shadow-white/20 hover:scale-105 transition-all duration-300 flex items-center gap-3"
              >
                Book Your Discovery Call
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Link>
              <a
                href="tel:+27828997062"
                className="px-10 py-5 bg-white/10 backdrop-blur-sm text-white border-2 border-white/30 rounded-xl font-medium text-lg hover:bg-white/20 hover:border-white/50 transition-all duration-300"
              >
                +27 82 899 7062
              </a>
            </div>

            <div className="flex flex-wrap items-center justify-center gap-6 text-sm text-white/70 font-light">
              <span className="flex items-center gap-2">
                <CheckCircle className="w-4 h-4 text-white/90" />
                Free consultation
              </span>
              <span className="flex items-center gap-2">
                <CheckCircle className="w-4 h-4 text-white/90" />
                24-hour response
              </span>
              <span className="flex items-center gap-2">
                <CheckCircle className="w-4 h-4 text-white/90" />
                No commitment
              </span>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
