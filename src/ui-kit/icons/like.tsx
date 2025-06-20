import * as React from "react";
import type { SVGProps } from "react";
const SvgLike = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={24}
    height={24}
    fill="none"
    {...props}
  >
    <g clipPath="url(#like_svg__a)">
      <path
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={1.4}
        d="M7 11v8a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1v-7a1 1 0 0 1 1-1zm0 0a4 4 0 0 0 4-4V6a2 2 0 1 1 4 0v5h3a2 2 0 0 1 2 2l-1 5c-.144.613-.417 1.14-.777 1.501-.361.36-.79.536-1.223.499h-7a3 3 0 0 1-3-3"
      />
    </g>
    <defs>
      <clipPath id="like_svg__a">
        <path fill="#fff" d="M0 0h24v24H0z" />
      </clipPath>
    </defs>
  </svg>
);
export default SvgLike;
