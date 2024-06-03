import React from "react";
import Link from "next/link";
import Image from "next/image";
import { Audiowide } from "@next/font/google";
import type { Metadata } from "next";

import Animation from "./components/Animations";
import "./globals.css";

const audiowide = Audiowide({
  subsets: ["latin"],
  weight: "400",
});

export const metadata: Metadata = {
  title: "HyperSpace | Project",
  description:
    "An experimental project to test out my abilities in Next.js, Tailwind, and TypeScript",
};

const RootLayout: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  return (
    <html lang="en">
      <body className={audiowide.className}>
        <Animation />
        <div className="fixed inset-0 text-white tracking-widest overflow-y-auto scroll-smooth">
          <nav className="p-10">
            <ul className="flex space-x-10 items-center justify-center text-3xl">
              <li className="hover:bg-yellow-gradient">
                <Link
                  href="/"
                  className="block p-4 bg-white/90 hover:bg-transparent"
                >
                  <Image
                    alt="HyperSpace Logo"
                    src="/hyper-space.svg"
                    width={50}
                    height={50}
                  />
                </Link>
              </li>
              <li className="hover:bg-yellow-gradient">
                <Link href="/popup" className="block p-4">
                  POPUP
                </Link>
              </li>
            </ul>
          </nav>
          <div>{children}</div>
        </div>
      </body>
    </html>
  );
};

export default RootLayout;
