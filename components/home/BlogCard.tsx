"use client"

import Image from "next/image"
import Link from "next/link"
import { motion } from "framer-motion"
import { Calendar, Clock, User } from "lucide-react"
import { Card, CardContent, CardFooter, CardHeader } from "@/components/ui/card"
import type { BlogPost } from "@/lib/sample-posts"

interface BlogCardProps {
    post: BlogPost
    index?: number
}

const categoryColors = {
    "Farm Updates": "bg-emerald-500/90",
    "Export News": "bg-blue-500/90",
    "Sustainability": "bg-green-600/90",
    "Industry Insights": "bg-purple-500/90"
}

export function BlogCard({ post, index = 0 }: BlogCardProps) {
    return (
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
        >
            <Card className="h-full overflow-hidden group hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
                <CardHeader className="p-0 relative aspect-[16/10] overflow-hidden">
                    <Link href={`/news/${post.id}`}>
                        <Image
                            src={post.image}
                            alt={post.title}
                            fill
                            className="object-cover transition-transform duration-700 group-hover:scale-110"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                    </Link>
                    <div className={`absolute top-4 left-4 px-3 py-1 rounded-full text-xs font-bold text-white ${categoryColors[post.category]}`}>
                        {post.category}
                    </div>
                </CardHeader>

                <CardContent className="p-6 flex-1">
                    <Link href={`/news/${post.id}`}>
                        <h3 className="text-xl font-bold mb-3 line-clamp-2 group-hover:text-primary transition-colors">
                            {post.title}
                        </h3>
                    </Link>
                    <p className="text-muted-foreground line-clamp-3 text-sm leading-relaxed">
                        {post.excerpt}
                    </p>
                </CardContent>

                <CardFooter className="px-6 pb-6 pt-0 flex items-center gap-4 text-xs text-muted-foreground">
                    <div className="flex items-center gap-1.5">
                        <Calendar className="h-3.5 w-3.5" />
                        <span>{new Date(post.date).toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' })}</span>
                    </div>
                    <div className="flex items-center gap-1.5">
                        <Clock className="h-3.5 w-3.5" />
                        <span>{post.readTime} min read</span>
                    </div>
                </CardFooter>
            </Card>
        </motion.div>
    )
}
