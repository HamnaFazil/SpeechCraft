import { Link } from 'react-router-dom'
import { HeaderBar } from '../components/HeaderBar'
import { Button } from '../components/Button'

export function HomePage() {
  return (
    <div className="min-h-svh pb-28">
      <HeaderBar title="Home" rightLabel="SpeechCraft" rightTo="/settings" />

      <main className="px-4 pt-6">
        <section className="rounded-xl border border-gray-100 bg-white p-4 shadow-[0px_1px_2px_0px_rgba(0,0,0,0.05)]">
          <div className="text-[14px] font-semibold uppercase tracking-[0.6px] text-gray-500">
            Today&apos;s focus
          </div>
          <div className="mt-2 text-[20px] font-bold tracking-[-0.5px] text-gray-900">
            Speak with clarity
          </div>
          <p className="mt-1 text-[14px] text-gray-500">
            Record a short practice and get instant feedback.
          </p>

          <div className="mt-4 flex gap-3">
            <Link className="flex-1" to="/recording">
              <Button className="w-full" size="lg">
                Start Recording
              </Button>
            </Link>
            <Link className="flex-1" to="/challenges">
              <Button className="w-full" size="lg" variant="secondary">
                Challenges
              </Button>
            </Link>
          </div>
        </section>

        <section className="mt-6 space-y-3">
          <div className="text-[14px] font-semibold uppercase tracking-[0.6px] text-gray-500">
            Quick actions
          </div>
          <div className="grid grid-cols-2 gap-4">
            <QuickCard to="/speech-history" title="History" subtitle="Past recordings" />
            <QuickCard to="/progress" title="Progress" subtitle="Trends & stats" />
            <QuickCard to="/resources" title="Resources" subtitle="Guides & tips" />
            <QuickCard to="/profile" title="Profile" subtitle="Achievements" />
          </div>
        </section>
      </main>
    </div>
  )
}

function QuickCard({ to, title, subtitle }: { to: string; title: string; subtitle: string }) {
  return (
    <Link
      to={to}
      className="rounded-xl border border-gray-100 bg-white p-4 shadow-[0px_1px_2px_0px_rgba(0,0,0,0.05)] transition hover:-translate-y-[1px] hover:shadow-[0px_10px_15px_-3px_rgba(0,0,0,0.08),0px_4px_6px_-4px_rgba(0,0,0,0.06)] focus:outline-none focus-visible:ring-2 focus-visible:ring-[#5b13ec]/40"
    >
      <div className="text-[16px] font-semibold text-gray-900">{title}</div>
      <div className="mt-1 text-[12px] text-gray-500">{subtitle}</div>
    </Link>
  )
}

