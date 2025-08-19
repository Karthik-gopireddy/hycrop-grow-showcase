import { Button } from "@/components/ui/button";

const Header = () => {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-background/95 backdrop-blur-sm border-b border-border">
      <div className="container mx-auto px-6 py-4 flex items-center justify-between">
        <div className="flex items-center space-x-2">
          <img 
            src="/lovable-uploads/919d61d6-7051-4fb9-8dfe-8845d5050613.png" 
            alt="HYCROP Logo" 
            className="h-12 w-auto"
          />
        </div>
        
        <nav className="hidden md:flex items-center space-x-8">
          <a href="#home" className="text-foreground hover:text-primary transition-colors font-medium">
            Home
          </a>
          <a href="#products" className="text-foreground hover:text-primary transition-colors font-medium">
            Products
          </a>
          <a href="#solutions" className="text-foreground hover:text-primary transition-colors font-medium">
            Solutions
          </a>
          <a href="#about" className="text-foreground hover:text-primary transition-colors font-medium">
            About
          </a>
          <a href="#contact" className="text-foreground hover:text-primary transition-colors font-medium">
            Contact
          </a>
        </nav>
        
        <div className="flex items-center space-x-4">
          <Button variant="outline" size="sm">
            Get Quote
          </Button>
          <Button variant="hero" size="sm">
            Contact Us
          </Button>
        </div>
      </div>
    </header>
  );
};

export default Header;