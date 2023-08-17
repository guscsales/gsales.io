'use client';

import * as DropdownMenu from '@radix-ui/react-dropdown-menu';
import { tv } from 'tailwind-variants';

export default function DropdownContent({
  className,
  children,
  ...props
}: React.ComponentProps<typeof DropdownMenu.Content>) {
  const defaultClassName = tv({
    base: 'rounded bg-zinc-200 dark:bg-zinc-800 shadow-lg p-2',
  });
  return (
    <DropdownMenu.Content
      {...props}
      className={defaultClassName({ className })}
      sideOffset={4}
    >
      {children}
    </DropdownMenu.Content>
  );
}
