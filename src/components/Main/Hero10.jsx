import React from "react";
import { Link } from "react-router-dom";


function Hero10() {
	const handleGetInTouch = () => {
		window.location.href = "mailto:abg@gmail.com?subject=Inquiry";
	};
	return (
		<div className="Hero08 w-full h-auto bg-white flex justify-center py-8 items-center">
			<div className="h-[90%] w-[90%]  flex justify-center items-center">
				<div className="flex flex-col md:flex-row justify-center items-center  p-4">
					<div className=" ">
						<div>
							<h1 className="md:text-6xl text-[#0ea5e9] text-3xl  font-bold">
								Lets's Connect
							</h1>
						</div>
						<div className="my-4 text-lg text-[#0369a1]">
							<p>
								We’d love to hear from you! Whether you have questions
							</p>
							<p>feedback, or just want to chat, feel free to reach out to us.</p>
						</div>

						<div className="flex flex-col gap-4 ">
							{/* <input
								className="bg-white w-full px-6 py-4 rounded-full border-2 border-[rgba(131,204,22,0.38)] outline-none"
								type="text"
								placeholder="Add me"
							/> */}
							<div>
								<a href="mailto:abg@gmail.com?subject=Inquiry"
									className="relative inline-flex items-center justify-center p-4 px-6 py-3 overflow-hidden font-medium text-black transition duration-300 ease-out border-2 border-[#1e6a8d41] rounded-full shadow-md group">
									<span className="absolute inset-0 flex items-center justify-center w-full h-full text-white duration-300 -translate-x-full bg-[#0ea5e9] group-hover:translate-x-0 ease">
										<svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path></svg>
									</span>
									<span className="absolute flex items-center justify-center w-full h-full font-semibold text-[#196a8f] transition-all duration-300 transform group-hover:translate-x-full ease">Get In Touch</span>
									<span className="relative invisible">Get In Touch</span>
								</a>
							</div>
							{/* <FollowButton/> */}
						</div>
					</div>
					<div className="my-2 md:my-none ">
						{/* <img src="https://media1.giphy.com/media/v1.Y2lkPTc5MGI3NjExZHk5dWtvaTMzaGdxZHhweTZobGdydGxkMm5rejh2OG11c3J2NnVjZSZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/TIeTxUeyPeFI771jTF/giphy.webp" alt="" /> */}
						<img src="https://media2.giphy.com/media/v1.Y2lkPTc5MGI3NjExdXdzaXc3NGN1YWZxOGxseG5pdTdtcmZpMW02eGtvMW85NW8yZXA4dyZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/N0Pp6pLX8YpPpDJMQZ/giphy.webp" alt="" />

					</div>
				</div>
			</div>
		</div>
	);
}

export default Hero10;
