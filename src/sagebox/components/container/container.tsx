import React from 'react';

type Props = {
  children: React.ReactNode;
  className?: string;
  sub?: boolean;
  as?: 'div' | 'section' | 'article';
};

function Container({ children, className, sub, as }: Props) {
  return React.createElement(
    as,
    { className: `${sub ? 'sub-' : ''}container ${className}` },
    children
  );
}

Container.defaultProps = {
  className: '',
  sub: false,
  as: 'div',
};

export default Container;
