import React from "react";
import ServiceItem from "./ServiceItem";
import landFreight from "../../../assets/services/landFreight.jpg";
import ServiceHead from "../../Items/ServiceHeroComponent"
import transportvideo from "../../../assets/video/TRANSPORATION.mp4"

function Transport() {
	return (
		<div className="bg-white p-4 md:p-8">
			<ServiceHead imageSrc={landFreight} Text={"Land Freight"} />
			<div className="px-4 md:px-20 mb-6 md:mb-8">
				<div className="mb-6 md:mb-8">
					<p>
						Land Freight forwarding is one of prime services, which
						is essential for Sea, Air & Land Consignments to ensure
						the clients to reach the cargo at respective seaports,
						ICD’s, airports & overseas land destinations.
					</p>
				</div>

				<div className="flex md:flex-row justify-center items-center flex-col">
					<div className="order-2">
						<h2 className="text-xl md:text-2xl my-2">Services:</h2>
						<ServiceItem text="Truck/Trailer Freight Booking" />
						<ServiceItem text="Consolidation of cargo for truck" />
						<ServiceItem text="Loading-Unloading facilities" />
						<ServiceItem text="Shipments through land customs (Especially for Nepal
							& Bangladesh)"/>
					</div>
					<div className="order-1">
						<div className="px-4  md:px-20 mb-6 md:mb-8 flex justify-center">
							<video src={transportvideo} autoPlay loop muted className="w-full md:w-96 h-auto rounded-lg " />
						</div>
					</div>
				</div>
			</div>

			<div className="px-4 md:px-16 mb-6 md:mb-8">
				<div className="text-center text-2xl md:text-4xl my-4">
					Transportation
				</div>
				<div className="lineEffect mb-6 md:mb-8 flex justify-center text-center">
					<div className="lino"></div>
				</div>
				<div className="flex flex-col-reverse md:flex-row md:gap-4 items-center">
					<div className="w-full md:w-1/2 flex flex-col md:pr-6 mb-4 md:mb-0">
						<div>
							<p className="mb-4">
								We provide our clients the comfort of
								transportation for the delivery, dispatch and
								pick up of the goods. Door to door steps
								delivery is a special feature of our services.
								The array of our services comprises of:
							</p>
						</div>
						<div>
							<h2 className="text-lg md:text-xl my-2">
								Cargo pickup facility round the clock by own:
							</h2>
							<ServiceItem text="Fleets of close body" />
							<ServiceItem text="Transportation of Sea/Air/Land Cargo" />
							<ServiceItem text="Custom Cleared in Hinterlands to
									International Sea/Air ports"/>
							<ServiceItem text="Fleets of close body" />
						</div>
						<div className="flex flex-col gap-2">
							<p>
								Transport of goods from port of discharge to
								hinterland destination in conjunction with our
								overseas partners.
							</p>
							<p> Door to door delivery of cargo.</p>
							<p>
								The company commands a large fleet of 200 heavy
								duty trailers that can transport cargo in huge
								quantity in a day.
							</p>
						</div>
					</div>
					<div className="w-full md:w-1/2 flex justify-center items-center">
						<img
							src="https://www.seawave.in/images/inner-pages/transportation.webp"
							className="rounded-lg filter drop-shadow-md"
							alt="Air Freight"
						/>
					</div>
				</div>
			</div>

			<div>
				<div className="px-4 md:px-16 text-center text-2xl md:text-4xl my-4">
					Vehicle Operation
				</div>
				<div className="lineEffect mb-6 md:mb-8 flex justify-center text-center">
					<div className="lino"></div>
				</div>
				<div className="flex flex-col-reverse md:flex-row md:gap-4 items-center">
					<div className="w-full md:w-1/2 flex justify-center items-center mb-4 md:mb-0">
						<img
							src="https://seawave.in/images/inner-pages/sea-freight.webp"
							className="h-[300px] md:h-[450px] w-[320px] md:w-[480px] rounded-lg filter drop-shadow-md"
							alt="Sea Freight"
						/>
					</div>
					<div className="w-full md:w-1/2  flex flex-col md:pl-1 md:pr-20">
						<p className="mb-4">
							Vehicle operation modes refer to various operating
							conditions that either is requested by the driver or
							decided by the SC according to the subsystem status.
							SEAWAVE has total 5 vehicles of our own.
						</p>
						<div>
							<h2 className="text-lg md:text-xl my-2">
								Services:
							</h2>
							<ServiceItem text="Driver Management" />
							<ServiceItem text="Vehicle Management" />
							<ServiceItem text="Vehicle operations like Loading-Unloading" />
							<ServiceItem text="Tracking of vehicle and follow up with
									transport" />
							<ServiceItem text="Vehicle paper work & RTO charges" />
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}

export default Transport;
