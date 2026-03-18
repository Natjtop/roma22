import React from 'react';
import { motion } from 'motion/react';
import { Button } from '../components/ui/Button';
import { Link } from 'react-router-dom';
import { Quote } from 'lucide-react';

export const Login = () => {
  return (
    <main className="min-h-screen flex">
      {/* Left Side: Form */}
      <div className="w-full lg:w-1/2 flex items-center justify-center p-6 sm:p-8 lg:p-20 bg-white lg:bg-paper min-h-screen lg:min-h-0">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
          className="w-full max-w-md bg-white p-6 sm:p-12 lg:border lg:border-line lg:shadow-2xl relative"
        >
          <div className="hidden lg:block absolute top-0 left-0 w-full h-1 bg-brand" />
          <div className="text-center mb-10">
            <Link to="/" className="inline-block mb-8 hover:opacity-80 transition-opacity">
              <span className="font-display font-bold text-3xl tracking-tighter text-ink">RETAINIQ</span>
            </Link>
            <h1 className="text-3xl font-display font-semibold mb-3">З поверненням</h1>
            <p className="text-ink-muted font-light">Введіть свої дані для доступу до панелі керування.</p>
          </div>

          <form className="space-y-6" onSubmit={(e) => e.preventDefault()}>
            <div>
              <label className="block text-sm font-medium text-ink mb-2" htmlFor="email">
                Робоча електронна пошта
              </label>
              <input 
                type="email" 
                id="email" 
                className="w-full px-4 py-3 border border-line rounded-none focus:outline-hidden focus:border-brand focus:ring-1 focus:ring-brand transition-colors"
                placeholder="you@company.com"
              />
            </div>
            
            <div>
              <div className="flex items-center justify-between mb-2">
                <label className="block text-sm font-medium text-ink" htmlFor="password">
                  Пароль
                </label>
                <a href="#" className="text-xs text-brand hover:underline">Забули пароль?</a>
              </div>
              <input 
                type="password" 
                id="password" 
                className="w-full px-4 py-3 border border-line rounded-none focus:outline-hidden focus:border-brand focus:ring-1 focus:ring-brand transition-colors"
                placeholder="••••••••"
              />
            </div>

            <Button type="submit" className="w-full py-6 text-base">
              Увійти
            </Button>
            
            <div className="relative flex items-center py-2">
              <div className="flex-grow border-t border-line"></div>
              <span className="flex-shrink-0 mx-4 text-ink-muted text-xs uppercase tracking-widest">Або</span>
              <div className="flex-grow border-t border-line"></div>
            </div>

            <Button variant="outline" type="button" className="w-full py-6 text-base flex items-center justify-center gap-3 hover:bg-paper transition-colors">
              <svg className="w-4 h-4" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" fill="#4285F4"/>
                <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853"/>
                <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" fill="#FBBC05"/>
                <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" fill="#EA4335"/>
              </svg>
              Увійти через Google
            </Button>
          </form>

          <div className="mt-8 text-center text-sm text-ink-muted">
            Немає акаунту? <Link to="/signup" className="text-brand font-medium hover:underline">Розпочніть безкоштовний період</Link>
          </div>
        </motion.div>
      </div>

      {/* Right Side: Visual / Testimonial */}
      <div className="hidden lg:flex w-1/2 bg-ink text-white p-20 flex-col justify-between relative overflow-hidden">
        <div className="absolute inset-0 opacity-10" style={{ backgroundImage: 'radial-gradient(circle at center, white 1px, transparent 1px)', backgroundSize: '40px 40px' }} />
        <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-brand/20 via-transparent to-transparent blur-3xl rounded-full translate-x-1/3 -translate-y-1/3" />
        
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="relative z-10"
        >
          <div className="micro-label text-brand mb-6 flex items-center gap-3">
            <span className="w-2 h-2 bg-brand rounded-full animate-pulse" />
            RetainIQ Intelligence
          </div>
          <h2 className="text-4xl lg:text-5xl font-display font-light leading-tight max-w-xl">
            "Раніше ми дізнавалися про відтік клієнта після скасування підписки. Тепер ми знаємо про це за 30 днів."
          </h2>
        </motion.div>

        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="relative z-10"
        >
          <Quote className="w-12 h-12 text-brand/50 mb-8" />
          <p className="text-xl font-light text-white/80 mb-10 max-w-lg leading-relaxed">
            Предиктивні моделі RetainIQ допомогли нам виявити акаунти з ризиком з точністю 94%, що дозволило нашій команді CS зберегти понад $1.2M ARR лише за минулий квартал.
          </p>
          <div className="flex items-center gap-5">
            <div className="w-14 h-14 bg-white/10 rounded-full flex items-center justify-center font-display font-bold text-xl border border-white/20">СД</div>
            <div>
              <div className="font-medium text-lg">Сара Дженкінс</div>
              <div className="text-white/50">VP of Customer Success, Linear</div>
            </div>
          </div>
        </motion.div>
      </div>
    </main>
  );
};
