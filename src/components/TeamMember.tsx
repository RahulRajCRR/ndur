import React, { useState } from 'react';

interface TeamMemberProps {
  name: string;
  title: string;
  description: string;
  imgSrc?: string;
  bgColor: string; // e.g. 'bg-pink-200'
}

const DUMMY_IMG = '/images/team/placeholder.svg';

const TeamMember: React.FC<TeamMemberProps> = ({ name, title, description, imgSrc, bgColor }) => {
  const [hovered, setHovered] = useState(false);
  return (
    <div
      className={`relative flex flex-col items-center justify-end h-[520px] w-[200px] overflow-hidden shadow-xl transition-transform duration-300 cursor-pointer ${bgColor} rounded-full`}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      style={{ minWidth: 180 }}
    >
      {/* Top pill: Name & Title */}
      <div className={`w-full h-[240px] flex flex-col items-center justify-start pt-10 px-4 z-20`}>
        <h3 className="font-bold text-base text-black mb-1 leading-tight text-center">{name}</h3>
        <p className="text-black/80 text-xs mb-2 text-center">{title}</p>
      </div>
      {/* Bottom pill: Image */}
      <div className="w-full h-[280px] overflow-hidden flex items-end justify-center bg-white/10">
        <img
          src={imgSrc || DUMMY_IMG}
          alt={name}
          className="w-full h-full object-cover object-top"
          draggable={false}
        />
      </div>
      {/* Hover Overlay */}
      <div
        className={`absolute inset-0 w-full h-full flex items-center justify-center px-5 py-8 bg-black/90 text-white text-center transition-opacity duration-300 z-30 ${hovered ? 'opacity-100' : 'opacity-0 pointer-events-none'} rounded-full`}
      >
        <span className="font-urbanist text-xs leading-relaxed">{description}</span>
      </div>
    </div>
  );
};

export default TeamMember;
