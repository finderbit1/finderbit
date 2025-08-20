import { Button } from "@/components/ui/button";
import heroImage from "@/assets/hero-bg.jpg";

const HeroSection = () => {
  return (
    <section id="home" className="min-h-screen flex items-center relative overflow-hidden">
      <div 
        className="absolute inset-0 opacity-20"
        style={{
          backgroundImage: `url(${heroImage})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      />
      <div className="absolute inset-0 bg-gradient-dark opacity-50" />
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-4xl">
          <h1 className="hero-text mb-6">
            Soluções em Software —
            <br />
            <span className="text-foreground">Bit a bit, código por código</span>
          </h1>
          
          <p className="text-xl md:text-2xl text-muted-foreground mb-8 max-w-2xl leading-relaxed">
            Desenvolvemos landing pages, sistemas personalizados e oferecemos consultoria técnica. 
            Transformamos suas ideias em soluções digitais eficientes.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4">
            <Button 
              size="lg" 
              className="bg-primary hover:bg-primary/90 text-primary-foreground glow-effect"
            >
              Fale com um especialista
            </Button>
            <Button 
              variant="outline" 
              size="lg"
              className="border-primary text-primary hover:bg-primary hover:text-primary-foreground"
            >
              Nossos serviços
            </Button>
          </div>
        </div>
      </div>
      
      {/* Floating orb animation */}
      <div className="absolute top-1/2 right-10 w-64 h-64 opacity-30">
        <div className="w-full h-full rounded-full border-2 border-primary animate-spin" style={{animationDuration: '20s'}}>
          <div className="w-16 h-16 bg-primary rounded-full absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 glow-effect"></div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;