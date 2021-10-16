import classNames from 'classnames';
import React from 'react';

type Props = {
  className?: string;
  float?: boolean;
};

function Bullet({ className, float }: Props) {
  const cx = classNames({
    absolute: float,
  });

  return (
    <span
      className={`w-1 h-1 bg-gray-700 rounded-full ${cx} ${className}`}
      style={{ right: '-8px', top: 'calc(50% - 1px)' }}
    />
  );
}

Bullet.defaultProps = {
  className: '',
  float: true,
};

export default Bullet;
