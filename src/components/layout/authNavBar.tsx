"use client";

import { useSession, signIn, signOut } from "next-auth/react";
import { User } from "lucide-react";

import { Button } from "@/components/ui/button";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Skeleton } from "@/components/ui/skeleton";

export default function AuthNavBar() {
    const { data: session, status } = useSession();

    if (status === "loading") {
        return (
            <section className={"flex gap-2"}>
                <Skeleton className="w-10 h-10 rounded-full" />
                <div className={"px-[16px]"}>
                    <Skeleton className="h-4 w-[53px] " />
                </div>
            </section>
        );
    }

    if (status === "authenticated") {
        return (
            <section className={"flex gap-2"}>
                <Avatar>
                    <AvatarImage src={`${session?.user?.image}`} alt={`User image`} />
                </Avatar>
                <Button variant={"ghost"} onClick={() => signOut()} className={"w-[85px]"}>
                    Logout
                </Button>
            </section>
        );
    }

    return (
        <section className={"flex gap-2"}>
            <Avatar>
                <AvatarFallback>
                    <User />
                </AvatarFallback>
            </Avatar>
            <Button variant={"ghost"} onClick={() => signIn()} className={"w-[85px]"}>
                Login
            </Button>
        </section>
    );
}
