import React from 'react';

const partners = [
  {
    src: 'https://sauravyog.com/lovable-uploads/6e19a42c-9aba-4f73-bd00-4d9840ce7242.png',
    alt: 'SauravYog Logo',
    description: 'SauravYog: Leaders in holistic wellness and yoga education.'
  },
  {
    src: 'https://th.bing.com/th/id/OLC.047jk6O3JR0XSw480x360?&rs=1&pid=ImgDetMain',
    alt: 'Bing AI Lo',
    description: 'Revive Restore Health PHYSIOTHERAPY & FITNESS CENTRE.'
  },
  {
    src: '/images/AVD-logo.png',
    alt: 'AV Dynamics Logo',
    description: 'AV Dynamics: Experts in AI surveillance, Events and advanced technology integration.'
  }
];

const Partnership = () => (
  <div className="min-h-screen flex flex-col justify-center items-center bg-black py-24">
    <h1
      className="font-bold mb-12"
      style={{
        fontSize: '5rem',
        color: '#d7263d',
        marginTop: '3rem',
        textAlign: 'center',
        lineHeight: 1.1
      }}
    >
      Our Partners
    </h1>
    <div className="flex flex-row gap-12 justify-center items-start flex-wrap">
      {partners.map((partner, idx) => (
        <div key={idx} className="flex flex-col items-center text-center max-w-xs">
          <div className="bg-white rounded-full w-48 h-48 flex items-center justify-center mb-6 shadow-lg">
            <img src={partner.src} alt={partner.alt} className="max-h-32 max-w-32 object-contain" />
          </div>
          <p className="text-white/80 text-base font-medium">{partner.description}</p>
        </div>
      ))}
    </div>
  </div>
);

export default Partnership; 