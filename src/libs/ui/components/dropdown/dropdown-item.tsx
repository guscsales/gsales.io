'use client';

import * as DropdownMenu from '@radix-ui/react-dropdown-menu';
import Text from '@/libs/ui/components/text';

type Props = {
  as?: React.ComponentProps<typeof Text>['as'];
};

export default function DropdownItem({
  as = 'button',
  children,
  ...props
}: Props & React.ComponentProps<typeof DropdownMenu.Item>) {
  return (
    <DropdownMenu.Item {...props}>
      <Text
        as={as}
        className="flex cursor-pointer w-full text-left text-base py-1 px-1.5 rounded hover:bg-zinc-900/[.06] hover:dark:bg-zinc-50/[.06] text-zinc-600 dark:text-zinc-300 hover:text-zinc-900 hover:dark:text-zinc-50 transition-base"
      >
        {children}
      </Text>
    </DropdownMenu.Item>
  );
}
