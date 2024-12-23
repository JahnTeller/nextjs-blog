import React from "react";
import { ThemeToggle } from "./themeToggle";
import { SignInButton, SignedIn, SignedOut, UserButton } from "@clerk/nextjs";
import Link from "next/link";
import { Button } from "./ui/button";
export default function Header() {
  return (
    <div className="flex justify-between ">
      <nav className="flex gap-3">
        <Link href="">Buletin</Link>
        <Link href="">Stories</Link>
        <Link href="">Center</Link>
        <Link href="">Community</Link>
        <Link href="">Subscribe</Link>
      </nav>
      <menu className="flex gap-3">
        {/* <ThemeToggle /> */}
        <Button>
          <SignedOut>
            <SignInButton />
          </SignedOut>
          <SignedIn>
            <UserButton />
          </SignedIn>
        </Button>
      </menu>
    </div>
  );
}
