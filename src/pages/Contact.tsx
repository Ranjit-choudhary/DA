import Navigation from "../components/Navigation";
import Footer from "../components/Footer";
import { Instagram } from "lucide-react";

const Contact = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />

      {/* Hero Section */}
      <section className="pt-24 pb-12 px-6">
        <div className="container mx-auto text-center">
          <h1 className="text-5xl md:text-6xl font-bold text-foreground mb-6">
            Let's Connect
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Ready to create something amazing together? We'd love to hear about your project and explore how we can bring your vision to life.
          </p>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-20 px-6">
        <div className="container mx-auto">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            
            {/* Team Photo */}
            <div>
              <img 
                src="/team.webp" 
                alt="Designer Anonymous Team"
                className="rounded-lg shadow-lg w-full h-auto object-cover"
              />
            </div>
            
            {/* Contact Information */}
            <div className="space-y-8">
              <div>
                <h2 className="text-3xl font-bold text-foreground mb-4">
                  Get in Touch
                </h2>
                <p className="text-muted-foreground">
                  We're always excited to connect with new people and explore creative opportunities.
                </p>
              </div>
              
              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                    <span className="text-primary text-xl">📧</span>
                  </div>
                  <div>
                    <h3 className="font-medium text-foreground">Email</h3>
                    <p className="text-muted-foreground">designclub@hyderabad.bits-pilani.ac.in</p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-4">
                  <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                    <span className="text-primary text-xl">📍</span>
                  </div>
                  <div>
                    <h3 className="font-medium text-foreground">Location</h3>
                    <p className="text-muted-foreground">
                      BITS Pilani, Hyderabad Campus
                    </p>
                  </div>
                </div>
              </div>
              
              {/* Social Links */}
              <div className="pt-8">
                <h3 className="text-xl font-bold text-foreground mb-4">Follow Our Journey</h3>
                <div className="flex space-x-4">
                  <a href="https://www.instagram.com/da.bphc/" target="_blank" rel="noopener noreferrer" className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center text-primary hover:bg-primary hover:text-primary-foreground transition-colors duration-200">
                    <Instagram />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Contact;

