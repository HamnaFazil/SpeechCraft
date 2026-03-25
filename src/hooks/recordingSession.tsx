import * as React from 'react'

type RecordingStatus = 'idle' | 'recording' | 'paused' | 'stopped'

type RecordingSessionState = {
  status: RecordingStatus
  seconds: number
  startedAtMs: number | null
}

type RecordingSessionApi = RecordingSessionState & {
  start: () => void
  pause: () => void
  resume: () => void
  stop: () => void
  reset: () => void
  ensureIdle: () => void
}

const RecordingSessionContext = React.createContext<RecordingSessionApi | null>(null)

const initialState: RecordingSessionState = {
  status: 'idle',
  seconds: 0,
  startedAtMs: null,
}

export function RecordingSessionProvider({ children }: { children: React.ReactNode }) {
  const [state, setState] = React.useState<RecordingSessionState>(initialState)

  React.useEffect(() => {
    if (state.status !== 'recording') return
    const t = window.setInterval(() => {
      setState((s) => (s.status === 'recording' ? { ...s, seconds: s.seconds + 1 } : s))
    }, 1000)
    return () => window.clearInterval(t)
  }, [state.status])

  const api = React.useMemo<RecordingSessionApi>(() => {
    const start = () =>
      setState((s) =>
        s.status === 'recording'
          ? s
          : { status: 'recording', seconds: s.seconds, startedAtMs: s.startedAtMs ?? Date.now() },
      )

    const pause = () =>
      setState((s) => (s.status === 'recording' ? { ...s, status: 'paused' } : s))

    const resume = () =>
      setState((s) => (s.status === 'paused' ? { ...s, status: 'recording' } : s))

    const stop = () =>
      setState((s) => (s.status === 'stopped' ? s : { ...s, status: 'stopped' }))

    const reset = () => setState(initialState)
    const ensureIdle = () => setState((s) => (s.status === 'idle' && s.seconds === 0 ? s : initialState))

    return {
      ...state,
      start,
      pause,
      resume,
      stop,
      reset,
      ensureIdle,
    }
  }, [state])

  return <RecordingSessionContext.Provider value={api}>{children}</RecordingSessionContext.Provider>
}

export function useRecordingSession() {
  const ctx = React.useContext(RecordingSessionContext)
  if (!ctx) throw new Error('useRecordingSession must be used within RecordingSessionProvider')
  return ctx
}

export function formatStopwatch(totalSeconds: number) {
  const m = Math.floor(totalSeconds / 60)
  const s = totalSeconds % 60
  return `${String(m).padStart(2, '0')}:${String(s).padStart(2, '0')}`
}

