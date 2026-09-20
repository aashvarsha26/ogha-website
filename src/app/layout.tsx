import type { Metadata } from 'next';
import { Nunito } from 'next/font/google';
import './globals.css';
import { SITE_NAME, SITE_URL, DEFAULT_OG_IMAGE } from '@/lib/seo';

const nunito = Nunito({
  subsets: ['latin'],
  variable: '--font-nunito',
  display: 'swap',
});
import { QuoteModalProvider } from '@/context/QuoteModalContext';
import { Header } from '@/components/layout/Header';
import { Footer } from '@/components/layout/Footer';
import { QuoteModal } from '@/components/ui/QuoteModal';
import { StickyMobileBar } from '@/components/layout/StickyMobileBar';
import { WhatsAppFloat } from '@/components/layout/WhatsAppFloat';

const SITE_DESCRIPTION =
  'Hyderabad-based manufacturer of commercial RO control panels (manual, semi-automatic, OGHA SKY fully-automatic) and coin & UPI water vending machines (Water ATMs). IndiaMART 4.8★ rated.';

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: `${SITE_NAME} | RO Control Panels & Water Vending Machines Manufacturer Hyderabad`,
    template: `%s | ${SITE_NAME}`,
  },
  description: SITE_DESCRIPTION,
  keywords: [
    'RO control panel manufacturer',
    'water ATM manufacturer Hyderabad',
    'OGHA SKY RO panel',
    'water vending machine UPI',
    'RO plant controller price',
    'coin validator water ATM',
  ],
  applicationName: SITE_NAME,
  authors: [{ name: SITE_NAME, url: SITE_URL }],
  creator: SITE_NAME,
  publisher: SITE_NAME,
  formatDetection: { telephone: true, email: true, address: true },
  alternates: { canonical: SITE_URL },
  openGraph: {
    type: 'website',
    url: SITE_URL,
    siteName: SITE_NAME,
    title: `${SITE_NAME} | RO Control Panels & Water Vending Machines Manufacturer Hyderabad`,
    description: SITE_DESCRIPTION,
    locale: 'en_IN',
    images: [{ url: DEFAULT_OG_IMAGE, width: 1200, height: 630, alt: `${SITE_NAME} — RO Control Panels & Water Vending Machines` }],
  },
  twitter: {
    card: 'summary_large_image',
    title: `${SITE_NAME} | RO Control Panels & Water Vending Machines`,
    description: SITE_DESCRIPTION,
    images: [DEFAULT_OG_IMAGE],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  icons: { icon: '/ogha-logo.png', apple: '/ogha-logo.png' },
};

const organizationJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'Organization',
  name: SITE_NAME,
  url: SITE_URL,
  logo: `${SITE_URL}/ogha-logo.png`,
  image: `${SITE_URL}${DEFAULT_OG_IMAGE}`,
  description: SITE_DESCRIPTION,
  foundingDate: '2023',
  address: {
    '@type': 'PostalAddress',
    streetAddress: '1-7-170/5, 1st, 2nd and 3rd Floors, Beside More Supermarket, Kamala Nagar, ECIL',
    addressLocality: 'Hyderabad',
    addressRegion: 'Telangana',
    postalCode: '500062',
    addressCountry: 'IN',
  },
  contactPoint: {
    '@type': 'ContactPoint',
    telephone: '+91-9052797900',
    contactType: 'sales',
    areaServed: 'IN',
    availableLanguage: ['en', 'te', 'hi'],
  },
  sameAs: [
    'https://www.instagram.com/oghapowersolutions.pvt/',
    'https://www.facebook.com/people/Ogha-Power-Solutions-Pvt-Ltd/100089827943587/',
    'https://youtube.com/@oghapowersolutionsprivateltd',
    'https://www.linkedin.com/company/ogha-power-solutions-pvt-ltd/',
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={nunito.variable}>
      <body className={`${nunito.className} antialiased flex flex-col min-h-screen`}>
        <QuoteModalProvider>
          <Header />
          <main className="flex-1 pb-16 sm:pb-0">{children}</main>
          <StickyMobileBar />
          <WhatsAppFloat />
          <QuoteModal />
          <Footer />
          <script
            type="application/ld+json"
            dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationJsonLd) }}
          />
        </QuoteModalProvider>
      </body>
    </html>
  );
}
