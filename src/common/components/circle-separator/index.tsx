import classNames from 'classnames';
import React from 'react';

export default function CircleSeparator({
  className,
  ...props
}: React.HTMLAttributes<HTMLElement>) {
  return (
    <div
      className={classNames(
        'w-1 h-1 rounded-full bg-zinc-900/[.12] dark:bg-zinc-50/[.12]',
        className
      )}
      {...props}
    />
  );
}
