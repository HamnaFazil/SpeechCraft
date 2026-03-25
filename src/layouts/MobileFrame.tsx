import type { ReactNode } from 'react'

type MobileFrameProps = {
  children: ReactNode
  className?: string
}

export function MobileFrame({ children, className }: MobileFrameProps) {
  return (
    <div className="min-h-svh w-full bg-gradient-to-b from-slate-400 via-gray-400 to-[#dedcf0]">
      <div
        className={[
          'mx-auto min-h-svh w-full max-w-[448px]',
          'bg-transparent',
          className ?? '',
        ].join(' ')}
      >
        {children}
      </div>
    </div>
  )
}

