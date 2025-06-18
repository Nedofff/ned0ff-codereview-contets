import * as React from "react";
import type { SVGProps } from "react";
const SvgYoutube = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={30}
    height={30}
    fill="none"
    {...props}
    className={`group ${props.className}`}
  >
    <g
      fill="currentColor"
      clipPath="url(#youtube_svg__a)"
      className="group-hover:fill-[url(#gradient-tertiary)]"
    >
      <path d="m12.92 17.42 4.16-2.414-4.16-2.426z" />
      <path d="M15 0a15 15 0 1 0 0 30 15 15 0 0 0 0-30m7.895 17.655a2.985 2.985 0 0 1-2.986 2.988h-9.817a2.986 2.986 0 0 1-2.987-2.988v-5.31a2.987 2.987 0 0 1 2.986-2.988h9.818a2.986 2.986 0 0 1 2.986 2.988z" />
    </g>
    <defs>
      <clipPath id="youtube_svg__a">
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
export default SvgYoutube;
