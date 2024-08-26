import React, { useRef } from 'react';
import { Link } from 'react-router-dom';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
// import './dna.css';
function Loader() {
    return (
        <div className="loader-background">
            <div className="spinnerPairHolder">
                {Array.from({ length: 10 }).map((_, index) => (
                    <div key={index} className="spinnerPair">
                        <div className="spinnerPairCercle"></div>
                        <div className="spinnerPairCercle"></div>
                    </div>
                ))}
            </div>
        </div>
    );
}


function Hero01() {
    const MainHeadingEffect = useRef();

    useGSAP(() => {
        gsap.from(MainHeadingEffect.current.children, {
            opacity: 0,
            duration: 1,
            y: 40,
            delay: 0.4,
            stagger: 0.4,
        });
    });

    return (
        <div className="Hero01 relative h-auto bg-white z-0 w-full px-4 md:px-8 overflow-hidden">
            {/* Loader in background */}
            <Loader />

            {/* Main content */}
            <div ref={MainHeadingEffect} className="relative z-10 text-center mt-8 mb-4">
                {/* <div className="text-3xl sm:text-6xl md:text-7xl lg:text-8xl font-medium">
                    <h1 className="whitespace-nowrap py-2" data-text="Full Sustainable">Full Sustainable</h1>
                    <h1 className="whitespace-nowrap py-4">Cargo Solution</h1>
                </div>
                <div className="text-base sm:text-lg md:text-xl lg:text-2xl mt-8 mb-4">
                    <p>We continue to pursue that same vision in today's complex,</p>
                    <p>uncertain world, working every day to earn our customers’</p>
                </div> */}
                {/* <div className="flex flex-col md:flex-row justify-center mt-6 space-y-4 md:space-y-0 md:space-x-8">
                    <div className="flex justify-center md:mr-8">
                        <Link to="#" className="relative inline-block px-4 py-2 font-medium group">
                            <span className="absolute inset-0 w-full h-full transition duration-200 ease-out transform translate-x-1 translate-y-1 bg-black group-hover:-translate-x-0 group-hover:-translate-y-0"></span>
                            <span className="absolute inset-0 w-full h-full bg-white border-2 border-black group-hover:bg-white"></span>
                            <span className="relative text-black group-hover:text-black">Button Text</span>
                        </Link>
                    </div>
                    <div className="flex flex-col md:flex-row items-center justify-center">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-6 h-6 md:w-10 md:h-10">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
                            <path strokeLinecap="round" strokeLinejoin="round" d="M15.91 11.672a.375.375 0 0 1 0 .656l-5.603 3.113a.375.375 0 0 1-.557-.328V8.887c0-.286.307-.466.557-.327l5.603 3.112Z" />
                        </svg>
                        <p className="mt-2 md:mt-0 md:ml-2">Watch More</p>
                    </div>
                </div> */}
            </div>
        </div>
    );
}

export default Hero01;
