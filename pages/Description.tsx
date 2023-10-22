import { Button } from "@/components/ui/button";
import React from "react";
import IMG1 from "@/public/Pict1.webp";
import IMG2 from "@/public/Pict2.webp";
import IMG3 from "@/public/Pict3.webp";
import IMG4 from "@/public/Pict4.webp";
import Image from "next/image";

export default function Description() {
  return (
    <div className="flex h-auto w-full px-5 flex-col bg-[#d9dad9]  md:py-10 lg:h-auto">
      <div className="max-w-[1700px] mx-auto my-5 md:pb-10 lg:my-0">
        <div className="flex flex-col justify-center items-center text-center gap-5 lg:hidden">
          <h1 className="text-3xl font-bold">PREMIUM WEB ARCHITECTURE</h1>
          <p>
            COSA Web Architects specialize in crafting impeccably designed
            websites that seamlessly blend aesthetics with functionality. Our
            expert team ensures the front-end design is visually captivating,
            while our back-end development guarantees flawless performance with
            zero structural errors. Explore our portfolio to witness the
            artistry and precision we bring to every digital project.
          </p>
          <Button variant="outline" size="sm">
            Start A Project!
          </Button>
        </div>
        <div className="flex flex-col gap-5 mt-5 lg:hidden">
          <Image src={IMG1} alt="pict" />
          <Image src={IMG2} alt="pict" />

          <div className="md:flex gap-5">
            <Image src={IMG3} alt="pict" />
            <Image src={IMG4} alt="pict" />
          </div>
        </div>
        {/* Lg responsive */}
        <div className="hidden lg:grid lg:grid-cols-3  gap-5 overflow-hidden h-[800px]">
          <div className="flex flex-col gap-5">
            <Image src={IMG1} alt="pict" />
            <div className=" hidden lg:flex lg:flex-col justify-center items-center text-center gap-5">
              <h1 className="text-3xl font-bold">PREMIUM WEB ARCHITECTURE</h1>
              <p>
                COSA Web Architects specialize in crafting impeccably designed
                websites that seamlessly blend aesthetics with functionality.
                Our expert team ensures the front-end design is visually
                captivating, while our back-end development guarantees flawless
                performance with zero structural errors. Explore our portfolio
                to witness the artistry and precision we bring to every digital
                project.
              </p>
              <Button variant="outline" size="sm">
                Start A Project!
              </Button>
            </div>
          </div>
          <div className="flex flex-col gap-5">
            <Image src={IMG2} alt="pict" />
            <Image src={IMG4} alt="pict" />
          </div>
          <Image src={IMG3} alt="pict" />
        </div>
      </div>
    </div>
  );
}
