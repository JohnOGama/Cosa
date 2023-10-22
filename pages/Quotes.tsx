"use client";
import { CldVideoPlayer } from "next-cloudinary";
import Image from "next/image";
import React from "react";
import BG1 from "@/public/bg1.gif";

export default function Quotes() {
  return (
    <div className="flex h-auto py-10 w-full px-5 flex-col bg-[#d9dad9] md:h-auto md:py-10 lg:h-auto">
      <div className="max-w-[1700px] mx-auto my-5 md:pb-10 lg:my-0">
        <div className="flex flex-col lg:flex-row  text-center lg:text-left gap-5">
          <div className="lg:flex lg:flex-col lg:justify-center">
            <h1 className="font-semibold text-2xl md:text-4xl">
              &quotEmbrace the winds of change, lead with innovation, and define
              a timeless legacy.&quot
            </h1>
            <p>- COSA</p>
          </div>
          <Image src={BG1} alt="ASd" className="w-full" />
        </div>
      </div>
    </div>
  );
}
