import { useEffect } from 'react';
import { ArrowLeft, Home, FileQuestion } from 'lucide-react';
import Nav from '../components/layout/Nav';
import AnnouncementStrip from '../components/layout/AnnouncementStrip';
import Footer from '../components/layout/Footer';

export default function NotFoundPage() {
  useEffect(() => {
    document.title = 'Page Not Found (404) — KitchenWatch';
  }, []);

  return (
    <div className="min-h-screen bg-bg flex flex-col font-sans">
      <AnnouncementStrip />
      <Nav />
      <main className="flex-1 flex items-center justify-center px-4 py-32 text-center">
        <div className="max-w-md mx-auto">
          <div className="w-16 h-16 rounded-2xl bg-surface border border-border text-ink mx-auto flex items-center justify-center mb-6 shadow-subtle">
            <FileQuestion size={28} className="text-muted" strokeWidth={1.5} />
          </div>
          <span className="text-xs font-semibold text-blue uppercase tracking-wider block mb-2">
            Error 404
          </span>
          <h1 className="font-sans font-semibold text-ink text-3xl sm:text-4xl tracking-tight mb-3">
            Page Not Found
          </h1>
          <p className="text-sm text-secondary leading-relaxed mb-8">
            The page you are looking for might have been moved or does not exist.
          </p>
          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <a
              href="/"
              className="inline-flex items-center justify-center gap-2 px-5 py-3 rounded-full bg-blue hover:bg-blueHover text-white font-medium text-sm shadow-xs transition-colors cursor-pointer active:scale-[0.99]"
            >
              <Home size={15} />
              <span>Back to home</span>
            </a>
            <a
              href="/#product"
              className="inline-flex items-center justify-center gap-2 px-5 py-3 rounded-full border border-border bg-surface hover:bg-[#F5F5F7] text-ink font-medium text-sm shadow-xs transition-colors cursor-pointer active:scale-[0.99]"
            >
              <ArrowLeft size={15} />
              <span>See product demo</span>
            </a>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}
