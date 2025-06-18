import * as React from "react";
import type { SVGProps } from "react";
const SvgCode = (props: SVGProps<SVGSVGElement>) => (
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
      strokeWidth={2}
      d="M7.583 8.667 3.25 13l4.333 4.333M18.417 8.667 22.75 13l-4.333 4.333M15.166 4.334l-4.333 17.333"
    />
  </svg>
);
export default SvgCode;
