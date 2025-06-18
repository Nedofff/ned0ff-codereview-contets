import * as React from "react";
import type { SVGProps } from "react";
const SvgSparkles = (props: SVGProps<SVGSVGElement>) => (
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
      strokeWidth={1.8}
      d="M17.333 19.5a2.166 2.166 0 0 1 2.167 2.167 2.167 2.167 0 0 1 2.167-2.167 2.167 2.167 0 0 1-2.167-2.166 2.167 2.167 0 0 1-2.167 2.166m0-13A2.167 2.167 0 0 1 19.5 8.667 2.167 2.167 0 0 1 21.667 6.5 2.167 2.167 0 0 1 19.5 4.334 2.167 2.167 0 0 1 17.333 6.5m-7.583 13a6.5 6.5 0 0 1 6.5-6.5 6.5 6.5 0 0 1-6.5-6.5 6.5 6.5 0 0 1-6.5 6.5 6.5 6.5 0 0 1 6.5 6.5"
    />
  </svg>
);
export default SvgSparkles;
