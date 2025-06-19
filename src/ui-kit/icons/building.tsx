import * as React from "react";
import type { SVGProps } from "react";
const SvgBuilding = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={18}
    height={18}
    fill="none"
    {...props}
  >
    <path
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M2.25 15.75h13.5M6.75 6h.75M6.75 9h.75M6.75 12h.75M10.5 6h.75M10.5 9h.75M10.5 12h.75M3.75 15.75v-12a1.5 1.5 0 0 1 1.5-1.5h7.5a1.5 1.5 0 0 1 1.5 1.5v12"
    />
  </svg>
);
export default SvgBuilding;
