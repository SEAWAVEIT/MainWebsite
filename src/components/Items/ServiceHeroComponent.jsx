import React from 'react'

function ServiceHeroComponent({ imageSrc, Text }) {
    return (
        <div className="relative bg-black rounded-xl overflow-hidden mb-6 md:mb-8">
            <img
                className="absolute inset-0 w-full h-full object-cover opacity-30"
                src={imageSrc}
                alt="Land Freight"
            />
            <div className=" relative flex justify-center items-center h-60 md:h-96">
                <div className="logo-container GradientText">
                    <h1 id="page-logo" className="text-white  md:font-medium font-semibold text-3xl md:text-6xl z-0 text-center">{Text}</h1>
                </div>
            </div>
        </div>
    )
}

export default ServiceHeroComponent