'use client';

import * as DropdownMenu from '@radix-ui/react-dropdown-menu';
import { tv } from 'tailwind-variants';

export default function DropdownContent({
  className,
  children,
  ...props
}: React.ComponentProps<typeof DropdownMenu.Content>) {
  const defaultClassName = tv({
    base: 'rounded dark:bg-zinc-50/[.06] shadow-lg p-2',
  });
  return (
    <DropdownMenu.Content
      {...props}
      className={defaultClassName({ className })}
    >
      {children}
    </DropdownMenu.Content>
  );
}
