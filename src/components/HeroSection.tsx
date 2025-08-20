
import { Button } from "@/components/ui/button";
import heroImage from "@/assets/hero-bg.jpg";

const HeroSection = () => {
  return (
    <section id="home" className="min-h-screen flex items-center relative overflow-hidden">
      <div 
        className="absolute inset-0 opacity-20 animate-scale-in"
        style={{
          backgroundImage: `url(${heroImage})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      />
      <div className="absolute inset-0 bg-gradient-dark opacity-50" />
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-4xl">
          <h1 className="hero-text mb-6 animate-fade-in-up">
            Soluções em Software —
            <br />
            <span className="text-foreground animate-fade-in-up" style={{animationDelay: '0.3s'}}>Bit a bit, solução por solução</span>
          </h1>
          
          <p className="text-xl md:text-2xl text-muted-foreground mb-8 max-w-2xl leading-relaxed animate-fade-in-up" style={{animationDelay: '0.6s'}}>
            Desenvolvemos landing pages, sistemas personalizados e oferecemos consultoria técnica. 
            Transformamos suas ideias em soluções digitais eficientes.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 animate-fade-in-up" style={{animationDelay: '0.9s'}}>
            <Button 
              size="lg" 
              className="bg-primary hover:bg-primary/90 text-primary-foreground glow-effect hover:scale-105 transition-all duration-300 animate-bounce-gentle"
            >
              Fale com um especialista
            </Button>
            <Button 
              variant="outline" 
              size="lg"
              className="border-primary text-primary hover:bg-primary hover:text-primary-foreground hover:scale-105 transition-all duration-300"
            >
              Nossos serviços
            </Button>
          </div>
        </div>
      </div>
      
      {/* Enhanced floating orb animation */}
      <div className="absolute top-1/2 right-10 w-64 h-64 opacity-30 animate-float">
        <div className="w-full h-full rounded-full border-2 border-primary animate-rotate-slow">
          <div className="w-16 h-16 bg-primary rounded-full absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 glow-effect animate-pulse-glow"></div>
          <div className="w-8 h-8 bg-primary/50 rounded-full absolute top-1/4 left-1/4 transform -translate-x-1/2 -translate-y-1/2 animate-bounce-gentle"></div>
          <div className="w-6 h-6 bg-primary/30 rounded-full absolute bottom-1/4 right-1/4 transform translate-x-1/2 translate-y-1/2 animate-float" style={{animationDelay: '1s'}}></div>
        </div>
      </div>
      
      {/* Additional floating elements */}
      <div className="absolute top-1/4 left-10 w-4 h-4 bg-primary/40 rounded-full animate-bounce-gentle" style={{animationDelay: '0.5s'}}></div>
      <div className="absolute bottom-1/3 left-20 w-6 h-6 bg-primary/30 rounded-full animate-float" style={{animationDelay: '1.5s'}}></div>
      <div className="absolute top-2/3 right-1/4 w-3 h-3 bg-primary/50 rounded-full animate-bounce-gentle" style={{animationDelay: '2s'}}></div>
    </section>
  );
};

export default HeroSection;
