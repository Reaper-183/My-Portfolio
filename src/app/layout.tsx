import type {Metadata} from 'next';
import './globals.css';
import { Toaster } from "@/components/ui/toaster"
import { CursorGlow } from '@/components/portfolio/CursorGlow';

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark !scroll-smooth" suppressHydrationWarning>
      <head>
        <title>Vinod Kumar | Software Engineer</title>
        <meta name="description" content="Personal portfolio of Vinod Kumar, a software engineer specializing in full-stack development and machine learning." />
        <link rel="icon" href="/vk.png?v=2" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;700&display=swap" rel="stylesheet" />
        <link href="https://fonts.googleapis.com/css2?family=Space+Grotesk:wght@400;500;700&display=swap" rel="stylesheet" />
      </head>
      <body className="font-body bg-background text-foreground antialiased relative">
        <CursorGlow>
          {children}
        </CursorGlow>
        <Toaster />
      </body>
    </html>
  );
}
