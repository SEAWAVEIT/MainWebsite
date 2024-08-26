import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { db, collection, addDoc } from '../../../firebase/firebase';

function FreeQuote() {
	const [name, setName] = useState("");
	const [email, setEmail] = useState("");
	const [companyName, setCompanyName] = useState("");
	const [contactNumber, setContactNumber] = useState("");
	const [companyAddress, setCompanyAddress] = useState("");
	const [services, setServices] = useState([]);
	const [comments, setComments] = useState("");

	const navigate = useNavigate();

	const handleChange = (e) => {
		const { id, value, type, checked } = e.target;

		if (type === "checkbox") {
			setServices(prevServices =>
				checked ? [...prevServices, value] : prevServices.filter(service => service !== value)
			);
		} else {
			switch (id) {
				case "name":
					setName(value);
					break;
				case "email":
					setEmail(value);
					break;
				case "companyName":
					setCompanyName(value);
					break;
				case "contactNumber":
					setContactNumber(value);
					break;
				case "companyAddress":
					setCompanyAddress(value);
					break;
				case "comments":
					setComments(value);
					break;
				default:
					break;
			}
		}
	};

	const handleSubmit = async (e) => {
		e.preventDefault();
		if (!name || !email || !companyAddress || !companyName || !services.length || !contactNumber) {
			alert('Please fill in all required fields');
			return;
		}

		if (!/\S+@\S+\.\S+/.test(email)) {
			alert('Please enter a valid email address');
			return;
		}

		try {
			const quoteRef = collection(db, "quotes");
			await addDoc(quoteRef, {
				name, email, contactNumber, companyName, companyAddress, services, comments
			});
			alert("Quote Sent!");
			setName("");
			setEmail("");
			setContactNumber("");
			setCompanyName("");
			setCompanyAddress("");
			setServices([]);
			setComments("");
			navigate('/');
		} catch (error) {
			console.error("Error: ", error);
			alert('An error occurred while submitting the request.');
		}
	}

	return (
		<div className="h-auto z-1 bg-white text-black px-6 py-10 w-full flex flex-col gap-6">
			<div className="relative bg-black rounded-xl overflow-hidden mb-6 md:mb-8">
				<img
					className="absolute inset-0 w-full h-full object-cover opacity-30"
					src="https://www.seawave.in/images/inner-pages/logistic_banner.webp"
					alt="getafreequote"
				/>
				<div className="relative flex justify-center items-center h-60 md:h-96">
					<h1 className="text-white text-3xl md:text-6xl z-0 text-center">
						Get A {""}
						<div className="waviy inline md:text-6xl">
							<span className="text-3xl md:text-6xl" style={{ "--i": 1 }}>F</span>
							<span className="text-3xl md:text-6xl" style={{ "--i": 2 }}>r</span>
							<span className="text-3xl md:text-6xl" style={{ "--i": 3 }}>e</span>
							<span className="text-3xl md:text-6xl" style={{ "--i": 4 }}>e</span>
						</div>
						{""} Quote
					</h1>
				</div>
			</div>
			<form onSubmit={handleSubmit} className="md:px-8">
				<div className="InputDetails w-full grid grid-cols-1 md:grid-cols-2 gap-4">
					<div className="col-span-1 w-full">
						<label className="text-lg text-slate-800 font-medium">Name : </label>
						<input
							type="text"
							className="w-full mt-2 py-2 px-4 rounded-lg bg-white border border-gray-400 border-opacity-40 text-gray-800 font-semibold focus:border-cyan-500 focus:outline-none"
							value={name}
							id="name"
							onChange={handleChange}
						/>
					</div>
					<div className="col-span-1 w-full">
						<label className="text-lg text-slate-800 font-medium">Email : </label>
						<input
							type="email"
							className="w-full mt-2 py-2 px-4 rounded-lg bg-white border border-gray-400 border-opacity-40 text-gray-800 font-semibold focus:border-cyan-500 focus:outline-none"
							value={email}
							id="email"
							onChange={handleChange}
						/>
					</div>
					<div className="col-span-1 w-full">
						<label className="text-lg text-slate-800 font-medium">Contact Number : </label>
						<input
							type="text"
							className="w-full mt-2 py-2 px-4 rounded-lg bg-white border border-gray-400 border-opacity-40 text-gray-800 font-semibold focus:border-cyan-500 focus:outline-none"
							value={contactNumber}
							id="contactNumber"
							onChange={handleChange}
						/>
					</div>
					<div className="col-span-1 w-full">
						<label className="text-lg text-slate-800 font-medium">Company Name : </label>
						<input
							type="text"
							className="w-full mt-2 py-2 px-4 rounded-lg bg-white border border-gray-400 border-opacity-40 text-gray-800 font-semibold focus:border-cyan-500 focus:outline-none"
							value={companyName}
							id="companyName"
							onChange={handleChange}
						/>
					</div>
					<div className="col-span-1 md:col-span-2 w-full">
						<label className="text-lg text-slate-800 font-medium">Company Address : </label>
						<input
							type="text"
							className="w-full mt-2 py-2 px-4 rounded-lg bg-white border border-gray-400 border-opacity-40 text-gray-800 font-semibold focus:border-cyan-500 focus:outline-none"
							value={companyAddress}
							id="companyAddress"
							onChange={handleChange}
						/>
					</div>
				</div>
				<div className="px-6 py-2">
					<div className="md:text-2xl my-4">
						<h2>Services:</h2>
					</div>
					<div>
						<div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
							{["customClearance", "freightForwarding", "landFreight", "warehousing", "eximConsultancy", "logisticDesign"].map((service) => (
								<div key={service} className="flex items-center gap-2">
									<input
										value={service}
										id={service}
										type="checkbox"
										className="h-4 w-4 text-cyan-600 focus:ring-cyan-500 focus:ring-2"
										checked={services.includes(service)}
										onChange={handleChange}
									/>
									<label
										htmlFor={service}
										className="ms-2 text-lg font-light"
									>
										{service.replace(/([A-Z])/g, ' $1').replace(/^./, str => str.toUpperCase())}
									</label>
								</div>
							))}
						</div>
					</div>
				</div>
				<div className="my-4">
					<label className="text-lg text-slate-800 font-medium">Comments/Remarks : </label>
					<textarea
						name="comments"
						className="w-full h-40 py-2 px-4 rounded-lg bg-white border border-gray-400 border-opacity-40 text-gray-800 font-semibold focus:border-cyan-500 focus:outline-none"
						value={comments}
						id="comments"
						onChange={handleChange}
					></textarea>
				</div>
				<div className="flex justify-center ">
					<button className="btn md:btn-md btn-sm btn-info md:w-40 w-28 h-8 md:h-10 text-sm text-white md:text-md">Send</button>
				</div>
			</form>
		</div>
	);
}

export default FreeQuote;
