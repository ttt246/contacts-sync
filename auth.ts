import NextAuth from 'next-auth';
import Google from 'next-auth/providers/google';
import { authConfig } from './auth.config';
import { z } from 'zod';
import { getUser } from './app/lib/data';

export const {
  handlers: { GET, POST },
  auth,
  signIn,
  signOut,
} = NextAuth({
  ...authConfig,
  providers: [
    Google({
      // async authorize(credentials) {
      //   const parsedCredentials = z
      //     .object({ email: z.string().email(), password: z.string() })
      //     .safeParse(credentials);

      //   if (parsedCredentials.success) {
      //     const { email, password } = parsedCredentials.data;
      //     const user = await getUser(email);
      //     if (!user) return null;
      //     const passwordsMatch = await bcrypt.compare(password, user.password);
      //     if (passwordsMatch) return user;
      //   }

      //   console.log('Invalid credentials');
      //   return null;
      // },
    }),
  ],
});
