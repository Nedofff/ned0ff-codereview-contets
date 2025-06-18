import * as React from "react";
import type { SVGProps } from "react";
const SvgLinkedin = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={30}
    height={30}
    fill="none"
    {...props}
    className={`group ${props.className}`}
  >
    <g clipPath="url(#linkedin_svg__a)">
      <path
        fill="currentColor"
        className="group-hover:fill-[url(#gradient-tertiary)]"
        d="M15 0a15 15 0 1 0 0 30 15 15 0 0 0 0-30m-4.362 22.895H7.366V12.353h3.272zM9 10.915A1.905 1.905 0 1 1 10.897 9 1.91 1.91 0 0 1 9 10.915m13.895 11.98h-3.27v-5.132c0-1.224-.024-2.793-1.702-2.793s-1.974 1.33-1.974 2.704v5.22h-3.258v-10.54h3.14v1.436h.045c.437-.829 1.504-1.703 3.097-1.703 3.312 0 3.922 2.183 3.922 5.017z"
      />
    </g>
    <defs>
      <clipPath id="linkedin_svg__a">
        <path fill="currentColor" d="M0 0h30v30H0z" />
      </clipPath>
    </defs>
    <linearGradient id="gradient-tertiary" x1="0%" x2="100%" y1="0%" y2="0%">
      <stop offset="5%" stopColor="#E25377" />
      <stop offset="49.04%" stopColor="#EEB902" />
      <stop offset="100%" stopColor="#62B4FF" />
    </linearGradient>
  </svg>
);
export default SvgLinkedin;
