export function ModeSelectionPage() {
  return (
    <div className="min-h-svh pb-28">
      <header className="px-4 pb-4 pt-6">
        <div className="flex items-center gap-3">
          <button
            type="button"
            onClick={() => window.history.back()}
            className="rounded-lg p-2 text-slate-700 transition hover:bg-white/40 focus:outline-none focus-visible:ring-2 focus-visible:ring-[#5b13ec]/40"
            aria-label="Go back"
          >
            <BackIcon />
          </button>
          <div className="flex-1 text-center">
            <div className="text-[14px] font-semibold uppercase tracking-[1.4px] text-slate-400">
              SpeechCraft
            </div>
          </div>
          <div className="w-10" />
        </div>

        <div className="mt-4">
          <div className="text-[18px] font-bold tracking-[-0.3px] text-slate-900">Choose Mode</div>
          <div className="mt-1 text-[12px] text-slate-500">Select a practice style to sharpen your skills</div>
        </div>
      </header>

      <main className="px-4">
        <div className="space-y-3">
          <ModeCard
            title="Free Practice"
            desc="No pressure. Speak about any topic and get instant feedback on your tone."
            color="bg-indigo-50"
            icon={<ModeIcon kind="free" />}
          />
          <ModeCard
            title="Timed Presentation"
            desc="Master your pacing with specific time limits and transition cues."
            color="bg-rose-50"
            icon={<ModeIcon kind="timed" />}
          />
          <ModeCard
            title="Interview Practice"
            desc="Simulate high-stakes questions and improve your response clarity."
            color="bg-emerald-50"
            icon={<ModeIcon kind="interview" />}
          />
          <ModeCard
            title="Daily Challenge"
            desc="Complete a unique daily prompt and earn points to climb the leaderboard."
            color="bg-amber-50"
            icon={<ModeIcon kind="daily" />}
          />
        </div>
      </main>
    </div>
  )
}

function ModeCard({
  title,
  desc,
  color,
  icon,
}: {
  title: string
  desc: string
  color: string
  icon: React.ReactNode
}) {
  return (
    <a
      href="/recording"
      className={[
        'block rounded-xl border border-white/60 p-4 shadow-[0px_1px_2px_0px_rgba(0,0,0,0.06)]',
        'bg-white/55 backdrop-blur transition',
        'hover:bg-white/70 focus:outline-none focus-visible:ring-2 focus-visible:ring-[#5b13ec]/40',
      ].join(' ')}
    >
      <div className="flex items-start gap-3">
        <div className={['flex h-10 w-10 items-center justify-center rounded-xl', color].join(' ')}>{icon}</div>
        <div className="flex-1">
          <div className="text-[14px] font-semibold text-slate-900">{title}</div>
          <div className="mt-1 text-[12px] leading-5 text-slate-500">{desc}</div>
        </div>
      </div>
    </a>
  )
}

function BackIcon() {
  return (
    <svg viewBox="0 0 24 24" className="h-5 w-5" aria-hidden="true">
      <path d="M15 18 9 12l6-6" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
    </svg>
  )
}

function ModeIcon({ kind }: { kind: 'free' | 'timed' | 'interview' | 'daily' }) {
  const color =
    kind === 'free'
      ? 'text-indigo-600'
      : kind === 'timed'
        ? 'text-rose-600'
        : kind === 'interview'
          ? 'text-emerald-600'
          : 'text-amber-600'

  return (
    <svg viewBox="0 0 24 24" className={['h-5 w-5', color].join(' ')} aria-hidden="true">
      {kind === 'free' ? (
        <path d="M12 3a4 4 0 0 1 4 4v4a4 4 0 0 1-8 0V7a4 4 0 0 1 4-4Zm7 8a7 7 0 0 1-14 0H3a9 9 0 0 0 8 8.94V22h2v-2.06A9 9 0 0 0 21 11h-2Z" fill="currentColor" />
      ) : kind === 'timed' ? (
        <path d="M9 2h6v2H9V2Zm3 4a8 8 0 1 1 0 16 8 8 0 0 1 0-16Zm1 4h-2v5l4 2 1-1.73-3-1.27V10Z" fill="currentColor" />
      ) : kind === 'interview' ? (
        <path d="M4 4h16v10H6l-2 2V4Zm4 13h12v3H8v-3Z" fill="currentColor" />
      ) : (
        <path d="M12 2 4 5v6c0 5 3.4 9.7 8 11 4.6-1.3 8-6 8-11V5l-8-3Z" fill="currentColor" />
      )}
    </svg>
  )
}

