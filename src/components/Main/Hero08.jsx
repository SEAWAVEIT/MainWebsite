import React from 'react';
import truck from "../../assets/specialization/truck.svg";
import business from "../../assets/specialization/business.svg";
import docker from "../../assets/specialization/docker.svg";
import globe from "../../assets/specialization/globe.svg";
import checkshield from "../../assets/specialization/checkshield.svg";
import map from "../../assets/specialization/map.svg";
import grid from "../../assets/specialization/grid.svg";

function Hero08() {
    return (
        <div className='Hero08 bg-white h-auto px-20 p-4 m-auto'>
            <div className='text-center py-8'>
                <h2 className='GradientText md:text-6xl text-3xl mb-2'>Specialization</h2>
                <div className="flex items-center justify-center my-6">
                    <div className="lino "></div>
                </div>
                <p className='text-sm md:text-base'>
                    AREAS THAT WE SPECIALIZE IN TO PROVIDE HOLISTIC SOLUTION TO OUR CLIENTS
                </p>
            </div>
            <div>
                <div className='flex flex-wrap gap-8 justify-center'>
                    <div className="cardBox">
                        <div className="SpecializationCard">
                            <div className='SpecializationImage'>
                                <img src={checkshield} alt="" />
                                <h3>SVB</h3>
                            </div>
                            <div className="SpecializationContent">
                                <p>Tn the Indian customs system, the Special Valuation Branch (SVB) investigates the valuation of goods when they are imported between related parties.</p>
                            </div>
                        </div>
                    </div>
                    <div className="cardBox">
                        <div className="SpecializationCard">
                            <div className="SpecializationImage">
                                <img src={truck} alt="" />
                                <h3>Capital Goods Clearance</h3>
                            </div>
                            <div className="SpecializationContent">
                                <p>We do New/2nd Hand Capital Goods Clearance</p>
                            </div>
                        </div>
                    </div>
                    <div className="cardBox">
                        <div className="SpecializationCard">
                            <div className="SpecializationImage">
                                <img src={docker} alt="" />
                                <h3>Proper Cargo Handling</h3>
                            </div>
                            <div className="SpecializationContent">
                                <p>Equipment used at seaports and rail yards to lift or move containerized, bulk or break-bulk cargo is considered cargo handling equipment.</p>
                            </div>
                        </div>
                    </div>
                    <div className="cardBox">
                        <div className="SpecializationCard">
                            <div className="SpecializationImage">
                                <img src={map} alt="" />
                                <h3>Nepal & Bangladesh Border Clearance</h3>
                            </div>
                            <div className="SpecializationContent">
                                <p>In order to facilitate exports and imports, transportation, and warehousing between neighboring countries, Seawave has branches in Nepal and Bangladesh. Door-to-door services are provided between India and its neighbors.</p>
                            </div>
                        </div>
                    </div>
                    <div className="cardBox">
                        <div className="SpecializationCard">
                            <div className="SpecializationImage">
                                <img src={business} alt="" />
                                <h3>AEO Application</h3>
                            </div>
                            <div className="SpecializationContent">
                                <p>In accordance with our customers' needs, we offer registered AEO applications</p>
                            </div>
                        </div>
                    </div>
                    <div className="cardBox">
                        <div className="SpecializationCard">
                            <div className="SpecializationImage">
                                <img src={globe} alt="" />
                                <h3>DPD Handling</h3>
                            </div>
                            <div className="SpecializationContent">
                                <p>In this system, importers can clear their cargo directly from the port within 48 hours of arrival.</p>
                            </div>
                        </div>
                    </div>
                    <div className="cardBox">
                        <div className="SpecializationCard wiide ">
                            <div className="SpecializationImage">
                                <img src={grid} alt="" />
                                <h3>Palletization</h3>
                            </div>
                            <div className="SpecializationContent">
                                <p>A palletization process consists of placing goods onto a pallet for easier handling and transportation, allowing the load to be consolidated.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Hero08;
