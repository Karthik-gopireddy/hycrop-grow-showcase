const Footer = () => {
  return (
    <footer className="bg-foreground text-background py-12">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Company Info */}
          <div>
            <img 
              src="/lovable-uploads/919d61d6-7051-4fb9-8dfe-8845d5050613.png" 
              alt="HYCROP Logo" 
              className="h-12 w-auto mb-4"
            />
            <p className="text-background/80 leading-relaxed">
              Leading agricultural solutions provider, committed to cultivating trust and harvesting success for farmers worldwide.
            </p>
          </div>

          {/* Products */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Products</h4>
            <ul className="space-y-2 text-background/80">
              <li><a href="#" className="hover:text-background transition-colors">NPK Fertilizers</a></li>
              <li><a href="#" className="hover:text-background transition-colors">Bio-Fertilizers</a></li>
              <li><a href="#" className="hover:text-background transition-colors">Specialty Nutrients</a></li>
              <li><a href="#" className="hover:text-background transition-colors">Soil Conditioners</a></li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Services</h4>
            <ul className="space-y-2 text-background/80">
              <li><a href="#" className="hover:text-background transition-colors">Soil Analysis</a></li>
              <li><a href="#" className="hover:text-background transition-colors">Crop Consulting</a></li>
              <li><a href="#" className="hover:text-background transition-colors">Custom Formulations</a></li>
              <li><a href="#" className="hover:text-background transition-colors">Technical Support</a></li>
            </ul>
          </div>

          {/* Company */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Company</h4>
            <ul className="space-y-2 text-background/80">
              <li><a href="#" className="hover:text-background transition-colors">About Us</a></li>
              <li><a href="#" className="hover:text-background transition-colors">Research & Development</a></li>
              <li><a href="#" className="hover:text-background transition-colors">Quality Assurance</a></li>
              <li><a href="#" className="hover:text-background transition-colors">Careers</a></li>
            </ul>
          </div>
        </div>

        <div className="border-t border-background/20 mt-8 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-background/60 text-sm">
            © 2025 HYCROP Agri Solutions Pvt. Ltd. All rights reserved.
          </p>
          <div className="flex space-x-6 mt-4 md:mt-0">
            <a href="#" className="text-background/60 hover:text-background transition-colors text-sm">Privacy Policy</a>
            <a href="#" className="text-background/60 hover:text-background transition-colors text-sm">Terms of Service</a>
            <a href="#" className="text-background/60 hover:text-background transition-colors text-sm">Cookie Policy</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;