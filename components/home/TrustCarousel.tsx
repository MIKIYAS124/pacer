"use client"

import * as React from "react"
import { motion } from "framer-motion"

const trustSignals = [
    "Traceability-focused operations",
    "Clear export communication (MOQ, lead time)",
    "Consistent packaging options",
    "Buyer-first responsiveness",
    "Stable supply planning",
    "Organic farming practices",
    "Dedicated export support"
]

export function TrustCarousel() {
    return (
        <section className="py-10 border-y bg-accent/5 overflow-hidden">
            <div className="container relative overflow-hidden">
                <div className="absolute left-0 top-0 bottom-0 w-20 bg-gradient-to-r from-background to-transparent z-10" />
                <div className="absolute right-0 top-0 bottom-0 w-20 bg-gradient-to-l from-background to-transparent z-10" />

                <div className="flex">
                    <motion.div
                        className="flex gap-16 whitespace-nowrap"
                        animate={{ x: "-50%" }}
                        transition={{
                            repeat: Infinity,
                            ease: "linear",
                            duration: 30
                        }}
                    >
                        {[...trustSignals, ...trustSignals].map((signal, i) => (
                            <span key={i} className="text-lg font-medium text-muted-foreground flex items-center gap-2">
                                <span className="h-1.5 w-1.5 rounded-full bg-primary/50" />
                                {signal}
                            </span>
                        ))}
                    </motion.div>
                    {/* Duplicate for seamless loop if needed, but the x: -50% with doubled array usually handles it */}
                </div>
            </div>
        </section>
    )
}
