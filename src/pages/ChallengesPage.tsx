import React from "react"
import { useLocation, useNavigate } from "react-router-dom"
import { motion } from "framer-motion"

// ------------------ TYPES ------------------
type NavItemProps = {
  icon: React.ReactNode
  label: string
  to: string
  active: boolean
}

type FeedbackCardProps = {
  tone: string
  badge: string
  title: string
}

// ------------------ ICONS ------------------
function BoltIcon() {
  return (
    <svg viewBox="0 0 24 24" className="h-5 w-5">
      <path d="M13 2 3 14h8l-1 8 11-14h-8l0-6Z" fill="currentColor" />
    </svg>
  )
}

function MicIcon() {
  return (
    <svg viewBox="0 0 24 24" className="h-5 w-5">
      <path d="M12 14a3 3 0 0 0 3-3V6a3 3 0 0 0-6 0v5a3 3 0 0 0 3 3Zm5-3a5 5 0 0 1-10 0H5a7 7 0 0 0 6 6.92V21h2v-3.08A7 7 0 0 0 19 11h-2Z" fill="currentColor" />
    </svg>
  )
}

function HomeIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className="h-5 w-5">
      <path d="M12 3 3 10h2v10h6v-6h2v6h6V10h2Z" />
    </svg>
  )
}

function ChartIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className="h-5 w-5">
      <path d="M5 9h3v10H5V9Zm5-4h3v14h-3V5Zm5 7h3v7h-3v-7Z" />
    </svg>
  )
}

function UserIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className="h-5 w-5">
      <path d="M12 12a5 5 0 1 0 0-10 5 5 0 0 0 0 10Zm0 2c-4.42 0-8 2.24-8 5v1h16v-1c0-2.76-3.58-5-8-5Z" />
    </svg>
  )
}

// ------------------ COMPONENTS ------------------
function NavItem({ icon, label, to, active }: NavItemProps) {
  const navigate = useNavigate()
  return (
    <motion.button
      onClick={() => navigate(to)}
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.95 }}
      className={`flex flex-col items-center text-[10px] font-medium ${active ? "text-purple-600" : "text-slate-400"}`}
    >
      <div className="h-5 w-5">{icon}</div>
      <span className="mt-1">{label}</span>
    </motion.button>
  )
}

function FeedbackCard({ tone, badge, title }: FeedbackCardProps) {
  return (
    <motion.div
      className="rounded-2xl bg-white/70 p-4 backdrop-blur-md shadow-sm transition hover:shadow-md hover:scale-[1.01]"
      initial={{ opacity: 0, y: 40 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <div className={`inline-flex items-center rounded-full px-2 py-1 text-[9px] font-semibold ${tone}`}>
        <span className="mr-1 h-2 w-2 rounded-full bg-current opacity-70" />
        {badge}
      </div>
      <div className="mt-3 text-[14px] font-semibold text-slate-900">{title}</div>
    </motion.div>
  )
}

// ------------------ MAIN PAGE ------------------
export function ChallengesPage() {
  const location = useLocation()
  const navigate = useNavigate()

  const weeklyData = [22, 35, 18, 42, 28, 50, 33]
  const weekLabels = ["M", "T", "W", "T", "F", "S", "S"]

  return (
    <div className="min-h-svh pb-28 bg-gradient-to-b from-slate-100 via-slate-200 to-slate-300">
      {/* Header */}
      <header className="px-4 pb-4 pt-6">
        <div className="flex items-start justify-between">
          <div>
            <div className="text-[20px] font-semibold text-slate-900">Hello, User!</div>
            <div className="mt-1 text-[12px] text-slate-500">Ready to improve your speech today?</div>
          </div>
          <div className="flex h-9 w-9 items-center justify-center rounded-full bg-purple-500 text-[12px] font-bold text-white">U</div>
        </div>

        {/* Current Streak */}
        <motion.div
          className="mt-4 rounded-2xl bg-white/60 p-4 backdrop-blur-md shadow-sm"
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <div className="flex items-center gap-3">
            <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-purple-100 text-purple-600">
              <BoltIcon />
            </div>
            <div>
              <div className="text-[10px] font-semibold uppercase text-slate-500">Current Streak</div>
              <div className="text-[14px] font-semibold text-slate-900">5 Days Practice</div>
            </div>
          </div>
        </motion.div>

        {/* Start Practice Button */}
        <motion.button
          onClick={() => navigate("/mode-selection")}
          whileHover={{ scale: 1.02 }}
          whileTap={{ scale: 0.95 }}
          className="mt-4 flex w-full items-center justify-center gap-2 rounded-2xl bg-gradient-to-r from-[#6a1bff] to-[#4a0fc2] py-4 text-[14px] font-semibold text-white shadow-lg"
        >
          <MicIcon />
          Start Practice
        </motion.button>
      </header>

      {/* Main Content */}
      <motion.main
        className="px-4"
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        {/* Daily Challenge */}
        <section className="mt-2">
          <div className="text-[12px] font-semibold text-slate-700">Daily Challenge</div>
          <motion.div
            className="mt-3 rounded-2xl bg-purple-100/40 p-4 backdrop-blur-md shadow-sm"
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <div className="inline-flex rounded-full bg-orange-200 px-3 py-1 text-[10px] font-semibold text-orange-700">Intermediate</div>
            <div className="mt-3 text-[14px] font-semibold text-slate-900">The "S" Sound Mastery</div>
            <div className="mt-1 text-[12px] text-slate-500">Practice the "s" sound and eliminate the sibilance in your speech.</div>
            <div className="mt-4 flex items-center justify-between">
              <div className="flex gap-2">
                <div className="h-5 w-10 rounded-full bg-slate-300" />
                <div className="h-5 w-10 rounded-full bg-slate-300" />
              </div>
              <button className="text-[12px] font-semibold text-purple-600">Join Challenge →</button>
            </div>
          </motion.div>
        </section>

        {/* Feedback */}
        <section className="mt-6">
          <div className="flex items-center justify-between">
            <div className="text-[12px] font-semibold text-slate-700">Recent Feedback</div>
            <button className="text-[10px] font-semibold uppercase text-purple-600">View All</button>
          </div>

          <motion.div
            className="mt-3 grid grid-cols-2 gap-3"
            initial="hidden"
            animate="visible"
            variants={{ hidden: {}, visible: { transition: { staggerChildren: 0.15 } } }}
          >
            <FeedbackCard badge="PACE" title="Perfect Speed" tone="bg-emerald-50 text-emerald-700" />
            <FeedbackCard badge="FILLERS" title='3 "Umms" found' tone="bg-amber-50 text-amber-700" />
          </motion.div>
        </section>

        {/* Progress */}
        <section className="mt-6 pb-2">
          <div className="flex items-center justify-between">
            <div className="text-[12px] font-semibold text-slate-700">Quick Progress</div>
            <div className="text-[10px] font-semibold text-emerald-600">+8%</div>
          </div>

          {/* Weekly Score Animated Bars */}
          <motion.div
            className="mt-3 rounded-2xl bg-white/60 p-4 backdrop-blur-md shadow-sm"
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <div className="text-[10px] font-semibold text-slate-500">Weekly Score</div>
            <motion.div
              className="mt-4 grid grid-cols-7 items-end gap-2"
              initial="hidden"
              animate="visible"
              variants={{ hidden: {}, visible: { transition: { staggerChildren: 0.15 } } }}
            >
              {weeklyData.map((v, idx) => (
                <motion.div
                  key={idx}
                  className="flex flex-col items-center gap-2"
                  variants={{ hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0 } }}
                >
                  <motion.div
                    className="w-full rounded-sm bg-gradient-to-t from-purple-500 to-purple-300"
                    initial={{ height: 0 }}
                    animate={{ height: `${v}px` }}
                    transition={{ duration: 0.6, ease: "easeOut" }}
                  />
                  <div className="text-[9px] text-slate-400">{weekLabels[idx]}</div>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>
        </section>
      </motion.main>

      {/* Bottom Navigation */}
      <motion.footer
        className="fixed bottom-0 left-0 right-0 mx-auto max-w-md px-4 pb-4"
        initial={{ opacity: 0, y: 60 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        <div className="flex items-center justify-between rounded-2xl bg-white/80 backdrop-blur-md shadow-lg px-6 py-3">
          <NavItem icon={<HomeIcon />} label="Stats" to="/speech-analysis" active={location.pathname === "/speech-analysis"} />
          <NavItem icon={<BoltIcon />} label="Practice" to="/mode-selection" active={location.pathname === "/mode-selection"} />
          <NavItem icon={<ChartIcon />} label="Lessons" to="/resources" active={location.pathname === "/resources"} />
          <NavItem icon={<UserIcon />} label="Profile" to="/profile" active={location.pathname === "/profile"} />
        </div>
      </motion.footer>
    </div>
  )
}