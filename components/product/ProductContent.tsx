"use client"

import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import { CheckCircle2 } from "lucide-react"
import { motion } from "framer-motion"

export function ProductContent() {
    return (
        <motion.div
            className="space-y-8"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
        >
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.2 }}
            >
                <h1 className="text-4xl font-bold tracking-tight text-primary mb-4">Organic Chia Seed</h1>
                <p className="text-xl text-muted-foreground">
                    Pacer Field Plc produces and supplies organic chia seed primarily for export markets and also for local supply.
                </p>
            </motion.div>

            <Tabs defaultValue="overview" className="w-full">
                <TabsList className="w-full justify-start h-auto flex-wrap gap-2 bg-transparent p-0 mb-6">
                    <TabsTrigger value="overview" className="data-[state=active]:bg-primary data-[state=active]:text-primary-foreground border px-6 py-2 rounded-full transition-all">Overview</TabsTrigger>
                    <TabsTrigger value="specs" className="data-[state=active]:bg-primary data-[state=active]:text-primary-foreground border px-6 py-2 rounded-full transition-all">Specs & Grades</TabsTrigger>
                    <TabsTrigger value="packaging" className="data-[state=active]:bg-primary data-[state=active]:text-primary-foreground border px-6 py-2 rounded-full transition-all">Packaging</TabsTrigger>
                    <TabsTrigger value="faq" className="data-[state=active]:bg-primary data-[state=active]:text-primary-foreground border px-6 py-2 rounded-full transition-all">FAQ</TabsTrigger>
                </TabsList>

                <TabsContent value="overview" className="space-y-6">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.4 }}
                    >
                        <div className="prose prose-lg dark:prose-invert max-w-none text-muted-foreground">
                            <p>
                                Our organic chia seeds are cultivated on our 200-hectare farm in South West Ethiopia. We focus on high-purity, consistent production to meet international export standards.
                            </p>
                            <ul className="grid sm:grid-cols-2 gap-4 mt-8 not-prose">
                                {["Direct from Farm:Full traceability from our Menite Goldiya farm.",
                                    "Organic Certified:Grown using strictly organic farming practices.",
                                    "99.9% Purity:Advanced cleaning and sorting capabilities.",
                                    "Reliable Supply:Structured for year-round export fulfillment."
                                ].map((item, i) => {
                                    const [title, desc] = item.split(':')
                                    return (
                                        <motion.li
                                            key={i}
                                            className="flex items-start gap-3 p-4 border rounded-lg bg-card"
                                            initial={{ opacity: 0, scale: 0.95 }}
                                            animate={{ opacity: 1, scale: 1 }}
                                            transition={{ delay: 0.1 * i, duration: 0.3 }}
                                        >
                                            <CheckCircle2 className="h-6 w-6 text-primary shrink-0" />
                                            <div>
                                                <strong className="block text-foreground">{title}</strong>
                                                <span>{desc}</span>
                                            </div>
                                        </motion.li>
                                    )
                                })}
                            </ul>
                        </div>
                    </motion.div>
                </TabsContent>

                <TabsContent value="specs" className="space-y-6">
                    <motion.div
                        initial={{ opacity: 0, scale: 0.98 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.4 }}
                    >
                        <div className="rounded-md border">
                            <table className="w-full text-sm">
                                <thead>
                                    <tr className="border-b bg-muted/50">
                                        <th className="p-4 text-left font-medium">Parameter</th>
                                        <th className="p-4 text-left font-medium">Specification</th>
                                    </tr>
                                </thead>
                                <tbody className="divide-y">
                                    {[
                                        ["Purity", "Min 99.9%"],
                                        ["Moisture", "Max 8%"],
                                        ["Foreign Matter", "Max 0.1%"],
                                        ["Appearance", "Black/Grey/White oval seeds"],
                                        ["Odor", "Neutral, typical of chia"],
                                        ["Microbiological", "Salmonella Negative / E.Coli Negative"]
                                    ].map(([param, spec], i) => (
                                        <tr key={i}>
                                            <td className="p-4 font-medium">{param}</td>
                                            <td className="p-4">{spec}</td>
                                        </tr>
                                    ))}
                                </tbody>
                            </table>
                        </div>
                        <p className="text-sm text-muted-foreground italic mt-4">
                            * Final specifications may vary based on harvest batch. Detailed COA provided per shipment.
                        </p>
                    </motion.div>
                </TabsContent>

                <TabsContent value="packaging" className="space-y-6">
                    <motion.div
                        className="grid gap-6 md:grid-cols-2"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ duration: 0.5 }}
                    >
                        <div className="border rounded-xl p-6 hover:shadow-md transition-shadow">
                            <h3 className="text-lg font-semibold mb-2">Bulk Export Bags</h3>
                            <p className="text-muted-foreground mb-4">Multi-wall paper bags or PP woven bags with inner liners.</p>
                            <ul className="space-y-2 text-sm">
                                <li className="flex items-center gap-2"><div className="h-2 w-2 rounded-full bg-primary" /> 25 kg bags</li>
                                <li className="flex items-center gap-2"><div className="h-2 w-2 rounded-full bg-primary" /> 50 lb bags</li>
                                <li className="flex items-center gap-2"><div className="h-2 w-2 rounded-full bg-primary" /> Custom labelling available</li>
                            </ul>
                        </div>
                        <div className="border rounded-xl p-6 hover:shadow-md transition-shadow">
                            <h3 className="text-lg font-semibold mb-2">Palletization</h3>
                            <p className="text-muted-foreground mb-4">Securely shrink-wrapped on standard or euro pallets.</p>
                            <ul className="space-y-2 text-sm">
                                <li className="flex items-center gap-2"><div className="h-2 w-2 rounded-full bg-primary" /> Slip sheets available</li>
                                <li className="flex items-center gap-2"><div className="h-2 w-2 rounded-full bg-primary" /> Container optimization</li>
                            </ul>
                        </div>
                    </motion.div>
                </TabsContent>

                <TabsContent value="faq" className="space-y-6">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.4 }}
                    >
                        <Accordion type="single" collapsible className="w-full">
                            <AccordionItem value="item-1">
                                <AccordionTrigger>What is your typical MOQ?</AccordionTrigger>
                                <AccordionContent>
                                    Our typical Minimum Order Quantity (MOQ) for export is one 20ft container (approx. 18-20 MT). However, we can discuss smaller trial shipments or LCL options depending on availability.
                                </AccordionContent>
                            </AccordionItem>
                            <AccordionItem value="item-2">
                                <AccordionTrigger>What is your lead time?</AccordionTrigger>
                                <AccordionContent>
                                    Standard lead time from order confirmation to EXW/FOB handover is typically 2-4 weeks, depending on volume and seasonal demand. Specific timelines will be confirmed in your quotation.
                                </AccordionContent>
                            </AccordionItem>
                            <AccordionItem value="item-3">
                                <AccordionTrigger>Do you supply the local market too?</AccordionTrigger>
                                <AccordionContent>
                                    Yes, while our primary focus is export, we set aside a portion of production for local supply to support domestic industries.
                                </AccordionContent>
                            </AccordionItem>
                            <AccordionItem value="item-4">
                                <AccordionTrigger>What Incoterms do you offer?</AccordionTrigger>
                                <AccordionContent>
                                    We primarily offer FOB Djibouti or EXW Farm (South Omo). CIF can be arranged upon request.
                                </AccordionContent>
                            </AccordionItem>
                        </Accordion>
                    </motion.div>
                </TabsContent>
            </Tabs>
        </motion.div>
    )
}
