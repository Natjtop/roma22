import React from 'react';
import { motion } from 'motion/react';
import { Button } from '../components/ui/Button';
import { Link } from 'react-router-dom';
import { ShieldCheck } from 'lucide-react';

export const Signup = () => {
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
            <h1 className="text-3xl font-display font-semibold mb-3">Створити акаунт</h1>
            <p className="text-ink-muted font-light">Почніть 14-денний безкоштовний період. Без кредитної картки.</p>
          </div>

          <form className="space-y-5" onSubmit={(e) => e.preventDefault()}>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
              <div>
                <label className="block text-sm font-medium text-ink mb-2" htmlFor="firstName">
                  First Name
                </label>
                <input 
                  type="text" 
                  id="firstName" 
                  className="w-full px-4 py-3 border border-line rounded-none focus:outline-hidden focus:border-brand focus:ring-1 focus:ring-brand transition-colors"
                  placeholder="Olena"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-ink mb-2" htmlFor="lastName">
                  Last Name
                </label>
                <input 
                  type="text" 
                  id="lastName" 
                  className="w-full px-4 py-3 border border-line rounded-none focus:outline-hidden focus:border-brand focus:ring-1 focus:ring-brand transition-colors"
                  placeholder="Kovalenko"
                />
              </div>
            </div>

            <div>
              <label className="block text-sm font-medium text-ink mb-2" htmlFor="company">
                Company Name
              </label>
              <input 
                type="text" 
                id="company" 
                className="w-full px-4 py-3 border border-line rounded-none focus:outline-hidden focus:border-brand focus:ring-1 focus:ring-brand transition-colors"
                placeholder="Acme Corp"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-ink mb-2" htmlFor="email">
                Робоча електронна пошта
              </label>
              <input 
                type="email" 
                id="email" 
                className="w-full px-4 py-3 border border-line rounded-none focus:outline-hidden focus:border-brand focus:ring-1 focus:ring-brand transition-colors"
                placeholder="olena@acme.com"
              />
            </div>
            
            <div>
              <label className="block text-sm font-medium text-ink mb-2" htmlFor="password">
                Пароль
              </label>
              <input 
                type="password" 
                id="password" 
                className="w-full px-4 py-3 border border-line rounded-none focus:outline-hidden focus:border-brand focus:ring-1 focus:ring-brand transition-colors"
                placeholder="••••••••"
              />
              <p className="text-xs text-ink-muted mt-2">Має містити щонайменше 8 символів.</p>
            </div>

            <Button type="submit" className="w-full mt-4 py-6 text-base">
              Створити акаунт
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
              Зареєструватися через Google
            </Button>
          </form>

          <div className="mt-8 text-center text-sm text-ink-muted">
            Вже маєте акаунт? <Link to="/login" className="text-brand font-medium hover:underline">Увійти</Link>
          </div>
        </motion.div>
      </div>

      {/* Right Side: Visual / Value Prop */}
      <div className="hidden lg:flex w-1/2 bg-brand text-white p-20 flex-col justify-between relative overflow-hidden">
        <div className="absolute inset-0 opacity-10" style={{ backgroundImage: 'radial-gradient(circle at center, white 1px, transparent 1px)', backgroundSize: '40px 40px' }} />
        <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-white/20 via-transparent to-transparent blur-3xl rounded-full translate-x-1/3 -translate-y-1/3" />
        
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="relative z-10"
        >
          <div className="micro-label text-white/80 mb-6 flex items-center gap-3">
            <span className="w-2 h-2 bg-white rounded-full animate-pulse" />
            Почніть утримувати клієнтів сьогодні
          </div>
          <h2 className="text-4xl lg:text-5xl font-display font-light leading-tight max-w-xl">
            Приєднуйтесь до понад 2,000 компаній, які використовують RetainIQ для захисту доходу та швидкого росту.
          </h2>
        </motion.div>

        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="relative z-10 space-y-10"
        >
          {[
            { title: "Предиктивна Аналітика", desc: "Виявляйте ризики відтоку до того, як вони стануться." },
            { title: "Автоматизоване Відновлення", desc: "Відновлюйте до 40% невдалих платежів." },
            { title: "Корпоративна Безпека", desc: "Відповідність SOC2 Type II та повне шифрування." }
          ].map((feature, i) => (
            <div key={i} className="flex items-start gap-5">
              <div className="w-12 h-12 rounded-full bg-white/10 flex items-center justify-center shrink-0 border border-white/20">
                <ShieldCheck className="w-6 h-6" />
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
                <p className="text-white/70 font-light text-lg">{feature.desc}</p>
              </div>
            </div>
          ))}
        </motion.div>
      </div>
    </main>
  );
};
