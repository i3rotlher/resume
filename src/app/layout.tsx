import "./globals.css";
import type { Metadata } from "next";
import { VT323 } from "next/font/google";
import LeftSection from "./components/sections/LeftSection";
import RightSection from "./components/sections/RightSection";

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

const vt323 = VT323({
  subsets: ["latin"],
  weight: "400",
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`stoneBackground ${vt323.className}`}>
        <main className={"mainLayout"}>
          {/* <LeftSection /> */}
          <RightSection />
        </main>
      </body>
    </html>
  );
}
