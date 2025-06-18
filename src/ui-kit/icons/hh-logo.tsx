import * as React from "react";
import type { SVGProps } from "react";
const SvgHhLogo = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={18}
    height={18}
    fill="none"
    {...props}
  >
    <g clipPath="url(#hh-logo_svg__a)">
      <mask
        id="hh-logo_svg__b"
        width={19}
        height={18}
        x={0}
        y={0}
        maskUnits="userSpaceOnUse"
        style={{
          maskType: "luminance",
        }}
      >
        <path fill="#fff" d="M.5 0h18v18H.5z" />
      </mask>
      <g mask="url(#hh-logo_svg__b)">
        <path
          fill="#FF0002"
          d="M9.5 18a9 9 0 0 0 9-9 9 9 0 0 0-9-9 9 9 0 0 0-9 9 9 9 0 0 0 9 9"
        />
        <path
          fill="#fff"
          d="M13.877 7.673c-.272-.281-.659-.435-1.131-.435-.588 0-1.039.239-1.298.686V5.706h-1.362v6.077h1.362V9.646c0-.497.102-.817.255-1.004.149-.187.358-.26.583-.26.2 0 .357.065.468.18.11.119.175.302.175.557v2.66h1.361V8.85c0-.498-.144-.903-.412-1.18zm-6.089-.435c-.587 0-1.038.239-1.297.686V5.706H5.129v6.077H6.49V9.646c0-.497.101-.817.255-1.004.148-.187.357-.26.583-.26.2 0 .357.065.468.18.11.119.174.302.174.557v2.66h1.362V8.85c0-.498-.145-.903-.417-1.183-.268-.281-.656-.43-1.128-.43"
        />
      </g>
    </g>
    <defs>
      <clipPath id="hh-logo_svg__a">
        <path fill="#fff" d="M.5 0h18v18H.5z" />
      </clipPath>
    </defs>
  </svg>
);
export default SvgHhLogo;
