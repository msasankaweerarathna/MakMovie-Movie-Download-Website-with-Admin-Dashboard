import ClientPromise from "@/lib/mongodb"
import { MongoDBAdapter } from "@auth/mongodb-adapter"
import NextAuth from "next-auth"
import GoogleProvider from "next-auth/providers/google"


export const authOptions = {
  
  secret: process.env.NODE_ENV,
  adapter: MongoDBAdapter(ClientPromise),

  
  providers: [
    //Google Provider
    GoogleProvider({
      clientId: process.env.GOOGLE_ID,
      clientSecret: process.env.GOOGLE_SECRET,
    }),

  ],
}

export default NextAuth(authOptions)