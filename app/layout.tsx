import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { SiteFooter } from "@/components/layout/SiteFooter";
import { SiteHeader } from "@/components/layout/SiteHeader";
import { services } from "@/content/services";
import { site } from "@/content/site";
import "./globals.css";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter", display: "swap" });

const title = `${site.name} | Comics, Illustration and Animation`;

export const metadata: Metadata = {
  metadataBase: new URL(site.url),
  title: {
    default: title,
    template: `%s | ${site.name}`,
  },
  description: site.description,
  keywords: [
    "comic production studio",
    "sequential art",
    "illustration studio Nigeria",
    "animation studio Abuja",
    "character design",
    "visual development",
    "storyboards",
    "educational comics",
  ],
  authors: [{ name: site.name }],
  creator: site.name,
  publisher: site.name,
  category: "Animation and Illustration Studio",
  openGraph: {
    type: "website",
    locale: "en_GB",
    url: "/",
    siteName: site.name,
    title,
    description: site.description,
    // Share image: app/opengraph-image.jpg (+ .alt.txt), picked up automatically.
  },
  twitter: {
    card: "summary_large_image",
    title,
    description: site.description,
  },
  robots: { index: true, follow: true },
};

const organizationSchema = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: site.name,
  url: site.url,
  image: `${site.url}/opengraph-image.jpg`,
  description: site.description,
  email: site.email,
  foundingDate: String(site.founded),
  address: {
    "@type": "PostalAddress",
    streetAddress: site.address.street,
    addressLocality: site.address.city,
    addressRegion: site.address.region,
    addressCountry: "NG",
  },
  sameAs: [site.instagram.url],
  founder: { "@type": "Person", name: "Ebenezer Akeju" },
  knowsAbout: services.map((service) => service.title),
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en-GB" className={inter.variable}>
      <body>
        <a href="#main" className="skip-link">
          Skip to content
        </a>
        <SiteHeader />
        <main id="main">{children}</main>
        <SiteFooter />
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }} />
      </body>
    </html>
  );
}
