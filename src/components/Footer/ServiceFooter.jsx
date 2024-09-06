import React from "react";
import footerLogo from "../../assets/seawave/seawavewhitetextlogo.png";

function ServiceFooter() {
    return (
        <div className="FooterImage bg-black  h-auto text-white md:p-8 p-4">
            <div className="flex flex-col py-12 gap-6 md:gap-8 justify-center items-center">
                <div className="flex flex-col md:flex-row justify-center md:justify-between px-4 md:px-8 gap-6 md:gap-12">
                    <div className="w-full md:w-1/3">
                        <div className="font-serif text-lg md:text-xl whitespace-nowrap">At SEAWAVE, we define ourselves as:</div>
                        <div className="text-sm md:text-base">
                            <ul>S: Sea</ul>
                            <ul>E: Earth</ul>
                            <ul>A: Air</ul>
                            <ul>W: Wave</ul>
                            <ul>A: Achieve</ul>
                            <ul>V: Vision</ul>
                            <ul>E: Exactly</ul>
                        </div>
                    </div>
                    <div className="w-full md:w-1/3 flex justify-center">
                        <img className="md:h-24 h-16" src={footerLogo} alt="Seawave Logo" />
                    </div>
                    <div className="w-full md:w-1/3 text-center md:text-left">
                        <h2 className="text-lg md:text-xl font-serif font-light">Seawave Forwarding & Logistics Pvt. Ltd.</h2>
                        <div className="italic font-light text-xs md:text-sm my-2">
                            <h2>Address:</h2>
                            <h3>Unit No. 232 Bldg No. 1 Edison Raheja Tesla Industrial Plot GEN-2/1/C/Part D Block MIDC Industrial Area Sanpada, TTC Industrial Area, Shiravane, Juinagar, Navi Mumbai, Maharashtra 400705</h3>
                        </div>
                        <h3 className="italic font-light text-xs md:text-sm my-2">Contact Number: +912268727904/906/911/922</h3>
                        <div className="my-2">
                            <h3 className="italic font-light text-xs md:text-sm">info@seawave.in</h3>
                            <h3 className="italic font-light text-xs md:text-sm">Mon - Sat 9.30 - 19.00</h3>
                        </div>
                    </div>
                </div>
                <div className="flex justify-center gap-4 md:gap-6 flex-col items-center text-white my-6">
                    <div>
                        <h5 className="font-light text-xs md:text-sm text-center italic">
                            Our Branches: West Bengal (Kolkata), Nepal Borders (Jogbani, Raxaul & Sonauli)
                        </h5>
                    </div>
                </div>
                <div className="flex justify-center items-center gap-6">
                    <a className="socialIcon" href="https://www.facebook.com/seawavelogistics" target="_blank" rel="noopener noreferrer">
                        <svg
                            width="30px"
                            height="30px"
                            viewBox="38.657999999999994 12.828 207.085 207.085"
                            xmlns="http://www.w3.org/2000/svg"
                            fill="#000000"
                        >
                            <path
                                d="M158.232 219.912v-94.461h31.707l4.747-36.813h-36.454V65.134c0-10.658 2.96-17.922 18.245-17.922l19.494-.009V14.278c-3.373-.447-14.944-1.449-28.406-1.449-28.106 0-47.348 17.155-47.348 48.661v27.149H88.428v36.813h31.788v94.461l38.016-.001z"
                                fill="#5274bc"
                            ></path>
                        </svg>
                    </a>

                    <a className="socialIcon" href="https://www.instagram.com/seawavelogistics/" target="_blank" rel="noopener noreferrer">
                        <svg
                            width="30px"
                            height="30px"
                            viewBox="0 0 2500 2500"
                            xmlns="http://www.w3.org/2000/svg"
                            fill="#000000"
                        >
                            <defs>
                                <radialGradient
                                    id="0"
                                    cx="332.14"
                                    cy="2511.81"
                                    r="3263.54"
                                    gradientUnits="userSpaceOnUse"
                                >
                                    <stop offset=".09" stopColor="#fa8f21"></stop>
                                    <stop offset=".78" stopColor="#d82d7e"></stop>
                                </radialGradient>
                                <radialGradient
                                    id="1"
                                    cx="1516.14"
                                    cy="2623.81"
                                    r="2572.12"
                                    gradientUnits="userSpaceOnUse"
                                >
                                    <stop offset=".64" stopColor="#8c3aaa" stopOpacity="0"></stop>
                                    <stop offset="1" stopColor="#8c3aaa"></stop>
                                </radialGradient>
                            </defs>
                            <path
                                d="M833.4,1250c0-230.11,186.49-416.7,416.6-416.7s416.7,186.59,416.7,416.7-186.59,416.7-416.7,416.7S833.4,1480.11,833.4,1250m-225.26,0c0,354.5,287.36,641.86,641.86,641.86S1891.86,1604.5,1891.86,1250,1604.5,608.14,1250,608.14,608.14,895.5,608.14,1250M1767.27,582.69a150,150,0,1,0,150.06-149.94h-0.06a150.07,150.07,0,0,0-150,149.94M745,2267.47c-121.87-5.55-188.11-25.85-232.13-43-58.36-22.72-100-49.78-143.78-93.5s-70.88-85.32-93.5-143.68c-17.16-44-37.46-110.26-43-232.13-6.06-131.76-7.27-171.34-7.27-505.15s1.31-373.28,7.27-505.15c5.55-121.87,26-188,43-232.13,22.72-58.36,49.78-100,93.5-143.78s85.32-70.88,143.78-93.5c44-17.16,110.26-37.46,232.13-43,131.76-6.06,171.34-7.27,505-7.27s373.28,1.31,505.15,7.27c121.87,5.55,188,26,232.13,43,58.36,22.62,100,49.78,143.78,93.5s70.78,85.42,93.5,143.78c17.16,44,37.46,110.26,43,232.13,6.06,131.87,7.27,171.34,7.27,505.15s-1.21,373.28-7.27,505.15c-5.55,121.87-25.95,188.11-43,232.13-22.72,58.36-49.78,100-93.5,143.68s-85.42,70.78-143.78,93.5c-44,17.16-110.26,37.46-232.13,43-131.76,6.06-171.34,7.27-505.15,7.27s-373.28-1.21-505-7.27M734.65,7.57c-133.07,6.06-224,27.16-303.41,58.06C349,97.54,279.38,140.35,209.81,209.81S97.54,349,65.63,431.24c-30.9,79.46-52,170.34-58.06,303.41C1.41,867.93,0,910.54,0,1250s1.41,382.07,7.57,515.35c6.06,133.08,27.16,223.95,58.06,303.41,31.91,82.19,74.62,152,144.18,221.43S349,2402.37,431.24,2434.37c79.56,30.9,170.34,52,303.41,58.06C868,2498.49,910.54,2500,1250,2500s382.07-1.41,515.35-7.57c133.08-6.06,223.95-27.16,303.41-58.06,82.19-32,151.86-74.72,221.43-144.18s112.18-139.24,144.18-221.43c30.9-79.46,52.1-170.34,58.06-303.41,6.06-133.38,7.47-175.89,7.47-515.35s-1.41-382.07-7.47-515.35c-6.06-133.08-27.16-224-58.06-303.41-32-82.19-74.72-151.86-144.18-221.43S2150.95,97.54,2068.86,65.63c-79.56-30.9-170.44-52.1-303.41-58.06C1632.17,1.51,1589.56,0,1250.1,0S868,1.41,734.65,7.57"
                                fill="url(#0)"
                            ></path>
                            <path
                                d="M833.4,1250c0-230.11,186.49-416.7,416.6-416.7s416.7,186.59,416.7,416.7-186.59,416.7-416.7,416.7S833.4,1480.11,833.4,1250m-225.26,0c0,354.5,287.36,641.86,641.86,641.86S1891.86,1604.5,1891.86,1250,1604.5,608.14,1250,608.14,608.14,895.5,608.14,1250M1767.27,582.69a150,150,0,1,0,150.06-149.94h-0.06a150.07,150.07,0,0,0-150,149.94M745,2267.47c-121.87-5.55-188.11-25.85-232.13-43-58.36-22.72-100-49.78-143.78-93.5s-70.88-85.32-93.5-143.68c-17.16-44-37.46-110.26-43-232.13-6.06-131.76-7.27-171.34-7.27-505.15s1.31-373.28,7.27-505.15c5.55-121.87,26-188,43-232.13,22.72-58.36,49.78-100,93.5-143.78s85.32-70.88,143.78-93.5c44-17.16,110.26-37.46,232.13-43,131.76-6.06,171.34-7.27,505-7.27s373.28,1.31,505.15,7.27c121.87,5.55,188,26,232.13,43,58.36,22.62,100,49.78,143.78,93.5s70.78,85.42,93.5,143.78c17.16,44,37.46,110.26,43,232.13,6.06,131.87,7.27,171.34,7.27,505.15s-1.21,373.28-7.27,505.15c-5.55,121.87-25.95,188.11-43,232.13-22.72,58.36-49.78,100-93.5,143.68s-85.42,70.78-143.78,93.5c-44,17.16-110.26,37.46-232.13,43-131.76,6.06-171.34,7.27-505.15,7.27s-373.28-1.21-505-7.27M734.65,7.57c-133.07,6.06-224,27.16-303.41,58.06C349,97.54,279.38,140.35,209.81,209.81S97.54,349,65.63,431.24c-30.9,79.46-52,170.34-58.06,303.41C1.41,867.93,0,910.54,0,1250s1.41,382.07,7.57,515.35c6.06,133.08,27.16,223.95,58.06,303.41,31.91,82.19,74.62,152,144.18,221.43S349,2402.37,431.24,2434.37c79.56,30.9,170.34,52,303.41,58.06C868,2498.49,910.54,2500,1250,2500s382.07-1.41,515.35-7.57c133.08-6.06,223.95-27.16,303.41-58.06,82.19-32,151.86-74.72,221.43-144.18s112.18-139.24,144.18-221.43c30.9-79.46,52.1-170.34,58.06-303.41,6.06-133.38,7.47-175.89,7.47-515.35s-1.41-382.07-7.47-515.35c-6.06-133.08-27.16-224-58.06-303.41-32-82.19-74.72-151.86-144.18-221.43S2150.95,97.54,2068.86,65.63c-79.56-30.9-170.44-52.1-303.41-58.06C1632.17,1.51,1589.56,0,1250.1,0S868,1.41,734.65,7.57"
                                fill="url(#1)"
                            ></path>
                        </svg>
                    </a>

                    <a className="socialIcon" href="https://www.linkedin.com/company/seawave-forwarding-logistics-pvt-ltd/" target="_blank" rel="noopener noreferrer">
                        <svg width="37px" height="37px" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <rect x="2" y="2" width="28" height="28" rx="14" fill="#1275B1"></rect>
                            <path d="M12.6186 9.69215C12.6186 10.6267 11.8085 11.3843 10.8093 11.3843C9.81004 11.3843 9 10.6267 9 9.69215C9 8.7576 9.81004 8 10.8093 8C11.8085 8 12.6186 8.7576 12.6186 9.69215Z" fill="white"></path>
                            <path d="M9.24742 12.6281H12.3402V22H9.24742V12.6281Z" fill="white"></path>
                            <path d="M17.3196 12.6281H14.2268V22H17.3196C17.3196 22 17.3196 19.0496 17.3196 17.2049C17.3196 16.0976 17.6977 14.9855 19.2062 14.9855C20.911 14.9855 20.9008 16.4345 20.8928 17.5571C20.8824 19.0244 20.9072 20.5219 20.9072 22H24V17.0537C23.9738 13.8954 23.1508 12.4401 20.4433 12.4401C18.8354 12.4401 17.8387 13.1701 17.3196 13.8305V12.6281Z" fill="white"></path>
                        </svg>
                    </a>
                </div>
            </div>
        </div>
    );
}

export default ServiceFooter;
