
import { Mail, Phone, MapPin } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-secondary/30 border-t border-border animate-fade-in">
      <div className="container mx-auto px-6 py-12">
        <div className="grid md:grid-cols-4 gap-8">
          <div className="space-y-4 animate-fade-in-left">
            <div className="flex items-center space-x-2">
              <div className="w-8 h-8 bg-gradient-primary rounded-lg flex items-center justify-center animate-pulse-glow">
                <span className="text-primary-foreground font-bold text-sm">FB</span>
              </div>
              <span className="text-xl font-semibold">Finderbit</span>
            </div>
            <p className="text-muted-foreground">
              Bit a bit, solução por solução. Desenvolvemos software personalizado para acelerar seu negócio.
            </p>
          </div>
          
          <div className="animate-fade-in-up" style={{animationDelay: '0.2s'}}>
            <h3 className="font-semibold mb-4">Serviços</h3>
            <ul className="space-y-2 text-muted-foreground">
              <li><a href="#" className="hover:text-primary transition-all duration-300 hover:translate-x-1">Landing Pages</a></li>
              <li><a href="#" className="hover:text-primary transition-all duration-300 hover:translate-x-1">Sistemas Personalizados</a></li>
              <li><a href="#" className="hover:text-primary transition-all duration-300 hover:translate-x-1">Consultoria Técnica</a></li>
              <li><a href="#" className="hover:text-primary transition-all duration-300 hover:translate-x-1">Sistema de Estoque</a></li>
            </ul>
          </div>
          
          <div className="animate-fade-in-up" style={{animationDelay: '0.4s'}}>
            <h3 className="font-semibold mb-4">Tecnologias</h3>
            <ul className="space-y-2 text-muted-foreground">
              <li className="hover:text-primary transition-all duration-300 hover:translate-x-1 cursor-pointer">Python & Django</li>
              <li className="hover:text-primary transition-all duration-300 hover:translate-x-1 cursor-pointer">FastAPI</li>
              <li className="hover:text-primary transition-all duration-300 hover:translate-x-1 cursor-pointer">React & TypeScript</li>
              <li className="hover:text-primary transition-all duration-300 hover:translate-x-1 cursor-pointer">Flutter</li>
            </ul>
          </div>
          
          <div className="animate-fade-in-right" style={{animationDelay: '0.6s'}}>
            <h3 className="font-semibold mb-4">Contato</h3>
            <div className="space-y-2 text-muted-foreground">
              <div className="flex items-center space-x-2 hover:text-primary transition-all duration-300 cursor-pointer group">
                <Mail className="w-4 h-4 group-hover:scale-110 transition-transform duration-300" />
                <span>contato@finderbit.dev</span>
              </div>
              <div className="flex items-center space-x-2 hover:text-primary transition-all duration-300 cursor-pointer group">
                <Phone className="w-4 h-4 group-hover:scale-110 transition-transform duration-300" />
                <span>+55 (11) 99999-9999</span>
              </div>
              <div className="flex items-center space-x-2 hover:text-primary transition-all duration-300 cursor-pointer group">
                <MapPin className="w-4 h-4 group-hover:scale-110 transition-transform duration-300" />
                <span>São Paulo, SP</span>
              </div>
            </div>
          </div>
        </div>
        
        <div className="border-t border-border mt-8 pt-8 text-center text-muted-foreground animate-fade-in-up" style={{animationDelay: '0.8s'}}>
          <p>&copy; 2024 Finderbit Solutions. Todos os direitos reservados.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
