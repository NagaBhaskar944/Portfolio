import React, { useState, useEffect } from 'react';
import { 
  Code2, 
  Terminal, 
  Cpu, 
  Globe, 
  Github, 
  Linkedin, 
  Twitter, 
  Mail, 
  ExternalLink, 
  ChevronRight, 
  Sun, 
  Moon, 
  Menu, 
  X, 
  Briefcase, 
  GraduationCap, 
  User, 
  Layers, 
  Sparkles, 
  CheckCircle2, 
  Database,
  Layout,
  Wrench,
  Server,
  Eye,
  Phone,
  MapPin
} from 'lucide-react';

const PORTFOLIO_DATA = {
  personal: {
    name: "Naga Bhaskar Balam",
    role: "Full-Stack Developer & Cloud Engineer",
    tagline: "Building scalable web applications, REST APIs, and automated AWS cloud infrastructure.",
    bio: "Computer Science and Engineering graduate (2026) from Sathyabama Institute of Science and Technology with hands-on experience in full-stack development, AWS cloud automation, RESTful APIs, and database management.",
    location: "Chennai / Bengaluru, IN (Open to Relocation)",
    email: "nagabhaskar.balam@gmail.com",
    phone: "+91 9618423612",
    availability: "Open to Full-Time & Engineering Roles (Class of 2026)",
    github: "https://github.com/NagaBhaskar944",
    linkedin: "https://linkedin.com/in/nagabhaskarbalam",
    education: {
      degree: "Bachelor of Engineering - Computer Science and Engineering",
      institution: "Sathyabama Institute of Science and Technology",
      period: "2022 - 2026",
      cgpa: "7.94 / 10"
    },
    languages: ["English", "Telugu", "Hindi", "German"],
    stats: [
      { label: "Degree CGPA", value: "7.94" },
      { label: "AWS Setup Efficiency", value: "+50%" },
      { label: "Portal Processing Time", value: "-40%" },
      { label: "Rendering Speed Boost", value: "+40%" },
    ]
  },
  skills: [
    {
      category: "Full-Stack Development",
      icon: Layout,
      items: ["JavaScript (ES6+)", "Python", "React.js", "HTML5 / CSS3", "RESTful APIs", "SQL & Relational DBs"]
    },
    {
      category: "Cloud & DevOps Infrastructure",
      icon: Server,
      items: ["AWS (EC2, S3, IAM)", "AWS Beanstalk & OpsWorks", "CloudFormation Automation", "Microsoft Azure", "Oracle Cloud Infrastructure (OCI)"]
    },
    {
      category: "Analytics & Databases",
      icon: Database,
      items: ["MongoDB", "Power BI & Excel Analytics", "MATLAB", "Machine Learning Fundamentals"]
    },
    {
      category: "Professional Certifications",
      icon: Wrench,
      items: [
        "AWS Cloud Computing Certification",
        "Oracle Cloud Infrastructure (OCI)",
        "MathWorks MATLAB Certified",
        "SkillForge Web Development",
        "Microsoft Azure Certification",
        "MongoDB Certified Developer"
      ]
    }
  ],
  projects: [
    {
      id: "aws-alb-automation",
      title: "Application Load Balancer & Automation in AWS",
      category: "Cloud Infrastructure",
      featured: true,
      description: "Automated provisioning of EC2 instances and S3 configurations with Application Load Balancing for high availability.",
      longDescription: "Engineered scalable, secure, and resilient AWS infrastructure. Automated EC2 instance launching, security group access levels, and S3 bucket configurations, cutting setup overhead by over 50%. Built using AWS EC2, S3, ALB, IAM policies, and CloudFormation automation templates.",
      tags: ["AWS EC2", "AWS S3", "Load Balancer", "CloudFormation", "IAM", "Infrastructure Automation"],
      githubUrl: "https://github.com/NagaBhaskar944",
      liveUrl: "https://linkedin.com/in/nagabhaskarbalam",
      metrics: "Reduced manual cloud setup time by >50%"
    },
    {
      id: "parking-lot-management",
      title: "Parking Lot Management System",
      category: "Web Application",
      featured: true,
      description: "Smart web system tracking real-time vehicle entry/exit times, slot availability, and automated parking fee calculation.",
      longDescription: "Developed a dynamic web portal to manage parking operations seamlessly. Tracks vehicle timestamps, computes duration-based tariffs, and updates live slot availability visually on the frontend dashboard.",
      tags: ["JavaScript", "React", "HTML5", "CSS3", "REST APIs", "UI Automation"],
      githubUrl: "https://github.com/NagaBhaskar944",
      liveUrl: "https://linkedin.com/in/nagabhaskarbalam",
      metrics: "Accurate real-time tracking of vehicle durations & slots"
    }
  ],
  experience: [
    {
      role: "AWS Cloud Engineer Intern",
      company: "Vectra Technosoft Pvt Ltd",
      location: "Chennai, IN",
      period: "Jul 2024 - Oct 2024",
      type: "Internship",
      description: "Managed infrastructure automation solutions and cloud deployment workflows utilizing core AWS technologies.",
      achievements: [
        "Automated infrastructure provisioning using AWS EC2 and S3 buckets.",
        "Deployed applications using AWS Elastic Beanstalk, CloudFormation, and OpsWorks.",
        "Created granular IAM security policies for organizational access control compliance."
      ]
    },
    {
      role: "Web Developer Intern",
      company: "SkillForge",
      location: "Bengaluru, IN",
      period: "Apr 2024 - Jun 2024",
      type: "Internship",
      description: "Developed and optimized internal web portals using modern frontend web stack technologies.",
      achievements: [
        "Engineered an internal web portal with HTML/CSS/JS, reducing manual processing time by 40%.",
        "Benchmarked and integrated lightweight JavaScript libraries, improving rendering speed by 40%.",
        "Built interactive user feedback modules, boosting user satisfaction scores by 15%."
      ]
    }
  ]
};

export default function App() {
  const [darkMode, setDarkMode] = useState(true);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeTab, setActiveTab] = useState('All');
  const [selectedProject, setSelectedProject] = useState(null);

  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [darkMode]);

  const categories = ['All', 'Cloud Infrastructure', 'Web Application'];
  const filteredProjects = activeTab === 'All' 
    ? PORTFOLIO_DATA.projects 
    : PORTFOLIO_DATA.projects.filter(p => p.category === activeTab);

  return (
    <div className={`min-h-screen transition-colors duration-300 ${darkMode ? 'bg-slate-950 text-slate-100' : 'bg-slate-50 text-slate-900'} font-sans antialiased selection:bg-indigo-500 selection:text-white`}>
      
      {/* BACKGROUND GRAPHIC ACCENTS */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none z-0 opacity-40 dark:opacity-25">
        <div className="absolute -top-40 -right-40 w-96 h-96 bg-indigo-500/30 rounded-full blur-3xl"></div>
        <div className="absolute top-1/3 -left-40 w-96 h-96 bg-purple-500/20 rounded-full blur-3xl"></div>
        <div className="absolute -bottom-40 right-1/4 w-96 h-96 bg-blue-500/20 rounded-full blur-3xl"></div>
      </div>

      {/* HEADER / NAVIGATION */}
      <header className={`sticky top-0 z-40 backdrop-blur-md border-b transition-colors duration-300 ${darkMode ? 'bg-slate-950/80 border-slate-800/80' : 'bg-white/80 border-slate-200'}`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
          
          <a href="#hero" className="flex items-center space-x-2 group">
            <div className="w-9 h-9 rounded-xl bg-gradient-to-tr from-indigo-600 to-purple-600 flex items-center justify-center text-white font-bold shadow-md shadow-indigo-500/20 group-hover:scale-105 transition-transform">
              <Code2 className="w-5 h-5" />
            </div>
            <span className="font-bold text-lg tracking-tight bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 bg-clip-text text-transparent">
              {PORTFOLIO_DATA.personal.name}
            </span>
          </a>

          <nav className="hidden md:flex items-center space-x-8 text-sm font-medium">
            <a href="#about" className="hover:text-indigo-500 transition-colors">About</a>
            <a href="#skills" className="hover:text-indigo-500 transition-colors">Skills</a>
            <a href="#projects" className="hover:text-indigo-500 transition-colors">Projects</a>
            <a href="#experience" className="hover:text-indigo-500 transition-colors">Experience</a>
            <a href="#contact" className="hover:text-indigo-500 transition-colors">Contact</a>
          </nav>

          <div className="hidden md:flex items-center space-x-4">
            <button
              onClick={() => setDarkMode(!darkMode)}
              className={`p-2 rounded-xl border transition-colors ${darkMode ? 'bg-slate-900 border-slate-800 text-amber-400 hover:bg-slate-800' : 'bg-slate-100 border-slate-200 text-slate-700 hover:bg-slate-200'}`}
              aria-label="Toggle theme"
            >
              {darkMode ? <Sun className="w-4 h-4" /> : <Moon className="w-4 h-4" />}
            </button>
            <a
              href="#contact"
              className="px-4 py-2 text-sm font-semibold text-white bg-indigo-600 hover:bg-indigo-500 rounded-xl shadow-md shadow-indigo-500/25 transition-all hover:scale-[1.02] active:scale-95"
            >
              Hire Me
            </a>
          </div>

          <div className="flex md:hidden items-center space-x-2">
            <button
              onClick={() => setDarkMode(!darkMode)}
              className={`p-2 rounded-xl border ${darkMode ? 'bg-slate-900 border-slate-800 text-amber-400' : 'bg-slate-100 border-slate-200 text-slate-700'}`}
              aria-label="Toggle theme"
            >
              {darkMode ? <Sun className="w-4 h-4" /> : <Moon className="w-4 h-4" />}
            </button>
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className={`p-2 rounded-xl border ${darkMode ? 'bg-slate-900 border-slate-800 text-slate-200' : 'bg-slate-100 border-slate-200 text-slate-800'}`}
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {mobileMenuOpen && (
          <div className={`md:hidden border-b px-4 pt-2 pb-6 space-y-3 ${darkMode ? 'bg-slate-950 border-slate-800' : 'bg-white border-slate-200'}`}>
            <a href="#about" onClick={() => setMobileMenuOpen(false)} className="block py-2 text-base font-medium hover:text-indigo-500">About</a>
            <a href="#skills" onClick={() => setMobileMenuOpen(false)} className="block py-2 text-base font-medium hover:text-indigo-500">Skills</a>
            <a href="#projects" onClick={() => setMobileMenuOpen(false)} className="block py-2 text-base font-medium hover:text-indigo-500">Projects</a>
            <a href="#experience" onClick={() => setMobileMenuOpen(false)} className="block py-2 text-base font-medium hover:text-indigo-500">Experience</a>
            <a href="#contact" onClick={() => setMobileMenuOpen(false)} className="block py-2 text-base font-medium hover:text-indigo-500">Contact</a>
          </div>
        )}
      </header>

      <main className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* HERO SECTION */}
        <section id="hero" className="py-20 lg:py-32 flex flex-col items-center justify-center text-center">
          <div className={`inline-flex items-center space-x-2 px-3 py-1.5 rounded-full text-xs font-medium border mb-8 ${darkMode ? 'bg-indigo-950/60 border-indigo-800/60 text-indigo-300' : 'bg-indigo-50 border-indigo-200 text-indigo-700'}`}>
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
            </span>
            <span>{PORTFOLIO_DATA.personal.availability}</span>
          </div>

          <h1 className="text-4xl sm:text-6xl lg:text-7xl font-extrabold tracking-tight max-w-4xl leading-tight">
            Building software with <span className="bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 bg-clip-text text-transparent">precision</span> & purpose.
          </h1>

          <p className={`mt-6 text-lg sm:text-xl max-w-2xl leading-relaxed ${darkMode ? 'text-slate-400' : 'text-slate-600'}`}>
            Hi, I'm <span className="font-semibold text-indigo-400">{PORTFOLIO_DATA.personal.name}</span>. {PORTFOLIO_DATA.personal.tagline}
          </p>

          <div className="mt-10 flex flex-col sm:flex-row items-center gap-4 w-full sm:w-auto">
            <a
              href="#projects"
              className="w-full sm:w-auto px-7 py-3.5 text-sm font-semibold text-white bg-indigo-600 hover:bg-indigo-500 rounded-xl shadow-lg shadow-indigo-500/30 flex items-center justify-center space-x-2 transition-all hover:scale-105"
            >
              <span>Explore My Work</span>
              <ChevronRight className="w-4 h-4" />
            </a>

            <a
              href="#contact"
              className={`w-full sm:w-auto px-7 py-3.5 text-sm font-semibold rounded-xl border transition-all hover:scale-105 flex items-center justify-center space-x-2 ${darkMode ? 'bg-slate-900 border-slate-800 text-slate-200 hover:bg-slate-800' : 'bg-white border-slate-300 text-slate-700 hover:bg-slate-100'}`}
            >
              <Mail className="w-4 h-4" />
              <span>Contact Me</span>
            </a>
          </div>

          <div className="mt-12 flex items-center space-x-5 text-slate-400">
            <a href={PORTFOLIO_DATA.personal.github} target="_blank" rel="noreferrer" className="hover:text-indigo-400 transition-colors p-2" aria-label="GitHub">
              <Github className="w-5 h-5" />
            </a>
            <a href={PORTFOLIO_DATA.personal.linkedin} target="_blank" rel="noreferrer" className="hover:text-indigo-400 transition-colors p-2" aria-label="LinkedIn">
              <Linkedin className="w-5 h-5" />
            </a>
            <a href={PORTFOLIO_DATA.personal.twitter} target="_blank" rel="noreferrer" className="hover:text-indigo-400 transition-colors p-2" aria-label="Twitter">
              <Twitter className="w-5 h-5" />
            </a>
          </div>

          <div className="mt-16 w-full max-w-4xl grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6 pt-10 border-t border-slate-800/40">
            {PORTFOLIO_DATA.personal.stats.map((stat, idx) => (
              <div key={idx} className={`p-4 rounded-2xl border text-center ${darkMode ? 'bg-slate-900/40 border-slate-800/60' : 'bg-white/60 border-slate-200/80 shadow-sm'}`}>
                <div className="text-2xl sm:text-3xl font-extrabold bg-gradient-to-r from-indigo-500 to-purple-500 bg-clip-text text-transparent">
                  {stat.value}
                </div>
                <div className={`mt-1 text-xs sm:text-sm font-medium ${darkMode ? 'text-slate-400' : 'text-slate-600'}`}>
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* ABOUT SECTION */}
        <section id="about" className="py-20 border-t border-slate-800/40">
          <div className="max-w-3xl mx-auto text-center mb-12">
            <h2 className="text-xs uppercase tracking-widest font-semibold text-indigo-500">About Me</h2>
            <p className="mt-2 text-3xl font-bold tracking-tight">Engineering with UX Focus & Code Integrity</p>
          </div>

          <div className="grid md:grid-cols-12 gap-8 items-center">
            <div className="md:col-span-5">
              <div className={`rounded-2xl border overflow-hidden shadow-2xl ${darkMode ? 'bg-slate-900 border-slate-800' : 'bg-slate-900 text-slate-100 border-slate-800'}`}>
                <div className="bg-slate-950/80 px-4 py-3 border-b border-slate-800 flex items-center space-x-2">
                  <div className="w-3 h-3 rounded-full bg-rose-500"></div>
                  <div className="w-3 h-3 rounded-full bg-amber-500"></div>
                  <div className="w-3 h-3 rounded-full bg-emerald-500"></div>
                  <span className="text-xs font-mono text-slate-400 ml-2">alex_dev_info.ts</span>
                </div>
                <div className="p-5 font-mono text-xs sm:text-sm space-y-3">
                  <p><span className="text-purple-400">const</span> <span className="text-yellow-300">developer</span> = &#123;</p>
                  <p className="pl-4"><span className="text-indigo-400">name</span>: <span className="text-emerald-400">"{PORTFOLIO_DATA.personal.name}"</span>,</p>
                  <p className="pl-4"><span className="text-indigo-400">role</span>: <span className="text-emerald-400">"Full Stack Engineer"</span>,</p>
                  <p className="pl-4"><span className="text-indigo-400">location</span>: <span className="text-emerald-400">"{PORTFOLIO_DATA.personal.location}"</span>,</p>
                  <p className="pl-4"><span className="text-indigo-400">passions</span>: [<span className="text-emerald-400">"UI Architecture"</span>, <span className="text-emerald-400">"Cloud"</span>, <span className="text-emerald-400">"DX"</span>],</p>
                  <p className="pl-4"><span className="text-indigo-400">coffeePerDay</span>: <span className="text-amber-400">3</span>,</p>
                  <p>&#125;;</p>
                  <p className="text-slate-500 pt-2">// Open for collaborative innovative projects</p>
                </div>
              </div>
            </div>

            <div className="md:col-span-7 space-y-6">
              <p className={`text-base sm:text-lg leading-relaxed ${darkMode ? 'text-slate-300' : 'text-slate-700'}`}>
                {PORTFOLIO_DATA.personal.bio}
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-4">
                <div className={`p-4 rounded-xl border ${darkMode ? 'bg-slate-900/50 border-slate-800' : 'bg-white border-slate-200'}`}>
                  <div className="flex items-center space-x-3 mb-2">
                    <Sparkles className="w-5 h-5 text-indigo-500" />
                    <h3 className="font-semibold text-sm">Clean Architecture</h3>
                  </div>
                  <p className={`text-xs ${darkMode ? 'text-slate-400' : 'text-slate-600'}`}>
                    Writing maintainable, well-tested, and scalable code structures that teams love working with.
                  </p>
                </div>

                <div className={`p-4 rounded-xl border ${darkMode ? 'bg-slate-900/50 border-slate-800' : 'bg-white border-slate-200'}`}>
                  <div className="flex items-center space-x-3 mb-2">
                    <Cpu className="w-5 h-5 text-purple-500" />
                    <h3 className="font-semibold text-sm">Performance First</h3>
                  </div>
                  <p className={`text-xs ${darkMode ? 'text-slate-400' : 'text-slate-600'}`}>
                    Optimizing renders, network requests, and asset delivery for instant load times.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* SKILLS SHOWCASE SECTION */}
        <section id="skills" className="py-20 border-t border-slate-800/40">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <h2 className="text-xs uppercase tracking-widest font-semibold text-indigo-500">Technical Expertise</h2>
            <p className="mt-2 text-3xl font-bold tracking-tight">Tools, Skills & Certifications</p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {PORTFOLIO_DATA.skills.map((skillGroup, idx) => {
              const IconComponent = skillGroup.icon;
              return (
                <div key={idx} className={`p-6 rounded-2xl border transition-all hover:border-indigo-500/50 ${darkMode ? 'bg-slate-900/60 border-slate-800' : 'bg-white border-slate-200 shadow-sm'}`}>
                  <div className="flex items-center space-x-3 mb-6">
                    <div className="p-2.5 rounded-xl bg-indigo-500/10 text-indigo-400">
                      <IconComponent className="w-6 h-6" />
                    </div>
                    <h3 className="text-lg font-bold">{skillGroup.category}</h3>
                  </div>

                  <div className="flex flex-wrap gap-2.5">
                    {skillGroup.items.map((skill, sIdx) => (
                      <div key={sIdx} className={`flex items-center space-x-2 px-3.5 py-2 rounded-xl text-xs font-medium border transition-colors ${darkMode ? 'bg-slate-950/80 border-slate-800 text-slate-200 hover:border-indigo-500/40' : 'bg-slate-50 border-slate-200 text-slate-800 hover:border-indigo-500/40'}`}>
                        <CheckCircle2 className="w-3.5 h-3.5 text-indigo-500 flex-shrink-0" />
                        <span>{skill}</span>
                      </div>
                    ))}
                  </div>
                </div>
              );
            })}
          </div>
        </section>

        {/* PROJECTS SECTION */}
        <section id="projects" className="py-20 border-t border-slate-800/40">
          <div className="max-w-3xl mx-auto text-center mb-12">
            <h2 className="text-xs uppercase tracking-widest font-semibold text-indigo-500">Featured Portfolio</h2>
            <p className="mt-2 text-3xl font-bold tracking-tight">Recent Projects & Case Studies</p>
          </div>

          <div className="flex flex-wrap items-center justify-center gap-2 mb-12">
            {categories.map((cat, idx) => (
              <button
                key={idx}
                onClick={() => setActiveTab(cat)}
                className={`px-4 py-2 text-xs sm:text-sm font-medium rounded-xl transition-all ${
                  activeTab === cat 
                    ? 'bg-indigo-600 text-white shadow-md shadow-indigo-500/20' 
                    : darkMode 
                      ? 'bg-slate-900 border border-slate-800 text-slate-400 hover:text-white' 
                      : 'bg-white border border-slate-200 text-slate-600 hover:text-slate-900'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {filteredProjects.map((project) => (
              <div key={project.id} className={`group rounded-2xl border overflow-hidden flex flex-col justify-between transition-all duration-300 hover:-translate-y-1 ${darkMode ? 'bg-slate-900/60 border-slate-800 hover:border-slate-700' : 'bg-white border-slate-200 shadow-sm hover:shadow-md'}`}>
                <div className="p-6">
                  <div className="flex items-center justify-between mb-3">
                    <span className="text-xs font-semibold px-2.5 py-1 rounded-full bg-indigo-500/10 text-indigo-400 border border-indigo-500/20">
                      {project.category}
                    </span>
                    {project.featured && (
                      <span className="text-xs font-medium flex items-center text-amber-400 gap-1">
                        <Sparkles className="w-3.5 h-3.5" /> Featured
                      </span>
                    )}
                  </div>

                  <h3 className="text-xl font-bold group-hover:text-indigo-400 transition-colors">
                    {project.title}
                  </h3>

                  <p className={`mt-3 text-sm leading-relaxed ${darkMode ? 'text-slate-400' : 'text-slate-600'}`}>
                    {project.description}
                  </p>

                  <div className={`mt-4 px-3 py-2 rounded-lg text-xs font-mono flex items-center gap-2 ${darkMode ? 'bg-slate-950 text-indigo-300' : 'bg-indigo-50 text-indigo-700'}`}>
                    <CheckCircle2 className="w-3.5 h-3.5 text-indigo-500 flex-shrink-0" />
                    <span>{project.metrics}</span>
                  </div>

                  <div className="mt-5 flex flex-wrap gap-2">
                    {project.tags.map((tag, tIdx) => (
                      <span key={tIdx} className={`text-xs px-2.5 py-1 rounded-md font-mono ${darkMode ? 'bg-slate-800 text-slate-300' : 'bg-slate-100 text-slate-700'}`}>
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>

                <div className={`px-6 py-4 border-t flex items-center justify-between ${darkMode ? 'border-slate-800/80 bg-slate-950/40' : 'border-slate-100 bg-slate-50/50'}`}>
                  <button
                    onClick={() => setSelectedProject(project)}
                    className="text-xs font-semibold text-indigo-400 hover:text-indigo-300 flex items-center gap-1.5"
                  >
                    <Eye className="w-3.5 h-3.5" /> View Case Details
                  </button>

                  <div className="flex items-center space-x-3">
                    <a href={project.githubUrl} target="_blank" rel="noreferrer" className="p-1.5 rounded-lg hover:text-indigo-400 transition-colors" aria-label="Code Repository">
                      <Github className="w-4 h-4" />
                    </a>
                    <a href={project.liveUrl} target="_blank" rel="noreferrer" className="p-1.5 rounded-lg hover:text-indigo-400 transition-colors" aria-label="Live Demo">
                      <ExternalLink className="w-4 h-4" />
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* EXPERIENCE & TIMELINE SECTION */}
        <section id="experience" className="py-20 border-t border-slate-800/40">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <h2 className="text-xs uppercase tracking-widest font-semibold text-indigo-500">Career History</h2>
            <p className="mt-2 text-3xl font-bold tracking-tight">Professional Experience</p>
          </div>

          <div className="max-w-3xl mx-auto space-y-8 relative before:absolute before:inset-0 before:left-4 sm:before:left-1/2 before:w-0.5 before:-ml-px before:bg-slate-800">
            {PORTFOLIO_DATA.experience.map((exp, idx) => (
              <div key={idx} className="relative flex items-center justify-between md:justify-normal md:odd:flex-row-reverse group">
                <div className="flex items-center justify-center w-8 h-8 rounded-full border border-indigo-500 bg-slate-950 text-indigo-400 shadow shrink-0 md:order-1 md:group-odd:-translate-x-1/2 md:group-even:translate-x-1/2">
                  <Briefcase className="w-4 h-4" />
                </div>

                <div className={`w-[calc(100%-3rem)] md:w-[calc(50%-2.5rem)] p-6 rounded-2xl border ${darkMode ? 'bg-slate-900/70 border-slate-800' : 'bg-white border-slate-200 shadow-sm'}`}>
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-xs font-semibold text-indigo-400">{exp.period}</span>
                    <span className={`text-xs px-2 py-0.5 rounded ${darkMode ? 'bg-slate-800 text-slate-400' : 'bg-slate-100 text-slate-600'}`}>
                      {exp.type}
                    </span>
                  </div>
                  <h3 className="text-lg font-bold">{exp.role}</h3>
                  <h4 className={`text-sm font-medium mb-3 ${darkMode ? 'text-slate-400' : 'text-slate-600'}`}>{exp.company}</h4>
                  <p className={`text-xs leading-relaxed mb-4 ${darkMode ? 'text-slate-300' : 'text-slate-700'}`}>
                    {exp.description}
                  </p>

                  <ul className="space-y-1.5">
                    {exp.achievements.map((ach, aIdx) => (
                      <li key={aIdx} className="text-xs text-slate-400 flex items-start space-x-2">
                        <span className="text-indigo-400 mt-0.5">•</span>
                        <span className={darkMode ? 'text-slate-400' : 'text-slate-600'}>{ach}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* CONTACT SECTION (Clean Contact Card - No Form) */}
        <section id="contact" className="py-20 border-t border-slate-800/40">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <h2 className="text-xs uppercase tracking-widest font-semibold text-indigo-500">Get In Touch</h2>
            <p className="mt-2 text-3xl font-bold tracking-tight">Let's Work Together</p>
            <p className={`mt-3 text-sm ${darkMode ? 'text-slate-400' : 'text-slate-600'}`}>
              Have a project in mind or looking for an engineer? Reach out directly below.
            </p>
          </div>

          <div className="max-w-xl mx-auto">
            <div className={`p-8 rounded-2xl border text-center ${darkMode ? 'bg-slate-900/60 border-slate-800' : 'bg-white border-slate-200 shadow-sm'}`}>
              <div className="w-12 h-12 mx-auto mb-4 rounded-xl bg-indigo-500/10 text-indigo-400 flex items-center justify-center">
                <Mail className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-bold mb-2">Get in Touch Directly</h3>
              <p className={`text-sm mb-6 ${darkMode ? 'text-slate-400' : 'text-slate-600'}`}>
                I'm currently open to full-time roles and engineering projects. Feel free to drop me an email or connect via LinkedIn.
              </p>

              <div className="space-y-3 mb-8 text-sm">
                <div className="flex items-center justify-center space-x-2 text-slate-400">
                  <Mail className="w-4 h-4 text-indigo-400" />
                  <span>{PORTFOLIO_DATA.personal.email}</span>
                </div>
                <div className="flex items-center justify-center space-x-2 text-slate-400">
                  <Phone className="w-4 h-4 text-indigo-400" />
                  <span>{PORTFOLIO_DATA.personal.phone}</span>
                </div>
                <div className="flex items-center justify-center space-x-2 text-slate-400">
                  <MapPin className="w-4 h-4 text-indigo-400" />
                  <span>{PORTFOLIO_DATA.personal.location}</span>
                </div>
              </div>

              <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                <a
                  href={`mailto:${PORTFOLIO_DATA.personal.email}`}
                  className="w-full sm:w-auto px-6 py-3 text-sm font-semibold text-white bg-indigo-600 hover:bg-indigo-500 rounded-xl shadow-md shadow-indigo-500/25 transition-all"
                >
                  Send an Email
                </a>
                <a
                  href={PORTFOLIO_DATA.personal.linkedin}
                  target="_blank"
                  rel="noreferrer"
                  className={`w-full sm:w-auto px-6 py-3 text-sm font-semibold rounded-xl border transition-all ${darkMode ? 'bg-slate-900 border-slate-800 text-slate-200 hover:bg-slate-800' : 'bg-slate-50 border-slate-300 text-slate-700 hover:bg-slate-100'}`}
                >
                  Connect on LinkedIn
                </a>
              </div>
            </div>
          </div>
        </section>
      </main>

      {/* PROJECT DETAILS MODAL */}
      {selectedProject && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/80 backdrop-blur-sm">
          <div className={`w-full max-w-2xl rounded-2xl border p-6 sm:p-8 relative ${darkMode ? 'bg-slate-900 border-slate-800 text-slate-100' : 'bg-white border-slate-200 text-slate-900'}`}>
            <button 
              onClick={() => setSelectedProject(null)}
              className="absolute top-4 right-4 p-2 rounded-xl border hover:bg-slate-800/50 transition-colors"
              aria-label="Close modal"
            >
              <X className="w-5 h-5" />
            </button>

            <span className="text-xs font-semibold px-2.5 py-1 rounded-full bg-indigo-500/10 text-indigo-400 border border-indigo-500/20">
              {selectedProject.category}
            </span>

            <h3 className="text-2xl font-bold mt-4 mb-2">{selectedProject.title}</h3>
            <p className={`text-sm leading-relaxed mb-6 ${darkMode ? 'text-slate-300' : 'text-slate-600'}`}>
              {selectedProject.longDescription}
            </p>

            <div className={`p-4 rounded-xl mb-6 text-xs font-mono flex items-center gap-2 ${darkMode ? 'bg-slate-950 text-indigo-300' : 'bg-indigo-50 text-indigo-700'}`}>
              <CheckCircle2 className="w-4 h-4 text-indigo-500 shrink-0" />
              <span>{selectedProject.metrics}</span>
            </div>

            <div className="mb-8">
              <h4 className="text-xs font-semibold uppercase tracking-wider text-slate-400 mb-3">Technologies Used</h4>
              <div className="flex flex-wrap gap-2">
                {selectedProject.tags.map((tag, idx) => (
                  <span key={idx} className={`text-xs px-2.5 py-1 rounded-md font-mono ${darkMode ? 'bg-slate-800 text-slate-300' : 'bg-slate-100 text-slate-700'}`}>
                    {tag}
                  </span>
                ))}
              </div>
            </div>

            <div className="flex items-center space-x-4">
              <a
                href={selectedProject.githubUrl}
                target="_blank"
                rel="noreferrer"
                className="px-4 py-2.5 text-xs font-semibold rounded-xl bg-indigo-600 text-white hover:bg-indigo-500 flex items-center gap-2"
              >
                <Github className="w-4 h-4" /> View Repository
              </a>
              <a
                href={selectedProject.liveUrl}
                target="_blank"
                rel="noreferrer"
                className={`px-4 py-2.5 text-xs font-semibold rounded-xl border flex items-center gap-2 ${darkMode ? 'border-slate-800 hover:bg-slate-800' : 'border-slate-300 hover:bg-slate-100'}`}
              >
                <ExternalLink className="w-4 h-4" /> Live Demo / Profile
              </a>
            </div>
          </div>
        </div>
      )}

      {/* FOOTER */}
      <footer className={`py-8 border-t text-center text-xs ${darkMode ? 'bg-slate-950 border-slate-900 text-slate-500' : 'bg-white border-slate-200 text-slate-400'}`}>
        <p>© {new Date().getFullYear()} {PORTFOLIO_DATA.personal.name}. All rights reserved.</p>
      </footer>
    </div>
  );
}
