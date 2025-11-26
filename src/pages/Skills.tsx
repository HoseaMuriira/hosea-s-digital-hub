import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Card, CardContent } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import { Code, Briefcase, Users, MessageSquare, Lightbulb, Target, Award } from "lucide-react";
import htmlCert from "@/assets/certificate-html.png";
import pythonCert from "@/assets/certificate-python.png";

const Skills = () => {
  const technicalSkills = [
    { name: "Full-Stack Development", level: 95 },
    { name: "React & TypeScript", level: 90 },
    { name: "Node.js & Express", level: 88 },
    { name: "Database Design", level: 85 },
    { name: "Cloud & DevOps", level: 82 },
    { name: "UI/UX Design", level: 80 },
  ];

  const professionalSkills = [
    {
      icon: Users,
      title: "Leadership",
      description: "Leading teams and projects with vision, empathy, and strategic thinking.",
      level: 90,
    },
    {
      icon: MessageSquare,
      title: "Communication",
      description: "Articulating complex ideas clearly to diverse audiences and stakeholders.",
      level: 92,
    },
    {
      icon: Lightbulb,
      title: "Problem Solving",
      description: "Analyzing challenges and developing innovative, practical solutions.",
      level: 94,
    },
    {
      icon: Target,
      title: "Strategic Planning",
      description: "Creating and executing comprehensive strategies for long-term success.",
      level: 88,
    },
    {
      icon: Briefcase,
      title: "Project Management",
      description: "Delivering projects on time and within scope using agile methodologies.",
      level: 86,
    },
    {
      icon: Code,
      title: "Technical Architecture",
      description: "Designing scalable, maintainable systems with best practices.",
      level: 89,
    },
  ];

  const achievements = [
    { year: "2024", title: "Led 10+ successful web development projects" },
    { year: "2023", title: "Mentored 15+ aspiring developers" },
    { year: "2023", title: "Contributed to community tech initiatives" },
    { year: "2022", title: "Launched entrepreneurship programs" },
  ];

  return (
    <div className="min-h-screen">
      <Navbar />

      <main className="pt-24 pb-16">
        <div className="container mx-auto px-4">
          {/* Hero */}
          <div className="text-center mb-16 animate-fade-in">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">Skills & Experience</h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              A comprehensive blend of technical expertise and professional skills honed through years of hands-on experience.
            </p>
          </div>

          {/* Technical Skills */}
          <section className="mb-20">
            <h2 className="text-3xl font-bold mb-12">Technical Skills</h2>
            <Card>
              <CardContent className="p-8">
                <div className="space-y-6">
                  {technicalSkills.map((skill) => (
                    <div key={skill.name} className="space-y-2">
                      <div className="flex justify-between items-center">
                        <span className="font-medium">{skill.name}</span>
                        <span className="text-sm text-muted-foreground">{skill.level}%</span>
                      </div>
                      <Progress value={skill.level} className="h-2" />
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </section>

          {/* Professional Skills */}
          <section className="mb-20">
            <h2 className="text-3xl font-bold mb-12">Professional Skills</h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {professionalSkills.map((skill) => (
                <Card key={skill.title} className="hover:shadow-elegant transition-all duration-300">
                  <CardContent className="p-6 space-y-4">
                    <div className="w-12 h-12 bg-gradient-hero rounded-lg flex items-center justify-center">
                      <skill.icon className="w-6 h-6 text-white" />
                    </div>
                    <h3 className="text-lg font-semibold">{skill.title}</h3>
                    <p className="text-sm text-muted-foreground">{skill.description}</p>
                    <div className="space-y-2">
                      <Progress value={skill.level} className="h-2" />
                      <span className="text-xs text-muted-foreground">{skill.level}% Proficiency</span>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </section>

          {/* Certifications */}
          <section className="mb-20">
            <div className="flex items-center gap-3 mb-12">
              <Award className="w-8 h-8 text-primary" />
              <h2 className="text-3xl font-bold">Certifications</h2>
            </div>
            <div className="grid md:grid-cols-2 gap-8">
              <Card className="overflow-hidden hover:shadow-elegant transition-all duration-300 group">
                <CardContent className="p-0">
                  <img 
                    src={htmlCert} 
                    alt="HTML Certificate of Completion from Codeliber" 
                    className="w-full h-auto group-hover:scale-105 transition-transform duration-300"
                  />
                </CardContent>
              </Card>
              <Card className="overflow-hidden hover:shadow-elegant transition-all duration-300 group">
                <CardContent className="p-0">
                  <img 
                    src={pythonCert} 
                    alt="Python Certificate of Completion from Codeliber" 
                    className="w-full h-auto group-hover:scale-105 transition-transform duration-300"
                  />
                </CardContent>
              </Card>
            </div>
          </section>

          {/* Achievements Timeline */}
          <section>
            <h2 className="text-3xl font-bold mb-12">Key Achievements</h2>
            <Card className="bg-gradient-to-br from-primary/5 to-accent/5">
              <CardContent className="p-8">
                <div className="space-y-8">
                  {achievements.map((achievement, index) => (
                    <div key={index} className="flex items-start gap-6">
                      <div className="flex-shrink-0">
                        <div className="w-16 h-16 bg-gradient-hero rounded-full flex items-center justify-center text-white font-bold">
                          {achievement.year}
                        </div>
                      </div>
                      <div className="flex-1 pt-3">
                        <p className="text-lg font-medium">{achievement.title}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </section>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default Skills;
