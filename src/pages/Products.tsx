import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { useCart } from "@/hooks/useCart";
import capcutLogo from "@/assets/logos/capcut.png";
import canvaLogo from "@/assets/logos/canva.png";
import nordvpnLogo from "@/assets/logos/nordvpn.png";
import elevenlabsLogo from "@/assets/logos/elevenlabs.png";
import surfsharkLogo from "@/assets/logos/surfshark.png";
import netflixLogo from "@/assets/logos/netflix.png";
import primeVideoLogo from "@/assets/logos/prime-video.png";
import semrushLogo from "@/assets/logos/semrush.png";
import domainHostingLogo from "@/assets/logos/domain-hosting.png";
import veo3Logo from "@/assets/logos/veo3.png";

const Products = () => {
  const { addItem } = useCart();

  const products = [
    {
      id: "capcut-pro",
      name: "CapCut Pro (1 Month)",
      price: 600,
      image: capcutLogo,
      description: "Professional video editing with advanced features, effects, and export options"
    },
    {
      id: "canva-pro",
      name: "Canva Pro (1 Month)",
      price: 300,
      image: canvaLogo,
      description: "Premium design tools with unlimited templates, stock photos, and brand kit"
    },
    {
      id: "nordvpn",
      name: "NordVPN (Per Month)",
      price: 400,
      image: nordvpnLogo,
      description: "Secure VPN with 5400+ servers worldwide and advanced security features"
    },
    {
      id: "elevenlabs",
      name: "ElevenLabs (Per Month)",
      price: 2000,
      image: elevenlabsLogo,
      description: "AI-powered voice synthesis and cloning with realistic speech generation"
    },
    {
      id: "surfshark",
      name: "Surfshark VPN (2 Months)",
      price: 600,
      image: surfsharkLogo,
      description: "Unlimited device VPN protection with ad-blocking and malware protection"
    },
    {
      id: "domain-hosting",
      name: "Domain & Hosting Package",
      price: 4500,
      image: domainHostingLogo,
      description: "Includes: 1 .com domain + 1 year hosting plan with full support"
    },
    {
      id: "netflix",
      name: "Netflix (1 Month)",
      price: 500,
      image: netflixLogo,
      description: "Premium streaming access to movies, series, and original content"
    },
    {
      id: "prime-video",
      name: "Prime Video (1 Month)",
      price: 500,
      image: primeVideoLogo,
      description: "Amazon Prime Video streaming with exclusive shows and movies"
    },
    {
      id: "semrush",
      name: "Semrush (1 Month)",
      price: 500,
      image: semrushLogo,
      description: "Complete SEO toolkit for keyword research, competitor analysis, and more"
    },
    {
      id: "veo3",
      name: "Veo 3 (1 Month)",
      price: 700,
      image: veo3Logo,
      description: "Advanced AI video generation and editing capabilities"
    }
  ];

  return (
    <div className="min-h-screen pt-16">
      {/* Header */}
      <section className="section-padding bg-gradient-dark">
        <div className="max-w-7xl mx-auto container-padding text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4 hero-glow">Our Products</h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Premium digital tools and services at unbeatable prices. Choose from our wide selection
            of professional software and subscriptions.
          </p>
        </div>
      </section>

      {/* Products Grid */}
      <section className="section-padding">
        <div className="max-w-7xl mx-auto container-padding">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {products.map((product, index) => (
              <Card key={product.id} className="card-hover animate-fade-in" style={{ animationDelay: `${index * 0.1}s` }}>
                <CardContent className="p-6">
                  <div className="flex items-center justify-center mb-6">
                    <img
                      src={product.image}
                      alt={product.name}
                      className="w-20 h-20 object-contain"
                    />
                  </div>
                  <h3 className="text-xl font-semibold mb-3 text-center">{product.name}</h3>
                  <p className="text-muted-foreground mb-6 text-center line-clamp-3">
                    {product.description}
                  </p>
                  <div className="space-y-4">
                    <div className="text-center">
                      <span className="text-2xl font-bold text-primary">Rs. {product.price}</span>
                    </div>
                    <Button
                      onClick={() => addItem(product)}
                      className="w-full btn-primary"
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

      {/* Features Section */}
      <section className="section-padding bg-card/50">
        <div className="max-w-7xl mx-auto container-padding">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
            <div>
              <h3 className="text-lg font-semibold mb-2">Fast Activation</h3>
              <p className="text-muted-foreground">
                Get instant access to your tools within minutes of purchase
              </p>
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-2">Secure Checkout</h3>
              <p className="text-muted-foreground">
                Safe and secure payment process via WhatsApp chat
              </p>
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-2">24/7 Support</h3>
              <p className="text-muted-foreground">
                Round-the-clock customer support for all your queries
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Products;