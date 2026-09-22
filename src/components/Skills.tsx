import { Terminal, Globe, Sparkles, ShieldCheck } from 'lucide-react';
import { SKILLS } from '../data/portfolioData';

export function Skills() {
  const getIcon = (name: string) => {
    switch (name) {
      case 'terminal':
        return <Terminal className="w-5 h-5 text-amber-400" />;
      case 'globe':
        return <Globe className="w-5 h-5 text-red-400" />;
      case 'sparkles':
        return <Sparkles className="w-5 h-5 text-amber-300" />;
      default:
        return <Terminal className="w-5 h-5 text-amber-400" />;
    }
  };

  return (
    <section id="skills" className="py-20 sm:py-28 px-4 sm:px-6 lg:px-8 relative z-10 border-t border-zinc-900 bg-zinc-950/40">
      <div className="max-w-5xl mx-auto">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-14 sm:mb-16">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-md bg-amber-950/40 border border-amber-800/40 text-amber-400 text-xs font-mono uppercase tracking-wider mb-3">
            <ShieldCheck className="w-3.5 h-3.5 text-amber-400" />
            <span>Learning In Progress</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-white">
            Technical <span className="text-red-400">Skills</span>
          </h2>
          <div className="w-12 h-1 bg-gradient-to-r from-amber-500 to-red-500 mx-auto mt-3 rounded-full mb-4" />
          <p className="text-zinc-400 text-sm sm:text-base">
            These are my foundational skills as a first-year student. I am actively practicing and deepening these capabilities daily.
          </p>
        </div>

        {/* Skill Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {SKILLS.map((skill) => (
            <div
              key={skill.id}
              id={skill.id}
              className="group bg-zinc-900/80 border border-zinc-800/90 rounded-2xl p-6 hover:border-amber-500/40 transition-all duration-300 hover:-translate-y-1 shadow-lg shadow-black/20 flex flex-col justify-between"
            >
              <div>
                {/* Header with Icon and Level Badge */}
                <div className="flex items-center justify-between gap-2 mb-4">
                  <div className="w-10 h-10 rounded-xl bg-zinc-800/90 border border-zinc-700/80 flex items-center justify-center group-hover:scale-105 transition-transform">
                    {getIcon(skill.iconName)}
                  </div>
                  <span className="inline-block px-2.5 py-1 text-[11px] font-mono font-medium rounded-md bg-red-950/60 border border-red-800/50 text-red-300">
                    {skill.level}
                  </span>
                </div>

                {/* Skill Name */}
                <h3 className="text-lg font-bold text-white mb-2 group-hover:text-amber-300 transition-colors">
                  {skill.name}
                </h3>

                {/* Description */}
                <p className="text-zinc-400 text-sm leading-relaxed mb-6">
                  {skill.description}
                </p>
              </div>

              {/* Tags / Sub-topics */}
              <div className="pt-4 border-t border-zinc-800/60">
                <div className="text-[11px] font-mono text-zinc-400 uppercase tracking-wider mb-2">
                  Areas Covered
                </div>
                <div className="flex flex-wrap gap-1.5">
                  {skill.tags.map((tag) => (
                    <span
                      key={tag}
                      className="px-2 py-0.5 rounded-md bg-zinc-800/60 border border-zinc-700/50 text-zinc-300 text-xs font-mono"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
