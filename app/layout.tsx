import React from 'react';
import './globals.css';
import type { Metadata } from 'next';
import { Noto_Sans } from 'next/font/google';

const notoSans = Noto_Sans({
  variable: '--noto-sans-font',
  weight: ['300', '400', '500', '700'],
  style: ['normal'],
  fallback: ['sans-serif'],
  subsets: ['cyrillic', 'cyrillic-ext', 'latin', 'latin-ext'],
  preload: true,
});

export const metadata: Metadata = {
  title: 'Наш проект',
  description: 'Generated by create next app',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="ru">
      <body className={notoSans.className}>{children}</body>
    </html>
  );
}
