import type { Metadata } from "next";
import { site } from "@/content/site";

type PageSeo = {
  /** Page name; the layout template appends " | Ufan Studio". */
  title: string;
  description: string;
  /** Route path, e.g. "/work". */
  path: string;
};

/**
 * Metadata for one page: title, description, canonical URL and matching
 * social-share tags. A page's openGraph/twitter objects replace the layout's
 * entirely, so the shared fields are repeated here.
 * The share image is app/opengraph-image.jpg (twitter-image.jpg); it is listed
 * explicitly because a page-level openGraph object drops the inherited one.
 */
const shareImage = { url: "/opengraph-image.jpg", width: 1200, height: 630, alt: `${site.name} key art` };

export function pageMetadata({ title, description, path }: PageSeo): Metadata {
  return {
    title,
    description,
    alternates: { canonical: path },
    openGraph: { type: "website", locale: "en_GB", siteName: site.name, title: `${title} | ${site.name}`, description, url: path, images: [shareImage] },
    twitter: { card: "summary_large_image", title: `${title} | ${site.name}`, description, images: [{ ...shareImage, url: "/twitter-image.jpg" }] },
  };
}
