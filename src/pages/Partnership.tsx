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
    src: 'https://avdynam.com/wp-content/uploads/2023/10/AV-Dynamics-Logo-White-1.png',
    alt: 'AV Dynamics Logo',
    description: 'AV Dynamics: Experts in AI surveillance, Events and advanced technology integration.'
  }
];

const Partnership = () => (
  <div className="min-h-screen flex flex-col justify-center items-center bg-black py-24">
    <h1 className="text-3xl md:text-4xl font-bold text-white mb-12">Our Partners</h1>
    <div className="flex flex-row gap-12 justify-center items-start">
      {partners.map((partner, idx) => (
        <div key={idx} className="flex flex-col items-center text-center max-w-xs">
          <img src={partner.src} alt={partner.alt} className="h-16 w-auto object-contain rounded-lg bg-white/10 p-4 mb-4" />
          <p className="text-white/80 text-sm">{partner.description}</p>
        </div>
      ))}
    </div>
  </div>
);

export default Partnership; 