import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ExternalLink, Github, Linkedin, Mail, ArrowRight, Code2, Zap, BookOpen, Palette, Sun, Moon } from "lucide-react";
import { useState } from "react";
import { useTheme } from "@/contexts/ThemeContext";

/**
 * Design System: Modern Minimalist + Agricultural Heritage
 * Professional Portfolio for Shadbhav Regmi
 * - Color Palette: Deep Forest Green (#2E7D32), Warm Cream (#F5F1E8), Harvest Gold (#F9A825)
 * - Typography: Playfair Display (headings), Poppins (body), IBM Plex Mono (code)
 * - Layout: Asymmetric with generous whitespace, staggered project cards
 * - Animation: Smooth scroll-triggered animations, subtle hover effects
 */

export default function Home() {
  const [emailHovered, setEmailHovered] = useState(false);
  const { theme, toggleTheme } = useTheme();

  const projects = [
    {
      title: "PotatoDoc",
      description: "AI-powered potato disease diagnosis mobile application using CNN model for real-time leaf disease classification and treatment recommendations.",
      tags: ["TypeScript", "React Native", "Supabase", "Drizzle ORM", "Tailwind CSS", "ML/AI"],
      github: "https://github.com/RegShadbhav041/PotatoDoc",
      status: "Final Year Project",
      color: "bg-primary/5",
      impact: "Helps farmers diagnose crop diseases instantly with 95%+ accuracy",
    },
    {
      title: "Ecommerce-NepalCart",
      description: "Full-stack e-commerce platform with seller dashboard, product management, messaging system, business profiles, and integrated payment processing.",
      tags: ["PHP", "JavaScript", "MySQL", "Tailwind CSS", "Payment Integration", "Full-Stack"],
      github: "https://github.com/RegShadbhav041/Ecommerce-NepalCart",
      status: "Production",
      color: "bg-accent/5",
      impact: "Complete marketplace solution supporting multiple sellers and real-time messaging",
    },
    {
      title: "AgriSathi",
      description: "Agricultural technology platform connecting farmers with resources, information, and best practices for improved crop management and sustainability.",
      tags: ["HTML", "CSS", "JavaScript", "Responsive Design", "Agriculture Tech"],
      github: "https://github.com/RegShadbhav041/AgriSathi",
      status: "Active",
      color: "bg-primary/5",
      impact: "Empowers farmers with actionable agricultural insights and community support",
    },
    {
      title: "Recipe Management System",
      description: "Comprehensive backend system for managing recipes with database operations, user authentication, recipe categorization, and advanced search functionality.",
      tags: ["PHP", "MySQL", "Backend Development", "Database Design"],
      github: "https://github.com/RegShadbhav041/Recipe_Management_System",
      status: "Project II",
      color: "bg-accent/5",
      impact: "Scalable recipe management with user profiles and personalized collections",
    },
  ];

  const skills = [
    {
      category: "Frontend Development",
      items: ["React", "TypeScript", "Tailwind CSS", "HTML/CSS", "JavaScript", "Responsive Design"],
      icon: Code2,
    },
    {
      category: "Backend Development",
      items: ["PHP", "Node.js", "MySQL", "Database Design", "API Development", "REST APIs"],
      icon: Zap,
    },
    {
      category: "Cloud & DevOps",
      items: ["AWS Services", "EC2", "S3", "DevOps Fundamentals", "Git", "Linux"],
      icon: BookOpen,
    },
    {
      category: "Design & Research",
      items: ["UI/UX Design", "Figma", "Technical Documentation", "Vibe Coding", "Research"],
      icon: Palette,
    },
  ];

  const interests = [
    { title: "Full-Stack Development", description: "Building complete web solutions from database to UI" },
    { title: "Agricultural Technology", description: "Leveraging tech to solve real-world farming challenges" },
    { title: "UI/UX Design", description: "Creating intuitive and beautiful user experiences" },
    { title: "Vibe Coding", description: "Writing code with flow, aesthetics, and purposeful design" },
    { title: "Cloud Architecture", description: "Designing scalable and reliable cloud-based systems" },
    { title: "Technical Documentation", description: "Making complex concepts accessible through clear writing" },
  ];

  const handleEmailClick = () => {
    const email = "shadbhavregmi123@gmail.com";
    const subject = encodeURIComponent("Let's Connect");
    const body = encodeURIComponent("Hi Shadbhav,\n\nI'd like to discuss an opportunity with you.");
    window.open(`https://mail.google.com/mail/?view=cm&fs=1&to=${email}&su=${subject}&body=${body}`, '_blank');
  };

  return (
    <div className="min-h-screen bg-background">
      {/* Navigation */}
      <nav className="sticky top-0 z-50 bg-background/95 backdrop-blur-md border-b border-border shadow-sm">
        <div className="container flex items-center justify-between py-4">
          <div className="flex items-center gap-2">
            <div className="w-10 h-10 rounded-full bg-gradient-to-br from-primary to-accent flex items-center justify-center">
              <span className="text-white font-bold text-lg">SR</span>
            </div>
            <span className="font-semibold text-primary hidden sm:inline">Shadbhav Regmi</span>
          </div>
          <div className="hidden md:flex gap-8">
            <a href="#projects" className="text-foreground hover:text-primary transition-colors font-medium">Projects</a>
            <a href="#skills" className="text-foreground hover:text-primary transition-colors font-medium">Skills</a>
            <a href="#interests" className="text-foreground hover:text-primary transition-colors font-medium">Interests</a>
            <a href="#contact" className="text-foreground hover:text-primary transition-colors font-medium">Contact</a>
          </div>
          <div className="flex items-center gap-2">
            <Button
              variant="ghost"
              size="icon"
              onClick={toggleTheme}
              className="rounded-full"
              aria-label="Toggle theme"
            >
              {theme === "light" ? <Moon size={20} /> : <Sun size={20} />}
            </Button>
            <Button asChild size="sm" className="bg-primary hover:bg-primary/90 text-primary-foreground hidden sm:flex">
              <a href="https://github.com/RegShadbhav041" target="_blank" rel="noopener noreferrer">
                GitHub
              </a>
            </Button>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center opacity-25"
          style={{
            backgroundImage: "url('https://d2xsxph8kpxj0f.cloudfront.net/310519663385184350/9XSQsQ57ukLsUS5Pn324qe/hero-background-6qoVgQANwe9crccXUdmSMr.webp')",
          }}
        />
        <div className="relative container py-20 md:py-32">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <div className="space-y-3">
                <div className="inline-block">
                  <Badge className="bg-accent/20 text-accent border-accent/30">Welcome to my portfolio</Badge>
                </div>
                <h1 className="text-foreground leading-tight">Shadbhav Regmi</h1>
                <p className="text-2xl md:text-3xl text-muted-foreground font-light">
                  Full-Stack Developer & Digital Innovator
                </p>
              </div>
              <p className="text-lg text-muted-foreground max-w-lg leading-relaxed">
                I'm an IT student at Gandaki University, passionate about building innovative solutions at the intersection of technology and agriculture. Specialized in full-stack development, cloud services, and creating beautiful user experiences through vibe coding.
              </p>
              <div className="flex flex-wrap gap-3 pt-4">
                <Button asChild className="bg-primary hover:bg-primary/90 text-primary-foreground">
                  <a href="#projects" className="flex items-center gap-2">
                    View My Work
                    <ArrowRight size={18} />
                  </a>
                </Button>
                <Button
                  onClick={handleEmailClick}
                  onMouseEnter={() => setEmailHovered(true)}
                  onMouseLeave={() => setEmailHovered(false)}
                  className="bg-accent hover:bg-accent/90 text-accent-foreground flex items-center gap-2"
                >
                  <Mail size={18} />
                  Get In Touch
                </Button>
              </div>
              <div className="pt-4 flex gap-4">
                <a href="https://github.com/RegShadbhav041" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-primary transition-colors">
                  <Github size={24} />
                </a>
                <a href="https://linkedin.com/in/shadbhav-regmi-10310b408" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-primary transition-colors">
                  <Linkedin size={24} />
                </a>
              </div>
            </div>
            <div className="hidden md:flex justify-center">
              <div className="relative">
                <div className="absolute -inset-2 bg-gradient-to-br from-primary/20 to-accent/20 rounded-2xl blur-xl" />
                <div className="relative w-80 h-80 rounded-2xl bg-gradient-to-br from-primary/10 to-accent/10 border-2 border-primary/20 flex items-center justify-center overflow-hidden shadow-xl">
                  <img
                    src="https://d2xsxph8kpxj0f.cloudfront.net/310519663385184350/9XSQsQ57ukLsUS5Pn324qe/skills-illustration-LtNzsJjsqrWpFsozB7vjLq.webp"
                    alt="Skills Illustration"
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-20 md:py-32 bg-background">
        <div className="container space-y-12">
          <div className="space-y-4 max-w-2xl">
            <Badge className="bg-accent/20 text-accent border-accent/30">Featured Work</Badge>
            <h2 className="text-foreground">My Projects</h2>
            <p className="text-lg text-muted-foreground">
              A selection of projects showcasing my expertise in full-stack development, agricultural technology, and user-centered design. Each project represents a commitment to solving real-world problems with innovative solutions.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {projects.map((project, idx) => (
              <div
                key={idx}
                className="group"
                style={{
                  animation: `fadeInUp 0.6s ease-out ${idx * 0.1}s both`,
                }}
              >
                <Card className={`${project.color} border-border hover:shadow-xl hover:border-primary/30 transition-all duration-300 h-full flex flex-col`}>
                  <CardHeader>
                    <div className="flex items-start justify-between gap-4">
                      <div className="flex-1">
                        <CardTitle className="text-primary text-2xl">{project.title}</CardTitle>
                        <CardDescription className="text-muted-foreground mt-2">{project.status}</CardDescription>
                      </div>
                      <Badge variant="secondary" className="whitespace-nowrap bg-primary/10 text-primary">{project.status}</Badge>
                    </div>
                  </CardHeader>
                  <CardContent className="space-y-4 flex-1 flex flex-col">
                    <p className="text-foreground leading-relaxed">{project.description}</p>
                    <div className="bg-primary/5 border border-primary/20 rounded-lg p-3">
                      <p className="text-sm font-semibold text-primary mb-1">Impact:</p>
                      <p className="text-sm text-muted-foreground">{project.impact}</p>
                    </div>
                    <div className="flex flex-wrap gap-2 pt-2">
                      {project.tags.map((tag, tagIdx) => (
                        <Badge key={tagIdx} variant="outline" className="text-xs bg-background hover:bg-primary/10">
                          {tag}
                        </Badge>
                      ))}
                    </div>
                    <Button
                      asChild
                      variant="ghost"
                      className="w-full justify-between group/btn text-primary hover:text-primary hover:bg-primary/10 mt-auto"
                    >
                      <a href={project.github} target="_blank" rel="noopener noreferrer">
                        View on GitHub
                        <ExternalLink size={16} className="group-hover/btn:translate-x-1 transition-transform" />
                      </a>
                    </Button>
                  </CardContent>
                </Card>
              </div>
            ))}
          </div>

          <div className="pt-8 text-center">
            <Button asChild variant="outline" className="border-primary text-primary hover:bg-primary/10">
              <a href="https://github.com/RegShadbhav041?tab=repositories" target="_blank" rel="noopener noreferrer">
                View All Projects on GitHub
              </a>
            </Button>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="py-20 md:py-32 bg-background">
        <div className="container space-y-12">
          <div className="space-y-4 max-w-2xl">
            <Badge className="bg-accent/20 text-accent border-accent/30">Expertise</Badge>
            <h2 className="text-foreground">Skills & Technologies</h2>
            <p className="text-lg text-muted-foreground">
              Intermediate to advanced proficiency across full-stack development, cloud services, and design with continuous learning and growth mindset.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {skills.map((skillGroup, idx) => {
              const IconComponent = skillGroup.icon;
              return (
                <div
                  key={idx}
                  className="p-6 rounded-xl border border-border bg-card hover:shadow-lg hover:border-primary/30 transition-all duration-300"
                >
                  <div className="flex items-center gap-3 mb-4">
                    <div className="p-2 bg-accent/10 rounded-lg">
                      <IconComponent className="text-accent" size={24} />
                    </div>
                    <h3 className="text-primary font-semibold text-lg">{skillGroup.category}</h3>
                  </div>
                  <div className="flex flex-wrap gap-2">
                    {skillGroup.items.map((skill, skillIdx) => (
                      <Badge key={skillIdx} variant="secondary" className="bg-primary/10 text-primary hover:bg-primary/20 cursor-default">
                        {skill}
                      </Badge>
                    ))}
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Interests Section */}
      <section id="interests" className="py-20 md:py-32 bg-background">
        <div className="container space-y-12">
          <div className="space-y-4 max-w-2xl">
            <Badge className="bg-accent/20 text-accent border-accent/30">Passion Areas</Badge>
            <h2 className="text-foreground">Fields of Interest</h2>
            <p className="text-lg text-muted-foreground">
              Beyond coding, I'm deeply passionate about these areas that drive my professional growth and innovation.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {interests.map((interest, idx) => (
              <Card key={idx} className="border-border hover:shadow-lg hover:border-primary/30 transition-all duration-300 bg-gradient-to-br from-primary/5 to-accent/5">
                <CardHeader>
                  <CardTitle className="text-primary text-lg">{interest.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">{interest.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="py-20 md:py-32 bg-background">
        <div className="container">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <div className="space-y-4">
                <Badge className="bg-accent/20 text-accent border-accent/30">About Me</Badge>
                <h2 className="text-foreground">Passionate Developer & Lifelong Learner</h2>
              </div>
              <p className="text-lg text-muted-foreground leading-relaxed">
                I'm an IT undergraduate at Gandaki University in Pokhara, Nepal, with a strong passion for full-stack development and agricultural technology. My journey in tech has been driven by curiosity and a desire to solve real-world problems through innovative solutions.
              </p>
              <p className="text-lg text-muted-foreground leading-relaxed">
                Beyond coding, I'm deeply interested in UI/UX design, technical documentation, and research. I practice vibe coding—writing code that not only works but feels good to write and read. I have foundational knowledge of AWS cloud services and am continuously expanding my expertise in emerging technologies.
              </p>
              <div className="pt-4 space-y-2">
                <p className="text-sm text-muted-foreground"><span className="font-semibold text-primary">Location:</span> Pokhara, Nepal</p>
                <p className="text-sm text-muted-foreground"><span className="font-semibold text-primary">Education:</span> Gandaki University - IT Student</p>
              </div>
            </div>
            <div
              className="rounded-2xl overflow-hidden h-96 bg-gradient-to-br from-primary/20 to-accent/20 flex items-center justify-center border-2 border-primary/20 shadow-xl"
            >
              <div className="text-center space-y-4 p-8">
                <div className="text-7xl">🌱</div>
                <div className="space-y-2">
                  <p className="text-primary font-bold text-2xl">Growing Through Technology</p>
                  <p className="text-muted-foreground text-sm max-w-xs mx-auto">
                    Building scalable solutions that bridge agriculture and technology, one line of code at a time.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 md:py-32 bg-background">
        <div className="container max-w-2xl text-center space-y-8">
          <div className="space-y-4">
            <Badge className="bg-accent/20 text-accent border-accent/30 inline-block">Get In Touch</Badge>
            <h2 className="text-foreground">Let's Connect & Collaborate</h2>
            <p className="text-lg text-muted-foreground">
              I'm always open to interesting conversations, collaboration opportunities, and exciting projects. Feel free to reach out through any of these channels!
            </p>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              onClick={handleEmailClick}
              className="bg-primary hover:bg-primary/90 text-primary-foreground flex items-center gap-2 justify-center"
            >
              <Mail size={18} />
              Send Email
            </Button>
            <Button asChild variant="outline" className="border-primary text-primary hover:bg-primary/10">
              <a href="https://linkedin.com/in/shadbhav-regmi-10310b408" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2">
                <Linkedin size={18} />
                LinkedIn
              </a>
            </Button>
            <Button asChild variant="outline" className="border-primary text-primary hover:bg-primary/10">
              <a href="https://github.com/RegShadbhav041" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2">
                <Github size={18} />
                GitHub
              </a>
            </Button>
          </div>

          <div className="pt-8 border-t border-border">
            <p className="text-sm text-muted-foreground">
              <span className="font-semibold text-primary">Email:</span> shadbhavregmi123@gmail.com
            </p>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-border bg-card py-8">
        <div className="container text-center text-muted-foreground text-sm space-y-2">
          <p>© 2026 Shadbhav Regmi. All rights reserved.</p>
          <p>Built with React, JavaScript, Tailwind CSS & ❤️</p>
        </div>
      </footer>

      <style>{`
        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @keyframes slideIn {
          from {
            opacity: 0;
            transform: translateX(-20px);
          }
          to {
            opacity: 1;
            transform: translateX(0);
          }
        }
      `}</style>
    </div>
  );
}
