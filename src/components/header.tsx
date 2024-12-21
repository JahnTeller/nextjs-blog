import React from "react";
import { ThemeToggle } from "./themeToggle";
import { SignInButton, SignedIn, SignedOut, UserButton } from "@clerk/nextjs";
export default function Header() {
  return (
    <div>
      <SignedOut>
        <SignInButton />
      </SignedOut>
      <SignedIn>
        <UserButton />
      </SignedIn>
      <ThemeToggle />
    </div>
  );
}
