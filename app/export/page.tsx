"use client"

import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { motion } from "framer-motion"

export default function ExportPage() {
    return (
        <div className="container py-12 md:py-20 lg:py-24">
            <motion.div
                className="text-center space-y-4 mb-16"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
            >
                <h1 className="text-4xl font-bold tracking-tight text-primary">Export Operations</h1>
                <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
                    Clear process, clear communication, and buyer-ready coordination.
                </p>
            </motion.div>

            <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4 mb-16">
                {[
                    { title: "Incoterms", val: "FOB / EXW", sub: "CIF on request" },
                    { title: "Lead Time", val: "2-4 Weeks", sub: "Subject to volume" },
                    { title: "MOQ", val: "18-20 MT", sub: "20ft Container" },
                    { title: "Documentation", val: "Full Set", sub: "Invoice, Packing List, BL, COA" }
                ].map((item, i) => (
                    <motion.div
                        key={i}
                        initial={{ opacity: 0, scale: 0.9 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ delay: 0.2 + (i * 0.1), duration: 0.4 }}
                    >
                        <Card className="h-full hover:shadow-md transition-shadow">
                            <CardHeader>
                                <CardTitle className="text-base text-muted-foreground">{item.title}</CardTitle>
                            </CardHeader>
                            <CardContent>
                                <p className="text-xl font-semibold">{item.val}</p>
                                <p className="text-sm text-muted-foreground">{item.sub}</p>
                            </CardContent>
                        </Card>
                    </motion.div>
                ))}
            </div>

            <motion.div
                className="max-w-4xl mx-auto space-y-8"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
            >
                <h2 className="text-2xl font-semibold text-center mb-8">Export Process</h2>
                <div className="relative border-l border-primary/20 ml-4 md:ml-0 md:pl-0 md:border-l-0 md:border-t md:grid md:grid-cols-4 md:gap-8 md:pt-8">
                    {[
                        { num: "1", title: "Inquiry", desc: "Buyer shares quantity, destination, and timing requirements." },
                        { num: "2", title: "Quotation", desc: "Seller provides price, terms, and lead time confirmation." },
                        { num: "3", title: "Preparation", desc: "Batch preparation, cleaning, packaging, and QA checks." },
                        { num: "4", title: "Shipment", desc: "Logistics coordination, customs clearance, and dispatch." }
                    ].map((step, i) => (
                        <motion.div
                            key={i}
                            className="mb-8 ml-8 md:ml-0 md:mb-0 relative"
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: i * 0.2, duration: 0.5 }}
                        >
                            <span className="absolute -left-10 top-0 md:left-0 md:-top-10 flex h-6 w-6 items-center justify-center rounded-full bg-primary text-xs text-primary-foreground font-bold">
                                {step.num}
                            </span>
                            <h3 className="font-bold mb-2">{step.title}</h3>
                            <p className="text-sm text-muted-foreground">{step.desc}</p>
                        </motion.div>
                    ))}
                </div>

                <motion.div
                    className="flex justify-center pt-8"
                    initial={{ opacity: 0, scale: 0.9 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: 0.4 }}
                >
                    <Button size="lg" asChild className="transition-transform hover:scale-105">
                        <Link href="/contact">Start Inquiry</Link>
                    </Button>
                </motion.div>
            </motion.div>
        </div>
    )
}
