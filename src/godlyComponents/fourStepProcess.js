import React from 'react';
import '@/styles/fourstepprocess.css';
import Image from 'next/image';
import scrub from '../assets/scrub.png';
import shield from '../assets/shield.png';
import squeegee from '../assets/squeegee.png';
import detail from '../assets/detail.png';
import spark from '../assets/spark.png';


const FourStepProcess = () => {
  const steps = [
    {
      number: '01',
      icon: <Image src={scrub} className='fourstepicon' />,
      title: 'Scrub',
      text: 'Wash away years of pollen, mold, rust, and dirt — bringing that shine back to your property’s exterior.',
    },
    {
      number: '02',
      icon: <Image src={squeegee} className='fourstepicon' />,
      title: 'Squeegee',
      text: 'Wash away years of pollen, mold, rust, and dirt — bringing that shine back to your property’s exterior.',
    },
    {
      number: '03',
      icon: <Image src={detail} className='fourstepicon' />,
      title: 'Detail',
      text: 'Wash away years of pollen, mold, rust, and dirt — bringing that shine back to your property’s exterior.',
    },
    {
      number: '04',
      icon: <Image src={shield} className='fourstepicon' />,
      title: 'RainShield Tech',
      text: 'Wash away years of pollen, mold, rust, and dirt — bringing that shine back to your property’s exterior.',
    },
  ];
  return (
    <div className="fourstepprocess">
      <div className='fourstepprocess-inner'>
        <div className='heading'>
          <h1>OUR 4 STEP PROCESS</h1>
          <h4 style={{ color: '#FDE4C8', fontSize: '30px', marginTop: '-30px', marginBottom: '-30px', fontFamily: 'luminaire-script' }}>With</h4>
          <h1>RAINGUARD TECH</h1>
        </div>


        <div className="text-white py-16" style={{ marginTop: '4rem' }}>
          <div className="flex justify-center items-center relative z-10">
            {steps.map((step, index) => (
              <React.Fragment key={index}>
                <div className="flex flex-col items-center">
                  <div className="text-[#E7C6A4]  text-2xl mb-2">{step.number}</div>
                </div>

                {/* Add the dotted line unless it's the last element */}
                {index !== steps.length - 1 && (
                  <div className="h-0.5 w-65 border-t-2 border-dotted border-[#E7C6A4] " style={{ margin: '0px 15px' }}></div>
                )}
              </React.Fragment>
            ))}
          </div>
        </div>


        <div className="text-white py-16" style={{ marginTop: '2rem', marginBottom:'8rem' }}>
        <div className="flex flex-wrap justify-center gap-6 sm:gap-8 md:gap-12 px-4 sm:px-6 md:px-8 relative z-10">
            {steps.map((step, index) => (
              <div key={index} className="flex flex-col items-center">

                <div className="bg-[#E7C6A4] text-black p-6 rounded shadow relative z-10  w-64 stepcontainer">
                  <div className='stepcontainer-inner border-2 border-black'>
                    <div className="flex justify-center mb-4" >{step.icon}</div>
                    <div className="text-center  text-xl mb-8" style={{ marginBottom: '1rem' }}>{step.title}</div>
                    <p className="text-center  " style={{ fontFamily: 'sans-serif' }}>{step.text}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="flex flex-col items-center justify-center gap-2 p-8">

      <Badge text="7 day Sparkle Guarantee" />
      <Badge text="hard water stain removal" />
    </div>

      </div>

    </div>
  );
};

const Badge = ({ text }) => (
  <div style={{padding:'1rem 2rem'}} className="flex items-center gap-2 bg-neutral-800 text-white px-4 py-2 rounded-md w-fit hover:rotate-[-10deg] transition-transform duration-300 cursor-pointer">
    <span className="text-yellow-400 h-5 w-5 flex item-center justify-center" > <Image src={spark}></Image></span>
    <span>
      <span className="text-[#E7C6A4] " style={{marginRight:"0.5rem" ,textDecoration:'underline'}}>FREE</span>
      {text}
    </span>
  </div>
);
export default FourStepProcess;
