'use client';

import * as DropdownMenu from '@radix-ui/react-dropdown-menu';
import Text from '@/libs/ui/components/text';

export default function DropdownLabel({
  children,
  ...props
}: React.ComponentProps<typeof DropdownMenu.Label>) {
  return (
    <DropdownMenu.Label className="p-1" {...props}>
      <Text
        as="div"
        className="font-light text-sm select-none pointer-events-none dark:text-zinc-400 group-hover:text-zinc-900 group-hover:dark:text-zinc-50 transition-base"
      >
        {children}
      </Text>
    </DropdownMenu.Label>
  );
}
