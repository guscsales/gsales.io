import Image from 'next/image';
import React from 'react';
import { tv } from 'tailwind-variants';

type Props = {
  src: React.ComponentProps<typeof Image>['src'];
  alt: React.ComponentProps<typeof Image>['alt'];
  width: React.ComponentProps<typeof Image>['width'];
  height: React.ComponentProps<typeof Image>['height'];
};

const ButtonIconImage = React.forwardRef(
  (
    {
      src,
      alt = '',
      width,
      height,
      className,
      ...props
    }: Props & React.HTMLAttributes<HTMLButtonElement>,
    ref: React.ForwardedRef<HTMLButtonElement>
  ) => {
    const defaultClassName = tv({
      base: 'p-2 hover:bg-zinc-900/[.06] hover:dark:bg-zinc-50/[.06] transition-base rounded',
    });

    return (
      <button ref={ref} className={defaultClassName({ className })} {...props}>
        <Image src={src} alt={alt} width={width} height={height} />
      </button>
    );
  }
);

ButtonIconImage.displayName = 'ButtonIconImage';

export default ButtonIconImage;
