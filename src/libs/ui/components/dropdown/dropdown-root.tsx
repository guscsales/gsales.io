'use client';

import * as DropdownMenu from '@radix-ui/react-dropdown-menu';

export default function DropdownRoot({
  children,
}: React.HTMLAttributes<HTMLElement>) {
  return <DropdownMenu.Root>{children}</DropdownMenu.Root>;
}
