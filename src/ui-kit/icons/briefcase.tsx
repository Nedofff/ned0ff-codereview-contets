import * as React from "react";
import type { SVGProps } from "react";
const SvgBriefcase = (props: SVGProps<SVGSVGElement>) => (
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
      d="M3.25 9.75a2.167 2.167 0 0 1 2.167-2.166h15.166A2.167 2.167 0 0 1 22.75 9.75v9.75a2.167 2.167 0 0 1-2.167 2.167H5.417A2.166 2.166 0 0 1 3.25 19.5zM8.667 7.583V5.417a2.167 2.167 0 0 1 2.167-2.167h4.333a2.167 2.167 0 0 1 2.167 2.167v2.166M13 13v.01"
    />
    <path
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M3.25 14.084a21.67 21.67 0 0 0 19.5 0"
    />
  </svg>
);
export default SvgBriefcase;
