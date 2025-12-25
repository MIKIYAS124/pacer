"use client"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { motion } from "framer-motion"

export function QuotePanel() {
    return (
        <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.4, duration: 0.5 }}
        >
            <Card className="sticky top-24 border-2 border-primary/10 shadow-lg">
                <CardHeader className="bg-muted/30">
                    <CardTitle className="flex items-center gap-2">
                        Request a Quote
                    </CardTitle>
                    <CardDescription>
                        Get pricing and availability for your order.
                    </CardDescription>
                </CardHeader>
                <CardContent className="pt-6">
                    <form className="grid gap-4">
                        <div className="grid gap-2">
                            <Label htmlFor="company">Company Name *</Label>
                            <Input id="company" required placeholder="Your Company Ltd." className="bg-background" />
                        </div>

                        <div className="grid gap-2">
                            <Label htmlFor="contact">Contact Person *</Label>
                            <Input id="contact" required placeholder="Full Name" className="bg-background" />
                        </div>

                        <div className="grid gap-2">
                            <Label htmlFor="email">Email *</Label>
                            <Input id="email" type="email" required placeholder="name@company.com" className="bg-background" />
                        </div>

                        <div className="grid gap-2">
                            <Label htmlFor="country">Country *</Label>
                            <Input id="country" required placeholder="Destination Country" className="bg-background" />
                        </div>

                        <div className="grid gap-2">
                            <Label htmlFor="quantity">Quantity (MT) *</Label>
                            <Input id="quantity" required placeholder="e.g. 20 MT" className="bg-background" />
                        </div>

                        <div className="grid gap-2">
                            <Label htmlFor="message">Message</Label>
                            <Textarea id="message" placeholder="Additional requirements..." className="bg-background" />
                        </div>

                        <Button type="submit" className="w-full size-lg font-bold">Send Inquiry</Button>
                    </form>
                </CardContent>
            </Card>
        </motion.div>
    )
}
