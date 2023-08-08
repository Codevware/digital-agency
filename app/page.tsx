import BrandingBar from "@/components/BrandingBar";
import HeroSection from "@/components/HeroSection";
import HighLights from "@/components/HighLights";

import Portfolio from "@/components/Portfolio";
import Testimonial from "@/components/Testimonial";

export default function Home() {
  return (
    <main className="bg-background">
      <HeroSection />
      <BrandingBar />
      <HighLights />
      <Portfolio />
      <Testimonial />
    </main>
  );
}
