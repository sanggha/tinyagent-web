import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import MotionProvider from "@/components/MotionProvider";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const siteUrl = "https://tinyagent.io";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "Tiny Agent | Real Estate Advertising for Australian Agents",
    template: "%s | Tiny Agent",
  },
  description:
    "Tiny Agent runs precision digital advertising campaigns that put real estate agents in front of every homeowner in their area. Leads delivered to your inbox. Australia-wide. Live within 24 hours.",
  keywords: [
    "real estate advertising Australia",
    "real estate agent marketing",
    "local real estate agent advertising",
    "real estate lead generation",
    "real estate digital marketing",
    "real estate social media ads",
    "property marketing Australia",
    "real estate agent leads",
    "vendor leads real estate",
    "real estate Facebook ads",
    "real estate Instagram ads",
    "real estate agent branding",
    "suburb targeted advertising",
    "real estate agent Melbourne",
    "real estate agent Sydney",
    "real estate marketing agency Australia",
  ],
  authors: [{ name: "Tiny Agent", url: siteUrl }],
  creator: "Tiny Agent",
  publisher: "Tiny Agent",
  category: "Real Estate Marketing",
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  openGraph: {
    type: "website",
    locale: "en_AU",
    url: siteUrl,
    siteName: "Tiny Agent",
    title: "Tiny Agent | Real Estate Advertising for Australian Agents",
    description:
      "Precision digital advertising that puts your name in front of every homeowner in your area. Leads delivered to your inbox. Live within 24 hours.",
    images: [
      {
        // TODO: Replace /logo.png with a proper 1200×630 og-image.png once created
        url: `${siteUrl}/logo.png`,
        width: 1024,
        height: 1024,
        alt: "Tiny Agent — Real Estate Advertising",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Tiny Agent | Real Estate Advertising for Australian Agents",
    description:
      "Precision digital advertising for real estate agents. Leads to your inbox. Australia-wide.",
    images: [`${siteUrl}/logo.png`],
    creator: "@tinyagentio",
  },
  alternates: {
    canonical: siteUrl,
  },
  other: {
    "geo.region": "AU",
    "geo.placename": "Australia",
    "og:locale:alternate": "en_AU",
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Organization",
      "@id": `${siteUrl}/#organization`,
      name: "Tiny Agent",
      url: siteUrl,
      logo: {
        "@type": "ImageObject",
        url: `${siteUrl}/logo.png`,
        width: 1024,
        height: 1024,
      },
      description:
        "Tiny Agent provides precision digital advertising campaigns for real estate agents across Australia, delivering homeowner leads directly to agents' inboxes.",
      foundingLocation: {
        "@type": "Place",
        addressCountry: "AU",
      },
      areaServed: {
        "@type": "Country",
        name: "Australia",
      },
      contactPoint: {
        "@type": "ContactPoint",
        contactType: "customer support",
        email: "hello@tinyagent.io",
        areaServed: "AU",
        availableLanguage: "English",
      },
      sameAs: [
        "https://www.facebook.com/tinyagent",
        "https://www.instagram.com/tinyagent",
        "https://www.linkedin.com/company/tinyagent",
      ],
    },
    {
      "@type": "WebSite",
      "@id": `${siteUrl}/#website`,
      url: siteUrl,
      name: "Tiny Agent",
      publisher: { "@id": `${siteUrl}/#organization` },
      inLanguage: "en-AU",
    },
    {
      "@type": "WebPage",
      "@id": `${siteUrl}/#webpage`,
      url: siteUrl,
      name: "Tiny Agent | Real Estate Advertising for Australian Agents",
      isPartOf: { "@id": `${siteUrl}/#website` },
      about: { "@id": `${siteUrl}/#organization` },
      description:
        "Precision digital advertising campaigns for real estate agents across Australia.",
      inLanguage: "en-AU",
      breadcrumb: {
        "@type": "BreadcrumbList",
        itemListElement: [
          {
            "@type": "ListItem",
            position: 1,
            name: "Home",
            item: siteUrl,
          },
        ],
      },
    },
    {
      "@type": "Service",
      "@id": `${siteUrl}/#service`,
      name: "Real Estate Digital Advertising",
      provider: { "@id": `${siteUrl}/#organization` },
      serviceType: "Digital Advertising",
      description:
        "Precision digital advertising campaigns for real estate agents. Hyper-local targeting, professional creative, lead delivery direct to your inbox. Australia-wide.",
      areaServed: {
        "@type": "Country",
        name: "Australia",
      },
      audience: {
        "@type": "Audience",
        audienceType: "Real Estate Agents",
      },
    },
    {
      "@type": "FAQPage",
      "@id": `${siteUrl}/#faq`,
      mainEntity: [
        {
          "@type": "Question",
          name: "How quickly can you launch a real estate advertising campaign?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Fast. Once we have the basic info we need from you — your target area, a few photos, and your contact details — we can have your campaign live within 24 hours.",
          },
        },
        {
          "@type": "Question",
          name: "Which areas of Australia do you operate in?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Australia-wide. Whether you're in Sydney, Melbourne, Brisbane, Perth, Adelaide, or a regional centre, we can build a campaign that reaches homeowners in your specific area.",
          },
        },
        {
          "@type": "Question",
          name: "How are real estate leads delivered to me?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Every enquiry comes directly to your email inbox. No platform to log into, no complicated system to learn. When someone fills in their details, you get an email.",
          },
        },
        {
          "@type": "Question",
          name: "Do I need to appear on camera for the ads?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Not necessarily. If you have good professional photos already, that's often all we need. We can work with what you have and build a compelling campaign around your existing profile.",
          },
        },
      ],
    },
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en-AU" className={`${inter.variable} scroll-smooth`}>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            // S4: escape <> to prevent </script> injection if data ever becomes dynamic
            __html: JSON.stringify(jsonLd)
              .replace(/</g, "\\u003c")
              .replace(/>/g, "\\u003e")
              .replace(/&/g, "\\u0026"),
          }}
        />
        <link rel="canonical" href={siteUrl} />
        <meta name="format-detection" content="telephone=no" />
        <meta name="theme-color" content="#0A0F1E" />
        <meta name="color-scheme" content="dark" />
      </head>
      <body className="min-h-screen antialiased">
        <MotionProvider>{children}</MotionProvider>
      </body>
    </html>
  );
}
