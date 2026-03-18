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
            Рішення за Ролями та Галузями
          </div>
          <h1 className="text-6xl lg:text-8xl font-display font-semibold tracking-tight mb-8">
            Створено для сучасних команд з управління доходами.
          </h1>
          <p className="text-xl lg:text-2xl text-ink-muted font-light leading-relaxed mb-12">
            Незалежно від того, чи ви засновник, який захищає капітал, фінансовий лідер, який звіряє доходи, або менеджер з успіху клієнтів, який рятує акаунти, RetainIQ має рішення, адаптоване для ваших конкретних потреб.
          </p>
          <div className="flex flex-wrap gap-4">
            <Button size="lg">Знайти Своє Рішення</Button>
            <Button variant="outline" size="lg">Зв'язатися з Відділом Продажів</Button>
          </div>
        </div>
      </section>

      {/* Solutions List (Roles) */}
      <section className="bg-paper py-32 border-y border-line">
        <div className="max-w-[1800px] mx-auto px-8 lg:px-20 space-y-32">
          {[
            {
              role: "Для Засновників та CEO",
              title: "Захистіть свій капітал та оцінку.",
              desc: "Відтік клієнтів — це тихий вбивця оцінок SaaS-компаній. RetainIQ надає вам метрики, готові для ради директорів, та автоматизовані робочі процеси, щоб забезпечити чисте утримання доходу вище 110%.",
              icon: <Building2 className="w-8 h-8" />,
              benefits: ["Звітність для ради директорів", "Захист оцінки компанії", "Автоматизоване відновлення доходу"]
            },
            {
              role: "Для Фінансових Лідерів",
              title: "Звіряйте доходи та точно прогнозуйте.",
              desc: "Припиніть вгадувати свій грошовий потік. Отримайте точну видимість у реальному часі змін MRR, невдалих платежів та очікуваних показників відновлення.",
              icon: <Briefcase className="w-8 h-8" />,
              benefits: ["Точне прогнозування грошових потоків", "Автоматизоване стягнення боргів", "Звітність за стандартами GAAP"]
            },
            {
              role: "Для Менеджерів з Успіху Клієнтів",
              title: "Зосередьтеся на акаунтах, які потребують допомоги.",
              desc: "Не чекайте на запит про скасування. Наш предиктивний скоринг точно вказує вашій команді, які акаунти знаходяться в зоні ризику, і які дії потрібно вжити, щоб їх врятувати.",
              icon: <Users className="w-8 h-8" />,
              benefits: ["Предиктивний скоринг відтоку", "Автоматизовані сценарії дій", "Відстеження показників здоров'я"]
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
                <Button variant="outline">Дізнатися більше про {solution.role.split(' ')[1]}</Button>
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
            <h2 className="text-4xl font-display font-semibold mb-6">Адаптовано для вашої бізнес-моделі.</h2>
            <p className="text-xl text-ink-muted font-light">Різні моделі підписок мають різну динаміку відтоку. Ми адаптуємося до вашої.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { title: "B2B SaaS", desc: "Відстежуйте здоров'я на рівні акаунта, використання робочих місць та поновлення контрактів.", icon: <Building2 className="w-6 h-6" /> },
              { title: "Споживчі Підписки", desc: "Керуйте великим обсягом відтоку з низьким ACV за допомогою автоматизованих послідовностей відновлення.", icon: <ShoppingCart className="w-6 h-6" /> },
              { title: "Цифрові Медіа", desc: "Аналізуйте патерни споживання контенту, щоб передбачити відмову підписників.", icon: <Video className="w-6 h-6" /> }
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
                  Переглянути кейси <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
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
            <div className="micro-label text-brand mb-6">Екосистема Інтеграцій</div>
            <h2 className="text-4xl lg:text-5xl font-display font-semibold mb-6">Працює з вашим існуючим стеком.</h2>
            <p className="text-xl text-ink-muted font-light">Не потрібно змінювати ваші поточні інструменти. RetainIQ безшовно інтегрується з вашими платіжними шлюзами, CRM та системами підтримки.</p>
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
                { title: "SOC 2 Type II", desc: "Щорічний аудит безпеки", icon: <FileText className="w-5 h-5" /> },
                { title: "GDPR Compliant", desc: "Повний захист даних ЄС", icon: <CheckCircle2 className="w-5 h-5" /> },
                { title: "PCI DSS", desc: "Безпека платіжних даних", icon: <ShoppingCart className="w-5 h-5" /> },
                { title: "Шифрування", desc: "AES-256 в стані спокою", icon: <Briefcase className="w-5 h-5" /> }
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
              <div className="micro-label text-brand mb-6">Безпека корпоративного рівня</div>
              <h2 className="text-4xl lg:text-5xl font-display font-semibold mb-8">Ваші дані в безпеці.</h2>
              <p className="text-xl text-ink-muted font-light leading-relaxed mb-8">
                Ми розуміємо, що дані про доходи є найбільш чутливою інформацією вашого бізнесу. Тому ми побудували RetainIQ з безпекою як фундаментальним принципом, а не як додатковою функцією.
              </p>
              <Button variant="outline">Читати політику безпеки</Button>
            </div>
          </div>
        </div>
      </section>

      {/* Before / After */}
      <section className="py-32 bg-ink text-white">
        <div className="max-w-[1800px] mx-auto px-8 lg:px-20">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            <div className="p-12 border border-white/10 bg-white/5">
              <div className="micro-label text-white/40 mb-8">До RetainIQ</div>
              <ul className="space-y-6">
                {[
                  "Дізнаєтесь про відтік клієнта після того, як він скасував підписку.",
                  "Використовуєте загальні, універсальні графіки повторних спроб для невдалих платежів.",
                  "Вручну експортуєте дані Stripe в Excel для розрахунку MRR.",
                  "Команди з успіху клієнтів вгадують, які акаунти потребують уваги."
                ].map((item, i) => (
                  <li key={i} className="flex items-start gap-4 text-white/60 font-light">
                    <div className="w-6 h-6 rounded-full bg-white/10 flex items-center justify-center shrink-0 mt-0.5 text-xs">✕</div>
                    {item}
                  </li>
                ))}
              </ul>
            </div>
            <div className="p-12 border border-brand bg-brand/10">
              <div className="micro-label text-brand mb-8">Після RetainIQ</div>
              <ul className="space-y-6">
                {[
                  "Отримуєте автоматичні сповіщення за 30 днів до відтоку цінного акаунта.",
                  "Відновлюєте на 40% більше невдалих платежів за допомогою логіки повторних спроб на базі машинного навчання.",
                  "Інформаційні панелі в реальному часі, готові для ради директорів, для всіх метрик доходу.",
                  "Команди з успіху клієнтів озброєні пріоритетними списками акаунтів у зоні ризику та сценаріями дій."
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
        <h2 className="text-4xl lg:text-5xl font-display font-semibold mb-8">Подивіться, як це працює для вашої команди.</h2>
        <div className="flex justify-center gap-4">
          <Button size="lg">Замовити Демо</Button>
          <Button variant="outline" size="lg">Переглянути Ціни</Button>
        </div>
      </section>
    </main>
  );
};
