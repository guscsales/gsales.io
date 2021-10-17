import React from 'react';
import Text from '@sagebox/components/text/text';
import classNames from 'classnames';

function Card({
  title,
  children,
  hoverable,
}: {
  title?: string;
  children: React.ReactNode;
  hoverable?: boolean;
}) {
  const cx = classNames({
    'transition-all ease-in-out transform hover:scale-105': hoverable,
  });

  return (
    <div
      className={`rounded-lg border border-solid border-gray-600 p-4 cursor-default ${cx}`}
    >
      {title && (
        <Text heading as="h3" className="text-white text-center mb-2">
          {title}
        </Text>
      )}
      {children}
    </div>
  );
}

Card.defaultProps = {
  title: undefined,
  hoverable: false,
};

export default Card;
