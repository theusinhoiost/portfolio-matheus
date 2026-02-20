import type { Metadata } from "next";
import { Inter } from "next/font/google"; // ou a fonte que preferir
import "./globals.css";
import { Providers } from "./providers";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Matheus | Portfolio",
  description: "Fullstack Developer, DevOps & CyberSec Enthusiast",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    // suppressHydrationWarning é necessário para o next-themes funcionar sem erros no console
    <html lang="pt-BR" suppressHydrationWarning>
      <body className={inter.className}>
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
