import { useMemo, useState } from 'react'
import { HeaderBar } from '../components/HeaderBar'
import { SettingRow } from '../components/SettingRow'

export function SettingsPage() {
  const [notifications, setNotifications] = useState(true)
  const [darkMode, setDarkMode] = useState(false)

  const sections = useMemo(
    () => [
      {
        heading: 'General Preferences',
        rows: [
          {
            kind: 'toggle' as const,
            label: 'Notifications',
            value: notifications,
            onChange: setNotifications,
            leading: {
              bgClassName: 'bg-blue-50 text-blue-600',
              icon: <BellIcon />,
            },
          },
          {
            kind: 'toggle' as const,
            label: 'Dark Mode',
            value: darkMode,
            onChange: setDarkMode,
            leading: {
              bgClassName: 'bg-gray-100 text-gray-700',
              icon: <MoonIcon />,
            },
          },
          {
            kind: 'link' as const,
            label: 'Voice Preferences',
            to: '/mode-selection',
            leading: {
              bgClassName: 'bg-purple-50 text-purple-600',
              icon: <MicIcon />,
            },
          },
        ],
      },
      {
        heading: 'Account Management',
        rows: [
          {
            kind: 'profile' as const,
            initials: 'JD',
            name: 'John Doe',
            email: 'john.doe@example.com',
            to: '/profile',
          },
          {
            kind: 'link' as const,
            label: 'Privacy & Security',
            to: '/resources',
            leading: {
              bgClassName: 'bg-green-50 text-green-600',
              icon: <ShieldIcon />,
            },
          },
          {
            kind: 'link' as const,
            label: 'Sign Out',
            to: '/login',
            danger: true,
            leading: {
              bgClassName: 'bg-red-50 text-red-600',
              icon: <SignOutIcon />,
            },
          },
        ],
      },
    ],
    [darkMode, notifications],
  )

  return (
    <div className="min-h-svh">
      <HeaderBar title="Settings" rightLabel="SpeechCraft" rightTo="/home" backTo="/home" />

      <main className="px-4 pb-28 pt-6">
        <div className="space-y-8">
          {sections.map((s) => (
            <section key={s.heading} className="space-y-3">
              <div className="px-2 text-[12px] font-semibold uppercase tracking-[0.6px] text-gray-500">
                {s.heading}
              </div>

              <div className="overflow-hidden rounded-xl border border-gray-100 bg-white shadow-[0px_1px_2px_0px_rgba(0,0,0,0.05)]">
                {s.rows.map((r, idx) => {
                  const divider = idx !== s.rows.length - 1
                  if (r.kind === 'toggle') {
                    return (
                      <SettingRow
                        key={r.label}
                        type="toggle"
                        label={r.label}
                        value={r.value}
                        onChange={r.onChange}
                        leading={r.leading}
                        divider={divider}
                      />
                    )
                  }
                  if (r.kind === 'profile') {
                    return (
                      <SettingRow
                        key={r.email}
                        type="profile"
                        initials={r.initials}
                        name={r.name}
                        email={r.email}
                        to={r.to}
                        divider={divider}
                      />
                    )
                  }
                  return (
                    <SettingRow
                      key={r.label}
                      type="link"
                      label={r.label}
                      to={r.to}
                      leading={r.leading}
                      divider={divider}
                      danger={'danger' in r ? r.danger : undefined}
                    />
                  )
                })}
              </div>
            </section>
          ))}

          <section className="pt-4 text-center text-gray-400">
            <div className="text-[14px]">SpeechCraft Version 2.4.0</div>
            <div className="text-[12px]">Made with ♥ for creators</div>
          </section>
        </div>
      </main>
    </div>
  )
}

function BellIcon() {
  return (
    <svg viewBox="0 0 24 24" className="h-5 w-5" aria-hidden="true">
      <path
        d="M12 22a2 2 0 0 0 2-2H10a2 2 0 0 0 2 2Zm6-6V11a6 6 0 1 0-12 0v5L4 18v1h16v-1l-2-2Z"
        fill="currentColor"
        opacity="0.9"
      />
    </svg>
  )
}

function MoonIcon() {
  return (
    <svg viewBox="0 0 24 24" className="h-5 w-5" aria-hidden="true">
      <path
        d="M21 14.5A8.5 8.5 0 0 1 9.5 3a7 7 0 1 0 11.5 11.5Z"
        fill="currentColor"
        opacity="0.9"
      />
    </svg>
  )
}

function MicIcon() {
  return (
    <svg viewBox="0 0 24 24" className="h-5 w-5" aria-hidden="true">
      <path
        d="M12 14a3 3 0 0 0 3-3V6a3 3 0 0 0-6 0v5a3 3 0 0 0 3 3Zm5-3a5 5 0 0 1-10 0H5a7 7 0 0 0 6 6.92V21h2v-3.08A7 7 0 0 0 19 11h-2Z"
        fill="currentColor"
        opacity="0.9"
      />
    </svg>
  )
}

function ShieldIcon() {
  return (
    <svg viewBox="0 0 24 24" className="h-5 w-5" aria-hidden="true">
      <path
        d="M12 2 4 5v6c0 5 3.4 9.7 8 11 4.6-1.3 8-6 8-11V5l-8-3Zm-1 14-3-3 1.4-1.4L11 13.2l4.6-4.6L17 10l-6 6Z"
        fill="currentColor"
        opacity="0.9"
      />
    </svg>
  )
}

function SignOutIcon() {
  return (
    <svg viewBox="0 0 24 24" className="h-5 w-5" aria-hidden="true">
      <path
        d="M10 17v2H4a2 2 0 0 1-2-2V7a2 2 0 0 1 2-2h6v2H4v10h6Zm11-5-4-4v3H9v2h8v3l4-4Z"
        fill="currentColor"
        opacity="0.9"
      />
    </svg>
  )
}

