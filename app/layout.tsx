import type { Metadata } from "next";
import "./globals.css";

const siteUrl = "https://studio.kcpele.com";
const title = "UFAN Studio | Comic Art, 2D & 3D Animation";
const description = "UFAN Studio is a Nigerian creative studio for comic-book illustration, digital art, character design, 2D and 3D animation, motion advertising and visual storytelling.";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: title,
    template: "%s | UFAN Studio",
  },
  description,
  keywords: [
    "UFAN Studio",
    "comic book illustration",
    "digital illustration Nigeria",
    "2D animation Nigeria",
    "3D animation Nigeria",
    "character design",
    "comic artist Nigeria",
    "motion design Nigeria",
    "animation studio Jos",
    "African storytelling",
  ],
  authors: [{ name: "UFAN Studio" }],
  creator: "UFAN Studio",
  publisher: "UFAN Studio",
  alternates: {
    canonical: "/",
  },
  category: "Animation and Illustration Studio",
  openGraph: {
    type: "website",
    locale: "en_NG",
    url: "/",
    siteName: "UFAN Studio",
    title,
    description,
    images: [{
      url: "/images/ufan/ufan-showreel-world.png",
      width: 1672,
      height: 941,
      alt: "UFAN Studio comic art and animation world",
    }],
  },
  twitter: {
    card: "summary_large_image",
    title,
    description,
    images: ["/images/ufan/ufan-showreel-world.png"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
  },
};

const organizationSchema = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: "UFAN Studio",
  url: siteUrl,
  logo: `${siteUrl}/images/ufan/ufan-showreel-world.png`,
  image: `${siteUrl}/images/ufan/ufan-showreel-world.png`,
  description,
  email: "ultrafantasycomics@gmail.com",
  telephone: "+2348141171367",
  address: {
    "@type": "PostalAddress",
    addressLocality: "Jos",
    addressCountry: "NG",
  },
  founders: [
    { "@type": "Person", name: "Ebenezer Akeju" },
    { "@type": "Person", name: "Emmanuel James" },
  ],
  knowsAbout: [
    "Comic book illustration",
    "Digital illustration",
    "Character design",
    "2D animation",
    "3D animation",
    "3D modelling",
    "Motion advertising",
  ],
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <html lang="en"><body>{children}<script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }} /></body></html>;
}
