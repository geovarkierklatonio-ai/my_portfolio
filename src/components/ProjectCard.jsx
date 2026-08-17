import { useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import { ArrowUpRight, ExternalLink, ShieldCheck, X } from 'lucide-react'

function ProjectCard({
  title,
  category,
  description,
  overview,
  tech,
  year,
  featured,
  link,
  accent,
  metrics,
  highlights,
}) {
  const [isModalOpen, setIsModalOpen] = useState(false)
  const [isFullViewOpen, setIsFullViewOpen] = useState(false)

  const openLiveSite = () => {
    if (link) {
      window.open(link, '_blank', 'noopener,noreferrer')
    }
  }

  return (
    <>
      <motion.article
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.25 }}
        whileHover={{ y: -8 }}
        transition={{ type: 'spring', stiffness: 220, damping: 18 }}
        className="group flex h-full flex-col overflow-hidden rounded-[28px] border border-white/10 bg-slate-900/80 shadow-2xl shadow-slate-950/40"
      >
        <div className={`relative h-52 overflow-hidden bg-gradient-to-br ${accent}`}>
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,_rgba(255,255,255,0.38),transparent_30%),linear-gradient(135deg,rgba(15,23,42,0.15),rgba(15,23,42,0.6))]" />
          <div className="relative flex h-full flex-col justify-between p-5">
            <div className="flex items-center justify-between gap-3">
              <span className="rounded-full border border-white/20 bg-slate-950/20 px-2.5 py-1 text-[10px] font-bold uppercase tracking-[0.18em] text-white/90">
                {year}
              </span>
              {featured ? (
                <span className="rounded-full bg-emerald-400/15 px-2.5 py-1 text-[10px] font-semibold uppercase tracking-[0.18em] text-emerald-100">
                  Featured
                </span>
              ) : null}
            </div>

            <div className="space-y-2">
              <p className="text-[11px] font-semibold uppercase tracking-[0.2em] text-white/80">{category}</p>
              <h3 className="text-2xl font-black text-white">{title}</h3>
            </div>
          </div>
        </div>

        <div className="flex flex-1 flex-col p-6">
          <p className="text-sm leading-7 text-slate-300">{description}</p>

          <div className="mt-5 flex flex-wrap gap-2">
            {tech.map((item) => (
              <span
                key={item}
                className="rounded-full border border-slate-700 bg-slate-800/80 px-2.5 py-1 text-[11px] font-medium text-slate-200"
              >
                {item}
              </span>
            ))}
          </div>

          <div className="mt-6 flex items-center gap-3 pt-4">
            <button
              type="button"
              onClick={() => setIsModalOpen(true)}
              className="inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-cyan-400 to-blue-500 px-4 py-2 text-sm font-semibold text-slate-950 transition hover:brightness-110"
            >
              View project <ArrowUpRight size={16} />
            </button>
            <button
              type="button"
              onClick={openLiveSite}
              className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-slate-800/80 px-4 py-2 text-sm font-medium text-slate-100 transition hover:border-cyan-400/60 hover:text-cyan-200"
            >
              Live site <ExternalLink size={15} />
            </button>
          </div>
        </div>
      </motion.article>

      <AnimatePresence>
        {isModalOpen ? (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center bg-slate-950/80 p-4 backdrop-blur-sm"
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.94, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.96, y: 16 }}
              transition={{ duration: 0.25, ease: 'easeOut' }}
              className="relative w-full max-w-5xl overflow-hidden rounded-[30px] border border-white/10 bg-slate-900 shadow-[0_30px_90px_rgba(15,23,42,0.8)]"
            >
              <button
                type="button"
                onClick={() => setIsModalOpen(false)}
                className="absolute right-4 top-4 z-20 inline-flex h-10 w-10 items-center justify-center rounded-full border border-white/10 bg-slate-950/60 text-slate-200 transition hover:border-cyan-400/60 hover:text-cyan-200"
                aria-label="Close project preview"
              >
                <X size={18} />
              </button>

              <div className={`relative h-56 bg-gradient-to-r ${accent}`}>
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,_rgba(255,255,255,0.35),transparent_22%),linear-gradient(135deg,rgba(2,6,23,0.18),rgba(2,6,23,0.75))]" />
                <div className="relative flex h-full flex-col justify-between p-6 md:p-8">
                  <div className="flex items-center justify-between gap-3">
                    <span className="rounded-full border border-white/20 bg-slate-950/25 px-3 py-1 text-[10px] font-bold uppercase tracking-[0.2em] text-white/90">
                      {category}
                    </span>
                    {featured ? (
                      <span className="rounded-full bg-emerald-400/20 px-3 py-1 text-[10px] font-semibold uppercase tracking-[0.18em] text-emerald-50">
                        Featured project
                      </span>
                    ) : null}
                  </div>
                  <div>
                    <p className="text-[11px] font-semibold uppercase tracking-[0.26em] text-white/75">Portfolio preview</p>
                    <h3 className="mt-3 text-3xl font-black text-white md:text-4xl">{title}</h3>
                  </div>
                </div>
              </div>

              <div className="grid gap-6 p-6 md:grid-cols-[1.3fr_0.7fr] md:p-8">
                <div>
                  <p className="text-base leading-8 text-slate-300">{overview}</p>

                  <div className="mt-6 flex flex-wrap gap-2">
                    {tech.map((item) => (
                      <span key={item} className="rounded-full border border-slate-700 bg-slate-800 px-3 py-1.5 text-xs font-medium text-slate-200">
                        {item}
                      </span>
                    ))}
                  </div>

                  <div className="mt-8 grid gap-4 sm:grid-cols-3">
                    {metrics.map((metric) => (
                      <div key={metric.label} className="rounded-2xl border border-white/10 bg-slate-800/80 p-4">
                        <div className="text-sm font-medium text-slate-300">{metric.label}</div>
                        <div className="mt-2 text-xl font-black text-white">{metric.value}</div>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="rounded-3xl border border-white/10 bg-slate-800/80 p-5">
                  <div className="flex items-center gap-2 text-cyan-300">
                    <ShieldCheck size={18} />
                    <span className="text-sm font-semibold uppercase tracking-[0.18em]">Highlights</span>
                  </div>

                  <ul className="mt-4 space-y-3 text-sm text-slate-200">
                    {highlights.map((item) => (
                      <li key={item} className="flex items-start gap-2">
                        <span className="mt-1 h-2.5 w-2.5 rounded-full bg-gradient-to-r from-cyan-400 to-blue-500" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              <div className="flex flex-col gap-3 border-t border-white/10 p-6 md:flex-row md:items-center md:justify-between md:p-8">
                <button
                  type="button"
                  onClick={() => {
                    setIsModalOpen(false)
                    setIsFullViewOpen(true)
                  }}
                  className="inline-flex items-center justify-center gap-2 rounded-full bg-gradient-to-r from-cyan-400 to-blue-500 px-5 py-3 text-sm font-semibold text-slate-950 transition hover:brightness-110"
                >
                  View full <ArrowUpRight size={16} />
                </button>

                <button
                  type="button"
                  onClick={openLiveSite}
                  className="inline-flex items-center justify-center gap-2 rounded-full border border-cyan-400/35 bg-cyan-500/10 px-5 py-3 text-sm font-semibold text-cyan-200 transition hover:border-cyan-300 hover:bg-cyan-500/15"
                >
                  Open live project <ExternalLink size={15} />
                </button>
              </div>
            </motion.div>
          </motion.div>
        ) : null}
      </AnimatePresence>

      <AnimatePresence>
        {isFullViewOpen ? (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[60] bg-slate-950/90 p-4 backdrop-blur-md"
          >
            <motion.div
              initial={{ opacity: 0, y: 32 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 18 }}
              transition={{ duration: 0.25, ease: 'easeOut' }}
              className="mx-auto flex h-full max-w-6xl flex-col overflow-hidden rounded-[30px] border border-white/10 bg-slate-900"
            >
              <div className="flex items-center justify-between border-b border-white/10 p-4 md:p-6">
                <div>
                  <p className="text-[10px] font-semibold uppercase tracking-[0.28em] text-cyan-300">{category}</p>
                  <h3 className="mt-2 text-2xl font-black text-white md:text-3xl">{title}</h3>
                </div>

                <button
                  type="button"
                  onClick={() => setIsFullViewOpen(false)}
                  className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-white/10 bg-slate-800 text-slate-200 transition hover:border-cyan-400/50 hover:text-cyan-200"
                  aria-label="Close full project view"
                >
                  <X size={18} />
                </button>
              </div>

              <div className={`relative overflow-hidden bg-gradient-to-r ${accent} p-6 md:p-10`}>
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,_rgba(255,255,255,0.35),transparent_25%),linear-gradient(135deg,rgba(2,6,23,0.1),rgba(2,6,23,0.65))]" />
                <div className="relative grid gap-6 lg:grid-cols-[1.2fr_0.8fr] lg:items-end">
                  <div>
                    <p className="text-[11px] font-semibold uppercase tracking-[0.22em] text-white/80">Security solutions overview</p>
                    <h4 className="mt-4 max-w-xl text-3xl font-black text-white md:text-5xl">{title}</h4>
                  </div>

                  <div className="grid gap-3 sm:grid-cols-3 lg:grid-cols-1 xl:grid-cols-3">
                    {metrics.map((metric) => (
                      <div key={metric.label} className="rounded-2xl border border-white/15 bg-slate-950/25 p-4 backdrop-blur-sm">
                        <div className="text-[10px] font-semibold uppercase tracking-[0.2em] text-white/70">{metric.label}</div>
                        <div className="mt-2 text-xl font-black text-white">{metric.value}</div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              <div className="grid flex-1 gap-8 overflow-y-auto p-6 md:grid-cols-[1.2fr_0.8fr] md:p-8">
                <div>
                  <p className="text-base leading-8 text-slate-300">{description}</p>
                  <p className="mt-5 text-base leading-8 text-slate-300">{overview}</p>

                  <div className="mt-8 flex flex-wrap gap-2">
                    {tech.map((item) => (
                      <span key={item} className="rounded-full border border-slate-700 bg-slate-800 px-3 py-1.5 text-xs font-medium text-slate-200">
                        {item}
                      </span>
                    ))}
                  </div>

                  <div className="mt-8 rounded-[24px] border border-white/10 bg-slate-800/80 p-5">
                    <div className="flex items-center gap-2 text-cyan-300">
                      <ShieldCheck size={18} />
                      <span className="text-sm font-semibold uppercase tracking-[0.18em]">What this service includes</span>
                    </div>

                    <div className="mt-5 grid gap-4 sm:grid-cols-2">
                      {highlights.map((item) => (
                        <div key={item} className="rounded-2xl border border-white/10 bg-slate-900/70 p-4 text-sm text-slate-200">
                          {item}
                        </div>
                      ))}
                    </div>
                  </div>
                </div>

                <div className="space-y-5">
                  <div className="rounded-[24px] border border-white/10 bg-slate-800/80 p-5">
                    <p className="text-[10px] font-semibold uppercase tracking-[0.24em] text-cyan-300">Brand direction</p>
                    <div className="mt-4 space-y-3 text-sm leading-7 text-slate-300">
                      <p>Premium service positioning</p>
                      <p>Trust-first communication</p>
                      <p>Modern visual identity for security businesses</p>
                    </div>
                  </div>

                  <div className="rounded-[24px] border border-white/10 bg-slate-800/80 p-5">
                    <p className="text-[10px] font-semibold uppercase tracking-[0.24em] text-cyan-300">Project status</p>
                    <div className="mt-4 text-2xl font-black text-white">Static concept</div>
                    <p className="mt-2 text-sm leading-7 text-slate-300">Designed as a polished portfolio project inspired by the JDL Davao product and service style.</p>
                  </div>

                  <button
                    type="button"
                    onClick={openLiveSite}
                    className="inline-flex w-full items-center justify-center gap-2 rounded-full bg-gradient-to-r from-cyan-400 to-blue-500 px-5 py-3 text-sm font-semibold text-slate-950 transition hover:brightness-110"
                  >
                    Visit live website <ExternalLink size={16} />
                  </button>
                </div>
              </div>
            </motion.div>
          </motion.div>
        ) : null}
      </AnimatePresence>
    </>
  )
}

export default ProjectCard
