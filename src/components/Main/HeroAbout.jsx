import React from 'react';
import { Link } from "react-router-dom"
import ServiceItem from "../Pages/Services/ServiceItem";

function HeroAbout() {
    return (
        <div className='bg-white px-4 py-4 sm:px-8 md:px-16'>
            <div className='flex flex-col items-center gap-4'>
                <h2 className='text-2xl sm:text-3xl md:text-4xl text-center'>About Us</h2>
                <div className='lino w-16 sm:w-24 md:w-32'></div>
            </div>
            <div className='flex flex-col md:flex-row items-start my-6 md:my-8 justify-center gap-6 md:gap-8'>
                <div className='w-full md:w-1/2 flex flex-col gap-4'>
                    <div><p className='text-base sm:text-lg md:text-base'>
                        <span className='GradientText font-semibold'>
                            SEAWAVE FORWARDING AND LOGISTICS PVT LTD
                        </span>
                        is a well-established organization providing services such as Custom Clearance, Freight Forwarding, Transportation, Warehousing, Exim Consultancy & Logistics Design.
                    </p>
                        <p className='text-base sm:text-lg md:text-base'>
                            Our company has a well-organized, advanced system and infrastructure to provide complete solutions to our clients under one roof.
                        </p>
                        <p className='text-base sm:text-lg md:text-base'>
                            Our world-class service is built on intensive knowledge of these sectors and is delivered through specialist teams based in our network of dedicated Centres of Expertise at key locations around the world.
                        </p></div>
                    <div>
                        <Link
                            to="about"
                            className="relative inline-block md:px-4 md:py-2 m-8 px-2 py-1 font-medium group"
                        >
                            <span className="absolute inset-0 w-full h-full transition duration-200 ease-out transform -translate-x-1 translate-y-1 bg-black group-hover:-translate-x-0 group-hover:-translate-y-0"></span>
                            <span className="absolute inset-0 w-full h-full bg-white border-2 border-black group-hover:bg-white"></span>
                            <span className="relative text-black group-hover:text-black">
                                <div className="flex items-center gap-2 p-2">
                                    <p>Learn More</p>
                                </div>
                            </span>
                        </Link>
                    </div>
                </div>
                <div className='w-full md:w-1/2 flex flex-col gap-1'>
                    <p className='text-xl sm:text-2xl md:text-2xl font-semibold text-purple-600'>
                        Our Values
                    </p>
                    <ServiceItem text="Integrity" />
                    <ServiceItem text="Transparency" />
                    <ServiceItem text="Respect" />
                    <ServiceItem text="Customer Centrality" />
                    <ServiceItem text="Excellence" />
                    <ServiceItem text="Social and Environmental Responsibility" />
                </div>
            </div>
        </div>
    );
}

export default HeroAbout;
