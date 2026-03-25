type ToggleProps = {
  checked: boolean
  onChange: (checked: boolean) => void
  ariaLabel: string
}

export function Toggle({ checked, onChange, ariaLabel }: ToggleProps) {
  return (
    <button
      type="button"
      role="switch"
      aria-checked={checked}
      aria-label={ariaLabel}
      onClick={() => onChange(!checked)}
      className={[
        'relative h-6 w-[44px] rounded-full border border-gray-300 transition-colors',
        checked ? 'bg-[#5b13ec]' : 'bg-gray-200',
        'focus:outline-none focus-visible:ring-2 focus-visible:ring-[#5b13ec]/40',
      ].join(' ')}
    >
      <span
        className={[
          'absolute top-[2px] h-5 w-5 rounded-full bg-white shadow-sm transition-transform',
          checked ? 'translate-x-[22px]' : 'translate-x-[2px]',
        ].join(' ')}
      />
    </button>
  )
}

