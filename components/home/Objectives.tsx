"use client"

import { Target, TrendingUp, Award } from "lucide-react"
import { motion } from "framer-motion"

const objectives = [
    {
        icon: Target,
        title: "Global Supply",
        description: "Bulk production of organic certified chia seeds for world and local export markets."
    },
    {
        icon: TrendingUp,
        title: "National Development",
        description: "Driving Ethiopia’s growth through foreign exchange generation and sustainable job creation."
    },
    {
        icon: Award,
        title: "Uncompromising Quality",
        description: "Maintaining strict organic standards and 99.9% purity to meet global expectations."
    }
]

export function Objectives() {
    return (
        <section className="container py-16 md:py-24">
            <motion.div
                className="text-center mb-16"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
            >
                <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-4">Core Objectives</h2>
                <div className="h-1.5 w-20 bg-primary mx-auto rounded-full" />
            </motion.div>

            <div className="grid md:grid-cols-3 gap-10">
                {objectives.map((obj, i) => (
                    <motion.div
                        key={i}
                        className="flex flex-col items-center text-center space-y-4 p-6"
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: i * 0.1, duration: 0.5 }}
                    >
                        <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-primary/5 text-primary rotate-3 transition-transform hover:rotate-0">
                            <obj.icon className="h-8 w-8" />
                        </div>
                        <h3 className="text-xl font-bold">{obj.title}</h3>
                        <p className="text-muted-foreground leading-relaxed">
                            {obj.description}
                        </p>
                    </motion.div>
                ))}
            </div>
        </section>
    )
}
