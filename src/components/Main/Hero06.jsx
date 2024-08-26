import React from "react";
import { Link } from "react-router-dom";
import customerservice from "../../assets/whychoseus/customerservice.png"
import onlinesupport from "../../assets/whychoseus/onlinesupport.png"
import punctualdelivery from "../../assets/whychoseus/punctualdelivery.png"
import securetransaction from "../../assets/whychoseus/securetransaction.png"


function Hero06() {
	return (
		<div className="Hero06 h-auto py-2 px-4 md:py-none flex md:flex-row flex-col flex-start items-center bg-white">
			<div className="md:w-[40%]">
				<div className="md:p-8 md:my-20 md:text-start text-center">
					<h1 className="text-4xl md:text-6xl">Why choose us</h1>
					<h1 className="text-4xl md:text-6xl">for your service</h1>
					<div className="my-4 md:text-lg text-sm">
						<p>Choosing the right partner is vital</p>
						<p>for enhancing your logistics and</p>
						<p>ensuring smooth operations.</p>
					</div>
					<div>
						<Link
							to="#"
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
			</div>
			<div className="md:w-[60%] flex md:flex-row flex-col md:p-4 p-2 px-8">
				<div className="topSec md:pt-24 mt-12">
					<div className="flex gap-1 my-4">
						<div className="w-1/3">
							<img src={onlinesupport} className="h-20" alt="" />
						</div>
						<div className="w-2/3 pt-8">
							<h1 className="text-xl font-semibold">Online Support</h1>
							<p>Our team is always available to assist you with any inquiries or issues.</p>
						</div>
					</div>

					<div className="CustomBorder-Sub mx-auto my-8"></div>
					<div className="flex gap-1 my-4">
						<div className="w-1/3">

							<img src={punctualdelivery} alt="" className="h-16" />
						</div>
						<div className="w-2/3 pt-8">
							<h1 className="text-xl font-semibold">Punctual Deliveries</h1>
							<p>We pride ourselves on delivering your goods on time, every time.</p>
						</div>
					</div>
				</div>

				<div className="CustomBorder-main hidden md:block text-center mx-8 my-auto"></div>
				<div className="CustomBorder-Sub md:hidden mx-auto my-8"></div>

				<div className="bottomSec md:pb-14 md:pt-12">
					<div className="flex gap-1 mb-8">
						<div className="w-1/3">
							<img src={customerservice} className="h-20" alt="" />
						</div>
						<div className="w-2/3 pt-8">
							<h1 className="text-xl font-semibold pb-2">Exceptional Customer Service</h1>
							<p>Experience top-notch customer care and personalized support.</p>
						</div>
					</div>
					<div className="CustomBorder-Sub mx-auto my-8"></div>
					<div className="flex gap-1 my-4">
						<div className="w-1/3">
							<img src={securetransaction} className="h-16" alt="" />
						</div>
						<div className="w-2/3 pt-8">
							<h1 className="text-xl font-semibold">Secure Transactions</h1>
							<p>We ensure your transactions are safe and your data is protected.</p>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}

export default Hero06;
