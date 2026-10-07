// All site copy lives here. Edit freely without touching any component.
// Fields marked with TODO need to be confirmed before launch.

export const site = {
  meta: {
    title: 'KitchenWatch - Inventory Control for Restaurant Groups and Single Outlets',
    description:
      'KitchenWatch gives restaurant owners one dashboard to control inventory, wastage and transfers. Run one outlet or many. Works alongside your existing POS.',
    og: {
      image: '/og-image.png', // TODO: Create OG image
      url: 'https://kitchenwatch.in', // TODO: Confirm domain
    },
  },

  nav: {
    links: [
      { label: 'Product', href: '#product' },
      { label: 'Features', href: '#features' },
      { label: 'How it works', href: '#how-it-works' },
      { label: 'Who it\'s for', href: '#who-its-for' },
      { label: 'Pricing', href: '#pricing' },
      { label: 'About', href: '#about' },
      { label: 'FAQ', href: '#faq' },
    ],
    ctaPrimary: 'Start free trial',
    ctaSecondary: 'Book a demo',
  },

  hero: {
    pill: 'Now onboarding early partners',
    headlinePre: 'Know your',
    headlineSerif: 'stock.',
    headlinePost: 'Move it where it\'s needed.',
    subheadline:
      'KitchenWatch gives restaurant owners one simple dashboard to control inventory, wastage and transfers across every outlet, and lets customers order by scanning a QR code.',
    ctaPrimary: 'Start free trial',
    ctaSecondary: 'Book a demo',
    trustLine:
      'For restaurants, cafes and cloud kitchens. From one outlet to many. Works alongside your existing POS.',
  },

  problem: {
    sectionLabel: 'The problem',
    heading: 'The notebook and WhatsApp problem',
    highlightWords: [
      'Stock', 'lives', 'in', 'notebooks,', 'spreadsheets', 'and', 'WhatsApp',
      'messages.', 'One', 'outlet', 'runs', 'out', 'while', 'another', 'is',
      'overstocked.', 'Wastage', 'is', 'found', 'at', 'month', 'end.', 'You',
      'find', 'out', 'too', 'late.',
    ],
    painPoints: [
      {
        title: 'No live visibility',
        desc: 'You have no single view of what is available where, in real time.',
      },
      {
        title: 'Wastage and expiry found too late',
        desc: 'By the time you see it on paper, the margin is already gone.',
      },
      {
        title: 'Stock moves with no record',
        desc: 'Transfers between locations happen on WhatsApp with nothing to audit later.',
      },
    ],
  },

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
        attentionItems: {
          'All outlets': [
            { item: 'Cooking oil', outlet: 'Outlet 2', status: 'Low stock', level: '4 L left (min 15 L)', tone: 'amber' as const },
            { item: 'Milk', outlet: 'Outlet 1', status: 'Expiring in 2 days', level: '12 L remaining', tone: 'red' as const },
            { item: 'Tomatoes', outlet: 'Outlet 3', status: 'Reorder point', level: '6 kg left (min 10 kg)', tone: 'amber' as const },
          ],
          'Outlet 1': [
            { item: 'Milk', outlet: 'Outlet 1', status: 'Expiring in 2 days', level: '12 L remaining', tone: 'red' as const },
            { item: 'Chicken', outlet: 'Outlet 1', status: 'Healthy level', level: '28 kg in chiller', tone: 'green' as const },
          ],
          'Outlet 2': [
            { item: 'Cooking oil', outlet: 'Outlet 2', status: 'Low stock', level: '4 L left (min 15 L)', tone: 'amber' as const },
            { item: 'Flour', outlet: 'Outlet 2', status: 'Low stock', level: '8 kg left (min 20 kg)', tone: 'amber' as const },
          ],
          'Outlet 3': [
            { item: 'Tomatoes', outlet: 'Outlet 3', status: 'Reorder point', level: '6 kg left (min 10 kg)', tone: 'amber' as const },
            { item: 'Rice', outlet: 'Outlet 3', status: 'Healthy level', level: '50 kg bag in store', tone: 'green' as const },
          ],
        },
      },
      {
        id: 'transfers',
        number: '02',
        title: 'Move stock where it\'s needed',
        desc: 'Shift excess items between outlets with instant stock level updates.',
        caption: 'Both outlets update at once, with a full record.',
        fromOutlet: 'Outlet 1',
        toOutlet: 'Outlet 2',
        item: 'Cooking oil',
        unit: 'L',
        initialFrom: 45,
        initialTo: 4,
        transferAmount: 10,
        finalFrom: 35,
        finalTo: 14,
        ledgerRecord: {
          ref: 'TR-804',
          role: 'Manager',
          desc: '10 L Cooking oil from Outlet 1 to Outlet 2',
          time: 'Just now',
        },
      },
      {
        id: 'mobile-worker',
        number: '03',
        title: 'Update stock from a phone',
        desc: 'Employees log usage and wastage on their phone in seconds.',
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
          role: 'Employee',
          time: 'Just now',
        },
      },
    ],
  },

  features: {
    heading: 'Everything you need to control inventory. Nothing you don\'t.',
    subheading:
      'Run one outlet or many. Transfers and the all-outlets view appear when you add more outlets.',
    sampleDataBadge: 'Sample data',
    tiles: [
      {
        id: 'dashboard',
        title: 'Multi-outlet dashboard',
        desc: 'One screen shows every outlet\'s stock level, alerts and recent movements. Switch between outlets instantly.',
        size: 'large' as const,
      },
      {
        id: 'ledger',
        title: 'Stock movement ledger',
        desc: 'Every change is recorded: role, timestamp, quantity and reason. Nothing is anonymous.',
        size: 'medium' as const,
      },
      {
        id: 'alerts',
        title: 'Low-stock alerts',
        desc: 'Set minimum levels per item per outlet. Get alerted before you run out.',
        size: 'small' as const,
      },
      {
        id: 'expiry',
        title: 'Expiry tracking',
        desc: 'Tag items with expiry dates. Get a heads-up before stock expires.',
        size: 'small' as const,
      },
      {
        id: 'transfers',
        title: 'Transfers between outlets',
        desc: 'Create a stock transfer in seconds. Both outlets see it immediately, with a full record.',
        size: 'medium' as const,
      },
      {
        id: 'wastage',
        title: 'Wastage tracking',
        desc: 'Log every loss with a reason. See total wastage cost in rupees, by outlet or across all.',
        size: 'small' as const,
      },
      {
        id: 'roles',
        title: 'Roles and permissions',
        desc: 'Owners and managers add items and set levels. Employees only update existing stock. Clean separation.',
        size: 'small' as const,
      },
      {
        id: 'qr',
        title: 'QR ordering',
        desc: 'Customers scan a QR code and order directly. No app required, no third-party commissions.',
        size: 'small' as const,
        badge: 'Coming soon',
      },
    ],
  },

  howItWorks: {
    heading: 'Simple by design.',
    steps: [
      {
        number: '01',
        title: 'Set up in minutes',
        desc: 'Create your outlets and add only the items you want to track. No complicated onboarding. You can be up and running in under 30 minutes.',
      },
      {
        number: '02',
        title: 'Your team updates in seconds',
        desc: 'Employees record usage and wastage from their phone. No training needed. The interface is built to be fast for people who are not sitting at a desk.',
      },
      {
        number: '03',
        title: 'You see everything',
        desc: 'Alerts, stock value and every movement, across all outlets, in one place. Know what is happening without calling anyone.',
      },
    ],
    note: 'Owners and managers add items and set minimum levels. Employees only update existing stock.',
  },

  whoFor: {
    heading: 'Built for operators, not accountants.',
    audiences: [
      {
        title: 'Single-outlet restaurants and cafes',
        desc: 'Keep tight control on ingredients and stop throwing money away on wastage. No enterprise setup needed.',
      },
      {
        title: 'Multi-outlet groups and chains',
        desc: 'Consistent stock levels across every location. Manage transfers centrally without spreadsheets or WhatsApp.',
      },
      {
        title: 'Cloud kitchens',
        desc: 'Multiple brands and delivery menus sharing one prep floor. Clear separation of ingredients and stock counts.',
      },
      {
        title: 'Bakeries and sweet shops',
        desc: 'High-turnover fresh items with daily expiry. Spot ingredient shortages before morning prep begins.',
      },
      {
        title: 'Hotel and banquet kitchens',
        desc: 'Large-scale batch cooking and event inventory. Track bulk issues and store movements easily.',
      },
    ],
    roles: [
      {
        id: 'owner',
        label: 'Owner',
        title: 'For Owners',
        desc: 'See the complete picture across your business. Know your stock value, wastage cost, and which location needs attention, without calling anyone.',
        capabilities: [
          'Full dashboard for single or all outlets',
          'Stock value and wastage reports',
          'Low-stock alerts for every location',
          'Complete activity history and audit log',
          'Add and manage items and minimum levels',
          'Manage team members and their roles',
        ],
      },
      {
        id: 'manager',
        label: 'Manager',
        title: 'For Managers',
        desc: 'Run your outlet without paperwork. Create stock transfers, log wastage, and keep your team accountable.',
        capabilities: [
          'Dashboard for your assigned outlet',
          'Create and approve stock transfers',
          'Log wastage with reasons',
          'Review team activity for your outlet',
          'Set and update minimum stock levels',
        ],
      },
      {
        id: 'employee',
        label: 'Employee',
        title: 'For Employees',
        desc: 'Update stock from your phone in seconds. No complicated forms, no guessing what to fill in.',
        capabilities: [
          'Update stock quantities on your phone',
          'Log wastage with a simple reason',
          'Confirm stock received from a transfer',
          'View current stock levels for your outlet',
        ],
      },
    ],
  },

  roadmap: {
    heading: 'Where we are and where we are going.',
    desc: 'This is our current plan. We share it openly so you can plan alongside us. It is not a formal commitment.',
    items: [
      {
        phase: 'Now',
        label: 'Available today',
        features: [
          'Inventory management',
          'Stock movements and ledger',
          'Transfers between outlets',
          'Wastage tracking with reasons',
          'Low-stock alerts',
          'Single & multi-outlet dashboards',
          'Roles: Owner, Manager, Employee',
          'Activity history and audit trail',
        ],
      },
      {
        phase: 'Next',
        label: 'In development',
        features: [
          'QR ordering for customers',
          'Customer-facing digital menu',
          'Order management for staff',
        ],
      },
      {
        phase: 'Later',
        label: 'Planned',
        features: [
          'WhatsApp stock alerts',
          'Supplier messaging',
          'Hindi language support',
          'Advanced analytics and reports',
        ],
      },
    ],
    earlyAccess: {
      heading: 'Join our pilot program',
      desc: 'We are onboarding food businesses to use KitchenWatch and help shape the product. Free setup help for early partners.',
      cta: 'Apply for early access',
    },
  },

  pricing: {
    heading: 'Simple, honest pricing.',
    subheading: 'No hidden fees. No per-user charges. Cancel any time.',
    plans: [
      {
        id: 'starter',
        name: 'Starter',
        outlets: '1 to 2 outlets',
        price: {
          // TODO: Confirm prices before launch
          monthly: 2499,
          yearly: 1999,
        },
        features: [
          '1 to 2 outlets',
          'Unlimited items',
          'Stock movements and ledger',
          'Low-stock alerts',
          'Wastage tracking',
          'Up to 5 team members',
          'Email support',
        ],
        recommended: false,
      },
      {
        id: 'growth',
        name: 'Growth',
        outlets: 'Up to 6 outlets',
        price: {
          // TODO: Confirm prices before launch
          monthly: 4999,
          yearly: 3999,
        },
        features: [
          'Up to 6 outlets',
          'Unlimited items',
          'Stock movements and ledger',
          'Transfers between outlets',
          'Low-stock alerts and expiry tracking',
          'Wastage tracking with cost',
          'Unlimited team members',
          'Activity history',
          'Priority support',
        ],
        recommended: true,
      },
      {
        id: 'business',
        name: 'Business',
        outlets: '7+ outlets',
        price: {
          // TODO: Confirm prices before launch
          monthly: 8999,
          yearly: 7499,
        },
        features: [
          '7 or more outlets',
          'Unlimited items',
          'All Growth features',
          'Dedicated onboarding',
          'Custom roles and permissions',
          'Phone support',
          'Data export',
        ],
        recommended: false,
      },
    ],
    note: 'All prices in Indian rupees. GST extra. Free 14-day trial on all plans.',
    customLine: 'Need a custom plan for a larger group? Talk to us.',
    yearlyLabel: 'Save 2 months',
  },

  about: {
    heading: 'Built to make inventory simple.',
    story:
      'Restaurant owners spend too much time managing stock on WhatsApp groups and notebooks. We built KitchenWatch to fix that - a focused tool that does inventory and transfers well, without trying to be a complete restaurant operating system.',
    beliefs:
      'We believe restaurant software should be useful on day one, without a week of setup or a trainer walking you through it.',
    principles: [
      {
        number: '01',
        title: 'Simple',
        desc: 'If an employee needs training to use it, we have failed. The interface should be obvious.',
      },
      {
        number: '02',
        title: 'Fast',
        desc: 'Stock updates happen on the floor, in a busy kitchen. Every screen must be fast.',
      },
      {
        number: '03',
        title: 'Traceable',
        desc: 'Every change has a role, a timestamp and a reason. No anonymous updates.',
      },
      {
        number: '04',
        title: 'Useful',
        desc: 'KitchenWatch is not trying to be everything. It does inventory and QR ordering well.',
      },
    ],
    founder: {
      // TODO: Add real founder details before launch
      name: 'TODO: Founder name',
      role: 'TODO: Role / title',
      bio: 'TODO: 2-3 sentence founder bio explaining motivation and background.',
      TODO: true as const,
    },
  },

  faq: {
    items: [
      {
        q: 'Do I need more than one outlet?',
        a: 'No. KitchenWatch is built for single-outlet restaurants as well as multi-outlet groups. Single-outlet operators use it to eliminate food waste, track daily usage, and catch low stock. When you open a second outlet, multi-outlet dashboards and stock transfers are ready immediately.',
      },
      {
        q: 'Do I need to replace my POS system?',
        a: 'No. KitchenWatch works alongside your existing POS. It is focused on inventory tracking and does not replace your billing or ordering system.',
      },
      {
        q: 'Do I have to enter every ingredient?',
        a: 'No. You only add the items you want to track. Start with the items where wastage or stock-outs are costing you money. You can add more over time.',
      },
      {
        q: 'Who can add items and set minimum levels?',
        a: 'Only Owners and Managers can add items and set minimum levels. Employees can update existing stock quantities and log wastage, but they cannot add new items or change limits.',
      },
      {
        q: 'Can employees use it on a phone?',
        a: 'Yes. The employee interface is built for mobile. No app download is needed. It runs in any mobile browser and is designed to be fast on a small screen.',
      },
      {
        q: 'Does it work across multiple outlets?',
        a: 'Yes. You can see all outlets in one dashboard, transfer stock between them, and get alerts for any outlet that goes below its minimum. If you run a single outlet, multi-outlet options stay quietly out of the way.',
      },
      {
        q: 'How are stock changes tracked?',
        a: 'Every change - whether a usage update, a transfer, or a wastage entry - is recorded with the role of the person who made it, the timestamp, and a reason. You can see the full history for any item.',
      },
      {
        q: 'Is QR ordering available now?',
        a: 'Not yet. QR ordering for customers is our next major feature. Inventory management, transfers, wastage tracking and the full dashboard are available today.',
      },
      {
        q: 'How much does it cost?',
        a: 'Pricing starts at around \u20b92,499 per month for 1 to 2 outlets. All plans include a free 14-day trial. See the pricing section for full details. GST is extra.',
      },
      {
        q: 'What happens to my data?',
        a: 'Your data is yours. We store it securely and do not share it. If you ever want to leave, you can export your full data. We will also provide migration help.',
      },
    ],
  },

  cta: {
    heading: 'Stop guessing your stock.',
    subline:
      'Book a short call and we will show you how KitchenWatch works for your setup. Free setup help for early partners.',
    form: {
      namePlaceholder: 'Your name',
      businessPlaceholder: 'Restaurant or business name',
      outletOptions: ['1 outlet', '2 outlets', '3 outlets', '4 outlets', '5 outlets', '6 to 10 outlets', 'More than 10 outlets'],
      phonePlaceholder: 'Phone or WhatsApp number',
      emailPlaceholder: 'Email address',
      messagePlaceholder: 'Anything else you want to share (optional)',
      submitLabel: 'Book a demo',
      successHeading: 'We have received your request.',
      successMessage:
        'We will reach out within one business day. Look for a WhatsApp message or email from us.',
    },
    // TODO: Replace with real WhatsApp number before launch
    whatsapp: {
      number: 'TODO',
      label: 'Chat on WhatsApp',
    },
  },

  footer: {
    description: 'Inventory control for restaurants, cafes and cloud kitchens. Run one outlet or many.',
    tagline: 'Know your stock. Move it where it\'s needed.',
    links: {
      product: [
        { label: 'Product', href: '#product' },
        { label: 'Features', href: '#features' },
        { label: 'How it works', href: '#how-it-works' },
        { label: 'Pricing', href: '#pricing' },
        { label: 'Roadmap', href: '#roadmap' },
      ],
      company: [
        { label: 'About', href: '#about' },
        { label: 'FAQ', href: '#faq' },
        { label: 'Book a demo', href: '#cta' },
      ],
      legal: [
        { label: 'Privacy policy', href: '/privacy' },
        { label: 'Terms of service', href: '/terms' },
      ],
    },
    // TODO: Add real contact details before launch
    contact: {
      email: 'TODO: hello@kitchenwatch.in',
      whatsapp: 'TODO: WhatsApp number',
    },
    copyright: '\u00a9 2026 KitchenWatch. All rights reserved.',
  },
} as const;

export type Site = typeof site;