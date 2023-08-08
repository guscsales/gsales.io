import React from 'react';
import { tv } from 'tailwind-variants';
import Text from '@/libs/ui/components/text';

type Props = {
  as?: React.ComponentProps<typeof Text>['as'];
  status?: 'idle' | 'active' | 'disabled';
};

const ButtonTransparent = React.forwardRef(
  (
    {
      as = 'button',
      status = 'idle',
      className,
      children,
      ...props
    }: Props & React.HTMLAttributes<HTMLButtonElement>,
    ref: React.ForwardedRef<HTMLButtonElement>
  ) => {
    const { base } = tv({
      slots: {
        base: 'flex justify-center items-center cursor-pointer p-1 px-2.5 lg:py-2 font-light text-zinc-700 dark:text-zinc-300 hover:text-zinc-900 hover:dark:text-zinc-50 hover:bg-zinc-900/[.06] hover:dark:bg-zinc-50/[.06] transition-base rounded',
      },
      variants: {
        status: {
          idle: '',
          active:
            'text-zinc-900 dark:text-zinc-50 bg-zinc-900/[.06] dark:bg-zinc-50/[.06]',
          disabled: 'opacity-20 pointer-events-none',
        },
      },
    })({ status });

    return (
      <Text as={as} ref={ref} className={base({ className })} {...props}>
        {children}
      </Text>
    );
  }
);

ButtonTransparent.displayName = 'ButtonTransparent';

export default ButtonTransparent;
