"use client";

import {
  ResizableHandle,
  ResizablePanel,
  ResizablePanelGroup,
} from "@/components/ui/resizable";
import { FormProvider, useForm } from "react-hook-form";
import { InfosSidebar } from "./infos-sidebar";
import { ResumeContent } from "./resume-content";
import { StructureSidebar } from "./structure-sidebar";

export const ResumePage = () => {
  const defaultValues: ResumeData = {
    content: {
      image: {
        url: "",
        visible: true,
      },
      infos: {
        fullName: "",
        headline: "",
        email: "",
        website: "",
        phone: "",
        location: "",
      },
      summary: "",
      certifications: [],
      educations: [],
      experiences: [],
      languages: [],
      projects: [],
      skills: [],
      socialMedias: [],
    },
  };

  const methods = useForm<ResumeData>({
    defaultValues,
  });

  return (
    <FormProvider {...methods}>
      <main className="h-screen w-full overflow-hidden">
        <ResizablePanelGroup direction="horizontal" className="h-full w-full">
          <ResizablePanel minSize={20} maxSize={40}>
            <InfosSidebar />
          </ResizablePanel>
          <ResizableHandle withHandle />
          <ResizablePanel>
            <ResumeContent />
          </ResizablePanel>
          <ResizableHandle withHandle />
          <ResizablePanel minSize={20} maxSize={35}>
            <StructureSidebar />
          </ResizablePanel>
        </ResizablePanelGroup>
      </main>
    </FormProvider>
  );
};
