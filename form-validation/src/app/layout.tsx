import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { toast } from "@/components/ui/use-toast";
import { Toaster } from "@/components/ui/toaster";
import Link from "next/link";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <nav className="p-5 bg-slate-300 flex items-center justify-center gap-6 ">
          <Link href={"/studio"}>Studio</Link>
          <Link href={"/backend"}>Backend</Link>
          <Link href={"/data_fetching"}>Client Fetching</Link>
          <Link href={"/data_fetching/server_data"}>Server Fetching</Link>
          <Link href={"/data_fetching/react_query"}>React Query</Link>
        </nav>
        {children}
        <Toaster />
      </body>
    </html>
  );
}
