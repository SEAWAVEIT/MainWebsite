import React from 'react';
import csrImage from "../../../assets/csr/csr.jpg";

function CSR() {
    return (
        <div className='bg-white h-auto p-4 md:p-8 lg:p-12'>
            <div className='flex justify-center items-center mb-8'>
                <img className='md:h-[80vh] md:w-[90vw] rounded-xl' src={csrImage} alt="CSR" />
            </div>
            <div>
                <p className='text-base md:text-lg lg:text-xl px-4 md:px-6 lg:px-10 font-medium py-4 md:py-6 lg:py-8 text-center'>
                    At the Karunbharat Foundation, we believe in giving back to the community and
                    making a meaningful impact on society. Our CSR initiatives are driven by our
                    commitment to sustainable development and improving the quality of life for
                    individuals and communities.
                </p>
                <div className='px-4 md:px-6 lg:px-28 py-4 md:py-6 lg:py-8'>
                    <p className='text-sm md:text-base lg:text-lg'>
                        We aim at Karunbharat Foundation to have a positive impact on people's lives
                        which have been touched by cancer; hence our dedication towards the betterment
                        of it. We, therefore, seek to help patients with cancer, improve research work on
                        the same and pass messages of early prevention and detection to the public.
                        Main Areas of Focus Patient Support and Care Financial Assistance: Assisting
                        cancer patients with funding they need so they may be able to pay for treatments,
                        buy drugs etc. Support Programs: Offer guidance through counseling sessions, set
                        up support groups or organize palliative services which will help patients’
                        relatives too.
                        To spread awareness and provide valuable information, workshops are planned
                        by the community outreach while awareness campaigns have been launched to
                        educate the people about cancer prevention, early detection, and healthy lifestyle
                        choices.
                        Our Comprehensive care approach addresses the physical, relating to the body,
                        emotional and financial requirements of persons who have cancer through all-around assistance services. It makes certain services offered by us are designed
                        with patients’ interests at the heart and tweaked to fit particular needs of every
                        individual.
                        Our Impact Karunbharat Foundation is happy for the big steps we have moved in
                        fighting against cancer.
                    </p>

                    <div className='my-4'>
                        <p className='text-lg font-medium mb-2'>Our CSR actions have:</p>
                        <ul className='list-disc list-inside pl-4'>
                            <li>
                                Filled the gap and aided various financially strapped cancer patients as well as provision of specialized care.
                            </li>
                            <li>
                                Sponsored a number of cancer research programs that have yielded positive results in diagnosis and treating cancer.
                            </li>
                            <li>
                                Publicized preventive measures of cancer alongside early diagnosis which was heard by millions.
                            </li>
                            <li>
                                Enabled early detection of cancer for those who could not afford such services, especially among underprivileged.
                            </li>
                        </ul>
                    </div>

                    <p className='text-base md:text-lg lg:text-xl'>
                        Get Involved
                        We invite you to be a part of our mission. Whether through donations,
                        volunteering, or spreading awareness, your support can make a significant impact.
                        Together, we can bring hope, healing, and a brighter future for cancer patients and
                        their families.
                    </p>
                </div>
            </div>
        </div>
    );
}

export default CSR;
