"use client";

import Image from "next/image";
import Link from "next/link";
import { Menu, X, ArrowUpRight } from "lucide-react";
import { useState } from "react";

const links = [
  { href: "/", label: "Ana Sayfa" },
  { href: "/hakkimizda", label: "Hakkımızda" },
  { href: "/egitimler", label: "Eğitimler" },
  { href: "/egitmenler", label: "Eğitmenler" },
  { href: "/galeri", label: "Galeri" },
  { href: "/etkinlikler", label: "Etkinlikler" },
];

export function Navbar() {
  const [open, setOpen] = useState(false);
  return <header className="fixed inset-x-0 top-0 z-50 px-4 pt-4"><div className="mx-auto flex max-w-7xl items-center justify-between rounded-full border border-ink/10 bg-cream/90 px-5 py-3 shadow-soft backdrop-blur-xl lg:px-7">
    <Link href="/" className="flex items-center gap-3 font-display text-lg font-bold leading-none" onClick={() => setOpen(false)}>
      <span className="grid h-10 w-10 place-items-center overflow-hidden rounded-full bg-black shadow-sm"><Image src="/images/original-logo.png" alt="Harika Sanat Akademisi orijinal logosu" width={40} height={40} className="h-full w-full object-cover" /></span>
      <span>HARİKA<br /><span className="text-violet">SANAT AKADEMİSİ</span></span>
    </Link>
    <nav className="hidden items-center gap-6 lg:flex">{links.slice(1).map((link) => <Link key={link.href} href={link.href} className="text-sm font-bold text-ink/70 transition hover:text-violet">{link.label}</Link>)}<Link href="/basvuru" className="rounded-full bg-ink px-5 py-3 text-sm font-bold text-white transition hover:bg-violet">Başvur <ArrowUpRight className="ml-1 inline" size={15} /></Link></nav>
    <button className="grid h-10 w-10 place-items-center rounded-full bg-ink text-white lg:hidden" onClick={() => setOpen(!open)} aria-label="Menüyü aç">{open ? <X size={20} /> : <Menu size={20} />}</button>
    {open && <nav className="absolute left-0 right-0 top-[72px] rounded-3xl border border-ink/10 bg-cream p-4 shadow-soft lg:hidden">{links.map((link) => <Link key={link.href} href={link.href} onClick={() => setOpen(false)} className="block rounded-2xl px-4 py-3 font-bold hover:bg-yellow">{link.label}</Link>)}<Link href="/basvuru" onClick={() => setOpen(false)} className="mt-2 block rounded-2xl bg-violet px-4 py-3 font-bold text-white">Başvuru yap</Link></nav>}
  </div></header>;
}
