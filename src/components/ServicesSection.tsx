
import { Code, Monitor, Users, Package } from "lucide-react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

const ServicesSection = () => {
  const services = [
    {
      icon: Monitor,
      title: "Landing Pages",
      description: "Páginas de conversão otimizadas para capturar leads e aumentar suas vendas.",
      delay: "0s"
    },
    {
      icon: Code,
      title: "Sistemas Personalizados",
      description: "Desenvolvimento de software sob medida para atender às necessidades específicas do seu negócio.",
      delay: "0.2s"
    },
    {
      icon: Users,
      title: "Consultoria Técnica",
      description: "Orientação especializada para escolher as melhores tecnologias e arquiteturas para seus projetos.",
      delay: "0.4s"
    },
    {
      icon: Package,
      title: "Sistema de Estoque",
      description: "Soluções completas para gerenciamento de inventário, controle de produtos e relatórios.",
      delay: "0.6s"
    }
  ];

  return (
    <section id="services" className="py-20 bg-secondary/30">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16 animate-fade-in-up">
          <h2 className="section-title">Nossos Serviços</h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Oferecemos soluções completas em desenvolvimento de software para impulsionar seu negócio
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <Card 
                key={index} 
                className="bg-card/50 backdrop-blur-sm border-border hover:border-primary/50 transition-all duration-500 card-hover animate-slide-up hover:shadow-glow"
                style={{animationDelay: service.delay}}
              >
                <CardHeader className="text-center">
                  <div className="w-16 h-16 bg-gradient-primary rounded-lg flex items-center justify-center mx-auto mb-4 animate-pulse-glow">
                    <Icon className="w-8 h-8 text-primary-foreground" />
                  </div>
                  <CardTitle className="text-foreground hover:text-primary transition-colors duration-300">{service.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-center text-muted-foreground">
                    {service.description}
                  </CardDescription>
                </CardContent>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
