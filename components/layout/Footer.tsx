import Link from "next/link"
import Image from "next/image"

export function Footer() {
    return (
        <footer className="border-t bg-muted/40">
            <div className="container py-10 md:py-16">
                <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
                    <div className="space-y-4">
                        <Link href="/" className="flex items-center space-x-2">
                            <Image src="/logo.png" alt="Pacer Field Logo" width={32} height={32} className="h-8 w-auto" />
                            <span className="font-bold">Pacer Field Plc</span>
                        </Link>
                        <p className="text-sm text-muted-foreground">
                            Development partner committed to Ethiopian socio-economic development through organic agricultural export.
                        </p>
                    </div>
                    <div>
                        <h3 className="font-semibold mb-3">Products</h3>
                        <ul className="space-y-2 text-sm">
                            <li>
                                <Link href="/products/organic-chia-seed" className="text-muted-foreground hover:text-foreground">
                                    Organic Chia Seed
                                </Link>
                            </li>
                            <li>
                                <Link href="/products/organic-chia-seed?tab=specs" className="text-muted-foreground hover:text-foreground">
                                    Specs & Grades
                                </Link>
                            </li>
                            <li>
                                <Link href="/products/organic-chia-seed?tab=packaging" className="text-muted-foreground hover:text-foreground">
                                    Packaging
                                </Link>
                            </li>
                        </ul>
                    </div>
                    <div>
                        <h3 className="font-semibold mb-3">Company</h3>
                        <ul className="space-y-2 text-sm">
                            <li>
                                <Link href="/about" className="text-muted-foreground hover:text-foreground">
                                    About Us
                                </Link>
                            </li>
                            <li>
                                <Link href="/farm-traceability" className="text-muted-foreground hover:text-foreground">
                                    Farm & Traceability
                                </Link>
                            </li>
                            <li>
                                <Link href="/quality" className="text-muted-foreground hover:text-foreground">
                                    Quality Approach
                                </Link>
                            </li>
                        </ul>
                    </div>
                    <div>
                        <h3 className="font-semibold mb-3">Contact</h3>
                        <ul className="space-y-2 text-sm">
                            <li>
                                <Link href="/contact" className="text-muted-foreground hover:text-foreground">
                                    Request Quote
                                </Link>
                            </li>
                            <li className="text-muted-foreground">
                                South Omo Zone, Menite Goldiya, Ethiopia
                            </li>
                            <li className="text-muted-foreground">
                                Email: [Pending]
                            </li>
                        </ul>
                    </div>
                </div>
                <div className="mt-10 border-t pt-6 text-center text-xs text-muted-foreground">
                    <p>&copy; {new Date().getFullYear()} Pacer Field Plc. All rights reserved.</p>
                </div>
            </div>
        </footer>
    )
}
