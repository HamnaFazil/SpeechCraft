import * as React from 'react'

type Variant = 'primary' | 'secondary' | 'danger' | 'ghost'
type Size = 'md' | 'lg'

export type ButtonProps = React.ButtonHTMLAttributes<HTMLButtonElement> & {
  variant?: Variant
  size?: Size
}

export function Button({
  className,
  variant = 'primary',
  size = 'md',
  type = 'button',
  ...props
}: ButtonProps) {
  const base =
    'inline-flex items-center justify-center gap-2 rounded-xl font-semibold transition focus:outline-none focus-visible:ring-2 focus-visible:ring-[#5b13ec]/40 disabled:cursor-not-allowed disabled:opacity-60'

  const sizes: Record<Size, string> = {
    md: 'px-4 py-3 text-[14px]',
    lg: 'px-4 py-4 text-[16px]',
  }

  const variants: Record<Variant, string> = {
    primary:
      'bg-[#5b13ec] text-white shadow-[0px_10px_15px_-3px_rgba(91,19,236,0.2),0px_4px_6px_-4px_rgba(91,19,236,0.2)] hover:bg-[#4a0fc2] active:bg-[#3f0da6]',
    secondary:
      'bg-white text-gray-900 shadow-[0px_1px_2px_0px_rgba(0,0,0,0.05)] ring-1 ring-gray-200 hover:bg-gray-50 active:bg-gray-100',
    danger:
      'bg-white text-red-500 ring-1 ring-red-100 hover:bg-red-50 active:bg-red-100',
    ghost: 'bg-transparent text-gray-700 hover:bg-gray-100 active:bg-gray-200',
  }

  return (
    <button
      type={type}
      className={[base, sizes[size], variants[variant], className ?? ''].join(' ')}
      {...props}
    />
  )
}

