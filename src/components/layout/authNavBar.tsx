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
            <>
                <Skeleton className="w-10 h-10 rounded-full" />
                <div className={"px-[16px]"}>
                    <Skeleton className="h-4 w-[53px] " />
                </div>
            </>
        );
    }

    if (status === "authenticated") {
        return (
            <>
                <Avatar>
                    <AvatarImage src={`${session?.user?.image}`} alt={`User image`} />
                </Avatar>
                <Button variant={"ghost"} onClick={() => signOut()} className={"w-[85px]"}>
                    Logout
                </Button>
            </>
        );
    }

    return (
        <>
            <Avatar>
                <AvatarFallback>
                    <User />
                </AvatarFallback>
            </Avatar>
            <Button variant={"ghost"} onClick={() => signIn()} className={"w-[85px]"}>
                Login
            </Button>
        </>
    );
}
