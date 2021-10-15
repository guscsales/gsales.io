import React from 'react';

type Props = {
  children: React.ReactNode;
  className?: string;
  sub?: boolean;
};

function Container({ children, className, sub }: Props) {
  return (
    <div className={`${sub ? 'sub-' : ''}container ${className}`}>
      {children}
    </div>
  );
}

Container.defaultProps = {
  className: '',
  sub: false,
};

export default Container;
