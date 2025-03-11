import type { Metadata } from "next";

import { Nunito, Nunito_Sans } from "next/font/google";

import { cn } from "@/lib/utils";

import { ThemeProvider } from "@/components/shared/theme-provider";
import { Toaster } from "@/components/ui/sonner";
import "../styles/globals.css";

const fontSans = Nunito_Sans({
  subsets: ["latin"],
  variable: "--font-sans",
});
const fontTitle = Nunito({
  subsets: ["latin"],
  variable: "--font-title",
});

export const metadata: Metadata = {
  title: "Resume Craft",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR" suppressHydrationWarning>
      <body
        className={cn(
          "bg-background flex min-h-screen font-sans antialiased",
          fontSans.variable,
          fontTitle.variable,
        )}
      >
        <Toaster />
        <ThemeProvider>{children}</ThemeProvider>
      </body>
    </html>
  );
}
