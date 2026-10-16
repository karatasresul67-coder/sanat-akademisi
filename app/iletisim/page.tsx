import Link from "next/link";
import { ArrowUpRight, Camera, MapPin, Phone, MessageCircle } from "lucide-react";
import { MotionIn } from "@/components/motion";

const phone = "+905322083601";
const whatsapp = "https://wa.me/905322083601";
const instagram = "https://www.instagram.com/harikasanatakademisi?exln=MWttbjFsbW5lZzQwZA==";
const maps = "https://maps.app.goo.gl/KP1x87QtofhrygkD7";

export default function ContactPage() {
  return <main className="bg-cream px-6 pb-24 pt-36 lg:px-10">
    <div className="mx-auto max-w-7xl">
      <MotionIn><span className="rounded-full bg-yellow px-3 py-2 text-xs font-bold uppercase tracking-widest">İletişim</span><h1 className="mt-6 max-w-3xl font-display text-6xl font-bold tracking-[-.08em] sm:text-8xl">Bir fikrin mi<br /><span className="text-orange">var?</span></h1></MotionIn>
      <div className="mt-14 grid gap-8 lg:grid-cols-[.8fr_1.2fr]">
        <MotionIn className="rounded-3xl bg-ink p-8 text-white shadow-soft"><h2 className="font-display text-3xl font-bold">Harika&apos;ya ulaş</h2><div className="mt-8 grid gap-6"><Info icon={<Phone />} title="Telefon" value="+90 (532) 208 36 01" href={`tel:${phone}`} /><Info icon={<MessageCircle />} title="WhatsApp" value="Hızlıca mesaj gönder" href={whatsapp} external /><Info icon={<MapPin />} title="Konum" value="Google Maps&apos;te yol tarifi al" href={maps} external /><Info icon={<Camera />} title="Instagram" value="@harikasanatakademisi" href={instagram} external /></div></MotionIn>
        <MotionIn delay={.12} className="relative overflow-hidden rounded-3xl bg-violet shadow-soft"><div className="absolute -right-20 -top-20 h-64 w-64 animate-float rounded-full bg-yellow/70 blur-2xl" /><div className="absolute -bottom-20 -left-12 h-64 w-64 animate-float rounded-full bg-turquoise/70 blur-2xl [animation-delay:1.2s]" /><div className="relative grid min-h-[480px] place-items-center p-8 text-center text-white"><div><MapPin size={48} className="mx-auto animate-bounce" /><h2 className="mt-5 font-display text-4xl font-bold">Halkalı&apos;da<br />buluşalım.</h2><p className="mt-4 max-w-sm text-white/80">Stüdyomuza gelmek için Google Haritalar&apos;daki konumumuzu aç.</p><div className="mt-7 flex flex-wrap justify-center gap-3"><Link href={maps} target="_blank" className="rounded-full bg-white px-5 py-3 font-bold text-violet">Haritada aç <ArrowUpRight className="ml-2 inline" size={17} /></Link><Link href={instagram} target="_blank" className="rounded-full border border-white/40 px-5 py-3 font-bold text-white"><Camera className="mr-2 inline" size={17} />Instagram</Link></div></div></div></MotionIn>
      </div>
    </div>
  </main>;
}
function Info({ icon, title, value, href, external = false }: { icon: React.ReactNode; title: string; value: string; href: string; external?: boolean }) { return <Link href={href} target={external ? "_blank" : undefined} rel={external ? "noreferrer" : undefined} className="group flex gap-4 border-b border-white/15 pb-4 transition hover:translate-x-2"><span className="text-yellow transition group-hover:scale-110">{icon}</span><span><span className="block text-xs uppercase tracking-widest text-white/50">{title}</span><span className="mt-1 block font-bold">{value}</span></span></Link>; }
