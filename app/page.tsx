"use client"

import { Hero } from "@/components/home/Hero"
import { Stats } from "@/components/home/Stats"
import { Objectives } from "@/components/home/Objectives"
import { Process } from "@/components/home/Process"
import { TrustCarousel } from "@/components/home/TrustCarousel"
import { HomeGallery } from "@/components/home/HomeGallery"
import { HomeCTA } from "@/components/home/HomeCTA"
import { motion } from "framer-motion"

export default function Home() {
  return (
    <div className="flex flex-col gap-0 overflow-hidden">
      <Hero />

      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 1 }}
        viewport={{ once: true }}
      >
        <Stats />
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true, margin: "-100px" }}
      >
        <Objectives />
      </motion.div>

      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        whileInView={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true, margin: "-100px" }}
      >
        <HomeGallery />
      </motion.div>

      <motion.div
        initial={{ opacity: 0, x: -50 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true, margin: "-100px" }}
      >
        <Process />
      </motion.div>

      <HomeCTA />

      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 1.2 }}
        viewport={{ once: true }}
      >
        <TrustCarousel />
      </motion.div>
    </div>
  );
}
