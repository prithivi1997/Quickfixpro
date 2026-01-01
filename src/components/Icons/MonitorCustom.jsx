const ChimneyIcon = ({ size = 48, color = "#7C3AED" }) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 64 64"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >

    <rect
      x="18"
      y="18"
      width="28"
      height="32"
      rx="3"
      stroke={color}
      strokeWidth="4"
    />

    <rect
      x="14"
      y="14"
      width="36"
      height="8"
      rx="3"
      stroke={color}
      strokeWidth="4"
    />


    <path
      d="M32 10 C28 6, 36 6, 32 2"
      stroke={color}
      strokeWidth="4"
      strokeLinecap="round"
    />
  </svg>
);

export default ChimneyIcon;

