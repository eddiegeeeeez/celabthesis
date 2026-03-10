import { Navbar } from '@/components/navbar';
import { HeroSection } from '@/components/hero-section';
import { DocumentGrid } from '@/components/document-grid';
import { Footer } from '@/components/footer';
import { TermsModal } from '@/components/terms-modal';

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col bg-background">
      <TermsModal />
      <Navbar />
      <main className="flex-1">
        <HeroSection />
        <DocumentGrid />
      </main>
      <Footer />
    </div>
  );
}
