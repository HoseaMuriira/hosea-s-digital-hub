import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Building2, Users, TrendingUp, Lightbulb, Globe, Target } from "lucide-react";

const BusinessPolitics = () => {
  const businessAreas = [
    {
      icon: Building2,
      title: "Entrepreneurship",
      description: "Building sustainable businesses that create value and employment opportunities in the community.",
      tags: ["Startups", "Innovation", "Growth"],
    },
    {
      icon: Users,
      title: "Leadership Development",
      description: "Empowering the next generation of leaders through mentorship and strategic guidance.",
      tags: ["Mentorship", "Coaching", "Strategy"],
    },
    {
      icon: TrendingUp,
      title: "Economic Policy",
      description: "Advocating for policies that promote economic growth, innovation, and equal opportunities.",
      tags: ["Policy", "Economics", "Reform"],
    },
  ];

  const politicalVision = [
    {
      icon: Globe,
      title: "Digital Transformation",
      content: "Championing the adoption of technology in government services and public institutions to improve efficiency and transparency.",
    },
    {
      icon: Target,
      title: "Youth Empowerment",
      content: "Creating programs and policies that provide young people with skills, resources, and opportunities to succeed.",
    },
    {
      icon: Lightbulb,
      title: "Innovation Economy",
      content: "Building an ecosystem that supports innovation, entrepreneurship, and sustainable economic development.",
    },
  ];

  return (
    <div className="min-h-screen">
      <Navbar />

      <main className="pt-24 pb-16">
        <div className="container mx-auto px-4">
          {/* Hero */}
          <div className="text-center mb-16 animate-fade-in">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">Business & Politics</h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Combining entrepreneurial thinking with strategic policy development to create lasting impact.
            </p>
          </div>

          {/* Business Areas */}
          <section className="mb-20">
            <h2 className="text-3xl font-bold mb-12">Business Focus Areas</h2>
            <div className="grid md:grid-cols-3 gap-8">
              {businessAreas.map((area, index) => (
                <Card key={index} className="hover:shadow-elegant transition-all duration-300 hover:-translate-y-2">
                  <CardContent className="p-6 space-y-4">
                    <div className="w-12 h-12 bg-gradient-hero rounded-lg flex items-center justify-center">
                      <area.icon className="w-6 h-6 text-white" />
                    </div>
                    <h3 className="text-xl font-semibold">{area.title}</h3>
                    <p className="text-muted-foreground">{area.description}</p>
                    <div className="flex flex-wrap gap-2">
                      {area.tags.map((tag) => (
                        <Badge key={tag} variant="secondary">{tag}</Badge>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </section>

          {/* Political Vision */}
          <section className="mb-20">
            <h2 className="text-3xl font-bold mb-12">Political Vision & Advocacy</h2>
            <div className="space-y-8">
              {politicalVision.map((item, index) => (
                <Card key={index} className="hover:shadow-md transition-shadow">
                  <CardContent className="p-8">
                    <div className="flex items-start gap-6">
                      <div className="w-12 h-12 bg-gradient-accent rounded-lg flex items-center justify-center flex-shrink-0">
                        <item.icon className="w-6 h-6 text-accent-foreground" />
                      </div>
                      <div>
                        <h3 className="text-xl font-semibold mb-3">{item.title}</h3>
                        <p className="text-muted-foreground leading-relaxed">{item.content}</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </section>

          {/* Insights Section */}
          <section className="bg-secondary/30 rounded-lg p-12">
            <h2 className="text-3xl font-bold mb-6 text-center">Key Insights</h2>
            <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
              <div className="space-y-4">
                <h3 className="text-xl font-semibold">Economic Development</h3>
                <p className="text-muted-foreground">
                  Sustainable economic growth requires a balance between innovation, infrastructure development, and inclusive policies that ensure no one is left behind.
                </p>
              </div>
              <div className="space-y-4">
                <h3 className="text-xl font-semibold">Technology & Governance</h3>
                <p className="text-muted-foreground">
                  Digital transformation in government isn't just about technology—it's about reimagining how we deliver services and engage with citizens.
                </p>
              </div>
            </div>
          </section>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default BusinessPolitics;
