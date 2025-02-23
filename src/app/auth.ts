import NextAuth, { type DefaultSession } from "next-auth"
import Google from "next-auth/providers/google"
import Credentials from "next-auth/providers/credentials"
import type { Provider } from "next-auth/providers"
import { signInSchema } from "@/schema/signin"
import { ZodError } from "zod"
import { PrismaAdapter } from "@auth/prisma-adapter"
import { prisma } from "@/lib/prisma"
import { compareSync } from "bcryptjs"

const providers: Provider[] = [
  Credentials({
    credentials: {
      email: { label: "Email", type: "text" },
      password: { label: "Password", type: "password" },
    },

    authorize: async (credentials) => {

      try {

        const { email, password } = await signInSchema.parseAsync(credentials)

        if (!email || !password)
          return null;

        const user = await prisma.user.findFirst({
          where: {
            email: email
          },
        })

        if (!user)
          return null;

        if (!compareSync(password, user.password ?? ""))
           return null;

        return user;

      } catch (error) {
        if (error instanceof ZodError) {
          return null
        }
        return null
      }
    }
  }),
  Google]

export const providerMap = providers
  .map((provider) => {
    if (typeof provider === "function") {
      const providerData = provider()
      return { id: providerData.id, name: providerData.name }
    } else {
      return { id: provider.id, name: provider.name }
    }
  })
  .filter((provider) => provider.id !== "credentials")

declare module "next-auth" {
  interface Session {
    user: {
      id: string

    } & DefaultSession["user"]
  }
}

export const { handlers, signIn, signOut, auth } = NextAuth({
  callbacks: {
    authorized: async ({ auth }) => {
      return !!auth
    },
    jwt({ token }) {
      return token
    },
    session({ session, token }) {
      session.user.id = token.sub as string
      return session
    },
  },
  session: {
    strategy: "jwt"
  },
  adapter: PrismaAdapter(prisma),
  providers,
  pages: {
    signIn: "/signin",
    error: "/error",
    signOut: "/signout"
  },
})