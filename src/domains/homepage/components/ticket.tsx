'use client';

import React from 'react';
import Text from '@/libs/ui/components/text';
import ticketDark from '@/assets/images/ticket-dark.png';
import { RiCommandLine, RiRocket2Fill } from 'react-icons/ri';
import atvImg from '@/common/services/avtimg';
import '@/common/styles/avtimg.css';

export default function Ticket() {
  React.useEffect(() => {
    atvImg(true);
  }, []);

  // test

  return (
    <div className="atvImg w-[302px] h-[513px] relative mx-auto">
      <div
        className="atvImg-layer select-none w-[19.75rem] h-[33.5rem] mx-auto -mt-[54px] -ml-px bg-contain bg-center bg-no-repeat text-center"
        style={{ backgroundImage: `url('${ticketDark.src}')` }}
      >
        <div className="flex flex-col gap-1 mt-16 pt-[3.75rem]">
          <Text className="font-light text-zinc-400">Good Morning</Text>
          <Text
            className="font-bold text-3xl text-zinc-300"
            id="ticket-guest-name"
          >
            Putting fuel...
          </Text>
        </div>

        <div className="flex justify-center w-full h-[5.625rem] mt-9">
          <RiRocket2Fill size={90} className="fill-zinc-50" />
        </div>

        <div className="flex flex-col gap-1 mt-14">
          <Text className="font-light text-zinc-400">Almost ready.</Text>
          {/* <div className="flex gap-0.5 justify-center items-center">
            <Text className="font-light text-zinc-400">Press</Text>
            <div className="flex items-center py-0.5 px-1 rounded bg-zinc-50/[.06]">
              <RiCommandLine size={16} className="fill-zinc-300 -mt-1" />
              <Text className="text-zinc-300">+ K</Text>
            </div>
            <Text className="font-light text-zinc-400">
              to start the travel
            </Text>
          </div> */}
        </div>

        {/* <div className="flex flex-col mt-10">
          <Text className="font-light text-zinc-400">Guest Number</Text>
          <Text className="font-light text-4xl text-zinc-50">
            #<Text className="font-blast text-4xl text-zinc-50">000001</Text>
          </Text>
        </div> */}
      </div>
    </div>
  );
}
