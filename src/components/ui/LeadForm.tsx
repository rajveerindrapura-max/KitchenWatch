import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import * as z from 'zod';
import { motion } from 'framer-motion';
import { Loader2, CheckCircle2, AlertCircle } from 'lucide-react';
import { submitLead } from '../../lib/submitLead';
import { site } from '../../content/site';

const leadSchema = z.object({
  name: z.string().min(2, 'Please enter your name'),
  business: z.string().min(2, 'Please enter your restaurant/kitchen name'),
  outlets: z.string().min(1, 'Please select number of outlets'),
  phone: z.string().regex(/^[0-9+ -]{10,15}$/, 'Please enter a valid phone number (at least 10 digits)'),
  email: z.string().email('Please enter a valid email address'),
  message: z.string().optional(),
  // Honeypot field for bot trapping
  botTrap: z.string().max(0, 'Spam detected').optional(),
});

type LeadFormData = z.infer<typeof leadSchema>;

interface LeadFormProps {
  theme?: 'dark' | 'light';
  source?: string;
  onSuccess?: () => void;
}

export default function LeadForm({ theme = 'dark', source = 'homepage', onSuccess }: LeadFormProps) {
  const [submitted, setSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitError, setSubmitError] = useState<string | null>(null);

  const isDark = theme === 'dark';

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<LeadFormData>({
    resolver: zodResolver(leadSchema),
    defaultValues: {
      outlets: '1',
      botTrap: '',
    },
  });

  const onSubmit = async (data: LeadFormData) => {
    // If bot filled the hidden honeypot field, drop silently
    if (data.botTrap && data.botTrap.length > 0) {
      setSubmitted(true);
      return;
    }

    setIsSubmitting(true);
    setSubmitError(null);

    // Read UTM tags if present in URL
    const urlParams = new URLSearchParams(window.location.search);
    const utmSource = urlParams.get('utm_source') || '';
    const utmMedium = urlParams.get('utm_medium') || '';
    const utmCampaign = urlParams.get('utm_campaign') || '';

    try {
      await submitLead({
        name: data.name,
        business: data.business,
        outlets: data.outlets,
        phone: data.phone,
        email: data.email,
        message: `${data.message || ''} [Source: ${source}, UTM: ${utmSource}/${utmMedium}/${utmCampaign}]`.trim(),
      });
      setSubmitted(true);
      reset();
      onSuccess?.();
    } catch {
      setSubmitError('Unable to submit right now. Please message us directly on WhatsApp.');
    } finally {
      setIsSubmitting(false);
    }
  };

  if (submitted) {
    return (
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        className={`p-8 rounded-2xl text-center border ${
          isDark
            ? 'bg-white/5 border-white/15 text-white'
            : 'bg-emerald-50 border-emerald-200 text-ink shadow-subtle'
        }`}
      >
        <div className="w-12 h-12 rounded-full bg-emerald-500/10 border border-emerald-500/30 text-emerald-500 mx-auto flex items-center justify-center mb-4">
          <CheckCircle2 size={28} />
        </div>
        <h3 className="font-sans font-semibold text-xl text-white mb-2">Demo Request Received</h3>
        <p className="text-sm text-slate-300 max-w-md mx-auto mb-6 leading-relaxed">
          {site.cta.responsePromise}
        </p>
        <div className="inline-flex gap-3">
          <a
            href={`https://wa.me/${site.config.whatsappNumber}?text=${encodeURIComponent(
              site.config.whatsappPrefill
            )}`}
            target="_blank"
            rel="noopener noreferrer"
            className="px-5 py-2.5 rounded-full bg-white text-ink text-xs font-semibold hover:bg-slate-100 transition-colors shadow-xs"
          >
            Open WhatsApp chat now &rarr;
          </a>
        </div>
      </motion.div>
    );
  }

  const inputStyles = isDark
    ? 'w-full rounded-xl px-3.5 py-3 text-sm bg-white/5 border border-white/15 text-white placeholder:text-slate-500 focus:outline-none focus:border-blue focus:bg-white/10 transition-colors'
    : 'w-full rounded-xl px-3.5 py-3 text-sm bg-surface border border-border text-ink placeholder:text-muted focus:outline-none focus:border-blue transition-colors shadow-xs';

  const labelStyles = `block text-xs font-medium uppercase tracking-wider mb-1.5 ${
    isDark ? 'text-slate-300' : 'text-muted'
  }`;

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-4 text-left" noValidate>
      {/* Honeypot field (hidden from legitimate humans) */}
      <div className="hidden" aria-hidden="true">
        <label htmlFor="botTrap">Do not fill this</label>
        <input id="botTrap" type="text" {...register('botTrap')} tabIndex={-1} autoComplete="off" />
      </div>

      {/* Row 1: Name & Business */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <div>
          <label htmlFor="lead-name" className={labelStyles}>
            Your Name *
          </label>
          <input
            id="lead-name"
            type="text"
            placeholder="e.g. Rahul Sharma"
            className={inputStyles}
            {...register('name')}
          />
          {errors.name && (
            <p className="text-rose-400 text-xs mt-1 flex items-center gap-1 font-medium">
              <AlertCircle size={11} /> {errors.name.message}
            </p>
          )}
        </div>

        <div>
          <label htmlFor="lead-business" className={labelStyles}>
            Restaurant / Kitchen Name *
          </label>
          <input
            id="lead-business"
            type="text"
            placeholder="e.g. Spice Route Cafe"
            className={inputStyles}
            {...register('business')}
          />
          {errors.business && (
            <p className="text-rose-400 text-xs mt-1 flex items-center gap-1 font-medium">
              <AlertCircle size={11} /> {errors.business.message}
            </p>
          )}
        </div>
      </div>

      {/* Row 2: Outlets & Phone */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <div>
          <label htmlFor="lead-outlets" className={labelStyles}>
            Number of Outlets *
          </label>
          <select id="lead-outlets" className={inputStyles} {...register('outlets')}>
            <option value="1" className={isDark ? 'bg-slate-900 text-white' : ''}>1 outlet</option>
            <option value="2-3" className={isDark ? 'bg-slate-900 text-white' : ''}>2 to 3 outlets</option>
            <option value="4-6" className={isDark ? 'bg-slate-900 text-white' : ''}>4 to 6 outlets</option>
            <option value="7+" className={isDark ? 'bg-slate-900 text-white' : ''}>7 or more outlets</option>
          </select>
          {errors.outlets && (
            <p className="text-rose-400 text-xs mt-1 flex items-center gap-1 font-medium">
              <AlertCircle size={11} /> {errors.outlets.message}
            </p>
          )}
        </div>

        <div>
          <label htmlFor="lead-phone" className={labelStyles}>
            Phone / WhatsApp *
          </label>
          <input
            id="lead-phone"
            type="tel"
            placeholder="+91 98765 43210"
            className={inputStyles}
            {...register('phone')}
          />
          {errors.phone && (
            <p className="text-rose-400 text-xs mt-1 flex items-center gap-1 font-medium">
              <AlertCircle size={11} /> {errors.phone.message}
            </p>
          )}
        </div>
      </div>

      {/* Work Email */}
      <div>
        <label htmlFor="lead-email" className={labelStyles}>
          Work Email *
        </label>
        <input
          id="lead-email"
          type="email"
          placeholder="owner@restaurant.com"
          className={inputStyles}
          {...register('email')}
        />
        {errors.email && (
          <p className="text-rose-400 text-xs mt-1 flex items-center gap-1 font-medium">
            <AlertCircle size={11} /> {errors.email.message}
          </p>
        )}
      </div>

      {submitError && (
        <div className="p-3 rounded-xl bg-rose-500/10 text-rose-300 text-xs border border-rose-500/20 flex items-center gap-2">
          <AlertCircle size={14} />
          <span>{submitError}</span>
        </div>
      )}

      {/* Blue Pill Submit button */}
      <button
        type="submit"
        disabled={isSubmitting}
        className="w-full py-3.5 px-6 rounded-full bg-blue hover:bg-blueHover text-white font-medium text-sm shadow-xs transition-colors flex items-center justify-center gap-2 min-h-[44px] disabled:opacity-70 cursor-pointer active:scale-[0.99]"
      >
        {isSubmitting ? (
          <>
            <Loader2 size={16} className="animate-spin" />
            <span>Scheduling your demo...</span>
          </>
        ) : (
          <span>Book a free 15-minute demo</span>
        )}
      </button>
    </form>
  );
}
