"use client";

import { ReactNode } from "react";
import { SessionProvider } from "next-auth/react";

interface AuthProvidersProps {
    children: ReactNode;
}

export default function AuthProvider({ children }: AuthProvidersProps) {
    return (
        <>
            <SessionProvider>{children}</SessionProvider>
        </>
    );
}
