import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Mail, Phone, ArrowRight } from "lucide-react";
import rashidImage from "@/assets/team/rashid-azam.jpg";
import malaikaImage from "@/assets/team/malaika-zainab.jpg";
import maryamImage from "@/assets/team/maryam-sajjad.jpg";
import babarImage from "@/assets/team/babar-iqbal.jpg";

const Team = () => {
  const teamMembers = [
    {
      name: "Rashid Azam",
      role: "Founder & CEO",
      bio: "Web Developer & Digital Marketing Expert",
      image: rashidImage,
      email: "rashidbloch1351@gmail.com",
      phone: "+92 327 643 4422"
    },
    {
      name: "Malaika Zainab",
      role: "Communication Manager",
      bio: "Specialist in client communication and branding",
      image: malaikaImage,
      email: "arhamdigitalagency@gmail.com",
      phone: "+92 319 176 3257"
    },
    {
      name: "Maryam Sajjad",
      role: "Web Designer",
      bio: "Expert in modern responsive web design",
      image: maryamImage,
      email: "arhamdigitalagency@gmail.com",
      phone: "+92 319 176 3257"
    },
    {
      name: "Babar Iqbal",
      role: "Video Editor & AI Expert",
      bio: "Creative storyteller with AI video expertise",
      image: babarImage,
      email: "arhamdigitalagency@gmail.com",
      phone: "+92 319 176 3257"
    }
  ];

  const values = [
    "Innovation and creativity in every project",
    "Commitment to client success and satisfaction",
    "Transparent communication and honest pricing",
    "Continuous learning and skill development",
    "Building long-term partnerships with clients"
  ];

  return (
    <div className="min-h-screen pt-16">
      {/* Hero Section */}
      <section className="section-padding bg-gradient-dark">
        <div className="max-w-7xl mx-auto container-padding text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4 hero-glow">Meet Our Team</h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Get to know the passionate professionals behind ARHAM DIGITAL AGENCY who are 
            dedicated to providing you with the best digital tools and exceptional service.
          </p>
        </div>
      </section>

      {/* Team Members */}
      <section className="section-padding">
        <div className="max-w-7xl mx-auto container-padding">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {teamMembers.map((member, index) => (
              <Card key={member.name} className="card-hover animate-fade-in" style={{ animationDelay: `${index * 0.1}s` }}>
                <CardContent className="p-6">
                  <div className="text-center">
                    <div className="relative mb-6">
                      <img
                        src={member.image}
                        alt={member.name}
                        className="w-32 h-32 rounded-full mx-auto object-cover border-4 border-primary/20"
                      />
                    </div>
                    
                    <h3 className="text-xl font-semibold mb-1">{member.name}</h3>
                    <p className="text-primary font-medium mb-2">{member.role}</p>
                    <p className="text-sm text-muted-foreground mb-6">{member.bio}</p>
                    
                    <div className="space-y-2">
                      <a
                        href={`mailto:${member.email}`}
                        className="flex items-center justify-center space-x-2 text-sm text-muted-foreground hover:text-primary transition-colors"
                      >
                        <Mail className="h-4 w-4" />
                        <span>Email</span>
                      </a>
                      <a
                        href={`tel:${member.phone}`}
                        className="flex items-center justify-center space-x-2 text-sm text-muted-foreground hover:text-primary transition-colors"
                      >
                        <Phone className="h-4 w-4" />
                        <span>Call</span>
                      </a>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Team Values */}
      <section className="section-padding bg-card/50">
        <div className="max-w-7xl mx-auto container-padding">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold mb-6">Our Team Values</h2>
              <p className="text-lg text-muted-foreground mb-8">
                We believe in fostering a culture of excellence, innovation, and client-first 
                thinking. Our team is united by shared values that drive everything we do.
              </p>
              
              <ul className="space-y-4">
                {values.map((value, index) => (
                  <li key={index} className="flex items-start space-x-3">
                    <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0" />
                    <span className="text-muted-foreground">{value}</span>
                  </li>
                ))}
              </ul>
            </div>
            
            <div className="space-y-6">
              <Card className="p-6 bg-primary/5 border-primary/20">
                <h3 className="font-semibold mb-3">Collaborative Approach</h3>
                <p className="text-sm text-muted-foreground">
                  Our team works together seamlessly to deliver comprehensive solutions 
                  that meet your digital needs.
                </p>
              </Card>
              
              <Card className="p-6 bg-secondary/5 border-secondary/20">
                <h3 className="font-semibold mb-3">Continuous Growth</h3>
                <p className="text-sm text-muted-foreground">
                  We stay updated with the latest trends and technologies to provide 
                  you with cutting-edge tools and services.
                </p>
              </Card>
              
              <Card className="p-6 bg-primary/5 border-primary/20">
                <h3 className="font-semibold mb-3">Client Success Focus</h3>
                <p className="text-sm text-muted-foreground">
                  Your success is our success. We're committed to helping you achieve 
                  your goals with the right tools and support.
                </p>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Leadership Spotlight */}
      <section className="section-padding">
        <div className="max-w-4xl mx-auto container-padding">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Leadership Message</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              A message from our founder about our mission and commitment to excellence
            </p>
          </div>
          
          <Card className="p-8 md:p-12 bg-gradient-dark border-primary/20">
            <div className="text-center">
              <img
                src={rashidImage}
                alt="Rashid Azam"
                className="w-24 h-24 rounded-full mx-auto mb-6 object-cover border-4 border-primary/20"
              />
              <blockquote className="text-lg text-muted-foreground italic mb-6 leading-relaxed">
                "At ARHAM DIGITAL AGENCY, we believe that access to premium digital tools 
                shouldn't be a luxury. Our mission is to democratize these powerful resources, 
                making them accessible to creators, entrepreneurs, and businesses across Pakistan. 
                We're not just providing tools; we're empowering dreams and enabling success."
              </blockquote>
              <div>
                <p className="font-semibold text-primary">Rashid Azam</p>
                <p className="text-sm text-muted-foreground">Founder & CEO</p>
              </div>
            </div>
          </Card>
        </div>
      </section>

      {/* Contact CTA */}
      <section className="section-padding bg-gradient-primary">
        <div className="max-w-4xl mx-auto text-center container-padding">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-white">Ready to Work with Us?</h2>
          <p className="text-xl text-white/90 mb-8">
            Get in touch with our team and discover how we can help you succeed
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/contact">
              <Button size="lg" className="bg-white text-primary hover:bg-white/90">
                Contact Us
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </Link>
            <Link to="/products">
              <Button size="lg" variant="outline" className="text-white border-white hover:bg-white hover:text-primary">
                View Products
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Team;