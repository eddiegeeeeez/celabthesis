import { Badge } from '@/components/ui/badge';
import { Separator } from '@/components/ui/separator';
import { FileDown, ShieldCheck, RefreshCw } from 'lucide-react';
import Image from 'next/image';

export function HeroSection() {
  return (
    <section className="relative overflow-hidden px-4 py-24 md:py-32">
      {/* Background image */}
      <Image
        src="/um-building.jpg"
        alt="University of Mindanao"
        fill
        priority
        className="object-cover object-center"
        sizes="100vw"
      />
      {/* Dark overlay so text stays legible */}
      <div className="pointer-events-none absolute inset-0 bg-black/60" />
      {/* Bottom fade into page background */}
      <div className="pointer-events-none absolute inset-x-0 bottom-0 h-24 bg-gradient-to-t from-background to-transparent" />

      <div className="relative mx-auto max-w-3xl space-y-7 text-center">
        <Badge
          className="animate-fade-up border-white/20 bg-white/10 px-3 py-1 text-xs text-white backdrop-blur-sm"
          style={{ animationDelay: '0.05s' }}
        >
          Official Document Repository
        </Badge>

        <div className="space-y-4">
          <h1
            className="animate-fade-up text-balance text-4xl font-bold tracking-tight text-white md:text-5xl xl:text-6xl"
            style={{ animationDelay: '0.2s' }}
          >
            Civil Engineering{' '}
            <span className="text-primary">Laboratory</span>{' '}
            Documents
          </h1>
          <p
            className="animate-fade-up mx-auto max-w-xl text-balance text-base leading-relaxed text-white/70 md:text-lg"
            style={{ animationDelay: '0.32s' }}
          >
            Download official forms, test result sheets, clearance documents, and laboratory
            resources — no sign-in needed.
          </p>
        </div>

        <Separator
          className="animate-fade-up mx-auto max-w-[8rem] bg-white/20"
          style={{ animationDelay: '0.42s' }}
        />

        <div
          className="animate-fade-up flex flex-wrap items-center justify-center gap-x-6 gap-y-2 text-sm text-white/70"
          style={{ animationDelay: '0.52s' }}
        >
          <div className="flex items-center gap-1.5">
            <FileDown className="h-3.5 w-3.5 text-primary" />
            <span>6 documents available</span>
          </div>
          <div className="flex items-center gap-1.5">
            <ShieldCheck className="h-3.5 w-3.5 text-primary" />
            <span>No sign-in required</span>
          </div>
          <div className="flex items-center gap-1.5">
            <RefreshCw className="h-3.5 w-3.5 text-primary" />
            <span>Always up to date</span>
          </div>
        </div>
      </div>
    </section>
  );
}
