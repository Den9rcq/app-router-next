import React from 'react';
import { Button, Htag, P } from '@/components';

export default function Home() {
  return (
    <main className="p-4">
      <Htag tag="h1">Привет</Htag>
      <Htag tag="h2">Мир</Htag>
      <Htag tag="h3">Как дела?</Htag>
      <P size="sm">Маленький</P>
      <P size="base">Средний</P>
      <P size="lg">Большой</P>
      <Button appearance="primary" arrow="right">
        Вход
      </Button>
      <Button appearance="ghost" arrow="down">
        Регистрация
      </Button>
    </main>
  );
}
