import classNames from 'classnames';
import React from 'react';

type TextElements =
  | 'div'
  | 'a'
  | 'span'
  | 'p'
  | 'label'
  | 'h1'
  | 'h2'
  | 'h3'
  | 'h4'
  | 'h5'
  | 'h6'
  | 'strong'
  | 'em'
  | 'blockquote'
  | 'code'
  | 'mark'
  | 'ins'
  | 'del'
  | 'sup'
  | 'sub'
  | 'small'
  | 'i'
  | 'b';

type Size =
  | 'inherit'
  | 'xs'
  | 'sm'
  | 'base'
  | 'lg'
  | 'xl'
  | '2xl'
  | '3xl'
  | '4xl'
  | '5xl'
  | '6xl'
  | '7xl'
  | '8xl'
  | '9xl';

type Props = {
  children: React.ReactNode;
  as?: TextElements;
  className?: string;
  sub?: boolean;
  heading?: boolean;
  size?: Size;
};

const sizeMapper: { [key in Size]: string } = {
  inherit: '',
  xs: 'text-xs',
  sm: 'text-sm',
  base: 'text-base',
  lg: 'text-lg',
  xl: 'text-lg sm:text-xl',
  '2xl': 'text-xl sm:text-2xl',
  '3xl': 'text-2xl sm:text-3xl',
  '4xl': 'text-3xl sm:text-4xl',
  '5xl': 'text-4xl sm:text-5xl',
  '6xl': 'text-5xl sm:text-6xl',
  '7xl': 'text-6xl sm:text-7xl',
  '8xl': 'text-7xl sm:text-8xl',
  '9xl': 'text-8xl sm:text-9xl',
};

function Text({ children, as, heading, size, ...props }: Props) {
  const className = classNames(
    {
      'font-heading font-bold': heading,
    },
    sizeMapper[size],
    props.className
  );

  return React.createElement(
    as,
    {
      ...props,
      className,
    },
    children
  );
}

Text.defaultProps = {
  className: '',
  as: 'span',
  sub: false,
  heading: false,
  size: 'inherit',
};

export default Text;
