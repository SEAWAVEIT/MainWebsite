import React from "react";
import logo1 from "../../assets/logos/1.webp";
import logo2 from "../../assets/logos/2.webp";
import logo3 from "../../assets/logos/3.webp";
import logo4 from "../../assets/logos/4.webp";
import logo5 from "../../assets/logos/5.webp";
import logo6 from "../../assets/logos/6.webp";
import logo7 from "../../assets/logos/7.webp";
import logo8 from "../../assets/logos/8.webp";
import logo9 from "../../assets/logos/9.webp";
import logo10 from "../../assets/logos/10.webp";
import logo11 from "../../assets/logos/11.webp";
import logo12 from "../../assets/logos/12.webp";
import logo13 from "../../assets/logos/13.webp";
import logo14 from "../../assets/logos/14.webp";
import logo15 from "../../assets/logos/15.webp";
import logo16 from "../../assets/logos/16.webp";
import logo17 from "../../assets/logos/17.webp";
import logo18 from "../../assets/logos/18.webp";
import logo19 from "../../assets/logos/19.webp";
import logo20 from "../../assets/logos/20.webp";
import logo21 from "../../assets/logos/21.webp";
import logo22 from "../../assets/logos/22.webp";
import logo23 from "../../assets/logos/23.webp";
import logo24 from "../../assets/logos/24.webp";
import logo25 from "../../assets/logos/25.webp";
import logo26 from "../../assets/logos/26.webp";
import logo27 from "../../assets/logos/27.webp";
import logo28 from "../../assets/logos/28.webp";
import logo29 from "../../assets/logos/29.webp";
import logo30 from "../../assets/logos/30.webp";
import logo31 from "../../assets/logos/31.webp";
import logo32 from "../../assets/logos/32.webp";
import logo33 from "../../assets/logos/33.webp";
import logo34 from "../../assets/logos/34.webp";
import logo35 from "../../assets/logos/35.webp";
import logo36 from "../../assets/logos/36.webp";
import "./../../index.css";

const logos = [
  { id: 1, src: logo1, alt: "Image 1" },
  { id: 2, src: logo2, alt: "Image 2" },
  { id: 3, src: logo3, alt: "Image 3" },
  { id: 4, src: logo4, alt: "Image 4" },
  { id: 5, src: logo5, alt: "Image 5" },
  { id: 6, src: logo6, alt: "Image 6" },
  { id: 7, src: logo7, alt: "Image 7" },
  { id: 8, src: logo8, alt: "Image 8" },
  { id: 9, src: logo9, alt: "Image 9" },
  { id: 10, src: logo10, alt: "Image 10" },
  { id: 11, src: logo11, alt: "Image 11" },
  { id: 12, src: logo12, alt: "Image 12" },
  { id: 13, src: logo13, alt: "Image 13" },
  { id: 14, src: logo14, alt: "Image 14" },
  { id: 15, src: logo15, alt: "Image 15" },
  { id: 16, src: logo16, alt: "Image 16" },
  { id: 17, src: logo17, alt: "Image 17" },
  { id: 18, src: logo18, alt: "Image 18" },
  { id: 19, src: logo19, alt: "Image 19" },
  { id: 20, src: logo20, alt: "Image 20" },
  { id: 21, src: logo21, alt: "Image 21" },
  { id: 22, src: logo22, alt: "Image 22" },
  { id: 23, src: logo23, alt: "Image 23" },
  { id: 24, src: logo24, alt: "Image 24" },
  { id: 25, src: logo25, alt: "Image 25" },
  { id: 26, src: logo26, alt: "Image 26" },
  { id: 27, src: logo27, alt: "Image 27" },
  { id: 28, src: logo28, alt: "Image 28" },
  { id: 29, src: logo29, alt: "Image 29" },
  { id: 30, src: logo30, alt: "Image 30" },
  { id: 31, src: logo31, alt: "Image 31" },
  { id: 32, src: logo32, alt: "Image 32" },
  { id: 33, src: logo33, alt: "Image 33" },
  { id: 34, src: logo34, alt: "Image 34" },
  { id: 35, src: logo35, alt: "Image 35" },
  { id: 36, src: logo36, alt: "Image 36" },
];

function Hero02() {
  return (
    <div className="bg-white h-auto py-20">
      <div className="flex flex-col justify-center">
        <h1 className="text-3xl text-center ">Trusted Partners</h1>
        <div className="flex items-center justify-center my-6">
          <div className="lino "></div>
        </div>
        <p className="text-base text-center font-light my-2">WE AIM TO PROVIDE QUALITY SERVICES WHICH HAS LED TO PARTNER OURSELVES WITH THE LEADING INDUSTRY LEADERS</p>
      </div>
      <div className="flex overflow-hidden space-x-16 group my-4">
        {/* First set of logos */}
        <div className="flex space-x-16 animate-loop-scroll group-hover:paused">
          {logos.map((logo) => (
            <img
              key={logo.id}
              loading="lazy"
              src={logo.src}
              className="h-28 hover:h-32"
              alt={logo.alt}
            />
          ))}
        </div>

        {/* Second set of logos for infinite loop */}
        {/* <div className="flex space-x-16 animate-loop-scroll group-hover:paused">
          {logos.map((logo) => (
            <img key={logo.id} loading="lazy" src={logo.src} className="h-28" alt={logo.alt} />
          ))}
        </div> */}
      </div>
    </div>
  );
}

export default Hero02;
