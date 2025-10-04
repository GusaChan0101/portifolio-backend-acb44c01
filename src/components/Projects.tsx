import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ExternalLink, Github } from "lucide-react";

const Projects = () => {
  const projects = [
    {
      title: "API E-commerce REST",
      description: "API REST completa com autenticação JWT, endpoints de produtos, pedidos e pagamentos. Rate limiting, cache Redis e documentação OpenAPI.",
      techs: ["Node.js", "Express", "PostgreSQL", "Redis", "Swagger"],
      github: "https://github.com",
      demo: "https://api-demo.com/docs"
    },
    {
      title: "API GraphQL Multi-tenant",
      description: "API GraphQL escalável com schema stitching, subscriptions em tempo real e autenticação OAuth2. Suporta múltiplos clientes.",
      techs: ["Node.js", "Apollo Server", "PostgreSQL", "Docker"],
      github: "https://github.com",
      demo: "https://graphql-demo.com/graphql"
    },
    {
      title: "Microserviços de Pagamento",
      description: "Arquitetura de microserviços com API Gateway, processamento assíncrono e comunicação via message broker. Alta disponibilidade.",
      techs: ["Java", "Spring Boot", "RabbitMQ", "Kubernetes"],
      github: "https://github.com",
      demo: "https://api-demo.com"
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