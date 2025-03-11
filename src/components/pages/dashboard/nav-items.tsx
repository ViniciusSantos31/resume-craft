"use client";

import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { Newspaper, SquareUser } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";

export const NavItems = () => {
  const pathname = usePathname();

  const navItems = [
    {
      label: "Currículos",
      icon: Newspaper,
      href: "/dashboard/resumes",
    },
    {
      label: "Configurações de conta",
      icon: SquareUser,
      href: "/dashboard/account",
    },
  ];

  return (
    <nav className="flex w-full flex-col gap-2 px-2 py-4">
      {navItems.map((item) => {
        const isActive = pathname.startsWith(item.href);

        return (
          <Link href={item.href} key={item.href}>
            <Button
              variant="ghost"
              className={cn(
                "w-full justify-start gap-2",
                isActive && "bg-accent",
              )}
            >
              <item.icon size={16} />
              <span>{item.label}</span>
            </Button>
          </Link>
        );
      })}
    </nav>
  );
};
