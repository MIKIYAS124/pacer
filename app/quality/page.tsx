"use client"

import { CheckCircle2 } from "lucide-react"
import { motion } from "framer-motion"

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
                    <div className="grid gap-6 md:grid-cols-3">
                        {[
                            { id: "01", title: "Handling Discipline", desc: "Clean, careful handling to maintain consistency." },
                            { id: "02", title: "Sorting & Cleaning", desc: "Operational steps to reduce foreign matter to < 0.1%." },
                            { id: "03", title: "Batch Consistency", desc: "Repeatable processes and internal checks for every shipment." }
                        ].map((item, i) => (
                            <motion.div
                                key={i}
                                className="border p-6 rounded-lg bg-card hover:shadow-md transition-shadow"
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: 0.3 + (i * 0.15), duration: 0.5 }}
                            >
                                <div className="h-10 w-10 text-primary font-bold text-2xl mb-2">{item.id}</div>
                                <h3 className="font-semibold mb-2">{item.title}</h3>
                                <p className="text-sm text-muted-foreground">{item.desc}</p>
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
