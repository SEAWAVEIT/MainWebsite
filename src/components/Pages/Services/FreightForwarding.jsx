import React from "react";
import freightForward from "../../../assets/services/freightForward.jpg";
import ServiceItem from "./ServiceItem";
import ServiceHead from "../../Items/ServiceHeroComponent"
import freight from "../../../assets/video/FREIGHTFORWARDING.mp4"
import airfreight from "../../../assets/freightforwarding/air-freight.webp"
import seafreight from "../../../assets/freightforwarding/sea-freight.webp"


function FreightForwarding() {
    return (
        <div className="bg-white p-4 md:p-8">
            <ServiceHead imageSrc={freightForward} Text={"Freight Forward"} />

            <div className="px-4 md:px-20 mb-6 md:mb-8">
                <div className="mb-6 md:mb-8">
                    <p>
                        Freight forwarding consists of strategic logistics
                        planning and execution for the international movement of
                        goods, on behalf of shippers. Specifically, a freight
                        forwarder will carry out freight rate negotiations,
                        container tracking, customs documentation, and freight
                        consolidation, among other tasks.
                    </p>
                </div>

            </div>
            <div className="flex justify-center items-center md:flex-row flex-col">
                <div className="w-full ">
                    <div className="px-4 md:px-20 mb-6 md:mb-8 flex justify-center">
                        <video src={freight} autoPlay loop muted className="w-full md:w-96 h-auto rounded-lg " />
                    </div>
                </div>
                <div>
                    <h2 className="text-xl md:text-2xl my-2">It Requires:</h2>

                    <ServiceItem text="Expert knowledge of customs standards and protocols,
                            which vary country to country and even port to port"/>
                    <ServiceItem text="Agile problem-solving, for when the weather,
                            technology or human nature fail to cater to timely
                            travels, as they are all wont to do"/>
                    <ServiceItem text="An instinct for network building, because in many
                            ways, a supply chain is only as strong as the
                            parties propelling it."/>
                    <ServiceItem text="Also need a license to do it." />
                </div>
            </div>
            <div className="mb-6 md:mb-8 md:px-6 md:py-4">
                <div className="text-center text-2xl md:text-4xl my-4">
                    Air Freight
                </div>
                <div className="lineEffect mb-6 md:mb-8 flex justify-center text-center">
                    <div className="lino"></div>
                </div>
                <div className="flex flex-col-reverse md:flex-row md:gap-4 items-center">
                    <div className="w-full md:w-1/2 flex flex-col md:pr-6 mb-4 md:mb-0">
                        <p className="my-2">
                            <span className="GradientText font-semibold">SEAWAVE</span> provides insured air freight services, ensuring safe and timely delivery of cargo worldwide. As an air cargo agent, <span className="GradientText font-semibold">SEAWAVE</span> offers customized services for all types of air cargo, including general cargo, vehicles, heavy weight, and odd-dimensional items. With extensive knowledge of regulations and facilities in various countries, <span className="GradientText font-semibold">SEAWAVE</span> facilitates global exports across all five continents, offering competitive airfreight rates and exceptional service standards.
                        </p>
                        <div>
                            <h2 className="text-lg md:text-xl my-2">
                                Services:
                            </h2>
                            <ServiceItem text="Air Freight Booking" />
                            <ServiceItem text="World Wide Consolidation" />
                        </div>
                    </div>
                    <div className="w-full md:w-1/2 flex justify-center items-center">
                        <img
                            src={airfreight}
                            className="rounded-lg filter drop-shadow-md"
                            alt="Air Freight"
                        />
                    </div>
                </div>
            </div>

            <div className="mb-2 md:mb-8 md:px-6 md:py-1">
                <div className="text-center text-2xl md:text-4xl my-4">
                    Sea Freight
                </div>
                <div className="lineEffect mb-6 md:mb-8 flex justify-center text-center">
                    <div className="lino"></div>
                </div>
                <div className="flex flex-col-reverse md:flex-row md:gap-4 items-center">
                    <div className="w-full md:w-1/2 flex justify-center items-center mb-4 md:mb-0">
                        <img
                            src={seafreight}
                            className="h-[300px] md:h-[450px] w-[320px] md:w-[480px] rounded-lg filter drop-shadow-md"
                            alt="Sea Freight"
                        />
                    </div>
                    <div className="w-full md:w-1/2 flex flex-col md:pl-2">
                        <p className="mb-4">
                            <span className="GradientText font-semibold">SEAWAVE</span> offers comprehensive sea freight services, handling various types of cargo from the shipper's location to any port. Known for its strong presence in the shipping industry, <span className="GradientText font-semibold">SEAWAVE</span> excels in rate negotiations and has special arrangements with leading liners. They provide ocean freight services for LCL, FCL, and Break-Bulk Cargo, supported by a fleet of container vehicles and trucks for inland transportation.
                        </p>
                        <div className="my-2">
                            <h2 className="text-lg md:text-xl my-2">
                                Services:
                            </h2>
                            <ServiceItem text="Freight Booking" />
                            <ServiceItem text="World Wide Consolidation" />
                            <ServiceItem text="Handling FCL’s & LCL’s shipments world wide" />
                            <ServiceItem text="NVOCC" />
                            <ServiceItem text="Handling of Projects & Break Bulk" />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default FreightForwarding;
