
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ExternalLink, Github } from "lucide-react";

const PortfolioSection = () => {
  const projects = [
    {
      title: "E-commerce Avançado",
      description: "Plataforma completa de e-commerce com sistema de pagamentos, gestão de produtos e analytics.",
      technologies: ["React", "Python", "Django"],
      status: "Concluído",
      delay: "0s"
    },
    {
      title: "Sistema de Gestão Empresarial",
      description: "ERP personalizado para gestão completa de recursos empresariais, financeiro e RH.",
      technologies: ["Flutter", "FastAPI", "PostgreSQL"],
      status: "Em Desenvolvimento",
      delay: "0.2s"
    },
    {
      title: "Landing Page Conversão",
      description: "Landing page otimizada para conversão com A/B testing e analytics avançados.",
      technologies: ["React", "TypeScript", "Tailwind"],
      status: "Concluído",
      delay: "0.4s"
    }
  ];

  return (
    <section id="portfolio" className="py-20 bg-secondary/30">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16 animate-fade-in-up">
          <h2 className="section-title">Portfolio</h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Alguns dos projetos que desenvolvemos para nossos clientes
          </p>
        </div>
        
        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {projects.map((project, index) => (
            <Card 
              key={index} 
              className="bg-card/50 backdrop-blur-sm border-border hover:border-primary/50 transition-all duration-500 card-hover animate-slide-up hover:shadow-glow group"
              style={{animationDelay: project.delay}}
            >
              <CardHeader>
                <div className="flex justify-between items-start mb-2">
                  <CardTitle className="text-foreground group-hover:text-primary transition-colors duration-300">{project.title}</CardTitle>
                  <Badge 
                    variant={project.status === "Concluído" ? "default" : "secondary"}
                    className="animate-pulse-glow"
                  >
                    {project.status}
                  </Badge>
                </div>
                <CardDescription className="text-muted-foreground">
                  {project.description}
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.technologies.map((tech, techIndex) => (
                    <Badge 
                      key={techIndex} 
                      variant="outline" 
                      className="text-primary border-primary/30 hover:scale-110 transition-all duration-300 animate-scale-in"
                      style={{animationDelay: `${0.1 * techIndex}s`}}
                    >
                      {tech}
                    </Badge>
                  ))}
                </div>
                <div className="flex gap-2">
                  <Button 
                    size="sm" 
                    variant="outline"
                    className="border-primary text-primary hover:bg-primary hover:text-primary-foreground transition-all duration-300 hover:scale-105"
                  >
                    <ExternalLink className="w-4 h-4 mr-2" />
                    Ver Projeto
                  </Button>
                  <Button 
                    size="sm" 
                    variant="ghost"
                    className="text-muted-foreground hover:text-primary transition-all duration-300 hover:scale-105"
                  >
                    <Github className="w-4 h-4 mr-2" />
                    Código
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PortfolioSection;
