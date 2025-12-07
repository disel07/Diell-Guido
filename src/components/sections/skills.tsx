import { Container } from "@/components/layout/container";
import { SectionHeading } from "@/components/ui/section-heading";
import { SKILLS, CERTIFICATIONS } from "@/data";

export function Skills() {
  // Group skills by category
  const skillsByCategory = SKILLS.reduce((acc, skill) => {
    if (!acc[skill.category]) acc[skill.category] = [];
    acc[skill.category].push(skill);
    return acc;
  }, {} as Record<string, typeof SKILLS>);

  return (
    <section id="skills" className="py-24 bg-secondary/20 border-t border-b border-white/5">
      <Container>
        <SectionHeading title="System_Capabilities" subtitle="Loaded Modules & Certifications" />
        
        <div className="grid gap-16 md:grid-cols-2">
          {/* Skills */}
          <div className="space-y-8">
            <h3 className="text-xl font-mono text-primary border-l-2 border-primary pl-4">:: Technical_Skills</h3>
            <div className="grid gap-8">
              {Object.entries(skillsByCategory).map(([category, items]) => (
                <div key={category}>
                  <h4 className="mb-4 text-xs font-mono uppercase tracking-widest text-muted-foreground">
                    [{category}]
                  </h4>
                  <div className="flex flex-wrap gap-3">
                    {items.map((skill) => (
                      <div
                        key={skill.name}
                        className="group relative overflow-hidden rounded-sm border border-white/10 bg-background px-4 py-2 text-sm font-mono transition-all duration-300 hover:border-primary hover:shadow-[0_0_15px_rgba(0,255,255,0.3)]"
                      >
                        <span className="relative z-10 group-hover:text-primary transition-colors">{skill.name}</span>
                        <div className="absolute inset-0 bg-primary/10 translate-y-full transition-transform duration-300 group-hover:translate-y-0"></div>
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Certifications */}
          <div className="space-y-8">
            <h3 className="text-xl font-mono text-accent border-l-2 border-accent pl-4">:: Certifications</h3>
            <div className="grid gap-4">
              {CERTIFICATIONS.map((cert) => (
                <div
                  key={cert.name}
                  className="flex items-center justify-between rounded-sm border border-white/10 bg-card p-4 transition-all hover:border-accent hover:shadow-[0_0_15px_rgba(255,0,255,0.2)]"
                >
                  <span className="font-mono font-medium text-sm">{cert.name}</span>
                  <span className="text-xs text-muted-foreground font-mono">[{cert.issuer}]</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
