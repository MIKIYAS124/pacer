"use client"

import { Sprout, Scale, Package, Truck, ArrowRight } from "lucide-react"
import { motion } from "framer-motion"

const steps = [
    {
        icon: Sprout,
        title: "Farm Production",
        desc: "Production planning and farm-level operations with strict organic oversight."
    },
    {
        icon: Scale,
        title: "Post-harvest Handling",
        desc: "Cleaning, sorting, and grading to ensure purity and consistency."
    },
    {
        icon: Package,
        title: "Bagging & Storage",
        desc: "Packaging in multi-wall bags and stored in hygiene-controlled facilities."
    },
    {
        icon: Truck,
        title: "Logistics & Export",
        desc: "Coordination for shipment, documentation, and delivery to port."
    }
]

export function TraceabilityTimeline() {
    return (
        <section className="bg-muted/10 py-16 md:py-24" id="traceability">
            <div className="container">
                <motion.div
                    className="text-center mb-16"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                >
                    <h2 className="text-3xl font-bold tracking-tight mb-4">Traceability Flow</h2>
                    <p className="text-muted-foreground">End-to-end visibility from soil to shipment.</p>
                </motion.div>

                <div className="relative">
                    {/* Timeline Line */}
                    <div className="absolute top-8 left-0 right-0 h-0.5 bg-border hidden md:block overflow-hidden">
                        <motion.div
                            className="h-full bg-primary"
                            initial={{ width: "0%" }}
                            whileInView={{ width: "100%" }}
                            viewport={{ once: true }}
                            transition={{ duration: 2, ease: "easeInOut", delay: 0.2 }}
                        />
                    </div>

                    <div className="grid md:grid-cols-4 gap-8">
                        {steps.map((step, i) => (
                            <motion.div
                                key={i}
                                className="relative flex flex-col items-center text-center"
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: 0.2 + (i * 0.3), duration: 0.5 }}
                            >
                                <motion.div
                                    className="relative z-10 flex h-16 w-16 items-center justify-center rounded-full border-4 border-background bg-primary text-primary-foreground shadow-sm mb-6"
                                    whileHover={{ scale: 1.1, rotate: 10 }}
                                    transition={{ type: "spring", stiffness: 300 }}
                                >
                                    <step.icon className="h-8 w-8" />
                                </motion.div>
                                <h3 className="text-lg font-bold mb-2">{step.title}</h3>
                                <p className="text-sm text-muted-foreground max-w-[250px]">
                                    {step.desc}
                                </p>
                                {i < steps.length - 1 && (
                                    <div className="absolute top-8 -right-[50%] transform translate-x-1/2 hidden md:block text-muted-foreground/30">
                                        <ArrowRight className="h-6 w-6" />
                                    </div>
                                )}
                            </motion.div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    )
}
