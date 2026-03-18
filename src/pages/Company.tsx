import React from 'react';
import { motion } from 'motion/react';
import { Globe, Users, Target, ArrowRight, MapPin, Linkedin, Twitter } from 'lucide-react';
import { Button } from '../components/ui/Button';

export const Company = () => {
  return (
    <main className="min-h-screen pt-32 pb-20">
      {/* Hero */}
      <section className="max-w-[1800px] mx-auto px-8 lg:px-20 mb-32">
        <div className="max-w-4xl">
          <div className="micro-label mb-6 flex items-center gap-4">
            <span className="w-2 h-2 bg-brand rounded-full" />
            About Us
          </div>
          <h1 className="text-6xl lg:text-8xl font-display font-semibold tracking-tight mb-8">
            Our mission is to end involuntary churn.
          </h1>
          <p className="text-xl lg:text-2xl text-ink-muted font-light leading-relaxed mb-12">
            Founded in 2024, RetainIQ is a team of data scientists, engineers, and growth experts dedicated to building the intelligence layer for subscription businesses.
          </p>
          <div className="flex flex-wrap gap-4">
            <Button size="lg">Open Positions</Button>
            <Button variant="outline" size="lg">Read Our Story</Button>
          </div>
        </div>
      </section>

      {/* Our Story (Timeline) */}
      <section className="bg-paper py-32 border-y border-line">
        <div className="max-w-[1800px] mx-auto px-8 lg:px-20">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-20">
            <div>
              <h2 className="text-4xl font-display font-semibold mb-8">The RetainIQ Journey</h2>
              <p className="text-xl text-ink-muted font-light leading-relaxed mb-12">
                We founded RetainIQ because we saw firsthand how much revenue SaaS companies were losing to preventable churn. We believed that with the right data and automation, we could solve this problem at scale.
              </p>
            </div>
            <div className="space-y-12 border-l border-brand/30 pl-8 relative">
              {[
                { year: "2024", title: "Founding", desc: "Founded by a team of former Stripe and Mixpanel engineers who saw a gap in subscription analytics." },
                { year: "2025", title: "Seed Funding", desc: "Raised a $5M seed round led by Sequoia Capital to build the first version of our predictive engine." },
                { year: "2026", title: "Series A & Global Expansion", desc: "Secured $20M Series A, launched our automated recovery product, and expanded to serve customers in over 40 countries." }
              ].map((event, i) => (
                <motion.div 
                  key={i}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.2 }}
                  className="relative"
                >
                  <div className="absolute -left-[41px] top-1 w-4 h-4 rounded-full bg-brand border-4 border-paper" />
                  <div className="micro-label text-brand mb-2">{event.year}</div>
                  <h3 className="text-2xl font-display font-semibold mb-3">{event.title}</h3>
                  <p className="text-ink-muted leading-relaxed">{event.desc}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-32 bg-white border-b border-line">
        <div className="max-w-[1800px] mx-auto px-8 lg:px-20">
          <div className="text-center max-w-3xl mx-auto mb-20">
            <h2 className="text-4xl font-display font-semibold mb-6">Our Core Values</h2>
            <p className="text-xl text-ink-muted font-light">Principles that guide us as we build products, treat our customers, and work together.</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                title: "Customer Obsession",
                desc: "We build for the end user. Every feature, every line of code is designed to make our customers more successful.",
                icon: <Users className="w-6 h-6" />
              },
              {
                title: "Data-Driven Decisions",
                desc: "We don't guess. We analyze, test, and iterate based on reliable data to build the most accurate predictive models.",
                icon: <Target className="w-6 h-6" />
              },
              {
                title: "Global Impact",
                desc: "We are a remote team distributed across 15 countries, bringing diverse perspectives to solve complex problems.",
                icon: <Globe className="w-6 h-6" />
              }
            ].map((value, i) => (
              <motion.div 
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="p-12 bg-paper border border-line hover:shadow-xl transition-shadow group"
              >
                <div className="w-14 h-14 bg-brand/10 text-brand flex items-center justify-center mb-8 rounded-full group-hover:scale-110 transition-transform">
                  {value.icon}
                </div>
                <h3 className="text-2xl font-display font-semibold mb-4">{value.title}</h3>
                <p className="text-ink-muted leading-relaxed mb-8">{value.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Global Presence */}
      <section className="py-32 bg-white border-b border-line overflow-hidden">
        <div className="max-w-[1800px] mx-auto px-8 lg:px-20">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
            <motion.div 
              initial={{ opacity: 0, x: -40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <div className="micro-label mb-6 text-brand">Global Presence</div>
              <h2 className="text-4xl lg:text-5xl font-display font-semibold mb-8">Working from everywhere.</h2>
              <p className="text-xl text-ink-muted font-light leading-relaxed mb-8">
                We are a remote-first company with hubs in key technology centers. This allows us to attract the best talent regardless of their location and provide 24/7 support to our customers.
              </p>
              
              <div className="grid grid-cols-2 gap-8 mb-10">
                {[
                  { city: "San Francisco", desc: "Headquarters", icon: <MapPin className="w-5 h-5 text-brand" /> },
                  { city: "London", desc: "European Hub", icon: <MapPin className="w-5 h-5 text-brand" /> },
                  { city: "Kyiv", desc: "R&D Center", icon: <MapPin className="w-5 h-5 text-brand" /> },
                  { city: "Toronto", desc: "Support Center", icon: <MapPin className="w-5 h-5 text-brand" /> }
                ].map((loc, i) => (
                  <div key={i} className="flex gap-4">
                    <div className="mt-1">{loc.icon}</div>
                    <div>
                      <div className="font-medium text-lg mb-1">{loc.city}</div>
                      <div className="text-sm text-ink-muted">{loc.desc}</div>
                    </div>
                  </div>
                ))}
              </div>
              
              <Button variant="outline">View open positions</Button>
            </motion.div>
            
            <div className="relative h-[500px] bg-paper border border-line p-8 flex items-center justify-center overflow-hidden">
              <div className="absolute inset-0 opacity-[0.02]" style={{ backgroundImage: 'linear-gradient(#000 1px, transparent 1px), linear-gradient(90deg, #000 1px, transparent 1px)', backgroundSize: '40px 40px' }} />
              
              {/* Abstract Map */}
              <div className="relative z-10 w-full h-full flex items-center justify-center">
                <Globe className="w-full h-full text-brand/10" strokeWidth={0.5} />
                
                {/* Map Pins */}
                <motion.div 
                  initial={{ scale: 0 }}
                  whileInView={{ scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.5, type: "spring" }}
                  className="absolute top-[30%] left-[20%] w-4 h-4 bg-brand rounded-full shadow-[0_0_15px_rgba(0,85,255,0.5)]" 
                />
                <motion.div 
                  initial={{ scale: 0 }}
                  whileInView={{ scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.7, type: "spring" }}
                  className="absolute top-[25%] left-[45%] w-3 h-3 bg-brand rounded-full shadow-[0_0_15px_rgba(0,85,255,0.5)]" 
                />
                <motion.div 
                  initial={{ scale: 0 }}
                  whileInView={{ scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.9, type: "spring" }}
                  className="absolute top-[28%] left-[55%] w-4 h-4 bg-brand rounded-full shadow-[0_0_15px_rgba(0,85,255,0.5)]" 
                />
                <motion.div 
                  initial={{ scale: 0 }}
                  whileInView={{ scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: 1.1, type: "spring" }}
                  className="absolute top-[25%] left-[25%] w-3 h-3 bg-brand rounded-full shadow-[0_0_15px_rgba(0,85,255,0.5)]" 
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Leadership Team */}
      <section className="py-32 bg-paper border-b border-line">
        <div className="max-w-[1800px] mx-auto px-8 lg:px-20">
          <div className="flex items-center justify-between mb-16">
            <h2 className="text-4xl font-display font-semibold">Leadership Team</h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { name: "Sarah Jenkins", role: "CEO & Co-Founder", img: "bg-indigo-100" },
              { name: "David Chen", role: "CTO & Co-Founder", img: "bg-emerald-100" },
              { name: "Elena Rodriguez", role: "VP of Product", img: "bg-amber-100" },
              { name: "Marcus Johnson", role: "VP of Sales", img: "bg-rose-100" }
            ].map((leader, i) => (
              <motion.div 
                key={i}
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="group cursor-pointer"
              >
                <div className={`aspect-square ${leader.img} mb-6 overflow-hidden relative`}>
                  <div className="absolute inset-0 bg-ink/0 group-hover:bg-ink/10 transition-colors flex items-center justify-center">
                    <div className="opacity-0 group-hover:opacity-100 flex gap-4 transition-opacity">
                      <div className="w-10 h-10 bg-white rounded-full flex items-center justify-center text-ink hover:text-brand"><Linkedin className="w-5 h-5" /></div>
                      <div className="w-10 h-10 bg-white rounded-full flex items-center justify-center text-ink hover:text-brand"><Twitter className="w-5 h-5" /></div>
                    </div>
                  </div>
                </div>
                <h3 className="text-xl font-display font-semibold mb-1">{leader.name}</h3>
                <p className="text-ink-muted">{leader.role}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Investors */}
      <section className="py-32 bg-ink text-white text-center">
        <div className="max-w-[1800px] mx-auto px-8 lg:px-20">
          <div className="micro-label text-brand mb-6">Backed by the Best</div>
          <h2 className="text-4xl font-display font-semibold mb-16">Our Investors</h2>
          <div className="flex flex-wrap justify-center gap-16 opacity-50 grayscale hover:grayscale-0 transition-all duration-500">
            {["SEQUOIA", "ANDREESSEN HOROWITZ", "Y COMBINATOR", "INDEX VENTURES"].map((investor, i) => (
              <div key={i} className="text-2xl font-display font-bold tracking-widest">{investor}</div>
            ))}
          </div>
        </div>
      </section>

      {/* Careers CTA */}
      <section className="py-32 text-center bg-white">
        <h2 className="text-4xl lg:text-5xl font-display font-semibold mb-8">Join the team</h2>
        <p className="text-xl text-ink-muted font-light leading-relaxed mb-12 max-w-2xl mx-auto">
          We are always looking for talented people who are passionate about data, design, and customer success. Help us build the future of retention.
        </p>
        <div className="flex justify-center gap-4">
          <Button size="lg">View Open Positions</Button>
          <Button variant="outline" size="lg">Learn About Our Culture</Button>
        </div>
      </section>
    </main>
  );
};
