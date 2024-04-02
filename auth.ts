import NextAuth from 'next-auth';
import Google from 'next-auth/providers/google';

export const {
  handlers: { GET, POST },
  auth,
  signIn,
  signOut,
} = NextAuth({
  providers: [Google],
  pages: {
    signIn: '/',
    signOut: '/',
  },
  callbacks: {
    authorized({ auth, request: { nextUrl } }) {
      const isLoggedIn = !!auth?.user;
      const isOnContacts = nextUrl.pathname.startsWith('/contacts');
      const isOnSettings = nextUrl.pathname.startsWith('/settings');

      if (!isLoggedIn) return false;

      if (isLoggedIn && (isOnSettings || isOnContacts)) {
        return true
      }
      else if (isLoggedIn) {
        return Response.redirect(new URL('/settings', nextUrl));
      }
      else {
        return false
      }
    },
  },
});
