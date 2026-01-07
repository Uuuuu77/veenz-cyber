import { Link } from "react-router-dom";
import {
  Printer,
  FileText,
  Palette,
  Phone,
  MessageCircle,
  MapPin,
  Zap,
  Shield,
  Clock,
  ClipboardList,
  Upload,
  Settings,
  CheckCircle,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import ServiceCard from "@/components/ServiceCard";
import { ScrollFade, StaggerContainer, StaggerItem } from "@/components/ScrollAnimation";

const quickServices = [
  {
    icon: FileText,
    title: "Online Application Assistance",
    description: "eCitizen, KRA, HELB, NTSA, Passport & more government services",
    variant: "accent" as const,
  },
  {
    icon: Palette,
    title: "Graphic Design",
    description: "Logos, posters, certificates, brochures & branding materials",
    variant: "primary" as const,
  },
  {
    icon: Printer,
    title: "Printing Services",
    description: "Documents, banners, business cards & large format printing",
    variant: "primary" as const,
  },
  {
    icon: Shield,
    title: "Branding & Merchandise",
    description: "Custom t-shirts, mugs, caps & corporate gifts",
    variant: "accent" as const,
  },
];

const trustIndicators = [
  { icon: Zap, text: "Fast Turnaround" },
  { icon: Shield, text: "Reliable Service" },
  { icon: Clock, text: "Open 7 Days" },
];

const howItWorks = [
  {
    icon: MapPin,
    step: "1",
    title: "Visit or Contact Us",
    description: "Come to our cyber or reach out via WhatsApp/call",
  },
  {
    icon: Upload,
    step: "2",
    title: "Submit Your Request",
    description: "Provide your documents or design requirements",
  },
  {
    icon: Settings,
    step: "3",
    title: "We Process",
    description: "We handle the application, design, or printing",
  },
  {
    icon: CheckCircle,
    step: "4",
    title: "Collect or Receive",
    description: "Pick up your items or receive them digitally",
  },
];

const Index = () => {
  return (
    <div>
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-br from-primary via-primary to-primary/90 text-primary-foreground">
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxwYXRoIGQ9Ik0zNiAxOGMtNi42MjcgMC0xMiA1LjM3My0xMiAxMnM1LjM3MyAxMiAxMiAxMiAxMi01LjM3MyAxMi0xMi01LjM3My0xMi0xMi0xMnptMCAyMGMtNC40MTggMC04LTMuNTgyLTgtOHMzLjU4Mi04IDgtOCA4IDMuNTgyIDggOC0zLjU4MiA4LTggOHoiIGZpbGw9IiNmZmYiIGZpbGwtb3BhY2l0eT0iLjA1Ii8+PC9nPjwvc3ZnPg==')] opacity-30" />
        <div className="container mx-auto px-4 py-20 md:py-32 relative">
          <ScrollFade className="max-w-3xl mx-auto text-center">
            {/* Logo */}
            <h1 className="text-4xl md:text-6xl font-black mb-4 tracking-tight">
              <span className="text-primary-foreground">VEENZ</span>
              <span className="text-accent"> CYBER</span>
              <span className="block text-2xl md:text-3xl font-bold mt-2 text-primary-foreground/90">
                SOLUTIONS
              </span>
            </h1>

            {/* Tagline */}
            <p className="text-xl md:text-2xl font-semibold text-primary-foreground mb-2">
              Your Trusted Tech & Print Partners
            </p>
            <p className="text-base md:text-lg text-primary-foreground/80 mb-8 max-w-xl mx-auto">
              Online Application Assistance, Design & Printing Solutions
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Button
                asChild
                size="lg"
                variant="secondary"
                className="w-full sm:w-auto gap-2"
              >
                <a href="tel:+254708384551">
                  <Phone className="h-5 w-5" />
                  Call Now
                </a>
              </Button>
              <Button
                asChild
                size="lg"
                className="w-full sm:w-auto gap-2 bg-accent hover:bg-accent/90 text-accent-foreground"
              >
                <a
                  href="https://wa.me/254708384551"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <MessageCircle className="h-5 w-5" />
                  Get Online Assistance
                </a>
              </Button>
              <Button
                asChild
                size="lg"
                variant="outline"
                className="w-full sm:w-auto gap-2 border-primary-foreground/30 text-primary-foreground hover:bg-primary-foreground/10"
              >
                <Link to="/services">
                  <ClipboardList className="h-5 w-5" />
                  View Services
                </Link>
              </Button>
            </div>
          </ScrollFade>
        </div>
      </section>

      {/* Trust Indicators */}
      <section className="bg-muted py-6 border-b">
        <div className="container mx-auto px-4">
          <ScrollFade>
            <div className="flex flex-wrap items-center justify-center gap-8 md:gap-16">
              {trustIndicators.map((item, index) => (
                <div key={index} className="flex items-center gap-2 text-muted-foreground">
                  <item.icon className="h-5 w-5 text-accent" />
                  <span className="text-sm font-medium">{item.text}</span>
                </div>
              ))}
            </div>
          </ScrollFade>
        </div>
      </section>

      {/* Quick Services Overview */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4">
          <ScrollFade className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              What We Offer
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              From online application assistance to professional design and printing,
              we've got you covered with reliable solutions.
            </p>
          </ScrollFade>

          <StaggerContainer className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {quickServices.map((service, index) => (
              <StaggerItem key={index}>
                <ServiceCard {...service} />
              </StaggerItem>
            ))}
          </StaggerContainer>

          <ScrollFade delay={0.3} className="text-center mt-10">
            <Button asChild size="lg">
              <Link to="/services">View All Services</Link>
            </Button>
          </ScrollFade>
        </div>
      </section>

      {/* How It Works */}
      <section className="py-16 md:py-24 bg-muted">
        <div className="container mx-auto px-4">
          <ScrollFade className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              How It Works
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Getting started is easy. Follow these simple steps.
            </p>
          </ScrollFade>

          <StaggerContainer className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {howItWorks.map((item, index) => (
              <StaggerItem key={index}>
                <div className="text-center">
                  <div className="relative inline-flex items-center justify-center mb-4">
                    <div className="h-16 w-16 rounded-full bg-primary/10 flex items-center justify-center">
                      <item.icon className="h-8 w-8 text-primary" />
                    </div>
                    <span className="absolute -top-2 -right-2 h-8 w-8 rounded-full bg-accent text-accent-foreground text-sm font-bold flex items-center justify-center">
                      {item.step}
                    </span>
                  </div>
                  <h3 className="text-lg font-semibold text-foreground mb-2">
                    {item.title}
                  </h3>
                  <p className="text-muted-foreground text-sm">
                    {item.description}
                  </p>
                </div>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-foreground text-background py-16">
        <div className="container mx-auto px-4 text-center">
          <ScrollFade>
            <h2 className="text-2xl md:text-3xl font-bold mb-4">
              Ready to Get Started?
            </h2>
            <p className="text-background/70 mb-8 max-w-xl mx-auto">
              Visit us at Baraka Mowlem, Embakasi or reach out via phone or WhatsApp.
              We're here to help!
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Button
                asChild
                size="lg"
                className="bg-accent hover:bg-accent/90 text-accent-foreground gap-2"
              >
                <a
                  href="https://wa.me/254708384551"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <MessageCircle className="h-5 w-5" />
                  Chat on WhatsApp
                </a>
              </Button>
              <Button
                asChild
                size="lg"
                variant="outline"
                className="border-background/30 text-background hover:bg-background/10"
              >
                <Link to="/contact">Get Directions</Link>
              </Button>
            </div>
          </ScrollFade>
        </div>
      </section>
    </div>
  );
};

export default Index;
