import { Courier_Prime, League_Spartan, Space_Mono } from 'next/font/google';

const main = League_Spartan({
  variable: '--font-main',
  subsets: ['latin'],
  weight: ['300', '400', '500', '700'],
});
const blast = Space_Mono({
  variable: '--font-blast',
  subsets: ['latin'],
  weight: ['400'],
});
const code = Courier_Prime({
  variable: '--font-code',
  subsets: ['latin'],
  weight: ['700'],
});

const fonts = {
  main,
  blast,
  code,
  className: `${main.variable} ${blast.variable} ${code.variable}`,
};

export default fonts;
