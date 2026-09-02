import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "UFAN — Animation, cartoons & visual worlds",
  description: "UFAN is an independent animation and image-making studio building memorable visual worlds.",
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <html lang="en"><body>{children}</body></html>;
}
