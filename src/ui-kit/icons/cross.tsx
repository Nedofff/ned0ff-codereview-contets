import * as React from "react";
import type { SVGProps } from "react";
const SvgCross = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={18}
    height={18}
    fill="none"
    {...props}
  >
    <g clipPath="url(#cross_svg__a)">
      <path
        fill="#000"
        fillOpacity={0.8}
        d="M13.437 1.69A.796.796 0 1 0 12.31.563L7.708 5.166a1 1 0 0 1-1.415 0L1.69.563A.796.796 0 1 0 .563 1.69l4.604 4.603a1 1 0 0 1 0 1.414L.563 12.31a.796.796 0 1 0 1.127 1.127l4.603-4.603a1 1 0 0 1 1.415 0l4.602 4.603a.797.797 0 0 0 1.127-1.127L8.833 7.707a1 1 0 0 1 0-1.414z"
      />
    </g>
    <defs>
      <clipPath id="cross_svg__a">
        <path fill="#fff" d="M0 0h14v14H0z" />
      </clipPath>
    </defs>
  </svg>
);
export default SvgCross;
