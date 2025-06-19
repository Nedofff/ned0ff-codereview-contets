import * as React from "react";
import type { SVGProps } from "react";
const SvgMoneybag = (props: SVGProps<SVGSVGElement>) => (
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
      d="M7.125 2.25h3.75A1.125 1.125 0 0 1 12 3.375 2.625 2.625 0 0 1 9.375 6h-.75A2.625 2.625 0 0 1 6 3.375 1.125 1.125 0 0 1 7.125 2.25"
    />
    <path
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M3 12.75V12a6 6 0 1 1 12 0v.75a3 3 0 0 1-3 3H6a3 3 0 0 1-3-3"
    />
  </svg>
);
export default SvgMoneybag;
