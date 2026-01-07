import { ScrollFade } from "@/components/ScrollAnimation";
import { Shield } from "lucide-react";

const PrivacyPolicy = () => {
  return (
    <div className="py-12 md:py-20">
      <div className="container mx-auto px-4 max-w-4xl">
        <ScrollFade className="text-center mb-12">
          <div className="flex items-center justify-center gap-3 mb-4">
            <Shield className="h-8 w-8 text-primary" />
            <h1 className="text-3xl md:text-5xl font-bold text-foreground">
              Privacy Policy
            </h1>
          </div>
          <p className="text-muted-foreground">
            Your privacy is important to us. This policy explains how we handle your information.
          </p>
        </ScrollFade>

        <ScrollFade delay={0.1}>
          <div className="prose prose-lg max-w-none space-y-8">
            {/* Introduction */}
            <div className="bg-muted p-6 rounded-lg">
              <h2 className="text-xl font-bold text-foreground mt-0 mb-4">
                Introduction
              </h2>
              <p className="text-muted-foreground mb-0">
                Veenz Cyber Solutions ("we", "our", or "us") is committed to protecting your privacy. 
                This Privacy Policy explains how we collect, use, and safeguard your information when 
                you use our services.
              </p>
            </div>

            {/* Information We Collect */}
            <div className="bg-muted p-6 rounded-lg">
              <h2 className="text-xl font-bold text-foreground mt-0 mb-4">
                Information We Collect
              </h2>
              <h3 className="text-lg font-semibold text-foreground mb-2">Personal Information</h3>
              <p className="text-muted-foreground mb-4">
                When you use our services, we may collect:
              </p>
              <ul className="text-muted-foreground space-y-2 list-disc pl-6 mb-4">
                <li>Full name and identification details</li>
                <li>Contact information (phone number, email address)</li>
                <li>Documents required for your application (ID copies, photos, certificates)</li>
                <li>Payment information for our services</li>
              </ul>
              <h3 className="text-lg font-semibold text-foreground mb-2">Non-Personal Information</h3>
              <p className="text-muted-foreground mb-0">
                We may also collect non-personal information such as browser type, device information, 
                and usage patterns when you visit our website.
              </p>
            </div>

            {/* How We Use Your Information */}
            <div className="bg-muted p-6 rounded-lg">
              <h2 className="text-xl font-bold text-foreground mt-0 mb-4">
                How We Use Your Information
              </h2>
              <p className="text-muted-foreground mb-4">
                We use the information we collect to:
              </p>
              <ul className="text-muted-foreground space-y-2 list-disc pl-6 mb-0">
                <li>Process your service requests and applications</li>
                <li>Communicate with you about your requests</li>
                <li>Provide customer support</li>
                <li>Improve our services</li>
                <li>Comply with legal obligations</li>
              </ul>
            </div>

            {/* Data Security */}
            <div className="bg-muted p-6 rounded-lg">
              <h2 className="text-xl font-bold text-foreground mt-0 mb-4">
                Data Security
              </h2>
              <p className="text-muted-foreground mb-0">
                We implement appropriate security measures to protect your personal information. 
                However, no method of transmission over the internet is 100% secure. We strive to 
                use commercially acceptable means to protect your information but cannot guarantee 
                absolute security.
              </p>
            </div>

            {/* Data Retention */}
            <div className="bg-muted p-6 rounded-lg">
              <h2 className="text-xl font-bold text-foreground mt-0 mb-4">
                Data Retention
              </h2>
              <p className="text-muted-foreground mb-0">
                We retain your personal information only for as long as necessary to provide our 
                services and fulfill the purposes outlined in this policy. Documents submitted for 
                applications may be retained temporarily for processing and then securely deleted.
              </p>
            </div>

            {/* Third-Party Services */}
            <div className="bg-muted p-6 rounded-lg">
              <h2 className="text-xl font-bold text-foreground mt-0 mb-4">
                Third-Party Services
              </h2>
              <p className="text-muted-foreground mb-0">
                When we assist you with government applications, your information is submitted to 
                the respective government portals (eCitizen, KRA, HELB, etc.). These platforms have 
                their own privacy policies, and we encourage you to review them. We are not responsible 
                for the privacy practices of these third-party services.
              </p>
            </div>

            {/* Cookies */}
            <div className="bg-muted p-6 rounded-lg">
              <h2 className="text-xl font-bold text-foreground mt-0 mb-4">
                Cookies
              </h2>
              <p className="text-muted-foreground mb-0">
                Our website may use cookies to enhance your browsing experience. You can choose to 
                disable cookies through your browser settings, though this may affect some website 
                functionality.
              </p>
            </div>

            {/* Your Rights */}
            <div className="bg-muted p-6 rounded-lg">
              <h2 className="text-xl font-bold text-foreground mt-0 mb-4">
                Your Rights
              </h2>
              <p className="text-muted-foreground mb-4">
                You have the right to:
              </p>
              <ul className="text-muted-foreground space-y-2 list-disc pl-6 mb-0">
                <li>Access your personal information we hold</li>
                <li>Request correction of inaccurate information</li>
                <li>Request deletion of your information (subject to legal requirements)</li>
                <li>Withdraw consent for data processing</li>
              </ul>
            </div>

            {/* Contact */}
            <div className="bg-primary/10 p-6 rounded-lg">
              <h2 className="text-xl font-bold text-foreground mt-0 mb-4">
                Contact Us
              </h2>
              <p className="text-muted-foreground mb-0">
                If you have any questions about this Privacy Policy, please contact us at{" "}
                <a 
                  href="mailto:info.veenzentertainment@gmail.com" 
                  className="text-primary hover:underline"
                >
                  info.veenzentertainment@gmail.com
                </a>{" "}
                or call us at{" "}
                <a href="tel:+254708384551" className="text-primary hover:underline">
                  +254 708 384 551
                </a>.
              </p>
            </div>
          </div>
        </ScrollFade>
      </div>
    </div>
  );
};

export default PrivacyPolicy;
