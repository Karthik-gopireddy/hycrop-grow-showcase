import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";

const ContactSection = () => {
  return (
    <section id="contact" className="py-20 bg-gradient-primary">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold text-primary-foreground mb-6">
            Get In <span className="text-accent">Touch</span>
          </h2>
          <p className="text-xl text-primary-foreground/90 max-w-3xl mx-auto">
            Ready to transform your agricultural productivity? Let's discuss your needs
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
          {/* Contact Form */}
          <Card className="shadow-elegant animate-slide-in">
            <CardHeader>
              <CardTitle className="text-2xl text-foreground">Send us a message</CardTitle>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <Input placeholder="Your Name" className="border-2" />
                <Input placeholder="Your Email" type="email" className="border-2" />
              </div>
              <Input placeholder="Company Name" className="border-2" />
              <Input placeholder="Phone Number" className="border-2" />
              <Textarea 
                placeholder="Tell us about your agricultural needs..." 
                className="border-2 min-h-[120px]" 
              />
              <Button variant="hero" className="w-full">
                Send Message
              </Button>
            </CardContent>
          </Card>

          {/* Contact Information */}
          <div className="space-y-8 animate-grow">
            <Card className="bg-white/10 border-primary-foreground/20 text-primary-foreground">
              <CardContent className="p-6">
                <h3 className="text-xl font-semibold mb-4">📍 Head Office</h3>
                <p className="text-primary-foreground/90">
                  HYCROP Agri Solutions Pvt. Ltd.<br />
                  123 Agricultural Business Park<br />
                  Green Valley, Maharashtra 411001<br />
                  India
                </p>
              </CardContent>
            </Card>

            <Card className="bg-white/10 border-primary-foreground/20 text-primary-foreground">
              <CardContent className="p-6">
                <h3 className="text-xl font-semibold mb-4">📞 Contact Details</h3>
                <div className="space-y-2 text-primary-foreground/90">
                  <p>Phone: +91 98765 43210</p>
                  <p>Email: info@hycrop.com</p>
                  <p>Support: support@hycrop.com</p>
                </div>
              </CardContent>
            </Card>

            <Card className="bg-white/10 border-primary-foreground/20 text-primary-foreground">
              <CardContent className="p-6">
                <h3 className="text-xl font-semibold mb-4">⏰ Business Hours</h3>
                <div className="space-y-2 text-primary-foreground/90">
                  <p>Monday - Friday: 9:00 AM - 6:00 PM</p>
                  <p>Saturday: 9:00 AM - 2:00 PM</p>
                  <p>Sunday: Closed</p>
                </div>
              </CardContent>
            </Card>

            <div className="flex space-x-4">
              <Button variant="outline" className="border-primary-foreground text-primary-foreground hover:bg-primary-foreground hover:text-primary">
                Schedule Demo
              </Button>
              <Button variant="outline" className="border-primary-foreground text-primary-foreground hover:bg-primary-foreground hover:text-primary">
                Download Catalog
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;