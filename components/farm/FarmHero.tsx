"use client"

import { motion } from "framer-motion"

export function FarmHero() {
    return (
        <section className="bg-muted/30 py-16 md:py-24 relative overflow-hidden">
            <motion.div
                className="container text-center relative z-10"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, ease: "easeOut" }}
            >
                <motion.h1
                    className="text-4xl sm:text-5xl font-bold tracking-tight text-primary mb-6"
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.6, delay: 0.2 }}
                >
                    Farm & Traceability
                </motion.h1>
                <motion.p
                    className="text-xl text-muted-foreground max-w-2xl mx-auto"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 0.6, delay: 0.4 }}
                >
                    200 hectares — South Omo Zone, Menite Goldiya (South West Ethiopia).
                </motion.p>
            </motion.div>

            {/* Abstract Background Element Animation */}
            <motion.div
                className="absolute top-0 left-0 w-full h-full bg-gradient-to-b from-primary/5 to-transparent pointer-events-none"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 1.5 }}
            />
        </section>
    )
}
