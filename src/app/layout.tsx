import './globals.css';

export const metadata = {
  title: 'Petunia',
  description: 'The perfect app for your business. The perfect world for your pet.',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
