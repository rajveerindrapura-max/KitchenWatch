import { useState } from 'react';
import { X, ArrowRight } from 'lucide-react';
import { site } from '../../content/site';

export default function AnnouncementStrip() {
  const [dismissed, setDismissed] = useState(false);

  if (!site.flags.showAnnouncement || dismissed) return null;

  return (
    <div
      role="region"
      aria-label="Announcement"
      className="w-full bg-[#1F4D47] text-[#F6F3E4] text-xs sm:text-sm py-2.5 px-4 relative z-50 flex items-center justify-center font-figtree border-b border-[#1C1B18]/30"
    >
      <div className="flex items-center justify-center gap-2 text-center pr-6 sm:pr-0">
        <span className="font-medium">{site.announcement.text}</span>
        <a
          href={site.announcement.linkHref}
          className="font-semibold underline underline-offset-4 hover:opacity-85 inline-flex items-center gap-1 shrink-0"
        >
          <span>{site.announcement.linkText}</span>
          <ArrowRight size={13} />
        </a>
      </div>
      <button
        type="button"
        onClick={() => setDismissed(true)}
        aria-label="Dismiss announcement"
        className="absolute right-3 sm:right-6 p-1 text-[#F6F3E4]/70 hover:text-[#F6F3E4] transition-colors rounded"
      >
        <X size={15} />
      </button>
    </div>
  );
}
