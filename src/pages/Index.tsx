import { useEffect } from "react";
import { TopBarNotice } from "@/components/TopBarNotice";
import { ScrollProgress } from "@/components/ScrollProgress";
import { HeroTitle } from "@/components/HeroTitle";
import VideoHero from "@/components/VideoHero";
import SellFluxForm from "@/components/SellFluxForm";
import { HeroBenefits } from "@/components/HeroBenefits";
import { HeroActions } from "@/components/HeroActions";
import { VideoSection } from "@/components/VideoSection";
import { OfferCard } from "@/components/OfferCard";
import { ChartDemo } from "@/components/ChartDemo";
import { BenefitsSection } from "@/components/BenefitsSection";
import { ReasonsGrid } from "@/components/ReasonsGrid";
import { TestimonialsSection } from "@/components/TestimonialsSection";
import { StatsSection } from "@/components/StatsSection";
import { ChatBot } from "@/components/ChatBot";
import { Footer } from "@/components/Footer";
import MacbookScrollDemo from "@/components/MacbookScrollDemo";
import { LiveStats } from "@/components/LiveStats";
import { BenefitsHighlight } from "@/components/BenefitsHighlight";
import { SocialDock } from "@/components/SocialDock";
import { AboutTrader } from "@/components/AboutTrader";

const Index = () => {
  useEffect(() => {
    // Scroll to top on page load
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen bg-background">
      <ScrollProgress />
      <TopBarNotice />
      <main>
        <HeroTitle />
        <VideoHero />
        <SellFluxForm />
        <HeroBenefits />
        <HeroActions />
        <LiveStats />
        <ChartDemo />
        <VideoSection />
        <OfferCard />
        <BenefitsHighlight />
        <MacbookScrollDemo />
        <BenefitsSection />
        <ReasonsGrid />
        <TestimonialsSection />
        <AboutTrader />
        <StatsSection />
        <ChatBot />
      </main>
      <Footer />
      <SocialDock />
    </div>
  );
};

export default Index;
