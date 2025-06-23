import type { Metadata } from "next";
import {
  Wix_Madefor_Display,
  Wix_Madefor_Text,
  IBM_Plex_Sans,
  Space_Mono,
} from "next/font/google";
import { MainLayout } from "@/widgets/main-layout";
import "./globals.css";

const wixMadeforDisplay = Wix_Madefor_Display({
  variable: "--font-wix-madefor-display",
  subsets: ["latin", "cyrillic"],
  weight: ["500", "600", "700"],
});

const wixMadeforText = Wix_Madefor_Text({
  variable: "--font-wix-madefor-text",
  subsets: ["latin", "cyrillic"],
  weight: ["400", "500", "600"],
  style: ["normal", "italic"],
});

const ibmPlexSans = IBM_Plex_Sans({
  variable: "--font-ibm-plex-sans",
  subsets: ["latin"],
  weight: ["400", "500"],
});

const spaceMono = Space_Mono({
  variable: "--font-space-mono",
  subsets: ["latin"],
  weight: ["400"],
});

export const metadata: Metadata = {
  title: {
    default: "CodeReview - IT вакансии для джуниоров",
    template: "%s | CodeReview",
  },
  description:
    "Лучшие IT вакансии, стажировки и тестовые задания для джуниор разработчиков. Более 100k специалистов находят работу через нас.",
  keywords: [
    "IT вакансии",
    "джуниор разработчик",
    "стажировки",
    "тестовые задания",
    "junior developer",
    "программист без опыта",
  ],
  authors: [{ name: "CodeReview" }],
  creator: "CodeReview",
  publisher: "CodeReview",
  metadataBase: new URL(
    process.env.NEXT_PUBLIC_DOMAIN || "http://localhost:3000"
  ),
  openGraph: {
    type: "website",
    locale: "ru_RU",
    url: process.env.NEXT_PUBLIC_DOMAIN || "http://localhost:3000",
    title: "CodeReview - IT вакансии для джуниоров",
    description:
      "Лучшие IT вакансии, стажировки и тестовые задания для джуниор разработчиков. Более 100k специалистов находят работу через нас.",
    siteName: "CodeReview",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "CodeReview - IT вакансии для джуниоров",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "CodeReview - IT вакансии для джуниоров",
    description:
      "Лучшие IT вакансии, стажировки и тестовые задания для джуниор разработчиков. Более 100k специалистов находят работу через нас.",
    images: ["/og-image.png"],
  },
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
  category: "technology",
  classification: "IT Recruitment Platform",
  other: {
    "apple-mobile-web-app-title": "CodeReview",
    "application-name": "CodeReview",
    "msapplication-TileColor": "#6366f1",
    "theme-color": "#6366f1",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ru">
      <body
        className={`${wixMadeforDisplay.variable} ${wixMadeforText.variable} ${ibmPlexSans.variable} ${spaceMono.variable} antialiased`}
      >
        <MainLayout>{children}</MainLayout>
      </body>
    </html>
  );
}
