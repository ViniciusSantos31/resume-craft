"use client";

import { cn } from "@/lib/utils";
import { FieldError } from "react-hook-form";
import { Label } from "./label";

type FieldWrapperProps = {
  label: string;
  children: React.ReactNode;
  className?: string;
  error?: FieldError | null;
};

export const FieldWrapper = ({
  children,
  label,
  className,
  error,
}: FieldWrapperProps) => {
  return (
    <div className={cn("flex flex-col gap-2", className)}>
      <Label>{label}</Label>
      {children}
      {error && (
        <span className="text-error text-sm text-red-500">{error.message}</span>
      )}
    </div>
  );
};
