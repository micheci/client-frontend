// import React from "react";

// interface HeroProps {
//   imageSrc: string;
//   leftText: string;
//   rightText: string;
// }

// const Hero = ({ imageSrc, leftText, rightText }: HeroProps) => {
//   return (
//     <section
//       className="relative flex items-center justify-between w-full h-[400px] bg-cover bg-center"
//       style={{ backgroundImage: `url(${imageSrc})` }}
//     >
//       {/* Left Text */}
//       <div className="absolute left-0 p-8 text-white max-w-[45%]">
//         <h2 className="text-3xl font-bold">{leftText}</h2>
//       </div>

//       {/* Right Text */}
//       <div className="absolute right-0 p-8 text-white max-w-[45%] text-right">
//         <p className="text-lg">{rightText}</p>
//       </div>
//     </section>
//   );
// };

// export default Hero;
import React from "react";

const Hero = ({}) => {
  return (
    <section className="flex flex-col items-center justify-center min-h-[50vh] text-center p-4 md:flex-row md:justify-center md:gap-16">
      <div className="text-lg md:text-2xl font-bold text-gray-800">
        Find your dream home today
      </div>
      <div className="w-40 h-40 md:w-60 md:h-60 rounded-full overflow-hidden flex items-center justify-center border-4 border-gray-300">
        <img
          src="your-image-url.jpg"
          alt="Dream Home"
          className="w-full h-full object-cover"
        />
      </div>
      <div className="text-lg md:text-2xl font-bold text-gray-800">
        Default Right Text
      </div>
    </section>
  );
};

export default Hero;
