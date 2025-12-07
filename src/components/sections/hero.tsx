import { Container } from "@/components/layout/container";
import { Button } from "@/components/ui/button";
import { SITE_CONFIG } from "@/data";
import { motion } from "framer-motion";
import { ArrowRight, Download, Terminal } from "lucide-react";

export function Hero() {
  return (
    <section id="hero" className="relative flex min-h-screen items-center justify-center pt-16 overflow-hidden">
      <Container className="relative z-10 flex flex-col items-center text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-primary/20 bg-primary/5 px-4 py-1.5 text-xs font-mono text-primary backdrop-blur-sm">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-primary"></span>
            </span>
            {SITE_CONFIG.status} // SYSTEM_READY
          </div>

          <h1 className="mb-6 text-5xl font-bold tracking-tighter sm:text-6xl md:text-7xl lg:text-8xl">
            <span className="text-foreground">Guido</span>
            <span className="text-primary">.Diell</span>
          </h1>
          
          <h2 className="mb-10 text-lg text-muted-foreground sm:text-xl max-w-2xl mx-auto font-mono leading-relaxed">
            <span className="text-accent">&lt;</span> {SITE_CONFIG.heroSubtitle} <span className="text-accent">/&gt;</span>
            <br />
            <span className="text-foreground/80">{SITE_CONFIG.heroDescription}</span>
          </h2>
          
          <div className="flex flex-col sm:flex-row gap-5 justify-center">
            <Button asChild size="lg" className="h-12 px-8 text-base font-mono rounded-none border border-primary bg-primary/10 text-primary hover:bg-primary hover:text-black transition-all duration-300 shadow-[0_0_20px_rgba(0,255,255,0.1)] hover:shadow-[0_0_30px_rgba(0,255,255,0.4)]">
              <a href="#contact">
                INIT_CONTACT <ArrowRight className="ml-2 h-4 w-4" />
              </a>
            </Button>
            <Button asChild variant="outline" size="lg" className="h-12 px-8 text-base font-mono rounded-none border-muted-foreground/30 hover:border-accent hover:text-accent hover:bg-accent/5 transition-all duration-300">
              <a href="/resume.pdf" target="_blank" rel="noopener noreferrer">
                DOWNLOAD_CV <Download className="ml-2 h-4 w-4" />
              </a>
            </Button>
          </div>
        </motion.div>
      </Container>
      
      {/* Futuristic Background Grid & Glow */}
      <div className="absolute inset-0 -z-10 h-full w-full bg-[linear-gradient(to_right,#1a1a1a_1px,transparent_1px),linear-gradient(to_bottom,#1a1a1a_1px,transparent_1px)] bg-[size:40px_40px] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_50%,#000_70%,transparent_100%)]"></div>
      <div className="absolute left-1/2 top-1/2 -z-10 h-[400px] w-[400px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-primary/10 blur-[100px]"></div>
      <div className="absolute left-1/4 top-1/4 -z-10 h-[300px] w-[300px] rounded-full bg-accent/5 blur-[120px]"></div>
    </section>
  );
}
