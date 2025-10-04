import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Shield, Zap, Users, Headphones, Star, ArrowRight } from "lucide-react";
import { useCart } from "@/hooks/useCart";
import heroImage from "@/assets/hero-image.jpg";
import capcutLogo from "@/assets/logos/capcut.png";
import canvaLogo from "@/assets/logos/canva.png";
import nordvpnLogo from "@/assets/logos/nordvpn.png";
import elevenlabsLogo from "@/assets/logos/elevenlabs.png";

const Home = () => {
  const { addItem } = useCart();

  const featuredProducts = [
    {
      id: "capcut-pro",
      name: "CapCut Pro (1 Month)",
      price: 600,
      image: capcutLogo,
      description: "Professional video editing with advanced features"
    },
    {
      id: "canva-pro",
      name: "Canva Pro (1 Month)",
      price: 300,
      image: canvaLogo,
      description: "Premium design tools for stunning graphics"
    },
    {
      id: "nordvpn",
      name: "NordVPN (Per Month)",
      price: 400,
      image: nordvpnLogo,
      description: "Secure VPN with global server access"
    },
    {
      id: "elevenlabs",
      name: "ElevenLabs (Per Month)",
      price: 2000,
      image: elevenlabsLogo,
      description: "AI-powered voice synthesis and cloning"
    }
  ];

  const whyChooseUs = [
    {
      icon: Shield,
      title: "Affordable Pricing",
      description: "Premium tools at local prices that won't break your budget"
    },
    {
      icon: Zap,
      title: "Fast Activation",
      description: "Quick setup and instant access to your tools"
    },
    {
      icon: Users,
      title: "Genuine Access",
      description: "Authentic premium subscriptions with full features"
    },
    {
      icon: Headphones,
      title: "Responsive Support",
      description: "24/7 customer support via WhatsApp chat"
    }
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden">
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat scale-110"
          style={{ 
            backgroundImage: `url(${heroImage})`,
            objectPosition: 'center 40%'
          }}
        >
          <div className="absolute inset-0 bg-background/80" />
        </div>
        
        <div className="relative z-10 text-center container-padding max-w-4xl -mt-20">
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6 hero-glow hero-animate">
            ARHAM DIGITAL AGENCY
          </h1>
          <p className="text-xl md:text-2xl text-muted-foreground mb-8 hero-animate delay-1">
            Your trusted partner for premium digital tools & services.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center hero-animate delay-2">
            <Link to="/products">
              <Button size="lg" className="btn-primary btn-glow">
                Explore Products
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </Link>
            <Link to="/contact">
              <Button size="lg" variant="outline" className="btn-ghost btn-glow">
                Contact Us
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Featured Products */}
      <section className="section-padding bg-card/50 pt-24">
        <div className="max-w-7xl mx-auto container-padding">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Featured Products</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Discover our most popular premium tools trusted by creators and businesses
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {featuredProducts.map((product, index) => (
              <Card key={product.id} className="card-hover animate-fade-in" style={{ animationDelay: `${index * 0.1}s` }}>
                <CardContent className="p-6">
                  <div className="flex items-center justify-center mb-4 float-animation">
                    <img
                      src={product.image}
                      alt={product.name}
                      className="w-16 h-16 object-contain"
                      loading={index < 4 ? "eager" : "lazy"}
                    />
                  </div>
                  <h3 className="font-semibold mb-2 text-center">{product.name}</h3>
                  <p className="text-sm text-muted-foreground mb-4 text-center">
                    {product.description}
                  </p>
                  <div className="flex items-center justify-between">
                    <span className="text-lg font-bold text-primary">Rs. {product.price}</span>
                    <Button
                      size="sm"
                      onClick={() => addItem(product)}
                      className="btn-primary btn-glow"
                    >
                      Add to Cart
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="section-padding">
        <div className="max-w-7xl mx-auto container-padding">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Why Choose Us</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              We provide exceptional value and service for all your digital tool needs
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {whyChooseUs.map((feature, index) => (
              <div key={feature.title} className="text-center animate-fade-in" style={{ animationDelay: `${index * 0.1}s` }}>
                <div className="inline-flex items-center justify-center w-16 h-16 bg-primary/10 rounded-full mb-4">
                  <feature.icon className="h-8 w-8 text-primary" />
                </div>
                <h3 className="font-semibold mb-2">{feature.title}</h3>
                <p className="text-sm text-muted-foreground">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Trust Bar */}
      <section className="section-padding bg-card/50">
        <div className="max-w-7xl mx-auto container-padding">
          <div className="text-center">
            <h3 className="text-2xl font-bold mb-8">Trusted by creators & businesses in Pakistan</h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="flex items-center justify-center space-x-2">
                <Shield className="h-6 w-6 text-secondary" />
                <span className="text-muted-foreground">Secure Chat Checkout via WhatsApp</span>
              </div>
              <div className="flex items-center justify-center space-x-2">
                <Zap className="h-6 w-6 text-secondary" />
                <span className="text-muted-foreground">Mobile-friendly Experience</span>
              </div>
              <div className="flex items-center justify-center space-x-2">
                <Headphones className="h-6 w-6 text-secondary" />
                <span className="text-muted-foreground">24/7 Support Available</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section-padding">
        <div className="max-w-4xl mx-auto text-center container-padding">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Ready to Get Started?</h2>
          <p className="text-muted-foreground mb-8">
            Join thousands of satisfied customers who trust us for their digital tool needs
          </p>
          <Link to="/products">
            <Button size="lg" className="btn-primary btn-glow">
              Explore All Products
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
          </Link>
        </div>
      </section>
    </div>
  );
};

export default Home;