import {
  DialogContent,
  DialogDescription,
  DialogHeader,
  Dialog as DialogRoot,
  DialogTitle,
  DialogTrigger,
} from "./primitive";

export type BaseDialogProps = {
  open?: boolean;
  setOpen?: (open: boolean) => void;
  children?: React.ReactNode;
};

type DialogProps = BaseDialogProps & {
  title: string;
  description?: string;
  content: React.ReactNode;
};

export const Dialog = ({
  children,
  content,
  description,
  open,
  setOpen,
  title,
}: DialogProps) => {
  return (
    <DialogRoot open={open} onOpenChange={setOpen}>
      {children && <DialogTrigger asChild>{children}</DialogTrigger>}
      <DialogContent>
        <DialogHeader>
          <DialogTitle>{title}</DialogTitle>
          {description && <DialogDescription>{description}</DialogDescription>}
        </DialogHeader>
        {content}
      </DialogContent>
    </DialogRoot>
  );
};
