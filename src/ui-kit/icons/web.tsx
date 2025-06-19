import * as React from "react";
import type { SVGProps } from "react";
const SvgWeb = (props: SVGProps<SVGSVGElement>) => (
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
      strokeWidth={1.2}
      d="M2.25 9a6.75 6.75 0 1 0 13.5 0 6.75 6.75 0 0 0-13.5 0M2.7 6.75h12.6M2.7 11.25h12.6"
    />
    <path
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.2}
      d="M8.625 2.25a12.75 12.75 0 0 0 0 13.5M9.375 2.25a12.75 12.75 0 0 1 0 13.5"
    />
  </svg>
);
export default SvgWeb;
