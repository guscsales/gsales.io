import React from 'react';
import Text from '@sagebox/components/text/text';

function Card({
  title,
  children,
}: {
  title?: string;
  children: React.ReactNode;
}) {
  return (
    <div className="rounded-lg border border-solid border-gray-600 p-4 transition-all ease-in-out transform hover:scale-105 cursor-default">
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
};

export default Card;
