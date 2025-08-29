import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Target, Eye, Users, Award, ArrowRight } from "lucide-react";
import aboutOffice from "@/assets/about-office.jpg";

const About = () => {
  const values = [
    {
      icon: Target,
      title: "Our Mission",
      description: "Providing affordable premium digital tools for creators, businesses, and professionals."
    },
    {
      icon: Eye,
      title: "Our Vision", 
      description: "To empower people with access to top software at the best price."
    },
    {
      icon: Users,
      title: "Our Commitment",
      description: "Quick setup, reliable access, and human support for every customer."
    },
    {
      icon: Award,
      title: "Our Promise",
      description: "Genuine premium subscriptions with full features and fast activation."
    }
  ];

  const stats = [
    { number: "500+", label: "Happy Customers" },
    { number: "10+", label: "Premium Tools" },
    { number: "24/7", label: "Support Available" },
    { number: "99%", label: "Customer Satisfaction" }
  ];

  return (
    <div className="min-h-screen pt-16">
      {/* Hero Section */}
      <section className="section-padding bg-gradient-dark">
        <div className="max-w-7xl mx-auto container-padding">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h1 className="text-4xl md:text-5xl font-bold mb-6 hero-glow">About Us</h1>
              <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
                At ARHAM DIGITAL AGENCY, we make world-class tools simple, affordable, and accessible. 
                Whether you create content, run a startup, or manage a brand, we deliver the software 
                you need with fast activation and human support.
              </p>
              <Link to="/products">
                <Button size="lg" className="btn-primary">
                  Explore Products
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
              </Link>
            </div>
            <div className="relative">
              <img
                src={aboutOffice}
                alt="ARHAM Digital Agency Office"
                className="rounded-lg shadow-elegant w-full h-[400px] object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="section-padding">
        <div className="max-w-7xl mx-auto container-padding">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Our Values</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              We're driven by these core principles that guide everything we do
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {values.map((value, index) => (
              <Card key={value.title} className="card-hover animate-fade-in" style={{ animationDelay: `${index * 0.1}s` }}>
                <CardContent className="p-8">
                  <div className="flex items-start space-x-4">
                    <div className="flex-shrink-0">
                      <div className="inline-flex items-center justify-center w-12 h-12 bg-primary/10 rounded-lg">
                        <value.icon className="h-6 w-6 text-primary" />
                      </div>
                    </div>
                    <div>
                      <h3 className="text-xl font-semibold mb-3">{value.title}</h3>
                      <p className="text-muted-foreground">{value.description}</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="section-padding bg-card/50">
        <div className="max-w-7xl mx-auto container-padding">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Our Impact</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Numbers that reflect our commitment to excellence and customer satisfaction
            </p>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div key={stat.label} className="text-center animate-fade-in" style={{ animationDelay: `${index * 0.1}s` }}>
                <div className="text-3xl md:text-4xl font-bold text-primary mb-2">{stat.number}</div>
                <div className="text-muted-foreground">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Story Section */}
      <section className="section-padding">
        <div className="max-w-4xl mx-auto container-padding">
          <div className="text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-8">Our Story</h2>
            <div className="prose prose-lg prose-invert mx-auto">
              <p className="text-lg text-muted-foreground leading-relaxed mb-6">
                ARHAM DIGITAL AGENCY was founded with a simple yet powerful vision: to democratize 
                access to premium digital tools. We recognized that creators, entrepreneurs, and 
                businesses in Pakistan often faced barriers when trying to access world-class software 
                due to pricing and payment complications.
              </p>
              <p className="text-lg text-muted-foreground leading-relaxed mb-6">
                Our team consists of passionate digital experts who understand the challenges of 
                building in the digital space. We've experienced firsthand the frustration of 
                wanting to use premium tools but facing obstacles in access and affordability.
              </p>
              <p className="text-lg text-muted-foreground leading-relaxed">
                Today, we're proud to serve hundreds of satisfied customers across Pakistan, 
                providing them with genuine access to tools like CapCut Pro, Canva Pro, premium VPNs, 
                and cutting-edge AI platforms. Our commitment to authentic service, fair pricing, 
                and responsive support has made us a trusted partner for digital professionals.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section-padding bg-gradient-primary">
        <div className="max-w-4xl mx-auto text-center container-padding">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-white">Ready to Join Us?</h2>
          <p className="text-xl text-white/90 mb-8">
            Experience the difference of working with a trusted digital partner
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/contact">
              <Button size="lg" variant="outline" className="text-white border-white hover:bg-white hover:text-primary">
                Contact Us
              </Button>
            </Link>
            <Link to="/products">
              <Button size="lg" className="bg-white text-primary hover:bg-white/90">
                View Products
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;