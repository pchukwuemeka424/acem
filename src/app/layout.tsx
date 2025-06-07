import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Prince Chukwuemeka - AceHub Technologies Ltd | Tech Visionary & Digital Innovation Expert",
  description: "Prince Chukwuemeka, Founder & CEO of AceHub Technologies Ltd. Expert in web development, mobile apps, and digital marketing solutions. 10+ years experience delivering innovative tech solutions worldwide.",
  keywords: "Prince Chukwuemeka, AceHub Technologies Ltd, web design, mobile development, digital marketing, tech solutions, CEO, founder, Nigeria, UK, full-stack developer, tech visionary",
  authors: [{ name: "Prince Chukwuemeka", url: "https://acehubtechnologies.co.uk" }],
  creator: "Prince Chukwuemeka",
  publisher: "AceHub Technologies Ltd",
  applicationName: "AceHub Technologies Ltd",
  metadataBase: new URL('https://acehubtechnologies.co.uk'),
  alternates: {
    canonical: '/',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://acehubtechnologies.co.uk",
    siteName: "AceHub Technologies Ltd - Prince Chukwuemeka",
    title: "Prince Chukwuemeka - Tech Visionary & Founder of AceHub Technologies Ltd",
    description: "Meet Prince Chukwuemeka, the visionary behind AceHub Technologies Ltd. Expert in full-stack development, web design, mobile apps, and digital marketing solutions. 10+ years transforming businesses through technology.",
    images: [
      {
        url: "/assets/images/prince_chukwuemeka.jpeg",
        width: 1200,
        height: 630,
        alt: "Prince Chukwuemeka - Founder & CEO of AceHub Technologies Ltd",
        type: "image/jpeg",
      },
      {
        url: "/assets/images/acehub.png",
        width: 800,
        height: 600,
        alt: "AceHub Technologies Ltd - Founded by Prince Chukwuemeka",
        type: "image/png",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    site: "@acehub_tech",
    creator: "@prince_chukwuemeka",
    title: "Prince Chukwuemeka - Tech Visionary & AceHub Ltd Founder",
    description: "Prince Chukwuemeka, CEO of AceHub Technologies Ltd. Expert in web development, mobile apps, data analytics & cybersecurity. 750+ successful projects worldwide.",
    images: ["/assets/images/prince_chukwuemeka.jpeg"],
  },
  verification: {
    google: "your-google-verification-code",
    yandex: "your-yandex-verification-code",
    yahoo: "your-yahoo-verification-code",
  },
  category: "Technology",
  classification: "Business",
  other: {
    "apple-mobile-web-app-title": "Prince Chukwuemeka - AceHub",
    "application-name": "AceHub Technologies Ltd",
    "msapplication-TileColor": "#2563eb",
    "theme-color": "#2563eb",
    "mobile-web-app-capable": "yes",
    "apple-mobile-web-app-capable": "yes",
    "apple-mobile-web-app-status-bar-style": "default",
    "format-detection": "telephone=no",
    "linkedin:owner": "Prince Chukwuemeka",
    "linkedin:company": "AceHub Technologies Ltd",
    "fb:admins": "Prince Chukwuemeka",
    "article:author": "Prince Chukwuemeka",
    "profile:first_name": "Prince",
    "profile:last_name": "Chukwuemeka",
    "profile:username": "prince_chukwuemeka",
    "business:contact_data:locality": "London",
    "business:contact_data:region": "England",
    "business:contact_data:country_name": "United Kingdom",
    "geo.region": "GB-ENG",
    "geo.placename": "London",
    "geo.position": "51.5074;-0.1278",
    "ICBM": "51.5074, -0.1278",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const structuredData = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Organization",
        "@id": "https://acehubtechnologies.co.uk/#organization",
        "name": "AceHub Technologies Ltd",
        "url": "https://acehubtechnologies.co.uk",
        "logo": {
          "@type": "ImageObject",
          "url": "https://acehubtechnologies.co.uk/assets/images/acehub.png",
          "width": 800,
          "height": 600
        },
        "founder": {
          "@type": "Person",
          "@id": "https://acehubtechnologies.co.uk/#founder",
          "name": "Prince Chukwuemeka",
          "jobTitle": "Founder & CEO",
          "description": "Tech Visionary and Digital Innovation Expert with 10+ years experience",
          "image": "https://acehubtechnologies.co.uk/assets/images/prince_chukwuemeka.jpeg",
          "url": "https://acehubtechnologies.co.uk/founder",
          "sameAs": [
            "https://linkedin.com/in/prince-chukwuemeka",
            "https://twitter.com/prince_chukwuemeka"
          ],
          "knowsAbout": [
            "Web Development",
            "Mobile Development", 
            "Data Analytics",
            "Cybersecurity",
            "Business Analysis",
            "Digital Marketing",
            "Full-Stack Development",
            "Business Strategy"
          ],
          "hasCredential": [
            "Data Analytics Certification",
            "Cybersecurity Expert",
            "Business Analysis Professional",
            "Full-Stack Developer"
          ]
        },
        "description": "AceHub Technologies Ltd founded by Prince Chukwuemeka - Leading tech company specializing in web design, mobile development, digital marketing, and professional training.",
        "address": {
          "@type": "PostalAddress",
          "addressLocality": "London",
          "addressRegion": "England", 
          "addressCountry": "GB"
        },
        "contactPoint": {
          "@type": "ContactPoint",
          "contactType": "customer service",
          "url": "https://acehubtechnologies.co.uk/contact"
        },
        "sameAs": [
          "https://linkedin.com/company/acehub-technologies",
          "https://twitter.com/acehub_tech"
        ],
        "knowsAbout": [
          "Web Design",
          "Mobile Development",
          "Digital Marketing", 
          "Data Analytics Training",
          "Cybersecurity Training",
          "Business Analysis Training"
        ]
      },
      {
        "@type": "Person",
        "@id": "https://acehubtechnologies.co.uk/#founder",
        "name": "Prince Chukwuemeka",
        "alternateName": "Prince C. Chukwuemeka",
        "jobTitle": "Founder & CEO",
        "worksFor": {
          "@id": "https://acehubtechnologies.co.uk/#organization"
        },
        "description": "Prince Chukwuemeka is a tech visionary and the founder of AceHub Technologies Ltd. With over 10 years of experience, he has successfully guided 750+ projects and mentored 1,500+ professionals worldwide in data analytics, cybersecurity, business analysis, and full-stack development.",
        "image": "https://acehubtechnologies.co.uk/assets/images/prince_chukwuemeka.jpeg",
        "url": "https://acehubtechnologies.co.uk",
        "sameAs": [
          "https://linkedin.com/in/prince-chukwuemeka",
          "https://twitter.com/prince_chukwuemeka"
        ],
        "knowsAbout": [
          "Full-Stack Development",
          "Data Analytics & AI", 
          "Cybersecurity",
          "Business Strategy",
          "Digital Transformation",
          "Growth Hacking",
          "Strategic Business Planning",
          "Web Development",
          "Mobile Development",
          "System Architecture",
          "Machine Learning",
          "Business Intelligence"
        ],
        "hasOccupation": {
          "@type": "Occupation",
          "name": "Technology Entrepreneur",
          "description": "Founder and CEO specializing in digital transformation and technology solutions"
        },
        "award": [
          "25+ Industry Awards",
          "Tech Visionary Recognition",
          "Digital Innovation Leader"
        ],
        "alumniOf": "Technology and Business Development",
        "nationality": "Nigerian"
      },
      {
        "@type": "WebSite",
        "@id": "https://acehubtechnologies.com/#website",
        "url": "https://acehubtechnologies.com",
        "name": "Prince Chukwuemeka - AceHub Technologies Ltd",
        "description": "Official website of Prince Chukwuemeka and AceHub Technologies Ltd - Leading tech solutions, training, and digital innovation.",
        "publisher": {
          "@id": "https://acehubtechnologies.com/#organization"
        },
        "potentialAction": [
          {
            "@type": "SearchAction",
            "target": {
              "@type": "EntryPoint",
              "urlTemplate": "https://acehubtechnologies.com/search?q={search_term_string}"
            },
            "query-input": "required name=search_term_string"
          }
        ],
        "inLanguage": "en-US"
      },
      {
        "@type": "WebPage",
        "@id": "https://acehubtechnologies.com/#webpage",
        "url": "https://acehubtechnologies.com",
        "name": "Prince Chukwuemeka - Tech Visionary & Founder of AceHub Technologies Ltd",
        "isPartOf": {
          "@id": "https://acehubtechnologies.com/#website"
        },
        "about": {
          "@id": "https://acehubtechnologies.com/#founder"
        },
        "description": "Meet Prince Chukwuemeka, the visionary founder behind AceHub Technologies Ltd. Expert in full-stack development, data analytics, cybersecurity, and business strategy with 10+ years of transformative experience.",
        "breadcrumb": {
          "@type": "BreadcrumbList",
          "itemListElement": [
            {
              "@type": "ListItem",
              "position": 1,
              "name": "Home",
              "item": "https://acehubtechnologies.com"
            }
          ]
        },
        "mainEntity": {
          "@id": "https://acehubtechnologies.com/#founder"
        }
      }
    ]
  };

  return (
    <html lang="en">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
        />
        <link rel="canonical" href="https://acehubtechnologies.com" />
        <link rel="icon" href="/favicon.ico" />
        <link rel="apple-touch-icon" href="/assets/images/acehub.png" />
        <link rel="manifest" href="/manifest.json" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="author" content="Prince Chukwuemeka" />
        <meta name="copyright" content="Prince Chukwuemeka - AceHub Technologies Ltd" />
        <meta name="owner" content="Prince Chukwuemeka" />
        <meta name="designer" content="Prince Chukwuemeka" />
        <meta name="developer" content="Prince Chukwuemeka" />
        <meta name="reply-to" content="prince@acehubtechnologies.co.uk" />
        <meta name="revisit-after" content="7 days" />
        <meta name="distribution" content="global" />
        <meta name="rating" content="general" />
        <meta name="referrer" content="origin-when-cross-origin" />
        <meta name="format-detection" content="telephone=no" />
        <meta name="HandheldFriendly" content="True" />
        <meta name="MobileOptimized" content="320" />
        <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
        
        {/* Additional Prince Chukwuemeka specific meta tags */}
        <meta name="person" content="Prince Chukwuemeka" />
        <meta name="contact" content="Prince Chukwuemeka" />
        <meta name="executive" content="Prince Chukwuemeka, CEO" />
        <meta name="founder" content="Prince Chukwuemeka" />
        <meta name="expert" content="Prince Chukwuemeka - Technology Expert" />
        <meta name="specialist" content="Prince Chukwuemeka - Digital Innovation Specialist" />
        
        {/* Business specific meta tags */}
        <meta name="company" content="AceHub Technologies Ltd - Founded by Prince Chukwuemeka" />
        <meta name="business.name" content="AceHub Technologies" />
        <meta name="business.founder" content="Prince Chukwuemeka" />
        <meta name="business.ceo" content="Prince Chukwuemeka" />
        <meta name="business.owner" content="Prince Chukwuemeka" />
        
        {/* Location meta tags */}
        <meta name="geo.region" content="GB-ENG" />
        <meta name="geo.placename" content="London, United Kingdom" />
        <meta name="ICBM" content="51.5074, -0.1278" />
        
        {/* Professional meta tags */}
        <meta name="professional.name" content="Prince Chukwuemeka" />
        <meta name="professional.title" content="Founder & CEO, Tech Visionary" />
        <meta name="professional.company" content="AceHub Technologies Ltd" />
        <meta name="professional.experience" content="10+ Years in Technology" />
        <meta name="professional.expertise" content="Full-Stack Development, Data Analytics, Cybersecurity, Business Strategy" />
        
        {/* Achievement meta tags */}
        <meta name="achievements" content="750+ Projects, 1500+ Professionals Trained, 25+ Awards" />
        <meta name="recognition" content="Tech Visionary, Digital Innovation Expert" />
        <meta name="leadership" content="Prince Chukwuemeka - Technology Leader" />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
