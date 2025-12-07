import { Container } from "@/components/layout/container";
import { SectionHeading } from "@/components/ui/section-heading";
import { SITE_CONFIG } from "@/data";

export function About() {
  return (
    <section id="about" className="py-20 bg-secondary/30">
      <Container>
        <SectionHeading title="About Me" subtitle="Get to know me better" />
        <div className="mx-auto max-w-3xl text-center">
          <p className="text-lg leading-relaxed text-muted-foreground">
            {SITE_CONFIG.aboutMe}
          </p>
        </div>
      </Container>
    </section>
  );
}
