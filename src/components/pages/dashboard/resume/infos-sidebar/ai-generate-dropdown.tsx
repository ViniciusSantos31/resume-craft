import { Button } from "@/components/ui/button";
import { Bot } from "lucide-react";

export const AiGenerateDropdown = () => {
  return (
    <Button className="h-9 gap-2 px-2.5 py-1 text-xs">
      <Bot size={20} />
      Inteligência Artificial
    </Button>
  );
};
