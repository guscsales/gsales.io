import React from 'react';
import { IconType } from 'react-icons';
import { tv } from 'tailwind-variants';

type Props = {
  size: number;
  icon: IconType;
  iconClassName?: string;
};

const ButtonIcon = React.forwardRef(
  (
    {
      icon: Icon,
      size,
      iconClassName,
      className,
      ...props
    }: Props & React.HTMLAttributes<HTMLButtonElement>,
    ref: React.ForwardedRef<HTMLButtonElement>
  ) => {
    const { base, icon } = tv({
      slots: {
        base: 'group p-2 hover:bg-zinc-900/[.06] hover:dark:bg-zinc-50/[.06] transition-base rounded',
        icon: 'fill-zinc-600 dark:fill-zinc-300 group-hover:fill-zinc-900 group-hover:dark:fill-zinc-50 transition-base',
      },
    })();

    return (
      <button ref={ref} className={base({ className })} {...props}>
        <Icon size={size} className={icon({ className: iconClassName })} />
      </button>
    );
  }
);

ButtonIcon.displayName = 'ButtonIcon';

export default ButtonIcon;
