import React from "react";
import Image from "next/image";

const Hero = () => {
  return (
    <div className="relative w-full h-[500px] flex justify-center items-end">
      <Image
        src="/images/realestateversion2.png"
        alt="Micheci"
        fill
        className="object-contain"
        style={{ objectPosition: "center bottom" }}
      />
    </div>
  );
};

export default Hero;
