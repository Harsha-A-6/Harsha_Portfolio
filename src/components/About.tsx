import { GraduationCap, Compass, Lightbulb, BookOpen } from 'lucide-react';
import { PERSONAL_INFO } from '../data/portfolioData';

export function About() {
  return (
    <section id="about" className="py-20 sm:py-28 px-4 sm:px-6 lg:px-8 relative z-10 border-t border-zinc-900">
      <div className="max-w-5xl mx-auto">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-14 sm:mb-16">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-md bg-red-950/40 border border-red-800/40 text-red-400 text-xs font-mono uppercase tracking-wider mb-3">
            <BookOpen className="w-3.5 h-3.5 text-red-400" />
            <span>Introduction</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-white">
            About <span className="text-amber-400">Me</span>
          </h2>
          <div className="w-12 h-1 bg-gradient-to-r from-red-500 to-amber-500 mx-auto mt-3 rounded-full" />
        </div>

        {/* Main Content Grid */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-stretch">
          {/* Main Introduction Card */}
          <div className="md:col-span-7 bg-zinc-900/80 border border-zinc-800/90 rounded-2xl p-6 sm:p-8 backdrop-blur-sm relative overflow-hidden flex flex-col justify-between">
            <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-bl from-amber-500/10 via-red-600/5 to-transparent rounded-bl-full pointer-events-none" />
            
            <div className="space-y-4">
              <h3 className="text-xl sm:text-2xl font-semibold text-white tracking-tight">
                Starting My Journey in Tech & AI
              </h3>
              <p className="text-zinc-300 text-base sm:text-lg leading-relaxed font-normal">
                {PERSONAL_INFO.introduction}
              </p>
              <p className="text-zinc-400 text-sm sm:text-base leading-relaxed">
                As a first-year undergraduate, every day is an opportunity to explore how algorithms work, experiment with building clean web interfaces, and understand how Generative AI systems transform ideas into interactive prototypes.
              </p>
            </div>

            <div className="pt-6 mt-6 border-t border-zinc-800/80 flex flex-wrap items-center justify-between gap-4">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-xl bg-amber-500/10 border border-amber-500/30 flex items-center justify-center text-amber-400">
                  <GraduationCap className="w-5 h-5" />
                </div>
                <div>
                  <div className="text-sm font-semibold text-zinc-100">{PERSONAL_INFO.college}</div>
                  <div className="text-xs text-zinc-400">{PERSONAL_INFO.degree} • {PERSONAL_INFO.currentLevel}</div>
                </div>
              </div>
            </div>
          </div>

          {/* Quick Pillars of My Learning */}
          <div className="md:col-span-5 flex flex-col gap-4">
            {/* Pillar 1 */}
            <div className="bg-zinc-900/60 border border-zinc-800/80 rounded-xl p-5 hover:border-zinc-700 transition-colors">
              <div className="flex items-start gap-3.5">
                <div className="p-2 rounded-lg bg-red-950/50 border border-red-800/50 text-red-400 shrink-0 mt-0.5">
                  <Compass className="w-4 h-4" />
                </div>
                <div>
                  <h4 className="text-sm font-semibold text-white mb-1">Foundational Exploration</h4>
                  <p className="text-xs sm:text-sm text-zinc-400 leading-relaxed">
                    Prioritizing fundamental computer science principles, solid coding habits, and problem-solving practice from the ground up.
                  </p>
                </div>
              </div>
            </div>

            {/* Pillar 2 */}
            <div className="bg-zinc-900/60 border border-zinc-800/80 rounded-xl p-5 hover:border-zinc-700 transition-colors">
              <div className="flex items-start gap-3.5">
                <div className="p-2 rounded-lg bg-amber-950/50 border border-amber-800/50 text-amber-400 shrink-0 mt-0.5">
                  <Lightbulb className="w-4 h-4" />
                </div>
                <div>
                  <h4 className="text-sm font-semibold text-white mb-1">Practical Creation</h4>
                  <p className="text-xs sm:text-sm text-zinc-400 leading-relaxed">
                    Believing that the best way to learn is by building real projects, such as experimenting with Generative AI tools and deploying functional apps.
                  </p>
                </div>
              </div>
            </div>

            {/* Pillar 3 */}
            <div className="bg-zinc-900/60 border border-zinc-800/80 rounded-xl p-5 hover:border-zinc-700 transition-colors">
              <div className="flex items-start gap-3.5">
                <div className="p-2 rounded-lg bg-zinc-800 border border-zinc-700 text-zinc-300 shrink-0 mt-0.5">
                  <GraduationCap className="w-4 h-4" />
                </div>
                <div>
                  <h4 className="text-sm font-semibold text-white mb-1">Goal: AI Engineer</h4>
                  <p className="text-xs sm:text-sm text-zinc-400 leading-relaxed">
                    Aiming to grow step-by-step from beginner software fundamentals into an engineering role shaping intelligent systems.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
