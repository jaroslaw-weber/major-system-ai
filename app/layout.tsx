import type { Metadata } from "next";
import { Inconsolata } from "next/font/google";
import "./globals.css";

export const metadata: Metadata = {
  title: "Major System Ai",
  description: "Generate Major System Mnemonics with Ai",
};
const font = Inconsolata({
  subsets: ["latin"],
});

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        {/* this is for veryfing google search console */}
        <meta
          name="google-site-verification"
          content="Mvpa7a-ly3zvf8gi292rjnY9WwHk1UrJ14sjkXDVRZw"
        />
      </head>
      <body className={font.className}>{children}</body>
    </html>
  );
}
