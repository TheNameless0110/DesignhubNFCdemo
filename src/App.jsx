import React, { useState } from 'react';
import { 
  Layers, SmartphoneNfc, PenTool, Contact, 
  Mail, Phone, Globe, Camera,
  Download, Share2, CheckCircle2,
  Sparkles, Plus, Minus, X, Palette, ChevronLeft, ChevronRight
} from 'lucide-react';

// --- THEME ENGINE ---
const THEMES = {
  earth: {
    '--bg': '#EBE3D5',
    '--bg-hover': '#F4F1EB',
    '--text': '#2A4B3C',
    '--text-muted': '#8A5A44',
    '--accent-1': '#F4A261', // Orange
    '--accent-2': '#7A9E7E', // Green
    '--accent-3': '#E76F51', // Terracotta
    '--accent-4': '#D4A373', // Sand
    '--shadow-dark': 'rgba(42, 75, 60, 0.15)',
    '--shadow-light': 'rgba(255, 255, 255, 0.9)',
    '--border-light': 'rgba(255, 255, 255, 0.4)',
  },
  dark: {
    '--bg': '#1C1C1E',
    '--bg-hover': '#2C2C2E',
    '--text': '#F2F2F7',
    '--text-muted': '#AEAEB2',
    '--accent-1': '#FF375F', // Pink/Red
    '--accent-2': '#32ADE6', // Blue
    '--accent-3': '#FFD60A', // Yellow
    '--accent-4': '#BF5AF2', // Purple
    '--shadow-dark': 'rgba(0, 0, 0, 0.5)',
    '--shadow-light': 'rgba(255, 255, 255, 0.05)',
    '--border-light': 'rgba(255, 255, 255, 0.05)',
  },
  mono: {
    '--bg': '#F3F4F6',
    '--bg-hover': '#E5E7EB',
    '--text': '#111827',
    '--text-muted': '#6B7280',
    '--accent-1': '#9CA3AF',
    '--accent-2': '#6B7280',
    '--accent-3': '#4B5563',
    '--accent-4': '#374151',
    '--shadow-dark': 'rgba(0, 0, 0, 0.1)',
    '--shadow-light': 'rgba(255, 255, 255, 1)',
    '--border-light': 'rgba(255, 255, 255, 0.6)',
  }
};

// --- COMPONENT: Design Hub Vector Logo ---
const DesignHubLogo = ({ className }) => (
  <svg viewBox="0 0 130 100" fill="currentColor" xmlns="http://www.w3.org/2000/svg" className={className}>
    {/* 'D' Shape Outer and Inner Path */}
    <path fillRule="evenodd" clipRule="evenodd" d="M 0 0 H 50 C 75 0 80 15 80 30 V 70 C 80 85 75 100 50 100 H 0 V 0 Z M 24 24 V 76 H 48 C 56 76 56 68 56 60 V 40 C 56 32 56 24 48 24 H 24 Z" />
    {/* Inner Triangle (Play Button) */}
    <polygon points="32,36 32,64 48,50" />
    {/* Connecting Horizontal Bar */}
    <rect x="75" y="40" width="30" height="20" />
    {/* 'H' Right Stem with Angled Cuts */}
    <polygon points="105,0 129,24 129,100 105,76" />
  </svg>
);

// --- COMPONENT: Image Carousel ---
const ImageCarousel = ({ images, title }) => {
  const [idx, setIdx] = useState(0);

  const prev = (e) => {
    e.stopPropagation();
    setIdx((i) => (i - 1 + images.length) % images.length);
  };
  
  const next = (e) => {
    e.stopPropagation();
    setIdx((i) => (i + 1) % images.length);
  };

  return (
    <div className="relative w-full h-40 sm:h-48 rounded-xl sm:rounded-2xl overflow-hidden mb-4 sm:mb-5 clay-inset-card border-[3px] border-[var(--bg)] group">
      <img 
        src={images[idx]} 
        alt={`${title} portfolio piece ${idx + 1}`} 
        loading="lazy" 
        className="w-full h-full object-cover transform transition-transform duration-700 group-hover:scale-105" 
      />
      
      {images.length > 1 && (
        <>
          <button 
            aria-label="Previous image"
            onClick={prev}
            className="absolute left-2 top-1/2 -translate-y-1/2 w-8 h-8 rounded-full bg-[var(--bg)] text-[var(--text)] flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity clay-btn focus:opacity-100"
          >
            <ChevronLeft className="w-4 h-4" />
          </button>
          <button 
            aria-label="Next image"
            onClick={next}
            className="absolute right-2 top-1/2 -translate-y-1/2 w-8 h-8 rounded-full bg-[var(--bg)] text-[var(--text)] flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity clay-btn focus:opacity-100"
          >
            <ChevronRight className="w-4 h-4" />
          </button>
          <div className="absolute bottom-2 left-1/2 -translate-x-1/2 flex gap-1.5 z-10">
            {images.map((_, i) => (
              <div key={i} className={`w-1.5 h-1.5 rounded-full transition-all ${i === idx ? 'bg-[var(--text)] scale-125' : 'bg-[var(--bg)] opacity-60'}`} />
            ))}
          </div>
        </>
      )}
    </div>
  );
};

export default function App() {
  const [expandedService, setExpandedService] = useState(null);
  const [quoteService, setQuoteService] = useState(null);
  const [toastMsg, setToastMsg] = useState('');
  
  // Theme State
  const themeKeys = Object.keys(THEMES);
  const [themeIdx, setThemeIdx] = useState(0);
  const currentThemeName = themeKeys[themeIdx];
  const themeStyles = THEMES[currentThemeName];

  const services = [
    { 
      id: 'graphic',
      title: "Graphic Design", 
      icon: PenTool, 
      clayColor: "bg-[var(--accent-1)]",
      desc: "Striking graphics tailored for digital and print. We build aesthetics that convert audiences into loyal customers with pixel-perfect precision.",
      features: ["Social Media Assets", "UI/UX Prototyping", "Marketing Banners"],
      images: [
        "https://images.unsplash.com/photo-1626785779198-d1a2981f337d?auto=format&fit=crop&w=600&q=80"
      ]
    },
    { 
      id: 'smart-cards',
      title: "Smart Cards", 
      icon: SmartphoneNfc, 
      clayColor: "bg-[var(--accent-2)]",
      desc: "Frictionless networking. Tap your custom-encoded NTAG215 card to any modern smartphone to instantly share your digital identity.",
      features: ["NTAG215 Embedded", "No App Required", "Cloud-Updateable"],
      images: [
        "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?auto=format&fit=crop&w=600&q=80"
      ]
    },
    { 
      id: 'print',
      title: "Print Media", 
      icon: Contact, 
      clayColor: "bg-[var(--accent-4)]",
      desc: "Classic, high-end paper business cards and collateral with luxury finishes that make a lasting physical impression.",
      features: ["Premium Cardstock", "Spot UV Textures", "Foil Stamping"],
      images: [
        "https://images.unsplash.com/photo-1589829085413-56de8ae18c73?auto=format&fit=crop&w=600&q=80"
      ]
    }
  ];

  const toggleService = (id) => {
    setExpandedService(expandedService === id ? null : id);
  };

  const cycleTheme = () => {
    setThemeIdx((prev) => (prev + 1) % themeKeys.length);
  };

  // --- Feature: Enhanced Save Contact (vCard with Base64 Logo) ---
  const handleSaveContact = async () => {
    // Tiny placeholder Base64 PNG (Teal Dot) to represent a company logo. 
    // Replace this string with your actual logo's Base64 encoding.
    const base64Logo = "iVBORw0KGgoAAAANSUhEUgAAAAUAAAAFCAYAAACNbyblAAAAHElEQVQI12P4//8/w38GIAXDIBKE0DHxgljNBAAO9TXL0Y4OHwAAAABJRU5ErkJggg==";
    
    const vcard = `BEGIN:VCARD
VERSION:3.0
FN:Design Hub
ORG:Creative Studio
TEL;TYPE=WORK,VOICE:+919884321730
EMAIL;TYPE=WORK:biswajeet.work01@gmail.com
URL:https://designhub.studio
PHOTO;ENCODING=b;TYPE=PNG:${base64Logo}
END:VCARD`;

    const file = new File([vcard], "Design_Hub.vcf", { type: "text/vcard" });

    // 1. Try Native Mobile Share API (Best for iOS & Android)
    // This opens the native OS sheet which has a direct "Add to Contacts" button.
    if (navigator.canShare && navigator.canShare({ files: [file] })) {
      try {
        await navigator.share({
          files: [file],
          title: 'Design Hub Contact',
        });
        return;
      } catch (err) {
        console.log("Share API failed or was cancelled.", err);
      }
    }

    // 2. Android Intent Fallback (Directly opens Google Contacts app)
    const isAndroid = /Android/i.test(navigator.userAgent);
    if (isAndroid) {
      const intentUrl = `intent:#Intent;action=android.intent.action.INSERT;type=vnd.android.cursor.dir/contact;S.name=Design%20Hub;S.company=Creative%20Studio;S.phone=%2B919884321730;S.email=biswajeet.work01%40gmail.com;S.notes=Website%3A%20https%3A%2F%2Fdesignhub.studio;end;`;
      const a = document.createElement('a');
      a.href = intentUrl;
      document.body.appendChild(a);
      a.click();
      document.body.removeChild(a);
      showToast("Opening Contacts...");
      return;
    }

    // 3. Universal Fallback: Standard Blob Download
    const url = URL.createObjectURL(file);
    const link = document.createElement('a');
    link.href = url;
    link.download = 'Design_Hub.vcf';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    setTimeout(() => URL.revokeObjectURL(url), 1000);
    showToast("Contact downloaded!");
  };

  // --- Feature: Share Profile ---
  const handleShare = async () => {
    const shareData = {
      title: 'Design Hub',
      text: 'Check out Design Hub - Creative Studio!',
      url: window.location.href
    };

    if (navigator.share) {
      try {
        await navigator.share(shareData);
      } catch (err) {
        console.log('Error sharing:', err);
      }
    } else {
      const textArea = document.createElement("textarea");
      textArea.value = window.location.href;
      document.body.appendChild(textArea);
      textArea.select();
      try {
        document.execCommand('copy');
        showToast("Link copied to clipboard!");
      } catch (err) {
        showToast("Failed to copy link");
      }
      document.body.removeChild(textArea);
    }
  };

  const handleQuoteSubmit = (e) => {
    e.preventDefault();
    // Here you would integrate Formspree/EmailJS logic
    setQuoteService(null);
    showToast("Quote request sent! We'll be in touch.");
  };

  const showToast = (message) => {
    setToastMsg(message);
    setTimeout(() => setToastMsg(''), 3000);
  };

  return (
    <div style={themeStyles} className="min-h-[100dvh] bg-[var(--bg)] text-[var(--text)] font-sans selection:bg-[var(--text)] selection:text-[var(--bg)] overflow-x-hidden relative transition-colors duration-500">
      
      {/* Theme Toggle Button */}
      <button 
        aria-label={`Switch Theme. Current: ${currentThemeName}`}
        onClick={cycleTheme}
        className="fixed top-4 right-4 z-50 p-3 bg-[var(--bg)] text-[var(--text)] rounded-full clay-btn focus:outline-none focus:ring-2 focus:ring-[var(--accent-1)]"
      >
        <Palette className="w-5 h-5" />
      </button>

      {/* --- DYNAMIC 3D PARALLAX BACKGROUND --- */}
      <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden flex items-center justify-center transition-colors duration-500">
        <div className="absolute font-black text-[var(--text)] text-[25vw] sm:text-[15vw] leading-none whitespace-nowrap opacity-5 mix-blend-overlay tracking-tighter animate-breathe">
          DESIGN HUB
        </div>
        <div className="absolute top-[5%] left-[-15%] w-48 h-48 sm:w-64 sm:h-64 bg-[var(--accent-2)] rounded-[40%_60%_70%_30%/40%_50%_60%_50%] clay-3d-blob opacity-80 animate-float-slow" />
        <div className="absolute top-[40%] right-[-15%] w-64 h-80 sm:w-80 sm:h-96 bg-[var(--accent-3)] rounded-[60%_40%_30%_70%/60%_30%_70%_40%] clay-3d-blob opacity-70 animate-float-slower" />
        <div className="absolute bottom-[-10%] left-[5%] w-56 h-56 sm:w-72 sm:h-72 bg-[var(--accent-1)] rounded-[50%_50%_40%_60%/40%_60%_50%_60%] clay-3d-blob blur-[8px] opacity-90 z-20 animate-float-fast" />
      </div>

      {/* --- FOREGROUND CONTENT (VIRTUAL CARD) --- */}
      <div className="relative z-10 w-full max-w-md mx-auto space-y-6 pb-12 pt-8 px-4 sm:px-6">
        
        {/* Profile Card Header */}
        <div className="clay-container p-6 sm:p-8 flex flex-col items-center text-center">
          <div className="relative group cursor-pointer mb-5">
            <div className="w-24 h-24 sm:w-32 sm:h-32 bg-[var(--bg)] rounded-[2rem] sm:rounded-[2.5rem] flex items-center justify-center clay-avatar transition-transform duration-500 group-hover:scale-105 overflow-hidden">
              <DesignHubLogo className="w-16 h-16 sm:w-20 sm:h-20 text-[#0033a0]" />
            </div>
          </div>
          <h1 className="text-3xl sm:text-4xl font-black tracking-tight mb-2 flex items-center justify-center gap-2 text-[var(--text)]">
            Design Hub
            <Sparkles className="w-5 h-5 sm:w-6 sm:h-6 text-[var(--accent-3)] animate-pulse" />
          </h1>
          <p className="text-[var(--text-muted)] font-bold text-xs sm:text-sm uppercase tracking-widest mb-3">
            Creative Studio
          </p>
          <p className="text-[var(--text)] text-sm sm:text-base font-medium leading-relaxed max-w-[280px]">
            We mold physical & digital identities into playful, unforgettable experiences.
          </p>
        </div>

        {/* Action Buttons */}
        <div className="flex gap-3 sm:gap-4">
          <button 
            onClick={handleSaveContact}
            aria-label="Save Contact to Phone"
            className="clay-btn flex-1 bg-[var(--accent-2)] text-[var(--bg)] py-3.5 sm:py-4 rounded-2xl sm:rounded-[1.5rem] flex items-center justify-center gap-2 font-black text-base sm:text-lg focus:outline-none focus:ring-2 focus:ring-[var(--accent-2)]"
          >
            <Download className="w-4 h-4 sm:w-5 sm:h-5" strokeWidth={3} />
            Save
          </button>
          <button 
            onClick={handleShare}
            aria-label="Share Profile"
            className="clay-btn flex-none bg-[var(--bg)] text-[var(--text)] p-3.5 sm:p-4 rounded-2xl sm:rounded-[1.5rem] flex items-center justify-center focus:outline-none focus:ring-2 focus:ring-[var(--text)]"
          >
            <Share2 className="w-5 h-5 sm:w-6 sm:h-6" strokeWidth={2.5} />
          </button>
        </div>

        {/* Contact Links */}
        <div className="clay-container p-3 sm:p-4 space-y-3">
          <a href="mailto:biswajeet.work01@gmail.com" className="flex items-center gap-3 sm:gap-4 bg-[var(--bg)] p-2.5 sm:p-3 rounded-xl sm:rounded-2xl clay-inset-card group transition-all hover:bg-[var(--bg-hover)] focus:outline-none focus:ring-2 focus:ring-[var(--accent-3)]">
            <div className="bg-[var(--bg)] p-2.5 sm:p-3 rounded-lg sm:rounded-xl clay-icon">
              <Mail className="w-4 h-4 sm:w-5 sm:h-5 text-[var(--text-muted)] group-hover:text-[var(--accent-3)] transition-colors" strokeWidth={2.5} />
            </div>
            <div className="flex-1 min-w-0">
              <p className="font-black text-sm sm:text-base text-[var(--text)]">Email Us</p>
              <p className="text-[var(--text-muted)] text-xs sm:text-sm font-bold truncate">biswajeet.work01@gmail.com</p>
            </div>
          </a>
          
          <a href="tel:+919884321730" className="flex items-center gap-3 sm:gap-4 bg-[var(--bg)] p-2.5 sm:p-3 rounded-xl sm:rounded-2xl clay-inset-card group transition-all hover:bg-[var(--bg-hover)] focus:outline-none focus:ring-2 focus:ring-[var(--accent-3)]">
            <div className="bg-[var(--bg)] p-2.5 sm:p-3 rounded-lg sm:rounded-xl clay-icon">
              <Phone className="w-4 h-4 sm:w-5 sm:h-5 text-[var(--text-muted)] group-hover:text-[var(--accent-3)] transition-colors" strokeWidth={2.5} />
            </div>
            <div className="flex-1 min-w-0">
              <p className="font-black text-sm sm:text-base text-[var(--text)]">Call Us</p>
              <p className="text-[var(--text-muted)] text-xs sm:text-sm font-bold truncate">+91 9884321730</p>
            </div>
          </a>

          <a href="https://designhub.studio" target="_blank" rel="noreferrer" className="flex items-center gap-3 sm:gap-4 bg-[var(--bg)] p-2.5 sm:p-3 rounded-xl sm:rounded-2xl clay-inset-card group transition-all hover:bg-[var(--bg-hover)] focus:outline-none focus:ring-2 focus:ring-[var(--accent-3)]">
            <div className="bg-[var(--bg)] p-2.5 sm:p-3 rounded-lg sm:rounded-xl clay-icon">
              <Globe className="w-4 h-4 sm:w-5 sm:h-5 text-[var(--text-muted)] group-hover:text-[var(--accent-3)] transition-colors" strokeWidth={2.5} />
            </div>
            <div className="flex-1 min-w-0">
              <p className="font-black text-sm sm:text-base text-[var(--text)]">Website</p>
              <p className="text-[var(--text-muted)] text-xs sm:text-sm font-bold truncate">designhub.studio</p>
            </div>
          </a>

          <a href="https://www.instagram.com/creativedigitalstudio_official?igsh=MWNqdHNjd2duOXUxbw==" target="_blank" rel="noreferrer" className="flex items-center gap-3 sm:gap-4 bg-[var(--bg)] p-2.5 sm:p-3 rounded-xl sm:rounded-2xl clay-inset-card group transition-all hover:bg-[var(--bg-hover)] focus:outline-none focus:ring-2 focus:ring-[var(--accent-3)]">
            <div className="bg-[var(--bg)] p-2.5 sm:p-3 rounded-lg sm:rounded-xl clay-icon">
              <Camera className="w-4 h-4 sm:w-5 sm:h-5 text-[var(--text-muted)] group-hover:text-[var(--accent-3)] transition-colors" strokeWidth={2.5} />
            </div>
            <div className="flex-1 min-w-0">
              <p className="font-black text-sm sm:text-base text-[var(--text)]">Instagram</p>
              <p className="text-[var(--text-muted)] text-xs sm:text-sm font-bold truncate">@creativedigitalstudio_official</p>
            </div>
          </a>
        </div>

        {/* Dynamic Expanding Services List */}
        <div className="relative">
          <h2 className="text-xl sm:text-2xl font-black mb-4 sm:mb-6 pl-1 flex items-center gap-2 text-[var(--text)]">
            Our Services <span className="text-[var(--accent-3)]">★</span>
          </h2>
          <div className="space-y-4 sm:space-y-6">
            {services.map((service) => {
              const isExpanded = expandedService === service.id;
              return (
                <div key={service.id} className={`clay-container transition-all duration-500 overflow-hidden ${isExpanded ? 'scale-[1.02]' : 'hover:scale-[1.01]'}`}>
                  
                  {/* Service Accordion Button (A11y Improved) */}
                  <button 
                    id={`accordion-btn-${service.id}`}
                    aria-expanded={isExpanded}
                    aria-controls={`accordion-content-${service.id}`}
                    onClick={() => toggleService(service.id)}
                    className="w-full p-4 sm:p-5 flex items-center justify-between text-left focus:outline-none focus:bg-[var(--bg-hover)] transition-colors"
                  >
                    <div className="flex items-center gap-3 sm:gap-4">
                      <div className={`w-12 h-12 sm:w-14 sm:h-14 rounded-xl sm:rounded-2xl flex items-center justify-center clay-icon transition-transform duration-500 ${service.clayColor} ${isExpanded ? 'scale-110 rotate-6' : ''}`}>
                        <service.icon className={`w-5 h-5 sm:w-6 sm:h-6 ${isExpanded ? 'text-[var(--bg)]' : 'text-[var(--text)]'}`} strokeWidth={2.5} />
                      </div>
                      <span className="font-black text-base sm:text-lg text-[var(--text)]">{service.title}</span>
                    </div>
                    <div className={`w-8 h-8 sm:w-10 sm:h-10 rounded-full flex items-center justify-center clay-btn transition-transform duration-500 ${isExpanded ? 'rotate-180' : ''} bg-[var(--bg)]`}>
                      {isExpanded ? <Minus className="w-4 h-4 sm:w-5 sm:h-5 text-[var(--text)]" strokeWidth={3} /> : <Plus className="w-4 h-4 sm:w-5 sm:h-5 text-[var(--text)]" strokeWidth={3} />}
                    </div>
                  </button>

                  {/* Expandable Content (Dynamic Accordion Motion) */}
                  <div 
                    id={`accordion-content-${service.id}`}
                    role="region"
                    aria-labelledby={`accordion-btn-${service.id}`}
                    className={`grid transition-all duration-500 ease-[cubic-bezier(0.4,0,0.2,1)] ${isExpanded ? 'grid-rows-[1fr] opacity-100' : 'grid-rows-[0fr] opacity-0 visibility-hidden'}`}
                  >
                    <div className="overflow-hidden">
                      <div className="p-4 sm:p-6 pt-0">
                        <div className="w-full h-[2px] bg-[var(--text)] opacity-10 rounded-full mb-4 sm:mb-5"></div>
                        
                        {/* Interactive Image Carousel */}
                        <ImageCarousel images={service.images} title={service.title} />

                        <p className="text-[var(--text-muted)] font-bold text-xs sm:text-sm mb-4 sm:mb-5 leading-relaxed">
                          {service.desc}
                        </p>
                        <div className="space-y-2 sm:space-y-3 mb-5 sm:mb-6">
                          {service.features.map((feature, idx) => (
                            <div key={idx} className="flex items-center gap-2 sm:gap-3">
                              <CheckCircle2 className={`w-4 h-4 sm:w-5 sm:h-5 ${isExpanded ? 'text-[var(--accent-3)]' : 'text-[var(--text)]'} flex-shrink-0`} strokeWidth={3} />
                              <span className="font-black text-xs sm:text-sm text-[var(--text)]">{feature}</span>
                            </div>
                          ))}
                        </div>
                        <button 
                          onClick={(e) => { e.stopPropagation(); setQuoteService(service.title); }}
                          className="clay-btn w-full bg-[var(--text)] text-[var(--bg)] py-3 sm:py-4 rounded-xl sm:rounded-2xl font-black text-base sm:text-lg focus:outline-none focus:ring-2 focus:ring-[var(--accent-3)]"
                        >
                          Request a Quote
                        </button>
                      </div>
                    </div>
                  </div>

                </div>
              );
            })}
          </div>
        </div>
      </div>

      {/* --- QUOTE REQUEST MODAL --- */}
      {quoteService && (
        <div 
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/50 backdrop-blur-sm animate-in fade-in duration-300"
          onClick={() => setQuoteService(null)}
        >
          <div 
            className="clay-container p-6 sm:p-8 flex flex-col gap-4 max-w-sm w-full animate-in zoom-in-95 duration-300 relative bg-[var(--bg)]"
            onClick={(e) => e.stopPropagation()}
            role="dialog"
            aria-modal="true"
            aria-labelledby="quote-modal-title"
          >
            <button 
              aria-label="Close quote form"
              onClick={() => setQuoteService(null)}
              className="absolute top-4 right-4 p-2 text-[var(--text-muted)] hover:text-[var(--accent-3)] bg-[var(--bg)] rounded-full clay-btn focus:outline-none focus:ring-2 focus:ring-[var(--accent-3)]"
            >
              <X className="w-5 h-5" strokeWidth={3} />
            </button>
            
            <div className="mt-2">
              <h3 id="quote-modal-title" className="text-[var(--text)] font-black text-2xl">Request Quote</h3>
              <p className="text-[var(--accent-3)] text-sm font-bold mt-1">{quoteService}</p>
            </div>

            <form onSubmit={handleQuoteSubmit} className="flex flex-col gap-4 mt-2">
              <input 
                aria-label="Your Name" 
                required 
                placeholder="Your Name" 
                className="clay-inset-card bg-[var(--bg)] text-[var(--text)] px-4 py-3 rounded-xl w-full focus:outline-none focus:ring-2 focus:ring-[var(--accent-3)] placeholder:text-[var(--text-muted)] font-medium" 
              />
              <input 
                aria-label="Your Email" 
                type="email" 
                required 
                placeholder="Your Email" 
                className="clay-inset-card bg-[var(--bg)] text-[var(--text)] px-4 py-3 rounded-xl w-full focus:outline-none focus:ring-2 focus:ring-[var(--accent-3)] placeholder:text-[var(--text-muted)] font-medium" 
              />
              <textarea 
                aria-label="Project Details" 
                required 
                placeholder="Tell us about your project..." 
                rows="3" 
                className="clay-inset-card bg-[var(--bg)] text-[var(--text)] px-4 py-3 rounded-xl w-full focus:outline-none focus:ring-2 focus:ring-[var(--accent-3)] placeholder:text-[var(--text-muted)] font-medium resize-none" 
              />
              <button 
                type="submit" 
                className="clay-btn w-full bg-[var(--accent-3)] text-[var(--bg)] py-3 rounded-xl font-black text-lg mt-2 focus:outline-none focus:ring-2 focus:ring-[var(--text)]"
              >
                Send Request
              </button>
            </form>
          </div>
        </div>
      )}

      {/* --- TOAST NOTIFICATION --- */}
      {toastMsg && (
        <div className="fixed bottom-8 left-1/2 -translate-x-1/2 z-50 clay-container bg-[var(--text)] text-[var(--bg)] px-6 py-3 rounded-full font-black text-sm animate-in slide-in-from-bottom-4 flex items-center gap-2">
          <CheckCircle2 className="w-4 h-4 text-[var(--accent-2)]" strokeWidth={3} />
          {toastMsg}
        </div>
      )}

      {/* --- GLOBAL CSS FOR CLAYMORPHISM & MOBILE OPTIMIZATION --- */}
      <style dangerouslySetInnerHTML={{__html: `
        * { -webkit-tap-highlight-color: transparent; }
        
        .visibility-hidden { visibility: hidden; }

        @keyframes float-slow {
          0%, 100% { transform: translateY(0) rotate(0deg); }
          50% { transform: translateY(-20px) rotate(5deg); }
        }
        @keyframes float-slower {
          0%, 100% { transform: translate(0, 0) scale(1) rotate(0deg); }
          50% { transform: translate(-15px, 15px) scale(1.05) rotate(-5deg); }
        }
        @keyframes float-fast {
          0%, 100% { transform: translateY(0) rotate(0deg); }
          50% { transform: translateY(-30px) rotate(10deg); }
        }
        @keyframes breathe {
          0%, 100% { transform: scale(1); opacity: 0.05; }
          50% { transform: scale(1.02); opacity: 0.1; }
        }

        .animate-float-slow { animation: float-slow 8s ease-in-out infinite; }
        .animate-float-slower { animation: float-slower 12s ease-in-out infinite; }
        .animate-float-fast { animation: float-fast 6s ease-in-out infinite; }
        .animate-breathe { animation: breathe 10s ease-in-out infinite; }

        /* Dynamic Clay Variables mapped directly from state */
        .clay-container {
          background: var(--bg);
          border-radius: 1.5rem;
          box-shadow: 
            12px 12px 24px var(--shadow-dark), 
            -12px -12px 24px var(--shadow-light),
            inset 2px 2px 5px var(--shadow-light),
            inset -2px -2px 5px rgba(0, 0, 0, 0.03);
          border: 1px solid var(--border-light);
        }
        
        .clay-3d-blob {
          box-shadow: 
            inset 20px 20px 40px var(--shadow-light),
            inset -20px -20px 40px rgba(0,0,0,0.2),
            25px 25px 50px var(--shadow-dark);
        }

        .clay-avatar {
          box-shadow: 
            10px 10px 20px var(--shadow-dark), 
            -10px -10px 20px var(--shadow-light),
            inset 4px 4px 10px var(--shadow-light),
            inset -4px -4px 10px rgba(0, 0, 0, 0.05);
        }

        .clay-btn {
          box-shadow: 
            6px 6px 12px var(--shadow-dark), 
            -6px -6px 12px var(--shadow-light),
            inset 2px 2px 4px var(--border-light),
            inset -2px -2px 4px rgba(0, 0, 0, 0.1);
          transition: all 0.2s cubic-bezier(0.4, 0, 0.2, 1);
        }
        .clay-btn:active {
          transform: scale(0.95);
          box-shadow: 
            inset 6px 6px 12px var(--shadow-dark),
            inset -6px -6px 12px var(--shadow-light);
        }

        .clay-inset-card {
          box-shadow: 
            inset 4px 4px 8px var(--shadow-dark),
            inset -4px -4px 8px var(--shadow-light);
        }

        .clay-icon {
          box-shadow: 
            4px 4px 8px var(--shadow-dark), 
            -4px -4px 8px var(--shadow-light);
        }

        .clay-badge {
          box-shadow: 
            3px 3px 6px var(--shadow-dark),
            inset 2px 2px 4px var(--shadow-light);
        }

        @media (min-width: 640px) {
          .clay-container { border-radius: 2rem; }
        }
      `}} />
    </div>
  );
}
