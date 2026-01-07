import { ScrollFade } from "@/components/ScrollAnimation";
import { FileText } from "lucide-react";

const Terms = () => {
  return (
    <div className="py-12 md:py-20">
      <div className="container mx-auto px-4 max-w-4xl">
        <ScrollFade className="text-center mb-12">
          <div className="flex items-center justify-center gap-3 mb-4">
            <FileText className="h-8 w-8 text-primary" />
            <h1 className="text-3xl md:text-5xl font-bold text-foreground">
              Terms & Conditions
            </h1>
          </div>
          <p className="text-muted-foreground">
            Please read these terms carefully before using our services.
          </p>
        </ScrollFade>

        <ScrollFade delay={0.1}>
          <div className="prose prose-lg max-w-none space-y-8">
            {/* Scope of Services */}
            <div className="bg-muted p-6 rounded-lg">
              <h2 className="text-xl font-bold text-foreground mt-0 mb-4">
                1. Scope of Services
              </h2>
              <p className="text-muted-foreground mb-4">
                Veenz Cyber Solutions provides the following services:
              </p>
              <ul className="text-muted-foreground space-y-2 list-disc pl-6 mb-0">
                <li>Online application assistance for government services (eCitizen, KRA, HELB, NTSA, etc.)</li>
                <li>Graphic design services (logos, certificates, posters, brochures, etc.)</li>
                <li>Printing services (documents, banners, business cards, etc.)</li>
                <li>Branding and merchandise (t-shirts, mugs, caps, etc.)</li>
                <li>Document processing (typing, scanning, photocopying, binding)</li>
              </ul>
            </div>

            {/* Client Responsibilities */}
            <div className="bg-muted p-6 rounded-lg">
              <h2 className="text-xl font-bold text-foreground mt-0 mb-4">
                2. Client Responsibilities
              </h2>
              <p className="text-muted-foreground mb-4">
                As a client, you agree to:
              </p>
              <ul className="text-muted-foreground space-y-2 list-disc pl-6 mb-0">
                <li>Provide accurate and complete information for all applications</li>
                <li>Submit all required documents in a timely manner</li>
                <li>Pay all applicable fees (both service fees and government fees)</li>
                <li>Respond promptly to requests for additional information</li>
                <li>Not hold Veenz Cyber Solutions responsible for government decisions or delays</li>
              </ul>
            </div>

            {/* Fees and Payments */}
            <div className="bg-muted p-6 rounded-lg">
              <h2 className="text-xl font-bold text-foreground mt-0 mb-4">
                3. Fees and Payments
              </h2>
              <ul className="text-muted-foreground space-y-2 list-disc pl-6 mb-0">
                <li>Our service fees are communicated upfront before work begins</li>
                <li>Government fees are separate and paid to the respective government portals</li>
                <li>Design work requires a deposit before commencement</li>
                <li>Full payment is required before delivery of printed materials</li>
                <li>Prices are subject to change without prior notice</li>
                <li>Refunds for service fees are at our discretion and depend on work already completed</li>
              </ul>
            </div>

            {/* Graphic Design Terms */}
            <div className="bg-muted p-6 rounded-lg">
              <h2 className="text-xl font-bold text-foreground mt-0 mb-4">
                4. Graphic Design Terms
              </h2>
              <ul className="text-muted-foreground space-y-2 list-disc pl-6 mb-0">
                <li>Design concepts remain our property until full payment is made</li>
                <li>Up to 2 revisions are included in the quoted price; additional revisions may incur charges</li>
                <li>Final files are delivered in agreed formats upon payment</li>
                <li>Client is responsible for proofreading and approving designs before printing</li>
                <li>We are not liable for errors in approved designs</li>
              </ul>
            </div>

            {/* Printing Terms */}
            <div className="bg-muted p-6 rounded-lg">
              <h2 className="text-xl font-bold text-foreground mt-0 mb-4">
                5. Printing Terms
              </h2>
              <ul className="text-muted-foreground space-y-2 list-disc pl-6 mb-0">
                <li>Color variations may occur between screen display and printed output</li>
                <li>A variation of up to 5% in quantity is acceptable for bulk orders</li>
                <li>Client must approve proofs before bulk printing</li>
                <li>We are not responsible for errors in client-provided files</li>
                <li>Printed materials should be collected within 7 days of notification</li>
              </ul>
            </div>

            {/* Turnaround Time */}
            <div className="bg-muted p-6 rounded-lg">
              <h2 className="text-xl font-bold text-foreground mt-0 mb-4">
                6. Turnaround Time
              </h2>
              <ul className="text-muted-foreground space-y-2 list-disc pl-6 mb-0">
                <li>Turnaround times are estimates and not guarantees</li>
                <li>Rush orders may be available at an additional charge</li>
                <li>Delays due to client's failure to provide required information are not our responsibility</li>
                <li>Government application timelines are determined by the respective agencies</li>
              </ul>
            </div>

            {/* Intellectual Property */}
            <div className="bg-muted p-6 rounded-lg">
              <h2 className="text-xl font-bold text-foreground mt-0 mb-4">
                7. Intellectual Property
              </h2>
              <ul className="text-muted-foreground space-y-2 list-disc pl-6 mb-0">
                <li>Original designs created by us remain our intellectual property until full payment</li>
                <li>Upon payment, design rights transfer to the client for the agreed purpose</li>
                <li>We reserve the right to use completed work in our portfolio</li>
                <li>Client warrants that provided materials do not infringe on third-party rights</li>
              </ul>
            </div>

            {/* Limitation of Liability */}
            <div className="bg-accent/10 border-l-4 border-accent p-6 rounded-r-lg">
              <h2 className="text-xl font-bold text-foreground mt-0 mb-4">
                8. Limitation of Liability
              </h2>
              <ul className="text-muted-foreground space-y-2 list-disc pl-6 mb-0">
                <li>We are not liable for rejection or delays in government applications</li>
                <li>We are not responsible for government portal downtime or technical issues</li>
                <li>Our liability is limited to the amount paid for our services</li>
                <li>We are not liable for indirect, consequential, or incidental damages</li>
                <li>Force majeure events release us from liability for delays or non-performance</li>
              </ul>
            </div>

            {/* Changes to Terms */}
            <div className="bg-muted p-6 rounded-lg">
              <h2 className="text-xl font-bold text-foreground mt-0 mb-4">
                9. Changes to Terms
              </h2>
              <p className="text-muted-foreground mb-0">
                We reserve the right to modify these terms at any time. Continued use of our services 
                after changes constitutes acceptance of the new terms.
              </p>
            </div>

            {/* Contact */}
            <div className="bg-primary/10 p-6 rounded-lg">
              <h2 className="text-xl font-bold text-foreground mt-0 mb-4">
                10. Contact Us
              </h2>
              <p className="text-muted-foreground mb-0">
                If you have any questions about these Terms & Conditions, please contact us at{" "}
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

export default Terms;
