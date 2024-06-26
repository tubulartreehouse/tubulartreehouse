"use client";
import ZdogSmiley from "@/components/ZdogSmiley";
import Image from "next/image";

export default function Home() {
  return (
    <div className="mx-4 md:mx-16">
      <div className="flex flex-col md:flex-row items-center">
        <div className="hovering-image">
          <Image 
            src={'https://res.cloudinary.com/dcvehjjfy/image/upload/v1713804415/me_qp2tst.png'}
            width={350}
            height={300}
            alt="hero-picture"
          />
        </div>
        <span className="text-textColor text-center text-4xl md:text-5xl mt-4 md:mt-0 md:ml-4">
          Hi, I’m Joel, and this is the Tubular Treehouse. Welcome in!
        </span>
      </div>
      <div className="flex items-center justify-center">
        <ZdogSmiley />
      </div>
    </div>
  );
}
