import { useState } from 'react';
import { ArrowRight, X } from 'lucide-react';
import { site } from '../../content/site';

export default function AnnouncementStrip() {
  const [dismissed, setDismissed] = useState(false);

  if (!site.flags.showAnnouncement || dismissed) return null;

  return (
    <aside
      aria-label="Announcement"
      className="bg-[#101218] text-[#F5F5F7] px-4 py-2 text-xs font-sans border-b border-[#242834] relative z-50"
    >
      <div className="max-w-7xl mx-auto flex items-center justify-between gap-4">
        <div className="flex-1 text-center sm:text-left flex items-center justify-center sm:justify-start gap-2 flex-wrap">
          <span className="font-medium text-[#F5F5F7]">
            {site.announcement.text}
          </span>
          <a
            href={site.announcement.linkHref}
            className="text-blue-tint hover:underline font-semibold inline-flex items-center gap-1"
          >
            <span>{site.announcement.linkText}</span>
            <ArrowRight size={12} strokeWidth={2} />
          </a>
        </div>

        <button
          type="button"
          onClick={() => setDismissed(true)}
          aria-label="Dismiss announcement"
          className="text-[#A7AEBB] hover:text-[#F5F5F7] p-1 rounded transition-colors"
        >
          <X size={14} strokeWidth={1.5} />
        </button>
      </div>
    </aside>
  );
}
