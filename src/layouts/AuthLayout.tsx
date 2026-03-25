import { Outlet } from 'react-router-dom'
import { MobileFrame } from './MobileFrame'

export function AuthLayout() {
  return (
    <MobileFrame>
      <div className="flex min-h-svh items-center justify-center px-4 py-6">
        <Outlet />
      </div>
    </MobileFrame>
  )
}

