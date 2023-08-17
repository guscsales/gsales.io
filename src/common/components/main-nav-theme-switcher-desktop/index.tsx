'use client';

import { mainNavigatorItems } from '@/common/mappers/main-navigator-items';
import ButtonIcon from '@/libs/ui/components/button-icon';
import Dropdown from '@/libs/ui/components/dropdown';
import { useTheme } from 'next-themes';
import { RiMoonFill, RiSunFill } from 'react-icons/ri';

export default function MainNavThemeSwitcherDesktop() {
  const { theme, setTheme } = useTheme();

  return (
    <Dropdown.Root>
      <Dropdown.Trigger>
        <ButtonIcon
          icon={theme === 'light' ? RiSunFill : RiMoonFill}
          size={18}
        />
      </Dropdown.Trigger>
      <Dropdown.Content>
        <Dropdown.Label>Choose the theme</Dropdown.Label>
        {mainNavigatorItems.themes.map(({ id, label }) => (
          <Dropdown.Item
            key={id}
            onClick={() => {
              setTheme(id);
            }}
          >
            {label}
          </Dropdown.Item>
        ))}
      </Dropdown.Content>
    </Dropdown.Root>
  );
}
