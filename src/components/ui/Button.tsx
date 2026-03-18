import * as React from 'react';
import { motion, HTMLMotionProps } from 'motion/react';
import { cn } from '@/src/lib/utils';

interface ButtonProps extends HTMLMotionProps<'button'> {
  variant?: 'primary' | 'secondary' | 'outline' | 'ghost';
  size?: 'sm' | 'md' | 'lg';
}

export const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant = 'primary', size = 'md', ...props }, ref) => {
    const variants = {
      primary: 'bg-ink text-white hover:bg-brand transition-all duration-300',
      secondary: 'bg-white border border-line text-ink hover:bg-paper-bright',
      outline: 'border border-ink text-ink hover:bg-ink hover:text-white',
      ghost: 'text-ink-muted hover:text-ink',
    };

    const sizes = {
      sm: 'px-4 py-1.5 text-[11px] font-mono uppercase tracking-wider',
      md: 'px-6 py-3 text-sm font-medium',
      lg: 'px-10 py-5 text-base font-medium',
    };

    return (
      <motion.button
        ref={ref}
        whileTap={{ scale: 0.98 }}
        className={cn(
          'inline-flex items-center justify-center transition-all focus-visible:outline-hidden disabled:opacity-50 disabled:pointer-events-none rounded-none cursor-pointer',
          variants[variant],
          sizes[size],
          className
        )}
        {...props}
      />
    );
  }
);
