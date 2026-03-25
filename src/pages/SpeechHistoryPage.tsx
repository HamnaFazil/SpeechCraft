import { Link } from 'react-router-dom'
import { HeaderBar } from '../components/HeaderBar'

const history = [
  { id: 'a1', title: 'Elevator pitch', date: 'Today', duration: '00:44' },
  { id: 'b2', title: 'Storytelling practice', date: 'Yesterday', duration: '01:30' },
  { id: 'c3', title: 'Interview answer', date: 'Mon', duration: '02:10' },
]

export function SpeechHistoryPage() {
  return (
    <div className="min-h-svh pb-28">
      <HeaderBar title="Speech History" backTo="/home" rightLabel="SpeechCraft" rightTo="/settings" />
      <main className="px-4 pt-6">
        <div className="space-y-3">
          {history.map((h) => (
            <Link
              key={h.id}
              to="/speech-analysis"
              className="block rounded-xl border border-gray-100 bg-white p-4 shadow-[0px_1px_2px_0px_rgba(0,0,0,0.05)] transition hover:bg-gray-50"
            >
              <div className="flex items-center justify-between">
                <div className="text-[16px] font-semibold text-gray-900">{h.title}</div>
                <div className="text-[12px] font-semibold text-gray-400">{h.duration}</div>
              </div>
              <div className="mt-1 text-[12px] text-gray-500">{h.date}</div>
            </Link>
          ))}
        </div>
      </main>
    </div>
  )
}

