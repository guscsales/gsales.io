import React from 'react';
import classnames from 'classnames';
import Link from 'next/link';

interface Props extends React.AnchorHTMLAttributes<HTMLAnchorElement> {
  children: React.ReactNode;
  className?: string;
  size?: 'small' | 'medium';
  active?: boolean;
  ghost?: boolean;
  align?: 'left' | 'center' | 'right';
}

function ButtonLink({
  children,
  className,
  size,
  active,
  href,
  ghost,
  align,
  ...props
}: Props) {
  const cx = classnames({
    'text-xs': size === 'small',
    'text-base': size === 'medium',
    'px-2 py-1': size === 'small' && !ghost,
    'px-3 py-1': size === 'medium' && !ghost,
    'text-white hover:bg-gray-800': !ghost,
    'text-gray-500 hover:text-white': ghost,
    'bg-gray-800 font-semibold': active,
  });

  return (
    <Link href={href}>
      <a
        {...props}
        className={`rounded no-underline text-${align} text-white transition-colors ${cx} ${className}`}
      >
        {children}
      </a>
    </Link>
  );
}

ButtonLink.defaultProps = {
  className: '',
  size: 'medium',
  active: false,
  ghost: false,
  align: 'center',
};

export default ButtonLink;
