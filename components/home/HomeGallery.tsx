"use client"

import Image from "next/image"
import Link from "next/link"
import { motion } from "framer-motion"
import { ArrowRight } from "lucide-react"

const photos = [
    { src: "/photo_1_2025-12-25_09-23-26.jpg", alt: "Farm Landscape" },
    { src: "/photo_2_2025-12-25_09-23-05.jpg", alt: "Production Process" },
    { src: "/photo_3_2025-12-25_09-23-26.jpg", alt: "Chia Seed Close-up" },
    { src: "/photo_4_2025-12-25_09-23-26.jpg", alt: "Farm Operations" },
    { src: "/photo_1_2025-12-25_09-23-05.jpg", alt: "Export Quality" },
    { src: "/photo_2_2025-12-25_09-23-26.jpg", alt: "Farming Activities" },
]

export function HomeGallery() {
    return (
        <section className="container py-16 md:py-24">
            <motion.div
                className="text-center mb-12"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
            >
                <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-4 text-primary">Farm in Action</h2>
                <div className="h-1.5 w-12 bg-primary mx-auto mb-6 rounded-full" />
                <p className="text-muted-foreground max-w-2xl mx-auto">
                    A glimpse into our 200-hectare organic farm in South Omo, Ethiopia. High-quality production from soil to seed.
                </p>
            </motion.div>

            <div className="grid grid-cols-2 md:grid-cols-3 gap-4 md:gap-6">
                {photos.map((photo, i) => (
                    <motion.div
                        key={i}
                        className="relative aspect-square rounded-2xl overflow-hidden shadow-sm group"
                        initial={{ opacity: 0, scale: 0.9 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5, delay: i * 0.1 }}
                    >
                        <Image
                            src={photo.src}
                            alt={photo.alt}
                            fill
                            className="object-cover transition-transform duration-700 group-hover:scale-110"
                        />
                        <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                    </motion.div>
                ))}
            </div>

            <motion.div
                className="mt-12 text-center"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.5 }}
            >
                <Link
                    href="/farm-traceability"
                    className="group inline-flex items-center text-primary font-bold text-lg hover:underline underline-offset-8 decoration-2 transition-all"
                >
                    Learn more about our operations
                    <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-2" />
                </Link>
            </motion.div>
        </section>
    )
}
