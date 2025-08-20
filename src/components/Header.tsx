
import { Button } from "@/components/ui/button";

const Header = () => {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-md border-b border-border animate-fade-in">
      <div className="container mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-2 animate-fade-in-left">
            <div className="w-8 h-8 bg-gradient-primary rounded-lg flex items-center justify-center animate-pulse-glow">
              <span className="text-primary-foreground font-bold text-sm">FB</span>
            </div>
            <span className="text-xl font-semibold">Finderbit</span>
          </div>
          
          <nav className="hidden md:flex items-center space-x-8">
            <a href="#home" className="text-muted-foreground hover:text-primary transition-all duration-300 hover:scale-110 animate-fade-in">
              Início
            </a>
            <a href="#services" className="text-muted-foreground hover:text-primary transition-all duration-300 hover:scale-110 animate-fade-in" style={{animationDelay: '0.1s'}}>
              Serviços
            </a>
            <a href="#technologies" className="text-muted-foreground hover:text-primary transition-all duration-300 hover:scale-110 animate-fade-in" style={{animationDelay: '0.2s'}}>
              Tecnologias
            </a>
            <a href="#portfolio" className="text-muted-foreground hover:text-primary transition-all duration-300 hover:scale-110 animate-fade-in" style={{animationDelay: '0.3s'}}>
              Portfolio
            </a>
          </nav>
          
          <Button variant="default" className="bg-primary hover:bg-primary/90 text-primary-foreground glow-effect hover:scale-105 transition-all duration-300 animate-fade-in-right">
            Fale Conosco
          </Button>
        </div>
      </div>
    </header>
  );
};

export default Header;
