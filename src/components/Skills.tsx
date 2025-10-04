import { Badge } from "@/components/ui/badge";
import { Card } from "@/components/ui/card";

const Skills = () => {
  const skillCategories = [
    {
      title: "Linguagens",
      skills: ["Node.js", "TypeScript", "Python", "Java", "Go"]
    },
    {
      title: "Frameworks API",
      skills: ["Express", "NestJS", "FastAPI", "Spring Boot", "Apollo Server"]
    },
    {
      title: "Protocolos & Padrões",
      skills: ["REST", "GraphQL", "gRPC", "WebSocket", "OAuth2", "JWT"]
    },
    {
      title: "Banco de Dados",
      skills: ["PostgreSQL", "MongoDB", "Redis", "MySQL", "Elasticsearch"]
    },
    {
      title: "Documentação & Testes",
      skills: ["Swagger/OpenAPI", "Postman", "Jest", "Pytest", "JUnit"]
    },
    {
      title: "DevOps & Infra",
      skills: ["Docker", "Kubernetes", "AWS", "Nginx", "CI/CD", "Grafana"]
    }
  ];

  return (
    <section id="skills" className="py-20 px-4 bg-muted/20">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-16 animate-slide-up">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Skills & <span className="text-primary">Tecnologias</span>
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-primary to-accent mx-auto" />
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {skillCategories.map((category, index) => (
            <Card 
              key={index}
              className="p-6 gradient-card shadow-card border-border/50 hover:border-primary/30 transition-all duration-300 animate-slide-up"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <h3 className="text-xl font-semibold mb-4 text-primary">{category.title}</h3>
              <div className="flex flex-wrap gap-2">
                {category.skills.map((skill, skillIndex) => (
                  <Badge 
                    key={skillIndex}
                    variant="secondary"
                    className="bg-muted hover:bg-primary/20 hover:text-primary transition-colors cursor-default"
                  >
                    {skill}
                  </Badge>
                ))}
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;