'use client';

import Head from 'next/head';

interface SEOComponentProps {
  title?: string;
  description?: string;
  keywords?: string;
  canonical?: string;
  ogImage?: string;
  ogType?: string;
  twitterCard?: string;
  structuredData?: object;
}

const SEOComponent: React.FC<SEOComponentProps> = ({
  title = "Prince Chukwuemeka - AceHub Technologies Ltd | Tech Visionary & Digital Innovation Expert",
  description = "Prince Chukwuemeka, Founder & CEO of AceHub Technologies Ltd. Expert in web development, mobile apps, data analytics, cybersecurity & business analysis.",
  keywords = "Prince Chukwuemeka, AceHub Technologies Ltd, tech visionary, web development, mobile development, data analytics, cybersecurity",
  canonical = "https://acehubtechnologies.com",
  ogImage = "/assets/images/prince_chukwuemeka.jpeg",
  ogType = "website",
  twitterCard = "summary_large_image",
  structuredData
}) => {
  return (
    <Head>
      {/* Core Meta Tags with Prince Chukwuemeka */}
      <title>{title}</title>
      <meta name="description" content={description} />
      <meta name="keywords" content={keywords} />
      <meta name="author" content="Prince Chukwuemeka" />
      <meta name="creator" content="Prince Chukwuemeka" />
      <meta name="founder" content="Prince Chukwuemeka" />
      <meta name="owner" content="Prince Chukwuemeka" />
      <link rel="canonical" href={canonical} />

      {/* Open Graph Meta Tags */}
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={ogImage} />
      <meta property="og:type" content={ogType} />
      <meta property="og:url" content={canonical} />
      <meta property="og:site_name" content="AceHub Technologies Ltd - Prince Chukwuemeka" />
      
      {/* Twitter Card Meta Tags */}
      <meta name="twitter:card" content={twitterCard} />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={ogImage} />
      <meta name="twitter:creator" content="@prince_chukwuemeka" />
      <meta name="twitter:site" content="@acehub_tech" />

      {/* Additional Prince Chukwuemeka Meta Tags */}
      <meta name="person" content="Prince Chukwuemeka" />
      <meta name="executive" content="Prince Chukwuemeka, CEO" />
      <meta name="expert" content="Prince Chukwuemeka - Technology Expert" />
      <meta name="specialist" content="Prince Chukwuemeka - Digital Innovation Specialist" />
      <meta name="professional.name" content="Prince Chukwuemeka" />
      <meta name="professional.title" content="Founder & CEO, Tech Visionary" />
      <meta name="professional.company" content="AceHub Technologies Ltd" />

      {/* Structured Data */}
      {structuredData && (
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
        />
      )}
    </Head>
  );
};

export default SEOComponent;
