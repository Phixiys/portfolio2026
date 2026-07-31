import type { Metadata } from 'next';
import { Oswald, Nunito, JetBrains_Mono } from 'next/font/google';
import '@/styles/globals.css';
import Background from '@/components/Background';
import Nav from '@/components/Nav';
import Footer from '@/components/Footer';
import Animate from '@/components/Animate';

const oswald = Oswald({ subsets: ['latin'], weight: ['500', '600', '700'], variable: '--font-oswald', display: 'swap' });
const nunito = Nunito({ subsets: ['latin'], weight: ['400', '600', '700'], variable: '--font-nunito', display: 'swap' });
const jetbrains = JetBrains_Mono({ subsets: ['latin'], weight: ['500'], variable: '--font-mono-jb', display: 'swap' });

export const metadata: Metadata = {
  title: 'Sasa Ristic — Senior Frontend Engineer',
  description:
    'Stockholm-based senior frontend engineer. Eleven years building fast, accessible, genuinely useful interfaces for demanding brands.',
  openGraph: {
    title: 'Sasa Ristic — Senior Frontend Engineer',
    description:
      'Stockholm-based senior frontend engineer. Eleven years building fast, accessible, genuinely useful interfaces for demanding brands.',
    type: 'website',
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${oswald.variable} ${nunito.variable} ${jetbrains.variable}`}>
      <body>
        <Background />
        <Nav />
        <main className="container" style={{ position: 'relative', zIndex: 10 }}>
          <Animate>{children}</Animate>
          <Footer />
        </main>
      </body>
    </html>
  );
}
