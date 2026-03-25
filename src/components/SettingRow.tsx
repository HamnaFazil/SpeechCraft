import { Link } from 'react-router-dom'
import type { ReactNode } from 'react'

type Leading = {
  bgClassName: string
  icon: ReactNode
}

type SettingRowProps =
  | {
      type: 'toggle'
      leading: Leading
      label: string
      value: boolean
      onChange: (next: boolean) => void
      divider?: boolean
    }
  | {
      type: 'link'
      leading: Leading
      label: string
      to: string
      divider?: boolean
      danger?: boolean
    }
  | {
      type: 'profile'
      initials: string
      name: string
      email: string
      to: string
      divider?: boolean
    }

export function SettingRow(props: SettingRowProps) {
  const containerBase = [
    'flex items-center justify-between',
    'px-4 py-4',
    'transition-colors',
    props.divider ? 'border-b border-gray-50' : '',
  ].join(' ')

  if (props.type === 'profile') {
    return (
      <Link to={props.to} className={[containerBase, 'hover:bg-gray-50'].join(' ')}>
        <div className="flex items-center gap-3">
          <div className="flex h-10 w-10 items-center justify-center rounded-full bg-[#5b13ec]/10">
            <span className="text-[16px] font-bold text-[#5b13ec]">{props.initials}</span>
          </div>
          <div className="leading-tight">
            <div className="text-[16px] font-medium text-gray-900">{props.name}</div>
            <div className="text-[12px] text-gray-500">{props.email}</div>
          </div>
        </div>
        <Chevron />
      </Link>
    )
  }

  if (props.type === 'toggle') {
    return (
      <div className={containerBase}>
        <div className="flex items-center gap-3">
          <div className={['flex h-9 w-9 items-center justify-center rounded-lg', props.leading.bgClassName].join(' ')}>
            {props.leading.icon}
          </div>
          <div className="text-[16px] font-medium text-gray-900">{props.label}</div>
        </div>

        <button
          type="button"
          role="switch"
          aria-checked={props.value}
          className={[
            'relative h-6 w-[44px] rounded-full transition-colors',
            props.value ? 'bg-[#5b13ec]' : 'bg-gray-200',
            'focus:outline-none focus-visible:ring-2 focus-visible:ring-[#5b13ec]/40',
          ].join(' ')}
          onClick={() => props.onChange(!props.value)}
        >
          <span
            className={[
              'absolute top-[2px] h-5 w-5 rounded-full bg-white shadow-sm transition-transform',
              props.value ? 'translate-x-[22px]' : 'translate-x-[2px]',
            ].join(' ')}
          />
        </button>
      </div>
    )
  }

  return (
    <Link to={props.to} className={[containerBase, 'hover:bg-gray-50'].join(' ')}>
      <div className="flex items-center gap-3">
        <div className={['flex h-9 w-9 items-center justify-center rounded-lg', props.leading.bgClassName].join(' ')}>
          {props.leading.icon}
        </div>
        <div className={['text-[16px] font-medium', props.danger ? 'text-red-600' : 'text-gray-900'].join(' ')}>
          {props.label}
        </div>
      </div>
      {props.danger ? null : <Chevron />}
    </Link>
  )
}

function Chevron() {
  return (
    <svg viewBox="0 0 24 24" className="h-5 w-5 text-gray-400" aria-hidden="true">
      <path
        d="M9 18l6-6-6-6"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  )
}

