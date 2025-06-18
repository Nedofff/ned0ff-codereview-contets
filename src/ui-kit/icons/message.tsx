import * as React from "react";
import type { SVGProps } from "react";
const SvgMessage = (props: SVGProps<SVGSVGElement>) => (
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
      d="M8.667 9.75h8.667M8.667 14.084h6.5M9.75 19.5H6.5a3.25 3.25 0 0 1-3.25-3.25V7.584a3.25 3.25 0 0 1 3.25-3.25h13a3.25 3.25 0 0 1 3.25 3.25v8.666a3.25 3.25 0 0 1-3.25 3.25h-3.25L13 22.75z"
    />
  </svg>
);
export default SvgMessage;
