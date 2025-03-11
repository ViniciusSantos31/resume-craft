import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { BaseDialogProps, Dialog } from "@/components/ui/dialog";
import { EditorField } from "@/components/ui/editor/field";
import { IconField } from "@/components/ui/icon-input/field";
import { InputField } from "@/components/ui/input/field";
import { SliderField } from "@/components/ui/slider/field";
import { cn } from "@/lib/utils";
import { Fragment, useEffect, useMemo } from "react";
import { FormProvider, useForm, useFormContext } from "react-hook-form";
import { MultipleDragItemData, ResumeArrayKeys } from ".";

import { toast } from "sonner";
import { v4 as uuid } from "uuid";

type ManageMultipleItemDialogProps = BaseDialogProps & {
  data: MultipleDragItemData;
  initialData?: any;
  setOpen: (open: boolean) => void;
};

type FormConfig<T> = {
  label: string;
  key: keyof T;
  fieldType?: "text" | "editor" | "icon" | "slider" | "keywords";
  type?: string;
  placeholder?: string;
  fullWidth?: boolean;
  required?: boolean;
  className?: string;
};

type FormConfigObject = {
  [K in ResumeArrayKeys]: FormConfig<ResumeData["content"][K][number]>[];
};

const formConfig: FormConfigObject = {
  socialMedias: [
    {
      label: "Rede",
      key: "name",
      placeholder: "LinkedIn",
      required: true,
    },
    {
      label: "Usuário",
      key: "username",
      placeholder: "seu-usuario",
      required: true,
    },
    {
      label: "Site",
      key: "url",
      placeholder: "https://linkedin.com/in/seu-usuario",
      type: "url",
      fullWidth: true,
    },
    {
      label: "Ícone",
      key: "icon",
      placeholder: "linkedin",
      fieldType: "icon",
      fullWidth: true,
    },
  ],
  experiences: [
    {
      label: "Empresa",
      key: "company",
      required: true,
    },
    {
      label: "Posição",
      key: "position",
    },
    {
      label: "Data ou intervalo de datas",
      key: "date",
      placeholder: "Janeiro de 2024 - Presente",
    },
    {
      label: "Localização",
      key: "location",
    },
    {
      label: "Site",
      key: "website",
      type: "url",
      fullWidth: true,
    },
    {
      label: "Descrição",
      key: "summary",
      fieldType: "editor",
      fullWidth: true,
      className: "min-h-[200px]",
    },
  ],
  educations: [
    {
      label: "Instituição",
      key: "institution",
      required: true,
    },
    {
      label: "Curso",
      key: "degree",
    },
    {
      label: "Data ou intervalo de datas",
      key: "date",
      placeholder: "Janeiro de 2024 - Presente",
    },
    {
      label: "Localização",
      key: "location",
    },
    {
      label: "Site",
      key: "website",
      type: "url",
      fullWidth: true,
    },
    {
      label: "Descrição",
      key: "summary",
      fieldType: "editor",
      fullWidth: true,
      className: "min-h-[200px]",
    },
  ],
  skills: [
    {
      label: "Nome",
      key: "name",
      required: true,
    },
    {
      label: "Descrição",
      key: "description",
    },
    {
      label: "Nível",
      key: "level",
      fieldType: "slider",
      fullWidth: true,
    },
    {
      label: "Palavras-chave",
      key: "keywords",
      placeholder: "Adicione palavras-chave separadas por vírgula",
      fieldType: "keywords",
      fullWidth: true,
    },
  ],
  languages: [
    {
      label: "Nome",
      key: "name",
      required: true,
    },
    {
      label: "Descrição",
      key: "description",
    },
    {
      label: "Nível",
      key: "level",
      fieldType: "slider",
      fullWidth: true,
    },
  ],
  certifications: [
    {
      label: "Nome",
      key: "name",
      required: true,
    },
    {
      label: "Instituição",
      key: "institution",
    },
    {
      label: "Data",
      key: "date",
      placeholder: "Janeiro de 2024",
    },
    {
      label: "Site",
      key: "website",
      type: "url",
    },
    {
      label: "Descrição",
      key: "summary",
      fieldType: "editor",
      className: "min-h-[200px]",
      fullWidth: true,
    },
  ],
  projects: [
    {
      label: "Nome",
      key: "name",
      required: true,
    },
    {
      label: "Descrição",
      key: "description",
    },
    {
      label: "Data ou intervalo de datas",
      key: "date",
      placeholder: "Janeiro de 2024 - Presente",
    },
    {
      label: "Site",
      key: "website",
      type: "url",
    },
    {
      label: "Resumo",
      key: "summary",
      fieldType: "editor",
      className: "min-h-[200px]",
      fullWidth: true,
    },
    {
      label: "Palavras-chave",
      key: "keywords",
      placeholder: "Adicione palavras-chave separadas por vírgula",
      fieldType: "keywords",
      fullWidth: true,
    },
  ],
};

export const ManageMultipleItemDialog = ({
  data,
  initialData,
  setOpen,
  ...props
}: ManageMultipleItemDialogProps) => {
  const methods = useForm();
  const { getValues, setValue } = useFormContext<ResumeData>();

  const isEditing = !!initialData;

  const formContent = useMemo(() => {
    const config = formConfig[data.formKey];

    return config.map((field, index) => {
      const fieldType = field.fieldType || "text";
      const isFullWidth = !!field.fullWidth;

      const fieldProps = {
        ...field,
        name: field.key,
        containerClassName: cn(isFullWidth && "col-span-full"),
      };

      return (
        <Fragment key={index}>
          {fieldType === "text" && <InputField {...fieldProps} />}
          {fieldType === "editor" && <EditorField {...fieldProps} />}
          {fieldType === "icon" && <IconField {...fieldProps} />}
          {fieldType === "slider" && <SliderField {...fieldProps} />}
          {fieldType === "keywords" && (
            <InputField
              {...fieldProps}
              extraContent={(value) => (
                <div className="mt-1 flex flex-wrap gap-2">
                  {value?.split(",").map((keyword, index) => {
                    if (!keyword.trim()) return null;

                    return <Badge key={`keyword-${index}`}>{keyword}</Badge>;
                  })}
                </div>
              )}
            />
          )}
        </Fragment>
      );
    });
  }, [data.formKey]);

  const onSubmit = (formData: any) => {
    const currentValue = getValues();

    const formKey = data.formKey;
    const currentFieldValue = currentValue.content[formKey] ?? [];

    if (isEditing) {
      const updatedItems = currentFieldValue.map((item: any) => {
        if (item.id === initialData.id) {
          return formData;
        }
        return item;
      });

      setValue(`content.${formKey}`, updatedItems);
      setOpen(false);
      toast.success("Item atualizado com sucesso!", {
        position: "bottom-left",
        richColors: true,
      });

      return;
    }

    setValue(`content.${formKey}`, [
      ...currentFieldValue,
      {
        ...formData,
        id: uuid(),
      },
    ]);
    setOpen(false);
    toast.success("Item adicionado com sucesso!", {
      position: "bottom-left",
      richColors: true,
    });
  };

  const onDelete = () => {
    const currentValue = getValues();
    const formKey = data.formKey;
    const currentFieldValue = currentValue.content[formKey] ?? [];

    const updatedItems = currentFieldValue.filter(
      (item: any) => item.id !== initialData.id,
    );

    setValue(`content.${formKey}`, updatedItems);
    setOpen(false);
    toast.success("Item excluído com sucesso!", {
      position: "bottom-left",
      richColors: true,
    });
  };

  useEffect(() => {
    if (initialData) {
      methods.reset(initialData);
    }
  }, [initialData]);

  return (
    <Dialog
      {...props}
      setOpen={setOpen}
      title="Adicionar novo item"
      content={
        <form
          onSubmit={methods.handleSubmit(onSubmit)}
          className="mt-2 flex flex-col"
        >
          <div className="mb-4 grid grid-cols-2 gap-4">
            <FormProvider {...methods}>{formContent}</FormProvider>
          </div>
          <div className="ml-auto flex gap-3">
            {isEditing && (
              <Button type="button" variant="destructive" onClick={onDelete}>
                Remover
              </Button>
            )}
            <Button type="submit" className="w-max">
              {isEditing ? "Salvar" : "Adicionar"}
            </Button>
          </div>
        </form>
      }
    />
  );
};
