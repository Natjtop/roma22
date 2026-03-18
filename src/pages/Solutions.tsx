import React from 'react';
import { motion } from 'motion/react';
import { Users, Briefcase, Building2, ArrowRight, CheckCircle2, ShoppingCart, Video, FileText } from 'lucide-react';
import { Button } from '../components/ui/Button';

export const Solutions = () => {
  return (
    <main className="min-h-screen pt-32 pb-20">
      {/* Hero */}
      <section className="max-w-[1800px] mx-auto px-8 lg:px-20 mb-32">
        <div className="max-w-4xl">
          <div className="micro-label mb-6 flex items-center gap-4">
            <span className="w-2 h-2 bg-brand rounded-full" />
            Solutions by Role & Industry
          </div>
          <h1 className="text-6xl lg:text-8xl font-display font-semibold tracking-tight mb-8">
            Built for modern revenue teams.
          </h1>
          <p className="text-xl lg:text-2xl text-ink-muted font-light leading-relaxed mb-12">
            Whether you're a founder protecting equity, a finance leader reconciling revenue, or a customer success manager saving accounts, RetainIQ has a solution tailored for your specific needs.
          </p>
          <div className="flex flex-wrap gap-4">
            <Button size="lg">Find Your Solution</Button>
            <Button variant="outline" size="lg">Contact Sales</Button>
          </div>
        </div>
      </section>

      {/* Solutions List (Roles) */}
      <section className="bg-paper py-32 border-y border-line">
        <div className="max-w-[1800px] mx-auto px-8 lg:px-20 space-y-32">
          {[
            {
              role: "For Founders & CEOs",
              title: "Protect your equity and valuation.",
              desc: "Churn is the silent killer of SaaS valuations. RetainIQ provides you with board-ready metrics and automated workflows to ensure net revenue retention stays above 110%.",
              icon: <Building2 className="w-8 h-8" />,
              benefits: ["Board-ready reporting", "Valuation protection", "Automated revenue recovery"]
            },
            {
              role: "For Finance Leaders",
              title: "Reconcile revenue and forecast accurately.",
              desc: "Stop guessing your cash flow. Get accurate, real-time visibility into MRR movements, failed payments, and expected recovery rates.",
              icon: <Briefcase className="w-8 h-8" />,
              benefits: ["Accurate cash flow forecasting", "Automated dunning", "GAAP-compliant reporting"]
            },
            {
              role: "For Customer Success Managers",
              title: "Focus on accounts that need help.",
              desc: "Don't wait for a cancellation request. Our predictive scoring pinpoints exactly which accounts are at risk and what actions your team needs to take to save them.",
              icon: <Users className="w-8 h-8" />,
              benefits: ["Predictive churn scoring", "Automated playbooks", "Health score tracking"]
            }
          ].map((solution, i) => (
            <motion.div 
              key={i}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.8 }}
              className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center"
            >
              <div className={i % 2 !== 0 ? "lg:order-2" : ""}>
                <div className="w-16 h-16 bg-brand/10 text-brand flex items-center justify-center mb-8 rounded-2xl">
                  {solution.icon}
                </div>
                <div className="micro-label mb-4 text-brand">{solution.role}</div>
                <h2 className="text-4xl lg:text-5xl font-display font-semibold mb-6">{solution.title}</h2>
                <p className="text-xl text-ink-muted font-light leading-relaxed mb-8">{solution.desc}</p>
                <ul className="space-y-4 mb-12">
                  {solution.benefits.map((benefit, j) => (
                    <li key={j} className="flex items-center gap-3 text-ink font-medium">
                      <div className="w-1.5 h-1.5 bg-brand rounded-full" />
                      {benefit}
                    </li>
                  ))}
                </ul>
                <Button variant="outline">Learn more about {solution.role.split(' ')[1]}</Button>
              </div>
              <div className={`aspect-square bg-white border border-line p-8 flex items-center justify-center relative overflow-hidden ${i % 2 !== 0 ? "lg:order-1" : ""}`}>
                <div className="absolute inset-0 opacity-[0.02]" style={{ backgroundImage: 'linear-gradient(#000 1px, transparent 1px), linear-gradient(90deg, #000 1px, transparent 1px)', backgroundSize: '40px 40px' }} />
                <div className="text-center z-10">
                  <div className="text-8xl font-display font-bold text-brand/20 mb-4">0{i + 1}</div>
                  <div className="text-xl font-medium tracking-widest uppercase">{solution.role}</div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Solutions by Industry */}
      <section className="py-32 bg-white border-b border-line">
        <div className="max-w-[1800px] mx-auto px-8 lg:px-20">
          <div className="text-center max-w-3xl mx-auto mb-20">
            <h2 className="text-4xl font-display font-semibold mb-6">Tailored to your business model.</h2>
            <p className="text-xl text-ink-muted font-light">Different subscription models have different churn dynamics. We adapt to yours.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { title: "B2B SaaS", desc: "Track account-level health, seat utilization, and contract renewals.", icon: <Building2 className="w-6 h-6" /> },
              { title: "Consumer Subscriptions", desc: "Manage high-volume, low-ACV churn with automated recovery sequences.", icon: <ShoppingCart className="w-6 h-6" /> },
              { title: "Digital Media", desc: "Analyze content consumption patterns to predict subscriber drop-off.", icon: <Video className="w-6 h-6" /> }
            ].map((industry, i) => (
              <motion.div 
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="p-10 bg-paper border border-line hover:border-brand/50 transition-colors group cursor-pointer"
              >
                <div className="w-12 h-12 bg-white border border-line flex items-center justify-center mb-6 group-hover:text-brand transition-colors">
                  {industry.icon}
                </div>
                <h3 className="text-xl font-display font-semibold mb-3">{industry.title}</h3>
                <p className="text-ink-muted leading-relaxed mb-6">{industry.desc}</p>
                <div className="flex items-center gap-2 text-sm font-medium text-brand">
                  View case studies <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Integration Ecosystem */}
      <section className="py-32 bg-paper border-b border-line overflow-hidden">
        <div className="max-w-[1800px] mx-auto px-8 lg:px-20">
          <div className="text-center max-w-3xl mx-auto mb-20">
            <div className="micro-label text-brand mb-6">Integration Ecosystem</div>
            <h2 className="text-4xl lg:text-5xl font-display font-semibold mb-6">Works with your existing stack.</h2>
            <p className="text-xl text-ink-muted font-light">No need to rip and replace your current tools. RetainIQ integrates seamlessly with your payment gateways, CRM, and support systems.</p>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-4">
            {[
              "Stripe", "Chargebee", "Braintree", "PayPal", "Recurly", "Paddle",
              "Salesforce", "HubSpot", "Zendesk", "Intercom", "Slack", "Segment"
            ].map((tool, i) => (
              <motion.div 
                key={i}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.05 }}
                className="aspect-video bg-white border border-line flex items-center justify-center p-6 hover:border-brand/30 hover:shadow-sm transition-all grayscale hover:grayscale-0"
              >
                <span className="font-display font-medium text-ink/60 hover:text-ink transition-colors">{tool}</span>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Security & Compliance */}
      <section className="py-32 bg-white border-b border-line">
        <div className="max-w-[1800px] mx-auto px-8 lg:px-20">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
            <div className="order-2 lg:order-1 grid grid-cols-2 gap-4">
              {[
                { title: "SOC 2 Type II", desc: "Annual security audit", icon: <FileText className="w-5 h-5" /> },
                { title: "GDPR Compliant", desc: "Full EU data protection", icon: <CheckCircle2 className="w-5 h-5" /> },
                { title: "PCI DSS", desc: "Payment data security", icon: <ShoppingCart className="w-5 h-5" /> },
                { title: "Encryption", desc: "AES-256 at rest", icon: <Briefcase className="w-5 h-5" /> }
              ].map((item, i) => (
                <div key={i} className="bg-paper p-8 border border-line">
                  <div className="w-10 h-10 bg-white border border-line flex items-center justify-center text-brand mb-4">
                    {item.icon}
                  </div>
                  <div className="font-medium mb-1">{item.title}</div>
                  <div className="text-sm text-ink-muted">{item.desc}</div>
                </div>
              ))}
            </div>
            <div className="order-1 lg:order-2">
              <div className="micro-label text-brand mb-6">Enterprise-grade security</div>
              <h2 className="text-4xl lg:text-5xl font-display font-semibold mb-8">Your data is safe.</h2>
              <p className="text-xl text-ink-muted font-light leading-relaxed mb-8">
                We understand that revenue data is the most sensitive information in your business. That's why we built RetainIQ with security as a fundamental principle, not an afterthought.
              </p>
              <Button variant="outline">Read security policy</Button>
            </div>
          </div>
        </div>
      </section>

      {/* Before / After */}
      <section className="py-32 bg-ink text-white">
        <div className="max-w-[1800px] mx-auto px-8 lg:px-20">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            <div className="p-12 border border-white/10 bg-white/5">
              <div className="micro-label text-white/40 mb-8">Before RetainIQ</div>
              <ul className="space-y-6">
                {[
                  "Finding out a customer churned after they canceled.",
                  "Using generic, one-size-fits-all retry schedules for failed payments.",
                  "Manually exporting Stripe data to Excel to calculate MRR.",
                  "Customer Success teams guessing which accounts need attention."
                ].map((item, i) => (
                  <li key={i} className="flex items-start gap-4 text-white/60 font-light">
                    <div className="w-6 h-6 rounded-full bg-white/10 flex items-center justify-center shrink-0 mt-0.5 text-xs">✕</div>
                    {item}
                  </li>
                ))}
              </ul>
            </div>
            <div className="p-12 border border-brand bg-brand/10">
              <div className="micro-label text-brand mb-8">After RetainIQ</div>
              <ul className="space-y-6">
                {[
                  "Getting automated alerts 30 days before a high-value account churns.",
                  "Recovering 40% more failed payments with ML-powered retry logic.",
                  "Real-time, board-ready dashboards for all revenue metrics.",
                  "Customer Success teams armed with prioritized lists of at-risk accounts and playbooks."
                ].map((item, i) => (
                  <li key={i} className="flex items-start gap-4 text-white font-light">
                    <div className="w-6 h-6 rounded-full bg-brand flex items-center justify-center shrink-0 mt-0.5 text-xs">✓</div>
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-32 text-center bg-white">
        <h2 className="text-4xl lg:text-5xl font-display font-semibold mb-8">See how it works for your team.</h2>
        <div className="flex justify-center gap-4">
          <Button size="lg">Book a Demo</Button>
          <Button variant="outline" size="lg">View Pricing</Button>
        </div>
      </section>
    </main>
  );
};
