export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <title>Festronix ECE</title>
      </head>
      <body style={{ fontFamily: 'Arial, sans-serif' }}>
        {children}
      </body>
    </html>
  );
}