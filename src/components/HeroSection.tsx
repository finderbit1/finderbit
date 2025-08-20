
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
            Finderbit —
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
      
      {/* Sistema orbital planetário */}
      <div className="absolute top-1/2 right-10 w-80 h-80 opacity-40">
        {/* Órbita principal (Sol central) */}
        <div className="absolute top-1/2 left-1/2 w-6 h-6 bg-gradient-primary rounded-full transform -translate-x-1/2 -translate-y-1/2 animate-pulse-glow"></div>
        
        {/* Primeira órbita */}
        <div className="absolute top-1/2 left-1/2 w-60 h-60 border border-primary/20 rounded-full transform -translate-x-1/2 -translate-y-1/2">
          <div className="absolute top-0 left-1/2 w-4 h-4 bg-primary/70 rounded-full transform -translate-x-1/2 -translate-y-1/2 animate-orbit-planet-1">
            <div className="w-full h-full rounded-full animate-pulse-glow"></div>
          </div>
        </div>
        
        {/* Segunda órbita */}
        <div className="absolute top-1/2 left-1/2 w-80 h-80 border border-primary/15 rounded-full transform -translate-x-1/2 -translate-y-1/2">
          <div className="absolute top-0 left-1/2 w-5 h-5 bg-primary/50 rounded-full transform -translate-x-1/2 -translate-y-1/2 animate-orbit-planet-2">
            <div className="w-full h-full rounded-full animate-float"></div>
          </div>
        </div>
        
        {/* Terceira órbita */}
        <div className="absolute top-1/2 left-1/2 w-96 h-96 border border-primary/10 rounded-full transform -translate-x-1/2 -translate-y-1/2">
          <div className="absolute top-0 left-1/2 w-3 h-3 bg-primary/30 rounded-full transform -translate-x-1/2 -translate-y-1/2 animate-orbit-planet-3">
            <div className="w-full h-full rounded-full animate-bounce-gentle"></div>
          </div>
        </div>
      </div>
      
      {/* Elementos orbitais menores espalhados */}
      <div className="absolute top-1/4 left-10 w-16 h-16 opacity-30">
        <div className="w-full h-full border border-primary/20 rounded-full animate-rotate-slow">
          <div className="absolute top-0 left-1/2 w-2 h-2 bg-primary/40 rounded-full transform -translate-x-1/2 -translate-y-1/2 animate-orbit-planet-1"></div>
        </div>
      </div>
      
      <div className="absolute bottom-1/3 left-20 w-20 h-20 opacity-25">
        <div className="w-full h-full border border-primary/15 rounded-full animate-rotate-slow" style={{animationDuration: '40s'}}>
          <div className="absolute top-0 left-1/2 w-3 h-3 bg-primary/30 rounded-full transform -translate-x-1/2 -translate-y-1/2 animate-orbit-planet-2"></div>
        </div>
      </div>
      
      <div className="absolute top-2/3 right-1/4 w-12 h-12 opacity-35">
        <div className="w-full h-full border border-primary/25 rounded-full animate-rotate-slow" style={{animationDuration: '20s'}}>
          <div className="absolute top-0 left-1/2 w-2 h-2 bg-primary/50 rounded-full transform -translate-x-1/2 -translate-y-1/2 animate-orbit-planet-3"></div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
