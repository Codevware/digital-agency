import BrandingBar from "@/components/BrandingBar";
import HeroSection from "@/components/HeroSection";
import HighLights from "@/components/HighLights";

import Portfolio from "@/components/Portfolio";

export default function Home() {
  return (
    <main className="bg-background h-screen">
      <HeroSection />
      <BrandingBar />
      <HighLights />
      {/* <Portfolio /> */}
    </main>
  );
}
