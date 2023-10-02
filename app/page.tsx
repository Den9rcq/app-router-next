import React from 'react';
import { Button, Htag, P, Tag } from '@/components';

export default function Home() {
  return (
    <main className="p-4">
      <Htag tag="h1">Привет</Htag>
      <Htag tag="h2">Мир</Htag>
      <Htag tag="h3">Как дела?</Htag>
      <P size="sm">Маленький</P>
      <P size="base">Средний</P>
      <P size="lg">Большой</P>
      <Tag color="primary" size="sm">
        GGasdkaksdks
      </Tag>
      <Tag color="red" href="https://www.google.com">
        Google
      </Tag>
      <Button appearance="primary" arrow="right">
        Вход
      </Button>
      <Button appearance="ghost" arrow="down">
        Регистрация
      </Button>
    </main>
  );
}
