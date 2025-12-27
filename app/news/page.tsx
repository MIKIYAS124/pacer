"use client"

import { useState, useMemo } from "react"
import { motion } from "framer-motion"
import { Search, Newspaper } from "lucide-react"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { BlogCard } from "@/components/home/BlogCard"
import { blogPosts, categories } from "@/lib/sample-posts"

export default function NewsPage() {
    const [selectedCategory, setSelectedCategory] = useState("All")
    const [searchQuery, setSearchQuery] = useState("")
    const [visiblePosts, setVisiblePosts] = useState(6)

    // Filter posts based on category and search
    const filteredPosts = useMemo(() => {
        return blogPosts.filter(post => {
            const matchesCategory = selectedCategory === "All" || post.category === selectedCategory
            const matchesSearch = post.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
                post.excerpt.toLowerCase().includes(searchQuery.toLowerCase())
            return matchesCategory && matchesSearch
        })
    }, [selectedCategory, searchQuery])

    const displayedPosts = filteredPosts.slice(0, visiblePosts)
    const hasMore = visiblePosts < filteredPosts.length

    const featuredPost = blogPosts.find(post => post.featured)

    return (
        <div className="min-h-screen">
            {/* Hero Section */}
            <motion.section
                className="relative bg-gradient-to-br from-primary via-accent to-primary/80 text-white py-24 md:py-32 overflow-hidden"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.8 }}
            >
                {/* Animated background shapes */}
                <div className="absolute inset-0 overflow-hidden">
                    <motion.div
                        className="absolute -top-24 -right-24 w-96 h-96 bg-white/10 rounded-full blur-3xl"
                        animate={{
                            scale: [1, 1.2, 1],
                            opacity: [0.3, 0.5, 0.3],
                        }}
                        transition={{
                            duration: 8,
                            repeat: Infinity,
                            ease: "easeInOut"
                        }}
                    />
                    <motion.div
                        className="absolute -bottom-24 -left-24 w-96 h-96 bg-white/10 rounded-full blur-3xl"
                        animate={{
                            scale: [1.2, 1, 1.2],
                            opacity: [0.5, 0.3, 0.5],
                        }}
                        transition={{
                            duration: 8,
                            repeat: Infinity,
                            ease: "easeInOut"
                        }}
                    />
                </div>

                <div className="container relative z-10">
                    <motion.div
                        className="max-w-3xl mx-auto text-center space-y-6"
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.2 }}
                    >
                        <div className="flex justify-center mb-4">
                            <Newspaper className="w-16 h-16" />
                        </div>
                        <h1 className="text-5xl md:text-6xl font-bold tracking-tight">
                            News & Insights
                        </h1>
                        <p className="text-xl md:text-2xl text-white/90 font-light">
                            Stay updated with the latest from our farms, export operations, and the organic agriculture industry
                        </p>
                    </motion.div>
                </div>
            </motion.section>

            <div className="container py-12 md:py-16">
                {/* Featured Post */}
                {featuredPost && (
                    <motion.section
                        className="mb-16"
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 0.3 }}
                    >
                        <h2 className="text-2xl font-bold mb-6 flex items-center gap-2">
                            <span className="text-primary">Featured</span>
                        </h2>
                        <div className="grid md:grid-cols-2 gap-8 bg-gradient-to-br from-primary/5 to-accent/5 rounded-2xl overflow-hidden border shadow-lg">
                            <div className="relative aspect-[4/3] md:aspect-auto">
                                <img
                                    src={featuredPost.image}
                                    alt={featuredPost.title}
                                    className="w-full h-full object-cover"
                                />
                            </div>
                            <div className="p-8 md:p-12 flex flex-col justify-center">
                                <div className="inline-block px-3 py-1 bg-primary text-white text-xs font-bold rounded-full mb-4 w-fit">
                                    {featuredPost.category}
                                </div>
                                <h3 className="text-3xl md:text-4xl font-bold mb-4 text-primary">
                                    {featuredPost.title}
                                </h3>
                                <p className="text-lg text-muted-foreground mb-6">
                                    {featuredPost.excerpt}
                                </p>
                                <div className="flex items-center gap-4 text-sm text-muted-foreground mb-6">
                                    <span>{new Date(featuredPost.date).toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' })}</span>
                                    <span>•</span>
                                    <span>{featuredPost.readTime} min read</span>
                                </div>
                                <Button size="lg" className="w-fit">
                                    Read Full Story
                                </Button>
                            </div>
                        </div>
                    </motion.section>
                )}

                {/* Search and Filter */}
                <motion.section
                    className="mb-12"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.4 }}
                >
                    {/* Search Bar */}
                    <div className="relative max-w-md mb-8">
                        <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                        <Input
                            placeholder="Search articles..."
                            value={searchQuery}
                            onChange={(e) => setSearchQuery(e.target.value)}
                            className="pl-10"
                        />
                    </div>

                    {/* Category Filters */}
                    <div className="flex flex-wrap gap-3">
                        {categories.map((category) => (
                            <button
                                key={category}
                                onClick={() => setSelectedCategory(category)}
                                className={`px-5 py-2.5 rounded-full text-sm font-bold transition-all duration-300 ${selectedCategory === category
                                    ? 'bg-primary text-white shadow-lg scale-105'
                                    : 'bg-secondary text-foreground hover:bg-primary/10 hover:scale-105'
                                    }`}
                            >
                                {category}
                            </button>
                        ))}
                    </div>
                </motion.section>

                {/* Blog Grid */}
                <section>
                    {filteredPosts.length === 0 ? (
                        <motion.div
                            className="text-center py-16"
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                        >
                            <p className="text-xl text-muted-foreground">
                                No articles found. Try adjusting your search or filter.
                            </p>
                        </motion.div>
                    ) : (
                        <>
                            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
                                {displayedPosts.map((post, index) => (
                                    <BlogCard key={post.id} post={post} index={index} />
                                ))}
                            </div>

                            {/* Load More Button */}
                            {hasMore && (
                                <motion.div
                                    className="flex justify-center"
                                    initial={{ opacity: 0 }}
                                    animate={{ opacity: 1 }}
                                    transition={{ delay: 0.3 }}
                                >
                                    <Button
                                        size="lg"
                                        variant="outline"
                                        onClick={() => setVisiblePosts(prev => prev + 6)}
                                        className="hover:scale-105 transition-transform"
                                    >
                                        Load More Articles
                                    </Button>
                                </motion.div>
                            )}
                        </>
                    )}
                </section>
            </div>
        </div>
    )
}
