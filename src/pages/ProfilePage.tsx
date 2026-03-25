import { HeaderBar } from '../components/HeaderBar'
import { Button } from '../components/Button'

const avatarUrl = 'https://www.figma.com/api/mcp/asset/37552bc6-436e-4bc1-8bd5-11ca32f0fa2a'

export function ProfilePage() {
  return (
    <div className="min-h-svh pb-28">
      <HeaderBar title="Profile" backTo="/settings" rightLabel="SpeechCraft" rightTo="/home" />

      <main className="px-4 pt-6">
        <section className="flex flex-col items-center">
          <div className="relative">
            <div className="rounded-full bg-[#5b13ec] p-1">
              <div className="h-24 w-24 overflow-hidden rounded-full border-4 border-white">
                <img src={avatarUrl} alt="User avatar" className="h-full w-full object-cover" />
              </div>
            </div>
            <div className="absolute -bottom-1 -right-1 rounded-full border-2 border-white bg-[#5b13ec] px-[14px] py-[6px] shadow-[0px_10px_15px_-3px_rgba(0,0,0,0.1),0px_4px_6px_-4px_rgba(0,0,0,0.1)]">
              <div className="text-[12px] font-bold text-white">Level 14</div>
            </div>
          </div>

          <h2 className="mt-4 text-center text-[24px] font-bold leading-8 text-gray-900">
            Alex Thompson
          </h2>
          <p className="mt-1 text-center text-[14px] text-gray-500">Persuasive Speaker Track</p>
        </section>

        <section className="mt-8 space-y-4">
          <div className="text-[14px] font-semibold uppercase tracking-[0.7px] text-gray-500">
            Practice Stats
          </div>

          <div className="grid grid-cols-3 gap-4">
            <StatCard value="24" label="STREAK" />
            <StatCard value="158" label="MINUTES" />
            <StatCard value="12" label="COURSES" />
          </div>
        </section>

        <section className="mt-8 space-y-4">
          <div className="flex items-center justify-between">
            <div className="text-[14px] font-semibold uppercase tracking-[0.7px] text-gray-500">
              Achievements
            </div>
            <button className="text-[14px] font-medium text-[#5b13ec] transition hover:text-[#4a0fc2]">
              View All
            </button>
          </div>

          <div className="grid grid-cols-4 gap-4">
            <Achievement emoji="🔥" label="Early Bird" bgClass="bg-yellow-100" />
            <Achievement emoji="🎤" label="Orator" bgClass="bg-blue-100" />
            <Achievement emoji="🎯" label="Perfect Pitch" bgClass="bg-purple-100" />
            <Achievement emoji="🏆" label="Master" bgClass="bg-gray-200 opacity-40" />
          </div>
        </section>

        <section className="mt-8 space-y-3">
          <Button className="w-full" size="lg">
            <svg viewBox="0 0 24 24" className="h-5 w-5" aria-hidden="true">
              <path
                d="M4 20h4l10.5-10.5a2.1 2.1 0 0 0 0-3L16.5 4.5a2.1 2.1 0 0 0-3 0L3 15v5Z"
                fill="currentColor"
              />
            </svg>
            Edit Profile
          </Button>
          <Button className="w-full" size="lg" variant="danger" onClick={() => (window.location.href = '/login')}>
            <svg viewBox="0 0 24 24" className="h-5 w-5" aria-hidden="true">
              <path
                d="M10 17v2H4a2 2 0 0 1-2-2V7a2 2 0 0 1 2-2h6v2H4v10h6Zm11-5-4-4v3H9v2h8v3l4-4Z"
                fill="currentColor"
              />
            </svg>
            Logout
          </Button>
        </section>
      </main>
    </div>
  )
}

function StatCard({ value, label }: { value: string; label: string }) {
  return (
    <div className="rounded-xl border border-gray-100 bg-white p-4 text-center shadow-[0px_1px_2px_0px_rgba(0,0,0,0.05)]">
      <div className="text-[24px] font-bold leading-8 text-[#5b13ec]">{value}</div>
      <div className="mt-1 text-[10px] font-medium leading-[15px] text-gray-500">{label}</div>
    </div>
  )
}

function Achievement({
  emoji,
  label,
  bgClass,
}: {
  emoji: string
  label: string
  bgClass: string
}) {
  return (
    <div className="flex flex-col items-center">
      <div className={['flex h-14 w-14 items-center justify-center rounded-full', bgClass].join(' ')}>
        <span className="text-[24px] leading-8">{emoji}</span>
      </div>
      <div className="mt-2 text-center text-[10px] font-medium leading-[15px] text-gray-900">
        {label}
      </div>
    </div>
  )
}

