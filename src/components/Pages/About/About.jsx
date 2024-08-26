import React, { useRef } from 'react';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import logo from './../../../assets/seawave/seawaveblacktextlogo.png';

function About() {
  const AboutEffect = useRef();
  const logoRef = useRef();
  const truck1Ref = useRef();
  const truck2Ref = useRef();
  const personRef = useRef();
  const HeadingEffect = useRef();

  useGSAP(() => {
    let tl = gsap.timeline();

    // Sequence the animations in the desired order
    tl.from(AboutEffect.current, {
      opacity: 0,
      duration: 0.5,  // Reduced duration
      y: 20,
      delay: 0.1,     // Reduced delay
    })
      .from(logoRef.current, {
        opacity: 0,
        duration: 0.5,  // Reduced duration
        x: -40,
        delay: 0.2,     // Reduced delay
      })
      .from(truck1Ref.current, {
        opacity: 0,
        duration: 0.5,  // Reduced duration
        x: 20,
        y: -20,
        delay: 0.3,     // Reduced delay
      })
      .from(truck2Ref.current, {
        opacity: 0,
        duration: 0.5,  // Reduced duration
        x: -45,
        y: -25,
        delay: 0.4,     // Reduced delay
      })
      .from(personRef.current, {
        opacity: 0,
        duration: 0.5,  // Reduced duration
        x: -20,
        delay: 0.5,     // Reduced delay
      })
      .from(HeadingEffect.current, {
        opacity: 0,
        duration: 0.5,  // Reduced duration
        x: 45,
        delay: 0.6,     // Reduced delay
      });
  });

  return (
    <div className='h-auto p-8 w-full bg-white text-black'>
      <div className='h-auto'>
        <div ref={AboutEffect} className='flex flex-col gap-4 justify-center items-center'>
          <h1 className='text-2xl md:text-5xl'>About Us</h1>
          <div className='lino'></div>
        </div>
        <div className='md:flex md:flex-col'>
          <div className='section1 flex flex-col md:flex-row items-center justify-between mx-auto md:py-2 py-2'>
            <div ref={logoRef} className='md:text-6xl text-3xl p-4 font-medium GradientText'>
              <img src={logo} className='w-full md:w-[500px]' alt='Logo' />
            </div>
            <div className='md:w-1/2 md:inline hidden'>
              <img ref={truck1Ref} src='https://uploads-ssl.webflow.com/63ede56f5ceca72669fcaced/63f1f1dde1e45ab1ef4ad094_mini%20track.png' alt='Truck 1' className='w-full' />
            </div>
          </div>
          <div className='section2 flex flex-col md:flex-row items-center justify-between mx-auto md:py-2 py-2'>
            <div className='flex flex-col md:flex-row'>
              <div className='flex justify-center md: md:flex-row md:1/2'>
                <div ref={personRef} className='md:pr-8  md:pt-6'>
                  <img className='md:h-20 h-12 w-full' src='https://uploads-ssl.webflow.com/63ede56f5ceca72669fcaced/63f2f5ea222b9b7f59eacfc7_logi%20man.png' alt='Person' />
                </div>
                <div ref={truck2Ref} className='md:w-1/2'>
                  <img className='md:h-52 md:w-80 w-28 h-24' src='https://uploads-ssl.webflow.com/63ede56f5ceca72669fcaced/63f1f1de63ea2217e333ebca_track.png' alt='Truck 2' />
                </div>
              </div>
              <div ref={HeadingEffect} className='md:order-2 text-center mx-auto md:mb-0 mb-2'>
                <div className='md:text-6xl text-3xl p-4 font-medium GradientText'>
                  <h1 className='text-center md:my-2'>Safe reliable</h1>
                  <h1 className='text-center'>Logistic Solutions</h1>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className='px-1 md:px-16 md:py-4 py-1'>
        <p><span className='GradientText font-medium'>SEAWAVE FORWARDING AND LOGISTICS PVT LTD</span> has the ability to meet the everyday changes in the industry must be attributed to its dedicated and experienced staff.</p>
        <p><span className='GradientText font-medium'>SEAWAVE</span> is more than just another freight forwarding company. It is a dynamic organization that meets the challenges of the ever-changing freight industry.</p>
        <p>The company's efficient staff takes charge of the entire process of planning, implementing, and controlling the efficient and cost-effective flow of goods and related information from the point of origin to the final destination, for the purpose of confirming to customer requirements. The management team of <span className='GradientText font-medium'>SEAWAVE</span> is made up of highly experienced freight forwarding professionals who share SEAWAVE's commitment to achieving the highest standards of excellence.</p>
      </div>
      <div className='my-4 px-4 md:px-16 flex flex-col items-center'>
        <h2 className='text-xl md:text-2xl font-normal'>A Commitment to Quality :</h2>
        <p className='text-center font-light my-2'>A commitment to find the best solution for the individual needs of each customer, or as we like to think, each business partner. Studies are carried out for costs of transportation, for alternatives, customer service needs, communication etc.</p>
        <p className='text-center font-light my-2'>In-house training programs are conducted on various subjects like Customs, Carrier Procedures, and customer service.</p>
      </div>
      <div className='px-1 md:px-16 py-6'>
        <div className='flex flex-col gap-2 justify-center items-center'>
          <h4 className='text-2xl md:text-3xl font-normal'>Special Expertise</h4>
          <div className='lino mb-4'></div>
        </div>
        <div className='flex flex-col md:flex-row justify-between px-4'>
          <div className='w-full md:w-1/2 flex flex-col gap-2 font-light'>
            <p>Our wealth of expertise includes understanding the unique challenges which our clients face.</p>
            <p>We believe in teamwork with committed performance to meet the needs of customers up to their satisfaction, having well-experienced, qualified & trained staff, supported by fully computerized documentation, latest communication & networking systems.</p>
            <p>We use our sector-specific knowledge and understanding of company requirements to ensure clients achieve their objectives.</p>
          </div>
          <div className='flex justify-center items-center'>
            <img className='w-full md:w-[482px] h-auto' src='https://www.seawave.in/images/inner-pages/special-expertise.webp' alt='Special Expertise' />
          </div>
        </div>
      </div>
      <div className='px-1 md:px-16 py-8'>
        <div className='flex flex-col gap-2 justify-center items-center'>
          <h4 className='text-xl md:text-2xl font-normal'>About Our Managing Director</h4>
          <div className='lino my-4'></div>
        </div>
        <div className='flex flex-col md:flex-row justify-between px-4'>
          <div className='flex justify-center items-center my-6'>
            <img className='w-full md:w-[500px] h-auto' src='https://www.seawave.in/images/message-from-founders/md-message.webp' alt='Managing Director' />
          </div>
          <div className='w-full md:w-1/2 flex flex-col gap-2 font-light'>
            <p><span className='font-semibold'>Nalinikant Mishra - The Managing Director</span> - <span className='GradientText font-medium'>SEAWAVE FORWARDING AND LOGISTICS PVT LTD</span> is one of the most renowned names in the logistics industry today. With a B.E. (Civil) degree to his credit, he started his career with Asia Foundation & Constructions Limited (AFCONS) as a Site Engineer, where he was exposed to make strategy, planning, and implementation.</p>
            <p>Thereafter, he switched to the role of an EXIM Consultant to develop strategic layouts and design regarding logistics and custom clearance with his learnings, experience, and qualified mind.</p>
            <p>In 1996, after adequate working experience, learning, and implementation practice with several top-notch companies, he started practicing as a CHA Agent with a temporary license, and in 2004 he incorporated his own company.</p>
            <p><span className='font-semibold'>Mr. N.K. Mishra</span>, believes that he has the responsibility to return what he has gained from society in a better form. He is associated with Rotary International as well as is an active member of ACIC and so forth have connected his life’s work to build a fruitful and better environment for all the individuals of the society and <span className='font-semibold'>Director of M/S-Indo-Latin American Chamber of Commerce</span> for Mumbai zone.</p>
          </div>
        </div>
      </div>
      <div className='px-1 md:px-16'>
        <div className='flex flex-col items-center'>
          <h4 className='text-xl md:text-2xl font-normal'>OUR AFFILIATIONS</h4>
          <div className='lino my-6'></div>
        </div>
        <div className='text-center font-light'>
          <span className='GradientText font-medium'>SEAWAVE FORWARDING AND LOGISTICS PVT LTD</span> has always been conscientious to comply with the norms and rules of safety, security, and quality control. It is our privilege to be associated with the lawmakers and policy development panels who lay down the best practices for our business. In our attempt to be a leader in the logistics domain, we wish to operate by the rulebook; stand by the world’s most reputed professional organizations that officially confirm that Seawave Forwarding & Logistics Pvt. Ltd. meets all the desired standards.
        </div>
        <div className='flex flex-col md:flex-row justify-center items-center text-lg md:text-2xl font-semibold gap-2 my-2 text-slate-600'>
          <div className='text-center'>ISO Certified: 9001:2015</div>
          <div className='text-center'>AEO Certificate No.: INAAICS7836D0F236</div>
        </div>
      </div>
      <div className='px-1 md:px-12'>
        <div className='my-6 font-light'>
          <span className='GradientText font-medium'>SEAWAVE FORWARDING AND LOGISTICS PVT LTD</span> is affiliated, endorsed, and certified with the following organizations and professional bodies:
        </div>
        <div className='flex md:flex-row flex-col items-center justify-center'>
          <div className='flex gap-6'>
            <img src='https://www.seawave.in/images/affiliation/1.webp' alt='Affiliation 1' className='p-2 md:w-32 w-16' />
            <img src='https://www.seawave.in/images/affiliation/2.webp' alt='Affiliation 2' className='p-2 md:w-32 w-16' />
            <img src='https://www.seawave.in/images/affiliation/3.webp' alt='Affiliation 3' className='p-2 md:w-32 w-16' />
          </div>
          <div className='flex gap-6'>
            <img src='https://www.seawave.in/images/affiliation/4.webp' alt='Affiliation 4' className='p-2 md:w-32 w-16' />
            <img src='https://www.seawave.in/images/affiliation/5.webp' alt='Affiliation 5' className='p-2 md:w-32 w-16' />
            <img src='https://www.seawave.in/images/affiliation/6.webp' alt='Affiliation 6' className='p-2 md:w-32 w-16' />
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;
