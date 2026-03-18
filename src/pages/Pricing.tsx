import React from 'react';
import { motion } from 'motion/react';
import { CheckCircle2, Minus, ArrowRight, HelpCircle } from 'lucide-react';
import { Button } from '../components/ui/Button';

export const Pricing = () => {
  return (
    <main className="min-h-screen pt-32 pb-20">
      {/* Hero */}
      <section className="max-w-[1800px] mx-auto px-8 lg:px-20 mb-32 text-center">
        <div className="max-w-4xl mx-auto">
          <div className="micro-label mb-6 flex items-center justify-center gap-4">
            <span className="w-2 h-2 bg-brand rounded-full" />
            Pricing Plans
          </div>
          <h1 className="text-6xl lg:text-8xl font-display font-semibold tracking-tight mb-8">
            Simple, transparent pricing.
          </h1>
          <p className="text-xl lg:text-2xl text-ink-muted font-light leading-relaxed mb-12">
            Start free, scale as you grow. No hidden fees, no long-term contracts. Pay only for the value you get.
          </p>
          <div className="flex justify-center gap-4">
            <Button size="lg">Start Free Trial</Button>
            <Button variant="outline" size="lg">Contact Sales</Button>
          </div>
        </div>
      </section>

      {/* Pricing Cards */}
      <section className="bg-paper py-32 border-y border-line">
        <div className="max-w-[1800px] mx-auto px-8 lg:px-20">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                name: "Starter",
                price: "$0",
                desc: "Perfect for early-stage startups.",
                features: ["Up to 1,000 active subscriptions", "Basic churn analytics", "Standard recovery emails", "Email support"],
                buttonText: "Start Free",
                popular: false
              },
              {
                name: "Growth",
                price: "$299",
                period: "/mo",
                desc: "For scaling SaaS businesses.",
                features: ["Up to 10,000 active subscriptions", "Predictive churn scoring", "Customizable recovery flows", "Priority support", "Slack integration"],
                buttonText: "Start 14-Day Free Trial",
                popular: true
              },
              {
                name: "Enterprise",
                price: "Custom",
                desc: "For large organizations with complex needs.",
                features: ["Unlimited subscriptions", "Custom machine learning models", "Dedicated Customer Success Manager", "SLA guarantees", "SSO & Advanced Security"],
                buttonText: "Contact Sales",
                popular: false
              }
            ].map((plan, i) => (
              <motion.div 
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className={`p-12 border ${plan.popular ? 'border-brand shadow-2xl relative' : 'border-line bg-white'} flex flex-col h-full`}
              >
                {plan.popular && (
                  <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-brand text-white px-4 py-1 text-xs font-bold uppercase tracking-widest rounded-full">
                    Most Popular
                  </div>
                )}
                <div className="micro-label mb-4 text-brand">{plan.name}</div>
                <div className="flex items-baseline gap-2 mb-4">
                  <span className="text-5xl font-display font-bold">{plan.price}</span>
                  {plan.period && <span className="text-ink-muted">{plan.period}</span>}
                </div>
                <p className="text-ink-muted leading-relaxed mb-8 flex-1">{plan.desc}</p>
                
                <ul className="space-y-4 mb-12">
                  {plan.features.map((feature, j) => (
                    <li key={j} className="flex items-start gap-3 text-ink font-medium">
                      <CheckCircle2 className="w-5 h-5 text-brand shrink-0" />
                      {feature}
                    </li>
                  ))}
                </ul>
                
                <Button variant={plan.popular ? 'primary' : 'outline'} className="w-full">
                  {plan.buttonText}
                </Button>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Feature Comparison Table */}
      <section className="py-32 bg-white border-b border-line overflow-x-auto">
        <div className="max-w-[1800px] mx-auto px-8 lg:px-20">
          <div className="text-center max-w-3xl mx-auto mb-20">
            <h2 className="text-4xl font-display font-semibold mb-6">Compare Plans</h2>
            <p className="text-xl text-ink-muted font-light">See exactly what is included in each tier.</p>
          </div>
          
          <table className="w-full text-left border-collapse">
            <thead>
              <tr className="border-b border-line">
                <th className="py-6 px-4 font-display font-semibold text-xl w-1/4">Features</th>
                <th className="py-6 px-4 font-display font-semibold text-xl text-center w-1/4">Starter</th>
                <th className="py-6 px-4 font-display font-semibold text-xl text-center w-1/4 text-brand">Growth</th>
                <th className="py-6 px-4 font-display font-semibold text-xl text-center w-1/4">Enterprise</th>
              </tr>
            </thead>
            <tbody>
              {[
                { category: "Core Analytics", items: [
                  { name: "Active Subscriptions", starter: "Up to 1,000", growth: "Up to 10,000", enterprise: "Unlimited" },
                  { name: "Data History", starter: "30 Days", growth: "12 Months", enterprise: "Unlimited" },
                  { name: "MRR / ARR Tracking", starter: true, growth: true, enterprise: true },
                  { name: "Cohort Analysis", starter: false, growth: true, enterprise: true },
                ]},
                { category: "Predictive Intelligence", items: [
                  { name: "Churn Risk Scoring", starter: false, growth: true, enterprise: true },
                  { name: "Behavioral Signals", starter: false, growth: "Standard", enterprise: "Custom" },
                  { name: "Health Score Customization", starter: false, growth: false, enterprise: true },
                ]},
                { category: "Automated Recovery", items: [
                  { name: "Recovery Emails", starter: "Standard", growth: "Customizable", enterprise: "Customizable" },
                  { name: "Smart Retry Logic", starter: false, growth: true, enterprise: true },
                  { name: "In-App Payment Updates", starter: false, growth: true, enterprise: true },
                ]},
                { category: "Support & Security", items: [
                  { name: "Support Level", starter: "Email", growth: "Priority Email & Chat", enterprise: "Dedicated CSM" },
                  { name: "SSO (SAML)", starter: false, growth: false, enterprise: true },
                  { name: "SOC2 Report", starter: false, growth: true, enterprise: true },
                ]}
              ].map((section, i) => (
                <React.Fragment key={i}>
                  <tr className="bg-paper border-b border-line">
                    <td colSpan={4} className="py-4 px-4 font-semibold uppercase tracking-widest text-xs text-ink-muted">{section.category}</td>
                  </tr>
                  {section.items.map((item, j) => (
                    <tr key={j} className="border-b border-line hover:bg-paper/50 transition-colors">
                      <td className="py-4 px-4 font-medium">{item.name}</td>
                      <td className="py-4 px-4 text-center text-ink-muted font-light">
                        {typeof item.starter === 'boolean' ? (item.starter ? <CheckCircle2 className="w-5 h-5 mx-auto text-brand" /> : <Minus className="w-5 h-5 mx-auto opacity-30" />) : item.starter}
                      </td>
                      <td className="py-4 px-4 text-center text-ink-muted font-light">
                        {typeof item.growth === 'boolean' ? (item.growth ? <CheckCircle2 className="w-5 h-5 mx-auto text-brand" /> : <Minus className="w-5 h-5 mx-auto opacity-30" />) : item.growth}
                      </td>
                      <td className="py-4 px-4 text-center text-ink-muted font-light">
                        {typeof item.enterprise === 'boolean' ? (item.enterprise ? <CheckCircle2 className="w-5 h-5 mx-auto text-brand" /> : <Minus className="w-5 h-5 mx-auto opacity-30" />) : item.enterprise}
                      </td>
                    </tr>
                  ))}
                </React.Fragment>
              ))}
            </tbody>
          </table>
        </div>
      </section>

      {/* ROI Calculator */}
      <section className="py-32 bg-ink text-white overflow-hidden">
        <div className="max-w-[1800px] mx-auto px-8 lg:px-20">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
            <motion.div 
              initial={{ opacity: 0, x: -40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <div className="micro-label mb-6 text-brand">ROI Calculator</div>
              <h2 className="text-4xl lg:text-5xl font-display font-semibold mb-8">Calculate your potential revenue saved.</h2>
              <p className="text-xl text-white/60 font-light leading-relaxed mb-8">
                Enter your current metrics to see how much revenue you could save with RetainIQ automated payment recovery.
              </p>
              <div className="space-y-6 mb-10">
                <div>
                  <div className="flex justify-between mb-2">
                    <span className="text-sm font-medium text-white/80">Monthly Recurring Revenue (MRR)</span>
                    <span className="text-sm font-mono text-brand">$500,000</span>
                  </div>
                  <div className="h-2 bg-white/10 rounded-full overflow-hidden">
                    <div className="h-full bg-brand w-1/2 rounded-full" />
                  </div>
                </div>
                <div>
                  <div className="flex justify-between mb-2">
                    <span className="text-sm font-medium text-white/80">Failed Payment Rate</span>
                    <span className="text-sm font-mono text-brand">8%</span>
                  </div>
                  <div className="h-2 bg-white/10 rounded-full overflow-hidden">
                    <div className="h-full bg-brand w-1/4 rounded-full" />
                  </div>
                </div>
              </div>
            </motion.div>
            
            <div className="bg-white/5 border border-white/10 p-10 relative overflow-hidden">
              <div className="absolute top-0 right-0 w-64 h-64 bg-brand/20 blur-[100px] rounded-full pointer-events-none" />
              <div className="relative z-10">
                <div className="text-sm text-white/60 uppercase tracking-widest mb-2 font-medium">Potentially Saved</div>
                <div className="text-6xl lg:text-7xl font-display font-bold text-white mb-8">
                  $24,000<span className="text-2xl text-white/40 font-light">/mo</span>
                </div>
                
                <div className="grid grid-cols-2 gap-8 pt-8 border-t border-white/10">
                  <div>
                    <div className="text-sm text-white/60 mb-1">Annual Impact</div>
                    <div className="text-2xl font-display font-semibold text-brand">+$288,000</div>
                  </div>
                  <div>
                    <div className="text-sm text-white/60 mb-1">ROI</div>
                    <div className="text-2xl font-display font-semibold text-brand">80x</div>
                  </div>
                </div>
                
                <Button className="w-full mt-10 bg-brand text-white hover:bg-brand/90">Start Saving Revenue</Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-32 bg-paper border-b border-line">
        <div className="max-w-[1800px] mx-auto px-8 lg:px-20">
          <div className="text-center max-w-3xl mx-auto mb-20">
            <h2 className="text-4xl font-display font-semibold mb-6">Frequently Asked Questions</h2>
            <p className="text-xl text-ink-muted font-light">Everything you need to know about the product and billing.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 max-w-5xl mx-auto">
            {[
              { q: "How does the 14-day free trial work?", a: "You get full access to all Growth plan features for 14 days. No credit card required. If you decide not to upgrade to a paid plan, your account will be automatically switched to the free Starter plan." },
              { q: "Can I change my plan later?", a: "Absolutely. You can upgrade, downgrade, or cancel your subscription at any time from your billing dashboard. Changes take effect immediately." },
              { q: "What counts as an 'active subscription'?", a: "An active subscription is any paying customer currently tracked in your payment provider (e.g., Stripe, Chargebee) during a given billing month." },
              { q: "Do you offer discounts for non-profits?", a: "Yes, we offer a 50% discount for eligible non-profit and educational institutions. Contact our sales team to apply." }
            ].map((faq, i) => (
              <motion.div 
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="bg-white p-8 border border-line"
              >
                <div className="flex items-start gap-4 mb-4">
                  <HelpCircle className="w-6 h-6 text-brand shrink-0" />
                  <h3 className="text-xl font-semibold">{faq.q}</h3>
                </div>
                <p className="text-ink-muted leading-relaxed pl-10">{faq.a}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-32 text-center bg-ink text-white">
        <h2 className="text-4xl lg:text-5xl font-display font-semibold mb-8">Still have questions?</h2>
        <p className="text-xl text-white/60 font-light mb-12 max-w-2xl mx-auto">Our team is here to help you find the perfect plan for your business.</p>
        <div className="flex justify-center gap-4">
          <Button size="lg" className="bg-white text-ink hover:bg-brand hover:text-white border-none">Contact Sales</Button>
          <Button variant="outline" size="lg" className="border-white text-white hover:bg-white hover:text-ink">View Documentation</Button>
        </div>
      </section>
    </main>
  );
};
