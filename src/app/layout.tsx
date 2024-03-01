import type { Metadata } from "next";
import { Inter,Montserrat } from "next/font/google";
import "./globals.css";
import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import Script from "next/script";

const inter = Montserrat({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Resheph Inayat ",
  description: "Hi, I'm Resheph Inayat, a Front-End Web Developer with a passion for creating beautiful, functional, and user-centered digital experiences."
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${inter.className} bg-light dark:bg-dark w-full min-h-screen`}>
        <Script id="theme-switcher" strategy="beforeInteractive">
          {`if (localStorage.theme === 'dark' || (!('theme' in localStorage) && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
  document.documentElement.classList.add('dark')
} else {
  document.documentElement.classList.remove('dark')
}`}
        </Script>
        <Navbar/>
        {children}
        <Footer/>
      </body>
    </html>
  );
}
