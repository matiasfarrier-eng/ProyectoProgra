import { Slot } from '@radix-ui/react-slot'
import { cva, type VariantProps } from 'class-variance-authority'
import { twMerge } from 'tailwind-merge'
import type { ComponentPropsWithoutRef, ElementType } from 'react'

const buttonStyles = cva(
  'inline-flex items-center justify-center rounded-md px-4 py-2 text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-slate-400',
  {
    variants: {
      variant: {
        default: 'bg-slate-900 text-white hover:bg-slate-800',
        secondary: 'bg-slate-700 text-slate-100 hover:bg-slate-600',
        ghost: 'bg-transparent text-slate-200 hover:bg-slate-800',
      },
      size: {
        default: 'h-10',
        sm: 'h-9 rounded-md text-sm',
        lg: 'h-11 px-6',
      },
    },
    defaultVariants: {
      variant: 'default',
      size: 'default',
    },
  },
)

export interface ButtonProps extends ComponentPropsWithoutRef<'button'>, VariantProps<typeof buttonStyles> {
  asChild?: boolean
}

const Button = ({ className, variant, size, asChild = false, ...props }: ButtonProps) => {
  const Comp: ElementType = asChild ? Slot : 'button'

  return <Comp className={twMerge(buttonStyles({ variant, size }), className)} {...props} />
}

export default Button
