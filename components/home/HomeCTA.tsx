"use client"

import Link from "next/link"
import Image from "next/image"
import { ArrowRight } from "lucide-react"
import { Button } from "@/components/ui/button"
import { motion } from "framer-motion"

export function HomeCTA() {
    return (
        <section className="container py-20 md:py-32">
            <motion.div
                className="relative rounded-[2.5rem] p-8 md:p-16 lg:p-24 text-center text-white overflow-hidden"
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
            >
                {/* Background Image with Overlay */}
                <div className="absolute inset-0 z-0">
                    <Image
                        src="/20250830_135245.jpg"
                        alt="Join the Pacer Field Supply Chain"
                        fill
                        className="object-cover brightness-[0.3]"
                    />
                    <div className="absolute inset-0 bg-primary/60 mix-blend-multiply" />
                </div>

                <div className="relative z-10 max-w-2xl mx-auto space-y-8">
                    <motion.h2
                        className="text-3xl md:text-5xl lg:text-6xl font-black tracking-tight leading-tight uppercase"
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.2 }}
                    >
                        Source Your <br />
                        <span className="text-white/60">Premium Organic Chia</span>
                    </motion.h2>
                    <motion.p
                        className="text-xl text-white/80 font-medium"
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.3 }}
                    >
                        Whether you need bulk export supply or local distribution, we provide pure, traceable organic chia seeds directly from our Ethiopian farm.
                    </motion.p>
                    <motion.div
                        className="flex flex-col sm:flex-row gap-4 justify-center pt-4"
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.4 }}
                    >
                        <Button size="lg" asChild className="bg-white text-primary hover:bg-white/90 h-16 px-10 text-xl font-bold rounded-2xl shadow-xl transition-all hover:scale-105 active:scale-95">
                            <Link href="/contact">
                                Request Quote <ArrowRight className="ml-2 h-6 w-6" />
                            </Link>
                        </Button>
                    </motion.div>
                </div>
            </motion.div>
        </section>
    )
}
