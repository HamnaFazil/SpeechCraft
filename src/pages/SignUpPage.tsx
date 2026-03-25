import { Link, useNavigate } from 'react-router-dom'
import { Button } from '../components/Button'
import { TextField } from '../components/TextField'

const headerIconUrl = 'https://www.figma.com/api/mcp/asset/83ab363a-9cfe-467d-aaf4-5b334fdb1f84'

export function SignUpPage() {
  const navigate = useNavigate()

  return (
    <div className="w-full max-w-[448px] rounded-xl border border-gray-100 bg-white/80 p-8 shadow-[0px_1px_2px_0px_rgba(0,0,0,0.05)] backdrop-blur">
      <div className="flex flex-col items-center">
        <div className="flex h-16 w-16 items-center justify-center rounded-full bg-[#5b13ec]/10">
        <img src={headerIconUrl} alt="" className="h-8 w-8" />
        </div>
        <h1 className="mt-5 text-center text-[30px] font-bold leading-9 text-gray-900">
          Create account
        </h1>
        <p className="mt-2 text-center text-[16px] leading-6 text-gray-500">
          Start practicing and track your progress.
        </p>
      </div>

      <div className="mt-8 rounded-xl bg-gray-100 p-1">
        <div className="grid grid-cols-2">
          <Link
            to="/login"
            className="rounded-xl py-2 text-center text-[14px] font-semibold text-gray-500 transition hover:text-gray-700"
          >
            Login
          </Link>
          <div className="rounded-xl bg-white py-2 text-center text-[14px] font-semibold text-gray-900 shadow-sm">
            Sign Up
          </div>
        </div>
      </div>

      <form
        className="mt-6 space-y-5"
        onSubmit={(e) => {
          e.preventDefault()
          navigate('/home')
        }}
      >
        <TextField label="Full Name" placeholder="Alex Thompson" autoComplete="name" />
        <TextField label="Email Address" placeholder="name@example.com" type="email" autoComplete="email" />
        <TextField label="Password" placeholder="Create a password" type="password" autoComplete="new-password" />

        <Button size="lg" className="w-full">
          Create Account
        </Button>
      </form>

      <p className="mt-6 text-center text-[14px] text-gray-500">
        Already have an account?{' '}
        <Link className="font-medium text-[#5b13ec] hover:text-[#4a0fc2]" to="/login">
          Sign in
        </Link>
      </p>
    </div>
  )
}

