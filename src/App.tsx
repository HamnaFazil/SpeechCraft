import { Navigate, Route, Routes } from 'react-router-dom'
import { AppLayout } from './layouts/AppLayout'
import { AuthLayout } from './layouts/AuthLayout'
import { SplashPage } from './pages/SplashPage'
import { LoginPage } from './pages/LoginPage'
import { SignUpPage } from './pages/SignUpPage'
import { ForgotPasswordPage } from './pages/ForgotPasswordPage'
import { HomePage } from './pages/HomePage'
import { PracticePage } from './pages/PracticePage'
import { ChallengesPage } from './pages/ChallengesPage'
import { ModeSelectionPage } from './pages/ModeSelectionPage'
import { RecordingPage } from './pages/RecordingPage'
import { SpeechAnalysisPage } from './pages/SpeechAnalysisPage'
import { ProgressPage } from './pages/ProgressPage'
import { SpeechHistoryPage } from './pages/SpeechHistoryPage'
import { ResourcePage } from './pages/ResourcePage'
import { ProfilePage } from './pages/ProfilePage'
import { SettingsPage } from './pages/SettingsPage'

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<SplashPage />} />

      <Route element={<AuthLayout />}>
        <Route path="/login" element={<LoginPage />} />
        <Route path="/signup" element={<SignUpPage />} />
        <Route path="/forgot-password" element={<ForgotPasswordPage />} />
      </Route>

      <Route element={<AppLayout />}>
        <Route path="/home" element={<HomePage />} />
        <Route path="/practice" element={<PracticePage />} />
        <Route path="/challenges" element={<ChallengesPage />} />
        <Route path="/mode-selection" element={<ModeSelectionPage />} />
        <Route path="/recording" element={<RecordingPage />} />
        <Route path="/speech-analysis" element={<SpeechAnalysisPage />} />
        <Route path="/progress" element={<ProgressPage />} />
        <Route path="/speech-history" element={<SpeechHistoryPage />} />
        <Route path="/resources" element={<ResourcePage />} />
        <Route path="/profile" element={<ProfilePage />} />
        <Route path="/settings" element={<SettingsPage />} />
      </Route>

      <Route path="*" element={<Navigate to="/" replace />} />
    </Routes>
  )
}
