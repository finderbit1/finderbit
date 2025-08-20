import { Badge } from "@/components/ui/badge";

const TechnologiesSection = () => {
  const technologies = [
    { name: "Python", category: "Backend" },
    { name: "Django", category: "Backend" },
    { name: "FastAPI", category: "Backend" },
    { name: "ReactJS", category: "Frontend" },
    { name: "Flutter", category: "Mobile" },
    { name: "TypeScript", category: "Frontend" },
    { name: "PostgreSQL", category: "Database" },
    { name: "Docker", category: "DevOps" }
  ];

  const categories = ["Backend", "Frontend", "Mobile", "Database", "DevOps"];

  return (
    <section id="technologies" className="py-20">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="section-title">Tecnologias</h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Utilizamos as tecnologias mais modernas e robustas do mercado para garantir soluções eficientes e escaláveis.
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {categories.map((category) => (
            <div key={category} className="space-y-4">
              <h3 className="text-lg font-semibold text-primary">{category}</h3>
              <div className="flex flex-wrap gap-2">
                {technologies
                  .filter(tech => tech.category === category)
                  .map((tech, index) => (
                    <Badge 
                      key={index}
                      variant="secondary" 
                      className="bg-secondary/50 hover:bg-primary hover:text-primary-foreground transition-colors cursor-default text-sm py-2 px-4"
                    >
                      {tech.name}
                    </Badge>
                  ))}
              </div>
            </div>
          ))}
        </div>
        
        {/* Featured tech highlight */}
        <div className="mt-16 text-center">
          <div className="inline-flex items-center space-x-4 bg-card/50 rounded-2xl p-6 border border-border">
            <div className="w-3 h-3 bg-primary rounded-full animate-pulse"></div>
            <p className="text-muted-foreground">
              <span className="text-primary font-semibold">Stack principal:</span> Python + FastAPI + React + PostgreSQL
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TechnologiesSection;