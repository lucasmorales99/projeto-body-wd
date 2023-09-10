import NextAuth, { AuthOptions } from "next-auth";
import GithubProvider from "next-auth/providers/github";
import { PrismaAdapter } from "@auth/prisma-adapter";
import prisma from "@/lib/bd";

if (!process.env.GITHUB_ID || !process.env.GITHUB_SECRET) {
    throw new Error("Missing GITHUB_ID or GITHUB_SECRET env var");
}

const authOptions: AuthOptions = {
    adapter: PrismaAdapter(prisma),
    providers: [
        GithubProvider({
            clientId: process.env.GITHUB_ID,
            clientSecret: process.env.GITHUB_SECRET,
        }),
    ],
};

export const handler = NextAuth(authOptions);

export { handler as GET, handler as POST };
