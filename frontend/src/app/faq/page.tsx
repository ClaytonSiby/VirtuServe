"use client";

import { ChevronDown, HelpCircle, ArrowRight } from "lucide-react";
import PageContainer from "@/components/ui/PageContainer";
import Link from "next/link";
import { useState } from "react";

const faqs = [
  {
    category: "Getting Started",
    questions: [
      {
        question: "What is VirtuServe?",
        answer:
          "VirtuServe is a premium virtual assistant service led by Sheridan De Laroche, offering professional administrative support, customer service, digital marketing, property management, and executive assistance to international clients and businesses. We specialize in helping you streamline operations and focus on what matters most.",
      },
      {
        question: "How do I get started with VirtuServe?",
        answer:
          "Getting started is simple! Book a free 30-minute discovery call where we'll discuss your needs, challenges, and goals. After understanding your requirements, we'll recommend a service package and create a customized plan. Once you're ready, we can typically begin within 3-5 business days.",
      },
      {
        question: "What types of businesses do you work with?",
        answer:
          "We work with a diverse range of clients including property managers, real estate professionals, e-commerce businesses, consultants, coaches, small business owners, and international companies. Whether you're a solopreneur or have a growing team, we tailor our services to your specific industry and needs.",
      },
    ],
  },
  {
    category: "Services & Pricing",
    questions: [
      {
        question: "What services does VirtuServe offer?",
        answer:
          "We offer comprehensive virtual assistant services including administrative support (email management, calendar scheduling, data entry), customer service, digital marketing (social media management, content creation), property management assistance, basic bookkeeping, travel coordination, and executive support. Visit our Services page for a complete list.",
      },
      {
        question: "How much do your services cost?",
        answer:
          "We offer flexible pricing with three main packages: Essential ($500/month for 20 hours), Professional ($900/month for 40 hours), and Enterprise ($1,600/month for 80 hours). Custom packages are available for unique requirements. All packages include dedicated support and regular progress updates.",
      },
      {
        question: "Can I customize a package to fit my needs?",
        answer:
          "Absolutely! While we offer standard packages, we understand every business is unique. We can create a custom package that combines specific services, hours, and support levels tailored to your requirements. Contact us to discuss your needs and we'll design the perfect solution.",
      },
      {
        question: "Is there a minimum commitment period?",
        answer:
          "Our standard packages operate on a month-to-month basis with no long-term contracts required. However, we recommend a minimum 3-month commitment to see the best results and build an efficient workflow. Custom enterprise packages may have different terms based on scope.",
      },
    ],
  },
  {
    category: "Working Process",
    questions: [
      {
        question: "What is your working process?",
        answer:
          "Our process is simple: (1) Discovery Call - We discuss your needs and goals, (2) Custom Plan - We create a tailored strategy and assign tasks, (3) Execution - We handle your tasks with regular updates, (4) Review - We track progress and optimize continuously. Communication happens through your preferred channels (email, Slack, project management tools).",
      },
      {
        question: "What hours do you work?",
        answer:
          "We primarily work during standard business hours across multiple time zones to serve our international clients. Specific working hours are coordinated during onboarding to align with your business needs and time zone. For urgent matters, we can arrange flexible scheduling.",
      },
      {
        question: "How do you communicate and share updates?",
        answer:
          "We use your preferred communication tools including email, Slack, Microsoft Teams, Zoom, or phone calls. Regular updates are provided through weekly progress reports, and we maintain transparent communication throughout all projects. You'll always know what's being worked on and project status.",
      },
      {
        question: "What tools and software do you use?",
        answer:
          "We're experienced with a wide range of business tools including Microsoft Office Suite, Google Workspace, Slack, Asana, Trello, Monday.com, Salesforce, HubSpot, Mailchimp, Canva, Hootsuite, QuickBooks, and many more. If you use specific software, we can quickly adapt or we'll recommend the best tools for your needs.",
      },
    ],
  },
  {
    category: "Security & Privacy",
    questions: [
      {
        question: "How do you handle confidential information?",
        answer:
          "We take confidentiality extremely seriously. All client information is protected under strict confidentiality agreements (NDAs). We use secure, encrypted communication channels and follow industry best practices for data security. Your sensitive information is never shared with third parties.",
      },
      {
        question: "What happens to my data if I stop using your services?",
        answer:
          "Upon service termination, we provide you with all your files, documents, and data in your preferred format. After a 30-day transition period, all data is securely deleted from our systems unless you request otherwise. We ensure a smooth handover with complete documentation.",
      },
      {
        question: "Are you GDPR compliant?",
        answer:
          "Yes, we comply with GDPR and international data protection regulations. We only collect necessary information, use it solely for service delivery, and maintain strict security protocols. You can review our full privacy policy for detailed information on how we protect your data.",
      },
    ],
  },
  {
    category: "Technical & Support",
    questions: [
      {
        question: "What if I need help outside of regular hours?",
        answer:
          "While our standard support is during business hours, we understand that urgent matters arise. For priority support needs, we offer extended hours and emergency contact options as part of our Professional and Enterprise packages. We'll work with you to establish protocols for urgent situations.",
      },
      {
        question: "Can you handle tasks in multiple languages?",
        answer:
          "Our primary working language is English, but we have experience working with international clients and can handle basic communication in several languages. For specialized multilingual support, we can coordinate with trusted partners to ensure your needs are met.",
      },
      {
        question: "What if I'm not satisfied with the service?",
        answer:
          "Your satisfaction is our priority. If you're not happy with any aspect of our service, please let us know immediately. We'll work to resolve the issue promptly. If we can't find a solution, we offer a satisfaction guarantee with options for refunds or service credits based on the circumstances.",
      },
    ],
  },
];

export default function FAQPage() {
  const [openItems, setOpenItems] = useState<{ [key: string]: boolean }>({});

  const toggleItem = (categoryIndex: number, questionIndex: number) => {
    const key = `${categoryIndex}-${questionIndex}`;
    setOpenItems((prev) => ({
      ...prev,
      [key]: !prev[key],
    }));
  };

  return (
    <main className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="relative pt-32 pb-20 md:pt-40 md:pb-24 overflow-hidden bg-gradient-to-br from-white/90 via-[#F2F1EF]/50 to-[#D8CFD0]/8">
        {/* Animated background elements */}
        <div className="absolute inset-0">
          <div
            className="absolute top-1/4 right-0 w-[600px] h-[600px] bg-[#D8CFD0]/25 rounded-full blur-3xl animate-pulse"
            style={{ animationDuration: "8s" }}
          ></div>
          <div
            className="absolute bottom-1/4 left-0 w-[600px] h-[600px] bg-[#B1A6A4]/20 rounded-full blur-3xl animate-pulse"
            style={{ animationDuration: "6s" }}
          ></div>
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-[#697184]/10 rounded-full blur-3xl"></div>
        </div>

        {/* Decorative grid overlay */}
        <div className="absolute inset-0 opacity-20">
          <div
            className="absolute inset-0"
            style={{
              backgroundImage: `radial-gradient(circle at 2px 2px, rgba(105, 113, 132, 0.15) 1px, transparent 0)`,
              backgroundSize: "48px 48px",
            }}
          ></div>
        </div>

        {/* Floating decorative shapes */}
        <div className="absolute top-20 left-10 w-72 h-72 border-2 border-[#697184]/15 rounded-full opacity-40 animate-[spin_20s_linear_infinite]"></div>
        <div className="absolute bottom-20 right-10 w-96 h-96 border-2 border-[#B1A6A4]/15 rounded-full opacity-40 animate-[spin_25s_linear_infinite_reverse]"></div>

        <PageContainer>
          <div className="relative z-10 max-w-4xl mx-auto text-center">
            <div className="inline-flex items-center gap-2 bg-white/80 backdrop-blur-md border border-[#697184]/20 rounded-full px-5 py-2.5 mb-6 shadow-sm">
              <span className="text-xs font-medium text-[#697184] uppercase tracking-[0.25em]">
                Help Center
              </span>
            </div>
            <h1 className="text-6xl md:text-7xl lg:text-8xl font-extralight mb-6 text-[#413F3D] leading-tight tracking-tight">
              Frequently Asked Questions
            </h1>
            <p className="text-xl md:text-2xl text-[#413F3D]/70 font-light leading-relaxed">
              Find answers to common questions about our services, pricing, and
              how we work
            </p>
          </div>
        </PageContainer>
      </section>

      {/* FAQ Content */}
      <section className="py-20 md:py-32 bg-white">
        <PageContainer>
          <div className="max-w-4xl mx-auto">
            {faqs.map((category, categoryIndex) => (
              <div key={categoryIndex} className="mb-16 last:mb-0">
                <div className="flex items-center gap-3 mb-8">
                  <div className="w-10 h-10 rounded-xl bg-[#F2F1EF] flex items-center justify-center border border-[#697184]/20">
                    <HelpCircle className="w-5 h-5 text-[#697184]" />
                  </div>
                  <h2 className="text-3xl md:text-4xl font-light text-[#413F3D]">
                    {category.category}
                  </h2>
                </div>

                <div className="space-y-4">
                  {category.questions.map((faq, index) => {
                    const key = `${categoryIndex}-${index}`;
                    const isOpen = openItems[key];

                    return (
                      <div
                        key={index}
                        className="bg-white border border-gray-200 rounded-xl overflow-hidden hover:border-[#697184]/30 transition-all duration-300 hover:shadow-md"
                      >
                        <button
                          onClick={() => toggleItem(categoryIndex, index)}
                          className="w-full flex items-center justify-between gap-4 p-6 text-left hover:bg-[#F2F1EF]/30 transition-colors duration-200"
                        >
                          <h3 className="text-lg md:text-xl font-medium text-[#413F3D] pr-4">
                            {faq.question}
                          </h3>
                          <ChevronDown
                            className={`w-5 h-5 flex-shrink-0 text-[#697184] transition-transform duration-300 ${
                              isOpen ? "rotate-180" : ""
                            }`}
                          />
                        </button>
                        <div
                          className={`overflow-hidden transition-all duration-300 ${
                            isOpen ? "max-h-96" : "max-h-0"
                          }`}
                        >
                          <div className="px-6 pb-6 pt-2">
                            <div className="h-px bg-gray-200 mb-4" />
                            <p className="text-[#413F3D]/70 font-light leading-relaxed">
                              {faq.answer}
                            </p>
                          </div>
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>
            ))}
          </div>
        </PageContainer>
      </section>

      {/* Still Have Questions CTA */}
      <section className="relative py-24 md:py-32 overflow-hidden bg-gradient-to-b from-[#F2F1EF]/40 via-white/80 to-[#B1A6A4]/10">
        <PageContainer>
          <div className="max-w-5xl mx-auto relative z-10">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              {/* Left: Content */}
              <div className="space-y-6">
                <div className="inline-flex items-center gap-2 bg-white border border-[#697184]/20 rounded-full px-4 py-2 shadow-sm">
                  <span className="text-xs font-medium text-[#697184] uppercase tracking-wider">
                    We&apos;re Here to Help
                  </span>
                </div>

                <h2 className="text-4xl md:text-5xl lg:text-6xl font-extralight text-[#413F3D] leading-tight">
                  Still Have Questions?
                </h2>

                <p className="text-xl text-[#413F3D]/70 font-light leading-relaxed">
                  Can&apos;t find what you&apos;re looking for? Book a free
                  discovery call and we&apos;ll answer all your questions
                  personally.
                </p>

                <div className="flex flex-col sm:flex-row gap-4 pt-4">
                  <Link
                    href="/contact"
                    className="group inline-flex items-center justify-center gap-2 px-8 py-4 rounded-xl bg-gradient-to-br from-[#697184] via-[#413F3D] to-[#697184] text-white font-semibold shadow-lg hover:shadow-xl hover:-translate-y-0.5 transition-all duration-300"
                  >
                    <span>Contact Us</span>
                    <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                  </Link>
                  <Link
                    href="/services"
                    className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-xl border-2 border-[#697184]/30 text-[#413F3D] font-medium hover:border-[#697184] hover:bg-[#F2F1EF]/50 transition-all duration-300"
                  >
                    View Services
                  </Link>
                </div>
              </div>

              {/* Right: Quick Stats */}
              <div className="grid grid-cols-2 gap-4">
                <div className="bg-white border border-[#697184]/20 rounded-2xl p-6 hover:shadow-lg transition-shadow duration-300">
                  <div className="text-4xl font-bold text-[#697184] mb-2">
                    24h
                  </div>
                  <div className="text-sm text-[#413F3D] font-medium">
                    Response Time
                  </div>
                </div>

                <div className="bg-gradient-to-br from-[#D8CFD0]/40 to-[#B1A6A4]/20 border border-[#D8CFD0]/30 rounded-2xl p-6 hover:shadow-lg transition-shadow duration-300">
                  <div className="text-4xl font-bold text-[#697184] mb-2">
                    Free
                  </div>
                  <div className="text-sm text-[#413F3D] font-medium">
                    Discovery Call
                  </div>
                </div>

                <div className="bg-white border border-[#697184]/20 rounded-2xl p-6 hover:shadow-lg transition-shadow duration-300">
                  <div className="text-4xl font-bold text-[#697184] mb-2">
                    98%
                  </div>
                  <div className="text-sm text-[#413F3D] font-medium">
                    Satisfaction
                  </div>
                </div>

                <div className="bg-white border border-[#697184]/20 rounded-2xl p-6 hover:shadow-lg transition-shadow duration-300">
                  <div className="text-4xl font-bold text-[#697184] mb-2">
                    10+
                  </div>
                  <div className="text-sm text-[#413F3D] font-medium">
                    Years Exp.
                  </div>
                </div>
              </div>
            </div>
          </div>
        </PageContainer>
      </section>
    </main>
  );
}
