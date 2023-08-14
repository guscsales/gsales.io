import React from 'react';
import { tv } from 'tailwind-variants';
import Text from '../text';

type Props = {
  color:
    | 'green-to-purple'
    | 'zero-to-white'
    | 'white-to-zero'
    | 'blue-green-to-zero'
    | 'red-to-pink';
};

export default function Badge({
  color,
  className,
  children,
  ...props
}: Props & React.HTMLAttributes<HTMLElement>) {
  const cardWrapper = tv({
    base: 'inline-flex items-center justify-center rounded py-[0.188rem] px-1.5 cursor-default',
    variants: {
      color: {
        'green-to-purple': 'bg-green-to-purple',
        'zero-to-white': 'bg-zero-to-white',
        'white-to-zero': 'bg-white-to-zero',
        'blue-green-to-zero': 'bg-blue-green-to-zero',
        'red-to-pink': 'bg-red-to-pink',
      },
    },
  });

  return (
    <div className={cardWrapper({ className, color })} {...props}>
      <Text className="text-zinc-50 text-xs font-bold">{children}</Text>
    </div>
  );
}
