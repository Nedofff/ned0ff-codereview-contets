import * as React from "react";
import type { SVGProps } from "react";
const SvgAsterisk = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={10}
    height={10}
    fill="none"
    {...props}
  >
    <g
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      clipPath="url(#asterisk_svg__a)"
    >
      <path d="M5 5 8.077 3.46M5 5v3.462M5 5 1.925 3.46M5 5l3.077 1.923M5 1.539V5M5 5 1.925 6.923" />
    </g>
    <defs>
      <clipPath id="asterisk_svg__a">
        <path fill="#fff" d="M0 0h10v10H0z" />
      </clipPath>
    </defs>
  </svg>
);
export default SvgAsterisk;
