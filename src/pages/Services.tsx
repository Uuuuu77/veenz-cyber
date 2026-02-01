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
  Coffee,
  Gift,
  HelpCircle,
} from "lucide-react";
import ServiceCard from "@/components/ServiceCard";
import { ScrollFade, StaggerContainer, StaggerItem } from "@/components/ScrollAnimation";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

// Service section images
import onlineServicesPhoto from "@/assets/services/online-services-photo.jpg";
import designWorkspace from "@/assets/services/design-workspace.jpg";
import printingServices from "@/assets/services/printing-services.jpg";
import brandingMerchandise from "@/assets/services/branding-merchandise.jpg";

const governmentServices = [
  {
    icon: Plane,
    title: "Passport Application Assistance",
    description: "Help with new passport applications and renewals",
    serviceSlug: "passport-application",
    showGetStarted: true,
  },
  {
    icon: Scroll,
    title: "Birth/Death Certificate Assistance",
    description: "Application and replacement of vital documents",
    serviceSlug: "birth-death-certificate",
    showGetStarted: true,
  },
  {
    icon: GraduationCap,
    title: "HELB Application Support",
    description: "Student loan applications and processing assistance",
    serviceSlug: "helb-application",
    showGetStarted: true,
  },
  {
    icon: Building2,
    title: "KRA Services Assistance",
    description: "PIN registration, returns filing, and compliance help",
    serviceSlug: "kra-services",
    showGetStarted: true,
  },
  {
    icon: Briefcase,
    title: "Business Name Registration Support",
    description: "Help with business name search and registration",
    serviceSlug: "business-registration",
    showGetStarted: true,
  },
  {
    icon: FileCheck,
    title: "Company Registration Support",
    description: "Assistance with company incorporation process",
    serviceSlug: "company-registration",
    showGetStarted: true,
  },
  {
    icon: CreditCard,
    title: "Single Business Permit Support",
    description: "Nairobi County business permit application help",
    serviceSlug: "business-permit",
    showGetStarted: true,
  },
  {
    icon: BadgeCheck,
    title: "eCitizen Account Support",
    description: "Account creation and general eCitizen assistance",
    serviceSlug: "ecitizen-support",
    showGetStarted: true,
  },
  {
    icon: Car,
    title: "NTSA Services Assistance",
    description: "Driving license, logbook, and vehicle services help",
    serviceSlug: "ntsa-services",
    showGetStarted: true,
  },
  {
    icon: Home,
    title: "Boma Yangu Assistance",
    description: "Affordable Housing application support",
    serviceSlug: "boma-yangu",
    showGetStarted: true,
  },
  {
    icon: HeartPulse,
    title: "NHIF / SHIF / NSSF Assistance",
    description: "Registration and compliance support",
    serviceSlug: "nhif-nssf",
    showGetStarted: true,
  },
  {
    icon: Briefcase,
    title: "AGPO Certificate Assistance",
    description: "Access to Government Procurement Opportunities",
    serviceSlug: "agpo-certificate",
    showGetStarted: true,
  },
];

const designServices = [
  {
    icon: BadgeCheck,
    title: "Award Certificate Design",
    description: "Professional certificates for awards and recognition",
    serviceSlug: "certificate-design",
    showGetStarted: true,
  },
  {
    icon: Image,
    title: "Posters & Flyers",
    description: "Eye-catching promotional materials",
    serviceSlug: "poster-design",
    showGetStarted: true,
  },
  {
    icon: FileText,
    title: "Eulogy Design",
    description: "Respectful and beautiful tribute designs",
    serviceSlug: "eulogy-design",
    showGetStarted: true,
  },
  {
    icon: Heart,
    title: "Love Cards & Greeting Cards",
    description: "Custom cards for all occasions",
    serviceSlug: "greeting-cards",
    showGetStarted: true,
  },
  {
    icon: BookOpen,
    title: "Brochures",
    description: "Professional brochure design and layout",
    serviceSlug: "brochure-design",
    showGetStarted: true,
  },
  {
    icon: Heart,
    title: "Wedding Cards",
    description: "Elegant wedding invitation designs",
    serviceSlug: "wedding-cards",
    showGetStarted: true,
  },
  {
    icon: Palette,
    title: "Logo Design",
    description: "Unique logos for your brand identity",
    serviceSlug: "logo-design",
    showGetStarted: true,
  },
  {
    icon: FileImage,
    title: "Sticker & Banner Design",
    description: "Custom stickers and banners for any purpose",
    serviceSlug: "banner-design",
    showGetStarted: true,
  },
  {
    icon: PenTool,
    title: "Letterhead Design",
    description: "Professional business letterhead",
    serviceSlug: "letterhead-design",
    showGetStarted: true,
  },
  {
    icon: Briefcase,
    title: "Company Profile Design",
    description: "Comprehensive company profile documents",
    serviceSlug: "company-profile",
    showGetStarted: true,
  },
  {
    icon: CreditCard,
    title: "ID Card Design",
    description: "School IDs, work IDs, and staff badges",
    serviceSlug: "id-card-design",
    showGetStarted: true,
  },
];

const printingServicesData = [
  {
    icon: Layers,
    title: "Large Format Printing",
    description: "Banners, posters, and signage printing",
    serviceSlug: "large-format-printing",
    showGetStarted: true,
  },
  {
    icon: Copy,
    title: "Bulk Printing",
    description: "Schools, offices, and church printing",
    serviceSlug: "bulk-printing",
    showGetStarted: true,
  },
  {
    icon: BadgeCheck,
    title: "Certificate Printing",
    description: "High-quality certificate printing",
    serviceSlug: "certificate-printing",
    showGetStarted: true,
  },
  {
    icon: CreditCard,
    title: "Business Cards",
    description: "Professional business card printing",
    serviceSlug: "business-cards",
    showGetStarted: true,
  },
  {
    icon: FileText,
    title: "Flyers & Brochures Printing",
    description: "Marketing materials printing",
    serviceSlug: "flyer-printing",
    showGetStarted: true,
  },
  {
    icon: Heart,
    title: "Wedding Cards Printing",
    description: "Beautiful wedding invitation printing",
    serviceSlug: "wedding-printing",
    showGetStarted: true,
  },
  {
    icon: Briefcase,
    title: "Company Profiles Printing",
    description: "Professional profile booklets",
    serviceSlug: "profile-printing",
    showGetStarted: true,
  },
  {
    icon: Printer,
    title: "Document Printing",
    description: "Color and black & white printing",
    serviceSlug: "document-printing",
    showGetStarted: true,
  },
  {
    icon: ScanLine,
    title: "Scanning & Photocopying",
    description: "High-quality scanning and copies",
    serviceSlug: "scanning-copying",
    showGetStarted: true,
  },
  {
    icon: BookOpen,
    title: "Binding & Lamination",
    description: "Professional finishing services",
    serviceSlug: "binding-lamination",
    showGetStarted: true,
  },
];

const brandingServices = [
  {
    icon: Shirt,
    title: "T-Shirt Branding",
    description: "Custom printed t-shirts for events and teams",
    serviceSlug: "tshirt-branding",
    showGetStarted: true,
  },
  {
    icon: Coffee,
    title: "Mug / Cup Branding",
    description: "Personalized mugs with your designs",
    serviceSlug: "mug-branding",
    showGetStarted: true,
  },
  {
    icon: Gift,
    title: "Corporate Gift Branding",
    description: "Branded items for corporate gifting",
    serviceSlug: "corporate-gifts",
    showGetStarted: true,
  },
  {
    icon: Layers,
    title: "Event Branding",
    description: "Complete branding for events and functions",
    serviceSlug: "event-branding",
    showGetStarted: true,
  },
  {
    icon: Shirt,
    title: "Hoodie Branding",
    description: "Quality hoodies with custom designs",
    serviceSlug: "hoodie-branding",
    showGetStarted: true,
  },
  {
    icon: Layers,
    title: "Caps & Bags",
    description: "Branded caps, bags, and accessories",
    serviceSlug: "caps-bags",
    showGetStarted: true,
  },
];

const faqItems = [
  {
    question: "What services does Veenz Cyber Solutions offer?",
    answer: "We provide online application assistance (passport, HELB, KRA, business and company registration, county permits), graphic design, printing, and branding services for individuals and businesses.",
  },
  {
    question: "Are you affiliated with the Government of Kenya or eCitizen?",
    answer: "No. Veenz Cyber Solutions is an independent service provider. We are not affiliated with eCitizen, KRA, HELB, NTSA, Immigration, or any government institution.",
  },
  {
    question: "What does \"application assistance\" mean?",
    answer: "It means we help clients fill, submit, upload documents, and navigate online government systems. Final approval and processing are done solely by the relevant government authority.",
  },
  {
    question: "Do you guarantee approval of applications?",
    answer: "No. Approval depends entirely on the government institution, accuracy of information provided, and current policies.",
  },
  {
    question: "What documents do I need for applications?",
    answer: "Required documents vary by service. Our staff will guide you on what is needed before starting the application.",
  },
  {
    question: "Are your service charges official government fees?",
    answer: "No. Our charges are service fees for assistance only. Official government fees must be paid directly through authorized platforms.",
  },
  {
    question: "How long does the application process take?",
    answer: "Processing times vary depending on the institution, system availability, and application type. We do not control timelines.",
  },
  {
    question: "Do you offer graphic design and printing services?",
    answer: "Yes. We design posters, certificates, logos, business branding materials, wedding cards, brochures, and offer bulk and large-format printing.",
  },
  {
    question: "Can I request revisions for design work?",
    answer: "Yes. Revisions are allowed according to the agreed terms before final approval and printing.",
  },
  {
    question: "Do you provide online or remote services?",
    answer: "Some services can be handled remotely, while others require a physical visit for document verification.",
  },
  {
    question: "Is my personal information safe?",
    answer: "Yes. Client data is handled with confidentiality and used strictly for the requested service.",
  },
  {
    question: "How can I contact Veenz Cyber Solutions?",
    answer: "You can reach us via phone, email, or by visiting our physical cyber office during working hours.",
  },
];

interface ServiceSectionHeaderProps {
  image: string;
  title: string;
  alt: string;
}

const ServiceSectionHeader = ({ image, title, alt }: ServiceSectionHeaderProps) => (
  <div className="relative rounded-2xl overflow-hidden mb-8 h-48 md:h-64">
    <img
      src={image}
      alt={alt}
      className="w-full h-full object-cover"
      loading="lazy"
    />
    <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent" />
    <div className="absolute bottom-0 left-0 right-0 p-6">
      <h2 className="text-white text-xl md:text-2xl font-bold drop-shadow-lg">
        {title}
      </h2>
    </div>
  </div>
);

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

        {/* Government & Institutional Application Support */}
        <section className="mb-16">
          <ScrollFade>
            <ServiceSectionHeader
              image={onlineServicesPhoto}
              title="Government & Institutional Application Support"
              alt="Professional customer service for government application assistance at Veenz Cyber"
            />
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
          <ScrollFade>
            <ServiceSectionHeader
              image={designWorkspace}
              title="Graphic Design & Branding"
              alt="Creative graphic design workspace at Veenz Cyber Solutions"
            />
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
          <ScrollFade>
            <ServiceSectionHeader
              image={printingServices}
              title="Printing Services"
              alt="Large format printing equipment at Veenz Cyber Solutions"
            />
          </ScrollFade>
          <StaggerContainer className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {printingServicesData.map((service, index) => (
              <StaggerItem key={index}>
                <ServiceCard {...service} variant="primary" />
              </StaggerItem>
            ))}
          </StaggerContainer>
        </section>

        {/* Branding & Merchandise */}
        <section className="mb-16">
          <ScrollFade>
            <ServiceSectionHeader
              image={brandingMerchandise}
              title="Branding & Merchandise"
              alt="Custom branded merchandise including t-shirts, mugs, caps, and corporate gifts at Veenz Cyber"
            />
          </ScrollFade>
          <StaggerContainer className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {brandingServices.map((service, index) => (
              <StaggerItem key={index}>
                <ServiceCard {...service} variant="accent" />
              </StaggerItem>
            ))}
          </StaggerContainer>
        </section>

        {/* FAQ Section */}
        <section className="mb-16">
          <ScrollFade className="flex items-center gap-3 mb-8">
            <div className="h-10 w-10 rounded-lg bg-primary/10 flex items-center justify-center">
              <HelpCircle className="h-5 w-5 text-primary" />
            </div>
            <h2 className="text-2xl font-bold text-foreground">Frequently Asked Questions</h2>
          </ScrollFade>
          <ScrollFade>
            <div className="max-w-3xl mx-auto">
              <Accordion type="single" collapsible className="w-full">
                {faqItems.map((item, index) => (
                  <AccordionItem key={index} value={`item-${index}`} className="border-border/50">
                    <AccordionTrigger className="text-left text-foreground hover:text-primary hover:no-underline py-4">
                      {item.question}
                    </AccordionTrigger>
                    <AccordionContent className="text-muted-foreground">
                      {item.answer}
                    </AccordionContent>
                  </AccordionItem>
                ))}
              </Accordion>
            </div>
          </ScrollFade>
        </section>

        {/* Disclaimer Banner - Moved to bottom */}
        <ScrollFade>
          <div className="bg-accent/10 border-l-4 border-accent p-4 md:p-6 rounded-r-lg">
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
        </ScrollFade>
      </div>
    </div>
  );
};

export default Services;
