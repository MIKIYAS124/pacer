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

                <motion.div
                    className="relative aspect-[4/3] bg-muted rounded-2xl overflow-hidden border shadow-lg"
                    initial={{ opacity: 0, scale: 0.9, rotate: 2 }}
                    whileInView={{ opacity: 1, scale: 1, rotate: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8, delay: 0.2 }}
                >
                    <Image
                        src="/20250830_135231.jpg"
                        alt="Farm Overview - 200 Hectares in South Omo"
                        fill
                        className="object-cover"
                    />
                </motion.div>
            </div>
        </section>
    )
}
