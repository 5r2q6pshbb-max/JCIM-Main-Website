"use client";

import { RevealOnScroll } from "@/components/shared/reveal-on-scroll";
import { ChamferButton } from "@/components/shared/chamfer-button";
import { GoldDivider } from "@/components/shared/gold-divider";
import { Heart, Globe, BookOpen, Users } from "lucide-react";

const impactAreas = [
  { icon: BookOpen, label: "Foundation Schools" },
  { icon: Users, label: "Cell Groups" },
  { icon: Globe, label: "Global Missions" },
  { icon: Heart, label: "Community Care" },
];

export function GivingSection() {
  return (
    <section className="relative py-24 md:py-32 overflow-hidden">
      {/* Animated gradient background */}
      <div className="absolute inset-0 bg-navy-deep" />
      <div className="absolute inset-0 bg-gradient-to-br from-gold/[0.03] via-transparent to-gold/[0.05]" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(199,163,79,0.06)_0%,transparent_50%)]" />

      {/* Top and bottom borders */}
      <div className="absolute top-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-gold/30 to-transparent" />
      <div className="absolute bottom-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-gold/30 to-transparent" />

      <div className="relative max-w-4xl mx-auto text-center px-4">
        <RevealOnScroll>
          <span className="inline-block text-[11px] tracking-[0.3em] uppercase text-gold mb-4 font-mono">
            &#x2756; Partner With Us &#x2756;
          </span>

          <h2 className="font-[family-name:var(--font-playfair)] text-3xl md:text-4xl lg:text-5xl text-warm-white font-bold leading-tight">
            Invest in <span className="gold-text">Eternity</span>
          </h2>

          <p className="mt-6 text-ivory/50 text-lg max-w-2xl mx-auto leading-relaxed">
            Your generosity fuels the mission — funding Foundation Schools, cell group
            multiplication, campus outreaches, and global church planting initiatives.
          </p>
        </RevealOnScroll>

        <RevealOnScroll delay={0.2}>
          <GoldDivider className="my-10" />

          {/* Impact areas */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-10">
            {impactAreas.map((area) => (
              <div key={area.label} className="text-center">
                <div className="w-12 h-12 mx-auto border border-gold/15 flex items-center justify-center mb-3">
                  <area.icon className="w-5 h-5 text-gold/60" />
                </div>
                <p className="text-xs text-ivory/40 tracking-wider">
                  {area.label}
                </p>
              </div>
            ))}
          </div>
        </RevealOnScroll>

        <RevealOnScroll delay={0.3}>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <ChamferButton href="/give" size="lg">
              Give Now
            </ChamferButton>
            <ChamferButton href="/give" variant="outline" size="lg">
              Become a Partner
            </ChamferButton>
          </div>

          <p className="mt-8 font-[family-name:var(--font-lora)] italic text-sm text-ivory/20">
            &ldquo;Each of you should give what you have decided in your heart to give, not
            reluctantly or under compulsion, for God loves a cheerful giver.&rdquo;
          </p>
          <p className="mt-1 text-[10px] text-gold/20 tracking-wider">
            2 Corinthians 9:7
          </p>
        </RevealOnScroll>
      </div>
    </section>
  );
}
