import React from "react";
import ServiceItem from "./ServiceItem";
import warehouse from "../../../assets/services/warehouse.jpg";
import ServiceHead from "../../Items/ServiceHeroComponent"
import warehousevideo from "../../../assets/video/WAREHOUSING.mp4"

function Warehousing() {
	return (
		<div className="bg-white p-4 md:p-8">
			<ServiceHead Text={"Warehousing"} imageSrc={warehouse} />

			<div className="px-4 md:px-20 mb-6 md:mb-8">
				<div className="mb-6 md:mb-8">
					
				</div>


				<div className="mt-6 md:mt-8 flex flex-col justify-between items-center md:flex-row">
					<div className="w-full md:w-1/2 order-1">
					<p>
						<span className="GradientText font-semibold">
							SEAWAVE FORWARDING & LOGISTICS PVT. LTD.
						</span>{" "}
						has established large warehouses at strategic locations around ports, recognizing warehousing as a key component of trade. With over 19,000 sq. ft of space in and around Mumbai, and additional warehouses in Panvel, Bhiwandi, and near Pune, they store non-hazardous export cargo, imported goods awaiting consumption, and items for domestic distribution. Some warehouses are equipped with electrical cranes to meet specific client handling needs.
					</p>
					</div>
					<div className="w-full md:w-1/2 order-2">
						<div className="px-4 md:px-20 mb-6 md:mb-8 flex justify-center">
							<video src={warehousevideo} autoPlay loop muted className="w-full md:w-96 h-auto rounded-lg " />
						</div>
					</div>
				</div>



				<div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-20">
					<div>
						<h2 className="text-xl md:text-2xl my-2">
							SEAWAVE provides its expertise in:
						</h2>
						<ServiceItem text="Warehouse Identification." />
						<ServiceItem text="Record Management and Storage." />
						<ServiceItem text="Warehouse Management." />
						<ServiceItem text="Inventory & Distribution Management." />
						<ServiceItem text="Just in Time (JIT) Deliveries." />
						<ServiceItem text="Opening & repacking facilities." />
					</div>

					<div>
						<h2 className="text-xl md:text-2xl my-2">
							Our Warehousing Infrastructure Advantages:
						</h2>
						<ServiceItem text="Safe & systematic storage of goods." />
						<ServiceItem text="Hygienic & clean environment." />
						<ServiceItem text="In-house Computerized Weigh bridge facility." />
						<ServiceItem text="Container repair facility of IICL standard." />
						<ServiceItem text="Helps our clients to reduce fixed overheads, increase efficiency, cut down valuable management time and offer great efficiency." />
					</div>
				</div>

				<div className="mt-6 md:mt-8 flex flex-col justify-between items-center md:flex-row">
					<div className="w-full ">
						<p className="text-center ">
						<span className="GradientText font-semibold">SEAWAVE</span> offers professional warehousing services, ensuring the safe arrival of products globally. Their integrated inventory management system provides worldwide control, enabling customers to supplement and redistribute cargo, reducing cycle time and ensuring product availability. Special facilities are available for containerized, refrigerated, and hazardous materials.
						</p>
					</div>
					{/* <div className="w-full md:w-1/2 order-1">
						<div className="px-4 md:px-20 mb-6 md:mb-8 flex justify-center">
							<video src={warehousevideo} autoPlay loop muted className="w-full md:w-96 h-auto rounded-lg " />
						</div>
					</div> */}
				</div>
			</div>
		</div>
	);
}

export default Warehousing;
