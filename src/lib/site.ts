// Single source of truth for business contact details.
// Contact is call or text only: no forms, no email addresses anywhere.
export const BUSINESS_NAME = "Frog Home Club";
export const SITE_URL = "https://froghomeclub.com";
export const PHONE_DISPLAY = "(469) 608-0583";
export const PHONE_DIGITS = "4696080583";
export const PHONE_E164 = "+14696080583";
export const TEL_HREF = `tel:${PHONE_DIGITS}`;
export const SMS_HREF = `sms:${PHONE_DIGITS}`;
export const SERVICE_AREA = "Dallas-Fort Worth area";

export const NAV_LINKS = [
  { to: "/", label: "Home" },
  { to: "/lawn-care", label: "Lawn Care" },
  { to: "/junk-removal", label: "Junk Removal" },
  { to: "/about", label: "About" },
  { to: "/contact", label: "Contact" },
] as const;

export const localBusinessSchema = {
  "@context": "https://schema.org",
  "@type": "HomeAndConstructionBusiness",
  name: BUSINESS_NAME,
  url: SITE_URL,
  telephone: PHONE_E164,
  description: "Lawn care and junk removal across Dallas-Fort Worth.",
  areaServed: [
    { "@type": "Place", name: "Dallas-Fort Worth, TX" },
    { "@type": "City", name: "Dallas, TX" },
    { "@type": "City", name: "Fort Worth, TX" },
  ],
  address: {
    "@type": "PostalAddress",
    addressRegion: "TX",
    addressCountry: "US",
  },
  contactPoint: {
    "@type": "ContactPoint",
    telephone: PHONE_E164,
    contactType: "customer service",
    areaServed: "US-TX",
  },
  hasOfferCatalog: {
    "@type": "OfferCatalog",
    name: "Home Services",
    itemListElement: [
      { "@type": "Offer", itemOffered: { "@type": "Service", name: "Lawn Care" } },
      { "@type": "Offer", itemOffered: { "@type": "Service", name: "Junk Removal" } },
    ],
  },
};
