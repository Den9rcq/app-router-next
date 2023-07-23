import React from 'react';
import { Button, Htag } from '@/components';

export default function Home() {
  return (
    <main className="p-4">
      <Htag tag="h1">Привет</Htag>
      <Htag tag="h2">Мир</Htag>
      <Htag tag="h3">Как дела?</Htag>
      <Button appearance="primary" arrow="right">
        Вход
      </Button>
      <Button appearance="ghost" arrow="down">
        Регистрация
      </Button>
    </main>
  );
}
