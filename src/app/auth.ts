import NextAuth, { type DefaultSession } from "next-auth"
import Google from "next-auth/providers/google"
import Credentials from "next-auth/providers/credentials"
import type { Provider } from "next-auth/providers"

const providers: Provider[] = [
  Credentials({
    credentials: {
      email: { label: "Email", type: "text" },
      password: { label: "Password", type: "password" },
    },

    authorize: async (credentials) => {

      const user = {
        email: "daniel@santosPets.com",
        name: "Daniel Santos",
      };

      const email = credentials.email as string;
      const password = credentials.password as string;

      if (!email || !password)
        return null;

      if (email !== "daniel@santosPets.com" || password !== "Dany526@")
        return null;

      return user;
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
  providers,
  pages: {
    signIn: "/signin",
    error: "/error",
    signOut: "/signout"
  },
})