import { FileText, Clock, Users, DollarSign, CheckCircle, MessageSquare, BarChart2, AlertCircle, Mail, Bell, History } from "lucide-react";
import { Button } from "@/components/ui/button";

const Stats = () => (
  <div className="grid grid-cols-2 md:grid-cols-4 gap-8 my-12">
    {[
      { value: "15+", label: "Hours Saved Monthly" },
      { value: "99%", label: "Billing Accuracy" },
      { value: "1,000+", label: "Happy Customers" },
      { value: "4.9/5", label: "Customer Rating" },
    ].map((stat) => (
      <div key={stat.value} className="text-center">
        <h3 className="text-4xl font-bold text-gray-900 mb-2">{stat.value}</h3>
        <p className="text-gray-600">{stat.label}</p>
      </div>
    ))}
  </div>
);

const ProblemCard = ({ icon: Icon, title, description }: { icon: any; title: string; description: string }) => (
  <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-100 hover:shadow-md transition-shadow">
    <Icon className="h-6 w-6 text-purple-600 mb-4" />
    <h3 className="text-xl font-semibold mb-2 text-gray-900">{title}</h3>
    <p className="text-gray-600">{description}</p>
  </div>
);

const FeatureCard = ({ icon: Icon, title, description }: { icon: any; title: string; description: string }) => (
  <div className="flex flex-col gap-4">
    <Icon className="h-6 w-6 text-purple-600" />
    <h3 className="text-xl font-semibold text-gray-900">{title}</h3>
    <p className="text-gray-600">{description}</p>
  </div>
);

const BenefitCard = ({ icon: Icon, title, description }: { icon: any; title: string; description: string }) => (
  <div className="bg-white p-6 rounded-lg">
    <Icon className="h-6 w-6 text-purple-600 mb-4" />
    <h3 className="text-xl font-semibold mb-2 text-gray-900">{title}</h3>
    <p className="text-gray-600">{description}</p>
  </div>
);

const GoalCard = ({ title }: { title: string }) => (
  <div className="bg-white/50 p-4 rounded-lg border border-purple-100">
    <p className="text-gray-700">{title}</p>
  </div>
);

const Index = () => {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-b from-purple-50 to-white py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="max-w-3xl mx-auto text-center mb-12">
            <h1 className="text-5xl font-bold text-gray-900 mb-6">
              No More Chasing Payments Manually!
            </h1>
            <p className="text-xl text-gray-600 mb-8">
              Transform your invoicing workflow from chaos to clarity. Automated reminders, real-time tracking, and professional follow-ups all in one place.
            </p>
            <div className="flex gap-4 justify-center mb-12">
              <Button size="lg" className="bg-purple-600 hover:bg-purple-700">
                Request Early Access
              </Button>
              <Button size="lg" variant="outline">
                Watch Demo
              </Button>
            </div>
            <div className="flex items-center justify-center gap-2 text-gray-600">
              <div className="flex -space-x-2">
                {[1, 2, 3].map((i) => (
                  <div key={i} className="w-8 h-8 rounded-full bg-gray-200 border-2 border-white" />
                ))}
              </div>
              <span>Trusted by 1,000+ finance teams</span>
            </div>
          </div>
          <Stats />
        </div>
      </section>

      {/* Problem Section */}
      <section className="py-20 px-4 bg-white">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-2xl font-semibold text-gray-600 mb-4">The Payment Problem</h2>
            <h3 className="text-4xl font-bold text-gray-900 mb-6">
              Service Providers Are Losing Time & Money
            </h3>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Manual invoicing and payment tracking are costing businesses thousands in lost time, delayed payments, and poor client relationships
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                icon: Clock,
                title: "Manual Invoice Generation",
                description: "Hours wasted creating and sending invoices manually each month."
              },
              {
                icon: Bell,
                title: "Forgotten Reminders",
                description: "Missing payment deadlines due to inconsistent follow-ups."
              },
              {
                icon: History,
                title: "No Payment Visibility",
                description: "Lack of real-time tracking on payment status and history."
              },
              {
                icon: MessageSquare,
                title: "Poor Client Experience",
                description: "Unprofessional follow-ups damaging client relationships."
              }
            ].map((problem, i) => (
              <ProblemCard key={i} {...problem} />
            ))}
          </div>
        </div>
      </section>

      {/* Goals Section */}
      <section className="py-20 px-4 bg-purple-50">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-900 mb-6">
              Our Goals & Objectives
            </h2>
            <p className="text-xl text-gray-600 mb-8">
              We're transforming how service providers handle invoicing and payments
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4 max-w-4xl mx-auto">
            {[
              "Eliminate manual invoice creation and tracking",
              "Ensure timely payments through automated reminders",
              "Provide clear visibility into payment status",
              "Improve client communication and experience",
              "Enable data-driven financial decisions",
              "Streamline the entire billing workflow"
            ].map((goal, index) => (
              <GoalCard key={index} title={goal} />
            ))}
          </div>
        </div>
      </section>

      {/* Core Features Section */}
      <section className="py-20 px-4 bg-white">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-900 mb-6">
              Powerful Features for Modern Businesses
            </h2>
            <p className="text-xl text-gray-600">
              Everything you need to streamline your invoicing workflow
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                icon: FileText,
                title: "Auto-generated Invoices",
                description: "Create professional invoices automatically from your timesheet data."
              },
              {
                icon: DollarSign,
                title: "Smart Payment Tracking",
                description: "Real-time visibility into payment status, history, and forecasts."
              },
              {
                icon: Clock,
                title: "Delayed Payment Reports",
                description: "Instant insights into overdue payments and payment patterns."
              },
              {
                icon: Mail,
                title: "Automated Reminders",
                description: "Multi-channel payment reminders via email, WhatsApp, and SMS."
              },
              {
                icon: MessageSquare,
                title: "Feedback Collection",
                description: "Gather client feedback automatically after payment completion."
              },
              {
                icon: BarChart2,
                title: "Performance Dashboard",
                description: "Comprehensive KPIs and reports for organization owners."
              }
            ].map((feature, i) => (
              <FeatureCard key={i} {...feature} />
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20 px-4 bg-purple-50">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-900 mb-6">
              Transform Your Business
            </h2>
            <p className="text-xl text-gray-600">
              See immediate results across your entire organization
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                icon: Clock,
                title: "Save 15+ Hours",
                description: "Eliminate manual invoice creation and follow-ups."
              },
              {
                icon: DollarSign,
                title: "Faster Payments",
                description: "Reduce average payment time by 60% with smart reminders."
              },
              {
                icon: Users,
                title: "Better Relationships",
                description: "Maintain professional communication with clients."
              },
              {
                icon: BarChart2,
                title: "Data-Driven Insights",
                description: "Make informed decisions with comprehensive analytics."
              }
            ].map((benefit, i) => (
              <BenefitCard key={i} {...benefit} />
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 bg-white">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-4xl font-bold text-gray-900 mb-6">
            Ready to Transform Your Invoicing Process?
          </h2>
          <p className="text-xl text-gray-600 mb-8">
            Join the finance teams who've automated their invoicing workflow and improved client relationships.
          </p>
          <div className="flex gap-4 justify-center">
            <Button size="lg" className="bg-purple-600 hover:bg-purple-700">
              Request Early Access →
            </Button>
            <Button size="lg" variant="outline">
              Schedule Demo
            </Button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-white py-12 px-4 border-t">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
            <div>
              <div className="flex items-center gap-2 mb-6">
                <FileText className="h-6 w-6" />
                <span className="text-xl font-bold">InvoiceGenius</span>
              </div>
              <p className="text-gray-600 mb-4">
                Transforming complex timesheets into professional invoices for finance teams worldwide.
              </p>
            </div>
            <div>
              <h3 className="font-semibold mb-4">Product</h3>
              <ul className="space-y-3">
                {["Features", "Pricing", "API", "Integrations"].map((item) => (
                  <li key={item}>
                    <a href="#" className="text-gray-600 hover:text-purple-600">
                      {item}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <h3 className="font-semibold mb-4">Resources</h3>
              <ul className="space-y-3">
                {["Help Center", "Blog", "Case Studies", "Contact Us"].map((item) => (
                  <li key={item}>
                    <a href="#" className="text-gray-600 hover:text-purple-600">
                      {item}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <h3 className="font-semibold mb-4">Legal</h3>
              <ul className="space-y-3">
                {["Privacy Policy", "Terms of Service", "Cookies"].map((item) => (
                  <li key={item}>
                    <a href="#" className="text-gray-600 hover:text-purple-600">
                      {item}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </div>
          <div className="text-center text-gray-600 pt-8 border-t">
            © 2025 Invoice Genius. All rights reserved.
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
