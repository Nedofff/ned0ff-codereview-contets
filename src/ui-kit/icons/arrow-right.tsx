import * as React from "react";
import type { SVGProps } from "react";
const SvgArrowRight = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={16}
    height={16}
    fill="none"
    {...props}
  >
    <path
      fill="#414246"
      d="M7.374 15.327a.94.94 0 0 1 .006-1.333l5.135-5.032-11.168-.05a.96.96 0 0 1-.674-.28.94.94 0 0 1 .006-1.339.96.96 0 0 1 .678-.274l11.168.064-5.084-5.084A.94.94 0 0 1 7.448.666a.957.957 0 0 1 1.346.006l6.698 6.699a.9.9 0 0 1 .2.307c.096.231.095.49-.003.72a.9.9 0 0 1-.203.306l-6.766 6.63a.957.957 0 0 1-1.346-.007"
    />
  </svg>
);
export default SvgArrowRight;
