import React from "react";
import ServiceItem from "./ServiceItem";
import logisticsDesign from "../../../assets/services/logisticDesign.jpg";
import ServiceHead from "../../Items/ServiceHeroComponent"
import logisticsvideo from "../../../assets/video/LogisticsDesign.mp4"

function LogisticsDesign() {
	return (
		<div className="bg-white p-4 md:p-8">
			<ServiceHead Text={"logistics Design"} imageSrc={logisticsDesign} />
			<div className="flex flex-col md:flex-row gap-4 items-center px-4 md:px-20 mb-6 md:mb-8">
				<div className="md:w-1/2 ">
					<p>
						The logistics cost is very high when it comes to making
						products competitive in the market.
					</p>
					<p>
						Logistics cost directly relates to time, mode of
						transportation, route of transport, and selection of
						carriers for export and import.
					</p>
					<p>
						Our goal is to make products competitive by providing design
						logistics.
					</p>

				</div>
				<div className=" px-4 md:px-20 mb-6 md:mb-8 flex justify-center">
					<video src={logisticsvideo} autoPlay loop muted className="w-full md:w-96 h-auto rounded-lg " />
				</div>
			</div>

			<div className="flex md:flex-row justify-center items-center flex-col">

				<div className="px-4 md:px-8">
					<p>
						<span className="GradientText">
							SEAWAVE FORWARDING & LOGISTICS PVT. LTD.
						</span>{" "}
						designs products for manufacturing, packaging, shipping,
						warehousing, merchandising, and return packing. Typically,
						it includes objectives such as scale, cost efficiency,
						environmental impact, security, and marketing.
					</p>
					<div>
						<h2 className="text-xl md:text-2xl my-2">
							Values of Logistics Design:
						</h2>


						<ServiceItem text="It reduces the costs & environmental impact." />
						<ServiceItem text="Simplifying planning & improving operational
							efficiency."/>
						<ServiceItem text="Marketing benefits such as products that look good
							on shelves."/>

					</div>
				</div>
			</div>
		</div>
	);
}

export default LogisticsDesign;
