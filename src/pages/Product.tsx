import React from 'react';
import { motion } from 'motion/react';
import { Activity, Zap, BarChart3, Shield, ArrowRight, CheckCircle2, BrainCircuit, LineChart, RefreshCcw, Database, Lock, Users } from 'lucide-react';
import { Button } from '../components/ui/Button';

export const Product = () => {
  return (
    <main className="min-h-screen pt-32 pb-20">
      {/* Hero */}
      <section className="max-w-[1800px] mx-auto px-8 lg:px-20 mb-32">
        <div className="max-w-4xl">
          <div className="micro-label mb-6 flex items-center gap-4">
            <span className="w-2 h-2 bg-brand rounded-full" />
            Product Overview
          </div>
          <h1 className="text-6xl lg:text-8xl font-display font-semibold tracking-tight mb-8">
            The Intelligence Layer for Subscriptions.
          </h1>
          <p className="text-xl lg:text-2xl text-ink-muted font-light leading-relaxed mb-12">
            RetainIQ connects to your billing to predict churn, automate payment recovery, and maximize customer LTV. Stop guessing, start retaining.
          </p>
          <div className="flex flex-wrap gap-4">
            <Button size="lg">Start for free</Button>
            <Button variant="outline" size="lg">View documentation</Button>
          </div>
        </div>
      </section>

      {/* Abstract UI Preview */}
      <section className="max-w-[1800px] mx-auto px-8 lg:px-20 mb-40">
        <motion.div 
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="w-full aspect-[21/9] bg-ink rounded-3xl overflow-hidden relative border border-line shadow-2xl flex items-center justify-center"
        >
          <div className="absolute inset-0 opacity-20" style={{ backgroundImage: 'radial-gradient(circle at center, white 1px, transparent 1px)', backgroundSize: '30px 30px' }} />
          <div className="relative z-10 text-center text-white">
            <div className="w-24 h-24 border border-white/20 rounded-full flex items-center justify-center mx-auto mb-8 relative">
              <motion.div animate={{ rotate: 360 }} transition={{ duration: 10, repeat: Infinity, ease: "linear" }} className="absolute inset-0 border-t border-brand rounded-full" />
              <Activity className="w-8 h-8 text-brand" />
            </div>
            <h3 className="text-3xl font-display font-medium tracking-tight">Real-time Data Processing</h3>
            <p className="text-white/60 mt-4 max-w-md mx-auto font-light">Processing millions of subscription events every second to build predictive models.</p>
          </div>
        </motion.div>
      </section>

      {/* How it Works Section */}
      <section className="py-32 bg-ink text-white overflow-hidden">
        <div className="max-w-[1800px] mx-auto px-8 lg:px-20">
          <div className="text-center max-w-3xl mx-auto mb-20">
            <div className="micro-label text-brand mb-6">How it works</div>
            <h2 className="text-4xl lg:text-5xl font-display font-semibold mb-6">From data to saved revenue in 3 steps.</h2>
            <p className="text-xl text-white/60 font-light">The integration and platform operation process is simplified for fast results.</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12 relative">
            <div className="hidden md:block absolute top-24 left-[15%] right-[15%] h-0.5 bg-gradient-to-r from-brand/0 via-brand/50 to-brand/0" />
            
            {[
              { step: "01", title: "Connect Sources", desc: "Integrate Stripe, Chargebee, or other billing in one click. We automatically sync historical data." },
              { step: "02", title: "Model Training", desc: "Our AI analyzes your data within 24 hours, creating unique predictive models for your business." },
              { step: "03", title: "Action Automation", desc: "Set up recovery rules and retention campaigns. The system starts working on autopilot." }
            ].map((item, i) => (
              <motion.div 
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.2 }}
                className="relative z-10 flex flex-col items-center text-center"
              >
                <div className="w-16 h-16 rounded-full bg-ink border-2 border-brand flex items-center justify-center text-2xl font-display font-bold text-brand mb-8 shadow-[0_0_30px_rgba(0,85,255,0.3)]">
                  {item.step}
                </div>
                <h3 className="text-2xl font-semibold mb-4">{item.title}</h3>
                <p className="text-white/60 leading-relaxed">{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Deep Dive 1: Predictive Engine */}
      <section className="py-32 bg-paper border-y border-line overflow-hidden">
        <div className="max-w-[1800px] mx-auto px-8 lg:px-20">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
            <motion.div 
              initial={{ opacity: 0, x: -40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <div className="micro-label mb-6 text-brand">Predictive Engine</div>
              <h2 className="text-4xl lg:text-5xl font-display font-semibold mb-8">Know who will leave before they do.</h2>
              <p className="text-xl text-ink-muted font-light leading-relaxed mb-8">
                Our machine learning models analyze over 150 behavioral signals — from login frequency to feature usage — to identify at-risk accounts before they click "cancel".
              </p>
              <ul className="space-y-4 mb-10">
                {["Analysis of 150+ behavioral signals", "92% prediction accuracy", "Real-time risk assessment", "Custom ML models for cohorts"].map((item, i) => (
                  <li key={i} className="flex items-center gap-3 text-ink font-medium">
                    <CheckCircle2 className="w-5 h-5 text-brand shrink-0" />
                    {item}
                  </li>
                ))}
              </ul>
              <Button variant="outline">Explore ML capabilities</Button>
            </motion.div>
            <div className="relative h-[500px] bg-white border border-line p-8 flex flex-col justify-center">
              <div className="absolute inset-0 opacity-[0.02]" style={{ backgroundImage: 'linear-gradient(#000 1px, transparent 1px), linear-gradient(90deg, #000 1px, transparent 1px)', backgroundSize: '40px 40px' }} />
              <div className="relative z-10 space-y-6">
                {[
                  { name: "Acme Corp", risk: "94%", trend: "up", color: "text-red-500", bg: "bg-red-500/10" },
                  { name: "Globex Inc", risk: "72%", trend: "up", color: "text-amber-500", bg: "bg-amber-500/10" },
                  { name: "Initech", risk: "12%", trend: "down", color: "text-emerald-500", bg: "bg-emerald-500/10" }
                ].map((company, i) => (
                  <div key={i} className="flex items-center justify-between p-6 border border-line bg-white shadow-sm">
                    <div className="font-medium">{company.name}</div>
                    <div className={`flex items-center gap-4 ${company.color}`}>
                      <span className="text-sm uppercase tracking-widest font-bold">Churn Risk</span>
                      <span className={`px-3 py-1 rounded-full text-sm font-bold ${company.bg}`}>{company.risk}</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Deep Dive 2: Automated Recovery */}
      <section className="py-32 bg-white border-b border-line overflow-hidden">
        <div className="max-w-[1800px] mx-auto px-8 lg:px-20">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
            <div className="order-2 lg:order-1 relative h-[500px] bg-paper border border-line p-8 flex flex-col justify-center">
              <div className="absolute inset-0 opacity-[0.02]" style={{ backgroundImage: 'linear-gradient(#000 1px, transparent 1px), linear-gradient(90deg, #000 1px, transparent 1px)', backgroundSize: '40px 40px' }} />
              <div className="relative z-10 space-y-4">
                <div className="p-6 border border-line bg-white shadow-sm flex gap-4 items-start">
                  <div className="w-8 h-8 rounded-full bg-brand/10 flex items-center justify-center text-brand shrink-0"><Zap className="w-4 h-4" /></div>
                  <div>
                    <div className="font-medium mb-1">Payment declined: Insufficient funds</div>
                    <div className="text-sm text-ink-muted">Retry in 48 hours based on historical success data for this decline code.</div>
                  </div>
                </div>
                <div className="p-6 border border-line bg-white shadow-sm flex gap-4 items-start opacity-50">
                  <div className="w-8 h-8 rounded-full bg-ink/5 flex items-center justify-center text-ink shrink-0"><RefreshCcw className="w-4 h-4" /></div>
                  <div>
                    <div className="font-medium mb-1">Payment declined: Card expired</div>
                    <div className="text-sm text-ink-muted">Launch automated email series requesting payment data update.</div>
                  </div>
                </div>
              </div>
            </div>
            <motion.div 
              className="order-1 lg:order-2"
              initial={{ opacity: 0, x: 40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <div className="micro-label mb-6 text-brand">Automated Recovery</div>
              <h2 className="text-4xl lg:text-5xl font-display font-semibold mb-8">Recover revenue on autopilot.</h2>
              <p className="text-xl text-ink-muted font-light leading-relaxed mb-8">
                Stop using generic retry schedules. Our system adapts to specific decline codes, customer profiles, and historical data to determine the optimal time to retry a failed payment.
              </p>
              <ul className="space-y-4 mb-10">
                {["Smart retry logic", "Customizable email series", "In-app payment updates", "Decline code analysis"].map((item, i) => (
                  <li key={i} className="flex items-center gap-3 text-ink font-medium">
                    <CheckCircle2 className="w-5 h-5 text-brand shrink-0" />
                    {item}
                  </li>
                ))}
              </ul>
              <Button variant="outline">View recovery processes</Button>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Advanced Analytics Section */}
      <section className="py-32 bg-white border-b border-line overflow-hidden">
        <div className="max-w-[1800px] mx-auto px-8 lg:px-20">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
            <motion.div 
              initial={{ opacity: 0, x: -40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <div className="micro-label mb-6 text-brand">Deep Analytics</div>
              <h2 className="text-4xl lg:text-5xl font-display font-semibold mb-8">Understand every aspect of your revenue.</h2>
              <p className="text-xl text-ink-muted font-light leading-relaxed mb-8">
                Get a complete picture of your business health. Track cohorts, analyze churn reasons, and find growth points with our interactive dashboards.
              </p>
              <ul className="space-y-4 mb-10">
                {["Cohort retention analysis", "Segmentation by plan and industry", "Exit survey analysis", "LTV and CAC forecasting"].map((item, i) => (
                  <li key={i} className="flex items-center gap-3 text-ink font-medium">
                    <CheckCircle2 className="w-5 h-5 text-brand shrink-0" />
                    {item}
                  </li>
                ))}
              </ul>
              <Button variant="outline">View dashboard demo</Button>
            </motion.div>
            <div className="relative h-[500px] bg-paper border border-line p-8 flex flex-col justify-center overflow-hidden">
              <div className="absolute inset-0 opacity-[0.02]" style={{ backgroundImage: 'linear-gradient(#000 1px, transparent 1px), linear-gradient(90deg, #000 1px, transparent 1px)', backgroundSize: '40px 40px' }} />
              
              {/* Mock Chart */}
              <div className="relative z-10 w-full h-full flex items-end gap-2 pb-10 border-b border-line/50">
                {[35, 45, 40, 60, 55, 75, 70, 85, 80, 95, 90, 100].map((h, i) => (
                  <motion.div 
                    key={i}
                    initial={{ height: 0 }}
                    whileInView={{ height: `${h}%` }}
                    viewport={{ once: true }}
                    transition={{ duration: 1, delay: i * 0.05 }}
                    className="flex-1 bg-brand/20 hover:bg-brand transition-colors rounded-t-sm relative group"
                  >
                    <div className="absolute -top-10 left-1/2 -translate-x-1/2 bg-ink text-white text-xs py-1 px-2 rounded opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none whitespace-nowrap">
                      ${(h * 1200).toLocaleString()}
                    </div>
                  </motion.div>
                ))}
              </div>
              <div className="absolute bottom-4 left-8 right-8 flex justify-between text-xs text-ink-muted font-mono uppercase">
                <span>Jan</span>
                <span>Dec</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Grid */}
      <section className="bg-paper py-32 border-b border-line">
        <div className="max-w-[1800px] mx-auto px-8 lg:px-20">
          <div className="text-center max-w-3xl mx-auto mb-20">
            <h2 className="text-4xl font-display font-semibold mb-6">Everything needed for scaling.</h2>
            <p className="text-xl text-ink-muted font-light">A complete suite of tools designed to give you full control over subscription revenue.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              { title: "Predictive Churn Scoring", desc: "Identify at-risk accounts before they cancel.", icon: <BrainCircuit className="w-6 h-6" /> },
              { title: "Automated Recovery", desc: "Recover failed payments with smart retries.", icon: <Zap className="w-6 h-6" /> },
              { title: "Revenue Analytics", desc: "Real-time visibility into MRR, ARR, and net retention.", icon: <LineChart className="w-6 h-6" /> },
              { title: "Cohort Analysis", desc: "Track retention across different user segments over time.", icon: <Users className="w-6 h-6" /> },
              { title: "Data Warehouse Sync", desc: "Export data directly to Snowflake, BigQuery, or Redshift.", icon: <Database className="w-6 h-6" /> },
              { title: "Bank-Grade Security", desc: "SOC2 Type II compliant with end-to-end encryption.", icon: <Lock className="w-6 h-6" /> }
            ].map((feature, i) => (
              <motion.div 
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="p-10 bg-white border border-line hover:shadow-xl transition-shadow group cursor-pointer"
              >
                <div className="w-12 h-12 bg-brand/10 text-brand flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                  {feature.icon}
                </div>
                <h3 className="text-xl font-display font-semibold mb-3">{feature.title}</h3>
                <p className="text-ink-muted leading-relaxed">{feature.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-32 bg-paper border-b border-line">
        <div className="max-w-[1800px] mx-auto px-8 lg:px-20">
          <div className="text-center max-w-3xl mx-auto mb-20">
            <h2 className="text-4xl font-display font-semibold mb-6">What our customers say</h2>
            <p className="text-xl text-ink-muted font-light">Industry leaders trust us with their most valuable asset — revenue.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { quote: "Implementing RetainIQ was the best decision of the year. We reduced churn by 24% in the first 3 months.", author: "Oleksandr Petrenko", role: "CEO, TechFlow", initial: "OP" },
              { quote: "Automated payment recovery works like magic. It's literally free money we were losing before.", author: "Maria Koval", role: "CFO, SaaSify", initial: "MK" },
              { quote: "Cohort analytics gave us insights that changed our product strategy. Now we know exactly what keeps users.", author: "Ivan Sydorenko", role: "VP of Product, DataSync", initial: "IS" }
            ].map((t, i) => (
              <div key={i} className="bg-white p-10 border border-line shadow-sm hover:shadow-xl transition-shadow">
                <div className="flex text-brand mb-6">
                  {[1,2,3,4,5].map(star => <svg key={star} className="w-5 h-5 fill-current" viewBox="0 0 24 24"><path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z"/></svg>)}
                </div>
                <p className="text-lg font-light leading-relaxed mb-8">"{t.quote}"</p>
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-full bg-paper border border-line flex items-center justify-center font-display font-bold text-ink">{t.initial}</div>
                  <div>
                    <div className="font-medium">{t.author}</div>
                    <div className="text-sm text-ink-muted">{t.role}</div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Metrics / ROI */}
      <section className="py-32 bg-ink text-white">
        <div className="max-w-[1800px] mx-auto px-8 lg:px-20">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-16 text-center">
            {[
              { value: "40%", label: "Average recovery rate increase" },
              { value: "2.5x", label: "ROI within first 6 months" },
              { value: "15h", label: "Saved per week on manual reporting" }
            ].map((stat, i) => (
              <div key={i}>
                <div className="text-7xl lg:text-8xl font-display font-bold text-brand mb-6">{stat.value}</div>
                <div className="text-xl font-light text-white/80">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-32 text-center bg-white">
        <h2 className="text-4xl lg:text-5xl font-display font-semibold mb-8">Ready to stop losing revenue?</h2>
        <p className="text-xl text-ink-muted font-light mb-12 max-w-2xl mx-auto">Join hundreds of fast-growing SaaS companies using RetainIQ to protect their profits.</p>
        <div className="flex justify-center gap-4">
          <Button size="lg">Get started today</Button>
          <Button variant="outline" size="lg">Book a demo</Button>
        </div>
      </section>
    </main>
  );
};
