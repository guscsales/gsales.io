'use client';

import React from 'react';
import { Command } from 'cmdk';
import { AnimatePresence, motion, MotionProps } from 'framer-motion';
import Text from '@/libs/ui/components/text';
import styles from './command-k.module.scss';
import {
  RiCornerUpLeftFill,
  RiEarthFill,
  RiExpandUpDownLine,
  RiStarSFill,
  RiSunFill,
  RiMoonFill,
} from 'react-icons/ri';
import { mainNavigatorItems } from '@/common/mappers/main-navigator-items';
import Link from 'next/link';
import Typewriter from 'typewriter-effect';
import { myPhilosophy } from '@/common/mappers/my-philosophy';
import { prepareTypewriterMultiPhrases } from '@/common/services/typewriter';
import { usePathname, useRouter } from 'next/navigation';
import { useTheme } from 'next-themes';

function CommandKWrapper({
  children,
  ...props
}: MotionProps & { children: React.ReactNode }) {
  return (
    <>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.2 }}
        className="fixed top-0 left-0 w-full h-full backdrop-blur-sm z-40"
      />
      <motion.div
        initial={{ opacity: 0, scale: 0.98 }}
        animate={{ opacity: 1, scale: 1 }}
        exit={{ opacity: 0, scale: 0.98 }}
        transition={{ duration: 0.2 }}
        className="fixed top-[50%] left-[50%] w-[40rem] h-[30rem] -mt-[15rem] -ml-[20rem] z-50"
        {...props}
      >
        {children}
      </motion.div>
    </>
  );
}

export default function CommandK() {
  const [value, setValue] = React.useState('');
  const inputRef = React.useRef<HTMLInputElement | null>(null);
  const listRef = React.useRef(null);
  const pathname = usePathname();
  const router = useRouter();

  React.useEffect(() => {
    inputRef?.current?.focus();
  }, []);

  const [open, setOpen] = React.useState(false);
  const { theme, setTheme } = useTheme();

  const [firstPhrase, ...otherPhrases] = myPhilosophy;
  const typewriterProps = prepareTypewriterMultiPhrases(
    firstPhrase,
    otherPhrases
  );

  // Toggle the menu when ⌘K is pressed
  React.useEffect(() => {
    const down = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        e.preventDefault();
        setOpen(false);
      } else if (e.key === 'k' && (e.metaKey || e.ctrlKey)) {
        e.preventDefault();
        setOpen((open) => !open);
      }
    };

    document.addEventListener('keydown', down);
    return () => document.removeEventListener('keydown', down);
  }, [value]);

  React.useEffect(() => {
    setOpen(false);
  }, [pathname]);

  return (
    <AnimatePresence>
      {open && (
        <CommandKWrapper>
          <div className={styles.raycast}>
            <Command value={value} onValueChange={(v) => setValue(v)}>
              <div cmdk-wrapper-element="">
                <Command.Input
                  ref={inputRef}
                  autoFocus
                  placeholder="Search for planets or themes..."
                />
              </div>
              <Command.List ref={listRef} className="scroll">
                <Command.Empty>No results found.</Command.Empty>
                <Command.Group
                  heading={
                    <Text className="flex gap-1 items-center">
                      <RiEarthFill className="-mt-1" /> Planets
                    </Text>
                  }
                >
                  {mainNavigatorItems.pages.map(({ href, state, label }) =>
                    state !== 'disabled' ? (
                      <Link href={href} key={label}>
                        <Command.Item
                          onSelect={() => {
                            router.push(href);
                            setOpen(false);
                          }}
                        >
                          {label}
                        </Command.Item>
                      </Link>
                    ) : (
                      <Command.Item data-disabled="true" key={label}>
                        {label}
                      </Command.Item>
                    )
                  )}
                </Command.Group>
                <Command.Group
                  heading={
                    <Text className="flex gap-1 items-center">
                      {theme === 'light' ? (
                        <RiSunFill className="-mt-1" />
                      ) : (
                        <RiMoonFill className="-mt-1" />
                      )}{' '}
                      Choose the theme
                    </Text>
                  }
                >
                  {mainNavigatorItems.themes.map(({ id, label }) => (
                    <Command.Item
                      key={id}
                      onSelect={() => {
                        setTheme(id);
                      }}
                    >
                      {label}
                    </Command.Item>
                  ))}
                </Command.Group>
              </Command.List>

              <div cmdk-raycast-footer="">
                <div className="flex items-center gap-2">
                  <Text className="flex gap-1 items-center text-sm">
                    <RiStarSFill className="-mt-1" />{' '}
                    <Typewriter {...typewriterProps} />
                  </Text>
                </div>
                <div className="flex items-center gap-2">
                  <Text className="flex gap-1 items-center text-sm">
                    <RiExpandUpDownLine className="-mt-1" /> Navigate using
                    arrows
                  </Text>
                  <div className="rounded-full w-1 h-1 bg-zinc-900/[.06] dark:bg-zinc-50/[.06] -mt-0.5" />
                  <Text className="flex gap-1 items-center text-sm">
                    <RiCornerUpLeftFill className="-mt-1" /> Apply hitting enter
                  </Text>
                </div>
              </div>
            </Command>
          </div>
        </CommandKWrapper>
      )}
    </AnimatePresence>
  );
}
