import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export default function handleTimePosted(datePosted: Date) {
  const currentDate: Date = new Date();
  let postedDateDifferent: String = "";
  console.log(
    (currentDate.getTime() - datePosted.getTime()) / (1000 * 60 * 60 * 24)
  );
  //display when posted more than 30 day
  if (
    (currentDate.getTime() - datePosted.getTime()) / (1000 * 60 * 60 * 24) >=
    30
  ) {
    postedDateDifferent =
      datePosted.getDate() +
      "/" +
      (datePosted.getMonth() + 1) +
      "/" +
      datePosted.getFullYear();
    return postedDateDifferent;
  }
  //display when posted more than 1 day
  if (
    (currentDate.getTime() - datePosted.getTime()) / (1000 * 60 * 60 * 24) >=
    1
  ) {
    return (
      (
        (currentDate.getTime() - datePosted.getTime()) /
        (1000 * 60 * 60)
      ).toFixed(0) + " days ago"
    );
  }

  // posted more than 1 hour ago
  if ((currentDate.getTime() - datePosted.getTime()) / (1000 * 60) >= 60) {
    console.log("minu");
    return (
      (
        (currentDate.getTime() - datePosted.getTime()) /
        (1000 * 60 * 60)
      ).toFixed(0) +
      " " +
      "hours ago"
    );
  }
  //posted in minute ago
  postedDateDifferent =
    ((currentDate.getTime() - datePosted.getTime()) / (1000 * 60)).toFixed(0) +
    " " +
    "minutes ago";
  return postedDateDifferent;
}
