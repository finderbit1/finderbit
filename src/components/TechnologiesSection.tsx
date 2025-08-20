
import { Badge } from "@/components/ui/badge";

const TechnologiesSection = () => {
  const technologies = {
    backend: [
      { name: "Python", color: "bg-blue-500/10 text-blue-400 border-blue-400/30", delay: "0s" },
      { name: "Django", color: "bg-green-500/10 text-green-400 border-green-400/30", delay: "0.1s" },
      { name: "FastAPI", color: "bg-teal-500/10 text-teal-400 border-teal-400/30", delay: "0.2s" }
    ],
    frontend: [
      { name: "React", color: "bg-cyan-500/10 text-cyan-400 border-cyan-400/30", delay: "0.3s" },
      { name: "TypeScript", color: "bg-blue-500/10 text-blue-400 border-blue-400/30", delay: "0.4s" },
      { name: "Tailwind CSS", color: "bg-teal-500/10 text-teal-400 border-teal-400/30", delay: "0.5s" }
    ],
    mobile: [
      { name: "Flutter", color: "bg-blue-500/10 text-blue-400 border-blue-400/30", delay: "0.6s" }
    ]
  };

  return (
    <section id="technologies" className="py-20">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16 animate-fade-in-up">
          <h2 className="section-title">Tecnologias</h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Utilizamos as tecnologias mais modernas e eficientes do mercado
          </p>
        </div>
        
        <div className="max-w-4xl mx-auto">
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center animate-fade-in-left">
              <h3 className="text-2xl font-semibold mb-6 text-primary">Backend</h3>
              <div className="flex flex-wrap justify-center gap-3">
                {technologies.backend.map((tech, index) => (
                  <Badge
                    key={index}
                    variant="outline"
                    className={`${tech.color} hover:scale-110 transition-all duration-300 cursor-pointer animate-scale-in hover:shadow-glow`}
                    style={{animationDelay: tech.delay}}
                  >
                    {tech.name}
                  </Badge>
                ))}
              </div>
            </div>
            
            <div className="text-center animate-fade-in-up" style={{animationDelay: '0.2s'}}>
              <h3 className="text-2xl font-semibold mb-6 text-primary">Frontend</h3>
              <div className="flex flex-wrap justify-center gap-3">
                {technologies.frontend.map((tech, index) => (
                  <Badge
                    key={index}
                    variant="outline"
                    className={`${tech.color} hover:scale-110 transition-all duration-300 cursor-pointer animate-scale-in hover:shadow-glow`}
                    style={{animationDelay: tech.delay}}
                  >
                    {tech.name}
                  </Badge>
                ))}
              </div>
            </div>
            
            <div className="text-center animate-fade-in-right" style={{animationDelay: '0.4s'}}>
              <h3 className="text-2xl font-semibold mb-6 text-primary">Mobile</h3>
              <div className="flex flex-wrap justify-center gap-3">
                {technologies.mobile.map((tech, index) => (
                  <Badge
                    key={index}
                    variant="outline"
                    className={`${tech.color} hover:scale-110 transition-all duration-300 cursor-pointer animate-scale-in hover:shadow-glow`}
                    style={{animationDelay: tech.delay}}
                  >
                    {tech.name}
                  </Badge>
                ))}
              </div>
            </div>
          </div>
          
          <div className="mt-12 text-center animate-fade-in-up" style={{animationDelay: '0.8s'}}>
            <p className="text-lg text-muted-foreground">
              Combinamos essas tecnologias para criar soluções robustas e escaláveis
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TechnologiesSection;
