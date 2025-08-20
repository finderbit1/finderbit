import { Mail, Phone, MapPin } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-secondary/30 border-t border-border">
      <div className="container mx-auto px-6 py-12">
        <div className="grid md:grid-cols-4 gap-8">
          <div className="space-y-4">
            <div className="flex items-center space-x-2">
              <div className="w-8 h-8 bg-gradient-primary rounded-lg flex items-center justify-center">
                <span className="text-primary-foreground font-bold text-sm">TS</span>
              </div>
              <span className="text-xl font-semibold">TechSoft</span>
            </div>
            <p className="text-muted-foreground">
              Soluções em software personalizadas para acelerar seu negócio.
            </p>
          </div>
          
          <div>
            <h3 className="font-semibold mb-4">Serviços</h3>
            <ul className="space-y-2 text-muted-foreground">
              <li><a href="#" className="hover:text-primary transition-colors">Landing Pages</a></li>
              <li><a href="#" className="hover:text-primary transition-colors">Sistemas Personalizados</a></li>
              <li><a href="#" className="hover:text-primary transition-colors">Consultoria Técnica</a></li>
              <li><a href="#" className="hover:text-primary transition-colors">Sistema de Estoque</a></li>
            </ul>
          </div>
          
          <div>
            <h3 className="font-semibold mb-4">Tecnologias</h3>
            <ul className="space-y-2 text-muted-foreground">
              <li>Python & Django</li>
              <li>FastAPI</li>
              <li>React & TypeScript</li>
              <li>Flutter</li>
            </ul>
          </div>
          
          <div>
            <h3 className="font-semibold mb-4">Contato</h3>
            <div className="space-y-2 text-muted-foreground">
              <div className="flex items-center space-x-2">
                <Mail className="w-4 h-4" />
                <span>contato@techsoft.dev</span>
              </div>
              <div className="flex items-center space-x-2">
                <Phone className="w-4 h-4" />
                <span>+55 (11) 99999-9999</span>
              </div>
              <div className="flex items-center space-x-2">
                <MapPin className="w-4 h-4" />
                <span>São Paulo, SP</span>
              </div>
            </div>
          </div>
        </div>
        
        <div className="border-t border-border mt-8 pt-8 text-center text-muted-foreground">
          <p>&copy; 2024 TechSoft Solutions. Todos os direitos reservados.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;