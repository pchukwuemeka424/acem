import { Metadata } from 'next'
import Navigation from '@/components/layout/Navigation';
import Hero from '@/components/sections/Hero';
import Services from '@/components/sections/Services';
import Projects from '@/components/sections/Projects';
import About from '@/components/sections/About';
import Founder from '@/components/sections/Founder';
import Contact from '@/components/sections/Contact';
import Footer from '@/components/layout/Footer';

export const metadata: Metadata = {
  title: 'Prince Chukwuemeka - AceHub Technologies Ltd | Tech Visionary & Digital Innovation Expert',
  description: 'Meet Prince Chukwuemeka, founder of AceHub Technologies Ltd. Expert in web development, mobile apps, data analytics, cybersecurity & business analysis. 750+ projects, 1500+ professionals trained worldwide.',
  keywords: 'Prince Chukwuemeka, AceHub Technologies Ltd, tech visionary, web development, mobile development, data analytics, cybersecurity, business analysis, digital innovation, CEO, founder',
  alternates: {
    canonical: 'https://acehubtechnologies.com',
  },
  openGraph: {
    title: 'Prince Chukwuemeka - Tech Visionary & Founder of AceHub Technologies Ltd',
    description: 'Meet Prince Chukwuemeka, the visionary behind AceHub Technologies Ltd. 10+ years experience in tech, 750+ successful projects, and 1500+ professionals trained.',
    url: 'https://acehubtechnologies.com',
    images: ['/assets/images/prince_chukwuemeka.jpeg'],
  },
  twitter: {
    title: 'Prince Chukwuemeka - Tech Visionary & AceHub Ltd Founder',
    description: 'Prince Chukwuemeka, CEO of AceHub Technologies Ltd. Expert in web development, mobile apps, data analytics & cybersecurity.',
  },
}

export default function Home() {
  return (
    <main className="min-h-screen">
      <Navigation />
      <Hero />
      <div className="relative z-10">
        <Services />
        <Projects />
        <About />
        <Founder />
        <Contact />
      </div>
      <Footer />
    </main>
  );
}
