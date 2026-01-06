import { Link } from "react-router-dom";
import { MapPin, Phone, Mail, Youtube, Instagram } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-foreground text-background">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Brand */}
          <div>
            <h3 className="text-xl font-black mb-4">
              <span className="text-primary">VEENZ</span>
              <span className="text-accent"> CYBER</span>
            </h3>
            <p className="text-background/70 text-sm leading-relaxed">
              Your ultimate plug for cyber, printing & digital services in Nairobi.
              Fast, reliable, and professional.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-semibold mb-4">Quick Links</h4>
            <nav className="flex flex-col gap-2">
              <Link to="/" className="text-sm text-background/70 hover:text-background transition-colors">
                Home
              </Link>
              <Link to="/services" className="text-sm text-background/70 hover:text-background transition-colors">
                Services
              </Link>
              <Link to="/about" className="text-sm text-background/70 hover:text-background transition-colors">
                About Us
              </Link>
              <Link to="/contact" className="text-sm text-background/70 hover:text-background transition-colors">
                Contact
              </Link>
            </nav>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="font-semibold mb-4">Contact Us</h4>
            <div className="flex flex-col gap-3">
              <a
                href="tel:+254708384500"
                className="flex items-center gap-2 text-sm text-background/70 hover:text-background transition-colors"
              >
                <Phone className="h-4 w-4 text-accent" />
                +254 708 384 5xx
              </a>
              <a
                href="mailto:info.veenzentertainment@gmail.com"
                className="flex items-center gap-2 text-sm text-background/70 hover:text-background transition-colors"
              >
                <Mail className="h-4 w-4 text-accent" />
                info.veenzentertainment@gmail.com
              </a>
              <div className="flex items-start gap-2 text-sm text-background/70">
                <MapPin className="h-4 w-4 text-accent mt-0.5 shrink-0" />
                <span>
                  Baraka Mowlem, Francis Muchee Building,<br />
                  Ground Floor Room 02, Embakasi – Nairobi
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-background/20 mt-8 pt-8 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-sm text-background/60">
            © {new Date().getFullYear()} Veenz Cyber Solutions. All rights reserved.
          </p>
          <div className="flex items-center gap-4">
            <a
              href="https://youtube.com/@VEENZEntTV"
              target="_blank"
              rel="noopener noreferrer"
              className="text-background/60 hover:text-accent transition-colors"
              aria-label="YouTube"
            >
              <Youtube className="h-5 w-5" />
            </a>
            <a
              href="https://instagram.com/officialveenz"
              target="_blank"
              rel="noopener noreferrer"
              className="text-background/60 hover:text-accent transition-colors"
              aria-label="Instagram"
            >
              <Instagram className="h-5 w-5" />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
