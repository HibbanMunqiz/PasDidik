'use client';

import { cn } from '@/lib/utils';
import React from 'react';

export const Preview = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => (
  <div
    className={cn(
      `
        w-full
        max-w-md
        sm:max-w-3xl
        lg:max-w-5xl
        xl:max-w-screen-xl
        min-h-[330px]
        md:min-h-[400px]
        lg:min-h-[500px]
        xl:min-h-[600px]
        p-5
        mx-auto
        rounded-lg
        border
        border-border
        bg-muted
        text-card-foreground
      `,
      className
    )}
    ref={ref}
    {...props}
  />
));

Preview.displayName = 'Preview';

export default Preview;
