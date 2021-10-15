import React from 'react';
import classnames from 'classnames';

interface Props extends React.AnchorHTMLAttributes<HTMLAnchorElement> {
  children: React.ReactNode;
  className?: string;
  size?: 'small' | 'medium';
  active?: boolean;
}

function ButtonLink({ children, className, size, active, ...props }: Props) {
  const cx = classnames({
    'px-2 py-1': size === 'small',
    'px-3 py-2': size === 'medium',
    'bg-gray-800': active,
  });

  return (
    <a
      {...props}
      className={`rounded no-underline px-2 py-1 text-center text-white text-xs hover:bg-gray-800 transition-colors ${cx} ${className}`}
    >
      {children}
    </a>
  );
}

ButtonLink.defaultProps = {
  className: '',
  size: 'medium',
  active: false,
};

export default ButtonLink;
