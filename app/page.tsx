import { signIn } from '@/auth';
import Image from 'next/image';

export default function Page() {
  return (
    <main className="flex items-center content-center min-h-screen flex-col p-6">
      <div className="flex flex-col gap-6 rounded-lg bg-gray-50 px-6 py-10 md:w-2/5 md:px-20 text-center">
        <p className="text-xl text-gray-800 md:text-3xl md:leading-normal">
          <strong>Contacts Sync</strong>
        </p>
        <div className='flex flex-col items-center content-center'>
          <form
            action={async () => {
              'use server';
              await signIn('google');
            }}
          >
            <button className='flex gap-2 rounded-lg px-8 py-4 border border-gray-400 bg-white-500'>
              <Image
                src='https://authjs.dev/img/providers/google.svg'
                width={24}
                height={24}
                alt='Sign in with Google'
              />
              <span>Sign in with Google</span>
            </button>
          </form>
        </div>
      </div >
    </main >
  );
}
