import * as React from "react";
import type { SVGProps } from "react";

const SvgTelegram = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={30}
    height={30}
    fill="none"
    {...props}
    className={`group ${props.className}`}
  >
    <path
      fill="currentColor"
      fillRule="evenodd"
      d="M15 0C6.716 0 0 6.716 0 15s6.716 15 15 15 15-6.716 15-15S23.284 0 15 0m6.953 10.201c-.226 2.372-1.203 8.128-1.7 10.784-.21 1.125-.624 1.502-1.025 1.538-.87.08-1.532-.575-2.376-1.129-1.32-.865-2.066-1.404-3.347-2.248-1.482-.976-.521-1.512.322-2.389.221-.23 4.06-3.72 4.134-4.037.01-.04.018-.187-.07-.265s-.217-.051-.31-.03q-.2.045-6.327 4.182-.899.616-1.628.6c-.535-.01-1.565-.302-2.331-.551-.94-.305-1.686-.467-1.62-.986q.05-.405 1.115-.828 6.559-2.858 8.747-3.768C19.703 9.34 20.57 9.04 21.133 9.03c.707-.013.877.57.82 1.171"
      clipRule="evenodd"
      className="group-hover:fill-[url(#gradient-tertiary)]"
    />
    <linearGradient id="gradient-tertiary" x1="0%" x2="100%" y1="0%" y2="0%">
      <stop offset="5%" stopColor="#E25377" />
      <stop offset="49.04%" stopColor="#EEB902" />
      <stop offset="100%" stopColor="#62B4FF" />
    </linearGradient>
  </svg>
);
export default SvgTelegram;
