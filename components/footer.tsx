import { FlaskConical } from 'lucide-react';

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="border-t border-border/50 bg-background">
      <div className="animate-fade-in mx-auto flex max-w-6xl flex-col items-start justify-between gap-4 px-4 py-8 sm:flex-row sm:items-center md:px-8" style={{ animationDelay: '0.3s' }}>
        <div className="flex items-center gap-2.5">
          <div className="flex h-7 w-7 items-center justify-center rounded-md bg-primary/10">
            <FlaskConical className="h-4 w-4 text-primary" />
          </div>
          <div>
            <p className="text-sm font-semibold leading-none text-foreground">CE Lab Portal</p>
            <p className="mt-0.5 text-xs text-muted-foreground">
              University of Mindanao · College of Engineering
            </p>
          </div>
        </div>

        <p className="text-xs text-muted-foreground">
          © {currentYear} Civil Engineering Laboratory. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
