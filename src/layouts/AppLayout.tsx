import { Outlet, useLocation } from 'react-router-dom'
import { MobileFrame } from './MobileFrame'
import { BottomNav } from '../components/BottomNav'
import { RecordingSessionProvider } from '../hooks/recordingSession'

const hideNavOn: RegExp[] = [/^\/recording\b/]

export function AppLayout() {
  const { pathname } = useLocation()
  const showBottomNav = !hideNavOn.some((re) => re.test(pathname))

  return (
    <MobileFrame>
      <RecordingSessionProvider>
        <div className="relative min-h-svh pb-[88px]">
          <Outlet />
          {showBottomNav ? (
            <div className="fixed bottom-0 left-0 right-0 z-50">
              <div className="mx-auto w-full max-w-[448px]">
                <BottomNav />
              </div>
            </div>
          ) : null}
        </div>
      </RecordingSessionProvider>
    </MobileFrame>
  )
}

