import React from 'react';

export interface IconProps {
  className?: string;
  isActive?: boolean;
}

export const HeartIcon: React.FC<IconProps> = ({ 
  className = "", 
  isActive = false 
}) => (
  <svg 
    xmlns="http://www.w3.org/2000/svg" 
    viewBox="0 0 24 24" 
    fill={isActive ? "currentColor" : "none"}
    stroke="currentColor" 
    className={`${className} transition-colors duration-300 ${isActive ? 'text-red-500' : ''}`}
  >
    <path 
      strokeLinecap="round" 
      strokeLinejoin="round" 
      d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12z" 
    />
  </svg>
);

export const CompareIcon: React.FC<IconProps> = ({ 
  className = "", 
  isActive = false 
}) => (
  <svg 
    xmlns="http://www.w3.org/2000/svg" 
    viewBox="0 0 24 24" 
    fill={isActive ? "currentColor" : "none"}
    stroke="currentColor"
    className={`${className} transition-colors duration-300 ${isActive ? 'text-blue-500' : ''}`}
  >
    <path 
      strokeLinecap="round" 
      strokeLinejoin="round" 
      d="M7.5 14.25v2.25m3-4.5v4.5m3-6.75v6.75m3-9v9M6 20.25h12A2.25 2.25 0 0020.25 18V6A2.25 2.25 0 0018 3.75H6A2.25 2.25 0 003.75 6v12A2.25 2.25 0 006 20.25z"
    />
  </svg>
);

export const StarIcon: React.FC<IconProps> = ({ className = "" }) => (
  <svg 
    xmlns="http://www.w3.org/2000/svg" 
    viewBox="0 0 24 24" 
    fill="currentColor" 
    className={className}
  >
    <path 
      fillRule="evenodd" 
      d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.007 5.404.433c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.433 2.082-5.006z"
      clipRule="evenodd"
    />
  </svg>
); 