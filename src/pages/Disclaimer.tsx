import { ScrollFade } from "@/components/ScrollAnimation";
import { AlertTriangle } from "lucide-react";

const Disclaimer = () => {
  return (
    <div className="py-12 md:py-20">
      <div className="container mx-auto px-4 max-w-4xl">
        <ScrollFade className="text-center mb-12">
          <div className="flex items-center justify-center gap-3 mb-4">
            <AlertTriangle className="h-8 w-8 text-accent" />
            <h1 className="text-3xl md:text-5xl font-bold text-foreground">
              Disclaimer
            </h1>
          </div>
          <p className="text-muted-foreground">
            Please read this disclaimer carefully before using our services.
          </p>
        </ScrollFade>

        <ScrollFade delay={0.1}>
          <div className="prose prose-lg max-w-none">
            {/* Important Notice */}
            <div className="bg-accent/10 border-l-4 border-accent p-6 rounded-r-lg mb-8">
              <h2 className="text-xl font-bold text-foreground mt-0 mb-3">
                Important Notice
              </h2>
              <p className="text-foreground/80 mb-0">
                Veenz Cyber Solutions is an <strong>independent cyber service provider</strong>. 
                We are <strong>NOT affiliated with, endorsed by, or part of</strong> eCitizen, KRA, HELB, NTSA, 
                Boma Yangu, NHIF, SHIF, NSSF, or any Government of Kenya institution.
              </p>
            </div>

            {/* Nature of Services */}
            <div className="bg-muted p-6 rounded-lg mb-8">
              <h2 className="text-xl font-bold text-foreground mt-0 mb-4">
                Nature of Our Services
              </h2>
              <p className="text-muted-foreground mb-4">
                We provide <strong>assistance with online applications</strong> — this includes:
              </p>
              <ul className="text-muted-foreground space-y-2 list-disc pl-6">
                <li>Helping clients navigate online government portals</li>
                <li>Filling out forms and uploading required documents on behalf of clients</li>
                <li>Providing guidance on application requirements</li>
                <li>Following up on application status when possible</li>
              </ul>
              <p className="text-muted-foreground mt-4 mb-0">
                We do <strong>not guarantee approvals, timelines, or outcomes</strong> of any government application. 
                All decisions are made solely by the relevant government agencies.
              </p>
            </div>

            {/* Fees */}
            <div className="bg-muted p-6 rounded-lg mb-8">
              <h2 className="text-xl font-bold text-foreground mt-0 mb-4">
                Fees & Charges
              </h2>
              <p className="text-muted-foreground mb-4">
                Our fees cover:
              </p>
              <ul className="text-muted-foreground space-y-2 list-disc pl-6">
                <li><strong>Service charges</strong> for our time, expertise, and effort in assisting you</li>
                <li><strong>Printing, scanning, and document preparation</strong> costs</li>
              </ul>
              <p className="text-muted-foreground mt-4 mb-0">
                <strong>Government fees</strong> (such as passport fees, license fees, registration fees, etc.) 
                are <strong>separate</strong> and are paid directly to the respective government platforms. 
                We will always inform you of both our service fee and any applicable government fees before 
                proceeding with your request.
              </p>
            </div>

            {/* Accuracy */}
            <div className="bg-muted p-6 rounded-lg mb-8">
              <h2 className="text-xl font-bold text-foreground mt-0 mb-4">
                Accuracy of Information
              </h2>
              <p className="text-muted-foreground mb-0">
                Clients are responsible for providing accurate and complete information. We are not liable 
                for any issues arising from incorrect, incomplete, or fraudulent information provided by clients.
              </p>
            </div>

            {/* No Guarantees */}
            <div className="bg-muted p-6 rounded-lg mb-8">
              <h2 className="text-xl font-bold text-foreground mt-0 mb-4">
                No Guarantees
              </h2>
              <p className="text-muted-foreground mb-0">
                We do not guarantee the success of any application. Processing times, approvals, and outcomes 
                are determined by the respective government agencies and are beyond our control.
              </p>
            </div>

            {/* Contact */}
            <div className="bg-primary/10 p-6 rounded-lg">
              <h2 className="text-xl font-bold text-foreground mt-0 mb-4">
                Questions?
              </h2>
              <p className="text-muted-foreground mb-0">
                If you have any questions about this disclaimer, please contact us at{" "}
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

export default Disclaimer;
