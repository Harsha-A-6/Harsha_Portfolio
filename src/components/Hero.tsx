import { ArrowDown, Linkedin, Sparkles, Terminal, Code2, Bot } from 'lucide-react';
import { PERSONAL_INFO, SOCIAL_LINKS } from '../data/portfolioData';

export function Hero() {
  const linkedInUrl = SOCIAL_LINKS.find((s) => s.platform === 'LinkedIn')?.url || '#';

  const scrollToProjects = (e: React.MouseEvent) => {
    e.preventDefault();
    document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section
      id="home"
      className="relative min-h-[92vh] flex items-center justify-center pt-24 pb-16 px-4 sm:px-6 lg:px-8 overflow-hidden"
    >
      {/* Decorative ambient background glows */}
      <div
        className="pointer-events-none absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[340px] sm:w-[620px] h-[340px] sm:h-[620px] bg-gradient-to-tr from-red-600/15 via-amber-500/10 to-transparent rounded-full blur-3xl -z-10"
        aria-hidden="true"
      />
      <div
        className="pointer-events-none absolute top-2/3 right-10 w-[240px] sm:w-[420px] h-[240px] sm:h-[420px] bg-red-950/25 rounded-full blur-3xl -z-10"
        aria-hidden="true"
      />

      <div className="max-w-4xl mx-auto w-full text-center relative z-10">
        {/* Status / Student Tag Badge */}
        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-zinc-900/90 border border-zinc-800/90 shadow-inner mb-6 sm:mb-8">
          <span className="relative flex h-2 w-2">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-amber-400 opacity-75"></span>
            <span className="relative inline-flex rounded-full h-2 w-2 bg-amber-500"></span>
          </span>
          <span className="text-xs font-mono text-zinc-300 font-medium tracking-wide">
            Joy University • First-Year Student
          </span>
          <span className="text-zinc-600">|</span>
          <span className="text-xs font-mono text-amber-400 font-medium">
            AI Journey
          </span>
        </div>

        {/* Primary Title */}
        <h1
          id="hero-greeting"
          className="text-4xl sm:text-6xl md:text-7xl font-extrabold tracking-tight text-white mb-4 sm:mb-6"
        >
          Hi, I’m{' '}
          <span className="relative inline-block text-transparent bg-clip-text bg-gradient-to-r from-red-500 via-amber-400 to-amber-200">
            {PERSONAL_INFO.name}
            <span
              className="absolute -bottom-1 left-0 w-full h-[3px] bg-gradient-to-r from-red-600 via-amber-500 to-transparent rounded-full opacity-80"
              aria-hidden="true"
            />
          </span>
        </h1>

        {/* Subtitle */}
        <p
          id="hero-subtitle"
          className="text-lg sm:text-2xl md:text-2xl font-medium text-zinc-300 max-w-2xl mx-auto mb-8 sm:mb-10 leading-relaxed"
        >
          {PERSONAL_INFO.subtitle}
        </p>

        {/* Abstract AI / Code Feature Pill Group */}
        <div className="flex flex-wrap items-center justify-center gap-2 sm:gap-3 mb-10 text-xs sm:text-sm font-mono text-zinc-400">
          <div className="flex items-center gap-1.5 px-3 py-1 rounded-md bg-zinc-900/70 border border-zinc-800 text-zinc-300">
            <Terminal className="w-3.5 h-3.5 text-amber-400" />
            <span>Python</span>
          </div>
          <div className="flex items-center gap-1.5 px-3 py-1 rounded-md bg-zinc-900/70 border border-zinc-800 text-zinc-300">
            <Code2 className="w-3.5 h-3.5 text-red-400" />
            <span>Web Dev</span>
          </div>
          <div className="flex items-center gap-1.5 px-3 py-1 rounded-md bg-zinc-900/70 border border-zinc-800 text-zinc-300">
            <Bot className="w-3.5 h-3.5 text-amber-400" />
            <span>Generative AI</span>
          </div>
        </div>

        {/* Action Buttons: View My Project & Connect on LinkedIn */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 max-w-md mx-auto">
          {/* Prominent Button 1: View My Project */}
          <button
            id="hero-btn-view-project"
            type="button"
            onClick={scrollToProjects}
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl font-semibold text-white bg-gradient-to-r from-red-600 via-red-500 to-amber-600 hover:from-red-500 hover:to-amber-500 shadow-lg shadow-red-950/50 hover:shadow-red-900/40 hover:-translate-y-0.5 active:translate-y-0 transition-all duration-200 cursor-pointer"
          >
            <Sparkles className="w-4 h-4 text-amber-200" />
            <span>View My Project</span>
          </button>

          {/* Prominent Button 2: Connect on LinkedIn */}
          <a
            id="hero-btn-linkedin"
            href={linkedInUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl font-semibold text-zinc-200 bg-zinc-900 hover:bg-zinc-800 border border-zinc-700 hover:border-amber-500/50 hover:text-white shadow-md hover:-translate-y-0.5 active:translate-y-0 transition-all duration-200"
          >
            <Linkedin className="w-4 h-4 text-[#0077b5]" />
            <span>Connect on LinkedIn</span>
          </a>
        </div>

        {/* Scroll indicator prompt */}
        <div className="mt-16 sm:mt-20">
          <a
            href="#about"
            onClick={(e) => {
              e.preventDefault();
              document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' });
            }}
            className="inline-flex flex-col items-center gap-1.5 text-xs text-zinc-400 hover:text-amber-400 transition-colors"
            aria-label="Scroll to About section"
          >
            <span className="font-mono uppercase tracking-widest text-[11px]">Explore</span>
            <ArrowDown className="w-4 h-4 animate-bounce text-amber-500/80" />
          </a>
        </div>
      </div>
    </section>
  );
}
