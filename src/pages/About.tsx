import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Card, CardContent } from "@/components/ui/card";
import { Award, BookOpen, Users, TrendingUp } from "lucide-react";
import hoseaProfile from "@/assets/hosea-profile-1.jpg";

const About = () => {
  return (
    <div className="min-h-screen">
      <Navbar />

      <main className="pt-24 pb-16">
        <div className="container mx-auto px-4">
          {/* Hero Section */}
          <div className="grid md:grid-cols-2 gap-12 items-center mb-20">
            <div className="space-y-6 animate-fade-in">
              <h1 className="text-4xl md:text-5xl font-bold">About Hosea Muriira</h1>
              <p className="text-xl text-muted-foreground leading-relaxed">
                A passionate technologist, entrepreneur, and leader dedicated to creating positive change through innovation and strategic thinking.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                My journey began with a curiosity for how technology could solve real-world problems. Over the years, I've evolved from a developer into a multifaceted professional who bridges the gap between technology, business, and leadership.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                Today, I work at the intersection of coding, entrepreneurship, and policy development, believing that true innovation happens when we combine technical expertise with strategic vision and social responsibility.
              </p>
            </div>
            <div className="animate-fade-in flex justify-center">
              <img
                src={hoseaProfile}
                alt="Hosea Muriira"
                className="rounded-lg shadow-elegant w-full max-w-md object-cover"
              />
            </div>
          </div>

          {/* Values Section */}
          <section className="mb-20">
            <h2 className="text-3xl font-bold mb-12 text-center">Core Values</h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              <Card className="hover:shadow-elegant transition-all duration-300">
                <CardContent className="p-6 space-y-4">
                  <div className="w-12 h-12 bg-gradient-hero rounded-lg flex items-center justify-center">
                    <Award className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="text-lg font-semibold">Excellence</h3>
                  <p className="text-sm text-muted-foreground">
                    Committed to delivering the highest quality in every project and endeavor.
                  </p>
                </CardContent>
              </Card>

              <Card className="hover:shadow-elegant transition-all duration-300">
                <CardContent className="p-6 space-y-4">
                  <div className="w-12 h-12 bg-gradient-accent rounded-lg flex items-center justify-center">
                    <BookOpen className="w-6 h-6 text-accent-foreground" />
                  </div>
                  <h3 className="text-lg font-semibold">Continuous Learning</h3>
                  <p className="text-sm text-muted-foreground">
                    Always growing, adapting, and staying ahead of industry trends.
                  </p>
                </CardContent>
              </Card>

              <Card className="hover:shadow-elegant transition-all duration-300">
                <CardContent className="p-6 space-y-4">
                  <div className="w-12 h-12 bg-primary rounded-lg flex items-center justify-center">
                    <Users className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="text-lg font-semibold">Collaboration</h3>
                  <p className="text-sm text-muted-foreground">
                    Building strong partnerships and empowering teams to succeed together.
                  </p>
                </CardContent>
              </Card>

              <Card className="hover:shadow-elegant transition-all duration-300">
                <CardContent className="p-6 space-y-4">
                  <div className="w-12 h-12 bg-accent rounded-lg flex items-center justify-center">
                    <TrendingUp className="w-6 h-6 text-accent-foreground" />
                  </div>
                  <h3 className="text-lg font-semibold">Impact</h3>
                  <p className="text-sm text-muted-foreground">
                    Creating meaningful change that benefits communities and organizations.
                  </p>
                </CardContent>
              </Card>
            </div>
          </section>

          {/* Mission Section */}
          <section className="bg-gradient-hero text-white rounded-lg p-12 text-center">
            <h2 className="text-3xl font-bold mb-6">My Mission</h2>
            <p className="text-lg max-w-3xl mx-auto leading-relaxed opacity-90">
              To leverage technology, leadership, and strategic thinking to create innovative solutions that drive economic growth, empower individuals, and contribute to building a better society for future generations.
            </p>
          </section>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default About;
