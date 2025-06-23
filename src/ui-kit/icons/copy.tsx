import * as React from "react";
import type { SVGProps } from "react";
const SvgCopy = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={18}
    height={18}
    fill="none"
    {...props}
  >
    <path
      stroke="#636469"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M5.25 7.25a2 2 0 0 1 2-2h6.5a2 2 0 0 1 2 2v6.5a2 2 0 0 1-2 2h-6.5a2 2 0 0 1-2-2z"
    />
    <path
      stroke="#636469"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M3.009 12.553a1.5 1.5 0 0 1-.759-1.303v-7.5c0-.825.675-1.5 1.5-1.5h7.5c.563 0 .868.289 1.125.75"
    />
  </svg>
);
export default SvgCopy;
