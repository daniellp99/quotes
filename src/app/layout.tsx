import "./globals.css";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Quotes Generator App",
  description: "An app for generate random quotes",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <main className="mx-auto p-12 bg-black min-h-screen text-white">{children}</main>
      </body>
    </html>
  );
}
