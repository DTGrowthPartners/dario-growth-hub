'use client';

import * as React from 'react';

type ButtonProps = React.ButtonHTMLAttributes<HTMLButtonElement> & {
  hoverScale?: number;
  tapScale?: number;
  asChild?: boolean;
};

function Button({
  ...props
}: ButtonProps) {
  return (
    <button
      {...props}
    />
  );
}

export { Button, type ButtonProps };
