"use client"

import * as React from "react"
import Link from "next/link"
import Image from "next/image"
import { Menu, X } from "lucide-react"
import { motion } from "framer-motion"

import { cn } from "@/lib/utils"
import {
    NavigationMenu,
    NavigationMenuContent,
    NavigationMenuItem,
    NavigationMenuLink,
    NavigationMenuList,
    NavigationMenuTrigger,
    navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu"
import { Button } from "@/components/ui/button"
import {
    Sheet,
    SheetContent,
    SheetTrigger,
    SheetTitle,
} from "@/components/ui/sheet"

const components: { title: string; href: string; description: string }[] = [
    {
        title: "Organic Chia Seed",
        href: "/products/organic-chia-seed",
        description: "Premium organic chia seeds for export and local supply.",
    },
    {
        title: "Specs & Grades",
        href: "/products/organic-chia-seed?tab=specs",
        description: "Detailed technical specifications and quality standards.",
    },
    {
        title: "Packaging",
        href: "/products/organic-chia-seed?tab=packaging",
        description: "Flexible packaging options for various market needs.",
    },
]

const farmComponents: { title: string; href: string; description: string }[] = [
    {
        title: "Farm Overview",
        href: "/farm-traceability",
        description: "200-hectare organic farm in South West Ethiopia.",
    },
    {
        title: "Traceability Flow",
        href: "/farm-traceability#traceability",
        description: "From farm to export: transparent supply chain.",
    },
]

export function Header() {
    const [isOpen, setIsOpen] = React.useState(false)

    return (
        <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
            <div className="container flex h-16 items-center justify-between">
                <div className="mr-8 hidden md:flex items-center">
                    <Link href="/" className="mr-6 flex items-center space-x-2">
                        <Image src="/logo.png" alt="Pacer Field Logo" width={48} height={48} className="h-12 w-auto" />
                        <span className="hidden font-bold sm:inline-block text-lg">
                            Pacer Field
                        </span>
                    </Link>
                    <NavigationMenu>
                        <NavigationMenuList>
                            <NavigationMenuItem>
                                <NavigationMenuLink asChild className={navigationMenuTriggerStyle()}>
                                    <Link href="/">
                                        Home
                                    </Link>
                                </NavigationMenuLink>
                            </NavigationMenuItem>
                            <NavigationMenuItem>
                                <NavigationMenuTrigger>Products</NavigationMenuTrigger>
                                <NavigationMenuContent>
                                    <ul className="grid gap-3 p-6 md:w-[400px] lg:w-[500px] lg:grid-cols-[.75fr_1fr]">
                                        <li className="row-span-3">
                                            <NavigationMenuLink asChild>
                                                <a
                                                    className="flex h-full w-full select-none flex-col justify-end rounded-md bg-gradient-to-b from-primary/50 to-muted p-6 no-underline outline-none focus:shadow-md relative overflow-hidden group"
                                                    href="/products/organic-chia-seed"
                                                >
                                                    <Image
                                                        src="/20250830_135235.jpg"
                                                        alt="Organic Chia Seed"
                                                        fill
                                                        className="object-cover transition-transform group-hover:scale-105"
                                                    />
                                                    <div className="absolute inset-0 bg-black/40 group-hover:bg-black/50 transition-colors" />
                                                    <div className="relative z-10">
                                                        <div className="mb-2 mt-4 text-lg font-medium text-white">
                                                            Organic Chia Seed
                                                        </div>
                                                        <p className="text-sm leading-tight text-white/90">
                                                            Bulk production for world markets.
                                                        </p>
                                                    </div>
                                                </a>
                                            </NavigationMenuLink>
                                        </li>
                                        {components.map((component) => (
                                            <ListItem
                                                key={component.title}
                                                title={component.title}
                                                href={component.href}
                                            >
                                                {component.description}
                                            </ListItem>
                                        ))}
                                    </ul>
                                </NavigationMenuContent>
                            </NavigationMenuItem>
                            <NavigationMenuItem>
                                <NavigationMenuTrigger>Farm & Traceability</NavigationMenuTrigger>
                                <NavigationMenuContent>
                                    <ul className="grid w-[400px] gap-3 p-4 md:w-[500px] md:grid-cols-2 lg:w-[600px] ">
                                        {farmComponents.map((component) => (
                                            <ListItem
                                                key={component.title}
                                                title={component.title}
                                                href={component.href}
                                            >
                                                {component.description}
                                            </ListItem>
                                        ))}
                                    </ul>
                                </NavigationMenuContent>
                            </NavigationMenuItem>
                            <NavigationMenuItem>
                                <NavigationMenuLink asChild className={navigationMenuTriggerStyle()}>
                                    <Link href="/quality">
                                        Quality
                                    </Link>
                                </NavigationMenuLink>
                            </NavigationMenuItem>
                            <NavigationMenuItem>
                                <NavigationMenuLink asChild className={navigationMenuTriggerStyle()}>
                                    <Link href="/export">
                                        Export
                                    </Link>
                                </NavigationMenuLink>
                            </NavigationMenuItem>
                            <NavigationMenuItem>
                                <NavigationMenuLink asChild className={navigationMenuTriggerStyle()}>
                                    <Link href="/about">
                                        About
                                    </Link>
                                </NavigationMenuLink>
                            </NavigationMenuItem>
                            <NavigationMenuItem>
                                <NavigationMenuLink asChild className={navigationMenuTriggerStyle()}>
                                    <Link href="/contact">
                                        Contact
                                    </Link>
                                </NavigationMenuLink>
                            </NavigationMenuItem>
                        </NavigationMenuList>
                    </NavigationMenu>
                </div>

                {/* Mobile Menu */}
                <div className="flex flex-1 items-center justify-between md:hidden">
                    <Link href="/" className="mr-6 flex items-center space-x-2">
                        <Image src="/logo.png" alt="Pacer Field Logo" width={40} height={40} className="h-10 w-auto" />
                        <span className="font-bold inline-block text-lg">
                            Pacer Field
                        </span>
                    </Link>
                    <Sheet open={isOpen} onOpenChange={setIsOpen}>
                        <SheetTrigger asChild>
                            <Button variant="ghost" size="icon" className="px-0 w-10 h-10 text-base hover:bg-transparent focus-visible:bg-transparent focus-visible:ring-0 focus-visible:ring-offset-0 md:hidden z-50 relative">
                                <div className="flex flex-col gap-1.5 justify-center items-center">
                                    <motion.span
                                        animate={isOpen ? { rotate: 45, y: 6 } : { rotate: 0, y: 0 }}
                                        className="w-6 h-0.5 bg-foreground block transition-transform origin-center"
                                    />
                                    <motion.span
                                        animate={isOpen ? { opacity: 0 } : { opacity: 1 }}
                                        className="w-6 h-0.5 bg-foreground block transition-opacity"
                                    />
                                    <motion.span
                                        animate={isOpen ? { rotate: -45, y: -8 } : { rotate: 0, y: 0 }}
                                        className="w-6 h-0.5 bg-foreground block transition-transform origin-center"
                                    />
                                </div>
                                <span className="sr-only">Toggle Menu</span>
                            </Button>
                        </SheetTrigger>
                        <SheetContent side="left" className="pr-0 bg-background/95 backdrop-blur-xl border-r w-full sm:w-[350px]">
                            <SheetTitle className="sr-only">Navigation Menu</SheetTitle>
                            <MobileLink
                                href="/"
                                className="flex items-center mb-8 pl-4"
                                onOpenChange={setIsOpen}
                            >
                                <Image src="/logo.png" alt="Pacer Field Logo" width={48} height={48} className="mr-2 h-12 w-auto" />
                                <span className="font-bold text-xl">Pacer Field</span>
                            </MobileLink>

                            <div className="flex flex-col h-[calc(100vh-8rem)] pb-10 overflow-y-auto">
                                <div className="px-4 space-y-1">
                                    {[
                                        { href: "/", label: "Home" },
                                        { href: "/products/organic-chia-seed", label: "Products" },
                                        { href: "/farm-traceability", label: "Farm & Traceability" },
                                        { href: "/quality", label: "Quality" },
                                        { href: "/export", label: "Export" },
                                        { href: "/about", label: "About" },
                                        { href: "/contact", label: "Contact" }
                                    ].map((item, i) => (
                                        <motion.div
                                            key={item.href}
                                            initial={{ opacity: 0, x: -20 }}
                                            animate={{ opacity: 1, x: 0 }}
                                            transition={{ delay: 0.1 + (i * 0.05), duration: 0.3 }}
                                        >
                                            <MobileLink
                                                href={item.href}
                                                onOpenChange={setIsOpen}
                                                className="block py-4 text-lg font-medium border-b border-border/50 hover:text-primary transition-colors"
                                            >
                                                {item.label}
                                            </MobileLink>
                                        </motion.div>
                                    ))}
                                </div>

                                <motion.div
                                    className="mt-auto px-4 pt-8"
                                    initial={{ opacity: 0, y: 20 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    transition={{ delay: 0.5 }}
                                >
                                    <Button asChild className="w-full text-lg h-12" size="lg">
                                        <Link href="/contact" onClick={() => setIsOpen(false)}>
                                            Request Quote
                                        </Link>
                                    </Button>
                                    <p className="text-center text-sm text-muted-foreground mt-6">
                                        &copy; {new Date().getFullYear()} Pacer Field Plc.
                                    </p>
                                </motion.div>
                            </div>
                        </SheetContent>
                    </Sheet>
                </div>

                <div className="hidden md:flex items-center space-x-2">
                    <Button asChild >
                        <Link href="/contact">Request Quote</Link>
                    </Button>
                </div>
            </div>
        </header>
    )
}

const ListItem = React.forwardRef<
    React.ElementRef<"a">,
    React.ComponentPropsWithoutRef<"a">
>(({ className, title, children, ...props }, ref) => {
    return (
        <li>
            <NavigationMenuLink asChild>
                <a
                    ref={ref}
                    className={cn(
                        "block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground group",
                        className
                    )}
                    {...props}
                >
                    <div className="text-sm font-medium leading-none">{title}</div>
                    <p className="line-clamp-2 text-sm leading-snug text-muted-foreground group-hover:text-accent-foreground/90 transition-colors">
                        {children}
                    </p>
                </a>
            </NavigationMenuLink>
        </li>
    )
})
ListItem.displayName = "ListItem"

interface MobileLinkProps extends React.PropsWithChildren {
    href: string
    onOpenChange?: (open: boolean) => void
    children: React.ReactNode
    className?: string
}

function MobileLink({
    href,
    onOpenChange,
    className,
    children,
    ...props
}: MobileLinkProps) {
    return (
        <Link
            href={href}
            onClick={() => {
                onOpenChange?.(false)
            }}
            className={cn(className)}
            {...props}
        >
            {children}
        </Link>
    )
}
