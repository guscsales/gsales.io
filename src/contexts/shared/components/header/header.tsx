import React from 'react';
import Container from '@sagebox/components/container/container';
import ButtonLink from '@sagebox/components/button-link/button-link';
import Link from 'next/link';

function Header() {
  return (
    <header>
      <Container className="py-4 flex justify-between items-center">
        <div className="font-code text-xs text-green-200">
          {/* eslint-disable-next-line react/jsx-curly-brace-presence */}
          {`// doing what you love is just fun; _`}
        </div>
        {/* <div className="grid grid-cols-2 gap-1">
          <ButtonLink href="/en" size="small" active>
            EN
          </ButtonLink>
          <ButtonLink href="/pt" size="small">
            PT
          </ButtonLink>
        </div> */}
      </Container>
      <div className="w-full h-px bg-gray-800 mb-6" />
      <Container className="mb-4 flex justify-between items-center">
        <h1 className="font-heading font-bold italic text-white text-2xl">
          <Link href="/">
            <a className="no-underline select-none">Gus!</a>
          </Link>
        </h1>
        {/* <nav className="grid gap-2 grid-flow-col">
          <ButtonLink href="/en" active>
            Home
          </ButtonLink>
          <ButtonLink href="/en">Blog</ButtonLink>
          <ButtonLink href="/en">Wall</ButtonLink>
          <ButtonLink href="/en">Projects</ButtonLink>
          <ButtonLink href="/en">Codes</ButtonLink>
        </nav> */}
      </Container>
    </header>
  );
}

export default Header;
