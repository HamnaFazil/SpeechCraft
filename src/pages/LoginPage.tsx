import { Link, useNavigate } from 'react-router-dom'
import { Button } from '../components/Button'
import { TextField } from '../components/TextField'

const googleLogoUrl = 'https://www.figma.com/api/mcp/asset/884fb1c2-a8eb-4176-bb94-23c6cfd9284c'
const appleLogoUrl = 'https://www.figma.com/api/mcp/asset/8b9718ce-f81f-4d2c-a915-b26b01a92b4a'
const headerIconUrl = 'https://www.figma.com/api/mcp/asset/83ab363a-9cfe-467d-aaf4-5b334fdb1f84'

export function LoginPage() {
  const navigate = useNavigate()

  return (
    <div className="w-full max-w-[448px] rounded-xl border border-gray-100 bg-white/80 p-8 shadow-[0px_1px_2px_0px_rgba(0,0,0,0.05)] backdrop-blur">
      <div className="flex flex-col items-center">
        <div className="flex h-16 w-16 items-center justify-center rounded-full bg-[#5b13ec]/10">
          <img src={headerIconUrl} alt="" className="h-8 w-8" />
        </div>
        <h1 className="mt-5 text-center text-[30px] font-bold leading-9 text-gray-900">
          Welcome Back!
        </h1>
        <p className="mt-2 text-center text-[16px] leading-6 text-gray-500">
          Please enter your details to sign in.
        </p>
      </div>

      <div className="mt-8 rounded-xl bg-gray-100 p-1">
        <div className="grid grid-cols-2">
          <div className="rounded-xl bg-white py-2 text-center text-[14px] font-semibold text-gray-900 shadow-sm">
            Login
          </div>
          <Link
            to="/signup"
            className="rounded-xl py-2 text-center text-[14px] font-semibold text-gray-500 transition hover:text-gray-700"
          >
            Sign Up
          </Link>
        </div>
      </div>

      <div className="mt-8 space-y-3">
        <button
          type="button"
          className="flex w-full items-center justify-center gap-3 rounded-xl border border-gray-200 bg-white px-4 py-[13px] text-[16px] font-medium text-gray-900 transition hover:bg-gray-50 active:bg-gray-100"
        >
          <img src={googleLogoUrl} alt="" className="h-5 w-5" />
          Continue with Google
        </button>
        <button
          type="button"
          className="flex w-full items-center justify-center gap-3 rounded-xl border border-gray-200 bg-white px-4 py-[13px] text-[16px] font-medium text-gray-900 transition hover:bg-gray-50 active:bg-gray-100"
        >
          <img src={appleLogoUrl} alt="" className="h-5 w-5" />
          Continue with Apple
        </button>
      </div>

      <div className="mt-8 flex items-center gap-3">
        <div className="h-px flex-1 bg-gray-200" />
        <div className="bg-white px-2 text-[12px] uppercase text-gray-400">Or with email</div>
        <div className="h-px flex-1 bg-gray-200" />
      </div>

      <form
        className="mt-6 space-y-5"
        onSubmit={(e) => {
          e.preventDefault()
          // After successful auth, go to the main home screen,
          // from which you can reach Challenges and all other flows.
          navigate('/home')
        }}
      >
        <TextField label="Email Address" placeholder="name@example.com" type="email" autoComplete="email" />
        <div className="space-y-2">
          <TextField label="Password" placeholder="••••••••" type="password" autoComplete="current-password" />
          <div className="flex justify-end">
            <Link
              to="/forgot-password"
              className="text-[14px] font-medium text-[#5b13ec] transition hover:text-[#4a0fc2]"
            >
              Forgot password?
            </Link>
          </div>
        </div>

      
      <Link to="/challenges" className="w-full">
        <Button size="lg" className="w-full">
         Sign In
         </Button>
        </Link>
      </form>

      <p className="mt-8 text-center text-[14px] leading-5 text-gray-500">
        By continuing, you agree to SpeechCraft&apos;s{' '}
        <span className="underline">Terms of Service</span> and <span className="underline">Privacy Policy</span>.
      </p>
    </div>
  )
}

