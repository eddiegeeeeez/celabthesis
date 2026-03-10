import { Badge } from '@/components/ui/badge';
import { Separator } from '@/components/ui/separator';
import { FileDown, ShieldCheck, RefreshCw } from 'lucide-react';
import Image from 'next/image';

export function HeroSection() {
  return (
    <section className="relative overflow-hidden px-5 py-20 sm:px-8 sm:py-28 md:py-36">
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
      <div className="pointer-events-none absolute inset-0 bg-black/65" />
      {/* Bottom fade into page background */}
      <div className="pointer-events-none absolute inset-x-0 bottom-0 h-28 bg-gradient-to-t from-background to-transparent" />

      <div className="relative mx-auto max-w-3xl text-center">
        <Badge
          className="animate-fade-up mb-6 border-white/20 bg-white/10 px-3 py-1.5 text-xs text-white backdrop-blur-sm"
          style={{ animationDelay: '0.05s' }}
        >
          Official Document Repository
        </Badge>

        <h1
          className="animate-fade-up mb-5 text-balance text-3xl font-bold leading-tight tracking-tight text-white sm:text-4xl md:text-5xl xl:text-6xl"
          style={{ animationDelay: '0.2s' }}
        >
          Civil Engineering{' '}
          <span className="text-primary">Laboratory</span>{' '}
          Documents
        </h1>

        <p
          className="animate-fade-up mx-auto mb-8 max-w-lg text-balance text-sm leading-relaxed text-white/75 sm:text-base md:text-lg"
          style={{ animationDelay: '0.32s' }}
        >
          Download official forms, test result sheets, clearance documents, and laboratory
          resources — no sign-in needed.
        </p>

        <Separator
          className="animate-fade-up mx-auto mb-8 max-w-[6rem] bg-white/20"
          style={{ animationDelay: '0.42s' }}
        />

        {/* Pills — stack on tiny phones, row on sm+ */}
        <div
          className="animate-fade-up flex flex-col items-center gap-3 text-sm text-white/70 sm:flex-row sm:justify-center sm:gap-6"
          style={{ animationDelay: '0.52s' }}
        >
          <div className="flex items-center gap-2">
            <FileDown className="h-4 w-4 shrink-0 text-primary" />
            <span>6 documents available</span>
          </div>
          <div className="flex items-center gap-2">
            <ShieldCheck className="h-4 w-4 shrink-0 text-primary" />
            <span>No sign-in required</span>
          </div>
          <div className="flex items-center gap-2">
            <RefreshCw className="h-4 w-4 shrink-0 text-primary" />
            <span>Always up to date</span>
          </div>
        </div>
      </div>
    </section>
  );
}
