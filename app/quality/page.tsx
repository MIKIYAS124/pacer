"use client"

import { CheckCircle2 } from "lucide-react"
import { motion } from "framer-motion"
import Image from "next/image"

export default function QualityPage() {
    return (
        <div className="container py-12 md:py-20 lg:py-24">
            <div className="max-w-3xl mx-auto space-y-12">
                <motion.div
                    className="text-center space-y-4"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                >
                    <h1 className="text-4xl font-bold tracking-tight text-primary">Quality Approach</h1>
                    <p className="text-xl text-muted-foreground">
                        Quality handling designed for consistent world-market expectations.
                    </p>
                </motion.div>

                <motion.div
                    className="space-y-8"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.2, duration: 0.6 }}
                >
                    <h2 className="text-2xl font-semibold">Quality Workflow</h2>
                    <div className="grid md:grid-cols-3 gap-8">
                        {[
                            { title: "Careful Handling", desc: "Organic integrity maintained from the farm gate.", img: "/photo_1_2025-12-25_09-23-05.jpg" },
                            { title: "Vibro-Cleaning", desc: "Multi-stage process to ensure 99.9% purity.", img: "/photo_2_2025-12-25_09-23-05.jpg" },
                            { title: "Batch Consistency", desc: "Rigorous testing of every export lot.", img: "/photo_3_2025-12-25_09-23-26.jpg" }
                        ].map((step, i) => (
                            <motion.div
                                key={i}
                                className="p-0 rounded-2xl border bg-card overflow-hidden shadow-sm hover:shadow-md transition-shadow group"
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.5, delay: i * 0.1 }}
                            >
                                <div className="relative h-48 w-full">
                                    <Image
                                        src={step.img}
                                        alt={step.title}
                                        fill
                                        className="object-cover transition-transform group-hover:scale-105"
                                    />
                                </div>
                                <div className="p-6">
                                    <CheckCircle2 className="h-8 w-8 text-primary mb-4" />
                                    <h3 className="text-xl font-bold mb-2">{step.title}</h3>
                                    <p className="text-sm text-muted-foreground">{step.desc}</p>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </motion.div>

                <motion.div
                    className="space-y-8"
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                >
                    <h2 className="text-2xl font-semibold">Technical Specifications</h2>
                    <div className="rounded-md border overflow-hidden">
                        <table className="w-full text-sm">
                            <thead>
                                <tr className="border-b bg-muted/50">
                                    <th className="p-4 text-left font-medium">Parameter</th>
                                    <th className="p-4 text-left font-medium">Standard</th>
                                </tr>
                            </thead>
                            <tbody className="divide-y bg-card">
                                {[
                                    ["Purity", "Min 99.9%"],
                                    ["Moisture", "Max 8%"],
                                    ["Foreign Matter", "Max 0.1%"],
                                    ["Origin", "Ethiopia"]
                                ].map(([param, val], i) => (
                                    <motion.tr
                                        key={i}
                                        initial={{ opacity: 0, x: -10 }}
                                        whileInView={{ opacity: 1, x: 0 }}
                                        viewport={{ once: true }}
                                        transition={{ delay: i * 0.1, duration: 0.3 }}
                                    >
                                        <td className="p-4 font-medium">{param}</td>
                                        <td className="p-4">{val}</td>
                                    </motion.tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                    <p className="text-sm text-muted-foreground italic">
                        * No certificate downloads available. Please contact us for full documentation.
                    </p>
                </motion.div>
            </div>
        </div>
    )
}
