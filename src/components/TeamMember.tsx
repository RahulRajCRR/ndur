
import React from 'react';
import { LucideIcon } from 'lucide-react';

interface TeamMemberProps {
  name: string;
  title: string;
  bio: string;
  imgSrc: string;
  icon: React.ReactNode;
}

const TeamMember: React.FC<TeamMemberProps> = ({ name, title, bio, imgSrc, icon }) => {
  return (
    <div className="bg-white/5 rounded-xl overflow-hidden border border-white/10 h-full flex flex-col">
      <div className="p-5 flex flex-col flex-grow">
        <div className="flex items-center mb-2">
          <div className="mr-2">{icon}</div>
          <h3 className="text-xl font-bold text-white font-inter">{name}</h3>
        </div>
        <p className="text-ndur-red mb-3 font-urbanist">{title}</p>
        <p className="text-white/70 font-urbanist text-sm flex-grow">{bio}</p>
      </div>
    </div>
  );
};

export default TeamMember;
