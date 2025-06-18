import * as React from "react";
import type { SVGProps } from "react";
const SvgCalendar = (props: SVGProps<SVGSVGElement>) => (
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
      d="M4.333 7.583A2.167 2.167 0 0 1 6.5 5.417h13a2.167 2.167 0 0 1 2.166 2.166v13A2.166 2.166 0 0 1 19.5 22.75h-13a2.166 2.166 0 0 1-2.167-2.167zM17.333 3.25v4.333M8.667 3.25v4.333M4.333 11.917h17.333M7.583 15.167h.014M10.844 15.167h.005M14.094 15.167h.005M17.35 15.167h.005M14.1 18.417h.005M7.594 18.417h.005M10.844 18.417h.005"
    />
  </svg>
);
export default SvgCalendar;
