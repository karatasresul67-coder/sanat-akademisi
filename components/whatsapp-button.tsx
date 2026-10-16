import Link from "next/link";
import { MessageCircle } from "lucide-react";

export function WhatsAppButton() {
  return <Link href="https://wa.me/905322083601" target="_blank" rel="noreferrer" aria-label="WhatsApp ile iletişime geç" className="fixed bottom-5 right-5 z-40 grid h-14 w-14 animate-pulse place-items-center rounded-full bg-[#25D366] text-white shadow-lg transition hover:scale-110"><MessageCircle size={27} /></Link>;
}
