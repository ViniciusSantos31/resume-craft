import { useDebounce } from "@/hooks/useDebounce";
import Image from "next/image";
import { Input } from "../input";

type IconInputProps = {
  value: string;
  onChange: (value: string) => void;
  placeholder?: string;
};

export const IconInput = ({ value, onChange, placeholder }: IconInputProps) => {
  const debouncedValue = useDebounce<string>(value);

  return (
    <div className="flex items-center gap-2">
      <div className="size-8 min-w-8 rounded-full bg-white p-1">
        {!!debouncedValue && (
          <Image
            src={`https://cdn.simpleicons.org/${debouncedValue}`}
            alt={`icon-${debouncedValue}`}
            width={16}
            height={16}
            className="h-full w-full object-contain"
          />
        )}
      </div>
      <Input
        value={value}
        onChange={(e) => onChange(e.target.value)}
        placeholder={placeholder}
      />
    </div>
  );
};
