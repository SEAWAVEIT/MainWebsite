import React, { useEffect, useRef } from "react";
import { Link } from "react-router-dom";

function Hero04() {
  // const sectionRef = useRef(null);

  // useEffect(() => {
  //   const observer = new IntersectionObserver(
  //     ([entry]) => {
  //       if (entry.isIntersecting) {
  //         sectionRef.current.classList.add("active");
  //       } else {
  //         sectionRef.current.classList.remove("active");
  //       }
  //     },
  //     {
  //       root: null,
  //       rootMargin: "0px",
  //       threshold: 0.5, // Adjust this threshold as needed
  //     }
  //   );

  //   if (sectionRef.current) {
  //     observer.observe(sectionRef.current);
  //   }

  //   return () => {
  //     if (sectionRef.current) {
  //       observer.unobserve(sectionRef.current);
  //     }
  //   };
  // }, []);

  return (
    <div
      // ref={sectionRef}
      className="Hero04 opacity-1 h-auto bg-white p-4 sm:p-8 md:p-12 lg:p-16 xl:p-20 flex flex-col justify-center items-center transition-opacity duration-500"
    >
      <div className="text-start flex flex-row md:flex-col md:justify-center">
        <div>
          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-semibold mb-4 text-center md:text-start">
            Safe reliable
          </h1>
          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-semibold md:ml-4 text-center md:text-start">
            Logistic Solutions
          </h1>
        </div>
        {/* <div className="hidden md:block">
          <img

            src="https://uploads-ssl.webflow.com/63ede56f5ceca72669fcaced/63f1f1dde1e45ab1ef4ad094_mini%20track.png"
            alt="small truck"
            className=" w-[286px] md:p-4 p-8  h-auto roll-out-in"
          // style={{ position: "relative" }}
          />
        </div> */}
      </div>


      <div className="flex flex-row items-end justify-end my-12 sm:my-16 md:my-20 lg:my-24 xl:my-28 text-center md:text-start md:flex-col">
        {/* <div className="relative hidden md:block">
          <img 
           src="https://uploads-ssl.webflow.com/63ede56f5ceca72669fcaced/63f1f1de63ea2217e333ebca_track.png" alt="" />
        </div> */}
        <div>
          <div className="leading-loose mb-8">
            <p>Road transportation has a crucial role.</p>
            <p>Coordinated transportation in the countries of origin destination</p>
            <p>makes all the difference.</p>
          </div>
          <div>
            <button className="relative inline-block px-6 py-3 font-medium group">
              <Link
                to="#"
                className="absolute inset-0 w-full h-full transition duration-200 ease-out transform translate-x-1 translate-y-1 bg-black group-hover:-translate-x-0 group-hover:-translate-y-0"
              ></Link>
              <span className="absolute inset-0 w-full h-full bg-white border-2 border-black group-hover:bg-white"></span>
              <span className="relative text-black group-hover:text-black">Button Text</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Hero04;
