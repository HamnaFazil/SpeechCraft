export function ProgressPage() {
  // All numbers are variables (swap these from API/user state later)
  const improvementScore = 84
  const improvementDelta = 14.2
  const avgFillerWords = 2.4
  const practiceTimeHours = 12.5
  const dailyStreakDays = 8

  const chart = [18, 22, 24, 30, 46, 28, 20] // Mon..Sun
  const selectedIndex = 4 // highlight Friday-ish like Figma

  return (
    <div className="min-h-svh pb-28">
      <header className="px-4 pb-4 pt-6">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-[#5b13ec] text-white">
              <MicMiniIcon />
            </div>
            <div>
              <div className="text-[14px] font-bold text-slate-900">Progress</div>
              <div className="text-[10px] font-semibold uppercase tracking-[1.2px] text-slate-400">SpeechCraft</div>
            </div>
          </div>
          <button
            type="button"
            className="flex h-9 w-9 items-center justify-center rounded-full bg-white/55 shadow-[0px_1px_2px_0px_rgba(0,0,0,0.06)] backdrop-blur transition hover:bg-white/70"
            aria-label="Profile"
          >
            <span className="text-[12px] font-bold text-slate-700">C</span>
          </button>
        </div>

        <div className="mt-4 rounded-xl bg-white/55 p-1 shadow-[0px_1px_2px_0px_rgba(0,0,0,0.06)] backdrop-blur">
          <div className="grid grid-cols-3">
            <div className="rounded-xl bg-white py-2 text-center text-[12px] font-semibold text-slate-900 shadow-sm">
              Week
            </div>
            <button className="rounded-xl py-2 text-center text-[12px] font-semibold text-slate-500 hover:text-slate-700">
              Month
            </button>
            <button className="rounded-xl py-2 text-center text-[12px] font-semibold text-slate-500 hover:text-slate-700">
              Year
            </button>
          </div>
        </div>
      </header>

      <main className="space-y-4 px-4">
        <section className="rounded-xl bg-white/55 p-4 shadow-[0px_1px_2px_0px_rgba(0,0,0,0.06)] backdrop-blur">
          <div className="flex items-center justify-between">
            <div>
              <div className="text-[12px] font-semibold text-slate-700">Improvement Score</div>
              <div className="mt-1 text-[10px] text-emerald-600">+{improvementDelta}% from last week</div>
            </div>
            <div className="text-[16px] font-extrabold text-slate-900">{improvementScore}</div>
          </div>

          <div className="mt-4 grid grid-cols-7 items-end gap-2">
            {chart.map((v, idx) => (
              <div key={idx} className="flex flex-col items-center gap-2">
                <div className="h-[86px] w-full rounded-full bg-slate-200/70">
                  <div
                    className="w-full rounded-full"
                    style={{
                      height: `${(v / Math.max(...chart)) * 86}px`,
                      backgroundColor: idx === selectedIndex ? '#5b13ec' : 'rgba(91,19,236,0.25)',
                    }}
                  />
                </div>
                <div className="text-[9px] text-slate-400">{['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'][idx]}</div>
              </div>
            ))}
          </div>
        </section>

        <section className="rounded-xl bg-white/55 p-4 shadow-[0px_1px_2px_0px_rgba(0,0,0,0.06)] backdrop-blur">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2">
              <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-rose-50 text-rose-600">
                <DotIcon />
              </div>
              <div>
                <div className="text-[12px] font-semibold text-slate-700">Average Filler Words</div>
                <div className="text-[10px] text-emerald-600">-5% improvement</div>
              </div>
            </div>
            <div className="text-[16px] font-extrabold text-slate-900">{avgFillerWords}</div>
          </div>
        </section>

        <section className="grid grid-cols-2 gap-3">
          <div className="rounded-xl bg-white/55 p-4 shadow-[0px_1px_2px_0px_rgba(0,0,0,0.06)] backdrop-blur">
            <div className="flex items-center gap-2">
              <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-indigo-50 text-indigo-600">
                <ClockIcon />
              </div>
              <div className="text-[12px] font-semibold text-slate-700">Practice Time</div>
            </div>
            <div className="mt-3 text-[18px] font-extrabold text-slate-900">{practiceTimeHours}</div>
            <div className="text-[10px] text-slate-400">hours</div>
          </div>

          <div className="rounded-xl bg-white/55 p-4 shadow-[0px_1px_2px_0px_rgba(0,0,0,0.06)] backdrop-blur">
            <div className="flex items-center gap-2">
              <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-amber-50 text-amber-600">
                <BoltSmallIcon />
              </div>
              <div className="text-[12px] font-semibold text-slate-700">Daily Streak</div>
            </div>
            <div className="mt-3 text-[18px] font-extrabold text-slate-900">{dailyStreakDays}</div>
            <div className="text-[10px] text-slate-400">days</div>
          </div>
        </section>

        <section className="rounded-xl bg-[#ede9fe] p-4 shadow-[0px_1px_2px_0px_rgba(0,0,0,0.06)]">
          <div className="flex items-start gap-3">
            <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-[#5b13ec] text-white">
              <StarIcon />
            </div>
            <div>
              <div className="text-[12px] font-semibold text-slate-900">Weekly Insight</div>
              <div className="mt-1 text-[12px] leading-5 text-slate-600">
                You’ve successfully reduced “Um” and “Like” by 20%. Focus on slowing down during transitions in your next session to improve clarity further.
              </div>
            </div>
          </div>
        </section>
      </main>
    </div>
  )
}

function MicMiniIcon() {
  return (
    <svg viewBox="0 0 24 24" className="h-5 w-5" aria-hidden="true">
      <path
        d="M12 14a3 3 0 0 0 3-3V6a3 3 0 0 0-6 0v5a3 3 0 0 0 3 3Zm5-3a5 5 0 0 1-10 0H5a7 7 0 0 0 6 6.92V21h2v-3.08A7 7 0 0 0 19 11h-2Z"
        fill="currentColor"
      />
    </svg>
  )
}

function DotIcon() {
  return <span className="inline-block h-2.5 w-2.5 rounded-full bg-current" />
}

function ClockIcon() {
  return (
    <svg viewBox="0 0 24 24" className="h-5 w-5" aria-hidden="true">
      <path
        d="M12 2a10 10 0 1 0 0 20 10 10 0 0 0 0-20Zm1 11h5v-2h-4V6h-2v7Z"
        fill="currentColor"
      />
    </svg>
  )
}

function BoltSmallIcon() {
  return (
    <svg viewBox="0 0 24 24" className="h-5 w-5" aria-hidden="true">
      <path d="M13 2 3 14h8l-1 8 11-14h-8l0-6Z" fill="currentColor" />
    </svg>
  )
}

function StarIcon() {
  return (
    <svg viewBox="0 0 24 24" className="h-5 w-5" aria-hidden="true">
      <path
        d="M12 2l2.7 7.4H22l-6 4.2 2.3 7.2L12 16.8 5.7 20.8 8 13.6 2 9.4h7.3L12 2Z"
        fill="currentColor"
        opacity="0.9"
      />
    </svg>
  )
}

