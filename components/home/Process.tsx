"use client"

import { motion } from "framer-motion"

export function Process() {
    return (
        <section className="py-16 md:py-24 bg-muted/40">
            <div className="container">
                <motion.div
                    className="text-center mb-16"
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                >
                    <h2 className="text-3xl font-bold tracking-tight mb-4">How We Work</h2>
                    <p className="text-muted-foreground">From our farm to global export markets.</p>
                </motion.div>
                <div className="grid md:grid-cols-3 gap-8 relative">
                    {/* Connecting line for desktop */}
                    <div className="hidden md:block absolute top-12 left-[16%] right-[16%] h-0.5 bg-border -z-10 overflow-hidden">
                        <motion.div
                            className="h-full bg-primary"
                            initial={{ width: "0%" }}
                            whileInView={{ width: "100%" }}
                            viewport={{ once: true }}
                            transition={{ duration: 1.5, ease: "easeInOut", delay: 0.5 }}
                        />
                    </div>

                    {[
                        {
                            num: "1",
                            title: "Farm Production",
                            desc: "Sustainable organic farming with consistent agronomic excellence."
                        },
                        {
                            num: "2",
                            title: "Quality Handling",
                            desc: "Rigorous post-harvest processing to ensure maximum purity."
                        },
                        {
                            num: "3",
                            title: "Global Export",
                            desc: "Reliable logistics and bulk supply for international markets."
                        }
                    ].map((step, i) => (
                        <motion.div
                            key={i}
                            className="bg-background p-8 rounded-lg border shadow-sm relative pt-12 text-center"
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: i * 0.3, duration: 0.5 }}
                        >
                            <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 flex h-16 w-16 items-center justify-center rounded-full border-4 border-muted/40 bg-background text-2xl font-bold text-primary shadow-sm z-10 transition-transform hover:scale-110">
                                {step.num}
                            </div>
                            <h3 className="text-xl font-bold mb-3">{step.title}</h3>
                            <p className="text-muted-foreground">
                                {step.desc}
                            </p>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    )
}
