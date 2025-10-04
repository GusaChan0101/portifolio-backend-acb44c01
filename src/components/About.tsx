import { Card } from "@/components/ui/card";
import { Code2, Database, Server } from "lucide-react";

const About = () => {
  const highlights = [
    {
      icon: <Server className="w-8 h-8 text-primary" />,
      title: "APIs REST",
      description: "Design e implementação de APIs RESTful escaláveis"
    },
    {
      icon: <Code2 className="w-8 h-8 text-primary" />,
      title: "GraphQL",
      description: "Schemas eficientes e queries otimizadas"
    },
    {
      icon: <Database className="w-8 h-8 text-primary" />,
      title: "Microserviços",
      description: "Arquitetura distribuída e comunicação entre serviços"
    }
  ];

  return (
    <section id="about" className="py-20 px-4">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-16 animate-slide-up">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Sobre <span className="text-primary">Mim</span>
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-primary to-accent mx-auto" />
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="space-y-6 animate-slide-up">
            <p className="text-lg text-muted-foreground leading-relaxed">
              Especialista em desenvolvimento de APIs com foco em performance, segurança e escalabilidade. 
              Experiência sólida em REST, GraphQL e arquitetura de microserviços, criando soluções 
              que atendem milhares de requisições por segundo.
            </p>
            <p className="text-lg text-muted-foreground leading-relaxed">
              Domínio de autenticação JWT, OAuth, versionamento de APIs, documentação com Swagger/OpenAPI 
              e implementação de rate limiting, caching e monitoramento. Sempre aplicando as melhores 
              práticas do mercado para entregar APIs robustas e confiáveis.
            </p>
          </div>

          <div className="grid gap-6 animate-slide-up">
            {highlights.map((item, index) => (
              <Card 
                key={index}
                className="p-6 gradient-card shadow-card border-border/50 hover:border-primary/50 transition-all duration-300 hover:shadow-glow"
              >
                <div className="flex items-start gap-4">
                  <div className="p-3 rounded-lg bg-primary/10">
                    {item.icon}
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold mb-2">{item.title}</h3>
                    <p className="text-muted-foreground">{item.description}</p>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;