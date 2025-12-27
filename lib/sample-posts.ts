export interface BlogPost {
    id: string
    title: string
    excerpt: string
    content: string
    category: "Farm Updates" | "Export News" | "Sustainability" | "Industry Insights"
    author: string
    date: string
    readTime: number
    image: string
    featured?: boolean
}

export const blogPosts: BlogPost[] = [
    {
        id: "1",
        title: "Organic Chia Seed Harvest Exceeds Expectations",
        excerpt: "Our 200-hectare organic farm in South Omo has delivered exceptional yields this season, demonstrating the effectiveness of sustainable farming practices.",
        content: "Full article content...",
        category: "Farm Updates",
        author: "Pacer Field Team",
        date: "2025-12-20",
        readTime: 5,
        image: "/20250830_135235.jpg",
        featured: true
    },
    {
        id: "2",
        title: "New Export Partnership with European Distributors",
        excerpt: "Pacer Field Plc announces strategic partnerships with major European health food distributors, expanding our market reach across the continent.",
        content: "Full article content...",
        category: "Export News",
        author: "Export Team",
        date: "2025-12-15",
        readTime: 6,
        image: "/20250830_135546.jpg"
    },
    {
        id: "3",
        title: "Sustainability in Action: Water Conservation Methods",
        excerpt: "Learn about our innovative irrigation systems that reduce water consumption by 40% while maintaining optimal crop health.",
        content: "Full article content...",
        category: "Sustainability",
        author: "Agricultural Team",
        date: "2025-12-10",
        readTime: 4,
        image: "/20250830_135235.jpg"
    },
    {
        id: "4",
        title: "Global Chia Seed Market Trends for 2026",
        excerpt: "Industry analysis shows growing demand for organic chia seeds, with projections indicating 15% market growth in the coming year.",
        content: "Full article content...",
        category: "Industry Insights",
        author: "Market Research",
        date: "2025-12-05",
        readTime: 7,
        image: "/20250830_135546.jpg"
    },
    {
        id: "5",
        title: "Farm-to-Export: Our Complete Traceability System",
        excerpt: "Transparency is key to quality. Discover how we track every batch from planting to international shipping.",
        content: "Full article content...",
        category: "Farm Updates",
        author: "Quality Assurance",
        date: "2025-11-28",
        readTime: 5,
        image: "/20250830_135235.jpg"
    },
    {
        id: "6",
        title: "Certification Success: EU Organic Standards Achieved",
        excerpt: "Pacer Field has successfully obtained EU organic certification, opening new doors in European markets.",
        content: "Full article content...",
        category: "Export News",
        author: "Compliance Team",
        date: "2025-11-20",
        readTime: 4,
        image: "/20250830_135546.jpg"
    },
    {
        id: "7",
        title: "Supporting Local Communities Through Agriculture",
        excerpt: "Our commitment to social sustainability includes employment opportunities and agricultural training for local communities.",
        content: "Full article content...",
        category: "Sustainability",
        author: "Community Relations",
        date: "2025-11-15",
        readTime: 6,
        image: "/20250830_135235.jpg"
    },
    {
        id: "8",
        title: "Superfood Trends: Why Chia Seeds Continue to Dominate",
        excerpt: "Consumer health consciousness drives sustained demand for nutrient-dense foods like organic chia seeds.",
        content: "Full article content...",
        category: "Industry Insights",
        author: "Market Analysis",
        date: "2025-11-10",
        readTime: 5,
        image: "/20250830_135546.jpg"
    },
    {
        id: "9",
        title: "Season Wrap-Up: 2025 Harvest Report",
        excerpt: "A comprehensive review of our 2025 growing season, including yield data, quality metrics, and lessons learned.",
        content: "Full article content...",
        category: "Farm Updates",
        author: "Farm Management",
        date: "2025-11-01",
        readTime: 8,
        image: "/20250830_135235.jpg"
    }
]

export const categories = [
    "All",
    "Farm Updates",
    "Export News",
    "Sustainability",
    "Industry Insights"
] as const
