"use client";
import { useEffect, useRef, useState } from "react";
import {
  Code,
  Rocket,
  Database,
  Brain,
  Cloud,
  Wrench,
  Globe,
  Smartphone,
  Bot,
  BarChart,
  Lock,
  Gamepad2,
  Github,
  Linkedin,
  Mail,
  Twitter,
  Briefcase,
  Book,
  User,
  Monitor,
  Server,
  Layers,
  Zap,
  Coffee,
  Terminal,
  Settings,
  Image,
  Video,
  Cpu,
  Shield,
} from "lucide-react";

export default function Home() {
  const cursorRef = useRef(null);
  const particlesRef = useRef(null);
  const matrixRef = useRef(null);
  const nameRef = useRef(null);
  const [currentTime, setCurrentTime] = useState(new Date());

  // Cập nhật thời gian mỗi giây
  useEffect(() => {
    const timer = setInterval(() => setCurrentTime(new Date()), 1000);
    return () => clearInterval(timer);
  }, []);

  // Hiệu ứng con trỏ nâng cao với đường dẫn
  useEffect(() => {
    const cursor = cursorRef.current;
    const links = document.querySelectorAll(
      "a, .skill-card, .project-card, .work-image"
    );
    let mouseX = 0,
      mouseY = 0;
    let cursorX = 0,
      cursorY = 0;

    const handleMouseMove = (e) => {
      mouseX = e.clientX;
      mouseY = e.clientY;
    };

    const updateCursor = () => {
      cursorX += (mouseX - cursorX) * 0.1;
      cursorY += (mouseY - cursorY) * 0.1;
      cursor.style.left = `${cursorX}px`;
      cursor.style.top = `${cursorY}px`;
      requestAnimationFrame(updateCursor);
    };

    document.addEventListener("mousemove", handleMouseMove);
    updateCursor();

    links.forEach((link) => {
      link.addEventListener("mouseenter", () => cursor.classList.add("hover"));
      link.addEventListener("mouseleave", () =>
        cursor.classList.remove("hover")
      );
    });

    return () => {
      document.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);

  // Hiệu ứng hạt nổi nâng cao với màu sắc
  useEffect(() => {
    const particles = particlesRef.current;
    const colors = ["#00ff88", "#00d4ff", "#ff0080", "#ffff00", "#ff8000"];

    for (let i = 0; i < 100; i++) {
      const particle = document.createElement("div");
      particle.className = "particle";
      particle.style.left = `${Math.random() * 100}%`;
      particle.style.background =
        colors[Math.floor(Math.random() * colors.length)];
      particle.style.animationDuration = `${Math.random() * 4 + 4}s`;
      particle.style.animationDelay = `${Math.random() * 3}s`;
      particle.style.width = `${Math.random() * 4 + 2}px`;
      particle.style.height = particle.style.width;
      particles.appendChild(particle);
    }
  }, []);

  // Hiệu ứng mưa ma trận nâng cao
  useEffect(() => {
    const matrix = matrixRef.current;
    const chars = "ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789@#$%^&*()";

    for (let i = 0; i < 30; i++) {
      const column = document.createElement("div");
      column.className = "matrix-column";
      column.style.left = `${Math.random() * 100}%`;
      column.style.animationDuration = `${Math.random() * 8 + 8}s`;
      column.style.animationDelay = `${Math.random() * 6}s`;
      column.style.fontSize = `${Math.random() * 8 + 10}px`;

      let text = "";
      for (let j = 0; j < 25; j++) {
        text += `${chars[Math.floor(Math.random() * chars.length)]}<br>`;
      }
      column.innerHTML = text;
      matrix.appendChild(column);
    }
  }, []);

  // Hiệu ứng lỗi trên tên với khoảng thời gian ngẫu nhiên
  useEffect(() => {
    const name = nameRef.current;
    const interval = setInterval(() => {
      if (Math.random() < 0.15) {
        name.classList.add("glitch");
        setTimeout(() => name.classList.remove("glitch"), 500);
      }
    }, 1500);
    return () => clearInterval(interval);
  }, []);

  const frontendSkills = [
    {
      icon: <Code className="w-12 h-12" />,
      name: "React.js",
      description: "Modern frontend framework với hooks và state management",
      progress: "95%",
    },
    {
      icon: <Rocket className="w-12 h-12" />,
      name: "Next.js",
      description: "Full-stack React framework với SSR/SSG",
      progress: "90%",
    },
    {
      icon: <Monitor className="w-12 h-12" />,
      name: "Angular",
      description: "Enterprise-grade frontend framework",
      progress: "85%",
    },
    {
      icon: <Code className="w-12 h-12" />,
      name: "TypeScript",
      description: "Type-safe JavaScript development",
      progress: "88%",
    },
    {
      icon: <Layers className="w-12 h-12" />,
      name: "Tailwind CSS",
      description: "Utility-first CSS framework",
      progress: "92%",
    },
    {
      icon: <Settings className="w-12 h-12" />,
      name: "Redux Toolkit",
      description: "State management cho React applications",
      progress: "87%",
    },
    {
      icon: <Zap className="w-12 h-12" />,
      name: "Framer Motion",
      description: "Animation library cho React",
      progress: "82%",
    },
    {
      icon: <Globe className="w-12 h-12" />,
      name: "GraphQL",
      description: "API query language và runtime",
      progress: "78%",
    },
  ];

  const backendSkills = [
    {
      icon: <Server className="w-12 h-12" />,
      name: "Node.js",
      description: "JavaScript runtime cho backend development",
      progress: "90%",
    },
    {
      icon: <Terminal className="w-12 h-12" />,
      name: "Express.js",
      description: "Minimalist web framework cho Node.js",
      progress: "88%",
    },
    {
      icon: <Shield className="w-12 h-12" />,
      name: "NestJS",
      description: "Progressive Node.js framework",
      progress: "85%",
    },
    {
      icon: <Cpu className="w-12 h-12" />,
      name: "Laravel",
      description: "PHP web framework với elegant syntax",
      progress: "83%",
    },
    {
      icon: <Database className="w-12 h-12" />,
      name: "PostgreSQL",
      description: "Advanced open-source relational database",
      progress: "87%",
    },
    {
      icon: <Database className="w-12 h-12" />,
      name: "MongoDB",
      description: "NoSQL document database",
      progress: "85%",
    },
    {
      icon: <Settings className="w-12 h-12" />,
      name: "Prisma ORM",
      description: "Next-generation database toolkit",
      progress: "80%",
    },
    {
      icon: <Cloud className="w-12 h-12" />,
      name: "AWS",
      description: "Cloud computing services",
      progress: "82%",
    },
  ];

  const projects = [
    {
      icon: <Globe className="w-16 h-16" />,
      title: "E-Commerce Platform",
      description:
        "Nền tảng thương mại điện tử với React, Next.js, PostgreSQL. Tích hợp Stripe, real-time analytics và AI recommendations.",
      tech: ["Next.js", "TypeScript", "Prisma", "PostgreSQL", "Tailwind"],
      linkText: "Xem Demo",
      href: "#",
      image: "🛒",
    },
    {
      icon: <Smartphone className="w-16 h-16" />,
      title: "Mobile Banking App",
      description:
        "Ứng dụng ngân hàng di động với React Native, biometric authentication, real-time transactions và offline support.",
      tech: ["React Native", "TypeScript", "Redux", "Node.js"],
      linkText: "Tải về",
      href: "#",
      image: "💳",
    },
    {
      icon: <Bot className="w-16 h-16" />,
      title: "AI-Powered CRM",
      description:
        "Hệ thống CRM thông minh với ML prediction, automated workflows và natural language processing.",
      tech: ["React", "Python", "TensorFlow", "FastAPI"],
      linkText: "Trải nghiệm",
      href: "#",
      image: "🤖",
    },
    {
      icon: <BarChart className="w-16 h-16" />,
      title: "Real-time Analytics Dashboard",
      description:
        "Dashboard phân tích dữ liệu real-time với WebSocket, D3.js visualizations và predictive analytics.",
      tech: ["Vue.js", "D3.js", "WebSocket", "InfluxDB"],
      linkText: "Khám phá",
      href: "#",
      image: "📊",
    },
    {
      icon: <Lock className="w-16 h-16" />,
      title: "Blockchain DeFi Platform",
      description:
        "Nền tảng DeFi với smart contracts, yield farming, staking rewards và cross-chain bridges.",
      tech: ["Solidity", "Web3.js", "React", "Hardhat"],
      linkText: "DApp",
      href: "#",
      image: "⛓️",
    },
    {
      icon: <Video className="w-16 h-16" />,
      title: "Video Streaming Platform",
      description:
        "Nền tảng streaming video với live chat, adaptive bitrate, CDN integration và AI content moderation.",
      tech: ["Next.js", "WebRTC", "FFmpeg", "Redis"],
      linkText: "Xem ngay",
      href: "#",
      image: "📹",
    },
  ];

  const workImages = [
    {
      id: 1,
      title: "Coding Session",
      emoji: "💻",
      description: "Deep focus development",
    },
    {
      id: 2,
      title: "Team Meeting",
      emoji: "👥",
      description: "Collaboration & planning",
    },
    {
      id: 3,
      title: "Code Review",
      emoji: "🔍",
      description: "Quality assurance",
    },
    {
      id: 4,
      title: "System Architecture",
      emoji: "🏗️",
      description: "Technical design",
    },
    {
      id: 5,
      title: "Testing Phase",
      emoji: "🧪",
      description: "Quality testing",
    },
    { id: 6, title: "Deployment", emoji: "🚀", description: "Going live" },
    {
      id: 7,
      title: "Problem Solving",
      emoji: "🎯",
      description: "Debug & optimize",
    },
    {
      id: 8,
      title: "Learning",
      emoji: "📚",
      description: "Continuous improvement",
    },
  ];

  const socialLinks = [
    { icon: <Github className="w-6 h-6" />, title: "GitHub", href: "#" },
    { icon: <Linkedin className="w-6 h-6" />, title: "LinkedIn", href: "#" },
    { icon: <Mail className="w-6 h-6" />, title: "Email", href: "#" },
    { icon: <Twitter className="w-6 h-6" />, title: "Twitter", href: "#" },
    { icon: <Briefcase className="w-6 h-6" />, title: "Portfolio", href: "#" },
    { icon: <Book className="w-6 h-6" />, title: "Blog", href: "#" },
  ];

  return (
    <>
      <div className="relative min-h-screen">
        {/* Hiệu ứng con trỏ */}
        <div ref={cursorRef} className="cursor"></div>

        {/* Hạt nổi */}
        <div ref={particlesRef} className="particles"></div>

        {/* Hiệu ứng ma trận */}
        <div ref={matrixRef} className="matrix"></div>

        {/* Đồng hồ kỹ thuật số */}
        <div className="fixed top-4 right-4 z-50 bg-black/20 backdrop-blur-md border border-green-400/30 rounded-lg px-4 py-2 text-green-400 font-mono">
          {currentTime.toLocaleTimeString()}
        </div>

        <div className="container max-w-7xl mx-auto px-5 relative z-10">
          {/* Phần đầu nâng cao */}
          <header className="header text-center py-16">
            <div className="profile-section mb-12">
              <div className="profile-image w-56 h-56 rounded-full mx-auto mb-8 relative overflow-hidden border-4 border-green-400 shadow-[0_0_60px_rgba(0,255,136,0.6)] bg-gradient-to-br from-[#1a1a2e] to-[#16213e] flex items-center justify-center text-8xl hover:shadow-[0_0_100px_rgba(0,255,136,0.8)] transition-all duration-500 animate-float">
                <User className="w-24 h-24 text-green-400" />
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-green-400/20 to-transparent rotate-45 animate-spin-slow"></div>
              </div>

              <h1
                ref={nameRef}
                className="name text-6xl font-bold bg-gradient-to-r from-green-400 via-cyan-400 to-purple-400 bg-clip-text text-transparent mb-4 animate-gradient"
              >
                Nguyễn Văn Sang
              </h1>

              <div className="typing-container relative overflow-hidden">
                <p className="title text-2xl text-gray-300 mb-8 animate-typewriter">
                  Full Stack Developer | AI Enthusiast | Tech Innovator
                </p>
              </div>

              <div className="stats-bar flex justify-center gap-8 text-center mt-8">
                <div className="stat bg-white/5 border border-green-400/30 rounded-lg p-4 backdrop-blur-sm">
                  <div className="text-2xl font-bold text-green-400">5+</div>
                  <div className="text-sm text-gray-400">Năm kinh nghiệm</div>
                </div>
                <div className="stat bg-white/5 border border-green-400/30 rounded-lg p-4 backdrop-blur-sm">
                  <div className="text-2xl font-bold text-cyan-400">50+</div>
                  <div className="text-sm text-gray-400">Dự án hoàn thành</div>
                </div>
                <div className="stat bg-white/5 border border-green-400/30 rounded-lg p-4 backdrop-blur-sm">
                  <div className="text-2xl font-bold text-purple-400">24/7</div>
                  <div className="text-sm text-gray-400">Sẵn sàng hỗ trợ</div>
                </div>
              </div>
            </div>
          </header>

          {/* Phần hình ảnh làm việc */}
          <section className="work-images-section my-20">
            <h2 className="section-title text-4xl mb-12 text-green-400 text-center">
              Hình Ảnh Làm Việc
            </h2>
            <div className="work-gallery grid grid-cols-2 md:grid-cols-4 gap-6">
              {workImages.map((image, index) => (
                <div
                  key={image.id}
                  className="work-image group relative bg-white/5 border border-green-400/30 rounded-xl overflow-hidden backdrop-blur-sm hover:border-green-400/60 transition-all duration-300 hover:scale-105 hover:rotate-1"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <div className="aspect-square flex items-center justify-center text-6xl bg-gradient-to-br from-[#1a1a2e] to-[#16213e] relative overflow-hidden">
                    <div className="absolute inset-0 bg-gradient-to-r from-green-400/10 to-cyan-400/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                    <span className="relative z-10 group-hover:scale-110 transition-transform duration-300">
                      {image.emoji}
                    </span>
                  </div>
                  <div className="p-4">
                    <h3 className="font-semibold text-green-400 mb-1">
                      {image.title}
                    </h3>
                    <p className="text-sm text-gray-400">{image.description}</p>
                  </div>
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                </div>
              ))}
            </div>
          </section>

          {/* Kỹ năng Front-End */}
          <section className="skills-section my-20">
            <h2 className="section-title text-4xl mb-12 text-green-400 text-center">
              Front-End Skills
            </h2>
            <div className="skills-grid grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {frontendSkills.map((skill, index) => (
                <div
                  key={index}
                  className="skill-card bg-white/5 border border-green-400/30 rounded-xl p-6 backdrop-blur-sm hover:border-green-400/60 transition-all duration-300 hover:scale-105 hover:-translate-y-2 group"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <div className="skill-icon text-green-400 mb-4 group-hover:scale-110 transition-transform duration-300">
                    {skill.icon}
                  </div>
                  <h3 className="skill-name text-lg font-bold mb-3 text-green-400">
                    {skill.name}
                  </h3>
                  <p className="text-sm text-gray-300 mb-4">
                    {skill.description}
                  </p>
                  <div className="skill-level w-full h-2 bg-white/10 rounded-full overflow-hidden">
                    <div
                      className="skill-progress h-full bg-gradient-to-r from-green-400 to-cyan-400 rounded-full transition-all duration-1000 hover:shadow-[0_0_10px_rgba(0,255,136,0.5)]"
                      style={{ width: skill.progress }}
                    ></div>
                  </div>
                  <div className="text-xs text-green-400 mt-2 text-right">
                    {skill.progress}
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* Kỹ năng Back-End */}
          <section className="skills-section my-20">
            <h2 className="section-title text-4xl mb-12 text-cyan-400 text-center">
              Back-End Skills
            </h2>
            <div className="skills-grid grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {backendSkills.map((skill, index) => (
                <div
                  key={index}
                  className="skill-card bg-white/5 border border-cyan-400/30 rounded-xl p-6 backdrop-blur-sm hover:border-cyan-400/60 transition-all duration-300 hover:scale-105 hover:-translate-y-2 group"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <div className="skill-icon text-cyan-400 mb-4 group-hover:scale-110 transition-transform duration-300">
                    {skill.icon}
                  </div>
                  <h3 className="skill-name text-lg font-bold mb-3 text-cyan-400">
                    {skill.name}
                  </h3>
                  <p className="text-sm text-gray-300 mb-4">
                    {skill.description}
                  </p>
                  <div className="skill-level w-full h-2 bg-white/10 rounded-full overflow-hidden">
                    <div
                      className="skill-progress h-full bg-gradient-to-r from-cyan-400 to-purple-400 rounded-full transition-all duration-1000 hover:shadow-[0_0_10px_rgba(0,212,255,0.5)]"
                      style={{ width: skill.progress }}
                    ></div>
                  </div>
                  <div className="text-xs text-cyan-400 mt-2 text-right">
                    {skill.progress}
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* Phần dự án */}
          <section className="projects-section my-20">
            <h2 className="section-title text-4xl mb-12 text-green-400 text-center">
              Dự Án Nổi Bật
            </h2>
            <div className="projects-grid grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {projects.map((project, index) => (
                <div
                  key={index}
                  className="project-card group bg-white/5 border border-green-400/30 rounded-xl overflow-hidden backdrop-blur-sm hover:border-green-400/60 transition-all duration-500 hover:scale-105 hover:-translate-y-4"
                  style={{ animationDelay: `${index * 0.2}s` }}
                >
                  <div className="project-header h-48 bg-gradient-to-br from-[#1a1a2e] via-[#16213e] to-[#0f3460] relative overflow-hidden flex items-center justify-center">
                    <div className="absolute inset-0 bg-gradient-to-r from-green-400/10 to-cyan-400/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                    <div className="text-6xl mb-4 group-hover:scale-110 transition-transform duration-300">
                      {project.image}
                    </div>
                    <div className="absolute bottom-4 left-4 text-green-400 group-hover:scale-110 transition-transform duration-300">
                      {project.icon}
                    </div>
                  </div>

                  <div className="project-content p-6">
                    <h3 className="text-xl font-bold mb-3 text-green-400 group-hover:text-cyan-400 transition-colors duration-300">
                      {project.title}
                    </h3>
                    <p className="text-gray-300 mb-4 leading-relaxed">
                      {project.description}
                    </p>

                    <div className="tech-stack flex flex-wrap gap-2 mb-6">
                      {project.tech.map((tech, techIndex) => (
                        <span
                          key={techIndex}
                          className="px-3 py-1 bg-green-400/20 text-green-400 rounded-full text-xs border border-green-400/30 hover:bg-green-400/30 transition-colors duration-300"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>

                    <a
                      href={project.href}
                      className="project-link inline-block px-6 py-3 bg-gradient-to-r from-green-400 to-cyan-400 text-black rounded-full font-bold hover:from-cyan-400 hover:to-purple-400 transition-all duration-300 hover:scale-105 hover:shadow-[0_10px_20px_rgba(0,255,136,0.4)] transform group-hover:-translate-y-1"
                    >
                      {project.linkText}
                    </a>
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* Phần liên hệ */}
          <section className="contact-section my-20 text-center py-16 px-10 bg-white/5 rounded-3xl backdrop-blur-lg border border-green-400/30 relative overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-r from-green-400/5 via-cyan-400/5 to-purple-400/5 animate-gradient-shift"></div>
            <div className="relative z-10">
              <h2 className="section-title text-4xl mb-6 text-green-400">
                Kết Nối & Hợp Tác
              </h2>
              <p className="text-lg mb-8 text-gray-300">
                🚀 Sẵn sàng biến ý tưởng thành hiện thực cùng nhau!
              </p>

              <div className="contact-info grid grid-cols-1 md:grid-cols-3 gap-6 mb-10">
                <div className="contact-item bg-white/5 border border-green-400/30 rounded-lg p-4 backdrop-blur-sm hover:border-green-400/60 transition-all duration-300">
                  <Mail className="w-8 h-8 text-green-400 mx-auto mb-2" />
                  <div className="font-semibold">Email</div>
                  <div className="text-sm text-gray-400">
                    sang@developer.com
                  </div>
                </div>
                <div className="contact-item bg-white/5 border border-cyan-400/30 rounded-lg p-4 backdrop-blur-sm hover:border-cyan-400/60 transition-all duration-300">
                  <Coffee className="w-8 h-8 text-cyan-400 mx-auto mb-2" />
                  <div className="font-semibold">Coffee Chat</div>
                  <div className="text-sm text-gray-400">Always welcome!</div>
                </div>
                <div className="contact-item bg-white/5 border border-purple-400/30 rounded-lg p-4 backdrop-blur-sm hover:border-purple-400/60 transition-all duration-300">
                  <Zap className="w-8 h-8 text-purple-400 mx-auto mb-2" />
                  <div className="font-semibold">Response Time</div>
                  <div className="text-sm text-gray-400">&lt; 24 hours</div>
                </div>
              </div>

              <div className="social-links flex justify-center gap-6 flex-wrap">
                {socialLinks.map((link, index) => (
                  <a
                    key={index}
                    href={link.href}
                    className="social-link group relative p-4 bg-white/10 rounded-full text-green-400 border-2 border-green-400/50 hover:border-green-400 transition-all duration-300 hover:scale-110 hover:-translate-y-2"
                    title={link.title}
                    style={{ animationDelay: `${index * 0.1}s` }}
                  >
                    <div className="relative z-10 group-hover:scale-110 transition-transform duration-300">
                      {link.icon}
                    </div>
                    <div className="absolute inset-0 bg-gradient-to-r from-green-400/20 to-cyan-400/20 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  </a>
                ))}
              </div>
            </div>
          </section>
        </div>
      </div>

      <style jsx global>{`
        @import url("https://fonts.googleapis.com/css2?family=JetBrains+Mono:wght@400;700&display=swap");

        html {
          font-family: "JetBrains Mono", monospace;
          background: linear-gradient(
            135deg,
            #0c0c0c,
            #1a1a2e,
            #16213e,
            #0f3460
          );
          background-size: 400% 400%;
          animation: gradient-bg 15s ease infinite;
          color: #fff;
          overflow-x: hidden;
          cursor: none;
          scroll-behavior: smooth;
        }

        @keyframes gradient-bg {
          0% {
            background-position: 0% 50%;
          }
          50% {
            background-position: 100% 50%;
          }
          100% {
            background-position: 0% 50%;
          }
        }

        .cursor {
          position: fixed;
          width: 20px;
          height: 20px;
          border: 2px solid #00ff88;
          border-radius: 50%;
          pointer-events: none;
          z-index: 9999;
          transition: all 0.1s ease;
          background: radial-gradient(
            circle,
            rgba(0, 255, 136, 0.1) 0%,
            transparent 70%
          );
          box-shadow: 0 0 20px rgba(0, 255, 136, 0.3);
        }

        .cursor.hover {
          transform: scale(2.5);
          background: radial-gradient(
            circle,
            rgba(0, 255, 136, 0.3) 0%,
            rgba(0, 212, 255, 0.2) 70%
          );
          border-color: #00d4ff;
          box-shadow: 0 0 40px rgba(0, 255, 136, 0.6);
        }

        .particles {
          position: fixed;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          pointer-events: none;
          z-index: 1;
        }

        .particle {
          position: absolute;
          border-radius: 50%;
          animation: float 8s infinite linear;
          opacity: 0;
          box-shadow: 0 0 10px currentColor;
        }

        @keyframes float {
          0% {
            opacity: 0;
            transform: translateY(100vh) translateX(0) rotate(0deg);
          }
          10% {
            opacity: 1;
          }
          90% {
            opacity: 1;
          }
          100% {
            opacity: 0;
            transform: translateY(-10vh) translateX(200px) rotate(360deg);
          }
        }

        .matrix {
          position: fixed;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          pointer-events: none;
          z-index: 0;
          opacity: 0.08;
        }

        .matrix-column {
          position: absolute;
          top: -200px;
          font-family: "JetBrains Mono", monospace;
          color: #00ff88;
          animation: matrix-fall linear infinite;
          text-shadow: 0 0 5px currentColor;
        }

        @keyframes matrix-fall {
          to {
            transform: translateY(calc(100vh + 200px));
          }
        }

        @keyframes float {
          0%,
          100% {
            transform: translateY(0px);
          }
          50% {
            transform: translateY(-20px);
          }
        }

        @keyframes gradient {
          0% {
            background-position: 0% 50%;
          }
          50% {
            background-position: 100% 50%;
          }
          100% {
            background-position: 0% 50%;
          }
        }

        @keyframes gradient-shift {
          0% {
            transform: translateX(-100%);
          }
          100% {
            transform: translateX(100%);
          }
        }

        @keyframes spin-slow {
          from {
            transform: rotate(0deg);
          }
          to {
            transform: rotate(360deg);
          }
        }

        @keyframes typewriter {
          from {
            width: 0;
          }
          to {
            width: 100%;
          }
        }

        @keyframes glitch {
          0%,
          100% {
            transform: translate(0);
          }
          10% {
            transform: translate(-3px, 2px);
          }
          20% {
            transform: translate(-3px, -2px);
          }
          30% {
            transform: translate(3px, 2px);
          }
          40% {
            transform: translate(-3px, -2px);
          }
          50% {
            transform: translate(2px, -3px);
          }
          60% {
            transform: translate(-2px, 3px);
          }
          70% {
            transform: translate(-3px, -3px);
          }
          80% {
            transform: translate(3px, 3px);
          }
          90% {
            transform: translate(-2px, -3px);
          }
        }

        .animate-float {
          animation: float 6s ease-in-out infinite;
        }

        .animate-gradient {
          background-size: 200% 200%;
          animation: gradient 3s ease infinite;
        }

        .animate-typewriter {
          overflow: hidden;
          border-right: 2px solid #00ff88;
          white-space: nowrap;
          margin: 0 auto;
          animation: typewriter 4s steps(40, end),
            blink-caret 0.75s step-end infinite;
        }

        .animate-spin-slow {
          animation: spin-slow 20s linear infinite;
        }

        .animate-gradient-shift {
          animation: gradient-shift 8s ease-in-out infinite;
        }

        @keyframes blink-caret {
          from,
          to {
            border-color: transparent;
          }
          50% {
            border-color: #00ff88;
          }
        }

        .skill-card {
          animation: slideInUp 0.6s ease forwards;
          opacity: 0;
          transform: translateY(50px);
        }

        .project-card {
          animation: slideInUp 0.8s ease forwards;
          opacity: 0;
          transform: translateY(50px);
        }

        .work-image {
          animation: slideInUp 0.4s ease forwards;
          opacity: 0;
          transform: translateY(30px);
        }

        @keyframes slideInUp {
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        .section-title {
          position: relative;
          display: inline-block;
        }

        .section-title::after {
          content: "";
          position: absolute;
          bottom: -10px;
          left: 50%;
          transform: translateX(-50%);
          width: 0;
          height: 3px;
          background: linear-gradient(90deg, #00ff88, #00d4ff);
          animation: expandLine 1s ease forwards;
        }

        @keyframes expandLine {
          to {
            width: 100px;
          }
        }

        .tech-stack span {
          transition: all 0.3s ease;
          cursor: pointer;
        }

        .tech-stack span:hover {
          transform: translateY(-2px);
          box-shadow: 0 4px 8px rgba(0, 255, 136, 0.3);
        }

        /* Styling thanh cuộn */
        ::-webkit-scrollbar {
          width: 8px;
        }

        ::-webkit-scrollbar-track {
          background: rgba(26, 26, 46, 0.5);
        }

        ::-webkit-scrollbar-thumb {
          background: linear-gradient(180deg, #00ff88, #00d4ff);
          border-radius: 4px;
        }

        ::-webkit-scrollbar-thumb:hover {
          background: linear-gradient(180deg, #00d4ff, #00ff88);
        }

        /* Responsive trên thiết bị di động */
        @media (max-width: 768px) {
          .name {
            font-size: 3rem;
          }
          .title {
            font-size: 1.2rem;
          }
          .profile-image {
            width: 180px;
            height: 180px;
          }
          .skills-grid {
            grid-template-columns: 1fr;
          }
          .projects-grid {
            grid-template-columns: 1fr;
          }
          .work-gallery {
            grid-template-columns: 1fr 1fr;
          }
          .social-links {
            gap: 16px;
          }
          .stats-bar {
            flex-direction: column;
            gap: 16px;
          }
          .contact-info {
            grid-template-columns: 1fr;
          }
          .cursor {
            display: none;
          }
          html {
            cursor: default;
          }
        }

        @media (max-width: 480px) {
          .name {
            font-size: 2.5rem;
          }
          .section-title {
            font-size: 2.5rem;
          }
          .work-gallery {
            grid-template-columns: 1fr;
          }
          .skills-grid {
            grid-template-columns: 1fr;
          }
          .projects-grid {
            grid-template-columns: 1fr;
          }
        }

        /* Hiệu ứng tải */
        @keyframes pulse {
          0%,
          100% {
            box-shadow: 0 0 30px rgba(0, 255, 136, 0.4);
          }
          50% {
            box-shadow: 0 0 60px rgba(0, 255, 136, 0.8);
          }
        }

        .profile-image {
          animation: pulse 3s ease-in-out infinite;
        }

        /* Hiệu ứng hover nâng cao */
        .skill-card:hover {
          box-shadow: 0 20px 40px rgba(0, 255, 136, 0.2);
        }

        .project-card:hover {
          box-shadow: 0 25px 50px rgba(0, 255, 136, 0.3);
        }

        .work-image:hover {
          box-shadow: 0 15px 30px rgba(0, 255, 136, 0.25);
        }

        /* Hiệu ứng đường dẫn hạt */
        .cursor::before {
          content: "";
          position: absolute;
          top: 50%;
          left: 50%;
          transform: translate(-50%, -50%);
          width: 6px;
          height: 6px;
          background: #00ff88;
          border-radius: 50%;
          opacity: 0.8;
        }

        /* Chọn văn bản */
        ::selection {
          background: rgba(0, 255, 136, 0.3);
          color: white;
        }

        /* Kiểu focus */
        a:focus,
        button:focus {
          outline: 2px solid #00ff88;
          outline-offset: 2px;
        }
      `}</style>
    </>
  );
}
