"use client";

import React from "react";
import Text from "@/libs/ui/components/text";
import {RiCommandLine, RiMenuFill, RiRocket2Fill} from "react-icons/ri";
import atvImg from "@/common/services/avtimg";
import "@/common/styles/avtimg.css";
import {User} from "@prisma/client";
import {SessionContext} from "@/common/providers/session-provider";
import classNames from "classnames";
import styles from "./ticket.module.scss";

type Props = {
  currentDate: Date;
  visitor: User | null;
  device: {isMobile: boolean; isMac: boolean};
};

export default function Ticket({currentDate, visitor, device}: Props) {
  const greeting = React.useMemo(() => {
    const hours = currentDate.getHours();

    return hours < 12
      ? "Good Morning"
      : hours < 18
      ? "Good Afternoon"
      : "Good Evening";
  }, [currentDate]);
  const {visitor: clientSideVisitor} = React.useContext(SessionContext);
  const visitorData = visitor || clientSideVisitor;

  React.useEffect(() => {
    if (visitorData) {
      atvImg(true);
    }
  }, [visitorData]);

  return (
    <div className="atvImg w-[302px] h-[513px] relative mx-auto">
      <div
        className={classNames(
          `atvImg-layer select-none w-[19.75rem] h-[33.5rem] mx-auto -mt-[54px]
          -ml-px bg-contain bg-center bg-no-repeat text-center`,
          styles.bgTicket
        )}
      >
        <div className="flex flex-col gap-1 mt-16 pt-[3.75rem]">
          <Text className="font-light text-zinc-400">{greeting}</Text>
          <Text
            className="font-bold text-3xl text-zinc-800 dark:text-zinc-300 h-[72px] max-w-[280px] mx-auto"
            id="ticket-guest-name"
          >
            {visitorData?.name || "Last call!"}
          </Text>
        </div>

        <div className="flex justify-center w-full h-[5.625rem] mt-2">
          <RiRocket2Fill
            size={90}
            className="fill-zinc-800 dark:fill-zinc-50"
          />
        </div>

        <div className="flex flex-col gap-1 mt-14">
          <Text className="font-light text-zinc-400">Almost ready.</Text>
          {!device.isMobile && device.isMac && (
            <div className="flex gap-0.5 justify-center items-center">
              <Text className="font-light text-zinc-400">Press</Text>
              <div className="flex items-center pb-0.5 pt-1 px-1 rounded bg-zinc-900/[.06] dark:bg-zinc-50/[.06]">
                <RiCommandLine
                  size={16}
                  className="fill-zinc-800 dark:fill-zinc-300 -mt-1"
                />
                <Text className="text-zinc-800 dark:text-zinc-300">+ K</Text>
              </div>
              <Text className="font-light text-zinc-400">
                to start the travel
              </Text>
            </div>
          )}
          {!device.isMobile && !device.isMac && (
            <div className="flex gap-0.5 justify-center items-center">
              <Text className="font-light text-zinc-400">Press</Text>
              <div className="flex items-center pb-0.5 pt-1 px-1 rounded bg-zinc-50/[.06]">
                <Text className="text-zinc-300">CTRL + K</Text>
              </div>
              <Text className="font-light text-zinc-400">
                to start the travel
              </Text>
            </div>
          )}
          {device.isMobile && (
            <div className="flex gap-0.5 justify-center items-center">
              <Text className="font-light text-zinc-400">Tap</Text>
              <div className="flex items-center pb-0.5 px-1 py-2 rounded bg-zinc-50/[.06] -mt-1.5">
                <RiMenuFill size={16} className="fill-zinc-300 -mt-1" />
              </div>
              <Text className="font-light text-zinc-400">
                to start the travel
              </Text>
            </div>
          )}
        </div>

        <div className="flex flex-col mt-8">
          <Text className="font-light text-zinc-400">Visitor Number</Text>
          <Text className="font-light text-4xl text-zinc-800 dark:text-zinc-50">
            #
            <Text className="font-blast text-4xltext-zinc-800 dark:text-zinc-50">
              {(visitorData?.visitorNumber || "------")
                .toString()
                .padStart(6, "0")}
            </Text>
          </Text>
        </div>
      </div>
    </div>
  );
}
