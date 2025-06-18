import * as React from "react";
import type { SVGProps } from "react";
const SvgPerson = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={18}
    height={18}
    fill="none"
    {...props}
  >
    <g
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      clipPath="url(#Person_svg__a)"
    >
      <path d="M8.667 7.583a4.333 4.333 0 1 0 8.667 0 4.333 4.333 0 0 0-8.667 0M6.5 22.75v-2.167a4.333 4.333 0 0 1 4.333-4.333h4.334a4.333 4.333 0 0 1 4.333 4.333v2.167" />
    </g>
    <defs>
      <clipPath id="Person_svg__a">
        <path fill="#fff" d="M0 0h26v26H0z" />
      </clipPath>
    </defs>
  </svg>
);
export default SvgPerson;
