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
import AuthNavBar from "@/components/layout/authNavBar";
import { Button } from "@/components/ui/button";
import { ArrowLeft, Menu } from "lucide-react";
import {
    Sheet,
    SheetContent,
    SheetDescription,
    SheetHeader,
    SheetTitle,
    SheetTrigger,
} from "@/components/ui/sheet";

interface NavBarProps {
    title: ReactNode;
    menuItens: navBarItems[];
    isHome?: true;
}

export default function NavBar({ title, menuItens, isHome }: NavBarProps) {
    function pegarMenuDeItem() {
        return (
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
        );
    }

    return (
        <>
            <nav className="sticky top-0 z-50 p-4 flex justify-between border-b bg-background ">
                <section className={"flex gap-2"}>
                    {!isHome && (
                        <Link href={"/"} passHref>
                            <Button variant={"ghost"} size={"icon"}>
                                <ArrowLeft />
                            </Button>
                        </Link>
                    )}
                    <h1 className="text-2xl font-bold flex items-center">{title}</h1>
                </section>
                <section className={"sm:hidden"}>
                    <Sheet>
                        <SheetTrigger>
                            <Menu />
                        </SheetTrigger>
                        <SheetContent>
                            <section className={"flex justify-between p-4 gap-2"}>
                                <AuthNavBar />
                                <ModeToggle />
                            </section>
                            <section className={"flex flex-col gap-2"}>{pegarMenuDeItem()}</section>
                        </SheetContent>
                    </Sheet>
                </section>
                <section className="hidden sm:flex gap-2">
                    {pegarMenuDeItem()}
                    <Separator orientation="vertical" />
                    <AuthNavBar />
                    <Separator orientation="vertical" />
                    <ModeToggle />
                </section>
            </nav>
        </>
    );
}
