import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import CookieConsent from "@/components/CookieConsent";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL('https://caymanyoga.com'),
  title: {
    default: "Cayman Yoga - Find the Best Yoga Teachers in Cayman Islands",
    template: "%s | Cayman Yoga"
  },
  description: "Discover certified yoga instructors and classes across Grand Cayman, Cayman Brac, and Little Cayman. Browse teachers specializing in Hatha, Vinyasa, Yin, Hot Yoga, and more.",
  keywords: ["yoga cayman islands", "yoga teachers cayman", "grand cayman yoga", "cayman yoga classes", "yoga instructors cayman", "hatha yoga cayman", "vinyasa cayman", "hot yoga cayman", "beach yoga cayman", "yoga studios cayman"],
  authors: [{ name: "Cayman Yoga" }],
  creator: "Cayman Yoga",
  publisher: "Cayman Yoga",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://caymanyoga.com",
    siteName: "Cayman Yoga",
    title: "Find the Best Yoga Teachers in Cayman Islands",
    description: "Connect with certified yoga instructors offering personalized classes across the Cayman Islands. Discover your perfect yoga teacher today.",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Cayman Yoga - Find Your Perfect Yoga Teacher",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Find the Best Yoga Teachers in Cayman Islands",
    description: "Connect with certified yoga instructors offering personalized classes across the Cayman Islands.",
    images: ["/og-image.jpg"],
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
  verification: {
    google: "your-google-verification-code",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
        <CookieConsent />
      </body>
    </html>
  );
}
