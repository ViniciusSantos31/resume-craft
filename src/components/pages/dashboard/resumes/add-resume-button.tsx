import { Plus } from "lucide-react";
import { ResumeCardButton } from "./resume-card";

export const AddResumeButton = () => {
  return (
    <ResumeCardButton
      title="Adicionar novo currículo"
      description="Comece do zero"
      icon={<Plus size={48} />}
    />
  );
};
