import ButtonTransparent from '@/libs/ui/components/button-transparent';
import Dropdown from '@/libs/ui/components/dropdown';
import ButtonIcon from '@/libs/ui/components/button-icon';
import Text from '@/libs/ui/components/text';
import { RiSunFill } from 'react-icons/ri';
import Link from 'next/link';
import { mainNavigatorItems } from '@/domains/common/mappers/main-navigator-items';

export default function MainNavDesktop(
  props: React.HTMLAttributes<HTMLElement>
) {
  return (
    <nav className="hidden lg:flex gap-3 items-center" {...props}>
      {mainNavigatorItems.pages.map(({ href, state, label }) =>
        state !== 'disabled' ? (
          <Link href={href} key={label}>
            <ButtonTransparent
              as="span"
              status={
                state as React.ComponentProps<
                  typeof ButtonTransparent
                >['status']
              }
            >
              {label}
            </ButtonTransparent>
          </Link>
        ) : (
          <ButtonTransparent
            as="span"
            status={
              state as React.ComponentProps<typeof ButtonTransparent>['status']
            }
            className="justify-start"
            key={label}
          >
            {label}
          </ButtonTransparent>
        )
      )}

      <div className="w-px h-6 bg-zinc-100 dark:bg-zinc-800" />

      <div className="flex gap-3 items-center">
        {/* <Dropdown.Root>
          <Dropdown.Trigger>
            <ButtonIconImage
              src={usFlagIcon}
              width={24}
              height={16}
              alt="The US flag"
            />
          </Dropdown.Trigger>
          <Dropdown.Portal>
            <Dropdown.Content>
              <Dropdown.Label>Choose the language</Dropdown.Label>
              <Dropdown.Item as="span">English</Dropdown.Item>
              <Dropdown.Item as="span">Portuguese</Dropdown.Item>
            </Dropdown.Content>
          </Dropdown.Portal>
        </Dropdown.Root> */}

        {/* <Dropdown.Root>
          <Dropdown.Trigger>
            <ButtonIcon icon={RiSunFill} size={18} />
          </Dropdown.Trigger>
          <Dropdown.Portal>
            <Dropdown.Content>
              <Dropdown.Label>Choose the theme</Dropdown.Label>
              <Dropdown.Item>Dark</Dropdown.Item>
              <Dropdown.Item>Light</Dropdown.Item>
              <Dropdown.Item>System</Dropdown.Item>
            </Dropdown.Content>
          </Dropdown.Portal>
        </Dropdown.Root> */}

        {/* <div className="w-px h-6 bg-zinc-100 dark:bg-zinc-800" /> */}

        <div className="flex gap-1.5 items-center">
          <div className="rounded-full w-1.5 h-1.5 bg-gradient-to-r from-emerald-500 to-emerald-300 -mt-0.5" />
          <Text className="font-light text-zinc-900 dark:text-zinc-50">
            now coding...
          </Text>
        </div>
      </div>
    </nav>
  );
}
