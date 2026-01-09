/* eslint-disable @typescript-eslint/no-explicit-any */

'use client';

import * as React from 'react';
import { cn } from '@/lib/utils';

type HoleBackgroundProps = React.ComponentProps<'div'> & {
  strokeColor?: string;
  numberOfLines?: number;
  numberOfDiscs?: number;
  particleRGBColor?: [number, number, number];
  opacity?: number;
};

function HoleBackground({
  className,
  children,
  ...props
}: HoleBackgroundProps) {
  return (
    <div
      data-slot="hole-background"
      className={cn(
        'relative size-full overflow-hidden bg-background',
        className,
      )}
      {...props}
    >
      {/* Static background - animations disabled for mobile compatibility */}
      {children}
    </div>
  );
}

export { HoleBackground, type HoleBackgroundProps };
