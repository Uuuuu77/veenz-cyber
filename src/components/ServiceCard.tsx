import { LucideIcon, ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import { Card, CardContent } from "@/components/ui/card";

interface ServiceCardProps {
  icon: LucideIcon;
  title: string;
  description: string;
  variant?: "primary" | "accent";
  image?: string;
  serviceSlug?: string;
  showGetStarted?: boolean;
}

const ServiceCard = ({ icon: Icon, title, description, variant = "primary", image, serviceSlug, showGetStarted }: ServiceCardProps) => {
  return (
    <Card className="group hover:shadow-lg hover:-translate-y-1 transition-all duration-300 border-border/50 overflow-hidden">
      <CardContent className="p-6 flex flex-col items-center text-center">
        {image && (
          <div className="mb-4 w-24 h-24 flex items-center justify-center transition-transform duration-300 group-hover:scale-105">
            <img 
              src={image} 
              alt={title} 
              className="w-full h-full object-contain"
              loading="lazy"
            />
          </div>
        )}
        <div
          className={`mb-4 flex h-14 w-14 items-center justify-center rounded-xl transition-transform duration-300 group-hover:scale-110 ${
            variant === "accent"
              ? "bg-accent/10 text-accent"
              : "bg-primary/10 text-primary"
          } ${image ? "h-10 w-10" : ""}`}
        >
          <Icon className={image ? "h-5 w-5" : "h-7 w-7"} />
        </div>
        <h3 className="font-semibold text-foreground mb-2">{title}</h3>
        <p className="text-sm text-muted-foreground leading-relaxed">{description}</p>
        {showGetStarted && serviceSlug && (
          <Link 
            to={`/contact?service=${serviceSlug}`}
            className="mt-4 inline-flex items-center gap-2 text-sm font-medium text-primary hover:text-primary/80 transition-colors"
          >
            Get Started <ArrowRight className="h-4 w-4" />
          </Link>
        )}
      </CardContent>
    </Card>
  );
};

export default ServiceCard;
