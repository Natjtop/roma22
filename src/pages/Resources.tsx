import React from 'react';
import { motion } from 'motion/react';
import { BookOpen, FileText, Video, ArrowRight, Download, PlayCircle, BookMarked } from 'lucide-react';
import { Button } from '../components/ui/Button';

export const Resources = () => {
  return (
    <main className="min-h-screen pt-32 pb-20">
      {/* Hero */}
      <section className="max-w-[1800px] mx-auto px-8 lg:px-20 mb-32">
        <div className="max-w-4xl">
          <div className="micro-label mb-6 flex items-center gap-4">
            <span className="w-2 h-2 bg-brand rounded-full" />
            Resource Center
          </div>
          <h1 className="text-6xl lg:text-8xl font-display font-semibold tracking-tight mb-8">
            Master the art of retention.
          </h1>
          <p className="text-xl lg:text-2xl text-ink-muted font-light leading-relaxed mb-12">
            Explore our library of guides, case studies, and webinars to learn how the fastest-growing SaaS companies fight churn and maximize LTV.
          </p>
          <div className="flex flex-wrap gap-4">
            <Button size="lg">View All Content</Button>
            <Button variant="outline" size="lg">Subscribe to Newsletter</Button>
          </div>
        </div>
      </section>

      {/* Featured Articles */}
      <section className="bg-paper py-32 border-y border-line">
        <div className="max-w-[1800px] mx-auto px-8 lg:px-20">
          <div className="flex items-center justify-between mb-16">
            <h2 className="text-4xl font-display font-semibold">Latest Insights</h2>
            <Button variant="ghost" className="hidden md:flex">View All Articles</Button>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                type: "Guide",
                title: "The Complete Guide to Dunning Management in 2026",
                desc: "Learn how to recover up to 40% of failed payments with smart retry logic and personalized communication.",
                icon: <BookOpen className="w-5 h-5" />,
                image: "bg-brand/10 text-brand"
              },
              {
                type: "Case Study",
                title: "How Acme Corp Reduced Churn by 25% in 90 Days",
                desc: "Discover the exact playbooks Acme Corp used to identify at-risk customers and save $1.2M in ARR.",
                icon: <FileText className="w-5 h-5" />,
                image: "bg-indigo-500/10 text-indigo-500"
              },
              {
                type: "Webinar",
                title: "Predictive Analytics for Customer Success Teams",
                desc: "Join our VP of Data Science as she breaks down the 5 behavioral signals that predict churn with 90% accuracy.",
                icon: <Video className="w-5 h-5" />,
                image: "bg-emerald-500/10 text-emerald-500"
              }
            ].map((resource, i) => (
              <motion.div 
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="bg-white border border-line hover:shadow-xl transition-shadow group cursor-pointer flex flex-col h-full"
              >
                <div className={`h-48 ${resource.image} flex items-center justify-center`}>
                  <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center shadow-sm group-hover:scale-110 transition-transform">
                    {resource.icon}
                  </div>
                </div>
                <div className="p-8 flex flex-col flex-1">
                  <div className="micro-label mb-4 text-brand">{resource.type}</div>
                  <h3 className="text-2xl font-display font-semibold mb-4 group-hover:text-brand transition-colors">{resource.title}</h3>
                  <p className="text-ink-muted leading-relaxed mb-8 flex-1">{resource.desc}</p>
                  <div className="flex items-center gap-2 text-sm font-medium text-ink group-hover:text-brand transition-colors">
                    Read more <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Upcoming Webinars */}
      <section className="py-32 bg-ink text-white overflow-hidden">
        <div className="max-w-[1800px] mx-auto px-8 lg:px-20">
          <div className="flex flex-col md:flex-row items-start md:items-end justify-between mb-16 gap-8">
            <div className="max-w-2xl">
              <div className="micro-label text-brand mb-6">Live Events</div>
              <h2 className="text-4xl lg:text-5xl font-display font-semibold mb-6">Upcoming Webinars</h2>
              <p className="text-xl text-white/60 font-light">Join our experts live to discuss the latest trends in customer retention and ask your questions.</p>
            </div>
            <Button variant="outline" className="border-white/20 text-white hover:bg-white/10">View all events</Button>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {[
              { date: "March 24, 2026", time: "10:00 AM PST", title: "Masterclass: Reducing Involuntary Churn by 50%", speaker: "Elena Kovalenko, VP of Product", role: "RetainIQ" },
              { date: "April 05, 2026", time: "1:00 PM EST", title: "How to Build a Predictive Customer Health Model", speaker: "Dmitry Sidorenko, Head of Data Science", role: "RetainIQ" }
            ].map((webinar, i) => (
              <motion.div 
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="bg-white/5 border border-white/10 p-8 md:p-10 hover:bg-white/10 transition-colors group flex flex-col md:flex-row gap-8 items-start md:items-center"
              >
                <div className="flex-1">
                  <div className="flex items-center gap-4 text-brand text-sm font-medium mb-4">
                    <span className="flex items-center gap-2"><Video className="w-4 h-4" /> {webinar.date}</span>
                    <span className="text-white/40">•</span>
                    <span className="text-white/60">{webinar.time}</span>
                  </div>
                  <h3 className="text-2xl font-display font-semibold mb-4 group-hover:text-brand transition-colors">{webinar.title}</h3>
                  <div className="flex items-center gap-4">
                    <div className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center text-white font-medium text-sm">
                      {webinar.speaker.split(' ').map(n => n[0]).join('')}
                    </div>
                    <div>
                      <div className="text-sm font-medium text-white/90">{webinar.speaker}</div>
                      <div className="text-xs text-white/50">{webinar.role}</div>
                    </div>
                  </div>
                </div>
                <Button className="w-full md:w-auto bg-white text-ink hover:bg-brand hover:text-white border-none shrink-0">
                  Register
                </Button>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Resource Categories */}
      <section className="py-32 bg-white border-b border-line">
        <div className="max-w-[1800px] mx-auto px-8 lg:px-20">
          <div className="text-center max-w-3xl mx-auto mb-20">
            <h2 className="text-4xl font-display font-semibold mb-6">Explore by Category</h2>
            <p className="text-xl text-ink-muted font-light">Find exactly what you need to improve your retention strategy.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { title: "E-books & Reports", desc: "Deep dives into industry benchmarks and best practices.", icon: <BookMarked className="w-6 h-6" />, action: "Download PDF" },
              { title: "Video Library", desc: "On-demand webinars, product tutorials, and interviews.", icon: <PlayCircle className="w-6 h-6" />, action: "Watch Videos" },
              { title: "Templates", desc: "Ready-to-use email sequences, playbooks, and spreadsheets.", icon: <Download className="w-6 h-6" />, action: "Get Templates" }
            ].map((category, i) => (
              <motion.div 
                key={i}
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="p-10 border border-line bg-paper hover:bg-white hover:border-brand/50 transition-colors group cursor-pointer text-center flex flex-col items-center"
              >
                <div className="w-16 h-16 bg-white border border-line flex items-center justify-center mb-6 rounded-full group-hover:text-brand transition-colors shadow-sm">
                  {category.icon}
                </div>
                <h3 className="text-xl font-display font-semibold mb-3">{category.title}</h3>
                <p className="text-ink-muted leading-relaxed mb-8">{category.desc}</p>
                <div className="mt-auto flex items-center gap-2 text-sm font-medium text-brand">
                  {category.action} <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Newsletter Signup */}
      <section className="py-32 bg-ink text-white">
        <div className="max-w-[1800px] mx-auto px-8 lg:px-20">
          <div className="max-w-3xl mx-auto text-center">
            <div className="micro-label text-brand mb-6">Retention Guide</div>
            <h2 className="text-4xl lg:text-5xl font-display font-semibold mb-8">Get the best retention strategies weekly.</h2>
            <p className="text-xl text-white/60 font-light mb-12">Join 20,000+ founders and CS leaders who read our newsletter to stay one step ahead of churn.</p>
            <form className="flex flex-col sm:flex-row gap-4 max-w-xl mx-auto" onSubmit={(e) => e.preventDefault()}>
              <input 
                type="email" 
                placeholder="Enter your work email address" 
                className="flex-1 px-6 py-4 bg-white/5 border border-white/20 text-white placeholder:text-white/40 focus:outline-hidden focus:border-brand transition-colors"
              />
              <Button size="lg" className="bg-brand text-white hover:bg-brand/90 border-none">
                Subscribe
              </Button>
            </form>
            <p className="text-sm text-white/40 mt-6">No spam. Unsubscribe at any time.</p>
          </div>
        </div>
      </section>
    </main>
  );
};
