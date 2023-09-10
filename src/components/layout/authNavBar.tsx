"use client";

import { useSession, signIn, signOut } from "next-auth/react";
import { Button } from "@/components/ui/button";
import { Avatar, AvatarImage } from "@/components/ui/avatar";

export default function AuthNavBar() {
    const { data: session, status } = useSession();

    if (status === "authenticated") {
        return (
            <>
                <Avatar>
                    <AvatarImage src={`${session?.user?.image}`} alt={`User image`} />
                </Avatar>
                <Button variant={"ghost"} onClick={() => signOut()}>
                    Sign out
                </Button>
            </>
        );
    }

    return (
        <>
            <Button variant={"ghost"} onClick={() => signIn("github")}>
                Sign in
            </Button>
        </>
    );
}
