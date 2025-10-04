import { Link } from "react-router-dom";
import { Facebook, Instagram, Linkedin, MessageCircle } from "lucide-react";
import arhamLogo from "@/assets/arham-logo.jpg";

const Footer = () => {
  const quickLinks = [
    { name: "Home", href: "/" },
    { name: "About", href: "/about" },
    { name: "Products", href: "/products" },
    { name: "Contact", href: "/contact" },
    { name: "Tools", href: "/tools" },
    { name: "Team", href: "/team" },
  ];

  const socialLinks = [
    { name: "Facebook", icon: Facebook, href: "https://facebook.com/arhamdigitalagency/" },
    { name: "Instagram", icon: Instagram, href: "https://instagram.com/arhamdigitalagency" },
    { name: "WhatsApp", icon: MessageCircle, href: "https://wa.me/92327643422" },
  ];

  return (
    <footer className="bg-card border-t border-border/50">
      <div className="max-w-7xl mx-auto container-padding py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Brand */}
          <div>
            <div className="flex items-center space-x-3 mb-4">
              <img 
                src={arhamLogo} 
                alt="ARHAM Digital Agency Logo" 
                className="h-16 w-16 rounded-full object-cover border-2 border-primary/30"
              />
              <h3 className="text-lg font-bold hero-glow">
                ARHAM DIGITAL AGENCY
              </h3>
            </div>
            <p className="text-muted-foreground mb-4">
              Your trusted partner for premium digital tools & services.
            </p>
            <div className="flex space-x-4">
              {socialLinks.map((social) => (
                <a
                  key={social.name}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-muted-foreground hover:text-primary transition-colors"
                >
                  <social.icon className="h-5 w-5" />
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-sm font-semibold text-foreground mb-4">
              Quick Links
            </h4>
            <div className="grid grid-cols-2 gap-2">
              {quickLinks.map((link) => (
                <Link
                  key={link.name}
                  to={link.href}
                  className="text-muted-foreground hover:text-primary transition-colors text-sm"
                >
                  {link.name}
                </Link>
              ))}
            </div>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-sm font-semibold text-foreground mb-4">
              Contact Info
            </h4>
            <div className="space-y-2 text-sm text-muted-foreground">
              <p>Email: arhamdigitalagency@gmail.com</p>
              <p>Phone: +92 327 643 422</p>
              <p>Location: Pakistan</p>
            </div>
          </div>
        </div>

        <div className="border-t border-border/50 mt-8 pt-8 text-center">
          <p className="text-muted-foreground text-sm">
            © 2025 ARHAM DIGITAL AGENCY. All Rights Reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;