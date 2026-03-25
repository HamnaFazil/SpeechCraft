import * as React from 'react'

export type TextFieldProps = React.InputHTMLAttributes<HTMLInputElement> & {
  label: string
}

export function TextField({ label, className, id, ...props }: TextFieldProps) {
  const inputId = id ?? React.useId()
  return (
    <div className="flex w-full flex-col gap-1">
      <label htmlFor={inputId} className="text-[14px] font-medium text-gray-700">
        {label}
      </label>
      <input
        id={inputId}
        className={[
          'w-full rounded-xl border border-gray-200 bg-gray-50 px-[17px] py-[15px] text-[16px] text-gray-900 placeholder:text-gray-500',
          'outline-none transition',
          'focus:border-[#5b13ec]/40 focus:ring-2 focus:ring-[#5b13ec]/15',
          className ?? '',
        ].join(' ')}
        {...props}
      />
    </div>
  )
}

