import * as React from "react";
import type { SVGProps } from "react";
const SvgDuck = (
  props: SVGProps<SVGSVGElement> & { withGradient?: boolean }
) => {
  const { withGradient = false, ...rest } = props;
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={22}
      height={22}
      fill="none"
      {...rest}
    >
      <path
        fill={withGradient ? "url(#duck_svg__a)" : "currentColor"}
        d="M3.352 8.943a.4.4 0 0 1 .164-.12.41.41 0 0 1 .385.039q.086.059.14.15c.224.4.546.726.89.986a4.33 4.33 0 0 0 2.626.866h2.59c.22 0 .323-.131.357-.325a.74.74 0 0 0-.035-.367.7.7 0 0 0-.207-.298A4.47 4.47 0 0 1 8.85 7.557a4.7 4.7 0 0 1 .154-2.752 4.4 4.4 0 0 1 1.661-2.123 4 4 0 0 1 2.525-.67c1.867.135 3.407 1.598 3.792 3.488q.015.066.06.114.044.047.107.061.818.175 1.65.232.054.005.1.035t.073.08a.24.24 0 0 1 .005.217c-.456.973-1.259 1.665-1.976 2.124-.293.186-.55.43-.755.719l-.014.02a.97.97 0 0 0 .128 1.255c1.69 1.592 2.036 3.055 2.03 4.306-.004 1.672-.874 3.085-2.235 3.933-3.262 2.032-7.683 1.499-9.769.638-1.598-.66-3.117-1.786-3.783-3.46-1.362-3.424-.109-5.816.749-6.83m11.574-2.51c.142 0 .28-.045.398-.129a.75.75 0 0 0 .264-.34.8.8 0 0 0 .04-.44.8.8 0 0 0-.195-.389.7.7 0 0 0-.367-.208.7.7 0 0 0-.415.044.73.73 0 0 0-.321.28.79.79 0 0 0 .089.959.7.7 0 0 0 .507.222"
      />
      <defs>
        <linearGradient
          id="duck_svg__a"
          x1={19}
          x2={2}
          y1={11}
          y2={11}
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#E25377" />
          <stop offset={0.49} stopColor="#EEB902" />
          <stop offset={1} stopColor="#62B4FF" />
        </linearGradient>
      </defs>
    </svg>
  );
};
export default SvgDuck;
