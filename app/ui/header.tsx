import { auth } from "@/auth";
import Image from "next/image";

export default async function Header() {
  const session = await auth();
  return (
    <header className="flex flex-row-reverse border gap-4 rounded-lg px-8 py-2 bottom-1 bg-white items-center">
        {session?.user?.image && <Image
          className="rounded-full"
          width={36}
          height={36}
          alt='User Image'
          src={session.user.image}
        />} 
        <span>{session?.user?.name}</span>
    </header>
  );
}
