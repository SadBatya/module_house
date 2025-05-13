import type { Metadata } from 'next';
import { Poppins, Inter } from 'next/font/google';
import './globals.scss';
import { Header } from '@/widgets/Header/Header';
import { Footer } from '@/widgets/Footer/Footer';
import { ModalProvider } from '@/shared/lib/modal-context';
import { ModalForm } from '@/widgets';

const poppins = Poppins({
  variable: '--font-poppins',
  weight: ['100', '200', '300', '400', '500', '600', '700', '800', '900'],
  subsets: ['latin'],
});

const inter = Inter({
  variable: '--font-inter',
  weight: ['100', '200', '300', '400', '500', '600', '700', '800', '900'],
  subsets: ['latin'],
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
          <ModalProvider>
            <Header />
            {children}
            <ModalForm />
            <Footer />
          </ModalProvider>
        </div>
      </body>
    </html>
  );
}
