import type { Metadata } from "next";
import { SiteFooter } from "@/components/site-footer";
import { SiteHeader } from "@/components/site-header";
import { business } from "@/data/site";
import "./globals.css";

export const metadata: Metadata = {
  title: {
    default: "4 Corners Landscaping | Landscaping in West Valley City, Utah",
    template: `%s`,
  },
  description: business.summary,
  keywords: [
    "4 Corners Landscaping",
    "landscaping West Valley City",
    "landscape contractor Utah",
    "backyard remodel West Valley City",
    "new construction landscaping",
  ],
  openGraph: {
    title: "4 Corners Landscaping",
    description: business.summary,
    type: "website",
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title: "4 Corners Landscaping",
    description: business.summary,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <SiteHeader />
        <div>
          {children}
          <SiteFooter />
        </div>
      </body>
    </html>
  );
}
