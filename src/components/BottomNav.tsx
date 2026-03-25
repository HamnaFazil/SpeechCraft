import { NavLink } from 'react-router-dom'
import type { ReactNode } from 'react'

type Tab = {
  to: string
  label: string
  icon: ReactNode
}

function tabClass(isActive: boolean) {
  return [
    'flex flex-col items-center gap-1',
    'text-[10px] font-medium uppercase tracking-[-0.25px]',
    'transition-colors',
    isActive ? 'text-[#5b13ec]' : 'text-gray-400',
  ].join(' ')
}

export function BottomNav() {
  const tabs: Tab[] = [
    {
      to: '/home',
      label: 'Home',
      icon: (
        <svg viewBox="0 0 24 24" className="h-6 w-6" aria-hidden="true">
          <path
            d="M3 10.5 12 3l9 7.5V21a1 1 0 0 1-1 1h-5v-7H9v7H4a1 1 0 0 1-1-1v-10.5Z"
            fill="currentColor"
            opacity="0.9"
          />
        </svg>
      ),
    },
    {
      to: '/practice',
      label: 'Create',
      icon: (
        <svg viewBox="0 0 24 24" className="h-6 w-6" aria-hidden="true">
          <path
            d="M12 5v14M5 12h14"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
          />
        </svg>
      ),
    },
    {
      to: '/settings',
      label: 'Settings',
      icon: (
        <svg viewBox="0 0 24 24" className="h-6 w-6" aria-hidden="true">
          <path
            d="M12 15.5a3.5 3.5 0 1 0 0-7 3.5 3.5 0 0 0 0 7Zm8.94-2.72-.98.57c.06.42.06.84 0 1.26l.98.57a1 1 0 0 1 .36 1.36l-1.6 2.77a1 1 0 0 1-1.28.43l-1.1-.45a8.5 8.5 0 0 1-1.1.63l-.17 1.18a1 1 0 0 1-.99.86H9.94a1 1 0 0 1-.99-.86l-.17-1.18c-.38-.19-.75-.4-1.1-.63l-1.1.45a1 1 0 0 1-1.28-.43l-1.6-2.77a1 1 0 0 1 .36-1.36l.98-.57a7.7 7.7 0 0 1 0-1.26l-.98-.57a1 1 0 0 1-.36-1.36l1.6-2.77a1 1 0 0 1 1.28-.43l1.1.45c.35-.23.72-.44 1.1-.63l.17-1.18a1 1 0 0 1 .99-.86h4.12a1 1 0 0 1 .99.86l.17 1.18c.38.19.75.4 1.1.63l1.1-.45a1 1 0 0 1 1.28.43l1.6 2.77a1 1 0 0 1-.36 1.36Z"
            fill="currentColor"
            opacity="0.9"
          />
        </svg>
      ),
    },
  ]

  return (
    <nav className="border-t border-gray-100 bg-white/80 backdrop-blur-md">
      <div className="flex items-center justify-between px-[62px] pb-8 pt-[13px]">
        {tabs.map((t) => (
          <NavLink key={t.to} to={t.to} className={({ isActive }) => tabClass(isActive)}>
            {t.icon}
            <span>{t.label}</span>
          </NavLink>
        ))}
      </div>
    </nav>
  )
}

