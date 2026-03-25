import { Link, useNavigate } from 'react-router-dom'
import { HeaderBar } from '../components/HeaderBar'
import { Button } from '../components/Button'
import { formatStopwatch, useRecordingSession } from '../hooks/recordingSession'

type SpeechMetric = {
  label: string
  value: number
  valueLabel: string
  subtitle: string
  ringColor: string
}

type SpeechAnalysisData = {
  overallScore: number
  secondsElapsed: number
  metrics: SpeechMetric[]
  suggestions: string[]
}

function buildDemoAnalysis(secondsElapsed: number): SpeechAnalysisData {
  return {
    overallScore: 84,
    secondsElapsed,
    metrics: [
      { label: 'Pace', value: 145, valueLabel: '145', subtitle: 'Optimal', ringColor: '#5b13ec' },
      { label: 'Filler Words', value: 12, valueLabel: '12', subtitle: 'Slightly High', ringColor: '#f59e0b' },
      { label: 'Clarity', value: 92, valueLabel: '92%', subtitle: 'Excellent', ringColor: '#5b13ec' },
      { label: 'Confidence', value: 80, valueLabel: 'High', subtitle: 'Strong', ringColor: '#5b13ec' },
    ],
    suggestions: [
      'Try to reduce your use of “um” and “like”. Taking a short breath or a silent pause is more effective.',
      'Your opening statement was very strong, but your volume dipped slightly towards the conclusion.',
      'Consider varying your pitch more during key emphasis points to maintain audience engagement.',
    ],
  }
}

export function SpeechAnalysisPage() {
  const navigate = useNavigate()
  const session = useRecordingSession()
  const analysis = buildDemoAnalysis(session.seconds)

  return (
    <div className="min-h-svh pb-28">
      <HeaderBar title="Speech Analysis" backTo="/recording" rightLabel="SpeechCraft" rightTo="/settings" />

      <main className="px-4 pt-6">
        <section className="rounded-xl bg-white/55 p-4 shadow-[0px_1px_2px_0px_rgba(0,0,0,0.06)] backdrop-blur">
          <div className="text-center text-[10px] font-semibold uppercase tracking-[0.6px] text-slate-400">
            Overall performance
          </div>
          <div className="mt-2 text-center text-[44px] font-extrabold leading-none text-[#5b13ec]">
            {analysis.overallScore}
          </div>
          <div className="mt-2 text-center text-[12px] text-slate-500">
            Time recorded: <span className="font-semibold">{formatStopwatch(analysis.secondsElapsed)}</span>
          </div>
        </section>

        <section className="mt-4 grid grid-cols-2 gap-3">
          {analysis.metrics.map((m) => (
            <MetricCard key={m.label} metric={m} />
          ))}
        </section>

        <section className="mt-4 rounded-xl bg-white/55 p-4 shadow-[0px_1px_2px_0px_rgba(0,0,0,0.06)] backdrop-blur">
          <div className="flex items-center gap-2 text-[12px] font-semibold text-slate-700">
            <div className="flex h-6 w-6 items-center justify-center rounded-lg bg-[#5b13ec]/10 text-[#5b13ec]">
              <SparkIcon />
            </div>
            Improvement Suggestions
          </div>
          <ul className="mt-3 list-disc space-y-2 pl-5 text-[12px] leading-5 text-slate-500">
            {analysis.suggestions.map((s, idx) => (
              <li key={idx}>{s}</li>
            ))}
          </ul>
        </section>

        <div className="mt-6 space-y-3">
          <Button
            className="w-full"
            size="lg"
            onClick={() => {
              // Requirement: stopwatch continues until Save is clicked.
              session.stop()
              navigate('/progress')
            }}
          >
            View Detailed Analysis →
          </Button>

          <Link to="/recording" className="block">
            <Button
              className="w-full"
              size="lg"
              variant="secondary"
              onClick={() => {
                session.reset()
              }}
            >
              Record Again
            </Button>
          </Link>
        </div>
      </main>
    </div>
  )
}

function MetricCard({ metric }: { metric: SpeechMetric }) {
  return (
    <div className="rounded-xl bg-white/70 p-4 shadow-[0px_1px_2px_0px_rgba(0,0,0,0.06)] backdrop-blur">
      <div className="flex items-center justify-center">
        <Ring value={metric.valueLabel} color={metric.ringColor} />
      </div>
      <div className="mt-3 text-center text-[12px] font-semibold text-slate-700">{metric.label}</div>
      <div className="mt-1 text-center text-[10px] text-slate-500">{metric.subtitle}</div>
    </div>
  )
}

function Ring({ value, color }: { value: string; color: string }) {
  return (
    <div className="relative h-[54px] w-[54px]">
      <svg viewBox="0 0 100 100" className="h-full w-full">
        <circle cx="50" cy="50" r="42" stroke="#e5e7eb" strokeWidth="10" fill="none" />
        <circle
          cx="50"
          cy="50"
          r="42"
          stroke={color}
          strokeWidth="10"
          strokeLinecap="round"
          fill="none"
          strokeDasharray={`${2 * Math.PI * 42}`}
          strokeDashoffset={`${(2 * Math.PI * 42) * 0.25}`}
          transform="rotate(-90 50 50)"
        />
      </svg>
      <div className="absolute inset-0 flex items-center justify-center text-[12px] font-bold text-slate-900">
        {value}
      </div>
    </div>
  )
}

function SparkIcon() {
  return (
    <svg viewBox="0 0 24 24" className="h-4 w-4" aria-hidden="true">
      <path
        d="M12 2l1.8 6.2L20 10l-6.2 1.8L12 18l-1.8-6.2L4 10l6.2-1.8L12 2Z"
        fill="currentColor"
        opacity="0.9"
      />
    </svg>
  )
}

