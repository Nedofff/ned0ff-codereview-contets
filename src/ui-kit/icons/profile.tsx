import * as React from "react";
import type { SVGProps } from "react";
const SvgProfile = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={18}
    height={18}
    fill="none"
    {...props}
  >
    <path
      fill="currentColor"
      fillRule="evenodd"
      d="M8.999 1.5a3.75 3.75 0 1 0 0 7.5 3.75 3.75 0 0 0 0-7.5m-2.25 8.25c-1.247 0-2.447.569-3.15 1.425-.356.435-.607.973-.629 1.569-.022.609.198 1.203.651 1.721C4.725 15.73 6.49 16.5 9 16.5s4.273-.771 5.377-2.035c.454-.518.674-1.112.651-1.721-.022-.596-.272-1.134-.63-1.569-.7-.855-1.9-1.425-3.148-1.425z"
      clipRule="evenodd"
    />
  </svg>
);
export default SvgProfile;
