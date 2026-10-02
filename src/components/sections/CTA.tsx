import { useState, type FormEvent } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Loader2, CheckCircle, MessageCircle } from 'lucide-react';
import { site } from '../../content/site';
import { submitLead, type LeadData } from '../../lib/submitLead';

type FormState = 'idle' | 'loading' | 'success' | 'error';

function InputField({
  label,
  id,
  type = 'text',
  placeholder,
  value,
  onChange,
  required,
  error,
}: {
  label: string;
  id: string;
  type?: string;
  placeholder: string;
  value: string;
  onChange: (v: string) => void;
  required?: boolean;
  error?: string;
}) {
  return (
    <div>
      <label htmlFor={id} className="block text-sm font-jakarta font-semibold text-white/80 mb-1.5">
        {label} {required && <span className="text-red-400">*</span>}
      </label>
      <input
        id={id}
        type={type}
        placeholder={placeholder}
        value={value}
        onChange={(e) => onChange(e.target.value)}
        required={required}
        className={`w-full bg-white/8 border rounded-xl px-4 py-3 text-white placeholder:text-white/30 text-sm focus:outline-none focus:ring-2 focus:ring-blue transition-colors ${
          error ? 'border-red-400/60 focus:ring-red-400' : 'border-white/15 focus:ring-blue'
        }`}
      />
      {error && <p className="text-xs text-red-400 mt-1">{error}</p>}
    </div>
  );
}

export default function CTA() {
  const form = site.cta.form;
  const [state, setState] = useState<FormState>('idle');
  const [errors, setErrors] = useState<Record<string, string>>({});

  const [fields, setFields] = useState<LeadData & { outlets: string }>({
    name: '',
    business: '',
    outlets: '',
    phone: '',
    email: '',
    message: '',
  });

  function set(key: keyof typeof fields, value: string) {
    setFields((f) => ({ ...f, [key]: value }));
    setErrors((e) => ({ ...e, [key]: '' }));
  }

  function validate(): boolean {
    const newErrors: Record<string, string> = {};
    if (!fields.name.trim()) newErrors.name = 'Your name is required.';
    if (!fields.business.trim()) newErrors.business = 'Business name is required.';
    if (!fields.outlets) newErrors.outlets = 'Please select an option.';
    if (!fields.phone.trim()) {
      newErrors.phone = 'Phone number is required.';
    } else if (fields.phone.replace(/\D/g, '').length < 10) {
      newErrors.phone = 'Enter a valid 10+ digit number.';
    }
    if (!fields.email.trim()) {
      newErrors.email = 'Email address is required.';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(fields.email)) {
      newErrors.email = 'Enter a valid email address.';
    }
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  }

  async function onSubmit(e: FormEvent) {
    e.preventDefault();
    if (!validate()) return;
    setState('loading');
    try {
      await submitLead(fields);
      setState('success');
    } catch {
      setState('error');
    }
  }

  return (
    <section id="cta" className="bg-dark px-6 py-[80px] md:py-[140px]">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-16 items-start">
        {/* Left */}
        <div>
          <h2
            className="font-jakarta font-bold text-white tracking-tight mb-5"
            style={{ fontSize: 'clamp(36px, 5vw, 72px)', lineHeight: 1.05 }}
          >
            {site.cta.heading}
          </h2>
          <p className="text-white/60 text-lg leading-relaxed mb-10">{site.cta.subline}</p>

          {/* WhatsApp button */}
          {site.cta.whatsapp.number !== 'TODO' && (
            <a
              href={`https://wa.me/${site.cta.whatsapp.number}`}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2.5 px-6 py-3 rounded-pill border border-white/20 text-white hover:bg-white/5 transition-colors font-jakarta font-semibold text-sm"
            >
              <MessageCircle size={18} />
              {site.cta.whatsapp.label}
            </a>
          )}
          {site.cta.whatsapp.number === 'TODO' && (
            <div className="text-xs text-amber-400/70 bg-amber-400/5 border border-amber-400/20 px-3 py-2 rounded-lg inline-block">
              TODO: Add WhatsApp number in site.ts before launch
            </div>
          )}
        </div>

        {/* Right: Form */}
        <div className="bg-white/5 border border-white/10 rounded-card p-7 md:p-8">
          <AnimatePresence mode="wait">
            {state === 'success' ? (
              <motion.div
                key="success"
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                className="py-10 text-center"
              >
                <motion.div
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  transition={{ type: 'spring', stiffness: 200, damping: 15 }}
                  className="w-14 h-14 rounded-full bg-green-500/15 flex items-center justify-center mx-auto mb-5"
                >
                  <CheckCircle size={28} className="text-green-400" />
                </motion.div>
                <h3 className="font-jakarta font-bold text-white text-xl mb-2">
                  {form.successHeading}
                </h3>
                <p className="text-white/60 text-sm leading-relaxed">{form.successMessage}</p>
              </motion.div>
            ) : (
              <motion.form
                key="form"
                onSubmit={onSubmit}
                noValidate
                className="space-y-4"
              >
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <InputField
                    label="Your name"
                    id="name"
                    placeholder={form.namePlaceholder}
                    value={fields.name}
                    onChange={(v) => set('name', v)}
                    required
                    error={errors.name}
                  />
                  <InputField
                    label="Business name"
                    id="business"
                    placeholder={form.businessPlaceholder}
                    value={fields.business}
                    onChange={(v) => set('business', v)}
                    required
                    error={errors.business}
                  />
                </div>

                <div>
                  <label htmlFor="outlets" className="block text-sm font-jakarta font-semibold text-white/80 mb-1.5">
                    Number of outlets <span className="text-red-400">*</span>
                  </label>
                  <select
                    id="outlets"
                    value={fields.outlets}
                    onChange={(e) => set('outlets', e.target.value)}
                    required
                    className={`w-full bg-white/8 border rounded-xl px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-blue transition-colors ${
                      fields.outlets ? 'text-white' : 'text-white/30'
                    } ${errors.outlets ? 'border-red-400/60' : 'border-white/15'}`}
                    style={{ backgroundColor: 'rgba(255,255,255,0.08)' }}
                  >
                    <option value="" disabled style={{ color: '#64748b' }}>Select number of outlets</option>
                    {form.outletOptions.map((o) => (
                      <option key={o} value={o} style={{ color: '#0B1220', background: '#fff' }}>
                        {o}
                      </option>
                    ))}
                  </select>
                  {errors.outlets && <p className="text-xs text-red-400 mt-1">{errors.outlets}</p>}
                </div>

                <InputField
                  label="Phone or WhatsApp"
                  id="phone"
                  type="tel"
                  placeholder={form.phonePlaceholder}
                  value={fields.phone}
                  onChange={(v) => set('phone', v)}
                  required
                  error={errors.phone}
                />
                <InputField
                  label="Email address"
                  id="email"
                  type="email"
                  placeholder={form.emailPlaceholder}
                  value={fields.email}
                  onChange={(v) => set('email', v)}
                  required
                  error={errors.email}
                />

                <div>
                  <label htmlFor="message" className="block text-sm font-jakarta font-semibold text-white/80 mb-1.5">
                    Anything else (optional)
                  </label>
                  <textarea
                    id="message"
                    placeholder={form.messagePlaceholder}
                    value={fields.message}
                    onChange={(e) => set('message', e.target.value)}
                    rows={3}
                    className="w-full bg-white/8 border border-white/15 rounded-xl px-4 py-3 text-white placeholder:text-white/30 text-sm focus:outline-none focus:ring-2 focus:ring-blue transition-colors resize-none"
                  />
                </div>

                {state === 'error' && (
                  <p className="text-sm text-red-400 bg-red-400/10 border border-red-400/20 rounded-xl px-4 py-3">
                    Something went wrong. Please try again or reach out directly.
                  </p>
                )}

                <button
                  type="submit"
                  disabled={state === 'loading'}
                  className="w-full py-3.5 rounded-pill bg-blue text-white font-jakarta font-semibold text-sm hover:bg-blue-hover transition-colors disabled:opacity-60 flex items-center justify-center gap-2"
                >
                  {state === 'loading' ? (
                    <>
                      <Loader2 size={16} className="animate-spin" />
                      Sending...
                    </>
                  ) : (
                    form.submitLabel
                  )}
                </button>
              </motion.form>
            )}
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
}