import * as React from "react";
import type { SVGProps } from "react";
const SvgTelegramLogo = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={18}
    height={18}
    fill="none"
    {...props}
  >
    <g clipPath="url(#telegram-logo_svg__a)">
      <path
        fill="url(#telegram-logo_svg__b)"
        d="M9.5 18a9 9 0 1 0 0-18 9 9 0 0 0 0 18"
      />
      <path
        fill="#C8DAEA"
        d="m6.594 9.658 1.068 2.956s.133.276.276.276 2.27-2.212 2.27-2.212l2.364-4.567-5.94 2.784z"
      />
      <path
        fill="#A9C6D8"
        d="m8.01 10.416-.206 2.178s-.085.668.582 0c.667-.667 1.306-1.182 1.306-1.182"
      />
      <path
        fill="#fff"
        d="m6.61 9.763-2.197-.715s-.262-.107-.177-.348c.017-.05.052-.092.157-.165.487-.34 9.008-3.402 9.008-3.402s.24-.081.383-.027a.21.21 0 0 1 .14.154.7.7 0 0 1 .02.194c0 .056-.008.108-.013.19-.052.838-1.605 7.087-1.605 7.087s-.093.366-.426.379a.6.6 0 0 1-.444-.172c-.653-.562-2.911-2.08-3.41-2.414a.1.1 0 0 1-.041-.067c-.007-.035.03-.079.03-.079s3.933-3.495 4.037-3.862c.009-.028-.022-.042-.063-.03-.261.096-4.788 2.955-5.288 3.27a.24.24 0 0 1-.111.007"
      />
    </g>
    <defs>
      <linearGradient
        id="telegram-logo_svg__b"
        x1={9.5}
        x2={9.5}
        y1={18}
        y2={0}
        gradientUnits="userSpaceOnUse"
      >
        <stop stopColor="#1D93D2" />
        <stop offset={1} stopColor="#38B0E3" />
      </linearGradient>
      <clipPath id="telegram-logo_svg__a">
        <path fill="#fff" d="M.5 0h18v18H.5z" />
      </clipPath>
    </defs>
  </svg>
);
export default SvgTelegramLogo;
