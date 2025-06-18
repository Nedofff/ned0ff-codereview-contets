import * as React from "react";
import type { SVGProps } from "react";
const SvgStack = (props: SVGProps<SVGSVGElement>) => (
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
      d="M13 4.334 4.333 8.667 13 13l8.666-4.333zM4.333 13 13 17.333 21.666 13M4.333 17.334 13 21.667l8.666-4.334"
    />
  </svg>
);
export default SvgStack;
