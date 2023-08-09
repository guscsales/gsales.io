import ButtonTransparent from '@/libs/ui/components/button-transparent';
import Dropdown from '@/libs/ui/components/dropdown';
import ButtonIcon from '@/libs/ui/components/button-icon';
import Text from '@/libs/ui/components/text';
import { RiSunFill } from 'react-icons/ri';
import Link from 'next/link';

export default function MainNavDesktop(
  props: React.HTMLAttributes<HTMLElement>
) {
  return (
    <nav className="hidden lg:flex gap-3 items-center" {...props}>
      <Link href="/">
        <ButtonTransparent as="span" status="active">
          Home
        </ButtonTransparent>
      </Link>
      {/* <Link href="/journey"> */}
      <ButtonTransparent as="span" status="disabled">
        Journey
      </ButtonTransparent>
      {/* </Link>
      <Link href="/blog"> */}
      <ButtonTransparent as="span" status="disabled">
        Blog
      </ButtonTransparent>
      {/* </Link>
      <Link href="/projects"> */}
      <ButtonTransparent as="span" status="disabled">
        Projects
      </ButtonTransparent>
      {/* </Link>
      <Link href="/wall"> */}
      <ButtonTransparent as="span" status="disabled">
        Wall
      </ButtonTransparent>
      {/* </Link> */}
      <ButtonTransparent status="disabled">Message 4 U</ButtonTransparent>

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
