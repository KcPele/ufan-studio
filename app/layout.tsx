import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "THE STUDIO — Creative direction, design & motion",
  description: "A creative studio building memorable identities, motion and digital worlds.",
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
