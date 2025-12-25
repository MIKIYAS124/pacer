import { FarmHero } from "@/components/farm/FarmHero"
import { FarmOverview } from "@/components/farm/FarmOverview"
import { TraceabilityTimeline } from "@/components/farm/TraceabilityTimeline"

export default function FarmTraceabilityPage() {
    return (
        <>
            <FarmHero />
            <FarmOverview />
            <TraceabilityTimeline />
        </>
    )
}
