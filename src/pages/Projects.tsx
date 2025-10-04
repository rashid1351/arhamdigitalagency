import { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import ecommercePlatform from "@/assets/projects/ecommerce-platform.jpg";
import corporateWebsite from "@/assets/projects/corporate-website.jpg";
import socialMediaCampaign from "@/assets/projects/social-media-campaign.jpg";
import productDemoVideos from "@/assets/projects/product-demo-videos.jpg";
import businessPortfolio from "@/assets/projects/business-portfolio.jpg";
import youtubeChannelGrowth from "@/assets/projects/youtube-channel-growth.jpg";
import restaurantWebsite from "@/assets/projects/restaurant-website.jpg";
import brandIdentity from "@/assets/projects/brand-identity.jpg";
import instagramMarketing from "@/assets/projects/instagram-marketing.jpg";

interface Project {
  id: string;
  title: string;
  category: string;
  image: string;
  challenge: string;
  solution: string;
  results: string;
}

const Projects = () => {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  const projects: Project[] = [
    {
      id: "1",
      title: "E-commerce Platform",
      category: "Web Development",
      image: ecommercePlatform,
      challenge: "Client needed a modern online store with seamless checkout and inventory management.",
      solution: "Built a responsive e-commerce website using Shopify with custom design, integrated payment gateways, and automated inventory tracking.",
      results: "300% increase in online sales, 85% faster checkout process, and 95% customer satisfaction rate."
    },
    {
      id: "2",
      title: "Corporate Website Redesign",
      category: "Web Design",
      image: corporateWebsite,
      challenge: "Outdated website with poor mobile experience and low conversion rates.",
      solution: "Redesigned with modern UI/UX principles, mobile-first approach, and optimized page speed using latest web technologies.",
      results: "65% increase in mobile traffic, 40% improvement in page load time, 50% higher conversion rate."
    },
    {
      id: "3",
      title: "Social Media Campaign",
      category: "Marketing",
      image: socialMediaCampaign,
      challenge: "Brand needed to increase engagement and reach younger demographics on social platforms.",
      solution: "Developed targeted content strategy with influencer partnerships, daily posts, and interactive stories across Instagram, Facebook, and TikTok.",
      results: "200% growth in followers, 150% increase in engagement, reached 500K+ new audience members."
    },
    {
      id: "4",
      title: "Product Demo Videos",
      category: "Video Editing",
      image: productDemoVideos,
      challenge: "Company struggled to showcase product features effectively to potential customers.",
      solution: "Created professional demo videos with motion graphics, voiceovers, and compelling storytelling using CapCut and professional editing tools.",
      results: "80% increase in product understanding, 45% higher click-through rates, 60% more qualified leads."
    },
    {
      id: "5",
      title: "Business Portfolio Website",
      category: "Web Development",
      image: businessPortfolio,
      challenge: "Freelance professional needed an impressive online portfolio to attract premium clients.",
      solution: "Designed and developed a stunning portfolio website with custom animations, case studies showcase, and contact integration.",
      results: "90% increase in client inquiries, 3x higher project value, featured in design community platforms."
    },
    {
      id: "6",
      title: "YouTube Channel Growth",
      category: "Marketing",
      image: youtubeChannelGrowth,
      challenge: "Content creator struggled with low views and subscribers despite quality content.",
      solution: "Implemented SEO optimization, thumbnail design strategy, posting schedule optimization, and targeted promotion campaigns.",
      results: "500% subscriber growth in 6 months, 300% increase in average views, achieved monetization requirements."
    },
    {
      id: "7",
      title: "Restaurant Website & Ordering",
      category: "Web Development",
      image: restaurantWebsite,
      challenge: "Local restaurant needed online presence and ordering system during pandemic.",
      solution: "Built responsive website with online menu, ordering system, delivery tracking, and payment integration.",
      results: "70% of sales moved online, 35% reduction in order errors, 92% customer satisfaction with new system."
    },
    {
      id: "8",
      title: "Brand Identity Design",
      category: "Web Design",
      image: brandIdentity,
      challenge: "Startup needed complete brand identity from logo to website design.",
      solution: "Created comprehensive brand guidelines including logo, color palette, typography, and designed matching website and marketing materials.",
      results: "100% brand recognition improvement, professional image established, 5x increase in investor interest."
    },
    {
      id: "9",
      title: "Instagram Marketing Campaign",
      category: "Marketing",
      image: instagramMarketing,
      challenge: "Fashion brand struggled with low Instagram engagement and sales conversion.",
      solution: "Developed content calendar, influencer collaborations, story highlights, reels strategy, and shoppable posts.",
      results: "400% increase in Instagram sales, 250% growth in engaged followers, 10K+ monthly reach."
    }
  ];

  return (
    <div className="min-h-screen bg-background pt-20">
      <div className="container mx-auto px-4 py-12">
        {/* Header */}
        <div className="text-center mb-16 animate-fade-in">
          <h1 className="text-4xl md:text-5xl font-bold mb-4 hero-glow">
            Our Projects & Portfolio
          </h1>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            A showcase of our recent work across web development, design, marketing, and video editing.
          </p>
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {projects.map((project, index) => (
            <Card
              key={project.id}
              className="cursor-pointer hover-scale glass-effect border-border/50 overflow-hidden group"
              onClick={() => setSelectedProject(project)}
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="aspect-[3/2] overflow-hidden">
                <img
                  src={project.image}
                  alt={`${project.title} - ${project.category} mockup design`}
                  className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
                />
              </div>
              <CardContent className="p-4">
                <p className="text-xs text-primary font-semibold mb-1">
                  {project.category}
                </p>
                <h3 className="font-semibold text-lg">{project.title}</h3>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>

      {/* Project Details Dialog */}
      <Dialog open={!!selectedProject} onOpenChange={() => setSelectedProject(null)}>
        <DialogContent className="max-w-2xl max-h-[80vh] overflow-y-auto">
          {selectedProject && (
            <>
              <DialogHeader>
                <DialogTitle className="text-2xl">{selectedProject.title}</DialogTitle>
                <p className="text-sm text-primary font-semibold">{selectedProject.category}</p>
              </DialogHeader>
              
              <div className="space-y-6 mt-4">
                <div className="aspect-video overflow-hidden rounded-lg">
                  <img
                    src={selectedProject.image}
                    alt={`${selectedProject.title} - ${selectedProject.category} mockup design`}
                    className="w-full h-full object-cover"
                  />
                </div>

                <div>
                  <h3 className="text-lg font-semibold mb-2 text-primary">Challenge</h3>
                  <p className="text-muted-foreground">{selectedProject.challenge}</p>
                </div>

                <div>
                  <h3 className="text-lg font-semibold mb-2 text-primary">Solution</h3>
                  <p className="text-muted-foreground">{selectedProject.solution}</p>
                </div>

                <div>
                  <h3 className="text-lg font-semibold mb-2 text-primary">Results</h3>
                  <p className="text-muted-foreground">{selectedProject.results}</p>
                </div>
              </div>
            </>
          )}
        </DialogContent>
      </Dialog>
    </div>
  );
};

export default Projects;
