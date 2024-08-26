import React from 'react';
import './HeroMissionCard.css';

function HeroMissionCard() {
    return (
        <div className='bg-white px-20 py-12 flex flex-wrap justify-between md:gap-1 gap-6'>
            <div className="motivationCard missionCard">
                <div className="profile-pic missionProfilePic">
                    <img src="https://img.freepik.com/free-vector/positive-tiny-people-sitting-walking-near-huge-target-with-arrow-isolated-flat-vector-illustration-cartoon-business-team-achieving-goal-aim-marketing-strategy-achievement-concept_74855-10139.jpg?ga=GA1.1.496832421.1723529480&semt=ais_hybrid" alt="Mission" />
                </div>
                <div className="motivationBottom missionBottom">
                    <div className="motivationContent missionContent">
                        <span className="md:text-sm  text-xs md:leading-3 leading-none tracking-tighter">A commitment to find the best solution for the individual needs of each client, or as we like to think, each business partner.</span>
                    </div>
                    <div className="bottom-bottom flex justify-center items-center">
                        <div>
                            <h2 className='font-medium text-slate-800 text-xl'>Our Mission</h2>
                        </div>
                    </div>
                </div>
            </div>
            <div className="motivationCard visionCard">
                <div className="profile-pic visionProfilePic">
                    <img src="https://img.freepik.com/free-vector/vision-statement-concept-illustration_114360-7576.jpg?ga=GA1.1.496832421.1723529480&semt=ais_hybrid" alt="Vision" />
                </div>
                <div className="visionBottom">
                    <div className="motivationContent visionContent">
                        <span className="md:text-sm  text-xs md:leading-3 leading-none tracking-tighter">We aspire to fulfill our dream of providing quality services to our valued clients through logistics, design & solutions.</span>
                    </div>
                    <div className="bottom-bottom flex justify-center items-center">
                        <div>
                            <h2 className='font-medium text-slate-800 text-xl'>Our Vision</h2>
                        </div>
                    </div>
                </div>
            </div>
            <div className="motivationCard purposeCard">
                <div className="profile-pic purposeProfilePic">
                    <img src="https://img.freepik.com/free-vector/business-people-setting-company-target_1262-20615.jpg?ga=GA1.1.496832421.1723529480&semt=ais_hybrid" alt="Purpose" />
                </div>
                <div className="purposeBottom purposeBottom">
                    <div className="purposeContent">
                        <span className="md:text-sm  text-xs md:leading-3 leading-none tracking-tighter">Committed to provide a holistic solution to our clients, we are always ready to meet our clients' requirements efficiently.</span>
                    </div>
                    <div className="bottom-bottom flex justify-center items-center">
                        <div>
                            <h2 className='font-medium text-slate-800 text-xl'>Our Purpose</h2>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default HeroMissionCard;
