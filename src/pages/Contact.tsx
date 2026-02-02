import { useEffect, useRef } from "react";
import { useSearchParams } from "react-router-dom";
import { Phone, Mail, MapPin, Clock, MessageCircle, Navigation } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ScrollFade, StaggerContainer, StaggerItem, ScaleIn } from "@/components/ScrollAnimation";
import ContactForm from "@/components/ContactForm";
import customerServiceImg from "@/assets/about/customer-service.jpg";

const contactInfo = [
  {
    icon: Phone,
    label: "Phone",
    value: "+254 708 384 5xx",
    href: "tel:+254708384500",
    action: "Call",
  },
  {
    icon: Mail,
    label: "Email",
    value: "info.veenzentertainment@gmail.com",
    href: "mailto:info.veenzentertainment@gmail.com",
    action: "Email",
  },
  {
    icon: Clock,
    label: "Working Hours",
    value: "Mon - Sun: 8:00 AM - 8:00 PM",
    href: null,
    action: null,
  },
];

const Contact = () => {
  const [searchParams] = useSearchParams();
  const formSectionRef = useRef<HTMLElement>(null);

  // Auto-scroll to form when arriving with a service parameter
  useEffect(() => {
    const serviceParam = searchParams.get("service");
    if (serviceParam && formSectionRef.current) {
      // Small delay to ensure page has rendered
      const timer = setTimeout(() => {
        formSectionRef.current?.scrollIntoView({
          behavior: "smooth",
          block: "start",
        });
      }, 150);
      return () => clearTimeout(timer);
    }
  }, [searchParams]);

  return (
    <div className="py-12 md:py-20">
      <div className="container mx-auto px-4">
        {/* Header */}
        <ScrollFade className="text-center mb-16">
          <h1 className="text-3xl md:text-5xl font-bold text-foreground mb-4">
            Contact Us
          </h1>
          <p className="text-muted-foreground max-w-2xl mx-auto text-lg">
            We'd love to hear from you. Reach out via phone, WhatsApp, or visit our shop in Embakasi.
          </p>
        </ScrollFade>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 max-w-6xl mx-auto">
          {/* Contact Info */}
          <StaggerContainer className="space-y-4 md:space-y-6">
            {/* WhatsApp CTA */}
            <StaggerItem>
              <Card className="border-accent/50 bg-card">
                <CardContent className="p-4 md:p-6">
                  <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4">
                    <div className="flex items-center gap-4 flex-1">
                      <div className="h-12 w-12 rounded-xl bg-accent/10 flex items-center justify-center shrink-0">
                        <MessageCircle className="h-6 w-6 text-accent" />
                      </div>
                      <div>
                        <h3 className="font-bold text-foreground text-lg">Chat on WhatsApp</h3>
                        <p className="text-muted-foreground text-sm">
                          Quick responses, even after hours
                        </p>
                      </div>
                    </div>
                    <Button asChild className="bg-accent hover:bg-accent/90 w-full sm:w-auto">
                      <a
                        href="https://wa.me/254708384500"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        Open Chat
                      </a>
                    </Button>
                  </div>
                </CardContent>
              </Card>
            </StaggerItem>

            {/* Other Contact Methods */}
            {contactInfo.map((item, index) => (
              <StaggerItem key={index}>
                <Card>
                  <CardContent className="p-4 md:p-6">
                    <div className="flex items-center gap-4">
                      <div className="h-12 w-12 rounded-xl bg-primary/10 flex items-center justify-center shrink-0">
                        <item.icon className="h-6 w-6 text-primary" />
                      </div>
                      <div className="flex-1 min-w-0">
                        <p className="text-sm text-muted-foreground">{item.label}</p>
                        <p className="font-semibold text-foreground break-words">{item.value}</p>
                      </div>
                      {item.href && (
                        <Button asChild variant="outline" size="sm" className="shrink-0">
                          <a href={item.href}>{item.action}</a>
                        </Button>
                      )}
                    </div>
                  </CardContent>
                </Card>
              </StaggerItem>
            ))}

            {/* Address */}
            <StaggerItem>
              <Card className="border-primary/30">
                <CardContent className="p-4 md:p-6">
                  <div className="flex items-start gap-4">
                    <div className="h-12 w-12 rounded-xl bg-primary/10 flex items-center justify-center shrink-0">
                      <MapPin className="h-6 w-6 text-primary" />
                    </div>
                    <div className="flex-1">
                      <p className="text-sm text-muted-foreground mb-1">Visit Us</p>
                      <p className="font-semibold text-foreground">
                        Baraka Mowlem, Francis Muchee Building
                      </p>
                      <p className="text-muted-foreground">
                        Ground Floor, Room 02
                      </p>
                      <p className="text-muted-foreground">
                        Embakasi – Nairobi, Kenya
                      </p>
                      <Button asChild variant="outline" className="w-full mt-4">
                        <a
                          href="https://www.google.com/maps/dir/?api=1&destination=-1.3183,36.8978"
                          target="_blank"
                          rel="noopener noreferrer"
                          aria-label="Get directions to Veenz Cyber Solutions"
                        >
                          <Navigation className="h-4 w-4 mr-2" />
                          Get Directions
                        </a>
                      </Button>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </StaggerItem>
          </StaggerContainer>

          {/* Map */}
          <ScaleIn delay={0.2} className="h-[350px] md:h-[450px] lg:h-full lg:min-h-[500px] rounded-xl overflow-hidden border shadow-lg">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3988.8183!2d36.8953!3d-1.3183!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x182f11f3e0b0c8d1%3A0x1234567890abcdef!2sMowlem%2C%20Embakasi%2C%20Nairobi!5e0!3m2!1sen!2ske!4v1700000000000!5m2!1sen!2ske"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Veenz Cyber Solutions Location"
            />
          </ScaleIn>
        </div>

        {/* Friendly Team Section */}
        <section className="mt-16">
          <ScrollFade>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center max-w-5xl mx-auto">
              <div className="rounded-2xl overflow-hidden shadow-lg order-2 lg:order-1">
                <img
                  src={customerServiceImg}
                  alt="Friendly customer service at Veenz Cyber Solutions"
                  className="w-full h-64 md:h-80 object-cover"
                  loading="lazy"
                />
              </div>
              <div className="order-1 lg:order-2">
                <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-4">
                  We're Here to Help
                </h2>
                <p className="text-muted-foreground leading-relaxed mb-4">
                  Our friendly and professional team is ready to assist you with all your 
                  digital needs. Whether you need help with government applications, 
                  professional printing, or custom designs, we're committed to providing 
                  fast, reliable, and affordable services.
                </p>
                <p className="text-muted-foreground leading-relaxed">
                  Visit us at our Embakasi location or reach out via WhatsApp for quick 
                  assistance. We're open 7 days a week to serve you better!
                </p>
              </div>
            </div>
          </ScrollFade>
        </section>

        {/* Contact Form Section */}
        <section className="mt-16" ref={formSectionRef}>
          <ScrollFade className="text-center mb-10">
            <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-4">
              Send Us a Message
            </h2>
            <p className="text-muted-foreground max-w-xl mx-auto">
              Fill out the form below and we'll get back to you as soon as possible.
            </p>
          </ScrollFade>

          <ScaleIn className="max-w-2xl mx-auto">
            <Card className="shadow-lg">
              <CardContent className="p-6 md:p-8">
                <ContactForm />
              </CardContent>
            </Card>
          </ScaleIn>
        </section>
      </div>
    </div>
  );
};

export default Contact;
