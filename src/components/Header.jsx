import Link from "next/link";
import Dark from "@/components/Dark";

import { SignedIn,SignedOut,UserButton,SignInButton } from "@clerk/nextjs";

export default function Header() {
  return (
    <div className="flex justify-between items-center p-3 max-w-6xl mx-auto">
        <ul className="flex gap-4">
<SignedIn>
    <UserButton />
</SignedIn>
<SignedOut>
<li>
    <Link href={"/sign-in"}>Sign in</Link>
</li>
</SignedOut>
<li className="hidden sm:block">
    <Link href={"/"}>Home</Link>
</li>
<li className="hidden sm:block">
    <Link href={"/about"}>About</Link>
</li>
        </ul>
        <div className="flex gap-4 items-center">
          <Dark/>
       
<Link href={'/'} className="flex items-center gap-1">
<span className="text-2xl font-bold bg-amber-500 py-1 px-2 rounded-lg">
    IMDB
</span>
<span className="text-xl hidden sm:inline">Clone</span>

</Link>
    </div>
    </div>
  )
}
