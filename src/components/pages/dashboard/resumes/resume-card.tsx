import { cn } from "@/lib/utils";
import Link from "next/link";
import { ReactNode } from "react";

type ResumeCardProps = {
  title: string;
  description: string;
  icon?: ReactNode;
};

export const ResumeCardButton = ({
  title,
  description,
  icon,
}: ResumeCardProps) => {
  return (
    <button
      className={cn(
        "bg-muted/50 border-muted-foreground/20 h-[300px] w-full border",
        "flex items-center justify-center rounded",
        "relative overflow-hidden outline-none",
        "transition-all hover:brightness-95 dark:hover:brightness-125",
      )}
    >
      {icon}
      <div className="from-background/80 absolute bottom-0 left-0 w-full bg-gradient-to-t p-3 text-left">
        <p className="font-title text-sm font-semibold">{title}</p>
        <span className="text-muted-foreground block text-xs">
          {description}
        </span>
      </div>
    </button>
  );
};

export const ResumeCard = () => {
  return (
    <Link href="/dashboard/resumes/1" className="block w-full">
      <ResumeCardButton
        title="Currículo 1"
        description="Descrição do currículo 1"
      />
    </Link>
  );
};
