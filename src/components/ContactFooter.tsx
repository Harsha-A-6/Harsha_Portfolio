import { Github, Linkedin, ArrowUp, Sparkles } from 'lucide-react';
import { PERSONAL_INFO, SOCIAL_LINKS } from '../data/portfolioData';

export function ContactFooter() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const getIcon = (platform: string) => {
    switch (platform) {
      case 'GitHub':
        return <Github className="w-5 h-5 text-zinc-100 group-hover:text-amber-400 transition-colors" />;
      case 'LinkedIn':
        return <Linkedin className="w-5 h-5 text-zinc-100 group-hover:text-amber-400 transition-colors" />;
      default:
        return <Sparkles className="w-5 h-5 text-zinc-100 group-hover:text-amber-400 transition-colors" />;
    }
  };

  return (
    <footer id="contact" className="relative z-10 border-t border-zinc-900 bg-zinc-950/80 pt-20 pb-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto">
        {/* Contact Callout Box */}
        <div className="bg-gradient-to-b from-zinc-900/90 to-zinc-950 border border-zinc-800/90 rounded-3xl p-8 sm:p-12 text-center shadow-2xl relative overflow-hidden mb-16">
          {/* Subtle Ambient Glow */}
          <div
            className="absolute -top-24 left-1/2 -translate-x-1/2 w-64 h-64 bg-gradient-to-br from-red-600/20 via-amber-500/15 to-transparent rounded-full blur-3xl pointer-events-none"
            aria-hidden="true"
          />

          <div className="relative z-10 max-w-xl mx-auto space-y-6">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-zinc-800/80 border border-zinc-700/80 text-xs font-mono text-zinc-300">
              <span className="w-2 h-2 rounded-full bg-red-500" />
              <span>Get in Touch</span>
            </div>

            <h2 className="text-2xl sm:text-3xl font-bold text-white tracking-tight">
              Connect with <span className="text-amber-400">{PERSONAL_INFO.name}</span>
            </h2>

            {/* Required exact line */}
            <p className="text-zinc-300 text-base sm:text-lg leading-relaxed font-medium">
              {PERSONAL_INFO.contactLine}
            </p>

            {/* Social Links Cards */}
            <div className="pt-4 flex flex-col sm:flex-row items-center justify-center gap-4">
              {SOCIAL_LINKS.map((link) => (
                <a
                  key={link.id}
                  id={`contact-link-${link.platform.toLowerCase()}`}
                  href={link.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group w-full sm:w-auto inline-flex items-center justify-center gap-3 px-6 py-3.5 rounded-xl bg-zinc-900 hover:bg-zinc-800/90 border border-zinc-800 hover:border-amber-500/50 shadow-md hover:-translate-y-0.5 active:translate-y-0 transition-all duration-200"
                >
                  <div className="w-8 h-8 rounded-lg bg-zinc-800 flex items-center justify-center group-hover:bg-zinc-700 transition-colors">
                    {getIcon(link.platform)}
                  </div>
                  <div className="text-left">
                    <div className="text-xs text-zinc-400 font-mono">Connect on</div>
                    <div className="text-sm font-semibold text-white group-hover:text-amber-300 transition-colors">
                      {link.platform}
                    </div>
                  </div>
                </a>
              ))}
            </div>
          </div>
        </div>

        {/* Bottom Bar with Copyright & Back to Top */}
        <div className="pt-8 border-t border-zinc-900 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-zinc-400">
          <div className="text-center sm:text-left">
            <span className="text-zinc-300 font-medium">{PERSONAL_INFO.name}</span> • {PERSONAL_INFO.college} ({PERSONAL_INFO.degree})
          </div>

          <div className="flex items-center gap-4">
            <span className="text-zinc-400">Personal Portfolio</span>
            <button
              id="btn-scroll-to-top"
              type="button"
              onClick={scrollToTop}
              className="inline-flex items-center gap-1.5 p-2 rounded-lg bg-zinc-900 border border-zinc-800 text-zinc-400 hover:text-amber-400 hover:border-zinc-700 transition-colors cursor-pointer"
              aria-label="Back to top of page"
            >
              <span className="text-xs">Top</span>
              <ArrowUp className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
}
