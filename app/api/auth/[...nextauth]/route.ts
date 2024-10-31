import NextAuth, { NextAuthOptions } from "next-auth"
import GoogleProvider from "next-auth/providers/google"

const authOptions: NextAuthOptions = {
  pages: {
    signIn: '/',
  },
  callbacks: {
    async jwt({token, user}) {
      if (user) {
        token.uid = user.id
        token.email = user.email || ''
        token.firebaseToken = user.uid || '' // Add Firebase token to JWT
        token.name = user.name || ''
      }
      return token
    },
    async session({session, token}) {
      if (session.user) {
        session.user.uid = token.id as string
        session.user.email = token.email as string
      }
      return session
    },
  },
  providers: [
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID || "",
      clientSecret: process.env.GOOGLE_CLIENT_SECRET || ""
    }),
  ],
  secret: process.env.NEXTAUTH_SECRET,
}

const handler = NextAuth(authOptions)

export { handler as GET, handler as POST }