"use client";
import Image from "next/image";
import { useTheme } from "next-themes";
import { useState } from "react";
import { ThemeToggle } from "@/components/themeToggle";
import Header from "@/components/header";
import WelcomeBroad from "@/components/welcomeBroad";
import NewestPost from "@/components/newestPost";

export default function Home() {
  const { theme, setTheme } = useTheme();
  return (
    <>
      <Header />
      <WelcomeBroad />
      <NewestPost />
    </>
  );
}
