import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { useToast } from "@/hooks/use-toast";
import { Github, Linkedin, ArrowDown, ArrowUp, Mail, Phone, MapPin, ExternalLink, Calendar, Award, Code, Sparkles } from "lucide-react";
import Navbar from "@/components/Navbar";

const Index = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: ""
  });

  // Typewriter effect for tagline
  const [displayedText, setDisplayedText] = useState("");
  const fullText = "Full Stack Developer & UI/UX Enthusiast";
  
  useEffect(() => {
    let index = 0;
    const timer = setInterval(() => {
      if (index <= fullText.length) {
        setDisplayedText(fullText.slice(0, index));
        index++;
      } else {
        clearInterval(timer);
      }
    }, 100);
    
    return () => clearInterval(timer);
  }, []);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast({
      title: "Message Sent!",
      description: "Thank you for reaching out. I'll get back to you soon!",
    });
    setFormData({ name: "", email: "", message: "" });
  };

  const skills = [
    { name: "React", level: "Expert", color: "bg-blue-500", icon: "⚛️" },
    { name: "TypeScript", level: "Advanced", color: "bg-blue-600", icon: "📘" },
    { name: "Node.js", level: "Advanced", color: "bg-green-500", icon: "🟢" },
    { name: "Python", level: "Intermediate", color: "bg-yellow-500", icon: "🐍" },
    { name: "AWS", level: "Intermediate", color: "bg-orange-500", icon: "☁️" },
    { name: "PostgreSQL", level: "Advanced", color: "bg-indigo-500", icon: "🗄️" },
    { name: "Docker", level: "Intermediate", color: "bg-cyan-500", icon: "🐳" },
    { name: "GraphQL", level: "Advanced", color: "bg-pink-500", icon: "📊" }
  ];

  const projects = [
    {
      title: "E-Commerce Platform",
      description: "Full-stack e-commerce solution with React, Node.js, and Stripe integration. Features include user authentication, product management, and real-time inventory tracking.",
      tech: ["React", "Node.js", "PostgreSQL", "Stripe", "Redux"],
      demo: "https://demo-link.com",
      github: "https://github.com/username/ecommerce",
      image: "photo-1486312338219-ce68d2c6f44d"
    },
    {
      title: "Task Management App",
      description: "Collaborative project management tool with real-time updates, drag-and-drop functionality, and team collaboration features.",
      tech: ["React", "TypeScript", "Socket.io", "MongoDB"],
      demo: "https://demo-link.com",
      github: "https://github.com/username/taskmanager",
      image: "photo-1461749280684-dccba630e2f6"
    },
    {
      title: "Weather Analytics Dashboard",
      description: "Data visualization dashboard displaying weather patterns and analytics with interactive charts and forecasting capabilities.",
      tech: ["Python", "Django", "D3.js", "PostgreSQL"],
      demo: "https://demo-link.com",
      github: "https://github.com/username/weather-dashboard",
      image: "photo-1488590528505-98d2b5aba04b"
    },
    {
      title: "AI Chat Application",
      description: "Real-time chat application with AI integration, featuring natural language processing and intelligent responses.",
      tech: ["React", "OpenAI API", "WebSocket", "Express"],
      demo: "https://demo-link.com",
      github: "https://github.com/username/ai-chat",
      image: "photo-1498050108023-c5249f4df085"
    }
  ];

  const experiences = [
    {
      title: "Senior Full Stack Developer",
      company: "TechCorp Solutions",
      period: "2022 - Present",
      description: "Lead development of scalable web applications serving 100k+ users. Implemented microservices architecture and improved system performance by 40%."
    },
    {
      title: "Frontend Developer",
      company: "StartupXYZ",
      period: "2020 - 2022",
      description: "Built responsive web applications using React and TypeScript. Collaborated with design team to implement pixel-perfect UIs and improve user experience."
    },
    {
      title: "Junior Developer",
      company: "WebDev Agency",
      period: "2019 - 2020",
      description: "Developed client websites and web applications. Gained experience in multiple frameworks and backend technologies."
    }
  ];

  const education = [
    {
      degree: "Bachelor of Computer Science",
      institution: "University of Technology",
      year: "2019",
      type: "degree"
    },
    {
      degree: "AWS Certified Solutions Architect",
      institution: "Amazon Web Services",
      year: "2023",
      type: "certification"
    },
    {
      degree: "React Developer Certification",
      institution: "Meta",
      year: "2022",
      type: "certification"
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-background via-muted/20 to-background relative overflow-hidden">
      <Navbar />
      
      {/* Animated Background Particles */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {[...Array(20)].map((_, i) => (
          <div
            key={i}
            className="absolute w-2 h-2 bg-primary/20 rounded-full animate-pulse"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 3}s`,
              animationDuration: `${2 + Math.random() * 2}s`
            }}
          />
        ))}
      </div>

      {/* Hero Section */}
      <section id="home" className="min-h-screen flex items-center justify-center px-4 relative overflow-hidden pt-16">
        <div className="absolute inset-0 bg-gradient-to-r from-primary/5 to-secondary/5 animate-pulse"></div>
        
        {/* Floating Code Icons */}
        <div className="absolute inset-0 pointer-events-none">
          <Code className="absolute top-20 left-20 text-primary/20 w-8 h-8 animate-bounce" style={{animationDelay: "0s"}} />
          <Sparkles className="absolute top-32 right-32 text-secondary/20 w-6 h-6 animate-bounce" style={{animationDelay: "0.5s"}} />
          <Code className="absolute bottom-32 left-32 text-accent/20 w-10 h-10 animate-bounce" style={{animationDelay: "1s"}} />
          <Sparkles className="absolute bottom-20 right-20 text-primary/20 w-7 h-7 animate-bounce" style={{animationDelay: "1.5s"}} />
        </div>

        <div className="text-center z-10 max-w-4xl mx-auto">
          <h1 className="text-5xl md:text-7xl font-bold text-foreground mb-6 leading-tight transform transition-all duration-1000 hover:scale-105">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary via-secondary to-accent animate-pulse">Thamizharasan</span>
          </h1>
          
          {/* Animated Typewriter Tagline */}
          <div className="text-xl md:text-2xl text-muted-foreground mb-8 font-light h-8 flex items-center justify-center">
            <span className="relative">
              {displayedText}
              <span className="absolute right-0 top-0 w-0.5 h-full bg-primary animate-pulse ml-1"></span>
            </span>
          </div>
          
          <p className="text-lg text-muted-foreground mb-12 max-w-2xl mx-auto leading-relaxed transform transition-all duration-700 hover:text-foreground">
            Passionate about creating exceptional digital experiences through clean code and innovative design. 
            I transform ideas into scalable, user-friendly applications that make a difference.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
            <Button 
              size="lg" 
              className="bg-gradient-to-r from-primary to-secondary hover:from-primary/80 hover:to-secondary/80 transition-all duration-300 transform hover:scale-110 hover:rotate-1 shadow-lg hover:shadow-xl"
            >
              <Sparkles className="mr-2 w-4 h-4" />
              View My Work
            </Button>
            <Button 
              variant="outline" 
              size="lg"
              className="transition-all duration-300 transform hover:scale-105 hover:-rotate-1 hover:border-primary"
            >
              Download Resume
            </Button>
          </div>
          
          <div className="flex justify-center space-x-6">
            <a href="#" className="text-muted-foreground hover:text-primary transition-all duration-300 transform hover:scale-125 hover:rotate-12">
              <Github size={24} />
            </a>
            <a href="#" className="text-muted-foreground hover:text-primary transition-all duration-300 transform hover:scale-125 hover:-rotate-12">
              <Linkedin size={24} />
            </a>
            <a href="#" className="text-muted-foreground hover:text-primary transition-all duration-300 transform hover:scale-125 hover:rotate-12">
              <Mail size={24} />
            </a>
          </div>
        </div>
        
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <ArrowDown className="text-muted-foreground animate-pulse" size={24} />
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 px-4 bg-muted/30 relative">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl font-bold text-foreground mb-8 transform transition-all duration-500 hover:scale-105">
            About <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-secondary animate-pulse">Me</span>
          </h2>
          <p className="text-lg text-muted-foreground leading-relaxed">
            I'm a passionate full-stack developer with over 5 years of experience creating digital solutions that make a difference. 
            I specialize in modern web technologies and love turning complex problems into simple, beautiful designs.
          </p>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="py-20 px-4 relative">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold text-foreground text-center mb-16 transform transition-all duration-500 hover:scale-105">
            Technical <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-secondary animate-pulse">Skills</span>
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {skills.map((skill, index) => (
              <Card key={skill.name} className="bg-card/80 border-border hover:border-primary/50 transition-all duration-500 transform hover:scale-110 hover:rotate-2 animate-fade-in group" style={{animationDelay: `${index * 100}ms`}}>
                <CardContent className="p-6 text-center">
                  <div className={`w-12 h-12 ${skill.color} rounded-lg mx-auto mb-4 flex items-center justify-center transform transition-all duration-300 group-hover:scale-125 group-hover:rotate-12`}>
                    <span className="text-2xl">{skill.icon}</span>
                  </div>
                  <h3 className="text-foreground font-semibold mb-2 transform transition-all duration-300 group-hover:text-primary">{skill.name}</h3>
                  <Badge variant="secondary" className="group-hover:bg-primary/20 group-hover:text-primary transition-all duration-300">
                    {skill.level}
                  </Badge>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-20 px-4 bg-muted/30">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold text-foreground text-center mb-16 transform transition-all duration-500 hover:scale-105">
            Featured <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-secondary animate-pulse">Projects</span>
          </h2>
          <div className="grid md:grid-cols-2 gap-8">
            {projects.map((project, index) => (
              <Card key={project.title} className="bg-card/80 border-border hover:border-primary/50 transition-all duration-500 transform hover:scale-105 hover:rotate-1 animate-fade-in overflow-hidden group" style={{animationDelay: `${index * 150}ms`}}>
                <div className="h-48 bg-gradient-to-br from-muted to-muted-foreground/20 relative overflow-hidden">
                  <img 
                    src={`https://images.unsplash.com/${project.image}?w=500&h=300&fit=crop`}
                    alt={project.title}
                    className="w-full h-full object-cover opacity-80 transition-all duration-500 group-hover:scale-110 group-hover:opacity-100"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-background/80 to-transparent group-hover:from-background/60 transition-all duration-500"></div>
                </div>
                <CardHeader>
                  <CardTitle className="text-foreground group-hover:text-primary transition-colors duration-300">{project.title}</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <p className="text-muted-foreground leading-relaxed group-hover:text-foreground transition-colors duration-300">{project.description}</p>
                  <div className="flex flex-wrap gap-2">
                    {project.tech.map((tech, techIndex) => (
                      <Badge key={tech} variant="secondary" className="bg-primary/20 text-primary border-primary/30 hover:bg-primary/40 transition-all duration-300 transform hover:scale-110" style={{animationDelay: `${techIndex * 50}ms`}}>
                        {tech}
                      </Badge>
                    ))}
                  </div>
                  <div className="flex space-x-4 pt-4">
                    <Button variant="outline" size="sm" className="hover:bg-muted hover:border-primary hover:text-primary transition-all duration-300 transform hover:scale-105">
                      <ExternalLink size={16} className="mr-2" />
                      Live Demo
                    </Button>
                    <Button variant="outline" size="sm" className="hover:bg-muted hover:border-secondary hover:text-secondary transition-all duration-300 transform hover:scale-105">
                      <Github size={16} className="mr-2" />
                      Code
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Experience Section */}
      <section className="py-20 px-4">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl font-bold text-foreground text-center mb-16 transform transition-all duration-500 hover:scale-105">
            Professional <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-secondary animate-pulse">Experience</span>
          </h2>
          <div className="space-y-8">
            {experiences.map((exp, index) => (
              <Card key={exp.title} className="bg-card/80 border-border hover:border-primary/50 transition-all duration-500 animate-fade-in transform hover:scale-102 hover:translate-x-2 group" style={{animationDelay: `${index * 200}ms`}}>
                <CardContent className="p-8">
                  <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4">
                    <div>
                      <h3 className="text-xl font-bold text-foreground mb-1 group-hover:text-primary transition-colors duration-300">{exp.title}</h3>
                      <p className="text-primary font-semibold group-hover:text-secondary transition-colors duration-300">{exp.company}</p>
                    </div>
                    <Badge variant="outline" className="border-secondary/50 text-secondary mt-2 md:mt-0 w-fit group-hover:border-secondary group-hover:bg-secondary/20 transition-all duration-300">
                      <Calendar size={14} className="mr-1" />
                      {exp.period}
                    </Badge>
                  </div>
                  <p className="text-muted-foreground leading-relaxed group-hover:text-foreground transition-colors duration-300">{exp.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Education & Certifications */}
      <section className="py-20 px-4 bg-muted/30">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl font-bold text-foreground text-center mb-16 transform transition-all duration-500 hover:scale-105">
            Education & <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-secondary animate-pulse">Certifications</span>
          </h2>
          <div className="grid md:grid-cols-2 gap-6">
            {education.map((item, index) => (
              <Card key={item.degree} className="bg-card/80 border-border hover:border-primary/50 transition-all duration-500 transform hover:scale-105 hover:rotate-1 animate-fade-in group" style={{animationDelay: `${index * 150}ms`}}>
                <CardContent className="p-6">
                  <div className="flex items-start space-x-4">
                    <div className={`p-3 rounded-lg ${item.type === 'degree' ? 'bg-primary/20' : 'bg-secondary/20'} transform transition-all duration-300 group-hover:scale-110 group-hover:rotate-12`}>
                      <Award className={`${item.type === 'degree' ? 'text-primary' : 'text-secondary'}`} size={24} />
                    </div>
                    <div className="flex-1">
                      <h3 className="text-foreground font-semibold mb-2 group-hover:text-primary transition-colors duration-300">{item.degree}</h3>
                      <p className="text-muted-foreground mb-2 group-hover:text-foreground transition-colors duration-300">{item.institution}</p>
                      <Badge variant="outline" className="border-muted-foreground text-muted-foreground group-hover:border-primary group-hover:text-primary transition-all duration-300">
                        {item.year}
                      </Badge>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 px-4">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl font-bold text-foreground text-center mb-16 transform transition-all duration-500 hover:scale-105">
            Get In <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-secondary animate-pulse">Touch</span>
          </h2>
          <div className="grid md:grid-cols-2 gap-12">
            <div className="space-y-8">
              <div>
                <h3 className="text-2xl font-semibold text-foreground mb-6">Let's work together</h3>
                <p className="text-muted-foreground leading-relaxed mb-8">
                  I'm always interested in new opportunities and exciting projects. 
                  Whether you have a question or just want to say hi, feel free to reach out!
                </p>
              </div>
              <div className="space-y-4">
                <div className="flex items-center space-x-4 group">
                  <div className="p-3 bg-primary/20 rounded-lg transform transition-all duration-300 group-hover:scale-110 group-hover:rotate-12">
                    <Mail className="text-primary" size={20} />
                  </div>
                  <div>
                    <p className="text-foreground font-semibold group-hover:text-primary transition-colors duration-300">Email</p>
                    <p className="text-muted-foreground group-hover:text-foreground transition-colors duration-300">alex.johnson@email.com</p>
                  </div>
                </div>
                <div className="flex items-center space-x-4 group">
                  <div className="p-3 bg-secondary/20 rounded-lg transform transition-all duration-300 group-hover:scale-110 group-hover:rotate-12">
                    <Phone className="text-secondary" size={20} />
                  </div>
                  <div>
                    <p className="text-foreground font-semibold group-hover:text-secondary transition-colors duration-300">Phone</p>
                    <p className="text-muted-foreground group-hover:text-foreground transition-colors duration-300">+1 (555) 123-4567</p>
                  </div>
                </div>
                <div className="flex items-center space-x-4 group">
                  <div className="p-3 bg-accent/20 rounded-lg transform transition-all duration-300 group-hover:scale-110 group-hover:rotate-12">
                    <MapPin className="text-accent" size={20} />
                  </div>
                  <div>
                    <p className="text-foreground font-semibold group-hover:text-accent transition-colors duration-300">Location</p>
                    <p className="text-muted-foreground group-hover:text-foreground transition-colors duration-300">San Francisco, CA</p>
                  </div>
                </div>
              </div>
            </div>
            <Card className="bg-card/80 border-border transform transition-all duration-500 hover:scale-105">
              <CardContent className="p-8">
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div>
                    <Label htmlFor="name" className="text-foreground">Name</Label>
                    <Input
                      id="name"
                      value={formData.name}
                      onChange={(e) => setFormData({...formData, name: e.target.value})}
                      className="bg-background border-border text-foreground mt-2 focus:border-primary transition-colors duration-300"
                      required
                    />
                  </div>
                  <div>
                    <Label htmlFor="email" className="text-foreground">Email</Label>
                    <Input
                      id="email"
                      type="email"
                      value={formData.email}
                      onChange={(e) => setFormData({...formData, email: e.target.value})}
                      className="bg-background border-border text-foreground mt-2 focus:border-primary transition-colors duration-300"
                      required
                    />
                  </div>
                  <div>
                    <Label htmlFor="message" className="text-foreground">Message</Label>
                    <Textarea
                      id="message"
                      value={formData.message}
                      onChange={(e) => setFormData({...formData, message: e.target.value})}
                      className="bg-background border-border text-foreground mt-2 min-h-[120px] focus:border-primary transition-colors duration-300"
                      required
                    />
                  </div>
                  <Button 
                    type="submit" 
                    className="w-full bg-gradient-to-r from-primary to-secondary hover:from-primary/80 hover:to-secondary/80 transition-all duration-300 transform hover:scale-105"
                  >
                    <Sparkles className="mr-2 w-4 h-4" />
                    Send Message
                  </Button>
                </form>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 px-4 border-t border-border bg-muted/30">
        <div className="max-w-6xl mx-auto text-center">
          <p className="text-muted-foreground hover:text-foreground transition-colors duration-300">
            © 2024 Thamizharasan. Built with passion and lots of coffee ☕
          </p>
        </div>
      </footer>
    </div>
  );
};

export default Index;
