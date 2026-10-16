import type { Metadata } from "next";
import "./globals.css";
import { Navbar } from "@/components/navbar";
import { WhatsAppButton } from "@/components/whatsapp-button";
import { OpeningSplash } from "@/components/opening-splash";

export const metadata: Metadata = { title:"Harika Sanat Akademisi | Hayal Et. Üret. Sanatla Büyü.", description:"Harika Sanat Akademisi; müzik, görsel sanatlar, sahne ve dijital üretim alanlarında yaratıcı eğitimler sunar.", metadataBase:new URL(process.env.NEXT_PUBLIC_SITE_URL || "http://localhost:3000") };

export default function RootLayout({ children }:{children:React.ReactNode}) {
  return <html lang="tr"><body><OpeningSplash /><Navbar />{children}<WhatsAppButton /></body></html>;
}
