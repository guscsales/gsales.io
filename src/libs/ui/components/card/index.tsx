import React from 'react';
import { tv } from 'tailwind-variants';

type Props = {
  border:
    | 'green-to-purple'
    | 'zero-to-white'
    | 'white-to-zero'
    | 'blue-green-to-zero'
    | 'zero-to-blue-green'
    | 'red-to-pink';
  wrapperClassName?: string;
};

export default function Card({
  border,
  wrapperClassName,
  className,
  children,
}: Props & React.HTMLAttributes<HTMLElement>) {
  const cardWrapper = tv({
    base: 'flex',
  });
  const cardBorder = tv({
    base: 'flex w-full rounded p-px',
    variants: {
      border: {
        'green-to-purple': 'bg-green-to-purple',
        'zero-to-white': 'bg-zero-to-black dark:bg-zero-to-white',
        'white-to-zero': 'bg-black-to-zero dark:bg-white-to-zero',
        'blue-green-to-zero': 'bg-blue-green-to-zero',
        'zero-to-blue-green': 'bg-zero-to-blue-green',
        'red-to-pink': 'bg-red-to-pink',
      },
    },
  });
  const cardContent = tv({
    base: 'w-full h-full bg-zinc-50 dark:bg-zinc-900 rounded',
  });

  return (
    <span className={cardWrapper({ className: wrapperClassName })}>
      <span className={cardBorder({ border })}>
        <span className={cardContent({ className })}>{children}</span>
      </span>
    </span>
  );
}
