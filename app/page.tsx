import { Hero } from "@/components/home/Hero"
import { Stats } from "@/components/home/Stats"
import { Objectives } from "@/components/home/Objectives"
import { Process } from "@/components/home/Process"
import { TrustCarousel } from "@/components/home/TrustCarousel"

export default function Home() {
  return (
    <div className="flex flex-col gap-4">
      <Hero />
      <Stats />
      <Objectives />
      <Process />
      <TrustCarousel />
    </div>
  );
}
