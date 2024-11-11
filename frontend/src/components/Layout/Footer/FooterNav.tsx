import React from 'react';
import { Link } from 'react-router-dom';

interface FooterNavProps {
  title: string;
  links: Array<{ href: string; text: string }>;
}

const FooterNav: React.FC<FooterNavProps> = ({ title, links }) => {
  return (
    <nav className="flex flex-col grow items-start mt-16 text-sm leading-none text-zinc-400 max-md:mt-10">
      <h3 className="text-xl leading-none text-white">{title}</h3>
      {links.map((link, index) => (
        <Link 
          key={index}
          to={link.href}
          className="mt-[30px] first:mt-8 hover:text-white transition-colors"
        >
          {link.text}
        </Link>
      ))}
    </nav>
  );
};

export default FooterNav;