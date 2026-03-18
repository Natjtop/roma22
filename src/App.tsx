/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect, useRef } from 'react';
import { BrowserRouter, Routes, Route, Link, useLocation } from 'react-router-dom';
import { motion, AnimatePresence, useScroll, useTransform } from 'motion/react';
import { 
  ArrowRight, 
  TrendingUp, 
  Zap, 
  BarChart3, 
  ChevronDown,
  Menu,
  X,
  ArrowUpRight,
  Activity,
  Plus,
  Minus,
  Maximize2,
  Lock,
  CheckCircle2,
  Layers
} from 'lucide-react';
import { Button } from './components/ui/Button';
import { Card } from './components/ui/Card';
import { cn } from './lib/utils';

import { Product } from './pages/Product';
import { Solutions } from './pages/Solutions';
import { Resources } from './pages/Resources';
import { Company } from './pages/Company';
import { Pricing } from './pages/Pricing';
import { Login } from './pages/Login';
import { Signup } from './pages/Signup';

const ScrollToTop = () => {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return null;
};

const navData = {
  product: [
    { name: "Subscription Analytics", desc: "Monitor MRR, ARR and growth metrics", href: "/product" },
    { name: "Churn Prediction", desc: "AI-powered customer risk assessment", href: "/product" },
    { name: "Payment Recovery", desc: "Automated retry strategies", href: "/product" },
    { name: "Workflows", desc: "Automate retention strategies", href: "/product" },
    { name: "Integrations", desc: "Connect your billing stack", href: "/product" }
  ],
  solutions: [
    { name: "For Founders", desc: "Protect capital and company valuation", href: "/solutions" },
    { name: "For Finance", desc: "Accurate revenue forecasting", href: "/solutions" },
    { name: "For Customer Success", desc: "Focus on at-risk accounts", href: "/solutions" },
    { name: "For RevOps", desc: "Unify revenue data", href: "/solutions" }
  ],
  resources: [
    { name: "Documentation", desc: "Technical guides and setup", href: "/resources" },
    { name: "API Reference", desc: "Build your own integrations", href: "/resources" },
    { name: "Blog", desc: "Insights on SaaS growth", href: "/resources" },
    { name: "Case Studies", desc: "How leaders use RetainIQ", href: "/resources" },
    { name: "Webinars", desc: "Learn from retention experts", href: "/resources" }
  ],
  company: [
    { name: "About Us", desc: "Our mission and team", href: "/company" },
    { name: "Careers", desc: "Join the revolution", href: "/company" },
    { name: "News", desc: "Press releases and updates", href: "/company" },
    { name: "Partners", desc: "Agencies and tech partners", href: "/company" }
  ]
};

const NavDropdown = ({ title, items }: { title: string, items: { name: string, desc: string, href: string }[] }) => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div 
      className="relative"
      onMouseEnter={() => setIsOpen(true)}
      onMouseLeave={() => setIsOpen(false)}
    >
      <button className="text-[11px] uppercase tracking-[0.2em] font-medium text-ink-muted hover:text-ink transition-colors flex items-center gap-1 py-4 cursor-pointer">
        {title} <ChevronDown className={cn("w-3 h-3 transition-transform duration-300", isOpen && "rotate-180")} />
      </button>
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 10, filter: "blur(4px)" }}
            animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
            exit={{ opacity: 0, y: 10, filter: "blur(4px)" }}
            transition={{ duration: 0.2 }}
            className="absolute top-full left-0 w-[320px] bg-white border border-line shadow-2xl rounded-xl p-2 flex flex-col z-[100]"
          >
            {items.map((item, i) => (
              <Link key={i} to={item.href} className="p-4 hover:bg-paper rounded-lg transition-colors group flex flex-col gap-1 cursor-pointer">
                <span className="text-sm font-medium text-ink group-hover:text-brand transition-colors">{item.name}</span>
                <span className="text-xs text-ink-muted font-light">{item.desc}</span>
              </Link>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

const MobileNavSection = ({ title, items }: { title: string, items: { name: string, desc: string, href: string }[] }) => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div className="flex flex-col border-b border-line/50 last:border-0">
      <button 
        onClick={() => setIsOpen(!isOpen)}
        className="flex items-center justify-between py-5 text-xl font-display font-medium text-ink"
      >
        {title}
        <ChevronDown className={cn("w-5 h-5 text-ink-muted transition-transform duration-300", isOpen && "rotate-180")} />
      </button>
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            className="overflow-hidden"
          >
            <div className="flex flex-col gap-5 pb-6 pt-2 pl-4 border-l-2 border-brand/20 ml-2">
              {items.map(i => (
                <Link key={i.name} to={i.href} className="flex flex-col gap-1 group">
                  <span className="text-lg text-ink group-hover:text-brand transition-colors">{i.name}</span>
                  <span className="text-sm text-ink-muted font-light">{i.desc}</span>
                </Link>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close mobile menu on route change
  useEffect(() => {
    setMobileMenuOpen(false);
  }, [location.pathname]);

  // Prevent scrolling when mobile menu is open
  useEffect(() => {
    if (mobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => { document.body.style.overflow = 'unset'; };
  }, [mobileMenuOpen]);

  return (
    <>
      <nav className={cn(
        "fixed top-0 left-0 right-0 z-[100] transition-all duration-500 border-b",
        isScrolled || mobileMenuOpen ? "bg-white/98 backdrop-blur-xl border-line py-4 shadow-sm" : "bg-transparent border-transparent py-6"
      )}>
        <div className="max-w-[1800px] mx-auto px-6 lg:px-8 flex items-center justify-between relative z-50">
          <div className="flex items-center gap-12">
            <Link to="/" className="flex items-center gap-2 cursor-pointer">
              <span className="font-display font-bold text-2xl tracking-tighter text-ink">RETAINIQ</span>
            </Link>
            
            <div className="hidden lg:flex items-center gap-8">
              <NavDropdown title="Product" items={navData.product} />
              <NavDropdown title="Solutions" items={navData.solutions} />
              <NavDropdown title="Resources" items={navData.resources} />
              <NavDropdown title="Company" items={navData.company} />
              <Link to="/pricing" className="text-[11px] uppercase tracking-[0.2em] font-medium text-ink-muted hover:text-ink transition-colors py-4 cursor-pointer">
                Pricing
              </Link>
            </div>
          </div>

          <div className="hidden lg:flex items-center gap-6">
            <Link to="/login" className="text-[11px] uppercase tracking-[0.2em] font-medium text-ink-muted hover:text-ink cursor-pointer">Log In</Link>
            <Link to="/signup">
              <Button variant="outline" size="sm">Get Started</Button>
            </Link>
          </div>

          <button 
            className="lg:hidden p-2 -mr-2 text-ink cursor-pointer transition-transform duration-300"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </nav>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20, filter: "blur(10px)" }}
            animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
            exit={{ opacity: 0, y: -20, filter: "blur(10px)" }}
            transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
            className="fixed inset-0 z-[90] bg-white pt-[80px] px-6 overflow-y-auto lg:hidden shadow-2xl"
          >
            <div className="flex flex-col pb-20 pt-8 max-w-md mx-auto h-full min-h-[calc(100vh-80px)]">
              <div className="flex flex-col flex-1">
                <MobileNavSection title="Product" items={navData.product} />
                <MobileNavSection title="Solutions" items={navData.solutions} />
                <MobileNavSection title="Resources" items={navData.resources} />
                <MobileNavSection title="Company" items={navData.company} />
                
                <div className="flex flex-col border-b border-line/50 last:border-0">
                  <Link to="/pricing" className="flex items-center justify-between py-5 text-xl font-display font-medium text-ink hover:text-brand transition-colors">
                    Pricing
                    <ArrowRight className="w-5 h-5 text-ink-muted" />
                  </Link>
                </div>
              </div>
              
              <div className="flex flex-col gap-4 pt-12 mt-auto">
                <Link to="/login" className="w-full">
                  <Button variant="outline" className="w-full py-6 text-lg">Log In</Button>
                </Link>
                <Link to="/signup" className="w-full">
                  <Button className="w-full py-6 text-lg">Start Free Trial</Button>
                </Link>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

const Hero = () => {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"]
  });

  const y = useTransform(scrollYProgress, [0, 1], [0, 200]);
  const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);

  return (
    <section ref={containerRef} className="relative pt-20 lg:pt-20 border-b border-line">
      <div className="grid grid-cols-1 lg:grid-cols-12 max-w-[1800px] mx-auto w-full">
        {/* Left Column: Typography & Intent */}
        <div className="lg:col-span-7 flex flex-col pt-4 lg:pt-8 pb-8 lg:pb-12 px-8 lg:px-20 border-r border-line relative z-10">
          <motion.div
            initial="hidden"
            animate="show"
            variants={{
              hidden: { opacity: 0 },
              show: { opacity: 1, transition: { staggerChildren: 0.1 } }
            }}
          >
            <motion.div variants={{ hidden: { opacity: 0, y: 20 }, show: { opacity: 1, y: 0, transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] } } }} className="micro-label mb-4 flex items-center gap-4">
              <span className="w-2 h-2 bg-brand rounded-full animate-pulse" />
              Intelligent Layer for SaaS
            </motion.div>
            
            <motion.h1 variants={{ hidden: { opacity: 0, y: 20 }, show: { opacity: 1, y: 0, transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] } } }} className="oversized-number mb-6">
              STOP CHURN<br />
              <span className="text-ink/20">AT THE SOURCE.</span>
            </motion.h1>
            
            <motion.div variants={{ hidden: { opacity: 0, y: 20 }, show: { opacity: 1, y: 0, transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] } } }} className="max-w-xl">
              <p className="text-lg lg:text-xl text-ink-muted mb-6 leading-relaxed font-light">
                RetainIQ is a predictive analytics platform that identifies revenue loss risks before they become reality. We don't just track churn; we prevent it.
              </p>
              
              <div className="flex flex-wrap gap-4">
                <Link to="/signup">
                  <Button size="lg" className="group">
                    Implement Intelligence <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  </Button>
                </Link>
                <div className="flex items-center gap-4 px-6 border border-line">
                  <span className="micro-label">Trusted by</span>
                  <div className="flex -space-x-2">
                    {[1,2,3].map(i => (
                      <div key={i} className="w-8 h-8 rounded-full bg-paper border-2 border-white" />
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>
          </motion.div>

          {/* Vertical Rail Text */}
          <div className="hidden lg:block absolute left-4 bottom-8 vertical-text micro-label opacity-30">
            ESTABLISHED 2026 / PREDICTIVE ENGINE V4.0
          </div>
        </div>

        {/* Right Column: Visual & Data */}
        <div className="lg:col-span-5 bg-paper-bright flex flex-col relative overflow-hidden">
          <div className="flex-1 p-6 lg:p-10 flex flex-col justify-center">
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 1, delay: 0.2 }}
              className="relative"
            >
              {/* Technical Widget 1 */}
              <Card className="p-6 lg:p-8 mb-6 relative z-10">
                <div className="flex justify-between items-start mb-8">
                  <div>
                    <div className="micro-label mb-2">Net Revenue Retention</div>
                    <div className="text-4xl font-display font-semibold">114.2%</div>
                  </div>
                  <div className="w-12 h-12 border border-line flex items-center justify-center">
                    <TrendingUp className="w-5 h-5 text-brand" />
                  </div>
                </div>
                <div className="h-24 flex items-end gap-1">
                  {[40, 60, 45, 70, 85, 65, 90, 100, 80, 95].map((h, i) => (
                    <motion.div 
                      key={i}
                      initial={{ height: 0 }}
                      animate={{ height: `${h}%` }}
                      transition={{ delay: 0.5 + i * 0.05, duration: 0.8 }}
                      className="flex-1 bg-brand/10 hover:bg-brand transition-colors cursor-pointer"
                    />
                  ))}
                </div>
              </Card>

              {/* Technical Widget 2: The "IQ" Part */}
              <div className="grid grid-cols-2 gap-4 lg:gap-6">
                <Card className="p-5 bg-ink text-white">
                  <div className="micro-label text-white/40 mb-4">Risk Probability</div>
                  <div className="text-3xl font-display mb-2">0.042</div>
                  <div className="text-[10px] font-mono text-brand uppercase tracking-widest">Model Confidence: 98%</div>
                </Card>
                <Card className="p-5 border-dashed">
                  <div className="micro-label mb-4">Active Playbooks</div>
                  <div className="flex items-center gap-2">
                    <div className="w-2 h-2 bg-emerald-500 rounded-full" />
                    <span className="text-sm font-medium">Auto-Recovery</span>
                  </div>
                </Card>
              </div>

              {/* Decorative Background Grid */}
              <div className="absolute inset-0 -m-20 pointer-events-none opacity-[0.03]" 
                   style={{ backgroundImage: 'radial-gradient(#000 1px, transparent 1px)', backgroundSize: '20px 20px' }} />
            </motion.div>
          </div>

          {/* Bottom Status Bar */}
          <div className="h-16 border-t border-line flex items-center px-12 justify-between">
            <div className="micro-label">System Status: Optimal</div>
            <div className="flex gap-4">
              <div className="w-2 h-2 bg-emerald-500 rounded-full" />
              <div className="w-2 h-2 bg-emerald-500 rounded-full" />
              <div className="w-2 h-2 bg-emerald-500 rounded-full" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

const SectionHeader = ({ number, title, subtitle }: { number: string, title: string, subtitle: string }) => (
  <div className="mb-24">
    <div className="flex items-baseline gap-6 mb-8">
      <span className="font-display text-6xl font-light text-ink/10">{number}</span>
      <h2 className="text-4xl font-display font-semibold tracking-tight uppercase">{title}</h2>
    </div>
    <p className="text-xl text-ink-muted max-w-2xl font-light leading-relaxed">
      {subtitle}
    </p>
  </div>
);

const FeatureGrid = () => {
  const features = [
    {
      id: "01",
      title: "PREDICTIVE SCORING",
      desc: "Our engine processes over 100 behavioral signals to assign a real-time risk score to every account.",
      icon: <Activity className="w-5 h-5" />
    },
    {
      id: "02",
      title: "SMART RECOVERY",
      desc: "Automate payment collection with precision. We use machine learning to determine the optimal retry time for every card.",
      icon: <Zap className="w-5 h-5" />
    },
    {
      id: "03",
      title: "COHORT INTELLIGENCE",
      desc: "Visualize retention in any dimension. Identify which segments are growing and which are losing customers.",
      icon: <BarChart3 className="w-5 h-5" />
    },
    {
      id: "04",
      title: "ENTERPRISE SECURITY",
      desc: "SOC2 Type II compliant. Your data is encrypted at rest and in transit using bank-grade protocols.",
      icon: <Lock className="w-5 h-5" />
    }
  ];

  return (
    <section className="py-40 bg-white border-y border-line">
      <div className="max-w-[1800px] mx-auto px-8 lg:px-20">
        <SectionHeader 
          number="01" 
          title="Intelligent Layer" 
          subtitle="We built the world's most advanced retention engine. This isn't just a dashboard; it's a decision-making machine."
        />

        <motion.div 
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-100px" }}
          variants={{
            hidden: { opacity: 0 },
            show: { opacity: 1, transition: { staggerChildren: 0.1 } }
          }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 border-l border-t border-line"
        >
          {features.map((f) => (
            <motion.div 
              key={f.id} 
              variants={{
                hidden: { opacity: 0, y: 20 },
                show: { opacity: 1, y: 0, transition: { duration: 0.6 } }
              }}
              className="p-12 border-r border-b border-line group hover:bg-paper transition-colors duration-500"
            >
              <div className="micro-label mb-12 text-ink/20 group-hover:text-brand transition-colors">{f.id}</div>
              <div className="mb-8 w-10 h-10 border border-line flex items-center justify-center group-hover:border-brand group-hover:bg-brand group-hover:text-white transition-all">
                {f.icon}
              </div>
              <h3 className="text-lg font-display font-semibold mb-4 tracking-wider">{f.title}</h3>
              <p className="text-sm text-ink-muted leading-relaxed font-light">
                {f.desc}
              </p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

const DataVisualization = () => {
  return (
    <section className="py-40 bg-paper overflow-hidden">
      <div className="max-w-[1800px] mx-auto px-8 lg:px-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-32 items-center">
          <div>
            <SectionHeader 
              number="02" 
              title="Deep Visibility" 
              subtitle="Understand the 'Why' behind your churn. Our platform connects the dots between product usage, payment events, and customer sentiment."
            />
            
            <motion.div 
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, margin: "-100px" }}
              variants={{
                hidden: { opacity: 0 },
                show: { opacity: 1, transition: { staggerChildren: 0.2 } }
              }}
              className="space-y-12"
            >
              {[
                { label: "Behavioral Triggers", value: "92%", desc: "Accuracy in predicting voluntary cancellations." },
                { label: "Recovery Efficiency", value: "84%", desc: "Average increase in failed payment recovery rates." },
              ].map((item, i) => (
                <motion.div 
                  key={i} 
                  variants={{
                    hidden: { opacity: 0, x: -20 },
                    show: { opacity: 1, x: 0, transition: { duration: 0.6 } }
                  }}
                  className="flex gap-8 items-start"
                >
                  <div className="text-4xl font-display font-semibold text-brand">{item.value}</div>
                  <div>
                    <div className="font-semibold mb-1 uppercase tracking-widest text-xs">{item.label}</div>
                    <p className="text-sm text-ink-muted font-light">{item.desc}</p>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </div>

          <div className="relative">
            <div className="aspect-video bg-white border border-line p-1 flex items-center justify-center relative overflow-hidden">
              {/* Abstract Data Visualization */}
              <div className="absolute inset-0 opacity-[0.02]" 
                   style={{ backgroundImage: 'linear-gradient(#000 1px, transparent 1px), linear-gradient(90deg, #000 1px, transparent 1px)', backgroundSize: '40px 40px' }} />
              
              <div className="w-full h-full p-12 flex flex-col justify-between relative z-10">
                <motion.div 
                  initial={{ opacity: 0, y: -10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6 }}
                  className="flex justify-between items-center"
                >
                  <div className="micro-label">Real-time Stream</div>
                  <div className="flex gap-2">
                    <div className="w-1.5 h-1.5 bg-brand rounded-full" />
                    <div className="w-1.5 h-1.5 bg-brand/20 rounded-full" />
                  </div>
                </motion.div>
                
                <div className="flex-1 flex items-center justify-center">
                  <motion.div 
                    initial={{ scale: 0.8, opacity: 0 }}
                    whileInView={{ scale: 1, opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 1, ease: "easeOut" }}
                    className="relative w-64 h-64"
                  >
                    <motion.div 
                      animate={{ rotate: 360 }}
                      transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                      className="absolute inset-0 border border-dashed border-line rounded-full"
                    />
                    <motion.div 
                      animate={{ rotate: -360 }}
                      transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
                      className="absolute inset-4 border border-line rounded-full opacity-20"
                    />
                    <div className="absolute inset-0 flex items-center justify-center">
                      <div className="text-center">
                        <div className="text-4xl font-display font-bold">IQ</div>
                        <div className="micro-label text-[8px]">Processing</div>
                      </div>
                    </div>
                  </motion.div>
                </div>

                <div className="grid grid-cols-3 gap-4">
                  {[1,2,3].map(i => (
                    <div key={i} className="h-1 bg-line overflow-hidden">
                      <motion.div 
                        animate={{ x: ['-100%', '100%'] }}
                        transition={{ duration: 2, repeat: Infinity, delay: i * 0.5 }}
                        className="h-full w-1/2 bg-brand"
                      />
                    </div>
                  ))}
                </div>
              </div>
            </div>
            
            {/* Floating Data Points */}
            <div className="absolute -top-12 -right-12 p-6 bg-ink text-white micro-label text-[8px] tracking-[0.3em]">
              LATENCY: 12MS<br />
              THROUGHPUT: 4.2GB/S
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

const WorkflowSection = () => {
  return (
    <section className="py-40 bg-white border-b border-line">
      <div className="max-w-[1800px] mx-auto px-8 lg:px-20">
        <SectionHeader 
          number="03" 
          title="Automated Workflows" 
          subtitle="Don't just flag at-risk customers. Automatically trigger the right retention playbook before they even think about canceling."
        />
        
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {[
            {
              title: "Identification",
              desc: "AI detects a drop in core feature usage over a 14-day period.",
              action: "Risk: High",
              color: "text-amber-500",
              delay: 0.1
            },
            {
              title: "Trigger",
              desc: "RetainIQ automatically routes the account to a dedicated Customer Success Manager.",
              action: "Slack Notification",
              color: "text-brand",
              delay: 0.3
            },
            {
              title: "Engagement",
              desc: "A personalized re-engagement sequence is deployed via your marketing automation tool.",
              action: "Email Sequence Active",
              color: "text-emerald-500",
              delay: 0.5
            }
          ].map((step, i) => (
            <motion.div 
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6, delay: step.delay }}
              className="p-10 border border-line hover:shadow-xl transition-shadow bg-paper-bright relative overflow-hidden group"
            >
              <div className="absolute top-0 left-0 w-full h-1 bg-line group-hover:bg-brand transition-colors" />
              <div className="micro-label mb-8 opacity-50">Step 0{i + 1}</div>
              <h3 className="text-2xl font-display font-semibold mb-4">{step.title}</h3>
              <p className="text-ink-muted font-light mb-12">{step.desc}</p>
              <div className={cn("micro-label flex items-center gap-2", step.color)}>
                <div className="w-2 h-2 rounded-full bg-current animate-pulse" />
                {step.action}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

const IntegrationsSection = () => {
  return (
    <section className="py-40 bg-ink text-white overflow-hidden">
      <div className="max-w-[1800px] mx-auto px-8 lg:px-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
          <div>
            <div className="mb-24">
              <div className="flex items-baseline gap-6 mb-8">
                <span className="font-display text-6xl font-light text-white/10">04</span>
                <h2 className="text-4xl font-display font-semibold tracking-tight uppercase">Ecosystem</h2>
              </div>
              <p className="text-xl text-white/60 max-w-2xl font-light leading-relaxed">
                RetainIQ sits at the center of your revenue stack. We ingest data from your billing provider, product analytics, and CRM to create a unified view of customer health.
              </p>
            </div>
            
            <div className="flex flex-wrap gap-4">
              {['Stripe', 'Salesforce', 'HubSpot', 'Segment', 'Mixpanel', 'Zendesk', 'Slack', 'Snowflake'].map((integration, i) => (
                <motion.div 
                  key={integration}
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.05 }}
                  className="px-6 py-3 border border-white/10 rounded-full text-sm font-medium hover:bg-white hover:text-ink transition-colors cursor-pointer"
                >
                  {integration}
                </motion.div>
              ))}
            </div>
          </div>
          
          <div className="relative h-[600px] border border-white/10 rounded-3xl overflow-hidden bg-white/5 flex items-center justify-center">
            <div className="absolute inset-0 opacity-20" style={{ backgroundImage: 'radial-gradient(circle at center, white 1px, transparent 1px)', backgroundSize: '30px 30px' }} />
            
            <motion.div 
              animate={{ rotate: 360 }}
              transition={{ duration: 40, repeat: Infinity, ease: "linear" }}
              className="relative w-[400px] h-[400px]"
            >
              {/* Center Node */}
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-24 h-24 bg-brand rounded-full flex items-center justify-center shadow-[0_0_50px_rgba(0,85,255,0.5)] z-20">
                <span className="font-display font-bold text-xl">IQ</span>
              </div>
              
              {/* Orbiting Nodes */}
              {[0, 60, 120, 180, 240, 300].map((deg, i) => (
                <div 
                  key={deg}
                  className="absolute top-1/2 left-1/2 w-full h-full -translate-x-1/2 -translate-y-1/2"
                  style={{ transform: `translate(-50%, -50%) rotate(${deg}deg)` }}
                >
                  <motion.div 
                    animate={{ rotate: -360 }}
                    transition={{ duration: 40, repeat: Infinity, ease: "linear" }}
                    className="absolute top-0 left-1/2 -translate-x-1/2 w-16 h-16 bg-white/10 backdrop-blur-md border border-white/20 rounded-2xl flex items-center justify-center"
                  >
                    <div className="w-2 h-2 bg-white rounded-full" />
                  </motion.div>
                </div>
              ))}
              
              {/* Connecting Lines */}
              <div className="absolute inset-0 border border-white/10 rounded-full" />
              <div className="absolute inset-12 border border-white/5 rounded-full" />
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

const Footer = () => (
  <footer className="bg-white border-t border-line py-20">
    <div className="max-w-[1800px] mx-auto px-8 lg:px-20">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-20 mb-20">
        <div className="lg:col-span-6">
          <div className="font-display font-bold text-2xl tracking-tighter mb-8">RETAINIQ</div>
          <p className="text-xl text-ink-muted font-light max-w-md leading-relaxed">
            The intelligent layer for the modern subscription economy. Built for teams that value precision over guesswork.
          </p>
        </div>
        
        <div className="lg:col-span-6 grid grid-cols-2 md:grid-cols-4 gap-12">
          {[
            { title: "Product", links: ["Intelligence", "Recovery", "Analytics", "Security", "Integrations", "Pricing"] },
            { title: "Solutions", links: ["For Founders", "For Finance", "For CS", "For RevOps", "Enterprise"] },
            { title: "Company", links: ["About Us", "Careers", "News", "Contact", "Partners"] },
            { title: "Resources", links: ["Documentation", "API Reference", "Status", "Privacy", "Terms", "Blog"] }
          ].map((col) => (
            <div key={col.title}>
              <div className="micro-label mb-8">{col.title}</div>
              <ul className="space-y-4">
                {col.links.map(link => (
                  <li key={link}>
                    <Link to={`/${link.toLowerCase().replace(/\s+/g, '-')}`} className="text-sm text-ink-muted hover:text-brand transition-colors font-light cursor-pointer">{link}</Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
      
      <div className="pt-12 border-t border-line flex flex-col md:flex-row justify-between items-center gap-8">
        <div className="micro-label opacity-40">© 2026 RETAINIQ INC. ALL RIGHTS RESERVED.</div>
        <div className="flex gap-12">
          <a href="#" className="micro-label opacity-40 hover:opacity-100 transition-opacity cursor-pointer">Twitter</a>
          <a href="#" className="micro-label opacity-40 hover:opacity-100 transition-opacity cursor-pointer">LinkedIn</a>
          <a href="#" className="micro-label opacity-40 hover:opacity-100 transition-opacity cursor-pointer">GitHub</a>
        </div>
      </div>
    </div>
  </footer>
);

const PlaceholderPage = ({ title }: { title: string }) => (
  <main className="min-h-screen pt-32 pb-20">
    <div className="max-w-[1800px] mx-auto px-8 lg:px-20">
      <div className="max-w-4xl mb-20">
        <div className="micro-label mb-6 flex items-center gap-4">
          <span className="w-2 h-2 bg-brand rounded-full" />
          RetainIQ {title}
        </div>
        <h1 className="oversized-number mb-8">{title.toUpperCase()}</h1>
        <p className="text-xl lg:text-2xl text-ink-muted font-light leading-relaxed">
          Explore our {title.toLowerCase()} section to see how RetainIQ is revolutionizing subscription analytics and churn prevention for modern SaaS companies.
        </p>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {[1, 2, 3, 4, 5, 6].map((i) => (
          <div key={i} className="glass-panel p-8 flex flex-col gap-4 hover:border-brand/30 transition-colors cursor-pointer group">
            <div className="w-12 h-12 rounded-full bg-brand/10 flex items-center justify-center text-brand mb-4 group-hover:scale-110 transition-transform">
              <Layers className="w-5 h-5" />
            </div>
            <h3 className="text-xl font-medium">Enterprise {title} Module {i}</h3>
            <p className="text-ink-muted leading-relaxed">
              Advanced capabilities designed to help your team maximize revenue retention and automate complex workflows at scale.
            </p>
            <div className="mt-auto pt-6 flex items-center gap-2 text-sm font-medium text-brand">
              Learn more <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </div>
          </div>
        ))}
      </div>
    </div>
  </main>
);

const Home = () => (
  <main>
    <Hero />
    
    {/* Marquee / Social Proof */}
    <div className="py-12 border-y border-line bg-white overflow-hidden flex whitespace-nowrap">
      <div className="flex animate-marquee gap-20 items-center">
        {[1,2,3,4,5,6,7,8].map(i => (
          <div key={i} className="flex items-center gap-4">
            <div className="w-2 h-2 bg-brand rounded-full" />
            <span className="micro-label opacity-40">Trusted by category leaders</span>
            <span className="font-display font-bold text-xl tracking-tighter opacity-20">STRIPE</span>
            <span className="font-display font-bold text-xl tracking-tighter opacity-20">LINEAR</span>
            <span className="font-display font-bold text-xl tracking-tighter opacity-20">VERCEL</span>
          </div>
        ))}
      </div>
    </div>

    <FeatureGrid />
    <DataVisualization />
    <WorkflowSection />
    <IntegrationsSection />

    {/* Final CTA */}
    <section className="py-60 bg-ink text-white relative overflow-hidden">
      <motion.div 
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        className="max-w-[1800px] mx-auto px-8 lg:px-20 text-center relative z-10"
      >
        <div className="micro-label text-brand mb-12">Ready to implement?</div>
        <h2 className="oversized-number mb-16">
          PROTECT YOUR REVENUE<br />FROM CHURN.
        </h2>
        <div className="flex flex-col md:flex-row items-center justify-center gap-8">
          <Button size="lg" className="bg-white text-ink hover:bg-brand hover:text-white w-full md:w-auto">
            Start for free
          </Button>
          <Button variant="outline" size="lg" className="border-white text-white hover:bg-white hover:text-ink w-full md:w-auto">
            Talk to an expert
          </Button>
        </div>
      </motion.div>
      
      {/* Abstract Background */}
      <div className="absolute inset-0 opacity-10 pointer-events-none">
        <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-brand via-transparent to-transparent blur-3xl" />
      </div>
    </section>
  </main>
);

const PageTransition = ({ children }: { children: React.ReactNode }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20, scale: 0.98, filter: "blur(8px)" }}
      animate={{ opacity: 1, y: 0, scale: 1, filter: "blur(0px)" }}
      exit={{ opacity: 0, y: -20, scale: 0.98, filter: "blur(8px)" }}
      transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
      className="w-full h-full flex flex-col flex-1"
    >
      {children}
    </motion.div>
  );
};

const AnimatedRoutes = () => {
  const location = useLocation();
  return (
    <AnimatePresence mode="wait" onExitComplete={() => window.scrollTo(0, 0)}>
      <Routes location={location}>
        <Route path="/" element={<PageTransition><Home /></PageTransition>} />
        <Route path="/product" element={<PageTransition><Product /></PageTransition>} />
        <Route path="/solutions" element={<PageTransition><Solutions /></PageTransition>} />
        <Route path="/resources" element={<PageTransition><Resources /></PageTransition>} />
        <Route path="/company" element={<PageTransition><Company /></PageTransition>} />
        <Route path="/pricing" element={<PageTransition><Pricing /></PageTransition>} />
        <Route path="/login" element={<PageTransition><Login /></PageTransition>} />
        <Route path="/signup" element={<PageTransition><Signup /></PageTransition>} />
        <Route path="*" element={<PageTransition><PlaceholderPage title="Not Found" /></PageTransition>} />
      </Routes>
    </AnimatePresence>
  );
};

const Layout = () => {
  const location = useLocation();
  const isAuthPage = ['/login', '/signup'].includes(location.pathname);

  return (
    <div className="min-h-screen font-sans selection:bg-brand selection:text-white flex flex-col">
      {!isAuthPage && <Navbar />}
      <div className="flex-1 flex flex-col">
        <AnimatedRoutes />
      </div>
      {!isAuthPage && <Footer />}
    </div>
  );
};

export default function App() {
  return (
    <BrowserRouter>
      <ScrollToTop />
      <Layout />
    </BrowserRouter>
  );
}
