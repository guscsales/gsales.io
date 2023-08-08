'use client';

import * as DropdownMenu from '@radix-ui/react-dropdown-menu';

export default function DropdownPortal({
  children,
  ...props
}: React.ComponentProps<typeof DropdownMenu.Portal>) {
  return <DropdownMenu.Portal {...props}>{children}</DropdownMenu.Portal>;
}
