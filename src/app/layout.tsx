import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'NeedATyre | Tyres fitted locally or at your location',
  description:
    'Book tyre fitting, mobile tyre fitting, puncture repairs and breakdown assistance.',
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