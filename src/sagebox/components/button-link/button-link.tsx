import React from 'react';
import classnames from 'classnames';
import Link from 'next/link';

interface Props extends React.AnchorHTMLAttributes<HTMLAnchorElement> {
  children: React.ReactNode;
  className?: string;
  size?: 'small' | 'medium';
  active?: boolean;
}

function ButtonLink({
  children,
  className,
  size,
  active,
  href,
  ...props
}: Props) {
  const cx = classnames({
    'px-2 py-1 text-xs': size === 'small',
    'px-3 py-1 text-base': size === 'medium',
    'bg-gray-800 font-semibold': active,
  });

  return (
    <Link href={href}>
      <a
        {...props}
        className={`rounded no-underline px-2 py-1 text-center text-white hover:bg-gray-800 transition-colors ${cx} ${className}`}
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
};

export default ButtonLink;
