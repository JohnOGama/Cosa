import Image from "next/image";
import React from "react";
import LOGO from "@/public/Black.png";

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
          <div className="bg-black/30 relative">
            <Image src={LOGO} alt="LOGO" />
          </div>
        </div>
      </div>
    </div>
  );
}
