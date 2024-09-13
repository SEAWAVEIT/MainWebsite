import React from 'react'
import ServiceItem from "./ServiceItem";
import warehouse from "../../../assets/services/warehouse.webp";
import ServiceHead from "../../Items/ServiceHeroComponent"
import eximvideo from "../../../assets/video/EximConsultancy1.mp4"
function EximConsultancy() {
    return (
        <div className="bg-white p-4 md:p-8">
            <ServiceHead Text={"Exim Consultancy"} imageSrc={warehouse} />

            <div className="px-4 md:px-20 mb-6 md:mb-8">
                <div className="my-4">
                    <p>
                        <span className="GradientText">
                            SEAWAVE FORWARDING & LOGISTICS PVT. LTD.
                        </span>{" "}
                        provides consultancy relating to law, act, provisions, circulars, notifications, etc., of Customs, GST and allied departments to clients. Providing actionable insights within Customs, GST and Allied departments, we help clients foresee growth opportunities.
                    </p>
                </div>

                <div className="order-1 px-4 md:px-20 mb-6 md:mb-8 flex justify-center">
                    <video src={eximvideo} autoPlay loop muted className="w-full md:w-96 h-auto rounded-lg " />
                </div>
                <div className='py-2'>
                    <h2 className='text-xl font-base'>Shipments for export and import with complete operational support </h2>
                    <p className='text-slate-900'>In addition to providing back-office support for your operations, we also safeguard your payment risks </p>
                </div>


                <div className="flex flex-col gap-2">
                    <div>
                        <h2 className="text-xl md:text-2xl my-2">
                            Pre-Shipment:
                        </h2>
                        <ServiceItem text="Quotation preparation (including cost sheet)." />
                        <ServiceItem text="Working with the buyer or importer to determine payment and delivery terms." />
                        <ServiceItem text="Selection of port." />
                        <ServiceItem text="Preparation of Proforma Invoice." />
                        <ServiceItem text="Verification of draft L/C to be obtained from the customer." />
                        <ServiceItem text="Obtain PO / Issue PO to the customer / Vendors." />
                    </div>

                    <div>
                        <h2 className="text-xl md:text-2xl my-2">
                            Post-Shipment:
                        </h2>
                        <ServiceItem text="A preparation process for commercial invoices." />
                        <ServiceItem text="Preparation of the packing list." />
                        <ServiceItem text="In all documents, make sure the correct payment terms are stated. " />
                        <ServiceItem text="Pre-shipment inspection certificates (if any)." />
                        <ServiceItem text="Customs documentation." />
                        <ServiceItem text="Submission of documentation for payment collection to the bank." />
                    </div>
                </div>
            </div>
        </div>
    );
}

export default EximConsultancy