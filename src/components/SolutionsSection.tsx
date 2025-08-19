import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import researchLab from "@/assets/research-lab.jpg";

const SolutionsSection = () => {
  const solutions = [
    {
      icon: "🌱",
      title: "Soil Analysis",
      description: "Comprehensive soil testing to determine exact nutrient requirements"
    },
    {
      icon: "📊",
      title: "Custom Formulations",
      description: "Tailored fertilizer blends based on your specific crop and soil needs"
    },
    {
      icon: "🚀", 
      title: "Precision Agriculture",
      description: "Technology-driven solutions for optimal fertilizer application"
    },
    {
      icon: "🎯",
      title: "Crop Consulting",
      description: "Expert guidance from our team of agricultural specialists"
    },
    {
      icon: "📈",
      title: "Yield Optimization",
      description: "Data-driven strategies to maximize your crop productivity"
    },
    {
      icon: "🌿",
      title: "Sustainable Practices",
      description: "Eco-friendly solutions that protect both crops and environment"
    }
  ];

  return (
    <section id="solutions" className="py-20 bg-background">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
            Complete Agricultural <span className="text-primary">Solutions</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Beyond fertilizers - we provide comprehensive support for your agricultural success
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-16">
          <div className="animate-slide-in">
            <h3 className="text-3xl font-bold text-foreground mb-6">
              Science-Driven Innovation
            </h3>
            <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
              Our state-of-the-art research facility continuously develops cutting-edge solutions. 
              We combine traditional agricultural wisdom with modern scientific methods to deliver 
              products that truly make a difference in your fields.
            </p>
            
            <div className="space-y-4 mb-8">
              <div className="flex items-center">
                <div className="w-4 h-4 bg-primary rounded-full mr-4"></div>
                <span className="text-foreground">Advanced R&D Laboratory</span>
              </div>
              <div className="flex items-center">
                <div className="w-4 h-4 bg-primary rounded-full mr-4"></div>
                <span className="text-foreground">Expert Agricultural Scientists</span>
              </div>
              <div className="flex items-center">
                <div className="w-4 h-4 bg-primary rounded-full mr-4"></div>
                <span className="text-foreground">Continuous Product Innovation</span>
              </div>
            </div>
            
            <Button variant="nature" size="lg">
              Visit Our Lab
            </Button>
          </div>
          
          <div className="animate-grow">
            <img 
              src={researchLab} 
              alt="HYCROP Research Laboratory" 
              className="rounded-2xl shadow-elegant w-full h-auto"
            />
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {solutions.map((solution, index) => (
            <Card key={index} className="text-center border-2 hover:border-primary/50 transition-all duration-300 hover:shadow-soft animate-grow" style={{animationDelay: `${index * 0.1}s`}}>
              <CardHeader>
                <div className="text-4xl mb-4">{solution.icon}</div>
                <CardTitle className="text-xl text-foreground">{solution.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground leading-relaxed">
                  {solution.description}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SolutionsSection;