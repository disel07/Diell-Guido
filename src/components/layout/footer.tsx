import { Container } from "@/components/layout/container";
import { SITE_CONFIG } from "@/data";

export function Footer() {
  return (
    <footer className="border-t py-8 text-center text-sm text-muted-foreground">
      <Container>
        <p>&copy; {new Date().getFullYear()} {SITE_CONFIG.name}. All rights reserved.</p>
        <p className="mt-2">Built with Next.js, Tailwind CSS & Framer Motion.</p>
      </Container>
    </footer>
  );
}
