import * as React from 'react';
import { cn } from '@/src/lib/utils';

interface CardProps extends React.HTMLAttributes<HTMLDivElement> {
  hover?: boolean;
}

export const Card = React.forwardRef<HTMLDivElement, CardProps>(
  ({ className, hover = false, ...props }, ref) => {
    return (
      <div
        ref={ref}
        className={cn(
          'bg-white border border-border rounded-apple-lg premium-shadow overflow-hidden transition-all duration-300',
          hover && 'hover:premium-shadow hover:-translate-y-1 cursor-pointer',
          className
        )}
        {...props}
      />
    );
  }
);
