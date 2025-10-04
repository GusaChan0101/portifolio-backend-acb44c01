const Footer = () => {
  return (
    <footer className="py-8 px-4 border-t border-border/50">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center text-muted-foreground">
          <p>© {new Date().getFullYear()} - Desenvolvido com ❤️ e código limpo</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;