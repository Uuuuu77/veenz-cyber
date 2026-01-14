interface VeenzLogoProps {
  size?: 'sm' | 'md' | 'lg';
  className?: string;
}

const sizeMap = {
  sm: 32,
  md: 40,
  lg: 48,
};

const VeenzLogo = ({ size = 'md', className = '' }: VeenzLogoProps) => {
  const dimension = sizeMap[size];
  
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 32 32"
      width={dimension}
      height={dimension}
      className={className}
      aria-label="Veenz Cyber Logo"
    >
      <defs>
        <linearGradient id="veenzLogoGrad" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" style={{ stopColor: 'hsl(222, 47%, 33%)' }} />
          <stop offset="100%" style={{ stopColor: 'hsl(222, 47%, 45%)' }} />
        </linearGradient>
      </defs>
      <rect width="32" height="32" rx="6" fill="url(#veenzLogoGrad)" />
      <path
        d="M8 8 L16 24 L24 8"
        stroke="hsl(4, 90%, 45%)"
        strokeWidth="4"
        strokeLinecap="round"
        strokeLinejoin="round"
        fill="none"
      />
      <path
        d="M10 8 L16 20 L22 8"
        stroke="white"
        strokeWidth="2.5"
        strokeLinecap="round"
        strokeLinejoin="round"
        fill="none"
      />
    </svg>
  );
};

export default VeenzLogo;
