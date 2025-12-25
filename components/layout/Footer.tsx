import Link from "next/link"
import Image from "next/image"

export function Footer() {
    return (
        <footer className="bg-primary text-primary-foreground border-t border-primary/20">
            <div className="container py-12 md:py-16">
                <div className="grid grid-cols-1 md:grid-cols-4 gap-12">
                    <div className="col-span-1 md:col-span-1 space-y-4">
                        <Link href="/" className="flex items-center space-x-2">
                            <Image src="/logo.png" alt="Pacer Field Logo" width={40} height={40} className="brightness-0 invert" />
                            <span className="font-bold text-xl tracking-tight">Pacer Field Plc</span>
                        </Link>
                        <p className="text-primary-foreground/80 text-sm leading-relaxed">
                            Leading producer and exporter of premium organic chia seeds. We are committed to Ethiopia's agricultural development.
                        </p>
                    </div>

                    <div>
                        <h3 className="font-semibold text-lg mb-6">Explore</h3>
                        <ul className="space-y-3 text-sm text-primary-foreground/70">
                            <li><Link href="/" className="hover:text-white transition-colors">Home</Link></li>
                            <li><Link href="/products/organic-chia-seed" className="hover:text-white transition-colors">Products</Link></li>
                            <li><Link href="/farm-traceability" className="hover:text-white transition-colors">Farm & Traceability</Link></li>
                        </ul>
                    </div>

                    <div>
                        <h3 className="font-semibold text-lg mb-6">Company</h3>
                        <ul className="space-y-3 text-sm text-primary-foreground/70">
                            <li><Link href="/about" className="hover:text-white transition-colors">About Us</Link></li>
                            <li><Link href="/quality" className="hover:text-white transition-colors">Quality Approach</Link></li>
                            <li><Link href="/export" className="hover:text-white transition-colors">Export Process</Link></li>
                        </ul>
                    </div>

                    <div>
                        <h3 className="font-semibold text-lg mb-6">Contact</h3>
                        <ul className="space-y-3 text-sm text-primary-foreground/70">
                            <li>South Omo Zone, Ethiopia</li>
                            <li>info@pacerfield.com</li>
                            <li>+251 911 123456</li>
                            <li className="pt-2">
                                <Link href="/contact" className="inline-block py-2 px-4 bg-white/10 hover:bg-white/20 rounded-md transition-colors text-white">
                                    Send Inquiry
                                </Link>
                            </li>
                        </ul>
                    </div>
                </div>

                <div className="mt-16 pt-8 border-t border-white/10 flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-primary-foreground/60">
                    <p>&copy; {new Date().getFullYear()} Pacer Field Plc. All rights reserved.</p>
                    <div className="flex gap-6">
                        <Link href="#" className="hover:text-white transition-colors">Privacy Policy</Link>
                        <Link href="#" className="hover:text-white transition-colors">Terms of Service</Link>
                    </div>
                </div>
            </div>
        </footer>
    )
}
