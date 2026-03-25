import { HeaderBar } from '../components/HeaderBar'

export function PracticePage() {
  return (
    <div className="min-h-svh pb-28">
      <HeaderBar title="Practice" rightLabel="SpeechCraft" rightTo="/settings" />
      <main className="px-4 pt-6">
        <div className="rounded-xl border border-gray-100 bg-white p-4 shadow-[0px_1px_2px_0px_rgba(0,0,0,0.05)]">
          <div className="text-[16px] font-semibold text-gray-900">Create a practice session</div>
          <p className="mt-1 text-[14px] text-gray-500">
            Choose a mode, then record to get feedback.
          </p>
        </div>
      </main>
    </div>
  )
}

