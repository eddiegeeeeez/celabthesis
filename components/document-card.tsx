import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Download, Clock, type LucideIcon } from 'lucide-react';

interface DocumentCardProps {
  title: string;
  description: string;
  icon: LucideIcon;
  category: string;
  fileType: string;
  href?: string;
  hrefLabel?: string;
  secondaryHref?: string;
  secondaryLabel?: string;
  index?: number;
}

export function DocumentCard({ title, description, icon: Icon, category, fileType, href, hrefLabel, secondaryHref, secondaryLabel, index = 0 }: DocumentCardProps) {
  return (
    <Card
      className="animate-fade-up group flex flex-col border-border/60 transition-all duration-150 hover:border-primary/30 hover:shadow-md"
      style={{ animationDelay: `${0.1 + index * 0.08}s` }}
    >
      <CardHeader className="pb-3">
        <div className="mb-3 flex items-start justify-between gap-2">
          <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-primary/10 text-primary ring-1 ring-primary/10">
            <Icon className="h-5 w-5" />
          </div>
          <Badge variant="secondary" className="shrink-0 text-xs font-medium">
            {category}
          </Badge>
        </div>
        <CardTitle className="text-sm font-semibold leading-snug text-foreground">
          {title}
        </CardTitle>
        <CardDescription className="mt-0.5 text-xs leading-relaxed">
          {description}
        </CardDescription>
      </CardHeader>

      <CardContent className="mt-auto pb-4 pt-0">
        {href && secondaryHref ? (
          <div className="flex flex-col gap-2">
            <Button size="sm" className="h-10 w-full gap-2 text-xs sm:h-8" asChild>
              <a href={href} target="_blank" rel="noopener noreferrer">
                <Download className="h-3.5 w-3.5" />
                {hrefLabel ?? `Open ${fileType}`}
              </a>
            </Button>
            <Button size="sm" variant="outline" className="h-10 w-full gap-2 text-xs sm:h-8" asChild>
              <a href={secondaryHref} target="_blank" rel="noopener noreferrer">
                <Download className="h-3.5 w-3.5" />
                {secondaryLabel ?? `Open ${fileType}`}
              </a>
            </Button>
          </div>
        ) : href ? (
          <Button size="sm" className="h-10 w-full gap-2 text-xs sm:h-8" asChild>
            <a href={href} target="_blank" rel="noopener noreferrer">
              <Download className="h-3.5 w-3.5" />
              {hrefLabel ?? `Open ${fileType}`}
            </a>
          </Button>
        ) : (
          <Button size="sm" variant="outline" className="h-10 w-full gap-2 text-xs sm:h-8" disabled>
            <Clock className="h-3.5 w-3.5" />
            Coming Soon
          </Button>
        )}
      </CardContent>
    </Card>
  );
}
