import React from 'react';

export default function Button({
  children,
  className,
  ...props
}: React.ButtonHTMLAttributes<HTMLButtonElement>) {
  return (
    // eslint-disable-next-line react/button-has-type
    <button
      {...props}
      className={`py-3 rounded-lg bg-blue-700 text-white transition-colors ease-in-out hover:bg-blue-600 shadow-md ${className}`}
    >
      {children}
    </button>
  );
}
