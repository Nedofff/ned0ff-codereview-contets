import * as React from "react";
import type { SVGProps } from "react";
const SvgMicrophone = (props: SVGProps<SVGSVGElement>) => (
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
      d="M9.75 5.417a3.25 3.25 0 1 1 6.5 0v5.416a3.25 3.25 0 0 1-6.5 0z"
    />
    <path
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M5.417 10.834a7.583 7.583 0 1 0 15.167 0M8.667 22.75h8.667M13 18.417v4.333"
    />
  </svg>
);
export default SvgMicrophone;
