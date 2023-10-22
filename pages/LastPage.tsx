import { Button } from "@/components/ui/button";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import girl from "@/public/girl.jpg";

export default function LastPage() {
  return (
    <div className="flex h-[450px] w-full px-5 flex-col bg-black/40  md:py-10 lg:h-[700px] relative">
      <div className="max-w-[1700px] mx-auto my-5 md:pb-10 lg:my-0">
        <div className="grid grid-cols-1 gap-5 text-white lg:grid-cols-3 ">
          <div className="flex flex-col justify-center items-center text-center gap-3 lg:pt-[200px]">
            <h1 className="lg:text-4xl font-semibold">
              DOMINATE YOUR INDUSTRY
            </h1>
            <Button className="md:w-[400px]" variant="secondary">
              Start A Project!
            </Button>
            <Link className="underline" href="#">
              or click here to drop an email
            </Link>
          </div>
          <div className="text-center lg:pt-[200px]">
            <h1 className="lg:text-2xl font-semibold">
              British Columbia, CA Manila, PH New York, USA
            </h1>
          </div>
          <div className="text-center lg:pt-[200px]">
            <h1 className="lg:text-2xl font-semibold">
              cosa.integrated@gmail.com fb.com/cosa.integrated
              instagram/cosa.integrated +1 236 238 2817 +63 976 270 5426
            </h1>
          </div>
        </div>
        <Image
          src={girl}
          alt="gasd"
          className="absolute top-0 w-full left-0 h-[450px] lg:h-[700px] object-cover -z-[1] opacity-[0.8] object-top"
        />
      </div>
    </div>
  );
}
