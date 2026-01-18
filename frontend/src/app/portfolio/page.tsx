import type { Metadata } from "next";
import { Star, Quote } from "lucide-react";
import Link from "next/link";
import SectionHeader from "@/components/ui/SectionHeader";
import PageContainer from "@/components/ui/PageContainer";

export const metadata: Metadata = {
  title: "Portfolio & Testimonials | VirtuServe",
  description:
    "Showcase our best work and client testimonials. See how we've helped international businesses succeed.",
};

export default function Portfolio() {
  const testimonials = [
    {
      name: "Sarah Johnson",
      company: "Tech Startup Inc.",
      role: "CEO",
      text: "VirtuServe has been instrumental in helping us scale our operations. Their attention to detail and proactive communication have made them an invaluable part of our team.",
      rating: 5,
    },
    {
      name: "Michael Chen",
      company: "Global Marketing Agency",
      role: "Operations Manager",
      text: "Working across time zones can be challenging, but VirtuServe makes it seamless. They've saved us countless hours on administrative tasks.",
      rating: 5,
    },
    {
      name: "Emma Rodriguez",
      company: "E-commerce Business",
      role: "Founder",
      text: "The professionalism and efficiency are outstanding. I can finally focus on growing my business while knowing all the details are handled perfectly.",
      rating: 5,
    },
    {
      name: "David Williams",
      company: "Consulting Firm",
      role: "Managing Partner",
      text: "VirtuServe has transformed how we manage our client communications. Their customer service support is top-notch and has improved our client satisfaction significantly.",
      rating: 5,
    },
  ];

  const caseStudies = [
    {
      title: "Streamlined Operations for Tech Startup",
      client: "Confidential Tech Company",
      challenge:
        "Managing rapid growth while maintaining quality customer service",
      solution:
        "Implemented comprehensive admin support and customer service workflows",
      results: [
        "50% reduction in response time to client inquiries",
        "100% on-time meeting scheduling",
        "Freed up 20+ hours per week for core business activities",
      ],
    },
    {
      title: "Social Media Growth for E-commerce Brand",
      client: "Online Retail Business",
      challenge: "Inconsistent social media presence limiting brand growth",
      solution:
        "Daily social media management, content creation, and community engagement",
      results: [
        "300% increase in social media engagement",
        "150% growth in follower count over 6 months",
        "Consistent brand voice across all platforms",
      ],
    },
    {
      title: "Financial Organization for Consulting Firm",
      client: "International Consulting Group",
      challenge:
        "Disorganized invoicing and expense tracking causing cash flow issues",
      solution:
        "Systematic bookkeeping, invoice management, and financial reporting",
      results: [
        "100% on-time invoicing to clients",
        "Reduced late payments by 80%",
        "Clear financial visibility for better decision-making",
      ],
    },
  ];

  return (
    <main className="min-h-screen bg-gradient-to-b from-primary-50 via-white to-primary-50/50">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-primary-900 via-primary-800 to-primary-900 text-white py-24 md:py-32 overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute top-0 left-1/4 w-96 h-96 bg-white/5 rounded-full blur-3xl"></div>
          <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-white/5 rounded-full blur-3xl"></div>
          <div
            className="absolute inset-0 opacity-[0.02]"
            style={{
              backgroundImage:
                "url(\"data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E\")",
            }}
          />
        </div>
        <div className="container mx-auto px-4 text-center relative z-10">
          <div className="inline-flex items-center gap-3 bg-white/10 backdrop-blur-sm border border-white/20 rounded-full px-5 py-2.5 mb-6">
            <Star className="w-4 h-4 text-white" />
            <span className="text-sm font-medium text-white uppercase tracking-[0.15em]">
              Client Success
            </span>
          </div>
          <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold mb-6 leading-tight">
            Portfolio & Success Stories
          </h1>
          <p className="text-xl md:text-2xl max-w-3xl mx-auto text-white/80 font-light leading-relaxed">
            Real results from real clients who trust us with their business
          </p>
        </div>
      </section>

      {/* Client Testimonials */}
      <section className="py-20 md:py-24 bg-white">
        <PageContainer>
          <SectionHeader
            label={
              <>
                <Quote className="w-4 h-4 text-accent-600" />
                <span className="text-sm font-semibold text-accent-800 uppercase tracking-wider">
                  Testimonials
                </span>
              </>
            }
            title="What Our Clients Say"
            subtitle="Elegant cards with subtle shadows, aligned to the new theme"
          />
          <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
            {testimonials.map((testimonial, index) => (
              <div
                key={index}
                className="bg-white border border-gray-200 p-8 rounded-2xl shadow-sm hover:shadow-xl transition-all duration-300 relative"
              >
                <Quote className="w-12 h-12 text-accent-200 absolute top-4 right-4" />
                <div className="flex gap-1 mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star
                      key={i}
                      className="w-5 h-5 fill-accent-500 text-accent-500"
                    />
                  ))}
                </div>
                <p className="text-gray-700 mb-6 italic leading-relaxed">
                  "{testimonial.text}"
                </p>
                <div>
                  <p className="font-bold text-gray-900">{testimonial.name}</p>
                  <p className="text-sm text-gray-600">
                    {testimonial.role}, {testimonial.company}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </PageContainer>
      </section>

      {/* Case Studies */}
      <section className="py-20 md:py-24 bg-gray-50">
        <PageContainer>
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 bg-accent-50 border border-accent-200/50 rounded-full px-5 py-2.5 mb-6">
              <Star className="w-4 h-4 text-accent-600" />
              <span className="text-sm font-semibold text-accent-800 uppercase tracking-wider">
                Case Studies
              </span>
            </div>
            <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-4">
              Success Stories
            </h2>
          </div>
          <div className="space-y-8 max-w-4xl mx-auto">
            {caseStudies.map((study, index) => (
              <div
                key={index}
                className="bg-white border border-gray-200 p-8 md:p-10 rounded-2xl shadow-sm hover:shadow-xl transition-all duration-300"
              >
                <h3 className="text-2xl md:text-3xl font-bold mb-2 text-gray-900">
                  {study.title}
                </h3>
                <p className="text-sm text-gray-500 mb-6">
                  Client: {study.client}
                </p>

                <div className="grid md:grid-cols-2 gap-6 mb-6">
                  <div>
                    <h4 className="font-bold text-gray-900 mb-2">Challenge</h4>
                    <p className="text-gray-600">{study.challenge}</p>
                  </div>
                  <div>
                    <h4 className="font-bold text-gray-900 mb-2">Solution</h4>
                    <p className="text-gray-600">{study.solution}</p>
                  </div>
                </div>

                <div>
                  <h4 className="font-bold text-gray-900 mb-3">Results</h4>
                  <ul className="space-y-2">
                    {study.results.map((result, rIndex) => (
                      <li key={rIndex} className="flex items-start gap-2">
                        <span className="text-accent-600 font-bold">✓</span>
                        <span className="text-gray-600">{result}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </PageContainer>
      </section>

      {/* Skills & Expertise */}
      <section className="py-20 md:py-24 bg-white">
        <PageContainer>
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 bg-accent-50 border border-accent-200/50 rounded-full px-5 py-2.5 mb-6">
              <Star className="w-4 h-4 text-accent-600" />
              <span className="text-sm font-semibold text-accent-800 uppercase tracking-wider">
                Expertise
              </span>
            </div>
            <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-4">
              Tools & Expertise
            </h2>
          </div>
          <div className="grid md:grid-cols-4 gap-6 max-w-5xl mx-auto">
            {[
              "Google Workspace",
              "Microsoft 365",
              "Asana",
              "Trello",
              "Slack",
              "Zoom",
              "HubSpot",
              "Salesforce",
              "Mailchimp",
              "Canva",
              "Hootsuite",
              "QuickBooks",
            ].map((tool, index) => (
              <div
                key={index}
                className="bg-gray-50 border border-gray-200 p-4 rounded-xl text-center font-semibold text-gray-700 hover:shadow-md transition-all duration-300 hover:-translate-y-1"
              >
                {tool}
              </div>
            ))}
          </div>
        </PageContainer>
      </section>

      {/* CTA - Book Discovery Call */}
      <section className="py-16 bg-accent-600 text-white">
        <PageContainer>
          <h2 className="text-4xl font-bold mb-4">
            Ready to Experience the Same Success?
          </h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            Book a free discovery call to discuss your needs and see how we can
            help your business thrive
          </p>
          <Link
            href="/contact"
            className="bg-white text-accent-600 px-8 py-4 rounded-lg font-semibold text-lg hover:bg-gray-100 transition inline-block"
          >
            Schedule Your Discovery Call Now
          </Link>
        </PageContainer>
      </section>
    </main>
  );
}
