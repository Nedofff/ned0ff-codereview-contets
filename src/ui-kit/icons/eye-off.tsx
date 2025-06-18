import * as React from "react";
import type { SVGProps } from "react";

const SvgEyeOff = (props: SVGProps<SVGSVGElement>) => (
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
      clipPath="url(#eyeoff_svg__a)"
    >
      <path d="M10 12a2 2 0 1 0 4 0 2 2 0 0 0-4 0" />
      <path d="M21 12q-3.6 6-9 6t-9-6q3.6-6 9-6t9 6" />
      {/* Линия перечеркивания */}
      <path d="m6 6 12 12" />
    </g>
    <defs>
      <clipPath id="eyeoff_svg__a">
        <path fill="#fff" d="M0 0h24v24H0z" />
      </clipPath>
    </defs>
  </svg>
);

export default SvgEyeOff;
