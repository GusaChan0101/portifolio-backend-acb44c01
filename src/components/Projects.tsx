import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ExternalLink, Github } from "lucide-react";

const Projects = () => {
  const projects = [
    {
      title: "API de E-commerce",
      description: "API REST completa com autenticação JWT, processamento de pagamentos e gerenciamento de estoque em tempo real.",
      techs: ["Node.js", "PostgreSQL", "Redis", "Docker"],
      github: "https://github.com",
      demo: "https://demo.com"
    },
    {
      title: "Sistema de Mensageria",
      description: "Microserviço para processamento assíncrono de mensagens com alta disponibilidade e resiliência.",
      techs: ["Java", "Spring Boot", "RabbitMQ", "Kubernetes"],
      github: "https://github.com",
      demo: "https://demo.com"
    },
    {
      title: "Dashboard Analytics",
      description: "Backend para análise de dados em tempo real com agregações complexas e cache inteligente.",
      techs: ["Python", "FastAPI", "MongoDB", "Elasticsearch"],
      github: "https://github.com",
      demo: "https://demo.com"
    }
  ];

  return (
    <section id="projects" className="py-20 px-4">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-16 animate-slide-up">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Projetos em <span className="text-primary">Destaque</span>
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-primary to-accent mx-auto" />
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <Card 
              key={index}
              className="gradient-card shadow-card border-border/50 overflow-hidden group hover:border-primary/50 transition-all duration-300 hover:shadow-glow animate-slide-up"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="p-6 space-y-4">
                <h3 className="text-2xl font-bold group-hover:text-primary transition-colors">
                  {project.title}
                </h3>
                
                <p className="text-muted-foreground leading-relaxed">
                  {project.description}
                </p>

                <div className="flex flex-wrap gap-2">
                  {project.techs.map((tech, techIndex) => (
                    <Badge 
                      key={techIndex}
                      variant="secondary"
                      className="bg-muted text-xs"
                    >
                      {tech}
                    </Badge>
                  ))}
                </div>

                <div className="flex gap-3 pt-4">
                  <Button 
                    size="sm" 
                    variant="outline" 
                    className="flex-1 border-primary/50 hover:bg-primary/10"
                    asChild
                  >
                    <a href={project.github} target="_blank" rel="noopener noreferrer">
                      <Github className="w-4 h-4 mr-2" />
                      Código
                    </a>
                  </Button>
                  <Button 
                    size="sm" 
                    className="flex-1 bg-primary hover:bg-primary/90"
                    asChild
                  >
                    <a href={project.demo} target="_blank" rel="noopener noreferrer">
                      <ExternalLink className="w-4 h-4 mr-2" />
                      Demo
                    </a>
                  </Button>
                </div>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;