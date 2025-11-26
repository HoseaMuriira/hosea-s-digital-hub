import { ArrowRight, Code, Briefcase, Target } from "lucide-react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import hoseaProfile from "@/assets/hosea-profile-2.jpg";

const Home = () => {
  return (
    <div className="min-h-screen">
      <Navbar />

      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-16">
        <div className="absolute inset-0 bg-gradient-hero opacity-10"></div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="space-y-6 animate-fade-in">
              <h1 className="text-5xl md:text-7xl font-bold leading-tight">
                Hosea Muriira
              </h1>
              <p className="text-2xl md:text-3xl text-muted-foreground">
                Empowering Growth through
              </p>
              <p className="text-2xl md:text-3xl font-semibold bg-gradient-accent bg-clip-text text-transparent">
                Technology, Leadership & Vision
              </p>
              <p className="text-lg text-muted-foreground max-w-lg">
                Developer. Entrepreneur. Leader. Transforming ideas into reality through code, strategy, and innovation.
              </p>
              <div className="flex flex-wrap gap-4">
                <Link to="/about">
                  <Button size="lg" className="shadow-elegant">
                    Explore My World <ArrowRight className="ml-2 w-4 h-4" />
                  </Button>
                </Link>
                <Link to="/contact">
                  <Button size="lg" variant="outline">
                    Get In Touch
                  </Button>
                </Link>
              </div>
            </div>
            <div className="animate-fade-in flex justify-center">
              <div className="relative">
                <div className="absolute inset-0 bg-gradient-hero rounded-full blur-3xl opacity-20 animate-float"></div>
                <img
                  src={hoseaProfile}
                  alt="Hosea Muriira"
                  className="relative rounded-full w-80 h-80 object-cover border-4 border-accent shadow-elegant"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-secondary/30">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
            What I Offer
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            <Card className="hover:shadow-elegant transition-all duration-300 hover:-translate-y-2">
              <CardContent className="p-6 space-y-4">
                <div className="w-12 h-12 bg-gradient-hero rounded-lg flex items-center justify-center">
                  <Code className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-xl font-semibold">Tech & Development</h3>
                <p className="text-muted-foreground">
                  Building cutting-edge web applications with modern technologies and best practices.
                </p>
                <Link to="/coding" className="text-primary hover:underline inline-flex items-center">
                  View Projects <ArrowRight className="ml-2 w-4 h-4" />
                </Link>
              </CardContent>
            </Card>

            <Card className="hover:shadow-elegant transition-all duration-300 hover:-translate-y-2">
              <CardContent className="p-6 space-y-4">
                <div className="w-12 h-12 bg-gradient-accent rounded-lg flex items-center justify-center">
                  <Briefcase className="w-6 h-6 text-accent-foreground" />
                </div>
                <h3 className="text-xl font-semibold">Business & Politics</h3>
                <p className="text-muted-foreground">
                  Strategic insights on entrepreneurship, leadership, and policy development.
                </p>
                <Link to="/business-politics" className="text-primary hover:underline inline-flex items-center">
                  Learn More <ArrowRight className="ml-2 w-4 h-4" />
                </Link>
              </CardContent>
            </Card>

            <Card className="hover:shadow-elegant transition-all duration-300 hover:-translate-y-2">
              <CardContent className="p-6 space-y-4">
                <div className="w-12 h-12 bg-primary rounded-lg flex items-center justify-center">
                  <Target className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-xl font-semibold">Consulting & Mentorship</h3>
                <p className="text-muted-foreground">
                  Guiding individuals and organizations to achieve their full potential.
                </p>
                <Link to="/contact" className="text-primary hover:underline inline-flex items-center">
                  Get Started <ArrowRight className="ml-2 w-4 h-4" />
                </Link>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-hero text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Ready to Build Something Amazing?
          </h2>
          <p className="text-lg mb-8 max-w-2xl mx-auto opacity-90">
            Whether you need a website, consulting, or mentorship, let's work together to bring your vision to life.
          </p>
          <Link to="/contact">
            <Button size="lg" variant="secondary" className="shadow-lg hover:shadow-xl transition-all">
              Start a Conversation <ArrowRight className="ml-2 w-4 h-4" />
            </Button>
          </Link>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Home;
