import React from "react";
import customClearance from "../../../assets/services/customClearance.webp";
import ServiceItem from "../Services/ServiceItem";
import ServiceHead from "../../Items/ServiceHeroComponent";
import customvideo from "../../../assets/video/CUSTOMCLEARANCE1.mp4";

function CustomClearance() {
	return (
		<div className="bg-white p-4 md:p-8">
			<ServiceHead imageSrc={customClearance} Text={"Custom Clearance"} />

			<div className="px-4 md:px-20 mb-6 md:mb-8">
				<p className="mb-4">
					<span className="GradientText font-semibold">SEAWAVE's</span> own Clearing
					& Forwarding Division,{" "}
					<span className="GradientText font-semibold">
						SEAWAVE FORWARDING AND LOGISTICS PVT LTD
					</span>{" "}
					is an authorised{" "}
					<span className="font-normal">
						CUSTOM HOUSE AGENT (CHA) specializing in customs clearance for general and project cargo.
					</span>
					.
				</p>
				<p className="mb-4">
					The team is skilled in tariff schedules and customs regulations, staying updated on changes in laws and policies. They ensure timely document preparation before shipments arrive to prevent delays and simplify administrative procedures for clients.</p>
				{<p className="mb-4">
					Additionally, <span className="GradientText font-semibold">SEAWAVE</span> provides assistance with licenses, project imports, exports, and post-shipment processing.

				</p>/*
				<p className="mb-4">
					Convenience of customers is ensured by finalizing paperwork,
					documents, etc., and saving clients from complex
					administrative procedures.
				</p>
				<p>
					Expect more from{" "}
					<span className="GradientText">SEAWAVE</span>, including
					assistance with applications for licenses, project imports,
					exports, and post-shipment processing of various goods.
				</p> */}
			</div>



			<div className="px-4 md:px-20 flex md:flex-row flex-col  mb-6 md:mb-8">
				<div className="order-2">
					<h2 className="text-xl md:text-2xl my-2 font-medium">
						Services
					</h2>
					<div className="flex flex-col ">
						<ServiceItem text="Custom Documentation" />
						<ServiceItem text="Import & Export Documentation" />
						<ServiceItem text="Examination of Import & Export Consignments" />
						<ServiceItem text="Handling of stuffing & de-stuffing at ports" />
						<ServiceItem text="Clearance at ICD’s, Land Customs (NEPAL & BANGLADESH BORDER)" />
					</div>
				</div>
				<div className="order-1 px-4 md:px-20 mb-6 md:mb-8 flex justify-center">
					<video src={customvideo} autoPlay loop muted className="w-full md:w-96 h-auto rounded-lg " />
				</div>
			</div>
		</div>
	);
}

export default CustomClearance;
