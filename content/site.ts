// Studio-wide facts used in the header, footer, metadata and contact page.
// Values marked PLACEHOLDER must be replaced with Ufan's supplied details before launch.

export const site = {
  name: "Ufan Studio",
  shortName: "UFAN",
  url: process.env.NEXT_PUBLIC_SITE_URL ?? "https://ufanstudio.com",
  tagline: "Comics, illustration and animation, produced in Abuja for clients worldwide.",
  description:
    "Ufan Studio is a registered Nigerian production studio for comics and sequential art, animation, character design and visual development, working with publishers, NGOs and studios worldwide.",
  email: "studio@ufanstudio.com",
  instagram: {
    handle: "@ufanstudio", // PLACEHOLDER: confirm handle
    url: "https://www.instagram.com/ufanstudio",
  },
  cacNumber: "RC 0000000", // PLACEHOLDER: CAC registration number
  address: {
    street: "Studio address line", // PLACEHOLDER: street address
    city: "Abuja",
    region: "FCT",
    country: "Nigeria",
  },
  founded: 2019, // PLACEHOLDER: confirm founding year
} as const;

export const nav = [
  { href: "/work", label: "Work" },
  { href: "/services", label: "Services" },
  { href: "/about", label: "About" },
  { href: "/contact", label: "Contact" },
] as const;

export const formattedAddress = [site.address.street, `${site.address.city}, ${site.address.region}`, site.address.country].join(", ");
