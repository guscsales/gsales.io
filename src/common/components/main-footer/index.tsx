import Logo from '@/common/components/logo';
import Text from '@/libs/ui/components/text';
import Link from 'next/link';

export default function MainFooter() {
  return (
    <footer className="grid gap-6 py-2 px-3 mt-28 mb-10 container">
      <Text className="font-code font-normal text-sm text-emerald-700 dark:text-emerald-200">
        {'// const listeningNow = ”Finesse (Remix) - Bruno Mars & Cardi B” _'}
      </Text>

      <div className="flex flex-col gap-4 lg:flex-row lg:justify-between items-center">
        <div className="flex flex-col items-center lg:items-start">
          <Logo className="w-10" />
          <Link href="mailto:gustavo@gsales.io">
            <Text
              as="span"
              className="font-light text-zinc-500 dark:text-zinc-400 transition-base hover:text-zinc-900 hover:dark:text-zinc-50"
            >
              gustavo@gsales.io
            </Text>
          </Link>
        </div>

        <nav className="flex gap-2.5">
          <Link
            href="https://github.com/guscsales"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Text
              as="span"
              className="font-light text-zinc-500 dark:text-zinc-400 transition-base hover:text-zinc-900 hover:dark:text-zinc-50"
            >
              Github
            </Text>
          </Link>
          <Link
            href="https://linkedin.com/in/guscsales"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Text
              as="span"
              className="font-light text-zinc-500 dark:text-zinc-400 transition-base hover:text-zinc-900 hover:dark:text-zinc-50"
            >
              LinkedIn
            </Text>
          </Link>
          <Link
            href="https://www.youtube.com/channel/UCQmw7Ty7UN8i7_dan_uKNfQ"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Text
              as="span"
              className="font-light text-zinc-500 dark:text-zinc-400 transition-base hover:text-zinc-900 hover:dark:text-zinc-50"
            >
              YouTube Channel
            </Text>
          </Link>
          <Link
            href="https://instagram.com/guscsales"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Text
              as="span"
              className="font-light text-zinc-500 dark:text-zinc-400 transition-base hover:text-zinc-900 hover:dark:text-zinc-50"
            >
              Instagram
            </Text>
          </Link>
        </nav>
      </div>

      <div className="flex flex-col items-center">
        <Text className="text-sm font-light text-zinc-500 dark:text-zinc-400 text-center">
          Wait on the Lord: be of good courage, and he shall strengthen thine
          heart: wait, I say, on the Lord.
        </Text>
        <Text className="text-xs font-light text-zinc-500 text-center">
          PSalm 27:14
        </Text>
      </div>
    </footer>
  );
}
