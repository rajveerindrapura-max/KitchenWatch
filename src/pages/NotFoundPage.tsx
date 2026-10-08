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
    <div className="min-h-screen bg-ivory flex flex-col">
      <AnnouncementStrip />
      <Nav />
      <main className="flex-1 flex items-center justify-center px-4 py-32 text-center">
        <div className="max-w-md mx-auto">
          <div className="w-16 h-16 rounded-2xl bg-paper border-1.5 border-ink text-ink mx-auto flex items-center justify-center mb-6 shadow-hard-sm">
            <FileQuestion size={32} />
          </div>
          <span className="text-xs font-bold text-muted uppercase tracking-widest block mb-2">
            Error 404
          </span>
          <h1 className="font-serif font-normal text-ink text-4xl sm:text-5xl mb-3">
            Page Not Found
          </h1>
          <p className="text-sm text-secondary leading-relaxed mb-8">
            The page you are looking for might have been moved or does not exist.
          </p>
          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <a
              href="/"
              className="inline-flex items-center justify-center gap-2 px-5 py-3 rounded-xl bg-lavender text-ink font-semibold text-sm border-2 border-ink shadow-hard-sm hover:shadow-hard transition-all cursor-pointer active:translate-y-0.5"
            >
              <Home size={16} />
              <span>Back to home</span>
            </a>
            <a
              href="/#product"
              className="inline-flex items-center justify-center gap-2 px-5 py-3 rounded-xl border-1.5 border-ink bg-card text-ink font-semibold text-sm hover:bg-paper shadow-hard-sm transition-all cursor-pointer active:translate-y-0.5"
            >
              <ArrowLeft size={16} />
              <span>See product demo</span>
            </a>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}
