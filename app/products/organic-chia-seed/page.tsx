import { QuotePanel } from "@/components/product/QuotePanel"
import { ProductContent } from "@/components/product/ProductContent"

export default function OrganicChiaSeedPage() {
    return (
        <div className="container py-12 md:py-20 lg:py-24">
            <div className="grid lg:grid-cols-[1fr_380px] gap-12 items-start">
                <main>
                    <ProductContent />
                </main>
                <aside className="hidden lg:block">
                    <QuotePanel />
                </aside>
            </div>
            {/* Mobile Quote CTA/Panel could go here or rely on the sticky header 'Request Quote' */}
            <div className="lg:hidden mt-12">
                <QuotePanel />
            </div>
        </div>
    )
}
