import Logo from "@/app/assets/logo.svg";
import { Separator } from "@/components/ui/separator";
import Link from "next/link";
import { AiGenerateDropdown } from "./ai-generate-dropdown";
import { BasicInfoSection } from "./sections/basic-info";
import { SummarySection } from "./sections/summary";

export const InfosSidebar = () => {
  return (
    <aside className="h-full w-full overflow-y-auto p-6">
      <div className="flex w-full items-center justify-between">
        <Link href="/dashboard/resumes">
          <Logo className="w-full max-w-20" />
        </Link>
        <AiGenerateDropdown />
      </div>
      <Separator className="my-5" />

      <BasicInfoSection />
      <Separator className="my-5" />

      <SummarySection />
      <Separator className="my-5" />
    </aside>
  );
};
