import React, { useEffect, useRef, useState } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import {
  Download,
  Mail,
  Phone,
  Linkedin,
  Github,
  Check,
  Copy,
  ExternalLink,
  Sparkles,
  TrendingUp,
  BarChart3,
  Layers,
  Code2,
  Cpu,
  ArrowUpRight,
  Briefcase,
  GraduationCap,
  ChevronRight,
  Send
} from 'lucide-react';

gsap.registerPlugin(ScrollTrigger);

export default function App() {
  const mainRef = useRef(null);
  const heroRef = useRef(null);
  const [navScrolled, setNavScrolled] = useState(false);
  const [copiedEmail, setCopiedEmail] = useState(false);
  const [contactMessage, setContactMessage] = useState('');
  const [contactSent, setContactSent] = useState(false);
  const [activeSkill, setActiveSkill] = useState(0);

  // User details
  const personalInfo = {
    name: "Brell BEMBA",
    initials: "BB",
    title: "Data Analyst & Media Buyer",
    tagline: "Transformer la data et les Meta Ads en un moteur d'acquisition rentable à fort ROAS.",
    email: "brell.bemba@gmail.com",
    phone: "+242 06 999 00 00",
    location: "Brazzaville & Remote",
    stats: [
      { label: "Années d'expérience", value: "6+" },
      { label: "Dashboards & Campagnes", value: "40+" },
      { label: "Localisation & Mobilité", value: "Brazzaville & Remote" },
    ],
    about: {
      lead: "Data Analyst passionné par la création de logiciel, j’accompagne les SaaS B2B et B2C ayant déjà validé leur produit, à transformer Meta Ads en un canal d’acquisition rentable avec un CAC mesuré.",
      body: "Mon approche combine la rigueur analytique de la Business Intelligence (Power BI, DAX, modélisation avancée), l'optimisation publicitaire chirurgicale de Meta Ads et l'agilité du Vibe Coding. Je ne me contente pas d'aligner des métriques : je structure des écosystèmes d'acquisition résilients où chaque dollar investi est traqué, analysé et rentabilisé.",
      subtext: "De la conception de dashboards décisionnels interactifs au scaling de campagnes payantes à fort volume, ma mission est d'offrir une clarté totale sur vos performances pour débloquer votre prochain palier de croissance."
    },
    experiences: [
      {
        id: "kedjenou",
        period: "2021 — PRÉSENT",
        role: "Fondateur – Agence digitale & solutions data",
        company: "KEDJENOU",
        location: "Brazzaville & International",
        type: "Direction & Croissance",
        description: "Création et pilotage d'une agence spécialisée en stratégies digitales de pointe et solutions web orientées data pour entreprises et marques ambitieuses.",
        bullets: [
          "Conception de stratégies d'acquisition et de visibilité basées sur l'analyse fine des performances (portée, engagement, conversions).",
          "Mise en place de systèmes de reporting sur-mesure pour mesurer en temps réel le ROI des actions marketing.",
          "Accompagnement décisionnel des dirigeants dans l'optimisation continue de leurs budgets d'acquisition.",
          "Pilotage de campagnes digitales multi-canaux et déploiement de solutions web à fort taux de conversion."
        ],
        tags: ["Stratégie Data", "Meta Ads", "Reporting ROI", "Croissance", "Leadership"]
      },
      {
        id: "data-dojo",
        period: "2018 — 2021",
        role: "Consultant Analyste de données Power BI",
        company: "The Data Dojo LLC",
        location: "À distance (Remote)",
        type: "Business Intelligence",
        description: "Accompagnement en Business Intelligence, modélisation décisionnelle et conception de tableaux de bord exécutifs interactifs.",
        bullets: [
          "Conception et déploiement de tableaux de bord interactifs complexes sur Power BI Desktop et Power BI Service.",
          "Modélisation avancée de données relationnelles et écriture de mesures analytiques poussées en langage DAX.",
          "Extraction, nettoyage approfondi et transformation des flux de données via Power Query (ETL).",
          "Traduction des volumes de données brutes en indicateurs clés (KPIs) clairs et exploitables pour les comités de direction."
        ],
        tags: ["Power BI", "DAX", "Power Query", "Data Modeling", "ETL", "KPIs"]
      },
      {
        id: "airtel",
        period: "2016 — 2017",
        role: "Chargé de la relation clientèle",
        company: "Airtel Congo",
        location: "Brazzaville",
        type: "Relation Client & Reporting",
        description: "Gestion des comptes clients stratégiques, analyse de la satisfaction et production des synthèses de performance opérationnelle.",
        bullets: [
          "Gestion et fidélisation des portefeuilles clients, traitement des requêtes prioritaires et suivi SAV de haut niveau.",
          "Préparation et automatisation des rapports hebdomadaires et mensuels de performance service client sous Excel et PowerPoint.",
          "Rédaction des procès-verbaux de comités hebdomadaires et recommandations directes pour élever le niveau de satisfaction (CSAT).",
          "Suivi des indicateurs clés de qualité de service et d'expérience client dans un environnement télécom à grande échelle."
        ],
        tags: ["Relation Client", "Reporting Excel", "Analyse CSAT", "Télécoms"]
      }
    ],
    skills: [
      {
        name: "Analyse de données & Reporting",
        subtitle: "Power BI, Excel Avancé, DAX & Power Query",
        level: 96,
        icon: BarChart3,
        details: "Modélisation de schémas en étoile, mesures DAX complexes, dashboards interactifs et automatisation de flux ETL.",
        metrics: "40+ Rapports décisionnels créés"
      },
      {
        name: "Acquisition de leads Meta Ads",
        subtitle: "Scaling, Optimisation CAC, ROAS & Audiences",
        level: 93,
        icon: TrendingUp,
        details: "Structuration de funnels publicitaires pour SaaS et E-commerce, tests A/B créatifs continus et optimisation du coût par acquisition.",
        metrics: "CAC maîtrisé & ROAS scalable"
      },
      {
        name: "Vibe Coding & Création Logicielle",
        subtitle: "React, Tailwind, Prototypage IA & Web Apps",
        level: 90,
        icon: Code2,
        details: "Développement agile d'applications web modernes assisté par l'IA, architectures frontend réactives et interfaces cinématiques.",
        metrics: "Time-to-market ultra-rapide"
      },
      {
        name: "Analyse des performances marketing",
        subtitle: "Tracking, Modèles d'attribution, Taux de conversion",
        level: 92,
        icon: Layers,
        details: "Configuration de tracking serveur/navigateur, analyse granulaire du parcours utilisateur et maximisation des taux de conversion (CRO).",
        metrics: "Visibilité 100% de la donnée"
      },
      {
        name: "Automatisation IA & Workflows",
        subtitle: "Intégrations API, Make, Zapier & Agents IA",
        level: 88,
        icon: Cpu,
        details: "Automatisation des pipelines de reporting data, synchronisation CRM/Ads et intégration d'outils IA générative pour accélérer la production.",
        metrics: "15h+ économisées par semaine"
      }
    ],
    education: [
      {
        year: "2023 — 2024",
        degree: "Spécialisation Meta Certified Media Buying & Architecture Vibe Coding",
        institution: "Formation Continue & Pratique Avancée",
        description: "Maîtrise des algorithmes Meta Ads Advantage+, de l'attribution avancée et du prototypage rapide de logiciels avec assistance IA."
      },
      {
        year: "2018",
        degree: "Certificat d'Excellence Business Intelligence & Power BI Masterclass",
        institution: "The Data Dojo LLC",
        description: "Spécialisation en modélisation DAX, pipelines Power Query et visualisation de données stratégiques."
      },
      {
        year: "2014 — 2016",
        degree: "Cursus Supérieur en Gestion & Systèmes d'Information",
        institution: "Brazzaville, République du Congo",
        description: "Fondements solides en gestion d'entreprise, comptabilité analytique, bases de données et communication professionnelle."
      }
    ]
  };

  // Navbar morphing on scroll
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 80) {
        setNavScrolled(true);
      } else {
        setNavScrolled(false);
      }
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // GSAP Animations with ctx.revert()
  useEffect(() => {
    const ctx = gsap.context(() => {
      // 1. Hero entrance animation
      const heroTl = gsap.timeline({ defaults: { ease: "power3.out" } });
      
      heroTl
        .from(".hero-badge", {
          opacity: 0,
          y: -20,
          duration: 0.8,
          delay: 0.1
        })
        .from(".hero-avatar", {
          opacity: 0,
          scale: 0.8,
          duration: 0.9,
        }, "-=0.5")
        .from(".hero-title-name", {
          opacity: 0,
          y: 40,
          duration: 1,
        }, "-=0.6")
        .from(".hero-title-role", {
          opacity: 0,
          y: 30,
          duration: 0.9,
        }, "-=0.7")
        .from(".hero-stat-card", {
          opacity: 0,
          y: 25,
          stagger: 0.12,
          duration: 0.8,
        }, "-=0.5")
        .from(".hero-cta-btn", {
          opacity: 0,
          y: 20,
          stagger: 0.1,
          duration: 0.7,
        }, "-=0.4");

      // 2. About Section Reveal
      gsap.from(".about-content", {
        scrollTrigger: {
          trigger: "#about",
          start: "top 80%",
          toggleActions: "play none none reverse",
        },
        opacity: 0,
        y: 40,
        duration: 1,
        ease: "power3.out"
      });

      // 3. Experience Timeline Cards Slide-In
      const expCards = gsap.utils.toArray('.experience-card');
      expCards.forEach((card, index) => {
        const isEven = index % 2 === 0;
        gsap.from(card, {
          scrollTrigger: {
            trigger: card,
            start: "top 85%",
            toggleActions: "play none none reverse"
          },
          opacity: 0,
          x: isEven ? -50 : 50,
          duration: 0.9,
          ease: "power3.out"
        });

        // Timeline dot pulse
        const dot = card.querySelector('.timeline-dot');
        if (dot) {
          gsap.fromTo(dot, 
            { scale: 0.6, boxShadow: '0 0 0px #7B61FF' },
            {
              scrollTrigger: {
                trigger: card,
                start: "top 85%",
                toggleActions: "play none none reverse"
              },
              scale: 1.2,
              boxShadow: '0 0 20px #7B61FF',
              duration: 0.6,
              repeat: 1,
              yoyo: true,
              ease: "power2.inOut"
            }
          );
        }
      });

      // 4. Skills Progress & Circles
      const skillCards = gsap.utils.toArray('.skill-card');
      skillCards.forEach((card) => {
        const circle = card.querySelector('.progress-circle-bar');
        const percentageText = card.querySelector('.counter-value');
        const targetPercent = parseInt(card.getAttribute('data-percent') || '0', 10);

        if (circle) {
          const radius = 38;
          const circumference = 2 * Math.PI * radius;
          const offset = circumference - (targetPercent / 100) * circumference;

          gsap.fromTo(circle,
            { strokeDashoffset: circumference },
            {
              scrollTrigger: {
                trigger: card,
                start: "top 85%",
                toggleActions: "play none none reverse"
              },
              strokeDashoffset: offset,
              duration: 1.4,
              ease: "power3.out"
            }
          );
        }

        if (percentageText) {
          const counter = { val: 0 };
          gsap.to(counter, {
            scrollTrigger: {
              trigger: card,
              start: "top 85%",
              toggleActions: "play none none reverse"
            },
            val: targetPercent,
            duration: 1.4,
            ease: "power3.out",
            onUpdate: () => {
              percentageText.textContent = Math.round(counter.val) + "%";
            }
          });
        }
      });

      // 5. Education Cards Stagger
      gsap.from(".education-card", {
        scrollTrigger: {
          trigger: "#formation",
          start: "top 80%",
          toggleActions: "play none none reverse"
        },
        opacity: 0,
        y: 35,
        stagger: 0.15,
        duration: 0.8,
        ease: "power3.out"
      });

      // 6. Contact Icons Stagger
      gsap.from(".contact-link-item", {
        scrollTrigger: {
          trigger: "#contact",
          start: "top 85%",
          toggleActions: "play none none reverse"
        },
        opacity: 0,
        y: 25,
        stagger: 0.12,
        duration: 0.7,
        ease: "power3.out"
      });

    }, mainRef);

    return () => ctx.revert();
  }, []);

  // Copy email handler
  const handleCopyEmail = () => {
    navigator.clipboard.writeText(personalInfo.email);
    setCopiedEmail(true);
    setTimeout(() => setCopiedEmail(false), 2500);
  };

  // Download CV handler: triggers download of /CV_Brell_BEMBA.pdf
  const handleDownloadCV = (e) => {
    // Normal anchor download takes care of it, or programmatic trigger:
    const link = document.createElement('a');
    link.href = '/CV_Brell_BEMBA.pdf';
    link.download = 'CV_Brell_BEMBA.pdf';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  const handleSendMessage = (e) => {
    e.preventDefault();
    if (!contactMessage.trim()) return;
    const mailtoUrl = `mailto:${personalInfo.email}?subject=Contact Professionnel via Portfolio&body=${encodeURIComponent(contactMessage)}`;
    window.location.href = mailtoUrl;
    setContactSent(true);
    setContactMessage('');
    setTimeout(() => setContactSent(false), 4000);
  };

  return (
    <div ref={mainRef} className="relative min-h-screen bg-aura-bg text-aura-ghost font-sans selection:bg-aura-violet selection:text-white">
      
      {/* ==================================================== */}
      {/* A. NAVBAR — "La Signature Flottante"                */}
      {/* ==================================================== */}
      <header className="fixed top-6 left-0 right-0 z-40 flex justify-center px-4 pointer-events-none">
        <nav
          className={`pointer-events-auto flex items-center justify-between gap-4 md:gap-8 px-5 py-3 rounded-full transition-all duration-500 max-w-4xl w-full border ${
            navScrolled
              ? 'bg-[#0A0A14]/80 backdrop-blur-xl border-aura-violet/30 shadow-neon-subtle py-2.5'
              : 'bg-transparent border-transparent'
          }`}
        >
          {/* Logo / Initials */}
          <a
            href="#hero"
            className="flex items-center gap-2 group link-lift"
            aria-label="Retour en haut"
          >
            <div className="w-10 h-10 rounded-full bg-gradient-to-tr from-aura-violetDark to-aura-violet flex items-center justify-center font-bold text-white shadow-neon text-sm tracking-wider">
              {personalInfo.initials}
            </div>
            <span className="hidden sm:inline-block font-bold tracking-tight text-white group-hover:text-aura-violet transition-colors">
              Brell <span className="text-aura-violet">BEMBA</span>
            </span>
          </a>

          {/* Anchor Navigation Links */}
          <div className="hidden md:flex items-center gap-6 text-xs lg:text-sm font-medium text-zinc-300">
            <a href="#about" className="link-lift hover:text-white transition-colors">À propos</a>
            <a href="#experience" className="link-lift hover:text-white transition-colors">Expérience</a>
            <a href="#competences" className="link-lift hover:text-white transition-colors">Compétences</a>
            <a href="#formation" className="link-lift hover:text-white transition-colors">Formation</a>
            <a href="#contact" className="link-lift hover:text-white transition-colors">Contact</a>
          </div>

          {/* CTA Download CV button in navbar */}
          <button
            onClick={handleDownloadCV}
            className="btn-magnetic flex items-center gap-2 px-4 py-2 rounded-full bg-aura-violet hover:bg-aura-violetLight text-white text-xs md:text-sm font-semibold shadow-neon hover:shadow-neon-strong transition-all"
            id="nav-cv-button"
          >
            <Download className="w-3.5 h-3.5" />
            <span>CV</span>
          </button>
        </nav>
      </header>

      {/* ==================================================== */}
      {/* B. SECTION HERO — "La Première Impression"           */}
      {/* ==================================================== */}
      <section
        id="hero"
        ref={heroRef}
        className="relative min-h-[100dvh] flex flex-col justify-center items-center text-center px-6 pt-28 pb-16 overflow-hidden"
      >
        {/* Ambient Neon Lighting Background */}
        <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[550px] h-[550px] bg-aura-violet/15 rounded-full blur-[130px] pointer-events-none -z-10 animate-pulse-slow"></div>
        <div className="absolute bottom-10 right-10 w-[350px] h-[350px] bg-cyan-500/10 rounded-full blur-[100px] pointer-events-none -z-10"></div>
        
        {/* Subtle Background Digital Texture */}
        <div 
          className="absolute inset-0 bg-cover bg-center opacity-10 mix-blend-screen pointer-events-none -z-20"
          style={{
            backgroundImage: `url('https://images.unsplash.com/photo-1550751827-4bd374c3f58b?auto=format&fit=crop&w=2000&q=80')`
          }}
        ></div>

        <div className="max-w-4xl mx-auto flex flex-col items-center z-10">
          
          {/* Status Badge */}
          <div className="hero-badge inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#131325]/80 border border-aura-violet/30 text-aura-violetLight text-xs font-mono mb-8 backdrop-blur-md">
            <span className="w-2 h-2 rounded-full bg-emerald-400 animate-ping"></span>
            <span>Disponible pour nouveaux projets SaaS & Data</span>
          </div>

          {/* Avatar Profile Placeholder (Rounded-full, 130px, 2px border, stylized initials) */}
          <div className="hero-avatar relative mb-6 group">
            <div className="absolute -inset-1.5 bg-gradient-to-r from-aura-violet via-purple-500 to-cyan-400 rounded-full blur-md opacity-70 group-hover:opacity-100 transition-opacity"></div>
            <div className="relative w-32 h-32 md:w-36 md:h-36 rounded-full bg-[#10101C] border-2 border-aura-violet/80 flex flex-col items-center justify-center overflow-hidden shadow-2xl">
              <span className="text-3xl md:text-4xl font-extrabold tracking-wider bg-gradient-to-br from-white via-aura-ghost to-aura-violet text-transparent bg-clip-text">
                {personalInfo.initials}
              </span>
              <span className="text-[10px] font-mono tracking-widest text-aura-violetLight uppercase mt-1">
                DATA & ADS
              </span>
            </div>
          </div>

          {/* Massive Name with Accent Glow (Sora bold) */}
          <h1 className="hero-title-name text-4xl sm:text-6xl md:text-7xl font-extrabold tracking-tight text-white mb-2 text-glow-violet">
            {personalInfo.name}
          </h1>

          {/* Professional Title in Dramatic Serif Italic (Instrument Serif) */}
          <p className="hero-title-role font-serif italic text-2xl sm:text-3xl md:text-4xl text-aura-violetLight mb-6 font-normal tracking-wide">
            {personalInfo.title}
          </p>

          {/* Tagline */}
          <p className="text-zinc-400 text-sm sm:text-base max-w-xl mb-10 leading-relaxed font-light">
            {personalInfo.tagline}
          </p>

          {/* Stats in Monospace (Fira Code) */}
          <div className="hero-stat-card flex flex-wrap items-center justify-center gap-3 sm:gap-6 py-3 px-6 rounded-2xl bg-[#11111F]/70 border border-aura-violet/20 backdrop-blur-md font-mono text-xs sm:text-sm text-zinc-300 mb-10 shadow-lg">
            {personalInfo.stats.map((stat, idx) => (
              <React.Fragment key={idx}>
                <div className="flex items-center gap-2">
                  <span className="text-aura-violet font-semibold">{stat.value}</span>
                  <span className="text-zinc-400 text-[11px] sm:text-xs">{stat.label}</span>
                </div>
                {idx < personalInfo.stats.length - 1 && (
                  <span className="text-aura-violet/40 hidden sm:inline">|</span>
                )}
              </React.Fragment>
            ))}
          </div>

          {/* Action CTAs */}
          <div className="flex flex-wrap items-center justify-center gap-4">
            <button
              onClick={handleDownloadCV}
              className="hero-cta-btn btn-magnetic flex items-center gap-3 px-8 py-3.5 rounded-full bg-aura-violet hover:bg-aura-violetLight text-white font-semibold text-sm md:text-base shadow-neon hover:shadow-neon-strong transition-all"
              id="hero-download-cv-btn"
            >
              <Download className="w-4 h-4" />
              <span>Télécharger mon CV</span>
            </button>

            <a
              href="#contact"
              className="hero-cta-btn btn-magnetic flex items-center gap-2 px-8 py-3.5 rounded-full bg-transparent hover:bg-[#15152A] text-white border border-aura-violet/40 hover:border-aura-violet font-semibold text-sm md:text-base transition-all"
            >
              <span>Me contacter</span>
              <ArrowUpRight className="w-4 h-4 text-aura-violet" />
            </a>
          </div>

        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex flex-col items-center gap-1.5 opacity-60 hover:opacity-100 transition-opacity">
          <span className="text-[10px] font-mono tracking-widest text-zinc-400 uppercase">Explorer</span>
          <div className="w-5 h-8 rounded-full border border-zinc-600 flex justify-center pt-1.5">
            <div className="w-1 h-2 rounded-full bg-aura-violet animate-bounce"></div>
          </div>
        </div>
      </section>

      {/* ==================================================== */}
      {/* C. A PROPOS — "Le Manifeste Personnel"               */}
      {/* ==================================================== */}
      <section id="about" className="py-24 px-6 md:px-12 bg-[#F0EFF4] text-[#0A0A14] rounded-[2.5rem] md:rounded-[3.5rem] my-8 max-w-7xl mx-auto shadow-2xl relative overflow-hidden">
        {/* Subtle decorative motif */}
        <div className="absolute -right-20 -bottom-20 w-96 h-96 bg-purple-200/50 rounded-full blur-3xl pointer-events-none"></div>

        <div className="about-content max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-10 md:gap-14 items-center">
          
          {/* Left Column: Dramatic Title in Instrument Serif */}
          <div className="lg:col-span-4 flex flex-col">
            <span className="text-xs font-mono uppercase tracking-widest text-aura-violet font-semibold mb-3">
              01 / Manifeste
            </span>
            <h2 className="font-serif italic text-4xl sm:text-5xl md:text-6xl text-[#0A0A14] font-normal leading-[1.1] mb-6">
              À propos de moi
            </h2>
            <div className="w-20 h-1.5 bg-aura-violet rounded-full mb-6"></div>
            <p className="text-zinc-600 text-sm font-light leading-relaxed">
              Une alliance rare entre la compréhension intime du business, la maîtrise des données décisionnelles et la créativité du media buying.
            </p>
          </div>

          {/* Middle Separator: Fine vertical accent line (2px) */}
          <div className="hidden lg:block lg:col-span-1 flex justify-center">
            <div className="w-[2px] h-64 bg-aura-violet/40 rounded-full"></div>
          </div>

          {/* Right Column: User's presentation text in Sora with generous spacing */}
          <div className="lg:col-span-7 flex flex-col gap-5 text-base sm:text-lg text-zinc-800 leading-relaxed font-normal">
            <p className="font-medium text-xl sm:text-2xl text-[#0A0A14] leading-snug border-l-4 border-aura-violet pl-4 py-1">
              {personalInfo.about.lead}
            </p>
            <p className="text-zinc-700 text-base leading-relaxed">
              {personalInfo.about.body}
            </p>
            <p className="text-zinc-600 text-sm sm:text-base leading-relaxed font-light">
              {personalInfo.about.subtext}
            </p>

            {/* Core Values / Focus Pills */}
            <div className="flex flex-wrap gap-2 pt-2">
              <span className="px-3.5 py-1.5 rounded-full bg-white border border-zinc-200 text-xs font-mono font-medium text-zinc-800 shadow-sm">
                #CAC_Optimisé
              </span>
              <span className="px-3.5 py-1.5 rounded-full bg-white border border-zinc-200 text-xs font-mono font-medium text-zinc-800 shadow-sm">
                #PowerBI_DAX
              </span>
              <span className="px-3.5 py-1.5 rounded-full bg-white border border-zinc-200 text-xs font-mono font-medium text-zinc-800 shadow-sm">
                #VibeCoding
              </span>
              <span className="px-3.5 py-1.5 rounded-full bg-white border border-zinc-200 text-xs font-mono font-medium text-zinc-800 shadow-sm">
                #Attribution_Data
              </span>
            </div>
          </div>

        </div>
      </section>

      {/* ==================================================== */}
      {/* D. EXPERIENCE — "La Timeline Vivante"                */}
      {/* ==================================================== */}
      <section id="experience" className="py-24 px-6 max-w-7xl mx-auto relative">
        <div className="text-center max-w-2xl mx-auto mb-20">
          <span className="text-xs font-mono uppercase tracking-widest text-aura-violet font-semibold">
            02 / Trajectoire
          </span>
          <h2 className="font-serif italic text-4xl sm:text-5xl md:text-6xl text-white font-normal mt-2 mb-4">
            Expériences Principales
          </h2>
          <p className="text-zinc-400 text-sm sm:text-base font-light">
            Chaque mission a été une opportunité de transformer la complexité opérationnelle en résultats tangibles et mesurables.
          </p>
        </div>

        {/* Timeline Container */}
        <div className="relative">
          {/* Central Vertical Timeline Line (Desktop: center, Mobile: left-6) */}
          <div className="absolute left-6 md:left-1/2 top-4 bottom-4 w-[2px] -translate-x-1/2 bg-gradient-to-b from-aura-violet via-purple-500 to-aura-violet/20 pointer-events-none"></div>

          <div className="space-y-12 md:space-y-16">
            {personalInfo.experiences.map((exp, idx) => {
              const isEven = idx % 2 === 0;
              return (
                <div
                  key={exp.id}
                  className={`experience-card relative flex flex-col md:flex-row items-start ${
                    isEven ? 'md:flex-row-reverse' : ''
                  }`}
                >
                  {/* Timeline Dot with Glow */}
                  <div className="timeline-dot absolute left-6 md:left-1/2 -translate-x-1/2 w-5 h-5 rounded-full bg-aura-bg border-4 border-aura-violet shadow-neon z-20 flex items-center justify-center">
                    <div className="w-1.5 h-1.5 rounded-full bg-white"></div>
                  </div>

                  {/* Content Card (Desktop: half-width with padding) */}
                  <div className="ml-14 md:ml-0 md:w-1/2 md:px-8 w-full">
                    <div className="card-aura bg-aura-surface/90 border border-aura-border hover:border-aura-borderHover rounded-[2rem] p-6 sm:p-8 shadow-card-glow backdrop-blur-md">
                      
                      {/* Period Badge (Fira Code) & Location */}
                      <div className="flex flex-wrap items-center justify-between gap-2 mb-4">
                        <span className="font-mono text-xs font-semibold px-3 py-1 rounded-full bg-aura-violet/20 text-aura-violetLight border border-aura-violet/30">
                          {exp.period}
                        </span>
                        <span className="text-xs font-mono text-zinc-400">
                          {exp.location}
                        </span>
                      </div>

                      {/* Job Title & Company */}
                      <h3 className="text-xl sm:text-2xl font-bold text-white mb-1">
                        {exp.role}
                      </h3>
                      <div className="flex items-center gap-2 text-aura-violetLight font-medium text-sm sm:text-base mb-4">
                        <Briefcase className="w-4 h-4 text-aura-violet" />
                        <span>{exp.company}</span>
                        <span className="text-zinc-500">•</span>
                        <span className="text-xs text-zinc-400 font-mono">{exp.type}</span>
                      </div>

                      {/* Overview */}
                      <p className="text-zinc-300 text-sm leading-relaxed mb-4">
                        {exp.description}
                      </p>

                      {/* Bullet points */}
                      <ul className="space-y-2 mb-6 text-xs sm:text-sm text-zinc-400">
                        {exp.bullets.map((bullet, bIdx) => (
                          <li key={bIdx} className="flex items-start gap-2.5">
                            <ChevronRight className="w-3.5 h-3.5 text-aura-violet shrink-0 mt-1" />
                            <span>{bullet}</span>
                          </li>
                        ))}
                      </ul>

                      {/* Tags */}
                      <div className="flex flex-wrap gap-2 pt-2 border-t border-aura-violet/15">
                        {exp.tags.map((tag, tIdx) => (
                          <span
                            key={tIdx}
                            className="px-2.5 py-1 rounded-lg bg-[#18182C] text-[11px] font-mono text-zinc-300 border border-white/5"
                          >
                            {tag}
                          </span>
                        ))}
                      </div>

                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ==================================================== */}
      {/* E. COMPETENCES — "Le Tableau de Bord"                */}
      {/* ==================================================== */}
      <section id="competences" className="py-24 px-6 max-w-7xl mx-auto">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="text-xs font-mono uppercase tracking-widest text-aura-violet font-semibold">
            03 / Expertise
          </span>
          <h2 className="font-serif italic text-4xl sm:text-5xl md:text-6xl text-white font-normal mt-2 mb-4">
            Tableau de Maîtrise
          </h2>
          <p className="text-zinc-400 text-sm sm:text-base font-light">
            Une stack éprouvée pour orchestrer la donnée et déployer des campagnes à forte rentabilité.
          </p>
        </div>

        {/* Dashboard Grid of 5 Mastery Cards (Pattern 2) */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {personalInfo.skills.map((skill, index) => {
            const IconComp = skill.icon;
            const radius = 38;
            const circumference = 2 * Math.PI * radius;

            return (
              <div
                key={index}
                data-percent={skill.level}
                onClick={() => setActiveSkill(index)}
                className={`skill-card card-aura cursor-pointer p-6 rounded-[2rem] bg-aura-surface border transition-all ${
                  activeSkill === index
                    ? 'border-aura-violet shadow-neon-strong bg-aura-card'
                    : 'border-aura-border hover:border-aura-borderHover bg-aura-card/60'
                }`}
              >
                <div className="flex items-center justify-between mb-6">
                  {/* Skill Icon */}
                  <div className="w-12 h-12 rounded-2xl bg-aura-violet/20 border border-aura-violet/40 flex items-center justify-center text-aura-violetLight shadow-neon-subtle">
                    <IconComp className="w-6 h-6" />
                  </div>

                  {/* Circular SVG Gauge with Percentage */}
                  <div className="relative w-20 h-20 flex items-center justify-center">
                    <svg className="w-20 h-20 -rotate-90" viewBox="0 0 100 100">
                      {/* Background track */}
                      <circle
                        cx="50"
                        cy="50"
                        r={radius}
                        fill="transparent"
                        stroke="#222238"
                        strokeWidth="8"
                      />
                      {/* Animated Progress Circle */}
                      <circle
                        className="progress-circle-bar transition-all duration-1000"
                        cx="50"
                        cy="50"
                        r={radius}
                        fill="transparent"
                        stroke="#7B61FF"
                        strokeWidth="8"
                        strokeDasharray={circumference}
                        strokeDashoffset={circumference}
                        strokeLinecap="round"
                      />
                    </svg>
                    <span className="counter-value absolute font-mono font-bold text-sm text-white">
                      0%
                    </span>
                  </div>
                </div>

                {/* Skill Title & Subtitle */}
                <h3 className="text-lg font-bold text-white mb-1 tracking-tight">
                  {skill.name}
                </h3>
                <p className="text-xs font-mono text-aura-violetLight mb-3">
                  {skill.subtitle}
                </p>

                {/* Description */}
                <p className="text-zinc-400 text-xs leading-relaxed mb-4">
                  {skill.details}
                </p>

                {/* Key Metric Badge */}
                <div className="pt-3 border-t border-white/10 flex items-center justify-between">
                  <span className="text-[11px] font-mono text-zinc-500">Impact prouvé :</span>
                  <span className="text-xs font-mono font-semibold text-emerald-400 bg-emerald-950/40 px-2 py-0.5 rounded border border-emerald-800/40">
                    {skill.metrics}
                  </span>
                </div>
              </div>
            );
          })}

          {/* 6th Card: Vibe Coding Philosophy Banner */}
          <div className="card-aura p-6 rounded-[2rem] bg-gradient-to-br from-aura-card via-[#1A153A] to-aura-surface border border-aura-violet/40 flex flex-col justify-between shadow-card-glow">
            <div>
              <div className="w-12 h-12 rounded-2xl bg-gradient-to-tr from-cyan-500/20 to-aura-violet/30 border border-cyan-400/40 flex items-center justify-center text-cyan-300 mb-6 shadow-neon-subtle">
                <Sparkles className="w-6 h-6 animate-spin-slow" />
              </div>
              <h3 className="text-lg font-bold text-white mb-2">
                Approche Vibe Coding & IA
              </h3>
              <p className="text-zinc-300 text-xs leading-relaxed font-light mb-4">
                Pas de silos entre la réflexion technique et la mise en œuvre. L'IA accélère l'exécution logicielle et l'optimisation pour concentrer 100% de la bande passante sur l'impact business et la rentabilité.
              </p>
            </div>

            <div className="inline-flex items-center gap-2 text-xs font-mono text-aura-violetLight font-medium">
              <span>Construire vite • Mesurer juste • Scaler haut</span>
            </div>
          </div>
        </div>
      </section>

      {/* ==================================================== */}
      {/* F. FORMATION — "Les Fondations"                     */}
      {/* ==================================================== */}
      <section id="formation" className="py-24 px-6 max-w-5xl mx-auto">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="text-xs font-mono uppercase tracking-widest text-aura-violet font-semibold">
            04 / Fondations
          </span>
          <h2 className="font-serif italic text-4xl sm:text-5xl md:text-6xl text-white font-normal mt-2 mb-4">
            Parcours & Certifications
          </h2>
          <p className="text-zinc-400 text-sm sm:text-base font-light">
            L'apprentissage continu et l'exigence méthodologique au service de la performance.
          </p>
        </div>

        {/* Stacked Vertical Education Cards */}
        <div className="space-y-4">
          {personalInfo.education.map((edu, idx) => (
            <div
              key={idx}
              className="education-card card-aura p-6 sm:p-7 rounded-[2rem] bg-aura-surface/80 border border-aura-border hover:border-aura-borderHover backdrop-blur-md flex flex-col md:flex-row md:items-center justify-between gap-4"
            >
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-2xl bg-aura-violet/15 border border-aura-violet/30 flex items-center justify-center text-aura-violet shrink-0 mt-1 md:mt-0">
                  <GraduationCap className="w-6 h-6" />
                </div>
                <div>
                  <span className="font-mono text-xs text-aura-violet font-semibold block mb-1">
                    {edu.year}
                  </span>
                  <h3 className="text-lg sm:text-xl font-bold text-white mb-1">
                    {edu.degree}
                  </h3>
                  <p className="text-sm font-medium text-aura-violetLight">
                    {edu.institution}
                  </p>
                  <p className="text-xs text-zinc-400 mt-1 font-light">
                    {edu.description}
                  </p>
                </div>
              </div>

              <div className="hidden md:flex items-center text-xs font-mono text-zinc-500 uppercase tracking-wider">
                Certifié
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* ==================================================== */}
      {/* G. CONTACT — "Le Pont"                              */}
      {/* ==================================================== */}
      <section id="contact" className="py-24 px-6 relative max-w-7xl mx-auto overflow-hidden">
        {/* Glow ambient */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-aura-violet/15 rounded-full blur-[140px] pointer-events-none -z-10"></div>

        <div className="relative rounded-[3rem] bg-gradient-to-b from-[#14142B] to-[#0A0A14] border border-aura-violet/40 p-8 sm:p-14 shadow-neon">
          <div className="max-w-3xl mx-auto text-center">
            
            <span className="text-xs font-mono uppercase tracking-widest text-aura-violetLight font-semibold">
              05 / Connexion
            </span>
            <h2 className="font-serif italic text-4xl sm:text-6xl md:text-7xl text-white font-normal mt-2 mb-6">
              Travaillons ensemble
            </h2>
            <p className="text-zinc-300 text-base sm:text-lg font-light leading-relaxed mb-10 max-w-xl mx-auto">
              Vous avez un SaaS validé et souhaitez faire de Meta Ads votre levier d'acquisition rentable n°1 ? Structurons ensemble votre croissance.
            </p>

            {/* Quick Email Copy & Links */}
            <div className="flex flex-wrap items-center justify-center gap-4 mb-10">
              <button
                onClick={handleCopyEmail}
                className="btn-magnetic flex items-center gap-2 px-6 py-3 rounded-full bg-[#181830] border border-aura-violet/50 hover:border-aura-violet text-white text-sm font-mono shadow-md"
              >
                {copiedEmail ? (
                  <>
                    <Check className="w-4 h-4 text-emerald-400" />
                    <span className="text-emerald-400">Email copié dans le presse-papier !</span>
                  </>
                ) : (
                  <>
                    <Copy className="w-4 h-4 text-aura-violet" />
                    <span>{personalInfo.email}</span>
                  </>
                )}
              </button>

              <a
                href={`https://wa.me/242069990000?text=${encodeURIComponent("Bonjour Brell, j'aimerais discuter d'un projet data & acquisition.")}`}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-magnetic flex items-center gap-2 px-6 py-3 rounded-full bg-emerald-600/90 hover:bg-emerald-500 text-white text-sm font-medium shadow-md"
              >
                <Phone className="w-4 h-4" />
                <span>WhatsApp Direct</span>
              </a>
            </div>

            {/* Interactive Quick Message Form */}
            <form onSubmit={handleSendMessage} className="max-w-lg mx-auto mb-10 text-left">
              <div className="relative">
                <textarea
                  rows="3"
                  value={contactMessage}
                  onChange={(e) => setContactMessage(e.target.value)}
                  placeholder="Décrivez brièvement votre projet ou votre besoin en acquisition / reporting..."
                  className="w-full px-5 py-4 rounded-2xl bg-[#0F0F20] border border-aura-violet/30 text-white placeholder-zinc-500 text-sm focus:outline-none focus:border-aura-violet focus:ring-1 focus:ring-aura-violet transition-all resize-none shadow-inner"
                ></textarea>
                <button
                  type="submit"
                  className="btn-magnetic absolute right-3 bottom-4 flex items-center gap-1.5 px-4 py-2 rounded-xl bg-aura-violet hover:bg-aura-violetLight text-white text-xs font-semibold shadow-neon transition-all"
                >
                  <Send className="w-3.5 h-3.5" />
                  <span>Envoyer</span>
                </button>
              </div>
              {contactSent && (
                <p className="text-xs font-mono text-emerald-400 mt-2 text-center">
                  Votre client email a été ouvert avec le message prérempli !
                </p>
              )}
            </form>

            {/* Social / Direct Connect Links */}
            <div className="flex flex-wrap items-center justify-center gap-6 pt-6 border-t border-aura-violet/20">
              <a
                href={`mailto:${personalInfo.email}`}
                className="contact-link-item link-lift flex items-center gap-2 text-zinc-300 hover:text-aura-violet text-sm font-medium"
              >
                <Mail className="w-4 h-4 text-aura-violet" />
                <span>Email</span>
              </a>

              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                className="contact-link-item link-lift flex items-center gap-2 text-zinc-300 hover:text-aura-violet text-sm font-medium"
              >
                <Linkedin className="w-4 h-4 text-aura-violet" />
                <span>LinkedIn</span>
                <ExternalLink className="w-3 h-3 opacity-60" />
              </a>

              <a
                href="https://github.com"
                target="_blank"
                rel="noopener noreferrer"
                className="contact-link-item link-lift flex items-center gap-2 text-zinc-300 hover:text-aura-violet text-sm font-medium"
              >
                <Github className="w-4 h-4 text-aura-violet" />
                <span>GitHub</span>
                <ExternalLink className="w-3 h-3 opacity-60" />
              </a>
            </div>

            {/* Main CTA Download CV */}
            <div className="mt-10">
              <button
                onClick={handleDownloadCV}
                className="btn-magnetic inline-flex items-center gap-3 px-10 py-4 rounded-full bg-aura-violet hover:bg-aura-violetLight text-white font-bold text-base shadow-neon hover:shadow-neon-strong transition-all"
                id="contact-download-cv-btn"
              >
                <Download className="w-5 h-5" />
                <span>Télécharger mon CV au format texte / PDF</span>
              </button>
            </div>

          </div>
        </div>
      </section>

      {/* ==================================================== */}
      {/* H. PIED DE PAGE                                     */}
      {/* ==================================================== */}
      <footer className="rounded-t-[4rem] bg-[#07070D] border-t border-aura-violet/20 pt-16 pb-12 px-6">
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6">
          
          {/* Copyright & Vibe Coding attribution */}
          <div className="flex flex-col items-center md:items-start gap-1">
            <span className="font-bold text-base text-white tracking-tight">
              {personalInfo.name}
            </span>
            <span className="text-xs text-zinc-500 font-mono">
              Fait avec le vibe coding • {new Date().getFullYear()}
            </span>
          </div>

          {/* Quick Anchor Links */}
          <div className="flex items-center gap-6 text-xs text-zinc-400 font-mono">
            <a href="#about" className="hover:text-white transition-colors">À propos</a>
            <a href="#experience" className="hover:text-white transition-colors">Expérience</a>
            <a href="#competences" className="hover:text-white transition-colors">Compétences</a>
            <a href="#formation" className="hover:text-white transition-colors">Formation</a>
            <a href="#contact" className="hover:text-white transition-colors">Contact</a>
          </div>

          {/* Online status indicator with green pulsing dot */}
          <div className="flex items-center gap-2 px-3 py-1.5 rounded-full bg-[#12121E] border border-white/5 font-mono text-xs text-zinc-300">
            <span className="w-2 h-2 rounded-full bg-emerald-400 animate-ping"></span>
            <span>En ligne & disponible</span>
          </div>

        </div>
      </footer>

    </div>
  );
}
