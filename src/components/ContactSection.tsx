import React from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';
import { toast } from 'react-toastify';
import { Mail, Phone, MapPin, Clock, Linkedin, Instagram, Facebook, Twitter, Github, Send, Loader2, Sparkles } from 'lucide-react';
import Reveal from './Reveal';

const schema = z.object({
  fullName: z.string().min(2, 'Please enter your full name'),
  businessEmail: z.string().email('Please enter a valid email'),
  phone: z.string().min(7, 'Please enter a valid phone number'),
  company: z.string().min(2, 'Please enter your company name'),
  service: z.string().min(1, 'Please select a service'),
  budget: z.string().min(1, 'Please select a budget range'),
  details: z.string().min(20, 'Please describe your project (at least 20 characters)'),
});

type FormData = z.infer<typeof schema>;

const services = [
  'Web Development', 'Mobile App Development', 'Custom Software Engineering', 'UI/UX Design Systems',
  'AI & Machine Learning', 'Cloud & DevOps Solutions', 'Digital Transformation', 'IT Consulting',
  'Cybersecurity & Auditing', 'Proprietary Product Inquiry', 'Other',
];
const budgets = ['Under $10,000', '$10,000 – $25,000', '$25,000 – $50,000', '$50,000 – $100,000', '$100,000+', 'Flexible / Exploratory'];

const inputClass = (hasError: boolean) =>
  `w-full rounded-lg border bg-white px-4 py-3 text-sm text-brand-950 placeholder-slate-400 transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-accent/40 ${
    hasError ? 'border-red-400' : 'border-slate-300 focus:border-accent'
  }`;

const ContactSection: React.FC<{ compact?: boolean }> = ({ compact }) => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting },
  } = useForm<FormData>({ resolver: zodResolver(schema) });

  const onSubmit = async (_data: FormData) => {
    await new Promise((r) => setTimeout(r, 1200));
    toast.success('Inquiry submitted successfully to NextGen IT Solution! Our team will contact you shortly.');
    reset();
  };

  return (
    <section
      id="contact"
      className="bg-slate-50 py-16 md:py-24"
      aria-labelledby="contact-heading"
    >
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        {!compact && (
          <Reveal className="mx-auto max-w-3xl text-center">
            <div className="inline-flex items-center gap-2 rounded-full border border-accent/30 bg-accent/10 px-3.5 py-1 text-xs font-bold uppercase tracking-wider text-accent-dark">
              <Sparkles className="h-3.5 w-3.5 text-accent-dark" />
              <span>Let's Connect</span>
            </div>
            <h2 id="contact-heading" className="mt-3 font-display text-3xl font-extrabold tracking-tight text-brand-950 sm:text-4xl">
              Start Building With NextGen IT Solution
            </h2>
            <p className="mt-4 text-base md:text-lg text-slate-600">
              Building Technology. Creating Possibilities. Share your ideas and requirements to explore what's possible.
            </p>
          </Reveal>
        )}

        <div className="mt-14 grid gap-12 lg:grid-cols-2">
          <Reveal>
            <h3 className="font-display text-2xl font-bold text-brand-950">Tell us about your vision.</h3>
            <p className="mt-3 text-slate-600 leading-relaxed">
              Whether you need end-to-end product engineering, cloud migration, AI workflows, or dedicated engineering talent, our team will review your specifications and get in touch within 24 hours.
            </p>
            <ul className="mt-8 space-y-5">
              {[
                { icon: Mail, label: 'Direct Email', value: 'sadiqmallick6422@gmail.com', href: 'mailto:sadiqmallick6422@gmail.com' },
                { icon: Phone, label: 'Phone Line', value: '+966596518726', href: 'tel:+966596518726' },
                { icon: MapPin, label: 'Headquarters', value: 'Al-Reem Tower, Abu Bakr Al Siddiq Rd, Teba District, Al Jubail - 35513, KSA', href: undefined },
                { icon: Clock, label: 'Support & Advisory Hours', value: 'Sun – Thu, 9:00 AM – 6:00 PM', href: undefined },
              ].map((c) => (
                <li key={c.label} className="flex items-start gap-4">
                  <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-gradient-to-br from-accent/15 to-purple/15 text-accent-dark shadow-sm">
                    <c.icon className="h-5 w-5" />
                  </span>
                  <div>
                    <p className="text-sm font-semibold text-brand-950">{c.label}</p>
                    {c.href ? (
                      <a href={c.href} className="text-sm text-slate-600 transition-colors hover:text-accent-dark font-medium">
                        {c.value}
                      </a>
                    ) : (
                      <p className="text-sm text-slate-600">{c.value}</p>
                    )}
                  </div>
                </li>
              ))}
            </ul>
            <div className="mt-8 flex gap-3">
              {[
                { icon: Linkedin, label: 'LinkedIn' },
                { icon: Instagram, label: 'Instagram' },
                { icon: Facebook, label: 'Facebook' },
                { icon: Twitter, label: 'X (Twitter)' },
                { icon: Github, label: 'GitHub' },
              ].map((s) => (
                <a
                  key={s.label}
                  href="#"
                  aria-label={s.label}
                  className="rounded-lg border border-slate-200 bg-white p-2.5 text-slate-600 transition-all duration-200 hover:-translate-y-0.5 hover:border-accent hover:text-accent-dark hover:shadow-sm focus:outline-none focus-visible:ring-2 focus-visible:ring-accent"
                >
                  <s.icon className="h-5 w-5" />
                </a>
              ))}
            </div>
          </Reveal>

          <Reveal delay={0.1}>
            <form
              onSubmit={handleSubmit(onSubmit)}
              noValidate
              className="rounded-2xl border border-slate-200/90 bg-white p-8 shadow-sm"
            >
              <div className="grid gap-5 sm:grid-cols-2">
                <div>
                  <label htmlFor="fullName" className="mb-1.5 block text-sm font-semibold text-brand-950">
                    Full Name <span className="text-red-500" aria-hidden="true">*</span>
                  </label>
                  <input id="fullName" type="text" placeholder="John Smith" {...register('fullName')} className={inputClass(!!errors.fullName)} />
                  {errors.fullName && <p className="mt-1.5 text-xs text-red-500" role="alert">{errors.fullName.message}</p>}
                </div>
                <div>
                  <label htmlFor="businessEmail" className="mb-1.5 block text-sm font-semibold text-brand-950">
                    Business Email <span className="text-red-500" aria-hidden="true">*</span>
                  </label>
                  <input id="businessEmail" type="email" placeholder="john@company.com" {...register('businessEmail')} className={inputClass(!!errors.businessEmail)} />
                  {errors.businessEmail && <p className="mt-1.5 text-xs text-red-500" role="alert">{errors.businessEmail.message}</p>}
                </div>
                <div>
                  <label htmlFor="phone" className="mb-1.5 block text-sm font-semibold text-brand-950">
                    Phone Number <span className="text-red-500" aria-hidden="true">*</span>
                  </label>
                  <input id="phone" type="tel" placeholder="+966 59 651 8726" {...register('phone')} className={inputClass(!!errors.phone)} />
                  {errors.phone && <p className="mt-1.5 text-xs text-red-500" role="alert">{errors.phone.message}</p>}
                </div>
                <div>
                  <label htmlFor="company" className="mb-1.5 block text-sm font-semibold text-brand-950">
                    Company / Organization <span className="text-red-500" aria-hidden="true">*</span>
                  </label>
                  <input id="company" type="text" placeholder="Company Inc." {...register('company')} className={inputClass(!!errors.company)} />
                  {errors.company && <p className="mt-1.5 text-xs text-red-500" role="alert">{errors.company.message}</p>}
                </div>
                <div>
                  <label htmlFor="service" className="mb-1.5 block text-sm font-semibold text-brand-950">
                    Primary Service Needed <span className="text-red-500" aria-hidden="true">*</span>
                  </label>
                  <select id="service" defaultValue="" {...register('service')} className={inputClass(!!errors.service)}>
                    <option value="" disabled>Select a capability</option>
                    {services.map((s) => <option key={s} value={s}>{s}</option>)}
                  </select>
                  {errors.service && <p className="mt-1.5 text-xs text-red-500" role="alert">{errors.service.message}</p>}
                </div>
                <div>
                  <label htmlFor="budget" className="mb-1.5 block text-sm font-semibold text-brand-950">
                    Estimated Budget <span className="text-red-500" aria-hidden="true">*</span>
                  </label>
                  <select id="budget" defaultValue="" {...register('budget')} className={inputClass(!!errors.budget)}>
                    <option value="" disabled>Select an investment tier</option>
                    {budgets.map((b) => <option key={b} value={b}>{b}</option>)}
                  </select>
                  {errors.budget && <p className="mt-1.5 text-xs text-red-500" role="alert">{errors.budget.message}</p>}
                </div>
                <div className="sm:col-span-2">
                  <label htmlFor="details" className="mb-1.5 block text-sm font-semibold text-brand-950">
                    Project Vision & Objectives <span className="text-red-500" aria-hidden="true">*</span>
                  </label>
                  <textarea
                    id="details"
                    rows={5}
                    placeholder="Describe your current tech challenges, expected deliverables, and target launch timelines..."
                    {...register('details')}
                    className={`${inputClass(!!errors.details)} resize-y`}
                  />
                  {errors.details && <p className="mt-1.5 text-xs text-red-500" role="alert">{errors.details.message}</p>}
                </div>
              </div>
              <button
                type="submit"
                disabled={isSubmitting}
                className="mt-6 inline-flex w-full items-center justify-center gap-2 rounded-lg bg-gradient-to-r from-accent via-accent-dark to-purple px-6 py-3.5 text-base font-semibold text-white shadow-brand-glow transition-all duration-300 hover:scale-[1.02] hover:shadow-lg focus:outline-none focus-visible:ring-2 focus-visible:ring-accent/60 disabled:cursor-not-allowed disabled:opacity-70 sm:w-auto"
              >
                {isSubmitting ? (
                  <>
                    <Loader2 className="h-5 w-5 animate-spin" /> Sending to NextGen...
                  </>
                ) : (
                  <>
                    Send Project Inquiry <Send className="h-4 w-4" />
                  </>
                )}
              </button>
            </form>
          </Reveal>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;