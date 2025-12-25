"use client"

import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Mail, MapPin, Phone } from "lucide-react"
import { motion } from "framer-motion"

export default function ContactPage() {
    return (
        <div className="container py-12 md:py-20 lg:py-24">
            <div className="grid lg:grid-cols-2 gap-12">
                <motion.div
                    initial={{ opacity: 0, x: -50 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.6, ease: "easeOut" }}
                >
                    <motion.h1
                        className="text-4xl font-bold tracking-tight text-primary mb-6"
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: 0.2 }}
                    >
                        Contact Us
                    </motion.h1>
                    <motion.p
                        className="text-xl text-muted-foreground mb-12"
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: 0.3 }}
                    >
                        Send an inquiry for pricing, volume availability, and timelines. We are responsive to all export inquiries.
                    </motion.p>

                    <div className="space-y-6">
                        {[
                            { icon: MapPin, title: "Location", lines: ["South Omo Zone, Menite Goldiya", "South West Ethiopia"] },
                            { icon: Mail, title: "Email", lines: ["[Email Pending]"] },
                            { icon: Phone, title: "WhatsApp", lines: ["[Number Pending]"] }
                        ].map((item, i) => (
                            <motion.div
                                key={i}
                                className="flex items-start gap-4"
                                initial={{ opacity: 0, x: -20 }}
                                animate={{ opacity: 1, x: 0 }}
                                transition={{ delay: 0.4 + (i * 0.15), duration: 0.5 }}
                            >
                                <item.icon className="h-6 w-6 text-primary shrink-0 mt-1" />
                                <div>
                                    <h3 className="font-semibold">{item.title}</h3>
                                    <p className="text-muted-foreground">
                                        {item.lines.map((line, idx) => (
                                            <span key={idx}>{line}<br /></span>
                                        ))}
                                    </p>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </motion.div>

                <motion.div
                    className="bg-muted/50 p-8 rounded-2xl"
                    initial={{ opacity: 0, x: 50 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.6, ease: "easeOut", delay: 0.2 }}
                >
                    <form className="space-y-6">
                        <div className="grid gap-4 sm:grid-cols-2">
                            <div className="space-y-2">
                                <Label htmlFor="company">Company Name *</Label>
                                <Input id="company" required placeholder="To fill" className="bg-background" />
                            </div>
                            <div className="space-y-2">
                                <Label htmlFor="contact">Contact Person *</Label>
                                <Input id="contact" required placeholder="Name" className="bg-background" />
                            </div>
                        </div>

                        <div className="space-y-2">
                            <Label htmlFor="email">Email *</Label>
                            <Input id="email" type="email" required placeholder="name@company.com" className="bg-background" />
                        </div>

                        <div className="space-y-2">
                            <Label htmlFor="country">Country *</Label>
                            <Input id="country" required placeholder="Destination" className="bg-background" />
                        </div>

                        <div className="space-y-2">
                            <Label htmlFor="quantity">Quantity (MT) *</Label>
                            <Input id="quantity" required placeholder="Required Volume" className="bg-background" />
                        </div>

                        <div className="space-y-2">
                            <Label htmlFor="message">Message</Label>
                            <Textarea id="message" placeholder="Additional details..." className="min-h-[120px] bg-background" />
                        </div>

                        <Button type="submit" size="lg" className="w-full transition-transform hover:scale-105 font-bold">Send Inquiry</Button>
                        <p className="text-xs text-muted-foreground text-center">
                            We use your contact information only to respond to your inquiry.
                        </p>
                    </form>
                </motion.div>
            </div>
        </div>
    )
}
