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
  const fullText = "Full Stack Developer";
  
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
    { name: "React.js", level: "Expert", color: "bg-foreground", icon: "./images/react.png" },
    { name: "Vue.js", level: "Expert", color: "bg-foreground", icon: "./images/vuejs.png" },
    { name: "Node js", level: "Expert", color: "bg-foreground", icon: "./images/Node.js_logo.svg" },
    { name: "Expressjs", level: "Expert", color: "bg-foreground", icon: "./images/expressjs.png" },
    { name: "PostgreSql", level: "Advanced", color: "bg-foreground", icon: "./images/postgresql.jpg" },
    { name: "Laravel", level: "Advanced", color: "bg-foreground", icon: "./images/laravel.png" },
    { name: "Php", level: "Advanced", color: "bg-foreground", icon: "./images/php.png" },
    { name: "Livewire", level: "Advanced", color: "bg-foreground", icon: "./images/laravel-livewire.avif" },
    { name: "MySQL", level: "Advanced", color: "bg-foreground", icon: "./images/mysql.svg" },
    { name: "HTML5", level: "Expert", color: "bg-foreground", icon: "./images/html.png" },
    { name: "Css", level: "Expert", color: "bg-foreground", icon: "./images/css.png" },
    { name: "SCSS", level: "Expert", color: "bg-foreground", icon: "./images/sass.svg" },
    { name: "JavaScript", level: "Expert", color: "bg-foreground", icon: "./images/javascript.png" },
    { name: "Bootstrap", level: "Expert", color: "bg-foreground", icon: "./images/bootstrap.png" },
    { name: "jQuery", level: "Expert", color: "bg-foreground", icon: "./images/jquery.svg" },
    { name: "Angular JS", level: "Expert", color: "bg-foreground", icon: "./images/angularjs.svg" },
    { name: "Tailwind CSS", level: "Intermediate", color: "bg-foreground", icon: "./images/tailwind.svg" },
  ];

  const projects = [
    {
      title: "ByPrabareddy",
      description: "An E-commerce platform with order,payment and shipping modules included with microservice flow, handles more than 300+ users and 500+ transactions using Vue.js and Microservices (Laravel backend)",
      tech: ["Vue.js","Microservices","Php", "Laravel", "Bootstrap","MySQL","Razorpay Integration"],
      demo: "https://byprabareddy.com",
      image: "./images/byprabareddy.png"
    },
    {
      title: "Trichella ERP",
      description: "Implemented role-based access control (RBAC) and real-time data sync across organisations via REST APIs — enabling secure, concurrent access for admin, warehouse, and pharmacy roles.Built GRN processing, inward/outward flow tracking, and indent management modules that eliminated manual procurement errors and streamlined purchasing operations end-to-end.Architected a microservices-style system serving 500+ users and 400+ transactions with 150+ inventory SKUs across multi-warehouse and multi-organisation included.",
      tech: ["Livewire","JS", "Php", "Laravel", "Bootstrap","MySQL","Razorpay Integration"],
      demo: "https://erp.trichella.com",
      image: "./images/erptrichella.png"
    },
    {
      title: "Trichella",
      description: "A complete E-commerce platform with end-to-end modules, serving 1000+ users and 1500+ transactions using JS frontend, Laravel.",
      tech: ["JS", "Php", "Laravel", "SCSS","MySQL","Razorpay Integration"],
      demo: "https://trichella.com",
      image: "./images/trichella.png"
    },
    {
      title: "Sitespedia",
      description: "Developed a task management platform that helps users stay organized with intelligent checklists, reminders, and productivity- focused features.",
      tech: ["JS", "Php", "Laravel", "SCSS","jQuery","MySQL"],
      demo: "https://sitespedia.com",
      image: "./images/sitespedia.png"
    },
  ];

  const experiences = [
    {
      title: "Full Stack Developer",
      company: "Praba's VCare Health Clinic (P) Ltd | Chennai, Tamil Nadu",
      period: "2025 - present",
      description: "Built a full-stack e-commerce + ERP platform from the ground up for a healthcare brand — handling prescription-based ordering, multi-warehouse inventory, and automated procurement workflows.Architected a microservices-style system serving 500+ users and 400+ transactions with 150+ inventory SKUs across multi-warehouse and multi-organisation workflows, using Vue.js frontend, Laravel/PHP backend, and MySQL."
    },
    {
      title: "Junior Full Stack Developer",
      company: "Netaxis IT Solutions (P) Ltd | Chennai, Tamil Nadu",
      period: "2023 - 2025",
      description: "I contributed to different enhancement projects on both the frontend and backend, and developed embed-friendly components using well-structured code."
    },
    {
      title: "Full Stack Developer Trainee",
      company: "Netaxis IT Solutions (P) Ltd | Chennai, Tamil Nadu",
      period: "2023",
      description: "During my trainee period, I built a strong foundation in JavaScript and also learned jQuery, SCSS, CSS, HTML, PHP, Laravel, and MySQL, which helped me understand full stack development."
    },
  
  ];

  const education = [
     {
      degree: "Higher Seconday",
      institution: "John Dewey Matric hr sec school,Villupuram,TamilNadu",
      year: "2018",
      type: "Higher Seconday"
    },
    {
      degree: "Bachelor of Engineering (Computer Science)",
      institution: "University College of Engineering Villupuram,TamiNadu",
      year: "2022",
      type: "degree"
    },
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
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary via-secondary to-accent animate-pulse">Thamizharasan D</span>
          </h1>
          
          {/* Animated Typewriter Tagline */}
          <div className="text-xl md:text-2xl text-muted-foreground mb-8 font-light h-8 flex items-center justify-center">
            <span className="relative">
              {displayedText}
              <span className="absolute right-0 top-0 w-0.5 h-full bg-primary animate-pulse ml-1"></span>
            </span>
          </div>
          
          <p className="text-lg text-muted-foreground mb-12 max-w-2xl mx-auto leading-relaxed transform transition-all duration-700 hover:text-foreground">
            Full Stack Developer with 3 years of experience in full lifecycle web application development and maintenance.
Proven track record of reducing order processing time by 70% through automated payment capturing and shipping
workflows, and building scalable e-commerce platforms with integrated ERP systems handling 500+ users. Skilled
in Vue.js, Laravel, PHP, MySQL, and microservices architecture; known for delivering user-focused applications
with healthcare compliance expertise.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
            <form action="mailto:thamizharasan0307@gmail.com"><Button      className="bg-gradient-to-r from-primary to-secondary hover:from-primary/80 hover:to-secondary/80 transition-all duration-300 transform hover:scale-110 hover:rotate-1 shadow-lg hover:shadow-xl">HIRE ME <span className="px-2"></span></Button></form>
            <Button 
              variant="outline" 
              size="lg"
              className="transition-all duration-300 transform hover:scale-105 hover:-rotate-1 hover:border-primary"
            >
              <a href="/resume/Thamizharasan_full_stack_developer.pdf" target="_blank">Download Resume</a>
            </Button>
          </div>
          
          <div className="flex justify-center space-x-6">
            <a href="https://github.com/Thamizh-srt" className="text-muted-foreground hover:text-primary transition-all duration-300 transform hover:scale-125 hover:rotate-12" target="_blank">
              <Github size={24} />
            </a>
            <a href="https://www.linkedin.com/in/thamizharasan-d-419b24227" className="text-muted-foreground hover:text-primary transition-all duration-300 transform hover:scale-125 hover:-rotate-12" target="_blank">
              <Linkedin size={24} />
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
          <p className="text-lg text-muted-foreground leading-relaxed mb-3 text-center">
            I ship full-stack web applications that handle real users, real money, and real deadlines — and keep running after launch.Currently building a production e-commerce + ERP platform at Praba's VCare Health Clinic Pvt Ltd — serving 500+ users, processing 400+ transactions, and managing 150+ inventory items across multi-warehouse workflows.
          </p>
        <p className="text-lg text-muted-foreground leading-relaxed mb-3 text-center">
            I integrated Razorpay + Bluedart with Laravel Jobs & Queues and cut order processing time by 70%. I also led end-to-end deployment, DNS configuration, and optimised the app to 99.9% uptime under healthcare compliance constraints.
        </p>
        <p className="text-lg text-muted-foreground leading-relaxed mb-3 text-center">
            Before that, I spent 2+ years at Netaxis IT Solutions building 3 live production platforms from scratch — a global comment & poll embedding system, a block-based task management SaaS, and a virtual memorial platform — each shipped within deadline and still serving users today.
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
                    <img src={skill.icon} alt="" />
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
                    src={project.image}
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
                    <a href={project.demo} target="_blank">Live Demo</a>                      
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
                    <div className={`p-3 rounded-lg bg-primary/20 transform transition-all duration-300 group-hover:scale-110 group-hover:rotate-12`}>
                      <Award className={'text-primary'} size={24} />
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
                    <p className="text-muted-foreground group-hover:text-foreground transition-colors duration-300">thamizharasan0307@gmail.com</p>
                  </div>
                </div>
                <div className="flex items-center space-x-4 group">
                  <div className="p-3 bg-primary/20 rounded-lg transform transition-all duration-300 group-hover:scale-110 group-hover:rotate-12">
                    <Phone className="text-primary" size={20} />
                  </div>
                  <div>
                    <p className="text-foreground font-semibold group-hover:text-secondary transition-colors duration-300">Phone</p>
                    <p className="text-muted-foreground group-hover:text-foreground transition-colors duration-300">9994176539</p>
                  </div>
                </div>
                <div className="flex items-center space-x-4 group">
                  <div className="p-3 bg-primary/20 rounded-lg transform transition-all duration-300 group-hover:scale-110 group-hover:rotate-12">
                    <MapPin className="text-primary" size={20} />
                  </div>
                  <div>
                    <p className="text-foreground font-semibold group-hover:text-accent transition-colors duration-300">Location</p>
                    <p className="text-muted-foreground group-hover:text-foreground transition-colors duration-300">Chennai</p>
                  </div>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 px-4 border-t border-border bg-muted/30">
        <div className="max-w-6xl mx-auto text-center">
          <p className="text-muted-foreground hover:text-foreground transition-colors duration-300">
            © 2025 Thamizharasan. Built with passion and lots of ❤️
          </p>
        </div>
      </footer>
    </div>
  );
};

export default Index;
