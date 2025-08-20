import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ExternalLink, Github } from "lucide-react";

const PortfolioSection = () => {
  const projects = [
    {
      title: "E-commerce Completo",
      description: "Plataforma de vendas online com painel administrativo, gateway de pagamento e sistema de estoque integrado.",
      tech: ["React", "Django", "PostgreSQL"],
      status: "Em Produção"
    },
    {
      title: "Sistema de Gestão",
      description: "ERP customizado para pequenas empresas com módulos de vendas, financeiro e relatórios avançados.",
      tech: ["FastAPI", "React", "Docker"],
      status: "Concluído"
    },
    {
      title: "App Mobile de Delivery",
      description: "Aplicativo completo para delivery com rastreamento em tempo real e sistema de pagamentos.",
      tech: ["Flutter", "Python", "Firebase"],
      status: "Em Desenvolvimento"
    }
  ];

  return (
    <section id="portfolio" className="py-20 bg-card/30">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="section-title">Portfolio</h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Alguns dos projetos que desenvolvemos para nossos clientes, sempre focando em qualidade e inovação.
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <Card key={index} className="card-hover bg-card/50 border-border group">
              <CardHeader>
                <div className="flex items-center justify-between">
                  <CardTitle className="text-xl">{project.title}</CardTitle>
                  <div className="flex space-x-2 opacity-0 group-hover:opacity-100 transition-opacity">
                    <Button size="sm" variant="ghost" className="p-2">
                      <ExternalLink className="w-4 h-4" />
                    </Button>
                    <Button size="sm" variant="ghost" className="p-2">
                      <Github className="w-4 h-4" />
                    </Button>
                  </div>
                </div>
                <div className="flex items-center space-x-2">
                  <div className={`w-2 h-2 rounded-full ${
                    project.status === 'Em Produção' ? 'bg-green-500' :
                    project.status === 'Concluído' ? 'bg-blue-500' : 'bg-yellow-500'
                  }`}></div>
                  <span className="text-sm text-muted-foreground">{project.status}</span>
                </div>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-muted-foreground mb-4">
                  {project.description}
                </CardDescription>
                <div className="flex flex-wrap gap-2">
                  {project.tech.map((tech, techIndex) => (
                    <span 
                      key={techIndex}
                      className="text-xs bg-primary/20 text-primary px-2 py-1 rounded-md"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
        
        <div className="text-center mt-12">
          <Button variant="outline" size="lg" className="border-primary text-primary hover:bg-primary hover:text-primary-foreground">
            Ver mais projetos
          </Button>
        </div>
      </div>
    </section>
  );
};

export default PortfolioSection;