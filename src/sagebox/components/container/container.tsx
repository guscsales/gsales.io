import React from 'react';

type Props = {
  className: string;
  children: React.ReactNode;
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
  sub: false,
};

export default Container;
