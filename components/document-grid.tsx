import { BarChart3, FileCheck, ClipboardList, GraduationCap, Beaker, ScrollText, type LucideIcon } from 'lucide-react';
import { DocumentCard } from './document-card';

interface Document {
  title: string;
  description: string;
  icon: LucideIcon;
  category: string;
  fileType: string;
  href?: string;
}

const documents: Document[] = [
  {
    title: 'Laboratory Testing Results',
    description:
      'Comprehensive testing data, analysis reports, and official test scores for submitted samples.',
    icon: BarChart3,
    category: 'Results',
    fileType: 'PDF',
  },
  {
    title: 'Testing Format Guidelines',
    description:
      'Format specifications, templates, and requirements for all assessment submissions.',
    icon: FileCheck,
    category: 'Guidelines',
    fileType: 'Folder',
    href: 'https://drive.google.com/drive/folders/1dIZeIU4IQnLw38W9sZzRQH03ejHQqoGk?usp=drive_link',
  },
  {
    title: 'Equipment Borrowing Slip',
    description:
      'Official form to request and track laboratory equipment loans and checkout records.',
    icon: ClipboardList,
    category: 'Form',
    fileType: 'PDF',
    href: 'https://drive.google.com/file/d/1CmmNeWS-cATaPTybu8VO9_-BJVd8l-1G/view',
  },
  {
    title: 'Student Clearance Form',
    description:
      'Complete and submit thesis clearance applications and supporting documentation.',
    icon: GraduationCap,
    category: 'Form',
    fileType: 'PDF',
    href: 'https://drive.google.com/file/d/1HYR06T_r4GwxO711PE5E-FzEd9ysss1_/view',
  },
  {
    title: 'Laboratory Access Request',
    description:
      'Schedule lab sessions and request special facility access or equipment permissions.',
    icon: Beaker,
    category: 'Request',
    fileType: 'PDF',
    href: 'https://drive.google.com/file/d/1d2t8HXsj7rctmHEQU9CaaH0inGT5Dv71/view',
  },
  {
    title: 'Terms and Conditions Form',
    description:
      'Review and acknowledge the laboratory terms and conditions before using any facility or equipment.',
    icon: ScrollText,
    category: 'Form',
    fileType: 'PDF',
    href: 'https://drive.google.com/file/d/1fZCbm3gpiTGvrHqindy3Q78oEsw6o5WW/view',
  },
];

export function DocumentGrid() {
  return (
    <section className="bg-muted/30 px-4 py-12 md:px-8 md:py-16">
      <div className="mx-auto max-w-6xl">
        {/* Section header */}
        <div className="animate-fade-up mb-8 space-y-1">
          <div className="flex items-center gap-2.5">
            <h2 className="text-xl font-semibold text-foreground">Available Documents</h2>
            <span className="inline-flex h-5 w-5 items-center justify-center rounded-full bg-primary/10 text-xs font-medium text-primary">
              {documents.length}
            </span>
          </div>
          <p className="text-sm text-muted-foreground">
            Click any card to download the document directly.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {documents.map((doc, index) => (
            <DocumentCard key={index} index={index} {...doc} />
          ))}
        </div>
      </div>
    </section>
  );
}
