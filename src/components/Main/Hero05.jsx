import React from "react";
import "./Hero05.css";

function Headquote() {
	return (
		<svg
			width="28px"
			height="28px"
			viewBox="0 0 24 24"
			fill="none"
			xmlns="http://www.w3.org/2000/svg"
			transform="matrix(1, 0, 0, 1, 0, 0)"
			className="quote-icon"
		>
			<g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
			<g
				id="SVGRepo_tracerCarrier"
				strokeLinecap="round"
				strokeLinejoin="round"
			></g>
			<g id="SVGRepo_iconCarrier">
				<g opacity="0.4">
					<path
						d="M2 12.3501H7.79999C9.32999 12.3501 10.38 13.5101 10.38 14.9301V18.1501C10.38 19.5701 9.32999 20.7301 7.79999 20.7301H4.58002C3.16002 20.7301 2 19.5701 2 18.1501V12.3501"
						stroke="#2874d2"
						strokeWidth="1.5"
						strokeLinecap="round"
						strokeLinejoin="round"
					></path>
					<path
						d="M2 12.3502C2 6.30022 3.13003 5.30027 6.53003 3.28027"
						stroke="#2874d2"
						strokeWidth="1.5"
						strokeLinecap="round"
						strokeLinejoin="round"
					></path>
				</g>
				<path
					d="M13.6309 12.3501H19.4308C20.9608 12.3501 22.0109 13.5101 22.0109 14.9301V18.1501C22.0109 19.5701 20.9608 20.7301 19.4308 20.7301H16.2109C14.7909 20.7301 13.6309 19.5701 13.6309 18.1501V12.3501"
					stroke="#2874d2"
					strokeWidth="1.5"
					strokeLinecap="round"
					strokeLinejoin="round"
				></path>
				<path
					d="M13.6309 12.3502C13.6309 6.30022 14.7608 5.30027 18.1608 3.28027"
					stroke="#2874d2"
					strokeWidth="1.5"
					strokeLinecap="round"
					strokeLinejoin="round"
				></path>
			</g>
		</svg>
	);
}

function Tailquote() {
	return (
		<svg
			width="28px"
			height="28px"
			viewBox="0 0 24 24"
			fill="none"
			xmlns="http://www.w3.org/2000/svg"
			transform="matrix(1, 0, 0, 1, 0, 0) rotate(180)"
			className="quote-icon"
		>
			<g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
			<g
				id="SVGRepo_tracerCarrier"
				strokeLinecap="round"
				strokeLinejoin="round"
			></g>
			<g id="SVGRepo_iconCarrier">
				<g opacity="0.4">
					<path
						d="M2 12.3501H7.79999C9.32999 12.3501 10.38 13.5101 10.38 14.9301V18.1501C10.38 19.5701 9.32999 20.7301 7.79999 20.7301H4.58002C3.16002 20.7301 2 19.5701 2 18.1501V12.3501"
						stroke="#2874d2"
						strokeWidth="1.5"
						strokeLinecap="round"
						strokeLinejoin="round"
					></path>
					<path
						d="M2 12.3502C2 6.30022 3.13003 5.30027 6.53003 3.28027"
						stroke="#2874d2"
						strokeWidth="1.5"
						strokeLinecap="round"
						strokeLinejoin="round"
					></path>
				</g>
				<path
					d="M13.6309 12.3501H19.4308C20.9608 12.3501 22.0109 13.5101 22.0109 14.9301V18.1501C22.0109 19.5701 20.9608 20.7301 19.4308 20.7301H16.2109C14.7909 20.7301 13.6309 19.5701 13.6309 18.1501V12.3501"
					stroke="#2874d2"
					strokeWidth="1.5"
					strokeLinecap="round"
					strokeLinejoin="round"
				></path>
				<path
					d="M13.6309 12.3502C13.6309 6.30022 14.7608 5.30027 18.1608 3.28027"
					stroke="#2874d2"
					strokeWidth="1.5"
					strokeLinecap="round"
					strokeLinejoin="round"
				></path>
			</g>
		</svg>
	);
}

function Hero05() {
	return (
		<div className="bg-white flex flex-col justify-center px-6 py-16">
			<h1 className="text-3xl text-center ">Message From Our Founders</h1>
			<div className="flex items-center justify-center my-6">
				<div className="lino "></div>
			</div>
			<p className="text-base text-center font-light my-2">INSPIRATIONAL MESSAGE BY THE PEOPLE WHO PUT FORWARD THE STEPPING STONE OF SEAWAVE FORWARDING AND LOGISTICS PVT. LTD.</p>
			<div className="bg-white flex gap-12 md:px-12 px-4 py-8 flex-wrap justify-center">
				{[
					{
						image: "https://www.seawave.in/images/message-from-founders/1.webp",
						quote: "Never mind starting anything from zero, have patience & trust. Your hardwork will say your success story.",
						name: "Late Shri Nandkumar Mishra",
						position: "Founder",
					},
					{
						image: "https://www.seawave.in/images/message-from-founders/2.webp",
						quote: "Believe in your ideas. Be Focused, Determined & Loyal towards yourself and your work it will ultimately lead you to success. Hard + Smart works always wins.",
						name: "Late Shri Rajanikant N. Mishra",
						position: "Founder",
					},
					{
						image: "https://www.seawave.in/images/message-from-founders/3.webp",
						quote: "Successful Entrepreneurs are Givers and not Takers of Positive Energy",
						name: "Mr. Nalinikant N. Mishra",
						position: "Founder & Managing Director",
					},
					{
						image: "https://www.seawave.in/images/message-from-founders/4.webp",
						quote: "Attract what you expect, reflect what you desire, become what you respect and mirror what you admire.",
						name: "Mrs. Sanyukta Mishra",
						position: "Director",
					},
				].map((testimonial, index) => (
					<div
						key={index}
						className="testimonalCard md:w-64 w-80 p-6 rounded-md  flex flex-col gap-2 items-center"
					>
						<img
							className="rounded-full h-28"
							src={testimonial.image}
							alt={testimonial.name}
						/>
						<div className="flex flex-col text-center items-center gap-2">
							<Headquote />
							<p className="text-sm ">
								{testimonial.quote}
							</p>
							<Tailquote />
							<h1 className="text-md mt-2 font-medium whitespace-nowrap ">
								{testimonial.name}
							</h1>
							<p className="text-sm font-regular ">
								{testimonial.position}
							</p>
						</div>
					</div>
				))}
			</div>
		</div>
	);
}

export default Hero05;
