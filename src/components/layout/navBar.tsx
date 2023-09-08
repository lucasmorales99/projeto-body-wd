"use client";

import Link from "next/link";
import { ReactNode } from "react";

import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu";
import { ModeToggle } from "@/components/botoes/modeToggle";
import { navBarItems } from "@/lib/interfaces";
import { Separator } from "@/components/ui/separator";

interface NavBarProps {
  title: ReactNode;
  menuItens: navBarItems[];
}

export default function NavBar({ title, menuItens }: NavBarProps) {
  return (
    <>
      <nav className="sticky top-0 z-50 p-4 flex justify-between border-b bg-background ">
        <h1 className="text-2xl font-bold">{title}</h1>
        <div className="flex gap-2">
          <NavigationMenu>
            <NavigationMenuList>
              {menuItens.map((item) => (
                <NavigationMenuItem key={item.id}>
                  <Link href={item.href} legacyBehavior passHref>
                    <NavigationMenuLink className={navigationMenuTriggerStyle()}>
                      {item.label}
                    </NavigationMenuLink>
                  </Link>
                </NavigationMenuItem>
              ))}
            </NavigationMenuList>
          </NavigationMenu>
          <Separator orientation="vertical" />
          <ModeToggle />
        </div>
      </nav>
    </>
  );
}
