"use client"

import Image from "next/image"
import { motion } from "framer-motion"

export function Hero() {
    return (
        <section className="relative w-full h-[80vh] min-h-[600px] flex items-center overflow-hidden">
            {/* Background Image */}
            <div className="absolute inset-0 z-0">
                <Image
                    src="/20250830_135245.jpg"
                    alt="Pacer Field Organic Farm"
                    fill
                    className="object-cover brightness-[0.65]"
                    priority
                />
                <div className="absolute inset-0 bg-gradient-to-r from-black/60 via-black/20 to-transparent" />
            </div>

            <div className="container relative z-10 px-4 sm:px-6 lg:px-8">
                <motion.div
                    className="max-w-3xl space-y-6"
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, ease: "easeOut" }}
                >
                    <div className="space-y-4">
                        <motion.span
                            className="inline-block px-4 py-1.5 bg-primary/20 backdrop-blur-md border border-white/20 rounded-full text-white text-sm font-bold tracking-wider uppercase"
                            initial={{ opacity: 0, x: -20 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ delay: 0.2 }}
                        >
                            Organic Certified • Ethiopia
                        </motion.span>
                        <motion.h1
                            className="text-5xl sm:text-6xl lg:text-9xl font-black tracking-tighter text-white leading-[0.9] uppercase"
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.3, duration: 0.6 }}
                        >
                            PURE ORGANIC <br />
                            <span className="text-white/40">CHIA SEED.</span>
                        </motion.h1>
                        <motion.p
                            className="text-xl md:text-2xl text-white/80 max-w-[500px] leading-relaxed font-medium"
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.4, duration: 0.6 }}
                        >
                            200 hectares of dedicated organic cultivation in South Omo. Premium export quality directly from Ethiopia.
                        </motion.p>
                    </div>
                </motion.div>
            </div>

            {/* Removed bottom gradient to make transition cleaner */}
        </section>
    )
}
