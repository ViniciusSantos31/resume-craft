import { ComponentProps } from "react";
import { Controller, useFormContext } from "react-hook-form";
import { Switch } from ".";

type SwitchFieldProps = ComponentProps<typeof Switch> & {
  name: string;
};

export const SwitchField = ({ name, ...props }: SwitchFieldProps) => {
  const { control } = useFormContext();

  return (
    <Controller
      control={control}
      name={name}
      render={({ field }) => (
        <Switch
          {...props}
          checked={field.value}
          onCheckedChange={field.onChange}
        />
      )}
    />
  );
};
