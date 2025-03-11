import { cn } from "@/lib/utils";
import { LucideIcon } from "lucide-react";

type SectionTitleProps = {
  icon: LucideIcon;
  title: string;
  className?: string;
};

export const SectionTitle = ({
  title,
  icon: Icon,
  className,
}: SectionTitleProps) => {
  return (
    <div className={cn("flex items-center gap-2", className)}>
      <Icon size={18} className="text-muted-foreground" />
      <h3 className="font-title text-2xl font-bold">{title}</h3>
    </div>
  );
};
