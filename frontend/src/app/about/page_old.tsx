import type { Metadata } from "next";
import { Award, Globe, Heart, Target, Users, Zap } from "lucide-react";
import Link from "next/link";

export const metadata: Metadata = {
  title: "About Us | VirtuServe",
  description:
    "Learn about our professional story, background, experience, and what drives us. Building trust with international clients who want to know who they're working with.",
};

export default function About() {
  return (
    <main className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-blue-600 to-blue-800 text-white py-16">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-5xl font-bold mb-4">About VirtuServe</h1>
          <p className="text-xl max-w-3xl mx-auto">
            Your professional story, background, experience, and what drives
            you. This helps build trust with international clients who want to
            know who they're working with.
          </p>
        </div>
      </section>

      {/* Our Story */}
      <section className="py-16 bg-white dark:bg-gray-900">
        <div className="container mx-auto px-4 max-w-4xl">
          <h2 className="text-4xl font-bold mb-8 text-gray-900 dark:text-white text-center">
            Our Story
          </h2>
          <div className="prose prose-lg dark:prose-invert max-w-none">
            <p className="text-lg text-gray-700 dark:text-gray-300 mb-6">
              VirtuServe was founded with a simple mission: to help businesses
              and entrepreneurs reclaim their time and focus on what truly
              matters. With over [X] years of experience in providing virtual
              assistant services to international clients, we understand the
              challenges of managing a growing business while staying on top of
              administrative tasks.
            </p>
            <p className="text-lg text-gray-700 dark:text-gray-300 mb-6">
              What started as a one-person operation has grown into a
              professional virtual assistant service that supports businesses
              across multiple time zones and industries. We've worked with
              startups, established companies, solopreneurs, and everything in
              between.
            </p>
            <p className="text-lg text-gray-700 dark:text-gray-300">
              Our approach is simple: we treat your business like it's our own.
              Every task, no matter how small, receives the attention and
              professionalism it deserves. We believe in building long-term
              partnerships, not just completing one-off tasks.
            </p>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-16 bg-gray-50 dark:bg-gray-800">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold mb-12 text-gray-900 dark:text-white text-center">
            Our Core Values
          </h2>
          <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            <div className="text-center">
              <div className="bg-blue-600 text-white w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-4">
                <Heart className="w-10 h-10" />
              </div>
              <h3 className="text-2xl font-bold mb-3 text-gray-900 dark:text-white">
                Reliability
              </h3>
              <p className="text-gray-600 dark:text-gray-300">
                You can count on us to deliver consistent, high-quality work
                every single time. We meet deadlines and exceed expectations.
              </p>
            </div>
            <div className="text-center">
              <div className="bg-blue-600 text-white w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-4">
                <Globe className="w-10 h-10" />
              </div>
              <h3 className="text-2xl font-bold mb-3 text-gray-900 dark:text-white">
                Global Perspective
              </h3>
              <p className="text-gray-600 dark:text-gray-300">
                Working across time zones and cultures, we bring a diverse
                perspective and adapt to your unique business needs.
              </p>
            </div>
            <div className="text-center">
              <div className="bg-blue-600 text-white w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-4">
                <Target className="w-10 h-10" />
              </div>
              <h3 className="text-2xl font-bold mb-3 text-gray-900 dark:text-white">
                Results-Driven
              </h3>
              <p className="text-gray-600 dark:text-gray-300">
                We focus on outcomes that move your business forward. Every task
                is completed with your goals in mind.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* What Makes Us Different */}
      <section className="py-16 bg-white dark:bg-gray-900">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold mb-12 text-gray-900 dark:text-white text-center">
            What Makes Us Different
          </h2>
          <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            <div className="flex gap-4">
              <Zap className="w-12 h-12 text-blue-600 flex-shrink-0" />
              <div>
                <h3 className="text-xl font-bold mb-2 text-gray-900 dark:text-white">
                  Proactive Communication
                </h3>
                <p className="text-gray-600 dark:text-gray-300">
                  We don't wait for you to check in. We provide regular updates,
                  flag potential issues early, and keep you informed every step
                  of the way.
                </p>
              </div>
            </div>
            <div className="flex gap-4">
              <Users className="w-12 h-12 text-blue-600 flex-shrink-0" />
              <div>
                <h3 className="text-xl font-bold mb-2 text-gray-900 dark:text-white">
                  International Experience
                </h3>
                <p className="text-gray-600 dark:text-gray-300">
                  Having worked with clients across multiple countries and
                  industries, we understand different business cultures and
                  adapt accordingly.
                </p>
              </div>
            </div>
            <div className="flex gap-4">
              <Award className="w-12 h-12 text-blue-600 flex-shrink-0" />
              <div>
                <h3 className="text-xl font-bold mb-2 text-gray-900 dark:text-white">
                  Professional Training
                </h3>
                <p className="text-gray-600 dark:text-gray-300">
                  Continuously updated skills in the latest tools and best
                  practices ensure you receive modern, efficient service.
                </p>
              </div>
            </div>
            <div className="flex gap-4">
              <Heart className="w-12 h-12 text-blue-600 flex-shrink-0" />
              <div>
                <h3 className="text-xl font-bold mb-2 text-gray-900 dark:text-white">
                  Personalized Service
                </h3>
                <p className="text-gray-600 dark:text-gray-300">
                  No cookie-cutter solutions. We take time to understand your
                  business, your preferences, and your goals to deliver
                  customized support.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Background & Experience */}
      <section className="py-16 bg-gray-50 dark:bg-gray-800">
        <div className="container mx-auto px-4 max-w-4xl">
          <h2 className="text-4xl font-bold mb-8 text-gray-900 dark:text-white text-center">
            Background & Experience
          </h2>
          <div className="space-y-6">
            <div className="bg-white dark:bg-gray-900 p-6 rounded-lg shadow">
              <h3 className="text-xl font-bold mb-2 text-gray-900 dark:text-white">
                Professional Experience
              </h3>
              <p className="text-gray-600 dark:text-gray-300">
                [X]+ years providing virtual assistant services to international
                clients across various industries including tech, finance,
                healthcare, and e-commerce.
              </p>
            </div>
            <div className="bg-white dark:bg-gray-900 p-6 rounded-lg shadow">
              <h3 className="text-xl font-bold mb-2 text-gray-900 dark:text-white">
                Specialized Skills
              </h3>
              <p className="text-gray-600 dark:text-gray-300">
                Expert proficiency in project management tools (Asana, Trello,
                Monday.com), CRM systems (Salesforce, HubSpot), and
                communication platforms (Slack, Zoom, Teams).
              </p>
            </div>
            <div className="bg-white dark:bg-gray-900 p-6 rounded-lg shadow">
              <h3 className="text-xl font-bold mb-2 text-gray-900 dark:text-white">
                Language & Cultural Fluency
              </h3>
              <p className="text-gray-600 dark:text-gray-300">
                Fluent in [languages], with deep understanding of international
                business etiquette and cross-cultural communication.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-blue-600 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold mb-4">Let's Work Together</h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            Ready to experience professional virtual assistant services that
            truly understand your needs? Let's start with a conversation.
          </p>
          <Link
            href="/contact"
            className="bg-white text-blue-600 px-8 py-4 rounded-lg font-semibold text-lg hover:bg-gray-100 transition inline-block"
          >
            Book Your Discovery Call
          </Link>
        </div>
      </section>
    </main>
  );
}
