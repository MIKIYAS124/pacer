"use client"

import Link from "next/link"
import Image from "next/image"
import { ArrowRight, CheckCircle2 } from "lucide-react"
import { Button } from "@/components/ui/button"
import { motion } from "framer-motion"

export function Hero() {
    return (
        <section className="container grid lg:grid-cols-2 gap-8 items-center py-12 md:py-20 lg:py-24 overflow-hidden">
            <motion.div
                className="space-y-6"
                initial={{ opacity: 0, x: -50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, ease: "easeOut" }}
            >
                <motion.h1
                    className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-primary"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.2, duration: 0.5 }}
                >
                    Organic Chia Seed from Ethiopia — Export & Local Supply
                </motion.h1>
                <motion.p
                    className="text-xl text-muted-foreground max-w-[600px]"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.3, duration: 0.5 }}
                >
                    200-hectare organic farm in South West Ethiopia (South Omo Zone, Menite Goldiya).
                </motion.p>
                <motion.ul
                    className="space-y-2 text-muted-foreground"
                    initial="hidden"
                    animate="visible"
                    variants={{
                        hidden: { opacity: 0 },
                        visible: {
                            opacity: 1,
                            transition: {
                                delayChildren: 0.4,
                                staggerChildren: 0.1
                            }
                        }
                    }}
                >
                    {[
                        "Bulk organic chia seed production",
                        "Traceability-first operations",
                        "Supports foreign exchange generation and job creation"
                    ].map((item, i) => (
                        <motion.li
                            key={i}
                            className="flex items-center gap-2"
                            variants={{
                                hidden: { opacity: 0, x: -20 },
                                visible: { opacity: 1, x: 0 }
                            }}
                        >
                            <CheckCircle2 className="h-5 w-5 text-accent" />
                            {item}
                        </motion.li>
                    ))}
                </motion.ul>
                <motion.div
                    className="flex flex-col sm:flex-row gap-4 pt-4"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.8, duration: 0.5 }}
                >
                    <Button size="lg" asChild className="bg-primary hover:bg-primary/90 transition-transform hover:scale-105">
                        <Link href="/contact">
                            Request Quote <ArrowRight className="ml-2 h-4 w-4" />
                        </Link>
                    </Button>
                    <Button size="lg" variant="outline" asChild className="transition-transform hover:scale-105">
                        <Link href="/contact">Contact Us</Link>
                    </Button>
                </motion.div>
            </motion.div>

            <motion.div
                className="relative aspect-square lg:aspect-[4/3] w-full overflow-hidden rounded-2xl bg-muted/20"
                initial={{ opacity: 0, scale: 0.8, rotate: 5 }}
                animate={{ opacity: 1, scale: 1, rotate: 0 }}
                transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
            >
                {/* Placeholder for 3D or Hero Image - Using provided mockup or fallback */}
                <div className="absolute inset-0 flex items-center justify-center">
                    <Image
                        src="/chia%20seed%20mockup%20purple.png"
                        alt="Organic Chia Seed Bag"
                        width={800}
                        height={800}
                        className="object-contain w-full h-full p-8"
                        priority
                    />
                </div>
            </motion.div>
        </section>
    )
}
