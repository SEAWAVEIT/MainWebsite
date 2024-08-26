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
					<p>
						<span className="GradientText">
							SEAWAVE FORWARDING & LOGISTICS PVT. LTD.
						</span>{" "}
						had identified warehouse as one of the key components of
						national and international trade. With this focus,
						<span className="GradientText">SEAWAVE</span> had set up
						large warehouses at strategic locations in and around
						the port. The Company commands over 19,000 sq. ft of
						warehousing space in and around Mumbai (Bombay). It
						also has warehouses at Panvel, Bhiwandi, and outskirts of
						Pune. Non-hazardous cargo meant for exports and
						imported cargo pending final consumption and those that
						are to be further distributed within the country are
						kept in the warehouses. Some of these warehouses are
						equipped with electrical cranes to cater to specific
						handling requirements of the clients.
					</p>
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
					<div className="w-full md:w-1/2 order-2">
						<p className="text-center ">
							We provide high-level professional warehousing services
							and care that is the assurance of the safe arrival of
							your product anywhere, anytime. Through our integrated
							inventory management system, we not only provide control
							on a worldwide basis but also allow customers to
							supplement and redistribute cargo. This approach reduces
							cycle time while assuring constant availability of
							product. We offer special warehousing facilities for
							containerized, refrigerated, and hazardous materials.
						</p>
					</div>
					<div className="w-full md:w-1/2 order-1">
						<div className="px-4 md:px-20 mb-6 md:mb-8 flex justify-center">
							<video src={warehousevideo} autoPlay loop muted className="w-full md:w-96 h-auto rounded-lg " />
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}

export default Warehousing;
