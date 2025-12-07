import { Container } from "@/components/layout/container";
import { SectionHeading } from "@/components/ui/section-heading";
import { EXPERIENCE } from "@/data";

export function Experience() {
  return (
    <section id="experience" className="py-20">
      <Container>
        <SectionHeading title="Experience" subtitle="My professional journey" />
        <div className="relative mx-auto max-w-3xl border-l border-border ml-4 sm:ml-auto space-y-12">
          {EXPERIENCE.map((item, index) => (
            <div key={item.id} className="relative pl-8 sm:pl-12">
              {/* Timeline Dot */}
              <div className="absolute left-[-5px] top-2 h-3 w-3 rounded-full bg-primary ring-4 ring-background" />
              
              <div className="flex flex-col gap-1 sm:flex-row sm:items-center sm:justify-between">
                <h3 className="text-xl font-semibold">{item.role}</h3>
                <span className="text-sm text-muted-foreground font-medium bg-secondary px-2 py-1 rounded">
                  {item.period}
                </span>
              </div>
              
              <div className="mb-2 text-base font-medium text-primary/80">
                {item.company} &middot; <span className="text-muted-foreground text-sm font-normal">{item.location}</span>
              </div>
              
              <ul className="list-disc pl-4 space-y-1 text-muted-foreground">
                {item.description.map((desc, i) => (
                  <li key={i}>{desc}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}
