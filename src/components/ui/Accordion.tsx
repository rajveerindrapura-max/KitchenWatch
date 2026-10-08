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
    <div
      className={`transition-all duration-200 ${
        isOpen
          ? dark
            ? 'bg-[#1F4D47]/80 rounded-card px-5 my-2 border border-[#F6F3E4]/30'
            : 'bg-[#F7F5E4] rounded-card px-5 my-2 border border-[#1C1B18]/30 shadow-hard-sm'
          : `border-b ${dark ? 'border-[#F6F3E4]/15' : 'border-[#1C1B18]/15'} px-3`
      }`}
    >
      <button
        id={headingId}
        aria-expanded={isOpen}
        aria-controls={panelId}
        onClick={onToggle}
        className={`w-full flex items-center justify-between py-4 sm:py-5 text-left gap-4 group ${
          dark ? 'text-[#F6F3E4]' : 'text-[#1C1B18]'
        }`}
      >
        <span className="font-figtree font-bold text-base md:text-lg pr-4 leading-snug">
          {item.q}
        </span>
        <motion.span
          animate={{ rotate: isOpen ? 180 : 0 }}
          transition={{ duration: 0.25, ease: [0.22, 1, 0.36, 1] }}
          className={`shrink-0 ${dark ? 'text-[#F6F3E4]/70' : 'text-[#6B6A62]'}`}
        >
          <ChevronDown size={20} strokeWidth={2} />
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
            transition={{ duration: 0.25, ease: [0.22, 1, 0.36, 1] }}
            className="overflow-hidden"
          >
            <p
              className={`pb-5 text-[16px] sm:text-[17px] leading-relaxed ${
                dark ? 'text-[#F6F3E4]/80' : 'text-[#4B4A44]'
              }`}
            >
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
    <div className="space-y-1">
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
