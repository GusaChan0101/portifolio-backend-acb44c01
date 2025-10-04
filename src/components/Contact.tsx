import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Github, Linkedin, Mail, MapPin } from "lucide-react";

const Contact = () => {
  const contactInfo = [
    {
      icon: <Mail className="w-6 h-6" />,
      label: "Email",
      value: "seu@email.com",
      href: "mailto:seu@email.com"
    },
    {
      icon: <Github className="w-6 h-6" />,
      label: "GitHub",
      value: "github.com/seuusuario",
      href: "https://github.com"
    },
    {
      icon: <Linkedin className="w-6 h-6" />,
      label: "LinkedIn",
      value: "linkedin.com/in/seuusuario",
      href: "https://linkedin.com"
    },
    {
      icon: <MapPin className="w-6 h-6" />,
      label: "Localização",
      value: "São Paulo, Brasil",
      href: null
    }
  ];

  return (
    <section id="contact" className="py-20 px-4 bg-muted/20">
      <div className="container mx-auto max-w-4xl">
        <div className="text-center mb-16 animate-slide-up">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Vamos <span className="text-primary">Conversar?</span>
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-primary to-accent mx-auto mb-6" />
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Estou sempre aberto a discutir novos projetos, oportunidades ou parcerias. 
            Entre em contato através de qualquer um dos canais abaixo.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          {contactInfo.map((item, index) => (
            <Card 
              key={index}
              className="p-6 gradient-card shadow-card border-border/50 hover:border-primary/50 transition-all duration-300 animate-slide-up"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              {item.href ? (
                <a 
                  href={item.href} 
                  target={item.href.startsWith('http') ? '_blank' : undefined}
                  rel={item.href.startsWith('http') ? 'noopener noreferrer' : undefined}
                  className="flex items-start gap-4 group"
                >
                  <div className="p-3 rounded-lg bg-primary/10 text-primary group-hover:bg-primary group-hover:text-primary-foreground transition-colors">
                    {item.icon}
                  </div>
                  <div>
                    <p className="text-sm text-muted-foreground mb-1">{item.label}</p>
                    <p className="font-semibold group-hover:text-primary transition-colors">{item.value}</p>
                  </div>
                </a>
              ) : (
                <div className="flex items-start gap-4">
                  <div className="p-3 rounded-lg bg-primary/10 text-primary">
                    {item.icon}
                  </div>
                  <div>
                    <p className="text-sm text-muted-foreground mb-1">{item.label}</p>
                    <p className="font-semibold">{item.value}</p>
                  </div>
                </div>
              )}
            </Card>
          ))}
        </div>

        <div className="text-center mt-12 animate-slide-up">
          <Button 
            size="lg"
            className="bg-primary hover:bg-primary/90 shadow-glow"
            asChild
          >
            <a href="mailto:seu@email.com">
              <Mail className="w-5 h-5 mr-2" />
              Enviar Email
            </a>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Contact;