import { cn } from '@/lib/utils'
import { FC } from 'react'

interface SignUpProps extends React.HTMLAttributes<HTMLButtonElement> {

}

const SignUp: FC<SignUpProps> = ({ className, ...props }) => {
  return (
    <button
      className={
        cn("w-fit px-8 py-3 bg-primary-100 text-white glassmorphism-0 rounded-full",
          className
        )}
      {...props}
    >
      Sign up free
    </button>
  )
}

export default SignUp