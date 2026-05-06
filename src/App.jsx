import React, { useState } from 'react';
import { 
  Layers, SmartphoneNfc, PenTool, CreditCard, 
  Mail, Phone, Globe, 
  Instagram, Linkedin, Twitter, Dribbble, 
  Download, Share2, QrCode, CheckCircle2,
  Sparkles, Plus, Minus
} from 'lucide-react';

export default function App() {
  const [expandedService, setExpandedService] = useState(null);

  const services = [
    { 
      id: 'graphic',
      title: "Graphic Design", 
      icon: PenTool, 
      clayColor: "bg-[#F4A261]",
      desc: "Striking graphics tailored for digital and print. We build aesthetics that convert audiences into loyal customers with pixel-perfect precision.",
      features: ["Social Media Assets", "UI/UX Prototyping", "Marketing Banners", "Vector Illustrations"],
      image: "https://images.unsplash.com/photo-1611162617474-5b21e879e113?auto=format&fit=crop&w=600&q=80"
    },
    { 
      id: 'smart-cards',
      title: "Smart Cards", 
      icon: SmartphoneNfc, 
      clayColor: "bg-[#7A9E7E]",
      desc: "Frictionless networking. Tap your custom-encoded NTAG215 card to any modern smartphone to instantly share your digital identity.",
      features: ["NTAG215 Embedded", "No App Required", "Cloud-Updateable", "Cryptographically Secure"],
      image: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?auto=format&fit=crop&w=600&q=80"
    },
    { 
      id: 'brand',
      title: "Brand Identity", 
      icon: Layers, 
      clayColor: "bg-[#E76F51]",
      desc: "Memorable, scalable branding that captures the core essence of your business. We craft cohesive visual languages.",
      features: ["Logo Conceptualization", "Typography Selection", "Color Palettes", "Brand Guidelines"],
      image: "https://images.unsplash.com/photo-1600132806370-bf17e65e942f?auto=format&fit=crop&w=600&q=80"
    },
    { 
      id: 'print',
      title: "Print Media", 
      icon: CreditCard, 
      clayColor: "bg-[#D4A373]",
      desc: "Classic, high-end paper business cards and collateral with luxury finishes that make a lasting physical impression.",
      features: ["Premium Cardstock", "Spot UV Textures", "Foil Stamping", "Embossed Finishes"],
      image: "https://images.unsplash.com/photo-1589829085413-56de8ae18c73?auto=format&fit=crop&w=600&q=80"
    }
  ];

  const toggleService = (id) => {
    setExpandedService(expandedService === id ? null : id);
  };

  return (
    <div className="min-h-[100dvh] bg-[#EBE3D5] text-[#2A4B3C] font-sans selection:bg-[#2A4B3C] selection:text-[#EBE3D5] overflow-x-hidden relative">
      
      {/* DYNAMIC 3D PARALLAX BACKGROUND */}
      <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden flex items-center justify-center">
        <div className="absolute font-black text-[#DACCB7] text-[25vw] sm:text-[15vw] leading-none whitespace-nowrap opacity-60 mix-blend-multiply tracking-tighter animate-breathe">
          DESIGN HUB
        </div>
        <div className="absolute top-[5%] left-[-15%] w-48 h-48 sm:w-64 sm:h-64 bg-[#7A9E7E] rounded-[40%_60%_70%_30%/40%_50%_60%_50%] clay-3d-blob opacity-80 animate-float-slow" />
        <div className="absolute top-[40%] right-[-15%] w-64 h-80 sm:w-80 sm:h-96 bg-[#E76F51] rounded-[60%_40%_30%_70%/60%_30%_70%_40%] clay-3d-blob opacity-70 animate-float-slower" />
        <div className="absolute bottom-[-10%] left-[5%] w-56 h-56 sm:w-72 sm:h-72 bg-[#F4A261] rounded-[50%_50%_40%_60%/40%_60%_50%_60%] clay-3d-blob blur-[8px] opacity-90 z-20 animate-float-fast" />
      </div>

      {/* FOREGROUND CONTENT */}
      <div className="relative z-10 w-full max-w-md mx-auto space-y-6 pb-12 pt-8 px-4 sm:px-6">
        
        {/* Profile Card Header */}
        <div className="clay-container p-6 sm:p-8 flex flex-col items-center text-center">
          <div className="relative group cursor-pointer mb-5">
            <div className="w-24 h-24 sm:w-32 sm:h-32 bg-[#EBE3D5] rounded-[2rem] sm:rounded-[2.5rem] flex items-center justify-center clay-avatar transition-transform duration-500 group-hover:scale-105">
              <Layers className="w-10 h-10 sm:w-14 sm:h-14 text-[#2A4B3C]" strokeWidth={2} />
            </div>
            <div className="absolute -bottom-2 -right-2 bg-[#F4A261] px-3 py-1 sm:px-4 sm:py-1.5 rounded-full text-[10px] sm:text-xs font-black text-[#2A4B3C] clay-badge transform rotate-12 group-hover:rotate-6 transition-transform">
              NFC
            </div>
          </div>
          <h1 className="text-3xl sm:text-4xl font-black tracking-tight mb-2 flex items-center justify-center gap-2">
            Design Hub
            <Sparkles className="w-5 h-5 sm:w-6 sm:h-6 text-[#E76F51] animate-pulse" />
          </h1>
          <p className="text-[#8A5A44] font-bold text-xs sm:text-sm uppercase tracking-widest mb-3">Creative Studio</p>
          <p className="text-[#2A4B3C] text-sm sm:text-base font-medium leading-relaxed max-w-[280px]">
            We mold physical &amp; digital identities into playful, unforgettable experiences.
          </p>
        </div>

        {/* Action Buttons */}
        <div className="flex gap-3 sm:gap-4">
          <button className="clay-btn flex-1 bg-[#7A9E7E] text-[#EBE3D5] py-3.5 sm:py-4 rounded-2xl sm:rounded-[1.5rem] flex items-center justify-center gap-2 font-black text-base sm:text-lg">
            <Download className="w-4 h-4 sm:w-5 sm:h-5" strokeWidth={3} /> Save
          </button>
          <button className="clay-btn flex-none bg-[#EBE3D5] text-[#2A4B3C] p-3.5 sm:p-4 rounded-2xl sm:rounded-[1.5rem] flex items-center justify-center">
            <QrCode className="w-5 h-5 sm:w-6 sm:h-6" strokeWidth={2.5} />
          </button>
          <button className="clay-btn flex-none bg-[#EBE3D5] text-[#2A4B3C] p-3.5 sm:p-4 rounded-2xl sm:rounded-[1.5rem] flex items-center justify-center">
            <Share2 className="w-5 h-5 sm:w-6 sm:h-6" strokeWidth={2.5} />
          </button>
        </div>

        {/* Contact Links */}
        <div className="clay-container p-3 sm:p-4 space-y-3">
          <a href="mailto:biswajeet.work01@gmail.com" className="flex items-center gap-3 sm:gap-4 bg-[#EBE3D5] p-2.5 sm:p-3 rounded-xl sm:rounded-2xl clay-inset-card group transition-all hover:bg-[#F4F1EB]">
            <div className="bg-[#EBE3D5] p-2.5 sm:p-3 rounded-lg sm:rounded-xl clay-icon">
              <Mail className="w-4 h-4 sm:w-5 sm:h-5 text-[#8A5A44] group-hover:text-[#E76F51] transition-colors" strokeWidth={2.5} />
            </div>
            <div className="flex-1 min-w-0">
              <p className="font-black text-xs sm:text-sm text-[#2A4B3C]">Email Us</p>
              <p className="text-[#8A5A44] text-[10px] sm:text-xs font-bold truncate">biswajeet.work01@gmail.com</p>
            </div>
          </a>
          <a href="tel:+919884321730" className="flex items-center gap-3 sm:gap-4 bg-[#EBE3D5] p-2.5 sm:p-3 rounded-xl sm:rounded-2xl clay-inset-card group transition-all hover:bg-[#F4F1EB]">
            <div className="bg-[#EBE3D5] p-2.5 sm:p-3 rounded-lg sm:rounded-xl clay-icon">
              <Phone className="w-4 h-4 sm:w-5 sm:h-5 text-[#8A5A44] group-hover:text-[#E76F51] transition-colors" strokeWidth={2.5} />
            </div>
            <div className="flex-1 min-w-0">
              <p className="font-black text-xs sm:text-sm text-[#2A4B3C]">Call Us</p>
              <p className="text-[#8A5A44] text-[10px] sm:text-xs font-bold truncate">+91 9884321730</p>
            </div>
          </a>
          <a href="https://designhub.studio" target="_blank" rel="noreferrer" className="flex items-center gap-3 sm:gap-4 bg-[#EBE3D5] p-2.5 sm:p-3 rounded-xl sm:rounded-2xl clay-inset-card group transition-all hover:bg-[#F4F1EB]">
            <div className="bg-[#EBE3D5] p-2.5 sm:p-3 rounded-lg sm:rounded-xl clay-icon">
              <Globe className="w-4 h-4 sm:w-5 sm:h-5 text-[#8A5A44] group-hover:text-[#E76F51] transition-colors" strokeWidth={2.5} />
            </div>
            <div className="flex-1 min-w-0">
              <p className="font-black text-xs sm:text-sm text-[#2A4B3C]">Website</p>
              <p className="text-[#8A5A44] text-[10px] sm:text-xs font-bold truncate">designhub.studio</p>
            </div>
          </a>
        </div>

        {/* Services */}
        <div className="relative">
          <h2 className="text-xl sm:text-2xl font-black mb-4 sm:mb-6 pl-1 flex items-center gap-2 text-[#2A4B3C]">
            Our Services <span className="text-[#E76F51]">★</span>
          </h2>
          <div className="space-y-4 sm:space-y-6">
            {services.map((service) => {
              const isExpanded = expandedService === service.id;
              return (
                <div 
                  key={service.id} 
                  className={`clay-container transition-all duration-500 overflow-hidden cursor-pointer ${isExpanded ? 'scale-[1.02]' : 'hover:scale-[1.01]'}`}
                  onClick={() => toggleService(service.id)}
                >
                  <div className="p-4 sm:p-5 flex items-center justify-between">
                    <div className="flex items-center gap-3 sm:gap-4">
                      <div className={`w-12 h-12 sm:w-14 sm:h-14 rounded-xl sm:rounded-2xl flex items-center justify-center clay-icon transition-transform duration-500 ${service.clayColor} ${isExpanded ? 'scale-110 rotate-6' : ''}`}>
                        <service.icon className={`w-5 h-5 sm:w-6 sm:h-6 ${isExpanded ? 'text-[#EBE3D5]' : 'text-[#2A4B3C]'}`} strokeWidth={2.5} />
                      </div>
                      <span className="font-black text-base sm:text-lg text-[#2A4B3C]">{service.title}</span>
                    </div>
                    <div className={`w-8 h-8 sm:w-10 sm:h-10 rounded-full flex items-center justify-center clay-btn bg-[#EBE3D5] transition-transform duration-500 ${isExpanded ? 'rotate-180' : ''}`}>
                      {isExpanded ? <Minus className="w-4 h-4 sm:w-5 sm:h-5 text-[#2A4B3C]" strokeWidth={3} /> : <Plus className="w-4 h-4 sm:w-5 sm:h-5 text-[#2A4B3C]" strokeWidth={3} />}
                    </div>
                  </div>
                  <div className={`grid transition-all duration-500 ease-[cubic-bezier(0.4,0,0.2,1)] ${isExpanded ? 'grid-rows-[1fr] opacity-100' : 'grid-rows-[0fr] opacity-0'}`}>
                    <div className="overflow-hidden">
                      <div className="p-4 sm:p-6 pt-0">
                        <div className="w-full h-[2px] bg-black/5 rounded-full mb-4 sm:mb-5"></div>
                        <div className="w-full h-32 sm:h-40 rounded-xl sm:rounded-2xl overflow-hidden mb-4 sm:mb-5 clay-inset-card border-[3px] border-[#EBE3D5]">
                          <img src={service.image} alt={service.title} className="w-full h-full object-cover transform hover:scale-105 transition-transform duration-700" />
                        </div>
                        <p className="text-[#8A5A44] font-bold text-xs sm:text-sm mb-4 sm:mb-5 leading-relaxed">{service.desc}</p>
                        <div className="space-y-2 sm:space-y-3 mb-5 sm:mb-6">
                          {service.features.map((feature, idx) => (
                            <div key={idx} className="flex items-center gap-2 sm:gap-3">
                              <CheckCircle2 className={`w-4 h-4 sm:w-5 sm:h-5 ${isExpanded ? 'text-[#E76F51]' : 'text-[#2A4B3C]'} flex-shrink-0`} strokeWidth={3} />
                              <span className="font-black text-xs sm:text-sm text-[#2A4B3C]">{feature}</span>
                            </div>
                          ))}
                        </div>
                        <button className="clay-btn w-full bg-[#2A4B3C] text-[#EBE3D5] py-3 sm:py-4 rounded-xl sm:rounded-2xl font-black text-base sm:text-lg">Request a Quote</button>
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Social Links */}
        <div className="clay-container p-4 sm:p-6 flex justify-between items-center mt-8 sm:mt-12">
          {[
            { icon: Instagram, href: "https://www.instagram.com/creativedigitalstudio_official?igsh=MWNqdHNjd2duOXUxbw==" },
            { icon: Linkedin, href: "#" },
            { icon: Twitter, href: "#" },
            { icon: Dribbble, href: "#" }
          ].map((social, idx) => (
            <a key={idx} href={social.href} target="_blank" rel="noreferrer" className="clay-btn w-12 h-12 sm:w-14 sm:h-14 rounded-xl sm:rounded-[1.2rem] flex items-center justify-center bg-[#EBE3D5] text-[#8A5A44] hover:text-[#E76F51] transition-colors">
              <social.icon className="w-5 h-5 sm:w-6 sm:h-6" strokeWidth={2.5} />
            </a>
          ))}
        </div>

      </div>

      {/* Global CSS */}
      <style dangerouslySetInnerHTML={{__html: `
        * { -webkit-tap-highlight-color: transparent; }
        @keyframes float-slow { 0%, 100% { transform: translateY(0) rotate(0deg); } 50% { transform: translateY(-20px) rotate(5deg); } }
        @keyframes float-slower { 0%, 100% { transform: translate(0,0) scale(1) rotate(0deg); } 50% { transform: translate(-15px,15px) scale(1.05) rotate(-5deg); } }
        @keyframes float-fast { 0%, 100% { transform: translateY(0) rotate(0deg); } 50% { transform: translateY(-30px) rotate(10deg); } }
        @keyframes breathe { 0%, 100% { transform: scale(1); opacity: 0.6; } 50% { transform: scale(1.02); opacity: 0.8; } }
        .animate-float-slow { animation: float-slow 8s ease-in-out infinite; }
        .animate-float-slower { animation: float-slower 12s ease-in-out infinite; }
        .animate-float-fast { animation: float-fast 6s ease-in-out infinite; }
        .animate-breathe { animation: breathe 10s ease-in-out infinite; }
        .clay-container { background: #EBE3D5; border-radius: 1.5rem; box-shadow: 12px 12px 24px rgba(42,75,60,0.1), -12px -12px 24px rgba(255,255,255,0.9), inset 2px 2px 5px rgba(255,255,255,0.8), inset -2px -2px 5px rgba(0,0,0,0.03); border: 1px solid rgba(255,255,255,0.4); }
        .clay-3d-blob { box-shadow: inset 20px 20px 40px rgba(255,255,255,0.6), inset -20px -20px 40px rgba(0,0,0,0.2), 25px 25px 50px rgba(42,75,60,0.15); }
        .clay-avatar { box-shadow: 10px 10px 20px rgba(42,75,60,0.15), -10px -10px 20px rgba(255,255,255,1), inset 4px 4px 10px rgba(255,255,255,1), inset -4px -4px 10px rgba(0,0,0,0.05); }
        .clay-btn { box-shadow: 6px 6px 12px rgba(42,75,60,0.15), -6px -6px 12px rgba(255,255,255,0.9), inset 2px 2px 4px rgba(255,255,255,0.4), inset -2px -2px 4px rgba(0,0,0,0.1); transition: all 0.2s cubic-bezier(0.4,0,0.2,1); }
        .clay-btn:active { transform: scale(0.95); box-shadow: inset 6px 6px 12px rgba(0,0,0,0.1), inset -6px -6px 12px rgba(255,255,255,0.9); }
        .clay-inset-card { box-shadow: inset 4px 4px 8px rgba(42,75,60,0.08), inset -4px -4px 8px rgba(255,255,255,0.9); }
        .clay-icon { box-shadow: 4px 4px 8px rgba(42,75,60,0.1), -4px -4px 8px rgba(255,255,255,0.8); }
        .clay-badge { box-shadow: 3px 3px 6px rgba(42,75,60,0.2), inset 2px 2px 4px rgba(255,255,255,0.5); }
        @media (min-width: 640px) { .clay-container { border-radius: 2rem; } }
      `}} />
    </div>
  );
}
