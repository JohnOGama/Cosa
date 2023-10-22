import LOGO from "@/public/Logo.webp";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import Intro from "@/pages/Intro";
import Description from "@/pages/Description";
import Quotes from "@/pages/Quotes";
import { Code } from "lucide-react";
import CoDes from "@/pages/CoDes";
import LastPage from "@/pages/LastPage";

export default function Home() {
  return (
    <>
      <main className="bg-black h-screen flex flex-col  items-center pt-[250px] md:h-[600px] lg:h-screen lg:justify-center lg:pt-0 relative">
        <div className="flex flex-col items-center gap-5 md:flex-row md:items-center lg:gap-[100px]">
          <Image
            src={LOGO}
            alt="LOGO"
            className="w-[300px] md:w-[350px] lg:w-[700px]"
            quality={100}
          />
          <h1 className="text-white text-center md:mb-10 md:text-left lg:text-xl lg:mb-[95px]">
            Integrated Marketing
            <br /> Business Solutions
            <br /> and Web Architect Group
          </h1>
        </div>
        <Button variant="outline" size="sm" className="absolute bottom-10">
          Start A Project!
        </Button>
      </main>
      <section>
        <Intro />
        <Description />
        <Quotes />
        <CoDes />
        <LastPage />
      </section>
    </>
  );
}
