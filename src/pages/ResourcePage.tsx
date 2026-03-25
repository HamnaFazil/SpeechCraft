import { HeaderBar } from '../components/HeaderBar'

const resources = [
  { title: 'Breathing for projection', desc: 'Simple drill to strengthen your voice.' },
  { title: 'Reduce filler words', desc: 'Pause, breathe, then continue.' },
  { title: 'Confidence checklist', desc: 'A pre-speech ritual that works.' },
]

export function ResourcePage() {
  return (
    <div className="min-h-svh pb-28">
      <HeaderBar title="Resources" backTo="/home" rightLabel="SpeechCraft" rightTo="/settings" />
      <main className="px-4 pt-6">
        <div className="space-y-3">
          {resources.map((r) => (
            <div
              key={r.title}
              className="rounded-xl border border-gray-100 bg-white p-4 shadow-[0px_1px_2px_0px_rgba(0,0,0,0.05)]"
            >
              <div className="text-[16px] font-semibold text-gray-900">{r.title}</div>
              <div className="mt-1 text-[14px] text-gray-500">{r.desc}</div>
            </div>
          ))}
        </div>
      </main>
    </div>
  )
}

