import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { ChevronRight, Github, Linkedin, Mail, ExternalLink } from "lucide-react";
import { useState } from "react";
import { toast } from "sonner";

/**
 * Design Philosophy: Soft Modernism
 * - Warm color palette (sage green, deep slate, coral)
 * - Organic curves and rounded corners (16-24px)
 * - Layered depth with soft shadows
 * - Playful hover states with smooth transitions
 * - Typography: Poppins headings, Inter body text
 */

interface Project {
  id: string;
  title: string;
  description: string;
  technologies: string[];
  link?: string;
  image?: string;
}

interface TechStack {
  category: string;
  technologies: string[];
}

const projects: Project[] = [
  {
    id: "1",
    title: "E-Commerce Platform",
    description: "Full-stack e-commerce solution with React frontend and Node.js backend. Features include product catalog, shopping cart, payment integration, and admin dashboard.",
    technologies: ["React", "Node.js", "MongoDB", "Stripe", "Tailwind CSS"],
    link: "#",
  },
  {
    id: "2",
    title: "Task Management App",
    description: "Real-time collaborative task management application with user authentication, team workspaces, and activity tracking.",
    technologies: ["React", "Firebase", "Tailwind CSS", "TypeScript"],
    link: "#",
  },
  {
    id: "3",
    title: "Portfolio Website",
    description: "Modern, responsive portfolio website showcasing projects and skills with smooth animations and optimized performance.",
    technologies: ["React", "Vite", "Tailwind CSS", "Framer Motion"],
    link: "#",
  },
  {
    id: "4",
    title: "Weather Dashboard",
    description: "Interactive weather application with real-time data, location search, and beautiful visualizations using weather APIs.",
    technologies: ["React", "API Integration", "Chart.js", "Tailwind CSS"],
    link: "#",
  },
];

const techStack: TechStack[] = [
  {
    category: "Frontend",
    technologies: ["React", "TypeScript", "Tailwind CSS", "Vite", "Next.js"],
  },
  {
    category: "Backend",
    technologies: ["Node.js", "Express", "Python", "PostgreSQL", "MongoDB"],
  },
  {
    category: "Tools & Platforms",
    technologies: ["Git", "Docker", "AWS", "Vercel", "GitHub Actions"],
  },
  {
    category: "Design",
    technologies: ["Figma", "UI/UX", "Responsive Design", "Accessibility"],
  },
];

export default function Home() {
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate form submission
    setTimeout(() => {
      toast.success("Message sent successfully! I'll get back to you soon.");
      setFormData({ name: "", email: "", message: "" });
      setIsSubmitting(false);
    }, 1000);
  };

  return (
    <div className="min-h-screen bg-background text-foreground">
      {/* Navigation */}
      <nav className="sticky top-0 z-50 bg-background/80 backdrop-blur-md border-b border-border">
        <div className="container flex items-center justify-between py-4">
          <div className="text-2xl font-bold gradient-accent bg-clip-text text-transparent">
            Portfolio
          </div>
          <div className="flex items-center gap-8">
            <a href="#about" className="text-sm font-medium hover:text-accent transition-colors">
              About
            </a>
            <a href="#projects" className="text-sm font-medium hover:text-accent transition-colors">
              Projects
            </a>
            <a href="#skills" className="text-sm font-medium hover:text-accent transition-colors">
              Skills
            </a>
            <a href="#contact" className="text-sm font-medium hover:text-accent transition-colors">
              Contact
            </a>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="container py-20 md:py-32">
        <div className="max-w-3xl">
          <h1 className="text-5xl md:text-6xl font-bold mb-6 leading-tight">
            Hi, I'm a <span className="gradient-accent bg-clip-text text-transparent">Full-Stack Developer</span>
          </h1>
          <p className="text-xl text-muted-foreground mb-8 leading-relaxed">
            I craft beautiful, functional web applications that solve real-world problems. With expertise in React, Node.js, and modern web technologies, I build scalable solutions that users love.
          </p>
          <div className="flex gap-4 flex-wrap">
            <Button className="soft-button">
              View My Work <ChevronRight className="ml-2 w-4 h-4" />
            </Button>
            <Button variant="outline" className="rounded-xl">
              Download Resume
            </Button>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="section-divider container py-20 md:py-32">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-4xl font-bold mb-6">About Me</h2>
            <p className="text-lg text-muted-foreground mb-4 leading-relaxed">
              I'm a passionate developer with 5+ years of experience building web applications. I started with HTML, CSS, and JavaScript, and have since mastered modern frameworks and backend technologies.
            </p>
            <p className="text-lg text-muted-foreground mb-4 leading-relaxed">
              My journey has taken me through startups and established companies, where I've learned the importance of clean code, user experience, and scalable architecture.
            </p>
            <p className="text-lg text-muted-foreground leading-relaxed">
              When I'm not coding, you'll find me exploring new technologies, contributing to open-source projects, or sharing knowledge with the developer community.
            </p>
          </div>
          <div className="space-y-4">
            <div className="soft-card">
              <h3 className="font-bold text-lg mb-2">🎓 Education</h3>
              <p className="text-muted-foreground">Bachelor's in Computer Science</p>
            </div>
            <div className="soft-card">
              <h3 className="font-bold text-lg mb-2">💼 Experience</h3>
              <p className="text-muted-foreground">5+ years in Full-Stack Development</p>
            </div>
            <div className="soft-card">
              <h3 className="font-bold text-lg mb-2">🌍 Location</h3>
              <p className="text-muted-foreground">Available for Remote Work</p>
            </div>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="section-divider container py-20 md:py-32">
        <h2 className="text-4xl font-bold mb-12">Featured Projects</h2>
        <div className="grid md:grid-cols-2 gap-8">
          {projects.map((project) => (
            <Card key={project.id} className="soft-card overflow-hidden hover:scale-105 transition-transform duration-300">
              <h3 className="text-2xl font-bold mb-3">{project.title}</h3>
              <p className="text-muted-foreground mb-4 leading-relaxed">{project.description}</p>
              <div className="flex flex-wrap gap-2 mb-6">
                {project.technologies.map((tech) => (
                  <span key={tech} className="tech-badge">
                    {tech}
                  </span>
                ))}
              </div>
              {project.link && (
                <a href={project.link} className="inline-flex items-center gap-2 text-accent font-medium hover:gap-3 transition-all">
                  View Project <ExternalLink className="w-4 h-4" />
                </a>
              )}
            </Card>
          ))}
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="section-divider container py-20 md:py-32">
        <h2 className="text-4xl font-bold mb-12">Technical Skills</h2>
        <div className="grid md:grid-cols-2 gap-8">
          {techStack.map((stack) => (
            <div key={stack.category} className="soft-card">
              <h3 className="text-xl font-bold mb-4">{stack.category}</h3>
              <div className="flex flex-wrap gap-2">
                {stack.technologies.map((tech) => (
                  <span key={tech} className="tech-badge">
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="section-divider container py-20 md:py-32">
        <div className="max-w-2xl mx-auto">
          <h2 className="text-4xl font-bold mb-6 text-center">Let's Work Together</h2>
          <p className="text-lg text-muted-foreground mb-12 text-center leading-relaxed">
            I'm always interested in hearing about new projects and opportunities. Feel free to reach out!
          </p>

          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <label htmlFor="name" className="block text-sm font-medium mb-2">
                Name
              </label>
              <Input
                id="name"
                name="name"
                type="text"
                placeholder="Your Name"
                value={formData.name}
                onChange={handleInputChange}
                required
                className="rounded-xl"
              />
            </div>
            <div>
              <label htmlFor="email" className="block text-sm font-medium mb-2">
                Email
              </label>
              <Input
                id="email"
                name="email"
                type="email"
                placeholder="your@email.com"
                value={formData.email}
                onChange={handleInputChange}
                required
                className="rounded-xl"
              />
            </div>
            <div>
              <label htmlFor="message" className="block text-sm font-medium mb-2">
                Message
              </label>
              <Textarea
                id="message"
                name="message"
                placeholder="Your message..."
                value={formData.message}
                onChange={handleInputChange}
                required
                className="rounded-xl min-h-32"
              />
            </div>
            <Button
              type="submit"
              disabled={isSubmitting}
              className="soft-button w-full"
            >
              {isSubmitting ? "Sending..." : "Send Message"}
            </Button>
          </form>

          <div className="mt-12 pt-12 border-t border-border">
            <p className="text-center text-muted-foreground mb-6">Or connect with me on:</p>
            <div className="flex justify-center gap-6">
              <a
                href="https://github.com"
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 bg-secondary text-secondary-foreground rounded-xl hover:bg-accent hover:text-accent-foreground transition-all duration-300"
              >
                <Github className="w-6 h-6" />
              </a>
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 bg-secondary text-secondary-foreground rounded-xl hover:bg-accent hover:text-accent-foreground transition-all duration-300"
              >
                <Linkedin className="w-6 h-6" />
              </a>
              <a
                href="mailto:your@email.com"
                className="p-3 bg-secondary text-secondary-foreground rounded-xl hover:bg-accent hover:text-accent-foreground transition-all duration-300"
              >
                <Mail className="w-6 h-6" />
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-card text-card-foreground py-8 border-t border-border">
        <div className="container text-center">
          <p className="text-muted-foreground">
            © 2024 Modern Developer Portfolio. Built with React, Tailwind CSS, and Vite.
          </p>
        </div>
      </footer>
    </div>
  );
}
