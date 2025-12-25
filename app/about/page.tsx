"use client"

import { Objectives } from "@/components/home/Objectives"
import { motion } from "framer-motion"
import Image from "next/image"

export default function AboutPage() {
    return (
        <div className="container py-12 md:py-20">
            <motion.div
                className="max-w-3xl mx-auto text-center mb-16 space-y-4"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
            >
                <h1 className="text-4xl font-bold tracking-tight text-primary">About Pacer Field Plc</h1>
                <p className="text-xl text-muted-foreground">
                    Committed to export-focused agricultural production supporting Ethiopia’s development.
                </p>
            </motion.div>

            <div className="grid lg:grid-cols-2 gap-12 items-center mb-24">
                <motion.div
                    className="prose prose-lg text-muted-foreground"
                    initial={{ opacity: 0, x: -30 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.6, delay: 0.2 }}
                >
                    <p>
                        Ethiopia’s economy is mainly based on agriculture with growing industrial development. The national strategy recognizes agriculture and industry as complementary sectors.
                    </p>
                    <p>
                        Industrial development is expected to take the leading position in the near future, while agriculture remains a key source of raw materials and foreign currency supply.
                    </p>
                    <p>
                        <strong>Pacer Field Plc</strong> contributes to this vision by investing in organic chia seed production for export and local markets, driving value creation from the farm level up.
                    </p>
                </motion.div>
                <motion.div
                    className="w-full rounded-2xl overflow-hidden shadow-xl border"
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.8, delay: 0.4 }}
                >
                    <Image
                        src="/20250830_135546.jpg"
                        alt="Pacer Field Farm in South Omo"
                        width={2000}
                        height={1333}
                        className="w-full h-auto hover:scale-105 transition-transform duration-700"
                    />
                </motion.div>
            </div>

            <Objectives />
        </div>
    )
}
