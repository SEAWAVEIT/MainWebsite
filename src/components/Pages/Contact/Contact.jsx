import React, { useState, useRef, useEffect } from "react";
import location from "../../../assets/contact/location.png";
import whatsapp from "../../../assets/contact/whatsapp.png";
import mobile from "../../../assets/contact/mobile.png";
import email from "../../../assets/contact/email2.png";
import map from "../../../assets/contact/map.jpeg";
import gsap from "gsap";
import ServiceItem from "../../Pages/Services/ServiceItem"


function Contact() {
	const [activeSection, setActiveSection] = useState(null);
	const icons = useRef({
		location: null,
		email: null,
		whatsapp: null,
		mobile: null,
	});

	useEffect(() => {
		if (activeSection) {
			gsap.to(icons.current[activeSection], {
				scale: 1.2,
				duration: 0.3,
				ease: "power1.inOut",
			});
		}
		return () => {
			Object.values(icons.current).forEach((icon) => {
				gsap.to(icon, {
					scale: 1,
					duration: 0.3,
					ease: "power1.inOut",
				});
			});
		};
	}, [activeSection]);

	const handleMouseEnter = (section) => {
		setActiveSection(section);
	};

	const handleMouseLeave = () => {
		setActiveSection(null);
	};

	const locationUrl = "https://www.google.com/maps/search/?api=1&query=Unit+No.+232+Edison-1+Raheja+Tesla+Industrial+Plot+GEN-2%2F1%2FC%2FPart+D+Block%2C+MIDC+Industrial+Area+Sanpada%2C+TTC+Industrial+Area%2C+Shiravane%2C+Juinagar%2C+Navi+Mumbai%2C+Maharashtra+400705";

	return (
		<>
			<div id="contact-section" className="scrollable-content h-auto p-4 sm:p-8 w-full bg-white flex flex-col gap-4 text-black">
				<div className="flex flex-col gap-4 justify-center items-center">
					<h1 className="text-4xl">Contact Us</h1>
					<div className="lino"></div>
				</div>
				<div className="text-3xl text-center">
					<h2>On-Time Provision of Potential</h2>
					<div className="flex flex-col md:flex-row">
						<div className="w-full md:w-1/2">
							<img
								className="rounded-full w-full md:p-16 p-4"
								src={map}
								alt="Map"
							/>
						</div>
						<div className="flex flex-col items-center md:items-center w-full md:w-1/2 md:pl-8">
							<div className="mt-8  md:mt-40">
								<div className="flex ">
									<div>
										<svg width="34px" height="64px" viewBox="0 -4 28 28" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" fill="#000000"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"><title>arrow-right</title> <desc>Created with Sketch.</desc> <defs> </defs> <g id="Vivid.JS" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd"> <g id="Vivid-Icons" transform="translate(-515.000000, -651.000000)"> <g id="Icons" transform="translate(37.000000, 169.000000)"> <g id="arrow-right" transform="translate(468.000000, 468.000000)"> <g transform="translate(10.000000, 14.000000)" id="Shape"> <polygon fill="#FF6E6E" points="0 12 20 12 15 17 18 20 28 10 18 0 15 3 20 8 0 8"> </polygon> <polygon fill="#0C0058" points="8 8 8 12 0 12 0 8"> </polygon> </g> </g> </g> </g> </g> </g></svg>
									</div>
									<div>
										<p className="text-lg mt-4 text-start ml-2">
											Seawave Logistics, a leading provider of comprehensive logistics solutions, boasts a robust presence across India.
										</p>
									</div>
								</div>
								<div className="flex justify-center">
									<div>
										<svg width="34px" height="64px" viewBox="0 -4 28 28" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" fill="#000000"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"><title>arrow-right</title> <desc>Created with Sketch.</desc> <defs> </defs> <g id="Vivid.JS" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd"> <g id="Vivid-Icons" transform="translate(-515.000000, -651.000000)"> <g id="Icons" transform="translate(37.000000, 169.000000)"> <g id="arrow-right" transform="translate(468.000000, 468.000000)"> <g transform="translate(10.000000, 14.000000)" id="Shape"> <polygon fill="#FF6E6E" points="0 12 20 12 15 17 18 20 28 10 18 0 15 3 20 8 0 8"> </polygon> <polygon fill="#0C0058" points="8 8 8 12 0 12 0 8"> </polygon> </g> </g> </g> </g> </g> </g></svg>
									</div>
									<div>
										<p className="text-lg mt-4 text-start ml-2">
											With strategically located offices in major cities like Delhi, Mumbai, Surat, Chennai, Kolkata, and Sonauli (Uttar Pradesh), we offer seamless connectivity to various regions within the country.
										</p>
									</div>
								</div>
								<div className="flex justify-center">
									<div>
										<svg width="34px" height="64px" viewBox="0 -4 28 28" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" fill="#000000"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"><title>arrow-right</title> <desc>Created with Sketch.</desc> <defs> </defs> <g id="Vivid.JS" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd"> <g id="Vivid-Icons" transform="translate(-515.000000, -651.000000)"> <g id="Icons" transform="translate(37.000000, 169.000000)"> <g id="arrow-right" transform="translate(468.000000, 468.000000)"> <g transform="translate(10.000000, 14.000000)" id="Shape"> <polygon fill="#FF6E6E" points="0 12 20 12 15 17 18 20 28 10 18 0 15 3 20 8 0 8"> </polygon> <polygon fill="#0C0058" points="8 8 8 12 0 12 0 8"> </polygon> </g> </g> </g> </g> </g> </g></svg>
									</div>
									<div>
										<p className="text-lg mt-4 text-start ml-2">
											Our extensive network, coupled with our expertise in customs clearance, freight forwarding, transportation, warehousing, logistics design, and exim consultancy, ensures efficient and reliable services for businesses of all sizes.
										</p>
									</div>
								</div>




							</div>

						</div>
					</div>
				</div>

				<div>
					<div>
						<h2 className="my-4 text-center text-base md:text-xl">
							DID NOT FIND THE ANSWER YOU WERE LOOKING FOR? LET US HELP YOU FIND
							ANSWERS TO YOUR QUESTIONS
						</h2>
					</div>

					<div className="flex flex-col md:flex-row justify-center items-start md:items-center px-4 md:px-16 py-8 gap-4 md:gap-8">
						<div className="w-full md:w-1/2 flex flex-col gap-6">
							{[
								{
									src: location,
									label: "Location",
									text: (
										<a
											href={locationUrl}
											target="_blank"
											rel="noopener noreferrer"
											className="text-blue-500 hover:underline"
										>
											Unit No. 232 Edison-1 Raheja Tesla Industrial Plot GEN-2/1/C/Part D Block, MIDC Industrial Area Sanpada, TTC Industrial Area, Shiravane, Juinagar, Navi Mumbai, Maharashtra 400705
										</a>
									),
								},
								{
									src: email,
									label: "Email",
									text: "info@seawave.in",
									link: "mailto:info@seawave.in",
								},
								{
									src: whatsapp,
									label: "Whatsapp",
									text: "+91-8655642421",
									link: "https://wa.me/+918655642421",
								},
								{
									src: mobile,
									label: "Telephone",
									text: "+91-2268727904",
									link: "tel:+912268727904",
								},
							].map((item, index) => (
								<div
									key={index}
									className="flex gap-4 items-start"
									onMouseEnter={() =>
										handleMouseEnter(item.label.toLowerCase())
									}
									onMouseLeave={handleMouseLeave}
								>
									<div
										ref={(el) => (icons.current[item.label.toLowerCase()] = el)}
										className="w-10 flex-shrink-0"
									>
										<img
											className="w-full cursor-pointer"
											src={item.src}
											alt={item.label}
										/>
									</div>
									<div className="flex-1">
										<h5 className="text-lg md:text-xl mb-1 font-semibold text-[#911c69]">
											{item.label}
										</h5>
										{item.link ? (
											<a
												href={item.link}
												target="_blank"
												rel="noopener noreferrer"
												className="text-blue-500 hover:underline"
											>
												{item.text}
											</a>
										) : (
											<p className="text-sm md:text-base">{item.text}</p>
										)}
									</div>
								</div>
							))}
						</div>
						<div className="w-full md:w-1/2 flex justify-center items-center">
							<div className="relative w-full h-0 pb-[56.25%]"> {/* 16:9 Aspect Ratio */}
								<iframe
									title="Google Maps"
									src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3771.081748481333!2d73.0232881742513!3d19.060143052472082!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be7c253393efebf%3A0x921b215ed23b73c2!2sSeawave%20Forwarding%20%26%20Logistics%20Pvt.%20Ltd!5e0!3m2!1sen!2sin!4v1724654486837!5m2!1sen!2sin"
									width="100%"
									height="100%"
									style={{ border: 0, position: 'absolute', top: 0, left: 0 }}
									allowFullScreen
									loading="lazy"
									referrerPolicy="no-referrer-when-downgrade"
								></iframe>
							</div>
						</div>
					</div>
				</div>
			</div >
		</>
	);
}

export default Contact;
