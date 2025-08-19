import { Button } from "@/components/ui/button";
import heroField from "@/assets/hero-field.jpg";

const HeroSection = () => {
  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <img 
          src={heroField} 
          alt="Agricultural field" 
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-primary/80 via-primary/60 to-transparent"></div>
      </div>
      
      {/* Content */}
      <div className="relative z-10 container mx-auto px-6 text-left max-w-4xl">
        <div className="animate-fade-in">
          <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 leading-tight">
            Cultivating <span className="text-accent">Trust</span>,<br />
            Harvesting <span className="text-accent">Success</span>
          </h1>
          
          <p className="text-xl md:text-2xl text-white/90 mb-8 max-w-2xl leading-relaxed">
            Advanced fertilizer solutions for modern agriculture. Boost your crop yields with our scientifically formulated products.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 animate-slide-in">
            <Button variant="hero" size="lg" className="text-lg px-8 py-4">
              Explore Products
            </Button>
            <Button variant="outline" size="lg" className="text-lg px-8 py-4 border-white text-white hover:bg-white hover:text-primary">
              Schedule Demo
            </Button>
          </div>
        </div>
        
        {/* Floating Stats */}
        <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-8 animate-grow">
          <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 text-center border border-white/20">
            <div className="text-3xl font-bold text-accent mb-2">25+</div>
            <div className="text-white/80">Years Experience</div>
          </div>
          <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 text-center border border-white/20">
            <div className="text-3xl font-bold text-accent mb-2">1000+</div>
            <div className="text-white/80">Happy Farmers</div>
          </div>
          <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 text-center border border-white/20">
            <div className="text-3xl font-bold text-accent mb-2">99%</div>
            <div className="text-white/80">Satisfaction Rate</div>
          </div>
        </div>
      </div>
      
      {/* Animated scroll indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-float">
        <div className="w-6 h-10 border-2 border-white/50 rounded-full flex justify-center">
          <div className="w-1 h-3 bg-white/50 rounded-full mt-2 animate-pulse"></div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;