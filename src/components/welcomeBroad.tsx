import React from "react";
import { PencilLine, Film, Lightbulb, Book } from "lucide-react";

export default function WelcomeBroad() {
  return (
    <div className="bg-gray-200 rounded-md justify-center items-center flex flex-col py-4">
      <link href="https://emoji-css.afeld.me/emoji.css" rel="stylesheet"></link>
      <h1 className="tracking-widest">WELCOME TO BULETIN</h1>
      <p className=" text-xl">
        Craft narative <i className="em em-writing_hand" aria-label=""></i> that
        ignite <span className="text-red-600">inspiration</span>{" "}
        <i className="em em-bulb" aria-label="ELECTRIC LIGHT BULB"></i>
      </p>
      <p className="text-xl">
        <span className="text-red-600">knowledge</span>{" "}
        <i className="em em-closed_book" aria-label="CLOSED BOOK"></i>, and{" "}
        <span className="text-red-600">entertainment </span>
        <i className="em em-film_frames" aria-label=""></i>
      </p>
    </div>
  );
}
