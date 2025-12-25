"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { motion } from "framer-motion"

const stats = [
    {
        title: "Farm Area",
        value: "200",
        unit: "hectares",
        description: "Dedicated to organic chia"
    },
    {
        title: "Product",
        value: "Organic",
        unit: "Chia Seed",
        description: "Premium export quality"
    },
    {
        title: "Markets",
        value: "Global",
        unit: "& Local",
        description: "World export + local supply"
    },
    {
        title: "Location",
        value: "Ethiopia",
        unit: "South Omo",
        description: "Menite Goldiya"
    }
]

export function Stats() {
    return (
        <section className="container py-12">
            <motion.div
                className="grid grid-cols-2 lg:grid-cols-4 gap-6 bg-muted/30 rounded-3xl p-8"
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: "-100px" }}
                variants={{
                    hidden: { opacity: 0, y: 50 },
                    visible: {
                        opacity: 1,
                        y: 0,
                        transition: {
                            staggerChildren: 0.15
                        }
                    }
                }}
            >
                {stats.map((stat, index) => (
                    <motion.div
                        key={index}
                        variants={{
                            hidden: { opacity: 0, scale: 0.9 },
                            visible: { opacity: 1, scale: 1 }
                        }}
                    >
                        <Card className="border-none shadow-none bg-transparent h-full">
                            <CardHeader className="pb-2 pl-0">
                                <CardTitle className="text-sm font-medium text-muted-foreground uppercase tracking-wider">
                                    {stat.title}
                                </CardTitle>
                            </CardHeader>
                            <CardContent className="pl-0">
                                <div className="text-3xl font-bold text-primary flex flex-wrap items-baseline gap-1">
                                    {stat.value}
                                    <span className="text-lg font-normal text-muted-foreground">{stat.unit}</span>
                                </div>
                                <p className="text-sm text-muted-foreground mt-1">
                                    {stat.description}
                                </p>
                            </CardContent>
                        </Card>
                    </motion.div>
                ))}
            </motion.div>
        </section>
    )
}
