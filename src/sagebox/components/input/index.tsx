import classNames from 'classnames';
import React from 'react';

type Props = {
  error?: boolean;
};

const Input = React.forwardRef<
  HTMLInputElement,
  Props & React.InputHTMLAttributes<HTMLInputElement>
>(({ error, ...props }: Props, ref) => {
  const cx = classNames({
    'focus:border-blue-700': !error,
    'border-red-500': error,
  });

  return (
    <input
      ref={ref}
      className={`bg-transparent 
                  border border-gray-200 border-solid
                  w-full focus:outline-none p-3 rounded-lg ${cx}`}
      {...props}
    />
  );
});

export default Input;
