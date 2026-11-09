import React from 'react';
import { Sparkles } from 'lucide-react';

export const AnnouncementBar: React.FC = () => {
  return (
    <aside aria-label="Announcement" className="bg-[#EDF0E7] border-b border-[#E8E5DD] py-2 px-4 text-center text-xs text-[#434842] tracking-wide">
      <div className="max-w-7xl mx-auto flex items-center justify-center gap-2">
        <Sparkles className="w-3.5 h-3.5 text-[#8BA58D] shrink-0" aria-hidden="true" />
        <p className="font-medium truncate">
          A little inspiration for living a fuller, healthier and happier life.
        </p>
      </div>
    </aside>
  );
};
