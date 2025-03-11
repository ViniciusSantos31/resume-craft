import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { LogOut, SquareUser } from "lucide-react";
import Link from "next/link";

export const UserDropdown = () => {
  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button
          variant="ghost"
          className="flex w-full flex-1 justify-start gap-2 px-2"
        >
          <Avatar className="block size-7">
            <AvatarImage src="https://i.pravatar.cc/40" alt="User" />
            <AvatarFallback>U</AvatarFallback>
          </Avatar>
          <p>Vinícius Santos</p>
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent
        align="center"
        className="w-[var(--radix-dropdown-menu-trigger-width)]"
      >
        <Link passHref href="/dashboard/account">
          <DropdownMenuItem className="gap-2">
            <SquareUser size={16} />
            Configurações de conta
          </DropdownMenuItem>
        </Link>
        <DropdownMenuItem variant="destructive" className="gap-2">
          <LogOut size={16} />
          Sair
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
};
