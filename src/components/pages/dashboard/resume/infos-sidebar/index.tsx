import Logo from "@/app/assets/logo.svg";
import { Separator } from "@/components/ui/separator";
import Link from "next/link";
import { AiGenerateDropdown } from "./ai-generate-dropdown";
import { BasicInfoSection } from "./sections/basic-info";
import { MultiplesSections } from "./sections/multiples";
import { SummarySection } from "./sections/summary";

export const InfosSidebar = () => {
  return (
    <aside className="h-full w-full overflow-y-auto px-6 pb-6">
      <div className="bg-background border-muted sticky top-0 z-10 mb-5 flex w-full items-center justify-between border-b py-6">
        <Link href="/dashboard/resumes">
          <Logo className="w-full max-w-20" />
        </Link>
        <AiGenerateDropdown />
      </div>

      <BasicInfoSection />
      <Separator className="my-5" />

      <SummarySection />
      <MultiplesSections />
    </aside>
  );
};
