import Header from "./(lp)/components/Header";
import Hero from "./(lp)/components/Hero";
import BackgroundSection from "./(lp)/components/BackgroundSection";
import PointsSection from "./(lp)/components/PointsSection";
import CampaignSection from "./(lp)/components/CampaignSection";
import MessageSection from "./(lp)/components/MessageSection";
import SupportCommentSection from "./(lp)/components/SupportCommentSection";
import MediaSection from "./(lp)/components/MediaSection";
import OutlineSection from "./(lp)/components/OutlineSection";
import FinalCTASection from "./(lp)/components/FinalCTASection";
import Footer from "./(lp)/components/Footer";

export default function Home() {
  return (
    <main className="min-h-screen">
      <Header />
      <Hero />
      <BackgroundSection />
      <PointsSection />
      <CampaignSection />
      <MessageSection />
      <SupportCommentSection />
      <MediaSection />
      <OutlineSection />
      <FinalCTASection />
      <Footer />
    </main>
  );
}
