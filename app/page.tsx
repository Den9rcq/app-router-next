import React from 'react';
import { Button, Htag } from '@/components';
import Logo from '../public/vercel.svg';

export default function Home() {
  return (
    <main className="p-4">
      <Htag tag="h1">Привет</Htag>
      <Htag tag="h2">Мир</Htag>
      <Htag tag="h3">Как дела?</Htag>
      <Button appearance="primary">Вход</Button>
      <Button appearance="ghost">Регистрация</Button>
      <Logo />
    </main>
  );
}
