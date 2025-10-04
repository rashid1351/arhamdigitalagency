import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X, ShoppingCart } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { CartSidebar } from "@/components/Cart/CartSidebar";
import { useCart } from "@/hooks/useCart";
import arhamLogo from "@/assets/arham-logo.jpg";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isCartOpen, setIsCartOpen] = useState(false);
  const location = useLocation();
  const { items } = useCart();

  const navigation = [
    { name: "Home", href: "/" },
    { name: "Projects", href: "/projects" },
    { name: "Products", href: "/products" },
    { name: "Tools", href: "/tools" },
    { name: "Our Team", href: "/team" },
    { name: "Contact Us", href: "/contact" },
  ];

  const totalItems = items.reduce((sum, item) => sum + item.quantity, 0);

  return (
    <>
      <nav className="fixed top-0 left-0 right-0 z-50 glass-effect border-b border-border/50">
        <div className="max-w-7xl mx-auto container-padding">
          <div className="flex items-center justify-between h-16">
            {/* Logo */}
            <Link to="/" className="flex-shrink-0 flex items-center space-x-3 group">
              <img 
                src={arhamLogo} 
                alt="ARHAM Digital Agency Logo" 
                className="h-12 w-12 rounded-full object-cover border-2 border-primary/30 transition-all duration-300 group-hover:scale-110 group-hover:border-primary"
              />
              <h1 className="text-lg md:text-xl font-bold hero-glow hidden sm:block">
                ARHAM DIGITAL AGENCY
              </h1>
            </Link>

            {/* Desktop Navigation */}
            <div className="hidden md:block">
              <div className="ml-10 flex items-baseline space-x-8">
                {navigation.map((item) => (
                  <Link
                    key={item.name}
                    to={item.href}
                    className={`px-3 py-2 rounded-md text-sm font-medium transition-colors ${
                      location.pathname === item.href
                        ? "text-primary bg-primary/10"
                        : "text-muted-foreground hover:text-foreground hover:bg-accent/50"
                    }`}
                  >
                    {item.name}
                  </Link>
                ))}
              </div>
            </div>

            {/* Cart and Mobile menu button */}
            <div className="flex items-center space-x-4">
              <Button
                variant="default"
                size="default"
                onClick={() => setIsCartOpen(true)}
                className="relative bg-primary text-primary-foreground hover:bg-primary/90 px-4 py-2 h-10"
              >
                <ShoppingCart className="h-5 w-5 mr-2" />
                <span className="font-medium">Cart</span>
                {totalItems > 0 && (
                  <span className="ml-2 bg-background text-foreground rounded-full text-xs w-5 h-5 flex items-center justify-center font-semibold">
                    {totalItems}
                  </span>
                )}
              </Button>

              {/* Mobile menu button */}
              <div className="md:hidden">
                <Sheet open={isOpen} onOpenChange={setIsOpen}>
                  <SheetTrigger asChild>
                    <Button variant="ghost" size="sm">
                      <Menu className="h-5 w-5" />
                    </Button>
                  </SheetTrigger>
                  <SheetContent side="right" className="w-[300px] sm:w-[400px]">
                    <div className="flex flex-col space-y-4 mt-8">
                      {navigation.map((item) => (
                        <Link
                          key={item.name}
                          to={item.href}
                          onClick={() => setIsOpen(false)}
                          className={`px-3 py-2 rounded-md text-base font-medium transition-colors ${
                            location.pathname === item.href
                              ? "text-primary bg-primary/10"
                              : "text-muted-foreground hover:text-foreground hover:bg-accent/50"
                          }`}
                        >
                          {item.name}
                        </Link>
                      ))}
                    </div>
                  </SheetContent>
                </Sheet>
              </div>
            </div>
          </div>
        </div>
      </nav>

      {/* Cart Sidebar */}
      <CartSidebar open={isCartOpen} onClose={() => setIsCartOpen(false)} />
    </>
  );
};

export default Navbar;