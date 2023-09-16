import React from 'react';
import { Inter } from 'next/font/google';

import StyledComponentsRegistry from './lib/AntdRegistry';

import './globals.css';
// import '@/app/globals.css'; // this also worked

const inter = Inter({ subsets: ['latin'] });

export const metadata = {
  title: 'Create Next App',
  description: 'Generated by create next app',
};

const RootLayout = ({ children }) => (
  <html lang="en">
    <body className={inter.className}>
      <StyledComponentsRegistry>{children}</StyledComponentsRegistry>
    </body>
  </html>
);

export default RootLayout;
