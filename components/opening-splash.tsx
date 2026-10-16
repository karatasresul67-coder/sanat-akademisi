"use client";

import Image from "next/image";
import { AnimatePresence, motion } from "framer-motion";
import { useEffect, useState } from "react";

const logo = "/images/original-logo.png";

export function OpeningSplash() {
  const [visible, setVisible] = useState(false);
  const [closing, setClosing] = useState(false);

  useEffect(() => {
    const timer = window.setTimeout(() => {
      setVisible(true);
    }, 0);
    return () => window.clearTimeout(timer);
  }, []);

  useEffect(() => {
    if (!visible) return;
    const timer = window.setTimeout(() => {
      setClosing(true);
      window.setTimeout(() => setVisible(false), 850);
    }, 5050);
    return () => window.clearTimeout(timer);
  }, [visible]);

  function finish() {
    if (closing) return;
    setClosing(true);
    window.setTimeout(() => setVisible(false), 850);
  }

  return <AnimatePresence>
    {visible && <motion.div className="fixed inset-0 z-[100] grid place-items-center overflow-hidden bg-black" initial={{ opacity: 1 }} animate={{ opacity: closing ? 0 : 1 }} exit={{ opacity: 0 }} transition={{ duration: .8, ease: "easeInOut" }}>
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_45%,rgba(108,59,255,.2),transparent_34%),#000]" />
      <motion.div className="relative flex flex-col items-center" animate={closing ? { x: "-43vw", y: "-43vh", scale: .16 } : { x: 0, y: 0, scale: 1 }} transition={{ duration: .8, ease: [.22, 1, .36, 1] }}>
        <motion.div className="absolute inset-0 h-[min(72vw,520px)] w-[min(72vw,520px)]" style={{ clipPath: "inset(0 0 0 39%)" }} initial={{ opacity: 0, x: 480, y: 50, rotate: 22, scale: .72 }} animate={{ opacity: [0, 1, 1, 1], x: [480, 300, 120, 0], y: [50, -24, 18, 0], rotate: [22, -16, 12, -4], scale: [.72, 1.04, 1.02, 1] }} transition={{ duration: 2.55, times: [0, .28, .68, 1], ease: "easeInOut" }}>
          <Image src={logo} alt="" fill priority className="object-contain" />
        </motion.div>
        <motion.div className="relative h-[min(72vw,520px)] w-[min(72vw,520px)]" initial={{ opacity: 0, scale: .92 }} animate={{ opacity: closing ? 1 : [0, 0, 1], scale: closing ? .98 : [0.92, .92, 1] }} transition={{ duration: closing ? .2 : 3.2, delay: closing ? 0 : 2.25, times: closing ? undefined : [0, .72, 1], ease: "easeOut" }}>
          <Image src={logo} alt="Harika Sanat Akademisi orijinal logosu" fill priority className="object-contain drop-shadow-[0_0_42px_rgba(255,255,255,.2)]" />
        </motion.div>
        <motion.p className="absolute -bottom-10 whitespace-nowrap font-display text-[clamp(.7rem,2vw,1.2rem)] font-bold tracking-[.28em] text-white" initial={{ opacity: 0, y: 12 }} animate={{ opacity: closing ? 0 : [0, 0, 1], y: closing ? 12 : [12, 12, 0] }} transition={{ duration: closing ? .2 : 3.4, delay: closing ? 0 : 2.7, times: closing ? undefined : [0, .75, 1] }}>HAYAL ET. ÜRET. SANATLA BÜYÜ.</motion.p>
      </motion.div>
      {!closing && <button type="button" onClick={finish} className="absolute bottom-8 right-8 rounded-full border border-white/30 px-4 py-2 text-xs font-bold uppercase tracking-widest text-white/70 transition hover:border-white hover:text-white">Geç</button>}
    </motion.div>}
  </AnimatePresence>;
}
