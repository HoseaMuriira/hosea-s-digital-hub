import { useState } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { Mail, MapPin, Phone, Send } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

const Contact = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast({
      title: "Message Sent!",
      description: "Thank you for reaching out. I'll get back to you soon.",
    });
    setFormData({ name: "", email: "", subject: "", message: "" });
  };

  const contactInfo = [
    {
      icon: Mail,
      title: "Email",
      content: "hosea@hostech.africa",
      link: "mailto:hosea@hostech.africa",
    },
    {
      icon: Phone,
      title: "Phone",
      content: "+254 XXX XXX XXX",
      link: "tel:+254XXXXXXXXX",
    },
    {
      icon: MapPin,
      title: "Location",
      content: "Nairobi, Kenya",
      link: "#",
    },
  ];

  return (
    <div className="min-h-screen">
      <Navbar />

      <main className="pt-24 pb-16">
        <div className="container mx-auto px-4">
          {/* Hero */}
          <div className="text-center mb-16 animate-fade-in">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">Get In Touch</h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Have a project in mind or want to discuss opportunities? I'd love to hear from you.
            </p>
          </div>

          <div className="grid lg:grid-cols-3 gap-12">
            {/* Contact Info */}
            <div className="space-y-6">
              <h2 className="text-2xl font-bold mb-6">Contact Information</h2>
              {contactInfo.map((info, index) => (
                <Card key={index} className="hover:shadow-md transition-shadow">
                  <CardContent className="p-6">
                    <a
                      href={info.link}
                      className="flex items-start gap-4 group"
                    >
                      <div className="w-12 h-12 bg-gradient-hero rounded-lg flex items-center justify-center flex-shrink-0">
                        <info.icon className="w-6 h-6 text-white" />
                      </div>
                      <div>
                        <h3 className="font-semibold mb-1 group-hover:text-primary transition-colors">
                          {info.title}
                        </h3>
                        <p className="text-muted-foreground">{info.content}</p>
                      </div>
                    </a>
                  </CardContent>
                </Card>
              ))}

              <Card className="bg-gradient-accent">
                <CardContent className="p-6 text-accent-foreground">
                  <h3 className="font-semibold mb-2">Office Hours</h3>
                  <p className="text-sm">Monday - Friday</p>
                  <p className="text-sm">9:00 AM - 6:00 PM EAT</p>
                </CardContent>
              </Card>
            </div>

            {/* Contact Form */}
            <div className="lg:col-span-2">
              <Card>
                <CardContent className="p-8">
                  <h2 className="text-2xl font-bold mb-6">Send a Message</h2>
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="grid md:grid-cols-2 gap-6">
                      <div className="space-y-2">
                        <label htmlFor="name" className="text-sm font-medium">
                          Name *
                        </label>
                        <Input
                          id="name"
                          placeholder="Your name"
                          value={formData.name}
                          onChange={(e) =>
                            setFormData({ ...formData, name: e.target.value })
                          }
                          required
                        />
                      </div>
                      <div className="space-y-2">
                        <label htmlFor="email" className="text-sm font-medium">
                          Email *
                        </label>
                        <Input
                          id="email"
                          type="email"
                          placeholder="your.email@example.com"
                          value={formData.email}
                          onChange={(e) =>
                            setFormData({ ...formData, email: e.target.value })
                          }
                          required
                        />
                      </div>
                    </div>
                    <div className="space-y-2">
                      <label htmlFor="subject" className="text-sm font-medium">
                        Subject *
                      </label>
                      <Input
                        id="subject"
                        placeholder="What is this about?"
                        value={formData.subject}
                        onChange={(e) =>
                          setFormData({ ...formData, subject: e.target.value })
                        }
                        required
                      />
                    </div>
                    <div className="space-y-2">
                      <label htmlFor="message" className="text-sm font-medium">
                        Message *
                      </label>
                      <Textarea
                        id="message"
                        placeholder="Tell me more about your project or inquiry..."
                        rows={6}
                        value={formData.message}
                        onChange={(e) =>
                          setFormData({ ...formData, message: e.target.value })
                        }
                        required
                      />
                    </div>
                    <Button type="submit" size="lg" className="w-full">
                      Send Message <Send className="ml-2 w-4 h-4" />
                    </Button>
                  </form>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default Contact;
