import React from "react";
import Image from "next/image";
import handleTimePosted from "@/lib/utils";
type post = {
  slug: string;
  title: string;
  content: string;
  tag: string;
  timeAdded: Date;
  author: string;
};

export default function NewestPost() {
  const newPost: post = {
    slug: "where-to-watch-john-wick",
    title: "Where To Watch Jonh Wick",
    content:
      "content content content content content content content content content content content content content content content content content content content content content content content content content content content content content content content content content content content content content content content content content content content content content content content content content content content content content content content content content content content content content content content content content content content content content content content content content content content content content content content content content content content content content content content content content content content content content content content content content content content content content content content content content content content content content content content content content content ",
    tag: "Movie",
    timeAdded: new Date("Mon Dec 23 2024 18:25:53"),
    author: "Nefflix",
  };

  return (
    <div className="flex flex-col justify-between py-10 gap-3 md:flex-row md:gap-10 items-center">
      <div className="relative max-w-[500px] w-full md:w-[45%] aspect-[2/1.5] rounded-md overflow-hidden">
        <Image
          className="object-cover"
          src="https://utfs.io/f/bPhaaUnAzvtn2DeFJkIeCsFcA5kDoGaNt34SjW7HvnJRX0gu"
          fill
          alt=""
        />
      </div>
      <div className="w-full max-w-[500px] md:w-[55%] flex flex-col gap-3 p-3">
        <div className="flex gap-3 items-center">
          <span className="text-red-500">{newPost.author}</span>
          <span className="w-1 h-1 bg-black rounded-full mr-2 items-center"></span>
          <div>{handleTimePosted(newPost.timeAdded)}</div>
        </div>
        <h1 className="text-4xl">title title title title title title</h1>
        <p className=" line-clamp-3">
          content content content content content content content content
          content content content content content content content content
          content content content content content content content content
          content content content content content content content content
          content content content content content content content content
          content content content content content content content content
        </p>
        <div className="text-red-700">tag</div>
      </div>
    </div>
  );
}
