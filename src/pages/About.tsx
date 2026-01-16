import { Target, Eye, CheckCircle2 } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { ScrollFade, StaggerContainer, StaggerItem, ScaleIn } from "@/components/ScrollAnimation";
import teamWorkspace from "@/assets/about/team-workspace.jpg";
import customerService from "@/assets/about/customer-service.jpg";
import printingEquipment from "@/assets/services/printing-services.jpg";
import onlineServices from "@/assets/services/online-services-photo.jpg";

const whyChooseUs = [
  "Fast turnaround on all services",
  "Competitive and transparent pricing",
  "Professional and friendly staff",
  "Convenient location in Embakasi",
  "All government services under one roof",
  "Quality printing and branding work",
  "Open 7 days a week",
  "Trusted by the local community",
];

const facilityImages = [
  {
    src: teamWorkspace,
    alt: "Modern workspace with computers and equipment at Veenz Cyber Solutions",
  },
  {
    src: printingEquipment,
    alt: "Professional printing equipment at Veenz Cyber",
  },
  {
    src: onlineServices,
    alt: "Customer service area for online applications",
  },
];

const About = () => {
  return (
    <div className="py-12 md:py-20">
      <div className="container mx-auto px-4">
        {/* Header */}
        <ScrollFade className="text-center mb-16">
          <h1 className="text-3xl md:text-5xl font-bold text-foreground mb-4">
            About Us
          </h1>
          <p className="text-muted-foreground max-w-2xl mx-auto text-lg">
            Get to know Veenz Cyber Solutions – your trusted partner for all digital and printing needs in Nairobi.
          </p>
        </ScrollFade>

        {/* Story Section */}
        <section className="mb-16">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-5xl mx-auto items-center">
            <ScaleIn>
              <Card className="border-none shadow-lg">
                <CardContent className="p-8 md:p-12">
                  <h2 className="text-2xl font-bold text-foreground mb-6">Our Story</h2>
                  <div className="space-y-4 text-muted-foreground leading-relaxed">
                    <p>
                      Veenz Cyber Solutions, operating under Veenz Entertainment & Cyber Solutions,
                      was founded with a simple mission: to provide fast, reliable, and affordable
                      digital services to the people of Nairobi.
                    </p>
                    <p>
                      Located in the heart of Embakasi at Baraka Mowlem, we understand the needs
                      of our community. Whether you need urgent document printing, assistance with
                      government e-services, or custom branded merchandise, we're here to help.
                    </p>
                    <p>
                      What started as a small cyber café has grown into a comprehensive service
                      center, trusted by students, professionals, and businesses alike. Our
                      commitment to quality and customer satisfaction drives everything we do.
                    </p>
                  </div>
                </CardContent>
              </Card>
            </ScaleIn>

            <ScrollFade direction="right">
              <div className="rounded-2xl overflow-hidden shadow-lg">
                <img 
                  src={customerService} 
                  alt="Professional customer service at Veenz Cyber Solutions"
                  className="w-full h-auto object-cover"
                  loading="lazy"
                />
              </div>
            </ScrollFade>
          </div>
        </section>

        {/* Our Facilities */}
        <section className="mb-16">
          <ScrollFade className="text-center mb-10">
            <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-4">
              Our Facilities
            </h2>
            <p className="text-muted-foreground max-w-xl mx-auto">
              Modern equipment and a comfortable environment designed for your convenience.
            </p>
          </ScrollFade>

          <StaggerContainer className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto">
            {facilityImages.map((image, index) => (
              <StaggerItem key={index}>
                <div className="relative overflow-hidden rounded-2xl shadow-lg group h-64">
                  <img
                    src={image.src}
                    alt={image.alt}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                </div>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </section>

        {/* Mission & Vision */}
        <section className="mb-16">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            <ScrollFade direction="left">
              <Card className="border-primary/20 h-full">
                <CardContent className="p-8">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="h-12 w-12 rounded-xl bg-primary/10 flex items-center justify-center">
                      <Target className="h-6 w-6 text-primary" />
                    </div>
                    <h3 className="text-xl font-bold text-foreground">Our Mission</h3>
                  </div>
                  <p className="text-muted-foreground leading-relaxed">
                    To deliver efficient, affordable, and professional digital services that
                    empower individuals and businesses in our community to achieve their goals
                    with ease.
                  </p>
                </CardContent>
              </Card>
            </ScrollFade>

            <ScrollFade direction="right">
              <Card className="border-accent/20 h-full">
                <CardContent className="p-8">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="h-12 w-12 rounded-xl bg-accent/10 flex items-center justify-center">
                      <Eye className="h-6 w-6 text-accent" />
                    </div>
                    <h3 className="text-xl font-bold text-foreground">Our Vision</h3>
                  </div>
                  <p className="text-muted-foreground leading-relaxed">
                    To be the leading one-stop digital service center in Nairobi, known for
                    excellence, innovation, and unwavering commitment to customer satisfaction.
                  </p>
                </CardContent>
              </Card>
            </ScrollFade>
          </div>
        </section>

        {/* Why Choose Us */}
        <section>
          <ScrollFade className="text-center mb-10">
            <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-4">
              Why Choose Veenz?
            </h2>
            <p className="text-muted-foreground max-w-xl mx-auto">
              We're committed to providing the best service experience in Embakasi.
            </p>
          </ScrollFade>

          <div className="max-w-3xl mx-auto">
            <StaggerContainer className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {whyChooseUs.map((reason, index) => (
                <StaggerItem key={index}>
                  <div className="flex items-center gap-3 p-4 rounded-lg bg-muted/50">
                    <CheckCircle2 className="h-5 w-5 text-accent shrink-0" />
                    <span className="text-foreground font-medium">{reason}</span>
                  </div>
                </StaggerItem>
              ))}
            </StaggerContainer>
          </div>
        </section>
      </div>
    </div>
  );
};

export default About;
