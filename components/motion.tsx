"use client";
import { motion } from "framer-motion";
import type { PropsWithChildren } from "react";
export function MotionIn({children,className="",delay=0}:{children:React.ReactNode;className?:string;delay?:number}){ return <motion.div className={className} initial={{opacity:0,y:22}} whileInView={{opacity:1,y:0}} viewport={{once:true,amount:.12}} transition={{duration:.65,delay,ease:[.22,1,.36,1]}}>{children}</motion.div> }
export function MotionStagger({children,className=""}:PropsWithChildren<{className?:string}>){ return <motion.div className={className} initial="hidden" whileInView="show" viewport={{once:true,amount:.1}} variants={{hidden:{},show:{transition:{staggerChildren:.06}}}}>{children}</motion.div> }
