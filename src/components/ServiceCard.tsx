import { LucideIcon } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

interface ServiceCardProps {
  icon: LucideIcon;
  title: string;
  description: string;
  variant?: "primary" | "accent";
}

const ServiceCard = ({ icon: Icon, title, description, variant = "primary" }: ServiceCardProps) => {
  return (
    <Card className="group hover:shadow-lg hover:-translate-y-1 transition-all duration-300 border-border/50">
      <CardContent className="p-6 flex flex-col items-center text-center">
        <div
          className={`mb-4 flex h-14 w-14 items-center justify-center rounded-xl transition-transform duration-300 group-hover:scale-110 ${
            variant === "accent"
              ? "bg-accent/10 text-accent"
              : "bg-primary/10 text-primary"
          }`}
        >
          <Icon className="h-7 w-7" />
        </div>
        <h3 className="font-semibold text-foreground mb-2">{title}</h3>
        <p className="text-sm text-muted-foreground leading-relaxed">{description}</p>
      </CardContent>
    </Card>
  );
};

export default ServiceCard;
