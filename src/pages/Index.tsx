
import { FileText, Clock, Users, DollarSign, CheckCircle, MessageSquare, BarChart2, AlertCircle } from "lucide-react";
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

const Index = () => {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-b from-purple-50 to-white py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="max-w-3xl mx-auto text-center mb-12">
            <h1 className="text-5xl font-bold text-gray-900 mb-6">
              Streamline Client Invoicing Effortlessly
            </h1>
            <p className="text-xl text-gray-600 mb-8">
              Transform complex employee timesheets into professional invoices in seconds. 
              Reclaim hours of manual work each month and ensure billing accuracy.
            </p>
            <div className="flex gap-4 justify-center mb-12">
              <Button size="lg" className="bg-purple-600 hover:bg-purple-700">
                Get Started Now
              </Button>
              <Button size="lg" variant="outline">
                Book a Demo
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
              Service Providers Are Losing Money
            </h3>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Delayed payments and manual follow-ups are costing businesses thousands in lost time and cash flow
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                icon: Clock,
                title: "Manual Invoice Generation",
                description: "Hours wasted creating invoices from scratch for every billing cycle."
              },
              {
                icon: AlertCircle,
                title: "Forgotten Payment Reminders",
                description: "Missing the right timing to send reminders leads to further delays."
              },
              {
                icon: DollarSign,
                title: "No Payment Visibility",
                description: "No clear system to track who paid, who didn't, and what's outstanding."
              }
            ].map((problem, i) => (
              <ProblemCard key={i} {...problem} />
            ))}
          </div>
        </div>
      </section>

      {/* Solution Section */}
      <section className="py-20 px-4 bg-purple-50">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-900 mb-6">
              Automate Your Entire Invoicing Workflow
            </h2>
            <p className="text-xl text-gray-600">
              From employee timesheets to professional PDF invoices with just a few clicks
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12">
            {[
              {
                icon: CheckCircle,
                title: "Automated Calculations",
                description: "Instantly converts employee hours into accurate billable amounts based on fixed rates."
              },
              {
                icon: Users,
                title: "Team Management",
                description: "Easily assign team members to clients and track their 40-hour workweeks efficiently."
              },
              {
                icon: FileText,
                title: "Professional Invoices",
                description: "Generate branded PDF invoices with detailed breakdowns of hours, rates, and totals."
              },
              {
                icon: DollarSign,
                title: "Client Management",
                description: "Maintain client records and invoice history for seamless billing continuity."
              }
            ].map((feature, i) => (
              <FeatureCard key={i} {...feature} />
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20 px-4 bg-white">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-900 mb-6">
              Experience Transformative Value
            </h2>
            <p className="text-xl text-gray-600">
              See the impact across your entire organization with these key benefits
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                icon: Clock,
                title: "Save 15+ Hours",
                description: "Reclaim finance team time each month by eliminating manual calculations."
              },
              {
                icon: DollarSign,
                title: "Increase Revenue",
                description: "Capture all billable hours with precision, eliminating revenue leakage."
              },
              {
                icon: BarChart2,
                title: "Scale Effortlessly",
                description: "Maintain invoicing efficiency as your team and client base grows."
              }
            ].map((benefit, i) => (
              <BenefitCard key={i} {...benefit} />
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 bg-purple-50">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-4xl font-bold text-gray-900 mb-6">
            Ready to Transform Your Invoicing Process?
          </h2>
          <p className="text-xl text-gray-600 mb-8">
            Join the finance teams who've simplified their invoicing workflow and reclaimed valuable time.
          </p>
          <div className="flex gap-4 justify-center">
            <Button size="lg" className="bg-purple-600 hover:bg-purple-700">
              Get Started Now →
            </Button>
            <Button size="lg" variant="outline">
              Book a Demo
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
