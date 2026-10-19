import type { Metadata } from 'next';
import { Fraunces, Inter } from 'next/font/google';
import './globals.css';

const serif = Fraunces({ subsets: ['latin'], variable: '--font-serif', display: 'swap' });
const sans  = Inter({ subsets: ['latin', 'cyrillic'], variable: '--font-sans', display: 'swap' });

export const metadata: Metadata = {
  metadataBase: new URL('https://kvarta.example'),
  title: 'Кварта — обжарка кофе в Минске',
  description:
    'Маленькая обжарка в Минске. Партии по 5 кг, обжарка по четвергам, доставка по пятницам. Свежесть — 1–3 дня от ростера до вас.',
  openGraph: {
    title: 'Кварта — обжарка кофе в Минске',
    description: 'Обжариваем по четвергам. Доставляем в пятницу.',
    locale: 'ru_BY',
    type: 'website',
    images: ['/opengraph-image'],
  },
  twitter: { card: 'summary_large_image' },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="ru" className={`${serif.variable} ${sans.variable}`}>
      <body className="bg-[#fffaf3] text-[#2b1b12] font-sans antialiased">
        {children}
      </body>
    </html>
  );
}
