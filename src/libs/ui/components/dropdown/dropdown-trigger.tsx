'use client';

import * as DropdownMenu from '@radix-ui/react-dropdown-menu';

export default function DropdownTrigger({
  children,
  ...props
}: React.ComponentProps<typeof DropdownMenu.Trigger>) {
  return (
    <DropdownMenu.Trigger asChild {...props}>
      {children}
    </DropdownMenu.Trigger>
  );
}
