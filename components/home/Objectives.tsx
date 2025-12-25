"use client"

import { Target, TrendingUp, DollarSign, Users, Award } from "lucide-react"
import { motion } from "framer-motion"

const objectives = [
    {
        icon: Target,
        title: "Bulk Production",
        description: "Bulk production of organic chia seeds for world and local markets."
    },
    {
        icon: TrendingUp,
        title: "Socio-Economic Support",
        description: "Support national socio-economic development programs."
    },
    {
        icon: DollarSign,
        title: "Foreign Exchange",
        description: "Contribute to Ethiopia’s foreign exchange generation."
    },
    {
        icon: Users,
        title: "Job Creation",
        description: "Contribute to job creation across farming and logistics."
    },
    {
        icon: Award,
        title: "Quality & Productivity",
        description: "Increase quality and productivity for world market standards."
    }
]

export function Objectives() {
    return (
        <section className="container py-16 md:py-24">
            <motion.div
                className="text-center mb-12"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
            >
                <h2 className="text-3xl font-bold tracking-tight mb-4">Our Objectives</h2>
                <p className="text-muted-foreground max-w-2xl mx-auto">
                    Driven by a commitment to sustainable development and agricultural excellence.
                </p>
            </motion.div>
            <motion.div
                className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: "-50px" }}
                variants={{
                    hidden: { opacity: 0 },
                    visible: {
                        opacity: 1,
                        transition: {
                            staggerChildren: 0.1
                        }
                    }
                }}
            >
                {objectives.map((obj, i) => (
                    <motion.div
                        key={i}
                        className="flex gap-4 p-6 rounded-xl border bg-card text-card-foreground shadow-sm hover:shadow-md transition-shadow"
                        variants={{
                            hidden: { opacity: 0, y: 20 },
                            visible: { opacity: 1, y: 0 }
                        }}
                        whileHover={{ scale: 1.02 }}
                    >
                        <div className="flex-shrink-0">
                            <div className="flex h-12 w-12 items-center justify-center rounded-full bg-primary/10 text-primary">
                                <obj.icon className="h-6 w-6" />
                            </div>
                        </div>
                        <div>
                            <h3 className="font-semibold mb-2">{obj.title}</h3>
                            <p className="text-sm text-muted-foreground">{obj.description}</p>
                        </div>
                    </motion.div>
                ))}
            </motion.div>
        </section>
    )
}
