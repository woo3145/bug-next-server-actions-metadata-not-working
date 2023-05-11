import Link from 'next/link';
import './globals.css';
import { Inter } from 'next/font/google';

export const metadata = {
  title: 'Main Page',
  description: 'Generated by create next app',
};

const inter = Inter({ subsets: ['latin'] });

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <nav className="flex justify-center gap-4 text-xl py-40 underline">
          <Link href="/">Main</Link>
          <Link href="/my">My</Link>
          <Link href="/my/settings">My/Settings</Link>
          <Link href="/shop">Shop</Link>
        </nav>

        {children}
      </body>
    </html>
  );
}
