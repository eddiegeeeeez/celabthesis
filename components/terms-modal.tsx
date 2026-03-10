'use client';

import { useState } from 'react';
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from '@/components/ui/dialog';
import { Button } from '@/components/ui/button';

export function TermsModal() {
  const [accepted, setAccepted] = useState(false);
  const [open, setOpen] = useState(true);

  const handleAccept = () => {
    if (!accepted) return;
    setOpen(false);
  };

  return (
    <Dialog open={open} modal>
      <DialogContent
        showCloseButton={false}
        className="flex flex-col max-h-[90dvh] p-0 w-[calc(100%-2rem)] sm:max-w-2xl rounded-xl border shadow-lg"
        onInteractOutside={(e) => e.preventDefault()}
        onEscapeKeyDown={(e) => e.preventDefault()}
      >
        {/* Header */}
        <DialogHeader className="flex-shrink-0 px-6 pt-6 pb-4 border-b">
          <DialogTitle className="text-xl font-semibold">
            Terms and Conditions
          </DialogTitle>
          <DialogDescription>
            Please read the following terms before accessing the Civil Engineering Laboratory Documents Portal. This applies to all students — whether you are enrolled in a laboratory class or working on your thesis.
          </DialogDescription>
        </DialogHeader>

        {/* Scrollable Content */}
        <div className="flex-1 overflow-y-auto px-6 py-6 text-sm space-y-6">

          <section className="space-y-1.5">
            <h3 className="font-semibold text-foreground">1. Who Can Use This Portal</h3>
            <p className="text-muted-foreground leading-relaxed">
              This portal is open to all students of the University of Mindanao who are currently
              using the Civil Engineering Laboratory — including students enrolled in laboratory
              classes and those working on thesis research. Faculty members and authorized laboratory
              personnel may also access this portal as needed.
            </p>
          </section>

          <section className="space-y-1.5">
            <h3 className="font-semibold text-foreground">2. Purpose of the Portal</h3>
            <p className="text-muted-foreground leading-relaxed">
              This portal is intended for accessing and downloading official Civil Engineering
              Laboratory documents. This includes testing results, equipment forms, clearance
              requirements, and guidelines relevant to both laboratory class students and thesis
              students. All documents are provided by the laboratory for legitimate academic use.
            </p>
          </section>

          <section className="space-y-1.5">
            <h3 className="font-semibold text-foreground">3. Proper Use of Documents</h3>
            <p className="text-muted-foreground leading-relaxed">
              Documents downloaded from this portal should be used only for academic and institutional
              purposes. Class students should submit applicable forms to their instructor or laboratory
              staff. Thesis students should submit documents through the proper channels as required
              by their thesis adviser or the laboratory office.
            </p>
          </section>

          <section className="space-y-1.5">
            <h3 className="font-semibold text-foreground">4. Document Accuracy</h3>
            <p className="text-muted-foreground leading-relaxed">
              The laboratory makes every effort to keep all documents accurate and up to date. If you
              notice any discrepancies in testing results or forms, please report them directly to the
              Civil Engineering Laboratory office for verification and correction.
            </p>
          </section>

          <section className="space-y-1.5">
            <h3 className="font-semibold text-foreground">5. Respectful Use</h3>
            <p className="text-muted-foreground leading-relaxed">
              Users are expected to access only the documents they need. Sharing access links outside
              the institution or misrepresenting official laboratory documents is discouraged and may
              affect your standing with the department.
            </p>
          </section>

          <section className="space-y-1.5">
            <h3 className="font-semibold text-foreground">6. Privacy</h3>
            <p className="text-muted-foreground leading-relaxed">
              This portal does not collect personal information and no login is required. Any data
              visible in laboratory result documents is handled in accordance with the university&apos;s
              data privacy policy.
            </p>
          </section>

          <section className="space-y-1.5">
            <h3 className="font-semibold text-foreground">7. Availability</h3>
            <p className="text-muted-foreground leading-relaxed">
              The portal is provided on a best-effort basis. Occasional downtime may occur for
              maintenance or updates. For urgent document needs, please contact the Civil Engineering
              Laboratory directly.
            </p>
          </section>

        </div>

        {/* Footer */}
        <DialogFooter className="flex-shrink-0 border-t px-4 py-4 sm:px-6 flex flex-col gap-3 bg-background">
          <label className="flex items-center gap-2.5 text-sm cursor-pointer select-none">
            <input
              type="checkbox"
              checked={accepted}
              onChange={(e) => setAccepted(e.target.checked)}
              className="h-4 w-4 cursor-pointer"
            />
            I have read and accept the Terms and Conditions
          </label>

          <Button disabled={!accepted} onClick={handleAccept} className="w-full sm:w-auto sm:self-end">
            Proceed to Portal
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}
