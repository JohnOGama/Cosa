import Image from "next/image";
import React from "react";
import Bg2 from "@/public/bg2.gif";
import { Button } from "@/components/ui/button";

export default function CoDes() {
  return (
    <div className="flex h-auto w-full px-5 flex-col bg-[#d9dad9] md:auto md:py-10 lg:h-auto relative">
      <div className="max-w-[1700px] mx-auto my-5 md:pb-10 lg:my-0">
        <div className="flex flex-col lg:flex-row  text-center gap-5">
          <div className="flex flex-col gap-5 z-10 text-white  pt-6 lg:pr-[900px] lg:pt-[100px] lg:text-left ">
            <h1 className="font-semibold text-2xl md:text-4xl">
              COSA INTEGRATED MARKETING AND ADVERTISING MANAGEMENT + CONTENT
              CREATION
            </h1>
            <p>
              Empowering business growth with trust at its core. Our expert team
              connects you with your ideal customers, offering tailored industry
              specialists who understand every aspect of your field. We employ a
              multifaceted approach, utilizing social media, Google SEO,
              marketing management, content creation, and strategic Paid
              Advertising to elevate your business, drive sales, and establish
              industry dominance.
            </p>
            <Button
              className="lg:w-[300px] lg:py-5 rounded-sm hidden md:block"
              variant="secondary"
            >
              Start A Project!
            </Button>
          </div>
        </div>
        <Image
          src={Bg2}
          alt="asd"
          className="absolute top-0 left-0 right-0 object-cover opacity-[0.9] h-[500px] w-full"
        />
      </div>
    </div>
  );
}
