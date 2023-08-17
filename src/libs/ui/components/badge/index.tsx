import React from 'react';
import { tv } from 'tailwind-variants';
import Text from '../text';

type Props = {
  color:
    | 'green-to-purple'
    | 'zero-to-white'
    | 'white-to-zero'
    | 'blue-green-to-zero'
    | 'red-to-pink'
    | 'opaque';
};

export default function Badge({
  color,
  className,
  children,
  ...props
}: Props & React.HTMLAttributes<HTMLElement>) {
  const badgeWrapper = tv({
    base: 'inline-flex items-center justify-center rounded py-[0.188rem] px-1.5 cursor-default',
    variants: {
      color: {
        'green-to-purple': 'bg-green-to-purple',
        'zero-to-white': 'bg-zero-to-white',
        'white-to-zero': 'bg-white-to-zero',
        'blue-green-to-zero': 'bg-blue-green-to-zero',
        'red-to-pink': 'bg-red-to-pink',
        opaque: 'bg-zinc-900/[.12] dark:bg-zinc-50/[.12]',
      },
    },
  });
  const badgeText = tv({
    base: 'text-xs font-bold h-3.5',
    variants: {
      color: {
        'green-to-purple': 'text-zinc-50',
        'zero-to-white': 'text-zinc-50',
        'white-to-zero': 'text-zinc-50',
        'blue-green-to-zero': 'text-zinc-50',
        'red-to-pink': 'text-zinc-50',
        opaque: 'text-zinc-900 dark:text-zinc-50',
      },
    },
  });

  return (
    <div className={badgeWrapper({ className, color })} {...props}>
      <Text className={badgeText({ color })}>{children}</Text>
    </div>
  );
}
