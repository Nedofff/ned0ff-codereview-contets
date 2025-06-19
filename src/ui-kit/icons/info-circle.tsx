import * as React from "react";
import type { SVGProps } from "react";
const SvgInfoCircle = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={18}
    height={18}
    fill="none"
    {...props}
  >
    <path
      stroke="#000"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeOpacity={0.65}
      strokeWidth={1.5}
      d="M2.25 9a6.75 6.75 0 1 0 13.5 0 6.75 6.75 0 0 0-13.5 0M9 6.75h.007"
    />
    <path
      stroke="#000"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeOpacity={0.65}
      strokeWidth={1.5}
      d="M8.25 9H9v3h.75"
    />
  </svg>
);
export default SvgInfoCircle;
