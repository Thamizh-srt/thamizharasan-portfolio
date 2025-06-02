
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { useToast } from "@/hooks/use-toast";
import { Github, Linkedin, ArrowDown, ArrowUp, Mail, Phone, MapPin, ExternalLink, Calendar, Award } from "lucide-react";

const Index = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: ""
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast({
      title: "Message Sent!",
      description: "Thank you for reaching out. I'll get back to you soon!",
    });
    setFormData({ name: "", email: "", message: "" });
  };

  const skills = [
    { name: "React", level: "Expert", color: "bg-blue-500" },
    { name: "TypeScript", level: "Advanced", color: "bg-blue-600" },
    { name: "Node.js", level: "Advanced", color: "bg-green-500" },
    { name: "Python", level: "Intermediate", color: "bg-yellow-500" },
    { name: "AWS", level: "Intermediate", color: "bg-orange-500" },
    { name: "PostgreSQL", level: "Advanced", color: "bg-indigo-500" },
    { name: "Docker", level: "Intermediate", color: "bg-cyan-500" },
    { name: "GraphQL", level: "Advanced", color: "bg-pink-500" }
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
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
      {/* Hero Section */}
      <section className="min-h-screen flex items-center justify-center px-4 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-blue-600/10 to-emerald-600/10"></div>
        <div className="text-center z-10 max-w-4xl mx-auto animate-fade-in">
          <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 leading-tight">
            Alex <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-emerald-400">Johnson</span>
          </h1>
          <p className="text-xl md:text-2xl text-slate-300 mb-8 font-light">
            Full Stack Developer & UI/UX Enthusiast
          </p>
          <p className="text-lg text-slate-400 mb-12 max-w-2xl mx-auto leading-relaxed">
            Passionate about creating exceptional digital experiences through clean code and innovative design. 
            I transform ideas into scalable, user-friendly applications that make a difference.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
            <Button 
              size="lg" 
              className="bg-gradient-to-r from-blue-500 to-blue-600 hover:from-blue-600 hover:to-blue-700 transition-all duration-300 transform hover:scale-105"
            >
              View My Work
            </Button>
            <Button 
              variant="outline" 
              size="lg"
              className="border-slate-600 text-slate-300 hover:bg-slate-800 transition-all duration-300"
            >
              Download Resume
            </Button>
          </div>
          <div className="flex justify-center space-x-6">
            <a href="#" className="text-slate-400 hover:text-blue-400 transition-colors duration-300 transform hover:scale-110">
              <Github size={24} />
            </a>
            <a href="#" className="text-slate-400 hover:text-blue-400 transition-colors duration-300 transform hover:scale-110">
              <Linkedin size={24} />
            </a>
            <a href="#" className="text-slate-400 hover:text-blue-400 transition-colors duration-300 transform hover:scale-110">
              <Mail size={24} />
            </a>
          </div>
        </div>
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <ArrowDown className="text-slate-400" size={24} />
        </div>
      </section>

      {/* Skills Section */}
      <section className="py-20 px-4 bg-slate-800/50">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold text-white text-center mb-16">
            Technical <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-emerald-400">Skills</span>
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {skills.map((skill, index) => (
              <Card key={skill.name} className="bg-slate-800/80 border-slate-700 hover:border-blue-500/50 transition-all duration-300 transform hover:scale-105 animate-fade-in" style={{animationDelay: `${index * 100}ms`}}>
                <CardContent className="p-6 text-center">
                  <div className={`w-12 h-12 ${skill.color} rounded-lg mx-auto mb-4 flex items-center justify-center`}>
                    <span className="text-white font-bold">{skill.name.charAt(0)}</span>
                  </div>
                  <h3 className="text-white font-semibold mb-2">{skill.name}</h3>
                  <Badge variant="secondary" className="bg-slate-700 text-slate-300">
                    {skill.level}
                  </Badge>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section className="py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold text-white text-center mb-16">
            Featured <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-emerald-400">Projects</span>
          </h2>
          <div className="grid md:grid-cols-2 gap-8">
            {projects.map((project, index) => (
              <Card key={project.title} className="bg-slate-800/80 border-slate-700 hover:border-blue-500/50 transition-all duration-300 transform hover:scale-105 animate-fade-in overflow-hidden" style={{animationDelay: `${index * 150}ms`}}>
                <div className="h-48 bg-gradient-to-br from-slate-700 to-slate-600 relative overflow-hidden">
                  <img 
                    src={`https://images.unsplash.com/${project.image}?w=500&h=300&fit=crop`}
                    alt={project.title}
                    className="w-full h-full object-cover opacity-80"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-900/80 to-transparent"></div>
                </div>
                <CardHeader>
                  <CardTitle className="text-white">{project.title}</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <p className="text-slate-300 leading-relaxed">{project.description}</p>
                  <div className="flex flex-wrap gap-2">
                    {project.tech.map((tech) => (
                      <Badge key={tech} variant="secondary" className="bg-blue-500/20 text-blue-300 border-blue-500/30">
                        {tech}
                      </Badge>
                    ))}
                  </div>
                  <div className="flex space-x-4 pt-4">
                    <Button variant="outline" size="sm" className="border-slate-600 text-slate-300 hover:bg-slate-700">
                      <ExternalLink size={16} className="mr-2" />
                      Live Demo
                    </Button>
                    <Button variant="outline" size="sm" className="border-slate-600 text-slate-300 hover:bg-slate-700">
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
      <section className="py-20 px-4 bg-slate-800/50">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl font-bold text-white text-center mb-16">
            Professional <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-emerald-400">Experience</span>
          </h2>
          <div className="space-y-8">
            {experiences.map((exp, index) => (
              <Card key={exp.title} className="bg-slate-800/80 border-slate-700 hover:border-blue-500/50 transition-all duration-300 animate-fade-in" style={{animationDelay: `${index * 200}ms`}}>
                <CardContent className="p-8">
                  <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4">
                    <div>
                      <h3 className="text-xl font-bold text-white mb-1">{exp.title}</h3>
                      <p className="text-blue-400 font-semibold">{exp.company}</p>
                    </div>
                    <Badge variant="outline" className="border-emerald-500/50 text-emerald-400 mt-2 md:mt-0 w-fit">
                      <Calendar size={14} className="mr-1" />
                      {exp.period}
                    </Badge>
                  </div>
                  <p className="text-slate-300 leading-relaxed">{exp.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Education & Certifications */}
      <section className="py-20 px-4">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl font-bold text-white text-center mb-16">
            Education & <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-emerald-400">Certifications</span>
          </h2>
          <div className="grid md:grid-cols-2 gap-6">
            {education.map((item, index) => (
              <Card key={item.degree} className="bg-slate-800/80 border-slate-700 hover:border-blue-500/50 transition-all duration-300 transform hover:scale-105 animate-fade-in" style={{animationDelay: `${index * 150}ms`}}>
                <CardContent className="p-6">
                  <div className="flex items-start space-x-4">
                    <div className={`p-3 rounded-lg ${item.type === 'degree' ? 'bg-blue-500/20' : 'bg-emerald-500/20'}`}>
                      <Award className={`${item.type === 'degree' ? 'text-blue-400' : 'text-emerald-400'}`} size={24} />
                    </div>
                    <div className="flex-1">
                      <h3 className="text-white font-semibold mb-2">{item.degree}</h3>
                      <p className="text-slate-300 mb-2">{item.institution}</p>
                      <Badge variant="outline" className="border-slate-600 text-slate-400">
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
      <section className="py-20 px-4 bg-slate-800/50">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl font-bold text-white text-center mb-16">
            Get In <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-emerald-400">Touch</span>
          </h2>
          <div className="grid md:grid-cols-2 gap-12">
            <div className="space-y-8">
              <div>
                <h3 className="text-2xl font-semibold text-white mb-6">Let's work together</h3>
                <p className="text-slate-300 leading-relaxed mb-8">
                  I'm always interested in new opportunities and exciting projects. 
                  Whether you have a question or just want to say hi, feel free to reach out!
                </p>
              </div>
              <div className="space-y-4">
                <div className="flex items-center space-x-4">
                  <div className="p-3 bg-blue-500/20 rounded-lg">
                    <Mail className="text-blue-400" size={20} />
                  </div>
                  <div>
                    <p className="text-white font-semibold">Email</p>
                    <p className="text-slate-300">alex.johnson@email.com</p>
                  </div>
                </div>
                <div className="flex items-center space-x-4">
                  <div className="p-3 bg-emerald-500/20 rounded-lg">
                    <Phone className="text-emerald-400" size={20} />
                  </div>
                  <div>
                    <p className="text-white font-semibold">Phone</p>
                    <p className="text-slate-300">+1 (555) 123-4567</p>
                  </div>
                </div>
                <div className="flex items-center space-x-4">
                  <div className="p-3 bg-purple-500/20 rounded-lg">
                    <MapPin className="text-purple-400" size={20} />
                  </div>
                  <div>
                    <p className="text-white font-semibold">Location</p>
                    <p className="text-slate-300">San Francisco, CA</p>
                  </div>
                </div>
              </div>
            </div>
            <Card className="bg-slate-800/80 border-slate-700">
              <CardContent className="p-8">
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div>
                    <Label htmlFor="name" className="text-white">Name</Label>
                    <Input
                      id="name"
                      value={formData.name}
                      onChange={(e) => setFormData({...formData, name: e.target.value})}
                      className="bg-slate-700 border-slate-600 text-white mt-2"
                      required
                    />
                  </div>
                  <div>
                    <Label htmlFor="email" className="text-white">Email</Label>
                    <Input
                      id="email"
                      type="email"
                      value={formData.email}
                      onChange={(e) => setFormData({...formData, email: e.target.value})}
                      className="bg-slate-700 border-slate-600 text-white mt-2"
                      required
                    />
                  </div>
                  <div>
                    <Label htmlFor="message" className="text-white">Message</Label>
                    <Textarea
                      id="message"
                      value={formData.message}
                      onChange={(e) => setFormData({...formData, message: e.target.value})}
                      className="bg-slate-700 border-slate-600 text-white mt-2 min-h-[120px]"
                      required
                    />
                  </div>
                  <Button 
                    type="submit" 
                    className="w-full bg-gradient-to-r from-blue-500 to-emerald-500 hover:from-blue-600 hover:to-emerald-600 transition-all duration-300"
                  >
                    Send Message
                  </Button>
                </form>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 px-4 border-t border-slate-700">
        <div className="max-w-6xl mx-auto text-center">
          <p className="text-slate-400">
            © 2024 Alex Johnson. Built with passion and lots of coffee ☕
          </p>
        </div>
      </footer>
    </div>
  );
};

export default Index;
