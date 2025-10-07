import localFont from 'next/font/local';

const geist = localFont({
  src: [
    {
      path: '../public/fonts/Geist/variable/Geist[wght].ttf',
      weight: '100 900',
      style: 'normal',
    },
    {
      path: '../public/fonts/Geist/variable/Geist-Italic[wght].ttf',
      weight: '100 900',
      style: 'italic',
    },
  ],
  variable: '--font-geist',
});

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={geist.variable}>
      <body>{children}</body>
    </html>
  );
}