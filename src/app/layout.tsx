import fonts from "@/libs/ui/core/fonts";
import type {Metadata} from "next";
import MainHeader from "@/common/components/main-header";
import MainFooter from "@/common/components/main-footer";
import UserService from "@/domains/users/services/user-service";
import CreateSession from "@/common/components/create-session";
import CoreProvider from "@/common/providers/core-provider";
import dynamic from "next/dynamic";

import "@/common/styles/globals.scss";
import "react-loading-skeleton/dist/skeleton.css";

const CommandK = dynamic(() => import("@/common/components/command-k"), {
  ssr: false,
});

export const metadata: Metadata = {
  title: {
    template: "%s | Gustavo Sales",
    default: "Software Engineer | Javascript Specialist | Gustavo Sales",
  },
  icons: {
    icon: "/favicon.png",
  },
};

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const user = await UserService.getUserFromSession();
  // const { theme } = JSON.parse(cookies().get('theme')?.value as string);

  return (
    <html lang="en">
      <body className={`${fonts.className} pt-14`}>
        <CoreProvider>
          <CreateSession userId={user?.id} />
          <MainHeader />
          <main>{children}</main>
          <MainFooter />
          <CommandK />
        </CoreProvider>
      </body>
    </html>
  );
}
