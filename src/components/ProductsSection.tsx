import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import fertilizerProducts from "@/assets/fertilizer-products.jpg";

const ProductsSection = () => {
  const products = [
    {
      title: "NPK Complex Fertilizers",
      description: "Balanced nutrition with Nitrogen, Phosphorus, and Potassium for optimal plant growth.",
      features: ["Quick absorption", "Long-lasting effect", "Suitable for all crops"],
      yield: "40% yield increase"
    },
    {
      title: "Organic Bio-Fertilizers", 
      description: "Eco-friendly solutions enriched with beneficial microorganisms for soil health.",
      features: ["100% organic", "Improves soil structure", "Environmentally safe"],
      yield: "35% yield increase"
    },
    {
      title: "Specialty Nutrients",
      description: "Targeted solutions for specific crop needs and soil deficiencies.",
      features: ["Crop-specific formulas", "Micronutrient rich", "pH balanced"],
      yield: "45% yield increase"
    }
  ];

  return (
    <section id="products" className="py-20 bg-gradient-hero">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
            Our <span className="text-primary">Product Range</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Scientifically formulated fertilizers designed to maximize crop yields and soil health
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-16">
          <div className="animate-slide-in">
            <img 
              src={fertilizerProducts} 
              alt="HYCROP Fertilizer Products" 
              className="rounded-2xl shadow-elegant w-full h-auto"
            />
          </div>
          
          <div className="space-y-8">
            {products.map((product, index) => (
              <Card key={index} className="border-2 border-border hover:border-primary/50 transition-all duration-300 hover:shadow-soft animate-grow" style={{animationDelay: `${index * 0.2}s`}}>
                <CardHeader>
                  <div className="flex justify-between items-start">
                    <div>
                      <CardTitle className="text-xl text-foreground">{product.title}</CardTitle>
                      <CardDescription className="text-muted-foreground mt-2">
                        {product.description}
                      </CardDescription>
                    </div>
                    <div className="text-right">
                      <div className="text-2xl font-bold text-success">{product.yield}</div>
                      <div className="text-sm text-muted-foreground">Average increase</div>
                    </div>
                  </div>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2 mb-4">
                    {product.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-center text-muted-foreground">
                        <div className="w-2 h-2 bg-primary rounded-full mr-3"></div>
                        {feature}
                      </li>
                    ))}
                  </ul>
                  <Button variant="outline" className="w-full">
                    Learn More
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProductsSection;