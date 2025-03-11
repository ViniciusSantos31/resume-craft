"use client";

import { Editor } from "@/components/ui/editor";
import { ScrollText } from "lucide-react";
import { Controller, useFormContext } from "react-hook-form";
import { SectionTitle } from "../section-title";

export const SummarySection = () => {
  const { control } = useFormContext();

  return (
    <section>
      <SectionTitle title="Sobre você" icon={ScrollText} />

      <Controller
        control={control}
        name="content.summary"
        render={({ field }) => (
          <Editor {...field} className="mt-4 max-h-[300px] min-h-[200px]" />
        )}
      />
    </section>
  );
};
