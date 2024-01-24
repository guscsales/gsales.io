import {headers} from "next/headers";
import DeviceService from "@/common/services/device-service";
import PageHeader from "@/common/components/page-header";
import Text from "@/libs/ui/components/text";
import Card from "@/libs/ui/components/card";
import {
  RiCheckFill,
  RiCodeBoxFill,
  RiFileList2Fill,
  RiFootballLine,
  RiImage2Fill,
  RiMapPinFill,
  RiMoneyDollarCircleFill,
  RiPlayFill,
  RiTerminalWindowFill,
  RiYoutubeFill,
} from "react-icons/ri";
import CircleSeparator from "@/common/components/circle-separator";
import Link from "next/link";
import Badge from "@/libs/ui/components/badge";
import {IconType} from "react-icons";
import {Metadata} from "next";

export const metadata: Metadata = {
  title: "Study and make a project | Projects",
  description:
    "Part of a software engineer life is creating side projects. Here I list my main JavaScript and Open Source projects I made for study, for community and more.",
};

type ProjectCardProps = {
  icon: IconType;
  headline: React.ReactNode;
  title: React.ReactNode;
  description: React.ReactNode;
  footer: React.ReactNode;
};

function ProjectCard({
  icon: Icon,
  headline,
  title,
  description,
  footer,
}: ProjectCardProps) {
  return (
    <Card
      border="zero-to-white"
      className="p-3 grid lg:grid-cols-[2.875rem_1fr] gap-3"
    >
      <div className="flex items-center justify-center w-[2.875rem] h-[2.875rem] rounded bg-zinc-900/[.06] dark:bg-zinc-50/[.06]">
        <Icon size={28} className="fill-zinc-900 dark:fill-zinc-50" />
      </div>
      <div className="grid gap-3">
        <div className="grid">
          <Text className="text-emerald-600 dark:text-emerald-200 font-medium">
            {headline}
          </Text>
          <Text className="text-zinc-900 dark:text-zinc-50 font-medium text-xl">
            {title}
          </Text>
          <Text as="p" type="paragraph">
            {description}
          </Text>
        </div>

        <footer className="flex flex-col lg:flex-row gap-1.5 lg:items-center">
          {footer}
        </footer>
      </div>
    </Card>
  );
}

export default function ProjectsPage() {
  return (
    <article className="container mt-5">
      <PageHeader
        planet="Projects"
        title="Study and make a project."
        className="mb-2"
      />

      <Text as="p" className="mb-3" type="paragraph">
        I love to create <Text highlight>side projects</Text>, can be for my{" "}
        <Text highlight>YouTube videos</Text>, for some{" "}
        <Text highlight>specific purpose</Text> or just to{" "}
        <Text highlight>learn a new technology</Text>. Side projects are{" "}
        <Text highlight>one of my passions</Text>, and here I will list the main
        ones I developed in my carrier.
      </Text>

      <section>
        <Text
          as="h2"
          className="text-zinc-900 dark:text-zinc-50 font-bold text-2xl mb-2"
        >
          2023
        </Text>

        <div className="grid gap-3">
          <ProjectCard
            icon={RiYoutubeFill}
            title="Codegus"
            headline="YouTube Channel"
            description="I share code and carrier knowledge according what I developed in my experience. The videos are about frontend, backend, git and more."
            footer={
              <>
                <Badge color="red-to-pink" className="-mt-1">
                  Working In Progress
                </Badge>
                <CircleSeparator className="hidden lg:block -mt-1" />
                <Text className="font-light">2,639 subscribers</Text>
                <CircleSeparator className="hidden lg:block -mt-1" />
                <Link
                  href="https://canal.gsales.io"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Text className="font-light underline text-zinc-800 dark:text-zinc-300 hover:text-zinc-900 hover:dark:text-zinc-50 transition-base">
                    See project
                  </Text>
                </Link>
              </>
            }
          />

          <ProjectCard
            icon={RiMapPinFill}
            title="Busca CEP"
            headline="Miscellaneous"
            description="I created this project to help me find addresses quickly and to test the Brazil APIs, a new open source project which consolidates several important public data APIs from Brazil."
            footer={
              <>
                <>
                  <Text className="font-light">
                    Vite, TailwindCSS, Vercel, Brazil API
                  </Text>
                  <CircleSeparator className="hidden lg:block" />
                  <Link
                    href="https://cep.gsales.io/"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Text className="font-light underline text-zinc-800 dark:text-zinc-300 hover:text-zinc-900 hover:dark:text-zinc-50 transition-base">
                      See project
                    </Text>
                  </Link>
                  <CircleSeparator className="hidden lg:block" />
                  <Link
                    href="https://github.com/guscsales/projeto-cep"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Text className="font-light underline text-zinc-800 dark:text-zinc-300 hover:text-zinc-900 hover:dark:text-zinc-50 transition-base">
                      Source code
                    </Text>
                  </Link>
                </>
              </>
            }
          />
        </div>
      </section>

      <section className="mt-6 lg:mt-10">
        <Text
          as="h2"
          className="text-zinc-900 dark:text-zinc-50 font-bold text-2xl mb-2"
        >
          2022
        </Text>

        <div className="grid gap-3">
          <ProjectCard
            icon={RiFootballLine}
            title="Estou na Torcida"
            headline="FIFA World Cup"
            description="I share code and carrier knowledge according what I developed in my experience. The videos are about frontend, backend, git and more."
            footer={
              <>
                <Text className="font-light">
                  Next.js, TailwindCSS, Vercel, Firebase, OG Images
                </Text>
                <CircleSeparator className="hidden lg:block" />
                <Link
                  href="https://estounatorcida.com.br"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Text className="font-light underline text-zinc-800 dark:text-zinc-300 hover:text-zinc-900 hover:dark:text-zinc-50 transition-base">
                    See project
                  </Text>
                </Link>
                <CircleSeparator className="hidden lg:block" />
                <Link
                  href="https://github.com/guscsales/estou-na-torcida"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Text className="font-light underline text-zinc-800 dark:text-zinc-300 hover:text-zinc-900 hover:dark:text-zinc-50 transition-base">
                    Source code
                  </Text>
                </Link>
              </>
            }
          />

          <ProjectCard
            icon={RiFileList2Fill}
            title="TabNews Blog"
            headline="YouTube Channel"
            description="This project was born in one of the most famous videos from my channel, where I created a blog consuming the TabNews APIs."
            footer={
              <>
                <Text className="font-light">
                  Next.js, TailwindCSS, Vercel, TabNews APIs
                </Text>
                <CircleSeparator className="hidden lg:block" />
                <Link
                  href="https://tab-news-blog.vercel.app"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Text className="font-light underline text-zinc-800 dark:text-zinc-300 hover:text-zinc-900 hover:dark:text-zinc-50 transition-base">
                    See project
                  </Text>
                </Link>
                <CircleSeparator className="hidden lg:block" />
                <Link
                  href="https://github.com/guscsales/tab-news-blog"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Text className="font-light underline text-zinc-800 dark:text-zinc-300 hover:text-zinc-900 hover:dark:text-zinc-50 transition-base">
                    Source code
                  </Text>
                </Link>
              </>
            }
          />
        </div>
      </section>

      <section className="mt-6 lg:mt-10">
        <Text
          as="h2"
          className="text-zinc-900 dark:text-zinc-50 font-bold text-2xl mb-2"
        >
          2021
        </Text>

        <div className="grid gap-3">
          <ProjectCard
            icon={RiPlayFill}
            title="Prototype Playground"
            headline="Open Source"
            description="A place where you can learn and test JavaScript's array prototype functions."
            footer={
              <>
                <Badge color="red-to-pink" className="-mt-1">
                  Working In Progress
                </Badge>
                <CircleSeparator className="hidden lg:block -mt-1" />
                <Text className="font-light">
                  Next.js, TailwindCSS, Vercel, VanillaJS
                </Text>
                <CircleSeparator className="hidden lg:block -mt-1" />
                <Link
                  href="https://playground.gsales.io/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Text className="font-light underline text-zinc-800 dark:text-zinc-300 hover:text-zinc-900 hover:dark:text-zinc-50 transition-base">
                    See project
                  </Text>
                </Link>
                <CircleSeparator className="hidden lg:block -mt-1" />
                <Link
                  href="https://github.com/guscsales/prototype-playground"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Text className="font-light underline text-zinc-800 dark:text-zinc-300 hover:text-zinc-900 hover:dark:text-zinc-50 transition-base">
                    Source code
                  </Text>
                </Link>
              </>
            }
          />

          <ProjectCard
            icon={RiMoneyDollarCircleFill}
            title="Kinvo Profitability Amount"
            headline="Miscellaneous"
            description="A Chromium extension to show my wallet profitability total value in BRL on Kinvo's APP."
            footer={
              <>
                <Text className="font-light">
                  Chrome Extension CLI, JavaScript, CSS
                </Text>
                <CircleSeparator className="hidden lg:block" />
                <Link
                  href="https://github.com/guscsales/kinvo-profitability-amount-chrome-extension"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Text className="font-light underline text-zinc-800 dark:text-zinc-300 hover:text-zinc-900 hover:dark:text-zinc-50 transition-base">
                    Source code
                  </Text>
                </Link>
              </>
            }
          />
        </div>
      </section>

      <section className="mt-6 lg:mt-10">
        <Text
          as="h2"
          className="text-zinc-900 dark:text-zinc-50 font-bold text-2xl mb-2"
        >
          2020
        </Text>

        <div className="grid gap-3">
          <ProjectCard
            icon={RiTerminalWindowFill}
            title="My Settings"
            headline="Open Source"
            description="I was tired to every time when format the machine install everything again, so I created some shell files to execute everything in one line on terminal."
            footer={
              <>
                <Text className="font-light">Shell</Text>
                <CircleSeparator className="hidden lg:block" />
                <Link
                  href="https://github.com/guscsales/my-settings"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Text className="font-light underline text-zinc-800 dark:text-zinc-300 hover:text-zinc-900 hover:dark:text-zinc-50 transition-base">
                    Source code
                  </Text>
                </Link>
              </>
            }
          />
        </div>
      </section>

      <section className="mt-6 lg:mt-10">
        <Text
          as="h2"
          className="text-zinc-900 dark:text-zinc-50 font-bold text-2xl mb-2"
        >
          2017
        </Text>

        <div className="grid gap-3">
          <ProjectCard
            icon={RiCheckFill}
            title="Angular 2 Form Validator"
            headline="Open Source"
            description="Validate Angular forms should not be hard using this directive."
            footer={
              <>
                <Text className="font-light">Angular, TypeScript</Text>
                <CircleSeparator className="hidden lg:block" />
                <Link
                  href="https://github.com/guscsales/angular2-form-validator"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Text className="font-light underline text-zinc-800 dark:text-zinc-300 hover:text-zinc-900 hover:dark:text-zinc-50 transition-base">
                    Source code
                  </Text>
                </Link>
              </>
            }
          />

          <ProjectCard
            icon={RiImage2Fill}
            title="jQuery RMC Slider"
            headline="Open Source"
            description="A library to run sliders using jQuery easily."
            footer={
              <>
                <Text className="font-light">JavaScript, CSS, jQuery</Text>
                <CircleSeparator className="hidden lg:block" />
                <Link
                  href="https://github.com/guscsales/jquery-rmc-slider"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Text className="font-light underline text-zinc-800 dark:text-zinc-300 hover:text-zinc-900 hover:dark:text-zinc-50 transition-base">
                    Source code
                  </Text>
                </Link>
              </>
            }
          />
        </div>
      </section>

      <section className="mt-6 lg:mt-10">
        <Text
          as="h2"
          className="text-zinc-900 dark:text-zinc-50 font-bold text-2xl mb-2"
        >
          2016
        </Text>

        <div className="grid gap-3">
          <ProjectCard
            icon={RiCodeBoxFill}
            title="Angular Dialogs"
            headline="Open Source"
            description="A plugin to handle dialogs easily using angular.js"
            footer={
              <>
                <Text className="font-light">Angular.js, HTML, Bootstrap</Text>
                <CircleSeparator className="hidden lg:block" />
                <Link
                  href="https://github.com/guscsales/angular-dialogs"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Text className="font-light underline text-zinc-800 dark:text-zinc-300 hover:text-zinc-900 hover:dark:text-zinc-50 transition-base">
                    Source code
                  </Text>
                </Link>
              </>
            }
          />

          <ProjectCard
            icon={RiCodeBoxFill}
            title="jQuery Scroll and Show"
            headline="Open Source"
            description="A jQuery library to show elements on the screen according the scrolling, giving a good effect when user navigates on the page."
            footer={
              <>
                <Text className="font-light">jQuery, JavaScript</Text>
                <CircleSeparator className="hidden lg:block" />
                <Link
                  href="https://github.com/guscsales/jquery-scroll-n-show"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Text className="font-light underline text-zinc-800 dark:text-zinc-300 hover:text-zinc-900 hover:dark:text-zinc-50 transition-base">
                    Source code
                  </Text>
                </Link>
              </>
            }
          />
        </div>
      </section>
    </article>
  );
}
