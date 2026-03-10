import { FlaskConical } from 'lucide-react';
import { Separator } from '@/components/ui/separator';

export function Navbar() {
  return (
    <header className="animate-slide-down sticky top-0 z-40 w-full border-b border-border/50 bg-background/90 backdrop-blur-sm">
      <div className="mx-auto flex h-14 max-w-6xl items-center justify-between px-4 md:px-8">
        <div className="flex items-center gap-2.5">
          <div className="flex h-7 w-7 items-center justify-center rounded-md bg-primary/10">
            <FlaskConical className="h-4 w-4 text-primary" />
          </div>
          <span className="text-sm font-semibold tracking-tight text-foreground">
            CE Laboratory Documents Portal
          </span>
        </div>

        <div className="hidden items-center gap-2 text-xs text-muted-foreground sm:flex">
          <span>University of Mindanao</span>
          <Separator orientation="vertical" className="h-3" />
          <span>College of Engineering</span>
        </div>
      </div>
    </header>
  );
}
