import { useEffect } from 'react';
import { ArrowLeft, Home, FileQuestion } from 'lucide-react';
import Nav from '../components/layout/Nav';
import Footer from '../components/layout/Footer';

export default function NotFoundPage() {
  useEffect(() => {
    document.title = 'Page Not Found (404) — KitchenWatch';
  }, []);

  return (
    <div className="min-h-screen bg-bg flex flex-col">
      <Nav />
      <main className="flex-1 flex items-center justify-center px-4 py-32 text-center">
        <div className="max-w-md mx-auto">
          <div className="w-16 h-16 rounded-full bg-slate-100 text-secondary mx-auto flex items-center justify-center mb-6">
            <FileQuestion size={32} />
          </div>
          <span className="text-xs font-bold font-jakarta text-blue uppercase tracking-widest block mb-2">
            Error 404
          </span>
          <h1 className="font-jakarta font-bold text-ink text-3xl sm:text-4xl mb-3">
            Page Not Found
          </h1>
          <p className="text-sm text-secondary leading-relaxed mb-8">
            The page you are looking for might have been moved or does not exist.
          </p>
          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <a
              href="/"
              className="inline-flex items-center justify-center gap-2 px-5 py-3 rounded-btn bg-blue text-white font-jakarta font-semibold text-sm hover:bg-blue-hover transition-colors shadow-sm"
            >
              <Home size={16} />
              <span>Back to home</span>
            </a>
            <a
              href="/#product"
              className="inline-flex items-center justify-center gap-2 px-5 py-3 rounded-btn border border-border text-ink font-jakarta font-semibold text-sm hover:bg-slate-50 transition-colors"
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
