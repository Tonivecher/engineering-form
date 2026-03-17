import { ContactSection } from "./components/ContactSection";
import { CustomCursor } from "./components/CustomCursor";
import { GallerySection } from "./components/GallerySection";
import { HeroSection } from "./components/HeroSection";
import { PageShell } from "./components/PageShell";
import { PhilosophySection } from "./components/PhilosophySection";
import { SiteHeader } from "./components/SiteHeader";
import { SmoothScrollProvider } from "./components/SmoothScrollProvider";

function App() {
  return (
    <SmoothScrollProvider>
      <PageShell>
        <CustomCursor />
        <SiteHeader />
        <main>
          <HeroSection />
          <PhilosophySection />
          <GallerySection />
          <ContactSection />
        </main>
      </PageShell>
    </SmoothScrollProvider>
  );
}

export default App;
