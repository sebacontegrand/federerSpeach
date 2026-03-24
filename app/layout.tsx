import type { Metadata } from "next";
import { Libre_Bodoni, Nunito_Sans } from "next/font/google";
import "./globals.css";

const libreBodoni = Libre_Bodoni({
  subsets: ["latin"],
  variable: "--font-libre-bodoni",
  style: ["normal", "italic"],
});

const nunitoSans = Nunito_Sans({
  subsets: ["latin"],
  variable: "--font-nunito-sans",
});

export const metadata: Metadata = {
  title: "Federer: The Living Archive",
  description: "A tribute to the legend of the court, Roger Federer.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${libreBodoni.variable} ${nunitoSans.variable} font-sans antialiased text-[var(--on-background)] bg-[var(--background)]`}>
        {children}
      </body>
    </html>
  );
}
