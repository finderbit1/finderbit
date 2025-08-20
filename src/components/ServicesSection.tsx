import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Globe, Settings, Users, Package } from "lucide-react";

const ServicesSection = () => {
  const services = [
    {
      icon: Globe,
      title: "Landing Pages",
      description: "Páginas otimizadas para conversão com design moderno e responsivo. Focadas em resultados e experiência do usuário."
    },
    {
      icon: Settings,
      title: "Sistemas Personalizados",
      description: "Desenvolvimento de aplicações sob medida para suas necessidades específicas. Escaláveis e seguras."
    },
    {
      icon: Users,
      title: "Consultoria Técnica",
      description: "Orientação especializada em arquitetura de software, melhores práticas e tecnologias mais adequadas."
    },
    {
      icon: Package,
      title: "Sistema de Estoque",
      description: "Solução completa para controle de inventário com relatórios em tempo real e gestão automatizada."
    }
  ];

  return (
    <section id="services" className="py-20 bg-card/30">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="section-title">Serviços & Expertise</h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Do conceito ao deploy, cobrimos todo o ciclo de desenvolvimento com foco em qualidade e resultados.
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => (
            <Card key={index} className="card-hover bg-card/50 border-border">
              <CardHeader>
                <div className="w-12 h-12 bg-gradient-primary rounded-lg flex items-center justify-center mb-4">
                  <service.icon className="w-6 h-6 text-primary-foreground" />
                </div>
                <CardTitle className="text-xl">{service.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-muted-foreground">
                  {service.description}
                </CardDescription>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;