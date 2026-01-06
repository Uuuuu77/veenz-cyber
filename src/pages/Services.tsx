import {
  Printer,
  Copy,
  FileText,
  ScanLine,
  BookOpen,
  Layers,
  Shirt,
  Music,
  Tv,
  Car,
  Building2,
  FileCheck,
  Scroll,
  Plane,
  HeartPulse,
  GraduationCap,
  Briefcase,
} from "lucide-react";
import ServiceCard from "@/components/ServiceCard";
import { ScrollFade, StaggerContainer, StaggerItem } from "@/components/ScrollAnimation";

const cyberServices = [
  {
    icon: Copy,
    title: "Photocopy & Bulk Printing",
    description: "Fast and affordable photocopying for all your documents",
  },
  {
    icon: Printer,
    title: "Document Printing",
    description: "Color and black & white printing in various sizes",
  },
  {
    icon: BookOpen,
    title: "Binding & Lamination",
    description: "Professional binding and lamination services",
  },
  {
    icon: ScanLine,
    title: "Scanning",
    description: "High-quality document scanning to digital formats",
  },
  {
    icon: FileText,
    title: "Typing Services",
    description: "Professional document typing and formatting",
  },
  {
    icon: Layers,
    title: "Document Processing",
    description: "Complete document preparation and processing",
  },
];

const ecitizenServices = [
  {
    icon: Car,
    title: "Driving License Renewal",
    description: "Quick and hassle-free DL renewal assistance",
  },
  {
    icon: Building2,
    title: "KRA Services",
    description: "PIN registration, returns filing, and compliance",
  },
  {
    icon: Briefcase,
    title: "AGPO Certificate",
    description: "Access to Government Procurement Opportunities",
  },
  {
    icon: Scroll,
    title: "Birth & Death Certificates",
    description: "Application and replacement of vital documents",
  },
  {
    icon: Plane,
    title: "Passport Application",
    description: "New passport applications and renewals",
  },
  {
    icon: HeartPulse,
    title: "NHIF / NSSF / SHIF",
    description: "Registration and compliance services",
  },
  {
    icon: GraduationCap,
    title: "HELB Loan",
    description: "Student loan applications and management",
  },
  {
    icon: FileCheck,
    title: "Company Registration",
    description: "Business name and company registration",
  },
];

const brandingServices = [
  {
    icon: Shirt,
    title: "T-Shirt Printing",
    description: "Custom printed t-shirts for events, teams & brands",
  },
  {
    icon: Shirt,
    title: "Hoodie Printing",
    description: "Quality hoodies with your custom designs",
  },
  {
    icon: Layers,
    title: "Branded Merchandise",
    description: "Caps, bags, mugs and more with your logo",
  },
];

const entertainmentServices = [
  {
    icon: Music,
    title: "DJ Mixes",
    description: "Professional DJ mixes for all occasions",
  },
  {
    icon: Tv,
    title: "Veenz Ent TV",
    description: "Digital entertainment content and live sets",
  },
];

const Services = () => {
  return (
    <div className="py-12 md:py-20">
      <div className="container mx-auto px-4">
        {/* Header */}
        <ScrollFade className="text-center mb-16">
          <h1 className="text-3xl md:text-5xl font-bold text-foreground mb-4">
            Our Services
          </h1>
          <p className="text-muted-foreground max-w-2xl mx-auto text-lg">
            Comprehensive cyber, printing, e-citizen, and digital services all under one roof.
          </p>
        </ScrollFade>

        {/* Cyber & Printing */}
        <section className="mb-16">
          <ScrollFade className="flex items-center gap-3 mb-8">
            <div className="h-10 w-10 rounded-lg bg-primary/10 flex items-center justify-center">
              <Printer className="h-5 w-5 text-primary" />
            </div>
            <h2 className="text-2xl font-bold text-foreground">Cyber & Printing</h2>
          </ScrollFade>
          <StaggerContainer className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {cyberServices.map((service, index) => (
              <StaggerItem key={index}>
                <ServiceCard {...service} variant="primary" />
              </StaggerItem>
            ))}
          </StaggerContainer>
        </section>

        {/* E-Citizen Services */}
        <section className="mb-16">
          <ScrollFade className="flex items-center gap-3 mb-8">
            <div className="h-10 w-10 rounded-lg bg-accent/10 flex items-center justify-center">
              <FileCheck className="h-5 w-5 text-accent" />
            </div>
            <h2 className="text-2xl font-bold text-foreground">E-Citizen Services</h2>
          </ScrollFade>
          <StaggerContainer className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {ecitizenServices.map((service, index) => (
              <StaggerItem key={index}>
                <ServiceCard {...service} variant="accent" />
              </StaggerItem>
            ))}
          </StaggerContainer>
        </section>

        {/* Branding & Merchandise */}
        <section className="mb-16">
          <ScrollFade className="flex items-center gap-3 mb-8">
            <div className="h-10 w-10 rounded-lg bg-primary/10 flex items-center justify-center">
              <Shirt className="h-5 w-5 text-primary" />
            </div>
            <h2 className="text-2xl font-bold text-foreground">Branding & Merchandise</h2>
          </ScrollFade>
          <StaggerContainer className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {brandingServices.map((service, index) => (
              <StaggerItem key={index}>
                <ServiceCard {...service} variant="primary" />
              </StaggerItem>
            ))}
          </StaggerContainer>
        </section>

        {/* Entertainment & Media */}
        <section>
          <ScrollFade className="flex items-center gap-3 mb-8">
            <div className="h-10 w-10 rounded-lg bg-accent/10 flex items-center justify-center">
              <Music className="h-5 w-5 text-accent" />
            </div>
            <h2 className="text-2xl font-bold text-foreground">Entertainment & Media</h2>
          </ScrollFade>
          <StaggerContainer className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {entertainmentServices.map((service, index) => (
              <StaggerItem key={index}>
                <ServiceCard {...service} variant="accent" />
              </StaggerItem>
            ))}
          </StaggerContainer>
        </section>
      </div>
    </div>
  );
};

export default Services;
