import {DefaultSession, DefaultUser} from "next-auth";

// Extend User to include Firebase fields (optional but useful for JWT and session)
declare module "next-auth" {
  interface User extends DefaultUser {
    uid: string;
    firebaseToken: string;
  }

  // Extend the JWT object
  interface JWT {
    uid: string;
    firebaseToken: string;
    email: string;
  }

  // Extend the Session object returned by useSession()
  interface Session extends DefaultSession {
    firebaseToken: string;
    user: {
      uid: string;
      email: string;
    };
  }
}
