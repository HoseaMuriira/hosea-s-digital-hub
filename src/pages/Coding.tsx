import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ExternalLink, Github } from "lucide-react";

const Coding = () => {
  const projects = [
    {
      title: "E-Commerce Platform",
      description: "Full-stack e-commerce solution with payment integration, inventory management, and real-time analytics.",
      tags: ["React", "Node.js", "MongoDB", "Stripe"],
      github: "#",
      demo: "#",
    },
    {
      title: "Task Management System",
      description: "Collaborative project management tool with real-time updates, team collaboration features, and progress tracking.",
      tags: ["TypeScript", "Next.js", "PostgreSQL", "WebSockets"],
      github: "#",
      demo: "#",
    },
    {
      title: "Healthcare Portal",
      description: "Patient management system for healthcare providers with appointment scheduling and medical records.",
      tags: ["React", "Express", "MySQL", "AWS"],
      github: "#",
      demo: "#",
    },
    {
      title: "Social Media Dashboard",
      description: "Analytics dashboard for social media management with multi-platform integration and automated reporting.",
      tags: ["Vue.js", "Python", "Redis", "Docker"],
      github: "#",
      demo: "#",
    },
    {
      title: "Learning Management System",
      description: "Educational platform with course management, video streaming, and student progress tracking.",
      tags: ["React", "Node.js", "MongoDB", "WebRTC"],
      github: "#",
      demo: "#",
    },
    {
      title: "IoT Dashboard",
      description: "Real-time monitoring dashboard for IoT devices with data visualization and alert systems.",
      tags: ["React", "MQTT", "InfluxDB", "Grafana"],
      github: "#",
      demo: "#",
    },
  ];

  const skills = [
    { category: "Frontend", items: ["React", "TypeScript", "Next.js", "Vue.js", "Tailwind CSS"] },
    { category: "Backend", items: ["Node.js", "Express", "Python", "Django", "REST APIs"] },
    { category: "Database", items: ["MongoDB", "PostgreSQL", "MySQL", "Redis"] },
    { category: "Tools", items: ["Git", "Docker", "AWS", "CI/CD", "Agile"] },
  ];

  return (
    <div className="min-h-screen">
      <Navbar />

      <main className="pt-24 pb-16">
        <div className="container mx-auto px-4">
          {/* Hero */}
          <div className="text-center mb-16 animate-fade-in">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">Tech & Coding</h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Building modern web applications with cutting-edge technologies and best practices.
            </p>
          </div>

          {/* Tech Stack */}
          <section className="mb-20">
            <h2 className="text-3xl font-bold mb-12 text-center">Technical Expertise</h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {skills.map((skill) => (
                <Card key={skill.category} className="hover:shadow-md transition-shadow">
                  <CardContent className="p-6">
                    <h3 className="text-lg font-semibold mb-4 text-primary">{skill.category}</h3>
                    <div className="flex flex-wrap gap-2">
                      {skill.items.map((item) => (
                        <Badge key={item} variant="secondary">{item}</Badge>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </section>

          {/* Projects */}
          <section>
            <h2 className="text-3xl font-bold mb-12">Featured Projects</h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {projects.map((project, index) => (
                <Card key={index} className="hover:shadow-elegant transition-all duration-300 hover:-translate-y-2">
                  <CardContent className="p-6 space-y-4">
                    <h3 className="text-xl font-semibold">{project.title}</h3>
                    <p className="text-muted-foreground text-sm">{project.description}</p>
                    <div className="flex flex-wrap gap-2">
                      {project.tags.map((tag) => (
                        <Badge key={tag} variant="outline" className="text-xs">{tag}</Badge>
                      ))}
                    </div>
                    <div className="flex gap-3 pt-2">
                      <Button size="sm" variant="outline" asChild>
                        <a href={project.github} target="_blank" rel="noopener noreferrer">
                          <Github className="w-4 h-4 mr-2" />
                          Code
                        </a>
                      </Button>
                      <Button size="sm" asChild>
                        <a href={project.demo} target="_blank" rel="noopener noreferrer">
                          <ExternalLink className="w-4 h-4 mr-2" />
                          Demo
                        </a>
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </section>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default Coding;
