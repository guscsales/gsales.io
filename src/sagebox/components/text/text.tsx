import classNames from 'classnames';
import React, { HTMLAttributes } from 'react';

type TextElements =
  | 'div'
  | 'a'
  | 'span'
  | 'p'
  | 'label'
  | 'h1'
  | 'h2'
  | 'h3'
  | 'h4'
  | 'h5'
  | 'h6'
  | 'strong'
  | 'em'
  | 'blockquote'
  | 'code'
  | 'mark'
  | 'ins'
  | 'del'
  | 'sup'
  | 'sub'
  | 'small'
  | 'i'
  | 'b'
  | 'time';

type Props = {
  children?: React.ReactNode;
  as?: TextElements;
  className?: string;
  heading?: boolean;
};

function Text({
  children,
  as,
  heading,
  ...props
}: Props & HTMLAttributes<HTMLElement>) {
  const className = classNames(
    'whitespace-pre-wrap',
    {
      'font-heading font-bold': heading,
    },
    props.className
  );

  return React.createElement(
    as,
    {
      ...props,
      className,
    },
    children
  );
}

Text.defaultProps = {
  className: '',
  as: 'span',
  heading: false,
};

export default Text;
