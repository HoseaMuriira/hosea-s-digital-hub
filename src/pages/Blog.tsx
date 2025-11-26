import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Calendar, Clock, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

const Blog = () => {
  const posts = [
    {
      title: "The Future of Web Development: Trends to Watch in 2024",
      excerpt: "Exploring emerging technologies and practices that are shaping the future of web development, from AI integration to edge computing.",
      category: "Technology",
      date: "November 20, 2024",
      readTime: "5 min read",
    },
    {
      title: "Building Sustainable Businesses in a Digital Economy",
      excerpt: "Strategic insights on creating profitable ventures while maintaining social responsibility and environmental consciousness.",
      category: "Business",
      date: "November 15, 2024",
      readTime: "7 min read",
    },
    {
      title: "Leadership in the Age of Remote Work",
      excerpt: "How modern leaders can effectively manage distributed teams and maintain company culture in a hybrid work environment.",
      category: "Leadership",
      date: "November 10, 2024",
      readTime: "6 min read",
    },
    {
      title: "Digital Transformation in Public Service",
      excerpt: "The critical role of technology in modernizing government services and improving citizen engagement.",
      category: "Politics",
      date: "November 5, 2024",
      readTime: "8 min read",
    },
    {
      title: "Microservices Architecture: Best Practices",
      excerpt: "A comprehensive guide to designing, implementing, and maintaining scalable microservices-based applications.",
      category: "Technology",
      date: "October 30, 2024",
      readTime: "10 min read",
    },
    {
      title: "Empowering Youth Through Technology Education",
      excerpt: "Why investing in tech education for young people is crucial for economic development and innovation.",
      category: "Business",
      date: "October 25, 2024",
      readTime: "5 min read",
    },
  ];

  const categories = ["All", "Technology", "Business", "Leadership", "Politics"];

  return (
    <div className="min-h-screen">
      <Navbar />

      <main className="pt-24 pb-16">
        <div className="container mx-auto px-4">
          {/* Hero */}
          <div className="text-center mb-16 animate-fade-in">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">Blog & Insights</h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Thoughts, ideas, and perspectives on technology, business, leadership, and innovation.
            </p>
          </div>

          {/* Categories */}
          <div className="flex flex-wrap justify-center gap-3 mb-12">
            {categories.map((category) => (
              <Badge
                key={category}
                variant={category === "All" ? "default" : "outline"}
                className="cursor-pointer hover:bg-primary hover:text-primary-foreground transition-colors px-4 py-2"
              >
                {category}
              </Badge>
            ))}
          </div>

          {/* Blog Posts */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {posts.map((post, index) => (
              <Card key={index} className="hover:shadow-elegant transition-all duration-300 hover:-translate-y-2">
                <CardContent className="p-6 space-y-4">
                  <Badge variant="secondary">{post.category}</Badge>
                  <h3 className="text-xl font-semibold line-clamp-2">{post.title}</h3>
                  <p className="text-muted-foreground text-sm line-clamp-3">{post.excerpt}</p>
                  <div className="flex items-center gap-4 text-sm text-muted-foreground">
                    <div className="flex items-center gap-1">
                      <Calendar className="w-4 h-4" />
                      <span>{post.date}</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <Clock className="w-4 h-4" />
                      <span>{post.readTime}</span>
                    </div>
                  </div>
                  <Button variant="ghost" className="w-full justify-between group">
                    Read More
                    <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Newsletter CTA */}
          <section className="mt-20 bg-gradient-hero text-white rounded-lg p-12 text-center">
            <h2 className="text-3xl font-bold mb-4">Stay Updated</h2>
            <p className="text-lg mb-8 max-w-2xl mx-auto opacity-90">
              Subscribe to receive the latest insights on technology, business, and leadership directly in your inbox.
            </p>
            <div className="flex gap-3 max-w-md mx-auto">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 px-4 py-3 rounded-md text-foreground focus:outline-none focus:ring-2 focus:ring-accent"
              />
              <Button variant="secondary" size="lg">Subscribe</Button>
            </div>
          </section>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default Blog;
