import * as React from "react";
import type { SVGProps } from "react";
const SvgDownload = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={60}
    height={60}
    fill="none"
    {...props}
  >
    <g
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={3}
      clipPath="url(#download_svg__a)"
    >
      <path d="M17.5 45c-3.12 0-6.111-1.185-8.317-3.295s-3.445-4.971-3.445-7.955 1.24-5.845 3.445-7.955S14.38 22.5 17.5 22.5c.736-3.282 2.892-6.166 5.991-8.018a14.9 14.9 0 0 1 5.063-1.872 15.6 15.6 0 0 1 5.473.015 14.9 14.9 0 0 1 5.05 1.899 13.4 13.4 0 0 1 3.86 3.493 12 12 0 0 1 2.079 4.557c.354 1.627.348 3.3-.016 4.926h2.5a8.75 8.75 0 1 1 0 17.5H45" />
      <path d="M22.5 37.5 30 30l7.5 7.5M30 30v22.5" />
    </g>
    <defs>
      <clipPath id="download_svg__a">
        <path fill="#fff" d="M0 0h60v60H0z" />
      </clipPath>
    </defs>
  </svg>
);
export default SvgDownload;
