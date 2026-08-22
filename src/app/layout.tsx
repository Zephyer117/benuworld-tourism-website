import type { Metadata } from "next";
import { Fraunces, Inter } from "next/font/google";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import SiteFrame from "@/components/layout/SiteFrame";
import PageLoader from "@/components/ui/PageLoader";
import { LanguageProvider } from "@/contexts/LanguageContext";
import GlobalTranslator from "@/components/ui/GlobalTranslator";
import { ToastProvider } from "@/components/ui/Toast";
import "./globals.css";

const fraunces = Fraunces({
  variable: "--font-display",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  display: "swap",
});

const inter = Inter({
  variable: "--font-body",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "BenuWorld - Tourism, Investment & Education Consultancy",
  description: "Bangladesh-based consultancy operating across Inbound Tourism, Outbound Tourism, Foreign Investment, and Teaching Curriculum services.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html
      lang="en"
      className={`${fraunces.variable} ${inter.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col bg-bg-warm-white text-text-ink" suppressHydrationWarning>
        <ToastProvider>
          <LanguageProvider>
            <GlobalTranslator>
              <SiteFrame header={<Header />} footer={<Footer />}>
                {children}
              </SiteFrame>
            </GlobalTranslator>
          </LanguageProvider>
        </ToastProvider>
      </body>
    </html>
  );
}
