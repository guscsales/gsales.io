import React from 'react';
import Container from '@sagebox/components/container/container';
import ButtonLink from '@sagebox/components/button-link/button-link';
import useAuth from '@contexts/auth/hooks/useAuth';
import { useRouter } from 'next/router';
import navigatorCms from '@contexts/shared/services/navigator-cms';

export default function HeaderCMS() {
  const { signOut } = useAuth();
  const router = useRouter();

  async function handleSignOut() {
    await signOut();
    router.replace('/admin/login');
  }

  return (
    <header>
      <Container className="py-4 flex justify-end items-center">
        <ButtonLink href="/" size="small" className="uppercase">
          Go To Website
        </ButtonLink>
      </Container>
      <div className="w-full h-px bg-gray-800 mb-6" />
      <Container className="mb-4 flex justify-between items-center">
        <h1 className="font-heading font-bold italic text-white text-2xl">
          Gus! CMS
        </h1>
        <nav className="grid gap-2 grid-flow-col">
          {navigatorCms.map(({ name, url }) => (
            <ButtonLink key={url} href={url} active={url === router.pathname}>
              {name}
            </ButtonLink>
          ))}
          <ButtonLink href="#" onClick={handleSignOut}>
            Sign Out
          </ButtonLink>
        </nav>
      </Container>
    </header>
  );
}
