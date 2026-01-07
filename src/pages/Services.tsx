import { Link } from "react-router-dom";
import {
  Printer,
  Copy,
  FileText,
  ScanLine,
  BookOpen,
  Layers,
  Shirt,
  Car,
  Building2,
  FileCheck,
  Scroll,
  Plane,
  HeartPulse,
  GraduationCap,
  Briefcase,
  Palette,
  Image,
  FileImage,
  Heart,
  PenTool,
  CreditCard,
  BadgeCheck,
  Home,
  AlertTriangle,
  Coffee,
  Gift,
} from "lucide-react";
import ServiceCard from "@/components/ServiceCard";
import { ScrollFade, StaggerContainer, StaggerItem } from "@/components/ScrollAnimation";

const governmentServices = [
  {
    icon: Plane,
    title: "Passport Application Assistance",
    description: "Help with new passport applications and renewals",
  },
  {
    icon: Scroll,
    title: "Birth/Death Certificate Assistance",
    description: "Application and replacement of vital documents",
  },
  {
    icon: GraduationCap,
    title: "HELB Application Support",
    description: "Student loan applications and processing assistance",
  },
  {
    icon: Building2,
    title: "KRA Services Assistance",
    description: "PIN registration, returns filing, and compliance help",
  },
  {
    icon: Briefcase,
    title: "Business Name Registration Support",
    description: "Help with business name search and registration",
  },
  {
    icon: FileCheck,
    title: "Company Registration Support",
    description: "Assistance with company incorporation process",
  },
  {
    icon: CreditCard,
    title: "Single Business Permit Support",
    description: "Nairobi County business permit application help",
  },
  {
    icon: BadgeCheck,
    title: "eCitizen Account Support",
    description: "Account creation and general eCitizen assistance",
  },
  {
    icon: Car,
    title: "NTSA Services Assistance",
    description: "Driving license, logbook, and vehicle services help",
  },
  {
    icon: Home,
    title: "Boma Yangu Assistance",
    description: "Affordable Housing application support",
  },
  {
    icon: HeartPulse,
    title: "NHIF / SHIF / NSSF Assistance",
    description: "Registration and compliance support",
  },
  {
    icon: Briefcase,
    title: "AGPO Certificate Assistance",
    description: "Access to Government Procurement Opportunities",
  },
];

const designServices = [
  {
    icon: BadgeCheck,
    title: "Award Certificate Design",
    description: "Professional certificates for awards and recognition",
  },
  {
    icon: Image,
    title: "Posters & Flyers",
    description: "Eye-catching promotional materials",
  },
  {
    icon: FileText,
    title: "Eulogy Design",
    description: "Respectful and beautiful tribute designs",
  },
  {
    icon: Heart,
    title: "Love Cards & Greeting Cards",
    description: "Custom cards for all occasions",
  },
  {
    icon: BookOpen,
    title: "Brochures",
    description: "Professional brochure design and layout",
  },
  {
    icon: Heart,
    title: "Wedding Cards",
    description: "Elegant wedding invitation designs",
  },
  {
    icon: Palette,
    title: "Logo Design",
    description: "Unique logos for your brand identity",
  },
  {
    icon: FileImage,
    title: "Sticker & Banner Design",
    description: "Custom stickers and banners for any purpose",
  },
  {
    icon: PenTool,
    title: "Letterhead Design",
    description: "Professional business letterhead",
  },
  {
    icon: Briefcase,
    title: "Company Profile Design",
    description: "Comprehensive company profile documents",
  },
  {
    icon: CreditCard,
    title: "ID Card Design",
    description: "School IDs, work IDs, and staff badges",
  },
];

const printingServices = [
  {
    icon: Layers,
    title: "Large Format Printing",
    description: "Banners, posters, and signage printing",
  },
  {
    icon: Copy,
    title: "Bulk Printing",
    description: "Schools, offices, and church printing",
  },
  {
    icon: BadgeCheck,
    title: "Certificate Printing",
    description: "High-quality certificate printing",
  },
  {
    icon: CreditCard,
    title: "Business Cards",
    description: "Professional business card printing",
  },
  {
    icon: FileText,
    title: "Flyers & Brochures Printing",
    description: "Marketing materials printing",
  },
  {
    icon: Heart,
    title: "Wedding Cards Printing",
    description: "Beautiful wedding invitation printing",
  },
  {
    icon: Briefcase,
    title: "Company Profiles Printing",
    description: "Professional profile booklets",
  },
  {
    icon: Printer,
    title: "Document Printing",
    description: "Color and black & white printing",
  },
  {
    icon: ScanLine,
    title: "Scanning & Photocopying",
    description: "High-quality scanning and copies",
  },
  {
    icon: BookOpen,
    title: "Binding & Lamination",
    description: "Professional finishing services",
  },
];

const brandingServices = [
  {
    icon: Shirt,
    title: "T-Shirt Branding",
    description: "Custom printed t-shirts for events and teams",
  },
  {
    icon: Coffee,
    title: "Mug / Cup Branding",
    description: "Personalized mugs with your designs",
  },
  {
    icon: Gift,
    title: "Corporate Gift Branding",
    description: "Branded items for corporate gifting",
  },
  {
    icon: Layers,
    title: "Event Branding",
    description: "Complete branding for events and functions",
  },
  {
    icon: Shirt,
    title: "Hoodie Branding",
    description: "Quality hoodies with custom designs",
  },
  {
    icon: Layers,
    title: "Caps & Bags",
    description: "Branded caps, bags, and accessories",
  },
];

const Services = () => {
  return (
    <div className="py-12 md:py-20">
      <div className="container mx-auto px-4">
        {/* Header */}
        <ScrollFade className="text-center mb-12">
          <h1 className="text-3xl md:text-5xl font-bold text-foreground mb-4">
            Our Services
          </h1>
          <p className="text-muted-foreground max-w-2xl mx-auto text-lg">
            Online application assistance, professional design, quality printing,
            and branding solutions all under one roof.
          </p>
        </ScrollFade>

        {/* Disclaimer Banner */}
        <ScrollFade className="mb-12">
          <div className="bg-accent/10 border-l-4 border-accent p-4 md:p-6 rounded-r-lg">
            <div className="flex items-start gap-3">
              <AlertTriangle className="h-6 w-6 text-accent shrink-0 mt-0.5" />
              <div>
                <h3 className="font-semibold text-foreground mb-1">Important Notice</h3>
                <p className="text-muted-foreground text-sm md:text-base">
                  Veenz Cyber Solutions is an <strong>independent cyber service provider</strong>. 
                  We are NOT affiliated with eCitizen, KRA, HELB, NTSA, or any Government of Kenya institution. 
                  We assist clients with online application processes.{" "}
                  <Link to="/disclaimer" className="text-primary hover:underline font-medium">
                    Read full disclaimer →
                  </Link>
                </p>
              </div>
            </div>
          </div>
        </ScrollFade>

        {/* Government & Institutional Application Support */}
        <section className="mb-16">
          <ScrollFade className="flex items-center gap-3 mb-8">
            <div className="h-10 w-10 rounded-lg bg-accent/10 flex items-center justify-center">
              <FileCheck className="h-5 w-5 text-accent" />
            </div>
            <h2 className="text-2xl font-bold text-foreground">
              Government & Institutional Application Support
            </h2>
          </ScrollFade>
          <StaggerContainer className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {governmentServices.map((service, index) => (
              <StaggerItem key={index}>
                <ServiceCard {...service} variant="accent" />
              </StaggerItem>
            ))}
          </StaggerContainer>
        </section>

        {/* Graphic Design & Branding */}
        <section className="mb-16">
          <ScrollFade className="flex items-center gap-3 mb-8">
            <div className="h-10 w-10 rounded-lg bg-primary/10 flex items-center justify-center">
              <Palette className="h-5 w-5 text-primary" />
            </div>
            <h2 className="text-2xl font-bold text-foreground">Graphic Design & Branding</h2>
          </ScrollFade>
          <StaggerContainer className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {designServices.map((service, index) => (
              <StaggerItem key={index}>
                <ServiceCard {...service} variant="primary" />
              </StaggerItem>
            ))}
          </StaggerContainer>
        </section>

        {/* Printing Services */}
        <section className="mb-16">
          <ScrollFade className="flex items-center gap-3 mb-8">
            <div className="h-10 w-10 rounded-lg bg-primary/10 flex items-center justify-center">
              <Printer className="h-5 w-5 text-primary" />
            </div>
            <h2 className="text-2xl font-bold text-foreground">Printing Services</h2>
          </ScrollFade>
          <StaggerContainer className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {printingServices.map((service, index) => (
              <StaggerItem key={index}>
                <ServiceCard {...service} variant="primary" />
              </StaggerItem>
            ))}
          </StaggerContainer>
        </section>

        {/* Branding & Merchandise */}
        <section>
          <ScrollFade className="flex items-center gap-3 mb-8">
            <div className="h-10 w-10 rounded-lg bg-accent/10 flex items-center justify-center">
              <Shirt className="h-5 w-5 text-accent" />
            </div>
            <h2 className="text-2xl font-bold text-foreground">Branding & Merchandise</h2>
          </ScrollFade>
          <StaggerContainer className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {brandingServices.map((service, index) => (
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
