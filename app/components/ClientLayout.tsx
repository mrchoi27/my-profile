'use client';

import { ReactNode } from 'react';
import ThemeProvider from './ThemeProvider';
import Navbar from './Navbar';

export default function ClientLayout({ children }: { children: ReactNode }) {
  return (
    <ThemeProvider>
      <Navbar />
      {children}
    </ThemeProvider>
  );
}
