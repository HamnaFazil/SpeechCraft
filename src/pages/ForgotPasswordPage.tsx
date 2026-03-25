import { Link } from 'react-router-dom'
import { Button } from '../components/Button'
import { TextField } from '../components/TextField'

export function ForgotPasswordPage() {
  return (
    <div className="w-full max-w-[448px] rounded-xl border border-gray-100 bg-white/80 p-8 shadow-[0px_1px_2px_0px_rgba(0,0,0,0.05)] backdrop-blur">
      <h1 className="text-center text-[30px] font-bold leading-9 text-gray-900">Reset password</h1>
      <p className="mt-2 text-center text-[16px] leading-6 text-gray-500">
        We&apos;ll email you a link to reset your password.
      </p>

      <form
        className="mt-8 space-y-5"
        onSubmit={(e) => {
          e.preventDefault()
          // demo
          alert('Password reset link sent (demo).')
        }}
      >
        <TextField label="Email Address" placeholder="name@example.com" type="email" autoComplete="email" />
        <Button size="lg" className="w-full">
          Send reset link
        </Button>
      </form>

      <div className="mt-6 text-center">
        <Link className="text-[14px] font-medium text-[#5b13ec] hover:text-[#4a0fc2]" to="/login">
          Back to login
        </Link>
      </div>
    </div>
  )
}

