"use client";

import { Button } from "@/components/ui/button";
import { BaseDialogProps, Dialog } from "@/components/ui/dialog";
import { InputField } from "@/components/ui/input/field";
import { FormProvider, useForm } from "react-hook-form";

type FormData = {
  title: string;
};

export const NewResumeDialog = (props: BaseDialogProps) => {
  const methods = useForm<FormData>();

  const onSubmit = () => {
    console.log("submitted");
  };

  return (
    <Dialog
      {...props}
      title="Criar novo currículo"
      description="Para começar, escolha um título para seu currículo"
      content={
        <FormProvider {...methods}>
          <form
            className="flex flex-col"
            onSubmit={methods.handleSubmit(onSubmit)}
          >
            <InputField label="Título" name="title" required />
            <Button type="submit" className="mt-6 ml-auto w-max">
              Criar currículo
            </Button>
          </form>
        </FormProvider>
      }
    />
  );
};
