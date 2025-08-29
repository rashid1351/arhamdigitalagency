import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { 
  MapPin, 
  Phone, 
  Mail, 
  MessageCircle, 
  Clock, 
  Send,
  ArrowRight,
  CheckCircle 
} from "lucide-react";
import { useToast } from "@/hooks/use-toast";
import { Link } from "react-router-dom";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: ""
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { toast } = useToast();

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!formData.name || !formData.email || !formData.message) {
      toast({
        title: "Error",
        description: "Please fill in all fields",
        variant: "destructive"
      });
      return;
    }

    setIsSubmitting(true);
    
    // Simulate form submission
    setTimeout(() => {
      toast({
        title: "Message Sent!",
        description: "Thank you for your message. We'll get back to you soon.",
      });
      setFormData({ name: "", email: "", message: "" });
      setIsSubmitting(false);
    }, 1000);
  };

  const contactInfo = [
    {
      icon: Phone,
      title: "Phone",
      details: "+92 319 176 3257",
      description: "Call us during business hours",
      action: "tel:+923191763257"
    },
    {
      icon: Mail,
      title: "Email",
      details: "arhamdigitalagency@gmail.com",
      description: "Send us an email anytime",
      action: "mailto:arhamdigitalagency@gmail.com"
    },
    {
      icon: MapPin,
      title: "Location",
      details: "Pakistan",
      description: "Serving clients nationwide",
      action: null
    },
    {
      icon: MessageCircle,
      title: "WhatsApp",
      details: "+92 319 176 3257",
      description: "Quick chat support",
      action: "https://wa.me/923191763257"
    }
  ];

  const businessHours = [
    { day: "Monday - Friday", hours: "9:00 AM - 6:00 PM" },
    { day: "Saturday", hours: "10:00 AM - 4:00 PM" },
    { day: "Sunday", hours: "Closed" }
  ];

  const handleWhatsAppContact = () => {
    const message = "Hello, I would like to inquire about your services.";
    const whatsappUrl = `https://wa.me/923191763257?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, '_blank');
  };

  return (
    <div className="min-h-screen pt-16">
      {/* Hero Section */}
      <section className="section-padding bg-gradient-dark">
        <div className="max-w-7xl mx-auto container-padding text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4 hero-glow">Contact Us</h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Get in touch with our team. We're here to help you with any questions about 
            our products and services.
          </p>
        </div>
      </section>

      {/* Contact Form & Info */}
      <section className="section-padding">
        <div className="max-w-7xl mx-auto container-padding">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <div>
              <Card className="card-hover">
                <CardContent className="p-8">
                  <h2 className="text-2xl font-bold mb-6">Send us a Message</h2>
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div>
                      <Label htmlFor="name">Name</Label>
                      <Input
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleInputChange}
                        placeholder="Your full name"
                        className="mt-2"
                      />
                    </div>
                    
                    <div>
                      <Label htmlFor="email">Email</Label>
                      <Input
                        id="email"
                        name="email"
                        type="email"
                        value={formData.email}
                        onChange={handleInputChange}
                        placeholder="your.email@example.com"
                        className="mt-2"
                      />
                    </div>
                    
                    <div>
                      <Label htmlFor="message">Message</Label>
                      <Textarea
                        id="message"
                        name="message"
                        value={formData.message}
                        onChange={handleInputChange}
                        placeholder="How can we help you?"
                        rows={5}
                        className="mt-2"
                      />
                    </div>
                    
                    <Button 
                      type="submit" 
                      className="w-full btn-primary"
                      disabled={isSubmitting}
                    >
                      {isSubmitting ? (
                        "Sending..."
                      ) : (
                        <>
                          Send Message
                          <Send className="ml-2 h-4 w-4" />
                        </>
                      )}
                    </Button>
                  </form>
                  
                  <div className="mt-6 p-4 bg-muted/50 rounded-lg">
                    <p className="text-sm text-muted-foreground flex items-center">
                      <Clock className="h-4 w-4 mr-2" />
                      We reply quickly during working hours.
                    </p>
                  </div>
                </CardContent>
              </Card>
            </div>

            {/* Contact Information */}
            <div className="space-y-6">
              <h2 className="text-2xl font-bold mb-6">Get in Touch</h2>
              
              <div className="grid grid-cols-1 gap-4">
                {contactInfo.map((info, index) => (
                  <Card key={info.title} className="card-hover animate-fade-in" style={{ animationDelay: `${index * 0.1}s` }}>
                    <CardContent className="p-6">
                      <div className="flex items-start space-x-4">
                        <div className="flex-shrink-0">
                          <div className="inline-flex items-center justify-center w-12 h-12 bg-primary/10 rounded-lg">
                            <info.icon className="h-6 w-6 text-primary" />
                          </div>
                        </div>
                        <div className="flex-1">
                          <h3 className="font-semibold mb-1">{info.title}</h3>
                          <p className="text-primary font-medium mb-1">{info.details}</p>
                          <p className="text-sm text-muted-foreground">{info.description}</p>
                          {info.action && (
                            <a
                              href={info.action}
                              target={info.action.startsWith('http') ? '_blank' : undefined}
                              rel={info.action.startsWith('http') ? 'noopener noreferrer' : undefined}
                              className="text-sm text-primary hover:underline mt-2 inline-block"
                            >
                              Contact now →
                            </a>
                          )}
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* WhatsApp CTA */}
      <section className="section-padding bg-card/50">
        <div className="max-w-4xl mx-auto container-padding text-center">
          <Card className="p-8 bg-secondary/5 border-secondary/20">
            <CardContent className="p-0">
              <MessageCircle className="h-16 w-16 text-secondary mx-auto mb-4" />
              <h3 className="text-2xl font-bold mb-4">Prefer to chat?</h3>
              <p className="text-muted-foreground mb-6">
                Get instant support through WhatsApp. Our team is ready to help you 
                with product inquiries, technical support, and purchase assistance.
              </p>
              <Button
                onClick={handleWhatsAppContact}
                size="lg"
                className="btn-secondary"
              >
                <MessageCircle className="w-5 h-5 mr-2" />
                Chat on WhatsApp
              </Button>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Business Hours */}
      <section className="section-padding">
        <div className="max-w-4xl mx-auto container-padding">
          <Card className="card-hover">
            <CardContent className="p-8">
              <div className="text-center mb-8">
                <Clock className="h-12 w-12 text-primary mx-auto mb-4" />
                <h2 className="text-2xl font-bold mb-2">Business Hours</h2>
                <p className="text-muted-foreground">
                  Our team is available during these hours for immediate assistance
                </p>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {businessHours.map((schedule, index) => (
                  <div key={schedule.day} className="text-center">
                    <h4 className="font-semibold mb-2">{schedule.day}</h4>
                    <p className="text-muted-foreground">{schedule.hours}</p>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section-padding bg-gradient-primary">
        <div className="max-w-4xl mx-auto text-center container-padding">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-white">Ready to Get Started?</h2>
          <p className="text-xl text-white/90 mb-8">
            Explore our premium digital tools and start your journey with us today
          </p>
          <Link to="/products">
            <Button size="lg" className="bg-white text-primary hover:bg-white/90">
              Explore Products
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
          </Link>
        </div>
      </section>
    </div>
  );
};

export default Contact;