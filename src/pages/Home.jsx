import React, { useState, useEffect, useRef } from 'react';
import { aiKnowledgeBase } from '../data/data';
import { useTheme } from '../hooks/useTheme';
import ProgressBar from '../components/ProgressBar';
import BackToTop from '../components/BackToTop';
import Toast from '../components/Toast';
import Navbar from '../components/Navbar';
import Hero from '../components/Hero';
import About from '../components/About';
import Projects from '../components/Projects';
import Services from '../components/Services';
import Skills from '../components/Skills';
import Contact from '../components/Contact';
import Footer from '../components/Footer';
import AIChat from '../components/AIChat';

const Home = () => {
  const { theme, toggleTheme } = useTheme();
  
  // UI States
  const [scrolled, setScrolled] = useState(false);
  const [progress, setProgress] = useState(0);
  const [formStatus, setFormStatus] = useState({ message: '', type: '' });
  const [toasts, setToasts] = useState([]);
  const [activeSection, setActiveSection] = useState('home');
  const [showBackToTop, setShowBackToTop] = useState(false);
  
  // AI Chat States
  const [isChatOpen, setIsChatOpen] = useState(false);
  const [chatMessages, setChatMessages] = useState([
    { 
      id: 1, 
      type: 'bot', 
      message: "Assalamualaikum! I'm Muhammad Ali's AI Assistant. I know everything about his skills, experience, services, and portfolio! Ask me anything about Muhammad Ali - his work, expertise, or how he can help you with your project. What would you like to know today?",
      timestamp: new Date()
    }
  ]);
  const [chatInput, setChatInput] = useState('');
  const [isTyping, setIsTyping] = useState(false);
  const chatEndRef = useRef(null);
  
  const showToast = (message) => {
    const id = Date.now();
    setToasts(prev => [...prev, { id, message }]);
    setTimeout(() => setToasts(prev => prev.filter(t => t.id !== id)), 3000);
  };
  
  // AI Response Generator
  const generateAIResponse = (userMessage) => {
    const msg = userMessage.toLowerCase().trim();
    
    if (msg.match(/hi|hello|hey|salam|assalamualaikum/)) {
      return "Wa Alaikum Assalam! I'm Muhammad Ali's AI assistant. Ask me about his graphic design, video editing, map animation services, pricing, or experience!";
    }
    if (msg.match(/who are you|your name|about you/)) {
      return `I'm ${aiKnowledgeBase.name}, ${aiKnowledgeBase.title}. ${aiKnowledgeBase.tagline} ${aiKnowledgeBase.about.substring(0, 200)}...`;
    }
    if (msg.match(/experience|years|how long/)) {
      return `${aiKnowledgeBase.experience}. Completed ${aiKnowledgeBase.stats.projectsCompleted} projects with ${aiKnowledgeBase.stats.happyClients}+ happy clients.`;
    }
    if (msg.match(/skill|software|tools/)) {
      return `Software skills: ${aiKnowledgeBase.softwareSkills.join(', ')}`;
    }
    if (msg.match(/service|offer|what do you/)) {
      return `Services: ${aiKnowledgeBase.services.map(s => s.name).join(', ')}. Which one interests you?`;
    }
    if (msg.match(/graphic|design|logo|poster/)) {
      return `Graphic Design: ${aiKnowledgeBase.services[0].description}. Pricing: ${aiKnowledgeBase.pricing.graphicDesign}`;
    }
    if (msg.match(/video|edit|premiere/)) {
      return `Video Editing: ${aiKnowledgeBase.services[1].description}. Pricing: ${aiKnowledgeBase.pricing.videoEditing}`;
    }
    if (msg.match(/map|animation|route/)) {
      return `Map Animation: ${aiKnowledgeBase.services[2].description}. Pricing: ${aiKnowledgeBase.pricing.mapAnimation}`;
    }
    if (msg.match(/motion|graphic/)) {
      return `Motion Graphics: ${aiKnowledgeBase.services[3].description}. Pricing: ${aiKnowledgeBase.pricing.motionGraphics}`;
    }
    if (msg.match(/price|cost|rate|how much/)) {
      return `Pricing: Graphic Design ${aiKnowledgeBase.pricing.graphicDesign}, Video Editing ${aiKnowledgeBase.pricing.videoEditing}, Map Animation ${aiKnowledgeBase.pricing.mapAnimation}. Hourly: ${aiKnowledgeBase.pricing.hourlyRate}`;
    }
    if (msg.match(/contact|hire|reach|whatsapp|email/)) {
      return `Contact: Phone/WhatsApp: ${aiKnowledgeBase.contactInfo.phone}, Email: ${aiKnowledgeBase.contactInfo.email}`;
    }
    if (msg.match(/thank|thanks/)) {
      return `You're welcome! Anything else I can help you with?`;
    }
    if (msg.match(/bye|goodbye/)) {
      return `Goodbye! Feel free to return anytime. Have a great day!`;
    }
    return `I'm here to help! You can ask me about:\n- Services (Graphic Design, Video Editing, Map Animation)\n- Skills and software\n- Pricing and availability\n- Contact information\n- Experience and portfolio\n\nWhat would you like to know about Muhammad Ali?`;
  };
  
  const handleChatSubmit = async (e) => {
    e.preventDefault();
    if (!chatInput.trim()) return;
    
    const userMessage = { id: Date.now(), type: 'user', message: chatInput, timestamp: new Date() };
    setChatMessages(prev => [...prev, userMessage]);
    setChatInput('');
    setIsTyping(true);
    
    setTimeout(() => {
      const aiResponse = generateAIResponse(chatInput);
      setChatMessages(prev => [...prev, { id: Date.now() + 1, type: 'bot', message: aiResponse, timestamp: new Date() }]);
      setIsTyping(false);
    }, 500);
  };
  
  useEffect(() => {
    chatEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [chatMessages, isTyping]);
  
  useEffect(() => {
    const handleScroll = () => {
      const scrollPercent = (window.scrollY / (document.body.scrollHeight - window.innerHeight)) * 100;
      setProgress(scrollPercent);
      setScrolled(window.scrollY > 50);
      setShowBackToTop(window.scrollY > 300);
      
      const sections = ['home', 'about', 'projects', 'services', 'skills', 'contact'];
      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          if (rect.top <= 100 && rect.bottom >= 100) {
            setActiveSection(section);
            break;
          }
        }
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);
  
  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          const delay = entry.target.getAttribute('data-delay') || 0;
          setTimeout(() => entry.target.classList.add('animated'), delay);
        }
      });
    }, { threshold: 0.1 });
    document.querySelectorAll('.animate-scroll').forEach(el => observer.observe(el));
    return () => observer.disconnect();
  }, []);
  
  const scrollTo = (id) => {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' });
    setIsChatOpen(false);
  };
  
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };
  
  const handleDownloadCV = () => {
    const content = `MUHAMMAD ALI\n${aiKnowledgeBase.title}\n\n${aiKnowledgeBase.about}\n\nContact: ${aiKnowledgeBase.contactInfo.phone}, ${aiKnowledgeBase.contactInfo.email}\n\nSoftware Skills: ${aiKnowledgeBase.softwareSkills.join(', ')}\n\nServices: ${aiKnowledgeBase.services.map(s => s.name).join(', ')}`;
    const blob = new Blob([content], { type: 'text/plain' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = 'Muhammad_Ali_CV.txt';
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    URL.revokeObjectURL(url);
    showToast('CV downloaded!');
  };
  
  const handleContactSubmit = (e) => {
    e.preventDefault();
    setFormStatus({ message: 'Message sent successfully!', type: 'success' });
    e.target.reset();
    setTimeout(() => setFormStatus({ message: '', type: '' }), 5000);
    showToast('Message sent!');
  };
  
  return (
    <>
      <ProgressBar progress={progress} />
      <BackToTop showBackToTop={showBackToTop} onClick={scrollToTop} />
      <AIChat 
        isChatOpen={isChatOpen} 
        setIsChatOpen={setIsChatOpen}
        chatMessages={chatMessages}
        chatInput={chatInput}
        setChatInput={setChatInput}
        isTyping={isTyping}
        handleChatSubmit={handleChatSubmit}
        chatEndRef={chatEndRef}
      />
      <Navbar 
        scrolled={scrolled} 
        activeSection={activeSection} 
        scrollTo={scrollTo} 
        toggleTheme={toggleTheme} 
        theme={theme} 
      />
      <Hero 
        handleDownloadCV={handleDownloadCV} 
        scrollTo={scrollTo} 
        setIsChatOpen={setIsChatOpen} 
      />
      <About />
      <Projects />
      <Services />
      <Skills />
      <Contact 
        handleContactSubmit={handleContactSubmit} 
        formStatus={formStatus} 
      />
      <Footer scrollTo={scrollTo} />
      <Toast toasts={toasts} />
    </>
  );
};

export default Home;