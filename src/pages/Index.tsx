
import Header from "@/components/Header";
import HeroSection from "@/components/HeroSection";
import ServicesSection from "@/components/ServicesSection";
import TechnologiesSection from "@/components/TechnologiesSection";
import PortfolioSection from "@/components/PortfolioSection";
import Footer from "@/components/Footer";
import BitcoinCoin from "@/components/BitcoinCoin";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <BitcoinCoin />
      <main>
        <HeroSection />
        <ServicesSection />
        <TechnologiesSection />
        <PortfolioSection />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
