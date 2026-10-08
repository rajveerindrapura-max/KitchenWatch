// KitchenWatch marketing site copy and configuration.
// Single source of truth. All copy, flags, prices, and links live here.
// Fields with confirm: true require founder confirmation and are tracked in CONTENT_TODO.md.

export interface PlanPricing {
  monthly: number;
  yearly: number;
  confirm: boolean;
}

export interface PricingPlan {
  id: 'starter' | 'growth' | 'business';
  name: string;
  outlets: string;
  price: PlanPricing;
  features: string[];
  recommended?: boolean;
}

export const site = {
  // Environment & External URLs
  config: {
    appUrl: (typeof import.meta !== 'undefined' && import.meta.env?.VITE_APP_URL) || 'https://app.kitchenwatch.in',
    whatsappNumber: (typeof import.meta !== 'undefined' && import.meta.env?.VITE_WHATSAPP_NUMBER) || '919876543210',
    whatsappPrefill: 'Hi, I would like to know more about KitchenWatch',
    bookingUrl: (typeof import.meta !== 'undefined' && import.meta.env?.VITE_BOOKING_URL) || 'https://cal.com/kitchenwatch/demo',
    leadEndpoint: (typeof import.meta !== 'undefined' && import.meta.env?.VITE_LEAD_ENDPOINT) || '/api/lead',
    analyticsId: (typeof import.meta !== 'undefined' && import.meta.env?.VITE_ANALYTICS_ID) || '',
    confirm: {
      whatsappNumber: true,
      bookingUrl: true,
      appUrl: true,
      leadEndpoint: true,
    },
  },

  // Feature Flags (Auto-hide missing real content per core rules)
  flags: {
    showFounder: false, // Set true once real founder name, bio, and photo are supplied
    showFounderVideo: false, // Set true when 30-60s founder video is provided
    showTestimonials: false, // No fake reviews allowed; kept false
    showCustomerLogos: false, // No fake logos allowed; kept false
    showStats: false, // No fake metrics; kept false
    showAnnouncement: true, // Deep green announcement strip at top
  },

  announcement: {
    text: 'Early Access Cohort now onboarding Indian restaurant groups.',
    linkText: 'Apply for pilot access ›',
    linkHref: '#pilot',
  },

  meta: {
    title: 'KitchenWatch — Restaurant Inventory Control Software India',
    description:
      'Simple multi-outlet inventory control for restaurants, cafes and cloud kitchens. Know stock, stop wastage, track transfers.',
    keywords:
      'restaurant inventory management software India, stock control for restaurants, multi-outlet restaurant inventory, restaurant wastage tracking',
    canonical: 'https://kitchenwatch.in',
    ogImage: '/og-image.png',
  },

  // Global Navigation (Max 5 links per core principle)
  nav: {
    links: [
      { label: 'Product', href: '#product' },
      { label: 'Features', href: '#features' },
      { label: 'Pricing', href: '#pricing' },
      { label: 'About', href: '#about' },
      { label: 'FAQ', href: '#faq' },
    ],
    loginText: 'Log in',
    ctaPrimary: 'Book a free demo',
    ctaSecondary: 'Start free trial',
  },

  // Section 1: Hero (Approved copy preserved; trust line updated)
  hero: {
    pill: 'Now onboarding early partners',
    headlinePre: 'Know your',
    headlineSerif: 'stock.',
    headlinePost: 'Move it where it\'s needed.',
    subheadline:
      'KitchenWatch gives restaurant owners one simple dashboard to control inventory, wastage and transfers across every outlet.',
    ctaPrimary: 'Book a free demo',
    ctaSecondary: 'Start free trial',
    trustLine:
      'For restaurants, cafes and cloud kitchens. From one outlet to many. Works alongside your existing POS.',
  },

  // Common marquee items (Neutral, real kitchen goods)
  commonItems: [
    'Chicken',
    'Cooking oil',
    'Rice',
    'Tomatoes',
    'Milk',
    'Flour',
    'Bread',
    'Butter',
    'Paneer',
    'Onions',
  ],

  // Section 2: Problem & Benefits (Single animated story)
  problemBenefits: {
    sectionLabel: 'The problem',
    problemStatement:
      'Stock lives in notebooks, spreadsheets and WhatsApp. One outlet runs out while another is overstocked. You find out too late.',
    problemWords: [
      'Stock',
      'lives',
      'in',
      'notebooks,',
      'spreadsheets',
      'and',
      'WhatsApp.',
      'One',
      'outlet',
      'runs',
      'out',
      'while',
      'another',
      'is',
      'overstocked.',
      'You',
      'find',
      'out',
      'too',
      'late.',
    ],
    benefitsHeading: 'Four ways KitchenWatch fixes it',
    benefits: [
      {
        id: 'live-stock',
        heading: 'Always know what is in stock',
        supporting: 'Live count on every phone. No manual counting at midnight.',
        targetId: 'features',
        visualType: 'bar-fill' as const,
      },
      {
        id: 'rupee-wastage',
        heading: 'See wastage in rupees before month end',
        supporting: 'Every damaged or expired item logged with cost immediately.',
        targetId: 'features',
        visualType: 'rupee-counter' as const,
      },
      {
        id: 'transfers',
        heading: 'Move stock to where it is needed',
        supporting: 'Transfer between outlets with digital confirmation from both sides.',
        targetId: 'features',
        visualType: 'transfer-packet' as const,
      },
      {
        id: 'phone-check',
        heading: 'Check every outlet from your phone',
        supporting: 'Owners switch between outlets in one second without calling managers.',
        targetId: 'features',
        visualType: 'outlet-toggle' as const,
      },
    ],
  },

  // Section 3: Interactive Product Demo (Sample data only)
  productDemo: {
    heading: 'See how it works in 30 seconds',
    subheading: 'Click through a real KitchenWatch workflow. Sample data shown.',
    sampleDataBadge: 'Sample data',
    scenarios: [
      {
        id: 'outlets',
        number: '01',
        title: 'See every outlet at once',
        desc: 'Check stock value, alerts and wastage across one outlet or all of them.',
        caption: 'One clean view for all your outlets, with instant live totals.',
        hint: 'Try switching outlets',
        outlets: ['All outlets', 'Outlet 1', 'Outlet 2', 'Outlet 3'] as const,
        stats: {
          'All outlets': {
            stockValue: 348500,
            lowStock: 3,
            expiring: 5,
            wastage: 4200,
          },
          'Outlet 1': {
            stockValue: 142000,
            lowStock: 1,
            expiring: 2,
            wastage: 1800,
          },
          'Outlet 2': {
            stockValue: 118000,
            lowStock: 2,
            expiring: 1,
            wastage: 1200,
          },
          'Outlet 3': {
            stockValue: 88500,
            lowStock: 0,
            expiring: 2,
            wastage: 1200,
          },
        },
        attentionItems: [
          { name: 'Cooking oil', outlet: 'Outlet 2', qty: '4 L left', status: 'low' as const },
          { name: 'Milk', outlet: 'Outlet 1', qty: 'Expires today', status: 'expiring' as const },
          { name: 'Tomatoes', outlet: 'Outlet 3', qty: '3 kg left', status: 'low' as const },
        ],
      },
      {
        id: 'transfers',
        number: '02',
        title: 'Move stock where needed',
        desc: 'Select an item, choose destination, and stock updates in both outlets.',
        caption: 'Both outlets see the updated stock in seconds. Full audit trail.',
        item: 'Cooking oil',
        fromOutlet: 'Outlet 1',
        toOutlet: 'Outlet 2',
        fromStock: 24,
        toStock: 4,
        transferAmount: 10,
        finalFrom: 14,
        finalTo: 14,
        ledgerRecord: {
          ref: 'TR-804',
          role: 'Manager',
          desc: '10 L Cooking oil from Outlet 1 to Outlet 2',
          time: 'Just now',
        },
      },
      {
        id: 'mobile-update',
        number: '03',
        title: 'Update stock from a phone',
        desc: 'Workers log usage and wastage on their phone in seconds with undo.',
        caption: 'Your team updates in seconds. You see it immediately.',
        workerItem: 'Tomatoes',
        initialStock: 18,
        usedAmount: 3,
        unit: 'kg',
        toast: '3 kg Tomatoes logged as used',
        activityFeedRow: {
          type: 'Usage update',
          qty: '-3 kg',
          item: 'Tomatoes',
          outlet: 'Outlet 1',
          role: 'Worker',
          time: 'Just now',
        },
      },
    ],
  },

  // Section 4: Features Bento Grid (Semantic color mapped)
  features: {
    heading: 'Everything you need. Nothing you do not.',
    subheading: 'Run one outlet or many. Built specifically for kitchen operations.',
    tiles: [
      {
        id: 'dashboard',
        title: 'Multi-outlet dashboard',
        desc: 'Switch between outlets instantly with live stock totals.',
        colorToken: 'blue',
        size: 'large' as const,
      },
      {
        id: 'ledger',
        title: 'Stock movement ledger',
        desc: 'Received, used, wasted or adjusted. Every move logged.',
        colorToken: 'ink',
        size: 'medium' as const,
      },
      {
        id: 'alerts',
        title: 'Low-stock alerts',
        desc: 'Set minimum limits per item. Know before running out.',
        colorToken: 'amber',
        size: 'small' as const,
      },
      {
        id: 'expiry',
        title: 'Expiry tracking',
        desc: 'Optional batch expiry alerts before fresh stock spoils.',
        colorToken: 'amber',
        size: 'small' as const,
      },
      {
        id: 'transfers',
        title: 'Transfers between outlets',
        desc: 'Clear From and To records for 2 or more outlets.',
        colorToken: 'teal',
        size: 'medium' as const,
      },
      {
        id: 'wastage',
        title: 'Wastage with rupee cost',
        desc: 'Log reasons and see total rupees wasted before month end.',
        colorToken: 'coral',
        size: 'small' as const,
      },
      {
        id: 'roles',
        title: 'Roles and permissions',
        desc: 'Owners configure items. Workers log usage on mobile.',
        colorToken: 'violet',
        size: 'small' as const,
      },
      {
        id: 'qr',
        title: 'QR ordering',
        desc: 'Customers scan table QR to order directly.',
        colorToken: 'sky',
        size: 'small' as const,
        badge: 'Coming soon',
      },
    ],
  },

  // Section 5: How It Works (Dark #0B1220 section)
  howItWorks: {
    heading: 'Simple by design.',
    subheading: 'No week-long setup. Up and running in 30 minutes.',
    steps: [
      {
        number: '01',
        title: 'Set up in minutes',
        desc: 'Add only the items you want to track and set minimum levels.',
        accent: 'sky',
      },
      {
        number: '02',
        title: 'Team updates in seconds',
        desc: 'Workers record usage and wastage from their phone browser.',
        accent: 'teal',
      },
      {
        number: '03',
        title: 'You see everything',
        desc: 'Alerts, stock value and movements across all outlets live.',
        accent: 'emerald',
      },
    ],
    ruleNote: 'Owners and managers add items. Workers only update stock.',
  },

  // Section 6: Savings Estimator (id="calculator")
  calculator: {
    heading: 'Estimate your avoidable food wastage',
    subheading: 'Enter your monthly numbers to estimate potential savings.',
    disclaimer:
      'This is an estimate based only on the numbers you enter. Actual results vary.',
    cta: 'Book a free demo to check your numbers',
    defaults: {
      outlets: 2,
      monthlyPurchasesPerOutlet: 150000, // ₹1,50,000
      wastagePercent: 8, // 8%
      targetReductionPercent: 30, // 30% reduction in waste
    },
    ranges: {
      outlets: { min: 1, max: 10, step: 1 },
      purchases: { min: 25000, max: 1000000, step: 25000 },
      wastage: { min: 2, max: 20, step: 1 },
      reduction: { min: 10, max: 60, step: 5 },
    },
  },

  // Section 7: Who It Is For
  whoItsFor: {
    heading: 'Built for operators, not accountants.',
    subheading: 'Works for single outlets as smoothly as multi-outlet chains.',
    audiences: [
      {
        title: 'Single-outlet cafes & restaurants',
        desc: 'Eliminate ingredient stock-outs and control fresh food wastage.',
      },
      {
        title: 'Multi-outlet groups & chains',
        desc: 'Central visibility, inter-branch transfers and consistent stock.',
      },
      {
        title: 'Cloud kitchens',
        desc: 'Multiple brands sharing one prep kitchen with clear usage tracking.',
      },
      {
        title: 'Bakeries & sweet shops',
        desc: 'Fast-moving raw goods with tight expiry dates and morning prep.',
      },
      {
        title: 'Hotel & banquet kitchens',
        desc: 'Bulk event prep and store-room transfers without paperwork.',
      },
    ],
    roles: [
      {
        id: 'owner',
        label: 'Owner',
        title: 'For Restaurant Owners',
        desc: 'Know your stock value and wastage across every outlet at once.',
        capabilities: [
          'Full cross-outlet stock dashboard',
          'Live wastage cost in rupees',
          'Set role permissions & limits',
          'Export audit trail anytime',
        ],
      },
      {
        id: 'manager',
        label: 'Manager',
        title: 'For Branch Managers',
        desc: 'Manage store-room inventory, approve transfers, and control shift waste.',
        capabilities: [
          'Assigned outlet stock control',
          'Create & confirm stock transfers',
          'Log wastage with specific reasons',
          'Shift-wise usage oversight',
        ],
      },
      {
        id: 'worker',
        label: 'Worker',
        title: 'For Kitchen Staff',
        desc: 'Tap-to-update on any phone. Fast, large buttons, no training needed.',
        capabilities: [
          'Quick usage deduction in 3 taps',
          'Log spoiled items with simple reason',
          'Confirm received transfers',
          'Undo mistakes instantly',
        ],
      },
    ],
    comparison: {
      heading: 'How KitchenWatch compares',
      rows: [
        {
          feature: 'Live stock across outlets',
          manual: 'Calls & WhatsApp groups',
          spreadsheet: 'End-of-day delay',
          kitchenwatch: 'Live on every phone',
        },
        {
          feature: 'Audit record (who changed what)',
          manual: 'None',
          spreadsheet: 'Easily overwritten',
          kitchenwatch: 'Permanent role & time log',
        },
        {
          feature: 'Low-stock & expiry alerts',
          manual: 'Found after running out',
          spreadsheet: 'Manual formula checking',
          kitchenwatch: 'Automatic warning badges',
        },
        {
          feature: 'Kitchen staff update speed',
          manual: 'Pen and paper notebook',
          spreadsheet: 'Unusable during rush hour',
          kitchenwatch: 'Under 5 seconds on mobile',
        },
        {
          feature: 'Wastage tracking with rupees',
          manual: 'Estimated at month end',
          spreadsheet: 'Complex calculations',
          kitchenwatch: 'Instant rupee cost per item',
        },
      ],
    },
  },

  // Section 8: Pilot Program & Roadmap (id="pilot")
  pilot: {
    heading: 'Join our pilot program',
    subheading: 'We are onboarding early restaurant partners to shape KitchenWatch.',
    benefits: [
      { title: 'Free dedicated 1-on-1 setup help', confirm: true },
      { title: 'Direct WhatsApp line to the founder', confirm: true },
      { title: 'Feature requests prioritized on the roadmap', confirm: true },
      { title: 'Founding-partner locked lifetime pricing', confirm: true },
    ],
    cta: 'Apply for pilot access',
    timelineHeading: 'Our plan, not a promise',
    timeline: [
      {
        phase: 'Now',
        label: 'Available today',
        accent: 'emerald',
        items: [
          'Inventory control & alerts',
          'Stock movements ledger',
          'Inter-outlet transfers',
          'Wastage tracking with rupees',
          'Owner, Manager & Worker roles',
          'Full activity audit trail',
        ],
      },
      {
        phase: 'Next',
        label: 'In development',
        accent: 'blue',
        items: [
          'QR ordering for customers',
          'Customer digital table menu',
          'Kitchen order display',
        ],
      },
      {
        phase: 'Later',
        label: 'Planned',
        accent: 'muted',
        items: [
          'WhatsApp stock alerts',
          'Supplier purchase messaging',
          'Hindi language interface',
          'Advanced multi-brand analytics',
        ],
      },
    ],
    founder: {
      name: 'TODO: Founder Name',
      role: 'Founder & Builder',
      note: 'Built to fix the chaos of managing restaurant stock on WhatsApp.',
      photo: '/founder-placeholder.jpg',
      videoUrl: '', // TODO: Founder video
      confirm: true,
    },
  },

  // Section: About
  about: {
    heading: 'Built to make inventory simple.',
    subheading: 'Designed for the speed of real kitchen operations.',
    story:
      'KitchenWatch was built to end the nightly chaos of paper stock counting, lost WhatsApp messages, and unexpected stock-outs across outlets.',
    beliefs:
      'We believe inventory software should take seconds on a phone, require zero employee training, and work alongside your existing billing system without interruption.',
    principles: [
      {
        number: '01',
        title: 'Floor speed first',
        desc: 'Any stock deduction or wastage entry takes under 5 seconds on any mobile browser.',
      },
      {
        number: '02',
        title: 'Live visibility',
        desc: 'Know exactly what raw materials you have in every branch without calling managers.',
      },
      {
        number: '03',
        title: 'Works with your POS',
        desc: 'No replacing your cash counter. KitchenWatch runs alongside your existing POS.',
      },
      {
        number: '04',
        title: 'Rupees, not percentages',
        desc: 'Track wasted items with exact rupee costs so kitchen teams see the direct financial impact.',
      },
    ],
    founder: {
      name: 'TODO: Founder Name',
      role: 'Founder & Builder',
      bio: 'Building software specifically for Indian restaurants, cafes, bakeries, and cloud kitchens.',
      confirm: true,
    },
  },

  // Section 9: Pricing
  pricing: {
    heading: 'Simple, honest pricing.',
    subheading: 'No hidden fees. No user limits. 14-day free trial.',
    yearlyDiscountText: '2 months free on yearly billing',
    plans: [
      {
        id: 'starter',
        name: 'Starter',
        outlets: '1 to 2 outlets',
        price: {
          monthly: 2499,
          yearly: 1999,
          confirm: true,
        },
        features: [
          '1 to 2 outlets included',
          'Unlimited items to track',
          'Stock movements & ledger',
          'Low-stock alerts',
          'Wastage tracking with cost',
          'Owner, Manager & Worker roles',
          'Mobile browser access for staff',
          'Email & WhatsApp support',
        ],
        recommended: false,
      },
      {
        id: 'growth',
        name: 'Growth',
        outlets: 'Up to 6 outlets',
        price: {
          monthly: 4999,
          yearly: 3999,
          confirm: true,
        },
        features: [
          'Up to 6 outlets included',
          'All Starter features',
          'Transfers between outlets',
          'Expiry date tracking',
          'Detailed rupee wastage analytics',
          'Central multi-outlet dashboard',
          'Full activity audit log',
          'Priority phone & WhatsApp help',
        ],
        recommended: true,
      },
      {
        id: 'business',
        name: 'Business',
        outlets: '7 or more outlets',
        price: {
          monthly: 8999,
          yearly: 7499,
          confirm: true,
        },
        features: [
          '7+ outlets (custom scale)',
          'All Growth features',
          'Dedicated onboarding specialist',
          'Custom branch hierarchy',
          'Historical data exports',
          'Direct founder support line',
          'Custom staff training sessions',
        ],
        recommended: false,
      },
    ] as PricingPlan[],
    notes: [
      'Free 14-day trial, no card required',
      'GST extra as applicable',
      'Cancel anytime with one click',
      'Need a custom plan? Talk to us.',
    ],
  },

  // Section 10: FAQ (Strictly max 30 words per answer)
  faq: {
    heading: 'Frequently answered questions.',
    subheading: 'Clear facts. No sales fluff.',
    items: [
      {
        q: 'Do I need to replace my POS?',
        a: 'No. KitchenWatch works alongside your existing POS system. It focuses purely on inventory, transfers, and wastage without touching billing.',
      },
      {
        q: 'Do I need more than one outlet?',
        a: 'No. Single outlets use it daily to prevent stock-outs and track waste. Multi-outlet features activate when you expand.',
      },
      {
        q: 'Do I have to enter every ingredient?',
        a: 'No. You choose what to track. Start with high-cost or high-wastage items, then expand as your team gets comfortable.',
      },
      {
        q: 'Who can add items and set limits?',
        a: 'Only Owners and Managers add items and set minimum stock levels. Workers only update counts and log usage.',
      },
      {
        q: 'Can staff use it on a phone?',
        a: 'Yes. It runs smoothly on any smartphone browser. No app download or installation is required.',
      },
      {
        q: 'Does it work without good internet?',
        a: 'It requires a basic cellular connection to sync stock. Offline queuing is planned on our roadmap.',
        confirm: true,
      },
      {
        q: 'Can I fix an entry mistake?',
        a: 'Yes. Workers can immediately undo recent entries, and managers can record adjustments with a documented reason.',
      },
      {
        q: 'How do I move stock between outlets?',
        a: 'Select item, quantity, From outlet, and To outlet. Both outlet managers receive an instant confirmation record.',
      },
      {
        q: 'Is QR ordering available now?',
        a: 'Not yet. Table QR ordering is currently in active development and labelled Coming Soon on our roadmap.',
      },
      {
        q: 'How does the free trial work?',
        a: 'You get full access to all features for 14 days without entering credit card details.',
      },
      {
        q: 'What happens to my data if I cancel?',
        a: 'You can export your complete inventory ledger anytime. Your data remains private and will be deleted upon request.',
      },
      {
        q: 'How long does setup take?',
        a: 'Most kitchens set up their top 25 ingredients and are ready to log stock in under 30 minutes.',
      },
      {
        q: 'Is our kitchen data safe?',
        a: 'Yes. Encrypted with HTTPS, protected by role-based access, and backed up with an unalterable audit log.',
        confirm: true,
      },
    ],
  },

  // Section 11: Final CTA (Dark section)
  cta: {
    heading: 'Stop guessing your stock.',
    subheading: 'Book a 15-minute demo or start your 14-day free trial today.',
    formHeading: 'Book a 15-minute demo',
    whatsappButton: 'Chat on WhatsApp',
    trialLinkText: 'or start a free trial directly',
    responsePromise: 'We reply within 2 hours during kitchen operating hours.',
    confirmPromise: true,
  },

  // Global Footer
  footer: {
    tagline: 'Know your stock. Move it where it\'s needed. Manage every outlet.',
    description:
      'Inventory control and wastage tracking for restaurants, cafes, and multi-outlet food groups in India.',
    copyright: '© 2026 KitchenWatch. All rights reserved.',
    address: 'TODO: Add registered business address in Bengaluru / Mumbai before launch',
    confirmAddress: true,
    email: 'TODO: hello@kitchenwatch.in',
    phone: 'TODO: +91 98765 43210',
    links: {
      product: [
        { label: 'Interactive Demo', href: '/#product' },
        { label: 'Features', href: '/#features' },
        { label: 'Savings Calculator', href: '/#calculator' },
        { label: 'Pilot Program', href: '/#pilot' },
        { label: 'Pricing Plans', href: '/pricing' },
      ],
      company: [
        { label: 'About KitchenWatch', href: '/about' },
        { label: 'Contact Us', href: '/contact' },
        { label: 'Book Demo', href: '/contact#book' },
        { label: 'FAQ', href: '/#faq' },
      ],
      legal: [
        { label: 'Privacy Policy', href: '/privacy' },
        { label: 'Terms of Service', href: '/terms' },
        { label: 'Refund Policy', href: '/refund-policy' },
      ],
    },
  },
} as const;