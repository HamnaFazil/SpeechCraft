import { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import { MobileFrame } from '../layouts/MobileFrame'

const logoUrl = 'https://www.figma.com/api/mcp/asset/e577eb3b-a288-4dc5-82b1-c24eb02c3b94'

export function SplashPage() {
  const navigate = useNavigate()

  useEffect(() => {
    const t = window.setTimeout(() => navigate('/login', { replace: true }), 1200)
    return () => window.clearTimeout(t)
  }, [navigate])

  return (
    <MobileFrame>
      <div className="relative flex min-h-svh flex-col items-center justify-center px-8">
        <div className="pb-8">
          <div className="overflow-hidden rounded-[24px] shadow-[0px_25px_25px_0px_rgba(0,0,0,0.15)]">
            <img src={logoUrl} alt="" className="h-[100px] w-[100px]" />
          </div>
        </div>

        <div className="flex w-full max-w-[320px] flex-col items-center gap-4">
          <div className="text-center text-[48px] font-bold leading-[48px] tracking-[-1.2px] text-white drop-shadow-[0px_4px_3px_rgba(0,0,0,0.07)]">
            SpeechCraft
          </div>
          <div
            className="text-center text-[18px] italic leading-[29.25px] tracking-[0.45px] text-[#912394]"
            style={{ fontFamily: '"Inria Serif", serif' }}
          >
            <div>Practice. Improve.</div>
            <div>Speak with Confidence.</div>
          </div>
        </div>

        <div className="absolute bottom-16 left-0 right-0 flex items-center justify-center">
          <div className="h-1 w-12 overflow-hidden rounded-full bg-white/20">
            <div className="h-full w-1/2 rounded-full bg-white" />
          </div>
        </div>
      </div>
    </MobileFrame>
  )
}

