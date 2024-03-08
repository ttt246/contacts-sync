import { ArrowRightIcon } from '@heroicons/react/24/outline';
import Link from 'next/link';


export default function Page() {
  return (
    <main className="flex items-center min-h-screen flex-col p-6">
      <div className="flex flex-col justify-center gap-6 rounded-lg bg-gray-50 px-6 py-10 md:w-2/5 md:px-20">
        <p className="text-xl text-gray-800 md:text-3xl md:leading-normal">
          <strong>Contacts Sync</strong>
        </p>
        <Link
          href="/login"
          className="flex items-center gap-5 self-start rounded-lg bg-blue-500 px-6 py-3 text-sm font-medium text-white transition-colors hover:bg-blue-400 md:text-base"
        >
          <span>Log in</span> <ArrowRightIcon className="w-5 md:w-6" />
        </Link>
      </div>
    </main>
  );
}
