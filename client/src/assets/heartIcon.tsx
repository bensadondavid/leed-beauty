
export const HeartIcon = ({ size = 20, color = 'currentColor', ...props }) => (
  <svg 
    xmlns="http://www.w3.org/2000/svg" 
    viewBox="0 0 21 21" 
    width={size} 
    height={size} 
    fill={color}
    {...props}
  >
    <path xmlns="http://www.w3.org/2000/svg" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" d="M10.5 6.5c.5-2.5 4.343-2.657 6-1c1.603 1.603 1.5 4.334 0 6l-6 6l-6-6a4.243 4.243 0 0 1 0-6c1.55-1.55 5.5-1.5 6 1z"/>
  </svg>
);
