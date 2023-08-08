'use client';

import ButtonTransparent from '@/libs/ui/components/button-transparent';
import Text from '@/libs/ui/components/text';
import {
  RiEarthFill,
  RiFlagFill,
  RiSunFill,
  RiCloseFill,
} from 'react-icons/ri';
import { createPortal } from 'react-dom';
import ButtonIcon from '@/libs/ui/components/button-icon';
import { tv } from 'tailwind-variants';
import Link from 'next/link';
import React from 'react';

type Props = {
  status: 'opened' | 'closed';
  setNavStatus: React.Dispatch<React.SetStateAction<'opened' | 'closed'>>;
};

export default function MainNavMobileContent({
  status,
  className,
  setNavStatus,
  ...props
}: Props & React.HTMLAttributes<HTMLElement>) {
  const [ready, setReady] = React.useState(false);

  React.useEffect(() => {
    if (document) {
      setReady(true);
    }
  }, []);

  const wrapper = tv({
    base: 'fixed w-[75vw] sm:w-[50vw] md:w-[38vw] h-screen top-0 right-0 p-4 pt-10 lg:hidden z-30 bg-zinc-800 transition-base',
    variants: {
      status: {
        opened: 'translate-x-0 opacity-100 visible',
        closed: 'translate-x-5 opacity-0 invisible',
      },
    },
  });

  return ready
    ? createPortal(
        <div className={wrapper({ status, className })}>
          <ButtonIcon
            icon={RiCloseFill}
            size={24}
            className="absolute right-1 top-1"
            onClick={() => {
              setNavStatus('closed');
            }}
          />
          <nav className="flex flex-col w-full h-full gap-5" {...props}>
            <div className="flex flex-col w-full h-[calc(100%-3rem)] overflow-y-auto gap-5">
              <div className="grid gap-2">
                <Text className="text-sm flex gap-1 items-center">
                  <RiEarthFill className="-mt-1" /> Planets
                </Text>
                <div className="grid gap-3">
                  <Link href="/">
                    <ButtonTransparent
                      as="span"
                      status="active"
                      className="justify-start"
                    >
                      Home
                    </ButtonTransparent>
                  </Link>
                  {/* <Link href="/journey"> */}
                  <ButtonTransparent
                    as="span"
                    className="justify-start"
                    status="disabled"
                  >
                    Journey
                  </ButtonTransparent>
                  {/* </Link> */}
                  {/* <Link href="/blog"> */}
                  <ButtonTransparent
                    as="span"
                    className="justify-start"
                    status="disabled"
                  >
                    Blog
                  </ButtonTransparent>
                  {/* </Link> */}
                  {/* <Link href="/projects"> */}
                  <ButtonTransparent
                    as="span"
                    className="justify-start"
                    status="disabled"
                  >
                    Projects
                  </ButtonTransparent>
                  {/* </Link> */}
                  {/* <Link href="/wall"> */}
                  <ButtonTransparent
                    as="span"
                    className="justify-start"
                    status="disabled"
                  >
                    Wall
                  </ButtonTransparent>
                  {/* </Link> */}
                  <ButtonTransparent
                    className="justify-start"
                    status="disabled"
                  >
                    Message 4 U
                  </ButtonTransparent>
                </div>
              </div>

              {/* <div className="grid gap-2">
                <Text className="text-sm flex gap-1 items-center">
                  <RiFlagFill className="-mt-1" /> Language
                </Text>
                <div className="grid grid-flow-col gap-1">
                  <ButtonTransparent as="span" className="text-center">
                    English
                  </ButtonTransparent>
                  <ButtonTransparent as="span" className="text-center">
                    Portuguese
                  </ButtonTransparent>
                </div>
              </div> */}

              {/* <div className="grid gap-2">
                <Text className="text-sm flex gap-1 items-center">
                  <RiSunFill className="-mt-1" /> Theme
                </Text>
                <div className="grid grid-flow-col gap-1">
                  <ButtonTransparent>Light</ButtonTransparent>
                  <ButtonTransparent>Dark</ButtonTransparent>
                  <ButtonTransparent>System</ButtonTransparent>
                </div>
              </div> */}
            </div>

            <div className="flex items-end">
              <div className="flex w-full gap-1.5 justify-center items-center rounded p-0.5 bg-zinc-50 dark:bg-zinc-900">
                <div className="rounded-full w-1.5 h-1.5 bg-gradient-to-r from-emerald-500 to-emerald-300 -mt-0.5" />
                <Text className="font-light text-zinc-900 dark:text-zinc-50">
                  now coding...
                </Text>
              </div>
            </div>
          </nav>
        </div>,
        document.body
      )
    : null;
}
