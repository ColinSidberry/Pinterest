// import NextAuth from "next-auth"
// import GoogleProvider from "next-auth/providers/google";
//
// const handler = NextAuth({
//   providers: [
//     GoogleProvider({
//       clientId: process.env.GOOGLE_CLIENT_ID || "",
//       clientSecret: process.env.GOOGLE_CLIENT_SECRET || ""
//     }),
//
//   ],
//   callbacks: {
//     async jwt({token, user}) {
//       console.log('user from routes.ts: ', user);
//       if (user) {
//         token.uid = user.id;
//         token.email = user.email || '';
//         token.firebaseToken = user.uid || ''; // Add Firebase token to JWT
//         token.name = user.name || '';
//       }
//       return token;
//     },
//     async session({session, token}) {
//       console.log('session from routes: ', session);
//       if (session.user) {
//         session.user.uid = token.id as string;
//         session.user.email = token.email as string;
//       }
//       // session.user = {
//       //   // userId: token.uid,
//       //   email: token.email || "",
//       // };
//       // session.firebaseToken = token.firebaseToken; // Add Firebase token to session
//       return session;
//     },
//   },
//   secret: process.env.NEXTAUTH_SECRET,
//   },
// )
//
// export {handler as GET, handler as POST}

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