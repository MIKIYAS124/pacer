"use client"

import Image from "next/image"
import { motion } from "framer-motion"

export function FarmOverview() {
    return (
        <section className="container py-16 md:py-24">
            <div className="grid md:grid-cols-2 gap-12 items-center">
                <motion.div
                    className="space-y-6"
                    initial={{ opacity: 0, x: -50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, ease: "easeOut" }}
                >
                    <h2 className="text-3xl font-bold tracking-tight">Farm Overview</h2>
                    <div className="prose prose-lg text-muted-foreground">
                        <p>
                            Our farm is located in the South Omo Zone of South West Ethiopia, an area known for its fertile soil and conducive climate for oilseeds.
                        </p>
                        <p>
                            We operate a 200-hectare organic farm, strictly adhering to organic farming principles.
                            Our seasonal planning ensures consistent production cycles, and our direct control over farming operations enables us to guarantee purity from the source.
                        </p>
                    </div>
                    <motion.div
                        className="grid grid-cols-2 gap-4 pt-4"
                        variants={{
                            hidden: { opacity: 0 },
                            visible: {
                                opacity: 1,
                                transition: { staggerChildren: 0.2 }
                            }
                        }}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true }}
                    >
                        <motion.div
                            className="p-4 bg-muted/20 rounded-lg hover:bg-muted/40 transition-colors"
                            variants={{ hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0 } }}
                        >
                            <div className="text-2xl font-bold text-primary">200 ha</div>
                            <div className="text-sm text-muted-foreground">Dedicated Land</div>
                        </motion.div>
                        <motion.div
                            className="p-4 bg-muted/20 rounded-lg hover:bg-muted/40 transition-colors"
                            variants={{ hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0 } }}
                        >
                            <div className="text-2xl font-bold text-primary">100%</div>
                            <div className="text-sm text-muted-foreground">Organic Practice</div>
                        </motion.div>
                    </motion.div>
                </motion.div>

                <div className="grid grid-cols-2 gap-4">
                    <motion.div
                        className="relative aspect-square bg-muted rounded-2xl overflow-hidden border shadow-lg"
                        initial={{ opacity: 0, scale: 0.9, y: 20 }}
                        whileInView={{ opacity: 1, scale: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8, delay: 0.2 }}
                    >
                        <Image
                            src="/photo_1_2025-12-25_09-23-26.jpg"
                            alt="Farm Land Overview"
                            fill
                            className="object-cover hover:scale-105 transition-transform duration-700"
                        />
                    </motion.div>
                    <motion.div
                        className="relative aspect-square bg-muted rounded-2xl overflow-hidden border shadow-lg mt-8"
                        initial={{ opacity: 0, scale: 0.9, y: 20 }}
                        whileInView={{ opacity: 1, scale: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8, delay: 0.4 }}
                    >
                        <Image
                            src="/photo_2_2025-12-25_09-23-26.jpg"
                            alt="Farm Operations"
                            fill
                            className="object-cover hover:scale-105 transition-transform duration-700"
                        />
                    </motion.div>
                    <motion.div
                        className="relative aspect-square bg-muted rounded-2xl overflow-hidden border shadow-lg -mt-8"
                        initial={{ opacity: 0, scale: 0.9, y: 20 }}
                        whileInView={{ opacity: 1, scale: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8, delay: 0.6 }}
                    >
                        <Image
                            src="/photo_4_2025-12-25_09-23-26.jpg"
                            alt="Soil Preparation"
                            fill
                            className="object-cover hover:scale-105 transition-transform duration-700"
                        />
                    </motion.div>
                    <motion.div
                        className="relative aspect-square bg-muted rounded-2xl overflow-hidden border shadow-lg"
                        initial={{ opacity: 0, scale: 0.9, y: 20 }}
                        whileInView={{ opacity: 1, scale: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8, delay: 0.8 }}
                    >
                        <Image
                            src="/20250830_135231.jpg"
                            alt="South Omo Farm View"
                            fill
                            className="object-cover hover:scale-105 transition-transform duration-700"
                        />
                    </motion.div>
                </div>
            </div>
        </section>
    )
}
