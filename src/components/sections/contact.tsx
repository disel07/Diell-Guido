import { Container } from "@/components/layout/container";
import { SectionHeading } from "@/components/ui/section-heading";
import { SITE_CONFIG } from "@/data";
import { Mail, MapPin, Phone } from "lucide-react";

export function Contact() {
  return (
    <section id="contact" className="py-20">
      <Container>
        <SectionHeading title="Contact" subtitle="Let's work together" />
        
        <div className="grid gap-8 md:grid-cols-2 max-w-2xl mx-auto">
          <a
            href={`mailto:${SITE_CONFIG.contact.email}`}
            className="group flex flex-col items-center gap-4 rounded-sm border border-white/10 bg-card p-8 text-center transition-all hover:border-primary hover:shadow-[0_0_20px_rgba(0,255,255,0.2)] hover:-translate-y-1"
          >
            <div className="flex h-12 w-12 items-center justify-center rounded-full bg-secondary group-hover:bg-primary/20 transition-colors text-foreground group-hover:text-primary">
              <Mail className="h-5 w-5" />
            </div>
            <div>
              <h3 className="font-mono font-bold text-lg tracking-tight">Email_Uplink</h3>
              <p className="text-sm text-muted-foreground font-mono mt-1">{SITE_CONFIG.contact.email}</p>
            </div>
          </a>

          <div className="group flex flex-col items-center gap-4 rounded-sm border border-white/10 bg-card p-8 text-center transition-all hover:border-accent hover:shadow-[0_0_20px_rgba(255,0,255,0.2)] hover:-translate-y-1">
            <div className="flex h-12 w-12 items-center justify-center rounded-full bg-secondary group-hover:bg-accent/20 transition-colors text-foreground group-hover:text-accent">
              <MapPin className="h-5 w-5" />
            </div>
            <div>
              <h3 className="font-mono font-bold text-lg tracking-tight">Base_Location</h3>
              <p className="text-sm text-muted-foreground font-mono mt-1">{SITE_CONFIG.contact.address}</p>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
