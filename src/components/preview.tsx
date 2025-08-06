'use client';
import { cn } from '@/lib/utils';
import React from 'react';

export const Preview = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => (
  <div
    className={cn(
      `p-4 w-full max-w-md sm:max-w-3xl mx-auto rounded-lg border border-border bg-muted text-card-foreground`,
      className
    )}
    ref={ref}
    {...props}
  />
));

Preview.displayName = 'Preview';

export default Preview;
