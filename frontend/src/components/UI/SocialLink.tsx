import React from 'react';

interface SocialLinkProps {
  icon: string;
  label: string;
  href: string;
}

export const SocialLink: React.FC<SocialLinkProps> = ({ icon, label, href }) => {
  return (
    <a 
      href={href}
      className="flex gap-2 items-center text-zinc-400 hover:text-white transition-colors"
      aria-label={label}
    >
      <img
        loading="lazy"
        src={icon}
        alt=""
        className="object-contain w-4 h-4"
      />
      <span>{label}</span>
    </a>
  );
}; 