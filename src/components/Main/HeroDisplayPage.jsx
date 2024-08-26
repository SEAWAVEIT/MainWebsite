import React, { useRef, useEffect } from 'react';
import { Link } from 'react-router-dom';
import gsap from 'gsap';
import brochure from "../../../broucher/SeawaveBroucher.pdf";
import { useGSAP } from '@gsap/react';
import heroLogo from "../../assets/seawave/seawavewhitetextlogo.png";
import instagram from "../../assets/socialMedia/instagram.png";
import facebook from "../../assets/socialMedia/facebook.png";
import linkedin from "../../assets/socialMedia/linkedin.png";

function HeroDisplayPage() {
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

    useEffect(() => {
        const layers = document.querySelectorAll('.background-layer');
        let current = 0;
        const total = layers.length;

        const changeImage = () => {
            layers.forEach((layer, index) => {
                layer.style.opacity = index === current ? '1' : '0';
            });
            current = (current + 1) % total;
        };

        const interval = setInterval(changeImage, 5000); // Change every 5 seconds

        return () => clearInterval(interval); // Cleanup interval on component unmount
    }, []);

    return (
        <div className="centerHeroWhole" ref={MainHeadingEffect}>
            <div className="background-layer"></div>
            <div className="background-layer"></div>
            <div className="background-layer"></div>
            <div className="background-layer"></div>
            <div className="background-layer"></div>
            <div className="background-layer"></div>

            <div className="centerHero h-screen flex pb-20 justify-center items-center flex-col relative">
                <div className="mb-8">
                    <img className="md:h-36 h-20" src={heroLogo} alt="Hero Logo" />
                </div>
                <div className="my-2">
                    <h1 className="md:text-6xl text-xl opacity-80 text-white text-center font-medium">
                        Welcome to Seawave
                    </h1>
                </div>
                <div className="my-2">
                    <h4 className="md:text-4xl text-xl text-center GradientText font-medium">
                        THE WAVES ARE ALWAYS HIGH
                    </h4>
                </div>
                <div>
                    <h5 className="md:text-3xl text-[#9A4278] text-lg text-center">
                        Providing fast & affordable cargo services SINCE 2005
                    </h5>
                </div>
                <div className="my-4 flex justify-center items-center gap-4 md:flex-row flex-col">
                    {/* <div className="flex justify-center md:mr-8 opacity-80">
                        <Link to="#" className="relative inline-block px-4 py-2 font-medium group">
                            <span className="absolute inset-0 w-full h-full transition duration-200 ease-out transform translate-x-1 translate-y-1 bg-black group-hover:-translate-x-0 group-hover:-translate-y-0"></span>
                            <span className="absolute inset-0 w-full h-full bg-white border-2 border-black group-hover:bg-white"></span>
                            <span className="relative text-black group-hover:text-black">Get A Free Quote</span>
                        </Link>
                    </div> */}
                    <div className="flex justify-center md:mr-8 opacity-80">
                        <Link to={brochure} target='_blank' className="relative inline-block px-4 py-2 font-medium group">
                            <span className="absolute inset-0 w-full h-full transition duration-200 ease-out transform translate-x-1 translate-y-1 bg-black group-hover:-translate-x-0 group-hover:-translate-y-0"></span>
                            <span className="absolute inset-0 w-full h-full bg-white border-2 border-black group-hover:bg-white"></span>
                            <span className="relative text-black group-hover:text-black">See Brochure</span>
                        </Link>
                    </div>
                    <div className="flex justify-center md:mr-8 opacity-80">
                        <Link to="#" className="relative inline-block px-3 py-1 font-medium group">
                            <span className="absolute inset-0 w-full h-full transition duration-200 ease-out transform translate-x-1 translate-y-1 bg-black group-hover:-translate-x-0 group-hover:-translate-y-0"></span>
                            <span className="absolute inset-0 w-full h-full bg-white border-2 border-black group-hover:bg-white"></span>
                            <span className="relative text-white flex justify-center items-center group-hover:text-black">
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="black" className="w-5 h-5 md:w-8 md:h-8">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M15.91 11.672a.375.375 0 0 1 0 .656l-5.603 3.113a.375.375 0 0 1-.557-.328V8.887c0-.286.307-.466.557-.327l5.603 3.112Z" />
                                </svg>
                                <p className="md:text-lg text-black opacity-80 text-sm md:ml-2">Watch More</p>
                            </span>
                        </Link>
                    </div>
                </div>


                <div className="socialMedia flex items-center absolute -bottom-40 right-0 p-4 gap-2">
                    <a target='_blank' href="https://www.facebook.com/seawavelogistics" className="socialIcon">
                        <img src={facebook} alt="Facebook" className='h-6' />
                    </a>
                    <a target='_blank' href="https://www.instagram.com/seawavelogistics/" className="socialIcon">
                        <img src={instagram} alt="Instagram" className='h-8' />
                    </a>
                    <a target='_blank' href="https://www.linkedin.com/company/seawave-forwarding-logistics-pvt-ltd/" className="socialIcon">
                        <img src={linkedin} alt="LinkedIn" className='h-5' />
                    </a>
                </div>
            </div>
        </div>
    );
}

export default HeroDisplayPage;
