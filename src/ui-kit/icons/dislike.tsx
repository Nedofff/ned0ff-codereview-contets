import * as React from "react";
import type { SVGProps } from "react";
const SvgDislike = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={24}
    height={24}
    fill="none"
    {...props}
  >
    <g clipPath="url(#dislike_svg__a)">
      <path
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={1.4}
        d="M7 13V5a1 1 0 0 0-1-1H4a1 1 0 0 0-1 1v7a1 1 0 0 0 1 1zm0 0a4 4 0 0 1 4 4v1a2 2 0 1 0 4 0v-5h3a2 2 0 0 0 2-2l-1-5c-.144-.614-.417-1.14-.777-1.501-.361-.36-.79-.536-1.223-.5h-7a3 3 0 0 0-3 3"
      />
    </g>
    <defs>
      <clipPath id="dislike_svg__a">
        <path fill="#fff" d="M0 0h24v24H0z" />
      </clipPath>
    </defs>
  </svg>
);
export default SvgDislike;
