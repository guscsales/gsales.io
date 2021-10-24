import React from 'react';
import classNames from 'classnames';
import Text from '@sagebox/components/text/text';

type Props = {
  type: 'error';
  withSpace?: boolean;
  className?: string;
  children: React.ReactNode;
};

export default function InputMessage({
  type,
  children,
  className,
  withSpace,
}: Props) {
  const cx = classNames({
    'text-red-500': type === 'error',
    'mt-1': withSpace,
  });

  return (
    <Text as="div" className={`text-sm ${className} ${cx}`}>
      {children}
    </Text>
  );
}

InputMessage.defaultProps = {
  withSpace: true,
};
