import { cn } from "@/lib/utils";

interface SectionHeadingProps {
  title: string;
  subtitle?: string;
  className?: string;
  centered?: boolean;
}

export function SectionHeading({
  title,
  subtitle,
  className,
  centered = true,
}: SectionHeadingProps) {
  return (
    <div className={cn("mb-12 flex flex-col gap-2", centered && "items-center text-center", className)}>
      <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">{title}</h2>
      {subtitle && <p className="text-muted-foreground text-lg max-w-2xl">{subtitle}</p>}
      <div className="h-1 w-20 bg-primary rounded-full mt-2" />
    </div>
  );
}
