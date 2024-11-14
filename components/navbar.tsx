import { Rat } from "lucide-react";
import Link from "next/link";
import React from "react";
import { buttonVariants } from "./ui/button";

const Navbar = () => {
  return (
    <div className="border-b px-4">
      <div className="flex items-center justify-between mx-auto max-w-4xl h-16">
        <Link href="/" className="flex items-center gap-2">
          <Rat className="h-6 w-6" />
          <span className="font-bold">Better-Auth</span>
        </Link>
        <div>
          <Link href="/sign-in" className={buttonVariants()}>
            Sign In
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Navbar;