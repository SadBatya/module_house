import type { Metadata } from 'next';
import { Poppins, Inter } from 'next/font/google';
import './globals.scss';
import { Header } from '@/widgets/Header/Header';

const poppins = Poppins({
  variable: '--font-poppins',
  weight: ['100', '200', '300', '400', '500', '600', '700', '800', '900'],
});

const inter = Inter({
  variable: '--font-inter',
  weight: ['100', '200', '300', '400', '500', '600', '700', '800', '900'],
});

export const metadata: Metadata = {
  title: 'Мы дома',
  description: 'Модульные дома',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ru">
      <body className={`${poppins.variable} ${inter.variable}`}>
        <div id="root">
          <Header />
          {children}
        </div>
      </body>
    </html>
  );
}
