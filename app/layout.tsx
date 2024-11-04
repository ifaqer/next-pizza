import { Nunito } from 'next/font/google';
import './globals.css';

const nunito = Nunito({
  weight: ['600', '800'],
  subsets: ['latin'],
  display: 'swap',
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link data-rh="true" rel="icon" href="/logo.png" />
      </head>
      <body className={nunito.className}>{children}</body>
    </html>
  );
}
