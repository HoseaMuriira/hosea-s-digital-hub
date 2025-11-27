import { ArrowRight, Code, Briefcase, Target } from "lucide-react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { HeroSlideshow } from "@/components/HeroSlideshow";
import { CommentsSection } from "@/components/CommentsSection";
import Footer from "@/components/Footer";
import { useVisitorTracking } from "@/hooks/useVisitorTracking";

const Home = () => {
  useVisitorTracking();

  return (
    <div className="min-h-screen">
      <HeroSlideshow />

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

      {/* Comments Section */}
      <CommentsSection />

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
