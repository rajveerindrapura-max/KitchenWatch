import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
  X,
  Lock,
  CreditCard,
  ShieldCheck,
  Building2,
  User,
  Mail,
  KeyRound,
  CheckCircle2,
  Loader2,
  ArrowRight,
} from 'lucide-react';
import type { PricingPlan } from '../../content/site';
import { DASHBOARD_URL } from '../../lib/urls';

interface CheckoutModalProps {
  isOpen: boolean;
  onClose: () => void;
  selectedPlan: PricingPlan | null;
  isYearly: boolean;
}

function formatRupees(amount: number): string {
  return new Intl.NumberFormat('en-IN', {
    style: 'currency',
    currency: 'INR',
    maximumFractionDigits: 0,
  }).format(amount);
}

export default function CheckoutModal({
  isOpen,
  onClose,
  selectedPlan,
  isYearly,
}: CheckoutModalProps) {
  const [fullName, setFullName] = useState('');
  const [restaurantName, setRestaurantName] = useState('');
  const [emailOrPhone, setEmailOrPhone] = useState('');
  const [password, setPassword] = useState('');
  const [errors, setErrors] = useState<Record<string, string>>({});

  // Payment process states
  const [step, setStep] = useState<'form' | 'gateway' | 'success'>('form');
  const [paymentGatewayStatus, setPaymentGatewayStatus] = useState<string>(
    'Initializing test payment gateway...'
  );

  if (!isOpen || !selectedPlan) return null;

  const priceAmount = isYearly ? selectedPlan.price.yearly : selectedPlan.price.monthly;
  const billingPeriod = isYearly ? 'month (billed annually)' : 'month';

  const validate = () => {
    const errs: Record<string, string> = {};
    if (!fullName.trim()) errs.fullName = 'Full name is required';
    if (!restaurantName.trim()) errs.restaurantName = 'Restaurant or kitchen name is required';
    if (!emailOrPhone.trim()) {
      errs.emailOrPhone = 'Work email or phone number is required';
    } else {
      const clean = emailOrPhone.trim();
      const isEmail = clean.includes('@');
      const isPhone = /^\+?[0-9]{10,14}$/.test(clean.replace(/\s+/g, ''));
      if (!isEmail && !isPhone) {
        errs.emailOrPhone = 'Enter a valid email address or 10-digit mobile number';
      }
    }
    if (!password || password.length < 6) {
      errs.password = 'Password must be at least 6 characters';
    }
    setErrors(errs);
    return Object.keys(errs).length === 0;
  };

  const handleProceedToPay = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!validate()) return;

    // Trigger payment gateway flow
    setStep('gateway');
    setPaymentGatewayStatus('Connecting to secure payment gateway...');

    await new Promise((r) => setTimeout(r, 800));
    setPaymentGatewayStatus('Verifying sandbox test card & GST details...');

    await new Promise((r) => setTimeout(r, 900));
    setPaymentGatewayStatus('Processing subscription authorization...');

    await new Promise((r) => setTimeout(r, 800));
    setPaymentGatewayStatus('Payment verified! Provisioning restaurant workspace...');

    await new Promise((r) => setTimeout(r, 700));
    setStep('success');

    // Build authenticated Owner session payload
    const cleanId = emailOrPhone.trim();
    const isEmail = cleanId.includes('@');
    const initials =
      fullName
        .trim()
        .split(' ')
        .filter(Boolean)
        .map((n) => n[0])
        .slice(0, 2)
        .join('')
        .toUpperCase() || 'KW';

    const userId = `u_${Date.now()}`;
    const outletId = `o_${Date.now()}`;
    const empId = `EMP-${Math.floor(1000 + Math.random() * 9000)}`;

    const userPayload = {
      id: userId,
      employeeId: empId,
      name: fullName.trim(),
      role: 'owner',
      avatarInitials: initials,
      email: isEmail ? cleanId.toLowerCase() : `${cleanId.replace(/\D/g, '')}@kitchenwatch.local`,
      phone: !isEmail ? cleanId : undefined,
      password: password.trim(),
      status: 'active',
      is_paid: true,
      subscription_status: 'active',
      plan: selectedPlan.id,
      restaurant_name: restaurantName.trim(),
      lastActive: 'Just now',
      assignedOutlets: [outletId],
      assignedOutletId: 'all',
      outletId,
    };

    // Serialize and encode session token
    const jsonString = JSON.stringify(userPayload);
    const sessionToken = btoa(encodeURIComponent(jsonString));

    // Redirect to dashboard with authentication session
    setTimeout(() => {
      const destination = `${DASHBOARD_URL}/dashboard?session=${sessionToken}&state=newuser`;
      window.location.href = destination;
    }, 1200);
  };

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 overflow-y-auto bg-slate-950/60 backdrop-blur-sm">
        {/* Backdrop click */}
        <div className="fixed inset-0" onClick={onClose} aria-hidden="true" />

        {/* Modal Window */}
        <motion.div
          initial={{ opacity: 0, scale: 0.96, y: 12 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.96, y: 12 }}
          transition={{ duration: 0.2, ease: [0.16, 1, 0.3, 1] }}
          className="relative w-full max-w-xl bg-surface border border-border rounded-2xl shadow-2xl overflow-hidden z-10 my-8"
        >
          {/* Header */}
          <div className="flex items-center justify-between px-6 py-5 border-b border-border/80 bg-slate-50/70">
            <div className="flex items-center gap-2.5">
              <div className="w-8 h-8 rounded-lg bg-blue-tint text-blue border border-blue/20 flex items-center justify-center">
                <CreditCard size={17} strokeWidth={2} />
              </div>
              <div>
                <h3 className="font-sans font-semibold text-base text-ink leading-tight">
                  KitchenWatch Subscription Checkout
                </h3>
                <p className="text-xs text-muted">Direct instant activation with dashboard access</p>
              </div>
            </div>
            <button
              type="button"
              onClick={onClose}
              className="p-1.5 rounded-lg text-muted hover:text-ink hover:bg-slate-200/60 transition-colors"
              aria-label="Close checkout modal"
            >
              <X size={18} />
            </button>
          </div>

          {/* Plan Summary Strip */}
          <div className="px-6 py-3.5 bg-blue/5 border-b border-blue/15 flex items-center justify-between">
            <div>
              <div className="flex items-center gap-2">
                <span className="font-sans font-semibold text-sm text-ink">{selectedPlan.name} Plan</span>
                {selectedPlan.recommended && (
                  <span className="text-[10px] font-bold uppercase tracking-wider text-blue bg-blue/10 px-2 py-0.5 rounded-full">
                    Recommended
                  </span>
                )}
              </div>
              <span className="text-xs text-secondary font-medium">{selectedPlan.outlets}</span>
            </div>
            <div className="text-right">
              <span className="font-mono font-bold text-base text-ink">
                {formatRupees(priceAmount)}
              </span>
              <span className="text-xs text-muted block font-medium">/ {billingPeriod}</span>
            </div>
          </div>

          {/* Form Step */}
          {step === 'form' && (
            <form onSubmit={handleProceedToPay} className="p-6 space-y-4">
              {/* Full Name */}
              <div>
                <label className="block text-xs font-semibold text-ink mb-1.5" htmlFor="full-name">
                  Full Name
                </label>
                <div className="relative">
                  <div className="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none text-muted">
                    <User size={15} />
                  </div>
                  <input
                    id="full-name"
                    type="text"
                    required
                    value={fullName}
                    onChange={(e) => setFullName(e.target.value)}
                    placeholder="Vikram Mehta"
                    className="w-full pl-10 pr-3.5 py-2.5 text-sm rounded-xl border border-border bg-surface text-ink placeholder:text-muted/60 focus:outline-none focus:ring-2 focus:ring-blue/30 focus:border-blue transition-all"
                  />
                </div>
                {errors.fullName && <p className="text-xs text-rose-600 mt-1">{errors.fullName}</p>}
              </div>

              {/* Restaurant Name */}
              <div>
                <label className="block text-xs font-semibold text-ink mb-1.5" htmlFor="restaurant-name">
                  Restaurant / Kitchen Name
                </label>
                <div className="relative">
                  <div className="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none text-muted">
                    <Building2 size={15} />
                  </div>
                  <input
                    id="restaurant-name"
                    type="text"
                    required
                    value={restaurantName}
                    onChange={(e) => setRestaurantName(e.target.value)}
                    placeholder="Rasoi House & Cafe"
                    className="w-full pl-10 pr-3.5 py-2.5 text-sm rounded-xl border border-border bg-surface text-ink placeholder:text-muted/60 focus:outline-none focus:ring-2 focus:ring-blue/30 focus:border-blue transition-all"
                  />
                </div>
                {errors.restaurantName && (
                  <p className="text-xs text-rose-600 mt-1">{errors.restaurantName}</p>
                )}
              </div>

              {/* Email or Phone */}
              <div>
                <label className="block text-xs font-semibold text-ink mb-1.5" htmlFor="work-contact">
                  Work Email or Mobile Number
                </label>
                <div className="relative">
                  <div className="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none text-muted">
                    <Mail size={15} />
                  </div>
                  <input
                    id="work-contact"
                    type="text"
                    required
                    value={emailOrPhone}
                    onChange={(e) => setEmailOrPhone(e.target.value)}
                    placeholder="owner@rasoihouse.com or 9828000100"
                    className="w-full pl-10 pr-3.5 py-2.5 text-sm rounded-xl border border-border bg-surface text-ink placeholder:text-muted/60 focus:outline-none focus:ring-2 focus:ring-blue/30 focus:border-blue transition-all"
                  />
                </div>
                {errors.emailOrPhone && (
                  <p className="text-xs text-rose-600 mt-1">{errors.emailOrPhone}</p>
                )}
              </div>

              {/* Password */}
              <div>
                <label className="block text-xs font-semibold text-ink mb-1.5" htmlFor="password">
                  Account Password (min. 6 characters)
                </label>
                <div className="relative">
                  <div className="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none text-muted">
                    <KeyRound size={15} />
                  </div>
                  <input
                    id="password"
                    type="password"
                    required
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    placeholder="Create a secure password"
                    className="w-full pl-10 pr-3.5 py-2.5 text-sm rounded-xl border border-border bg-surface text-ink placeholder:text-muted/60 focus:outline-none focus:ring-2 focus:ring-blue/30 focus:border-blue transition-all"
                  />
                </div>
                {errors.password && <p className="text-xs text-rose-600 mt-1">{errors.password}</p>}
              </div>

              {/* Security guarantee line */}
              <div className="flex items-center gap-2 pt-1 text-[11px] text-muted">
                <ShieldCheck size={14} className="text-emerald-600 shrink-0" />
                <span>
                  Encrypted 256-bit payment gateway test sandbox. Cancel or switch plans anytime.
                </span>
              </div>

              {/* Submit CTA */}
              <div className="pt-3">
                <button
                  type="submit"
                  className="w-full py-3.5 px-4 rounded-xl bg-blue hover:bg-blueHover text-white font-semibold text-sm shadow-subtle hover:shadow-card active:scale-[0.99] transition-all flex items-center justify-center gap-2 cursor-pointer"
                >
                  <Lock size={15} />
                  <span>Proceed to Pay {formatRupees(priceAmount)}</span>
                  <ArrowRight size={15} />
                </button>
              </div>
            </form>
          )}

          {/* Payment Gateway Triggered Step */}
          {step === 'gateway' && (
            <div className="p-8 text-center space-y-5">
              <div className="w-16 h-16 rounded-2xl bg-blue-tint text-blue border border-blue/20 flex items-center justify-center mx-auto animate-pulse">
                <Loader2 size={30} className="animate-spin text-blue" />
              </div>
              <div>
                <h4 className="font-sans font-semibold text-lg text-ink mb-1">
                  Processing Payment Authorization
                </h4>
                <p className="text-sm text-secondary font-medium">{paymentGatewayStatus}</p>
              </div>

              <div className="p-4 bg-slate-50 rounded-xl border border-border text-xs text-muted max-w-sm mx-auto space-y-1.5 text-left">
                <div className="flex justify-between">
                  <span>Merchant:</span>
                  <strong className="text-ink">KitchenWatch Software Pvt Ltd</strong>
                </div>
                <div className="flex justify-between">
                  <span>Subscription:</span>
                  <span className="text-ink">{selectedPlan.name} ({billingPeriod})</span>
                </div>
                <div className="flex justify-between">
                  <span>Authorized Amount:</span>
                  <strong className="text-ink font-mono">{formatRupees(priceAmount)}</strong>
                </div>
              </div>

              <p className="text-[11px] text-muted">
                Do not refresh or close this window while we verify your transaction.
              </p>
            </div>
          )}

          {/* Success & Provisioning Step */}
          {step === 'success' && (
            <div className="p-8 text-center space-y-4">
              <div className="w-16 h-16 rounded-2xl bg-emerald-50 text-emerald-600 border border-emerald-200 flex items-center justify-center mx-auto">
                <CheckCircle2 size={32} />
              </div>
              <div>
                <h4 className="font-sans font-semibold text-xl text-ink mb-1">
                  Subscription Active & Verified!
                </h4>
                <p className="text-sm text-secondary">
                  Organization <strong className="text-ink">{restaurantName}</strong> is provisioned.
                </p>
              </div>

              <div className="flex items-center justify-center gap-2 text-xs text-blue bg-blue-tint py-2 px-4 rounded-full max-w-xs mx-auto border border-blue/20">
                <Loader2 size={13} className="animate-spin" />
                <span>Redirecting to your restaurant dashboard...</span>
              </div>
            </div>
          )}
        </motion.div>
      </div>
    </AnimatePresence>
  );
}
