import { Link } from 'react-router-dom'

type HeaderBarProps = {
  title: string
  rightLabel?: string
  rightTo?: string
  backTo?: string
}

export function HeaderBar({ title, rightLabel, rightTo, backTo }: HeaderBarProps) {
  return (
    <header className="sticky top-0 z-40 border-b border-gray-100 bg-white/80 px-6 pb-[17px] pt-4 backdrop-blur-md">
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-3">
          {backTo ? (
            <Link
              to={backTo}
              className="rounded-lg p-2 text-gray-600 transition hover:bg-gray-100 hover:text-gray-900 focus:outline-none focus-visible:ring-2 focus-visible:ring-[#5b13ec]/40"
              aria-label="Go back"
            >
              <svg viewBox="0 0 24 24" className="h-6 w-6" aria-hidden="true">
                <path
                  d="M15 18 9 12l6-6"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </Link>
          ) : null}
          <h1 className="text-[20px] font-bold tracking-[-0.5px] text-gray-900">{title}</h1>
        </div>

        {rightLabel && rightTo ? (
          <Link
            to={rightTo}
            className="text-[14px] font-medium text-[#5b13ec] transition hover:text-[#4a0fc2] focus:outline-none focus-visible:ring-2 focus-visible:ring-[#5b13ec]/40"
          >
            {rightLabel}
          </Link>
        ) : null}
      </div>
    </header>
  )
}

