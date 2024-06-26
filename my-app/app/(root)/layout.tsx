import type { Metadata } from "next";
import "../globals.css";
import localFont from "next/font/local";
import NavBar from "@/components/custom/navbar";
import Footer from "@/components/custom/footer";

const gilroyBold = localFont({
  src: "../../components/assets/font/Gilroy-Bold.ttf",
  variable: "--font-gilroy-bold",
});
console.log(gilroyBold);
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
      <body className={gilroyBold.variable}>
        <NavBar />
        {children}
      </body>
    </html>
  );
}
