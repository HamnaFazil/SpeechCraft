import { useEffect, useMemo, useRef } from 'react'
import { useNavigate } from 'react-router-dom'
import { formatStopwatch, useRecordingSession } from '../hooks/recordingSession'

export function RecordingPage() {
  const navigate = useNavigate()
  const session = useRecordingSession()
  const didInitRef = useRef(false)

  useEffect(() => {
    // Requirement: recording starts ONLY after tapping mic.
    // Entering this screen should reset once to an idle stopwatch (00:00).
    if (didInitRef.current) return
    didInitRef.current = true
    session.ensureIdle()
  }, [session])

  const bars = useMemo(
    () => [
      66, 54, 38, 95, 74, 92, 51, 31, 110, 114, 77, 46, 50, 84, 50, 109, 29,
      76, 96, 95, 19, 40, 81, 93, 37, 23, 81, 19, 17, 97,
    ],
    [],
  )

  return (
    <div className="min-h-svh">
      <header className="px-6 pb-6 pt-12 text-center">
        <div className="text-[14px] font-semibold uppercase tracking-[1.4px] text-slate-400">
          SpeechCraft
        </div>
      </header>

      <main className="flex flex-col items-center">
        <div className="py-8 text-center">
          <div className="text-[60px] font-bold leading-[60px] tracking-[-3px] text-slate-900">
            {formatStopwatch(session.seconds)}
          </div>
          <div className="mt-2 text-[16px] font-medium leading-6 text-[#5b13ec]">
            {session.status === 'recording'
              ? 'Recording Live'
              : session.status === 'paused'
                ? 'Paused'
                : 'Tap mic to start'}
          </div>
        </div>

        <div className="w-full px-8 py-8">
          <div className="mx-auto flex h-32 max-w-[384px] items-center justify-center gap-1">
            {bars.map((h, idx) => (
              <div
                key={idx}
                className="w-[6px] rounded-full bg-[#5b13ec]"
                style={{
                  height: `${h}px`,
                  opacity: 0.2 + (idx / (bars.length - 1)) * 0.8,
                }}
              />
            ))}
          </div>
        </div>
      </main>

      <footer className="px-10 pb-16">
        <div className="mx-auto flex max-w-[384px] items-center justify-between">
          <button
            type="button"
            onClick={() => {
              if (session.status === 'recording') session.pause()
              else if (session.status === 'paused') session.resume()
            }}
            className="flex h-14 w-14 items-center justify-center rounded-xl border-2 border-slate-100 bg-white/60 text-slate-700 transition hover:bg-white active:bg-slate-50 focus:outline-none focus-visible:ring-2 focus-visible:ring-[#5b13ec]/40"
            aria-label={session.status === 'recording' ? 'Pause recording' : 'Resume recording'}
          >
            {session.status === 'recording' ? <PauseIcon /> : <PlayIcon />}
          </button>

          <button
            type="button"
            onClick={() => {
              if (session.status === 'idle') session.start()
            }}
            className="relative flex h-24 w-24 items-center justify-center rounded-full bg-[#5b13ec] text-white shadow-[0px_20px_25px_-5px_rgba(91,19,236,0.3),0px_8px_10px_-6px_rgba(91,19,236,0.3)] transition hover:bg-[#4a0fc2] active:bg-[#3f0da6] focus:outline-none focus-visible:ring-2 focus-visible:ring-[#5b13ec]/40"
            aria-label="Microphone"
          >
            <MicFillIcon />
          </button>

          <button
            type="button"
            onClick={() => {
              // Stop button navigates to analysis, but stopwatch continues until Save on analysis.
              if (session.status === 'recording') session.pause()
              navigate('/speech-analysis')
            }}
            className="flex h-14 w-14 items-center justify-center rounded-xl bg-red-50 text-red-600 transition hover:bg-red-100 active:bg-red-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-red-500/30"
            aria-label="Stop recording"
          >
            <StopIcon />
          </button>
        </div>
      </footer>
    </div>
  )
}

function PauseIcon() {
  return (
    <svg viewBox="0 0 24 24" className="h-6 w-6" aria-hidden="true">
      <path d="M7 6h3v12H7V6Zm7 0h3v12h-3V6Z" fill="currentColor" />
    </svg>
  )
}

function PlayIcon() {
  return (
    <svg viewBox="0 0 24 24" className="h-6 w-6" aria-hidden="true">
      <path d="M8 5v14l12-7L8 5Z" fill="currentColor" />
    </svg>
  )
}

function MicFillIcon() {
  return (
    <svg viewBox="0 0 24 24" className="h-8 w-8" aria-hidden="true">
      <path
        d="M12 14a3 3 0 0 0 3-3V6a3 3 0 0 0-6 0v5a3 3 0 0 0 3 3Zm5-3a5 5 0 0 1-10 0H5a7 7 0 0 0 6 6.92V21h2v-3.08A7 7 0 0 0 19 11h-2Z"
        fill="currentColor"
      />
    </svg>
  )
}

function StopIcon() {
  return (
    <svg viewBox="0 0 24 24" className="h-6 w-6" aria-hidden="true">
      <path d="M7 7h10v10H7V7Z" fill="currentColor" />
    </svg>
  )
}

