import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronDown } from 'lucide-react';

interface AccordionItem {
  readonly q: string;
  readonly a: string;
}

interface AccordionProps {
  items: ReadonlyArray<AccordionItem>;
  dark?: boolean;
}

function AccordionRow({
  item,
  isOpen,
  onToggle,
  index,
  dark,
}: {
  item: AccordionItem;
  isOpen: boolean;
  onToggle: () => void;
  index: number;
  dark?: boolean;
}) {
  const panelId = `faq-panel-${index}`;
  const headingId = `faq-heading-${index}`;

  return (
    <div className={`border-b ${dark ? 'border-white/10' : 'border-border'}`}>
      <button
        id={headingId}
        aria-expanded={isOpen}
        aria-controls={panelId}
        onClick={onToggle}
        className={`w-full flex items-center justify-between py-5 text-left gap-4 group ${
          dark ? 'text-white' : 'text-ink'
        }`}
      >
        <span className="font-jakarta font-semibold text-base md:text-lg pr-4 leading-snug">
          {item.q}
        </span>
        <motion.span
          animate={{ rotate: isOpen ? 180 : 0 }}
          transition={{ duration: 0.25, ease: 'easeInOut' }}
          className={`shrink-0 ${dark ? 'text-white/50' : 'text-muted'}`}
        >
          <ChevronDown size={20} strokeWidth={1.75} />
        </motion.span>
      </button>
      <AnimatePresence initial={false}>
        {isOpen && (
          <motion.div
            id={panelId}
            role="region"
            aria-labelledby={headingId}
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
            className="overflow-hidden"
          >
            <p className={`pb-5 text-body leading-relaxed ${dark ? 'text-white/60' : 'text-ink-2'}`}>
              {item.a}
            </p>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

export default function Accordion({ items, dark = false }: AccordionProps) {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <div>
      {items.map((item, i) => (
        <AccordionRow
          key={i}
          item={item}
          isOpen={openIndex === i}
          onToggle={() => setOpenIndex(openIndex === i ? null : i)}
          index={i}
          dark={dark}
        />
      ))}
    </div>
  );
}
