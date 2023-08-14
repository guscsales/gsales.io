import Text from '@/libs/ui/components/text';
import classNames from 'classnames';
import React from 'react';
import { RiEarthFill } from 'react-icons/ri';

type Props = {
  planet: string;
  title: string;
};

export default function PageHeader({
  planet,
  title,
  className,
  ...props
}: Props & React.HTMLAttributes<HTMLElement>) {
  return (
    <header
      className={classNames('flex flex-col gap-2.5', className)}
      {...props}
    >
      <Text className="flex gap-1 items-center uppercase text-sm text-zinc-600 dark:text-zinc-300">
        <RiEarthFill size={16} className="-mt-1 capitalize" />
        Planet {planet}
      </Text>
      <Text className="text-4xl font-bold">
        <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 dark:from-emerald-200 to-purple-500 dark:to-purple-500">
          {title}
        </span>
      </Text>
    </header>
  );
}
