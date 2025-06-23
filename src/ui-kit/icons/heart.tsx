import * as React from "react";
import type { SVGProps } from "react";
const SvgHeart = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={31}
    height={31}
    fill="none"
    {...props}
  >
    <g clipPath="url(#heart_svg__a)">
      <path
        fill="#FB6A6A"
        d="M7.595 8.339a6 6 0 0 1 5.182-.24l.045.02.023-.039a6 6 0 0 1 4.027-2.873l.245-.045a6 6 0 0 1 6.378 8.414l-.112.233-.032.054-4.71 9.369a1 1 0 0 1-1.218.496l-.115-.048-9.468-4.647A6 6 0 0 1 7.595 8.34"
      />
    </g>
    <defs>
      <clipPath id="heart_svg__a">
        <path fill="#fff" d="M0 7.65 22.748 0l7.65 22.748-22.749 7.65z" />
      </clipPath>
    </defs>
  </svg>
);
export default SvgHeart;
