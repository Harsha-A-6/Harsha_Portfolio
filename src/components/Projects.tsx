import { ExternalLink, Sparkles, Cpu, Layers } from 'lucide-react';
import { FEATURED_PROJECT } from '../data/portfolioData';

export function Projects() {
  return (
    <section id="projects" className="py-20 sm:py-28 px-4 sm:px-6 lg:px-8 relative z-10 border-t border-zinc-900">
      <div className="max-w-5xl mx-auto">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-14 sm:mb-16">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-md bg-red-950/40 border border-red-800/40 text-red-400 text-xs font-mono uppercase tracking-wider mb-3">
            <Sparkles className="w-3.5 h-3.5 text-red-400" />
            <span>Showcase</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-white">
            Featured <span className="text-amber-400">Project</span>
          </h2>
          <div className="w-12 h-1 bg-gradient-to-r from-red-500 to-amber-500 mx-auto mt-3 rounded-full mb-4" />
          <p className="text-zinc-400 text-sm sm:text-base">
            Hands-on work developed to explore Generative AI capabilities and deploy practical web solutions.
          </p>
        </div>

        {/* Featured Project Card */}
        <div
          id={FEATURED_PROJECT.id}
          className="bg-gradient-to-b from-zinc-900/90 to-zinc-900/50 border border-zinc-800/90 rounded-2xl overflow-hidden shadow-2xl hover:border-amber-500/40 transition-all duration-300"
        >
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-0">
            {/* Left/Content Side */}
            <div className="lg:col-span-7 p-6 sm:p-8 lg:p-10 flex flex-col justify-between">
              <div>
                {/* Category & Status */}
                <div className="flex items-center gap-2.5 mb-4">
                  <span className="px-2.5 py-1 text-xs font-mono font-medium rounded-full bg-amber-950/60 border border-amber-700/50 text-amber-300">
                    {FEATURED_PROJECT.category}
                  </span>
                  <span className="text-xs font-mono text-zinc-400">
                    Deployed on Vercel
                  </span>
                </div>

                {/* Project Title */}
                <h3 className="text-2xl sm:text-3xl font-bold text-white mb-2 tracking-tight">
                  {FEATURED_PROJECT.name}
                </h3>
                <div className="text-sm font-mono text-amber-400/90 mb-4">
                  {FEATURED_PROJECT.tagline}
                </div>

                {/* Description */}
                <p className="text-zinc-300 text-base sm:text-lg leading-relaxed mb-6">
                  {FEATURED_PROJECT.description}
                </p>

                {/* Tags */}
                <div className="flex flex-wrap gap-2 mb-8">
                  {FEATURED_PROJECT.tags.map((tag) => (
                    <span
                      key={tag}
                      className="px-3 py-1 text-xs font-mono rounded-lg bg-zinc-800/80 border border-zinc-700/60 text-zinc-300"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>

              {/* Action Button: View Live Project */}
              <div className="pt-4 border-t border-zinc-800/70 flex flex-col sm:flex-row items-stretch sm:items-center gap-4">
                <a
                  id="btn-view-live-project"
                  href={FEATURED_PROJECT.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-2.5 px-6 py-3.5 rounded-xl font-semibold text-white bg-gradient-to-r from-red-600 via-red-500 to-amber-600 hover:from-red-500 hover:to-amber-500 shadow-lg shadow-red-950/50 hover:shadow-red-900/40 hover:-translate-y-0.5 active:translate-y-0 transition-all duration-200"
                >
                  <span>View Live Project</span>
                  <ExternalLink className="w-4 h-4 text-amber-200" />
                </a>

                <span className="text-xs text-zinc-400 font-mono text-center sm:text-left truncate">
                  {FEATURED_PROJECT.link.replace('https://', '')}
                </span>
              </div>
            </div>

            {/* Right/Visual Interactive Showcase Side */}
            <div className="lg:col-span-5 bg-zinc-950/90 border-t lg:border-t-0 lg:border-l border-zinc-800/80 p-6 sm:p-8 flex flex-col justify-center relative overflow-hidden">
              {/* Background ambient lighting */}
              <div className="absolute top-0 right-0 w-48 h-48 bg-red-600/10 rounded-full blur-2xl pointer-events-none" />
              <div className="absolute bottom-0 left-0 w-48 h-48 bg-amber-500/10 rounded-full blur-2xl pointer-events-none" />

              {/* Simulated Application Window */}
              <div className="rounded-xl bg-zinc-900/90 border border-zinc-800 shadow-xl overflow-hidden relative z-10">
                {/* Window header */}
                <div className="px-4 py-2.5 bg-zinc-950 border-b border-zinc-800 flex items-center justify-between">
                  <div className="flex items-center gap-1.5">
                    <span className="w-2.5 h-2.5 rounded-full bg-red-500/80" />
                    <span className="w-2.5 h-2.5 rounded-full bg-amber-500/80" />
                    <span className="w-2.5 h-2.5 rounded-full bg-emerald-500/80" />
                  </div>
                  <span className="text-[11px] font-mono text-zinc-400">myth-ai-seven.vercel.app</span>
                  <div className="w-4" />
                </div>

                {/* Window Body */}
                <div className="p-5 space-y-4 font-mono text-xs">
                  <div className="p-3 rounded-lg bg-zinc-950/70 border border-zinc-800 text-zinc-300">
                    <div className="text-[10px] text-amber-400/80 uppercase font-semibold mb-1 flex items-center gap-1">
                      <Cpu className="w-3 h-3" /> GenAI Exploration
                    </div>
                    <p className="text-zinc-300 text-[11px] font-sans">
                      Exploring generative prompts, AI-driven output workflows, and dynamic UI rendering.
                    </p>
                  </div>

                  <div className="p-3 rounded-lg bg-red-950/20 border border-red-800/30 text-zinc-300">
                    <div className="text-[10px] text-red-400/90 uppercase font-semibold mb-1 flex items-center gap-1">
                      <Layers className="w-3 h-3" /> Learning Objective
                    </div>
                    <p className="text-zinc-400 text-[11px] font-sans">
                      Building real-world experience connecting modern web frontends with intelligent models.
                    </p>
                  </div>

                  {/* Direct link callout */}
                  <a
                    href={FEATURED_PROJECT.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block text-center py-2 px-3 rounded-lg bg-zinc-800/80 hover:bg-zinc-800 border border-zinc-700 text-amber-400 hover:text-amber-300 text-xs font-medium transition-colors"
                  >
                    Open myth-ai-seven.vercel.app &rarr;
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
