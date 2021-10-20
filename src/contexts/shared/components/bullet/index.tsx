import classNames from 'classnames';
import React from 'react';

type Props = {
  className?: string;
  float?: boolean;
  backgroundColor?: string;
};

function Bullet({ className, float, backgroundColor }: Props) {
  const cx = classNames({
    absolute: float,
  });

  return (
    <span
      className={`w-1 h-1 rounded-full ${cx} ${backgroundColor} ${className}`}
      style={{ right: '-8px', top: 'calc(50% - 1px)' }}
    />
  );
}

Bullet.defaultProps = {
  className: '',
  float: true,
  backgroundColor: 'bg-gray-700',
};

export default Bullet;
