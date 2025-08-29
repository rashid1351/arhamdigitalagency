import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { 
  Video, 
  Palette, 
  Shield, 
  Mic, 
  Globe, 
  Play, 
  Search, 
  Server,
  Sparkles,
  ArrowRight,
  CheckCircle 
} from "lucide-react";

const Tools = () => {
  const toolCategories = [
    {
      icon: Video,
      title: "Video Editing",
      tools: ["CapCut Pro"],
      benefits: [
        "Professional video editing suite",
        "Advanced effects and transitions",
        "4K export capabilities",
        "AI-powered features"
      ],
      color: "text-red-400"
    },
    {
      icon: Palette,
      title: "Design Tools",
      tools: ["Canva Pro"],
      benefits: [
        "Unlimited premium templates",
        "Brand kit and team collaboration",
        "Stock photo library access",
        "Custom dimensions and formats"
      ],
      color: "text-purple-400"
    },
    {
      icon: Shield,
      title: "VPN & Security",
      tools: ["NordVPN", "Surfshark VPN"],
      benefits: [
        "Global server network",
        "Military-grade encryption",
        "No-logs policy",
        "Multiple device support"
      ],
      color: "text-blue-400"
    },
    {
      icon: Mic,
      title: "AI Voice & Audio",
      tools: ["ElevenLabs"],
      benefits: [
        "Realistic voice cloning",
        "Multi-language support",
        "Commercial usage rights",
        "High-quality audio output"
      ],
      color: "text-green-400"
    },
    {
      icon: Play,
      title: "Streaming Services",
      tools: ["Netflix", "Prime Video"],
      benefits: [
        "Premium content access",
        "High-definition streaming",
        "Offline downloads",
        "Multiple user profiles"
      ],
      color: "text-red-400"
    },
    {
      icon: Search,
      title: "SEO & Marketing",
      tools: ["Semrush"],
      benefits: [
        "Keyword research tools",
        "Competitor analysis",
        "Site audit capabilities",
        "Content optimization"
      ],
      color: "text-orange-400"
    },
    {
      icon: Server,
      title: "Web Services",
      tools: ["Domain & Hosting"],
      benefits: [
        "Domain registration",
        "Reliable hosting",
        "SSL certificates",
        "24/7 uptime monitoring"
      ],
      color: "text-cyan-400"
    },
    {
      icon: Sparkles,
      title: "AI Video Generation",
      tools: ["Veo 3"],
      benefits: [
        "AI-powered video creation",
        "Text-to-video generation",
        "High-quality output",
        "Creative automation"
      ],
      color: "text-yellow-400"
    }
  ];

  const advantages = [
    {
      title: "Save Money with Local Pricing",
      description: "Get premium tools at prices tailored for the Pakistani market"
    },
    {
      title: "Quick Activation & Support",
      description: "Fast setup process with dedicated customer support"
    },
    {
      title: "Secure Chat Checkout via WhatsApp",
      description: "Safe and convenient payment process through trusted messaging"
    },
    {
      title: "Perfect for Creators, Agencies, and SMBs",
      description: "Designed for content creators, digital agencies, and small businesses"
    }
  ];

  return (
    <div className="min-h-screen pt-16">
      {/* Hero Section */}
      <section className="section-padding bg-gradient-dark">
        <div className="max-w-7xl mx-auto container-padding text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4 hero-glow">Digital Tools & Services</h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto mb-8">
            Discover our comprehensive range of premium digital tools designed to empower your 
            creativity and boost your productivity. From video editing to AI-powered solutions.
          </p>
          <Link to="/products">
            <Button size="lg" className="btn-primary">
              Explore All Products
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
          </Link>
        </div>
      </section>

      {/* Tools Categories */}
      <section className="section-padding">
        <div className="max-w-7xl mx-auto container-padding">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Our Tool Categories</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Professional-grade tools across multiple categories to meet all your digital needs
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {toolCategories.map((category, index) => (
              <Card key={category.title} className="card-hover animate-fade-in" style={{ animationDelay: `${index * 0.1}s` }}>
                <CardContent className="p-6">
                  <div className="text-center mb-4">
                    <div className="inline-flex items-center justify-center w-16 h-16 bg-primary/10 rounded-full mb-4">
                      <category.icon className={`h-8 w-8 ${category.color}`} />
                    </div>
                    <h3 className="text-xl font-semibold mb-2">{category.title}</h3>
                    <p className="text-sm text-primary font-medium">
                      {category.tools.join(", ")}
                    </p>
                  </div>
                  
                  <div className="space-y-2">
                    {category.benefits.map((benefit, benefitIndex) => (
                      <div key={benefitIndex} className="flex items-start space-x-2">
                        <CheckCircle className="h-4 w-4 text-secondary mt-0.5 flex-shrink-0" />
                        <span className="text-sm text-muted-foreground">{benefit}</span>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Advantages Section */}
      <section className="section-padding bg-card/50">
        <div className="max-w-7xl mx-auto container-padding">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Why Choose Our Tools</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Experience the benefits of working with a trusted digital tools provider
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {advantages.map((advantage, index) => (
              <Card key={advantage.title} className="card-hover animate-fade-in" style={{ animationDelay: `${index * 0.1}s` }}>
                <CardContent className="p-8">
                  <h3 className="text-xl font-semibold mb-3">{advantage.title}</h3>
                  <p className="text-muted-foreground">{advantage.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Feature Spotlight */}
      <section className="section-padding">
        <div className="max-w-7xl mx-auto container-padding">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            <div className="lg:col-span-2">
              <h2 className="text-3xl md:text-4xl font-bold mb-6">Premium Tools, Local Prices</h2>
              <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
                We understand the challenges faced by creators and businesses in accessing premium 
                digital tools. That's why we've partnered with leading software providers to bring 
                you authentic, full-featured subscriptions at prices that make sense for the Pakistani market.
              </p>
              <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
                Every tool we offer comes with complete access to premium features, regular updates, 
                and the same level of functionality you'd get from direct subscriptions – but at a 
                fraction of the cost.
              </p>
              <Link to="/products">
                <Button size="lg" className="btn-primary">
                  View All Tools
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
              </Link>
            </div>
            
            <div className="space-y-6">
              <Card className="p-6 bg-primary/5 border-primary/20">
                <div className="flex items-center space-x-3 mb-4">
                  <Shield className="h-6 w-6 text-primary" />
                  <h3 className="font-semibold">Genuine Access</h3>
                </div>
                <p className="text-sm text-muted-foreground">
                  All our subscriptions are authentic and provide full access to premium features
                </p>
              </Card>
              
              <Card className="p-6 bg-secondary/5 border-secondary/20">
                <div className="flex items-center space-x-3 mb-4">
                  <Sparkles className="h-6 w-6 text-secondary" />
                  <h3 className="font-semibold">Latest Features</h3>
                </div>
                <p className="text-sm text-muted-foreground">
                  Stay updated with the latest features and improvements from software providers
                </p>
              </Card>
              
              <Card className="p-6 bg-primary/5 border-primary/20">
                <div className="flex items-center space-x-3 mb-4">
                  <Globe className="h-6 w-6 text-primary" />
                  <h3 className="font-semibold">Global Standards</h3>
                </div>
                <p className="text-sm text-muted-foreground">
                  World-class tools with international quality and reliability standards
                </p>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section-padding bg-gradient-secondary">
        <div className="max-w-4xl mx-auto text-center container-padding">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-white">Ready to Upgrade Your Toolkit?</h2>
          <p className="text-xl text-white/90 mb-8">
            Join thousands of creators and businesses who trust us for their digital tool needs
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/products">
              <Button size="lg" className="bg-white text-secondary hover:bg-white/90">
                Browse Products
              </Button>
            </Link>
            <Link to="/contact">
              <Button size="lg" variant="outline" className="text-white border-white hover:bg-white hover:text-secondary">
                Get Support
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Tools;