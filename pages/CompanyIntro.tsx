import Image from "next/image";
import React from "react";
import LOGO from "@/public/Logo.webp";

export default function CompanyIntro() {
  return (
    <div className="flex h-screen w-full px-5 flex-col bg-[#d9dad9] md:h-[500px] md:py-10 lg:h-screen">
      <div className="max-w-[1200px] mx-auto">
        <div className="md:grid md:grid-cols-2 md:gap-5 lg:gap-[50px]">
          <div className="">
            <h1 className="text-4xl font-black my-10 text-center md:text-left">
              COSA FUTURA <br />
              VISIONE
            </h1>
            <p className="text-center md:text-left">
              Your industry partner in integrated marketing and web
              architecture, dedicated to empowering businesses worldwide. We
              envision a future where your business, regardless of size or
              industry, can seamlessly connect with your intended customer base.
              This connection fuels growth, helping scale industries, dominate
              fields, and leave an indelible mark on the global business
              landscape.
            </p>
          </div>
          <div className="bg-black pt-10 relative mt-10">
            <Image src={LOGO} alt="LOGO" />
            <span className="w-full h-1 bg-white absolute bottom-[100px] md:bottom-[150px]"></span>
            <h1 className="uppercase text-white font-black px-4 mb-3">
              Integrated Marketing % <br />
              advertising business solutions <br />
              Web architect group
            </h1>
          </div>
        </div>
      </div>
    </div>
  );
}
