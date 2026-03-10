import { FlaskConical } from 'lucide-react';
import { Separator } from '@/components/ui/separator';

export function Navbar() {
  return (
    <header className="animate-slide-down sticky top-0 z-40 w-full border-b border-border/50 bg-background/90 backdrop-blur-sm">
      <div className="mx-auto flex h-14 max-w-6xl items-center justify-between gap-3 px-4 md:px-8">
        <div className="flex min-w-0 items-center gap-2.5">
          <div className="flex h-7 w-7 shrink-0 items-center justify-center rounded-md bg-primary/10">
            <FlaskConical className="h-4 w-4 text-primary" />
          </div>
          {/* Short name on mobile, full name on sm+ */}
          <span className="truncate text-sm font-semibold tracking-tight text-foreground sm:hidden">
            CE Lab Portal
          </span>
          <span className="hidden truncate text-sm font-semibold tracking-tight text-foreground sm:block">
            CE Laboratory Documents Portal
          </span>
        </div>

        <div className="hidden shrink-0 items-center gap-2 text-xs text-muted-foreground md:flex">
          <span>University of Mindanao</span>
          <Separator orientation="vertical" className="h-3" />
          <span>College of Engineering</span>
        </div>
      </div>
    </header>
  );
}
