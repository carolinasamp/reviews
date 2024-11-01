import * as React from "react";
import { SVGProps, memo } from "react";
interface SVGRProps {
  title?: string;
  titleId?: string;
  desc?: string;
  descId?: string;
}
const AudioOff = ({
  title,
  titleId,
  desc,
  descId,
  ...props
}: SVGProps<SVGSVGElement> & SVGRProps) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 32 32"
    width="1em"
    height="1em"
    aria-labelledby={titleId}
    aria-describedby={descId}
    {...props}
  >
    {desc ? <desc id={descId}>{desc}</desc> : null}
    {title ? <title id={titleId}>{title}</title> : null}
    <g data-name="Layer 2">
      <path d="M19.45 4.11a1 1 0 0 0-1 .09L10.67 10H3a1 1 0 0 0-1 1v10a1 1 0 0 0 1 1h7.67l7.73 5.8A1 1 0 0 0 20 27V5a1 1 0 0 0-.55-.89ZM27.41 16l2.29-2.29a1 1 0 0 0-1.41-1.41L26 14.59l-2.29-2.29a1 1 0 0 0-1.41 1.41L24.59 16l-2.29 2.29a1 1 0 1 0 1.41 1.41L26 17.41l2.29 2.29a1 1 0 0 0 1.41-1.41Z" />
    </g>
  </svg>
);
const Memo = memo(AudioOff);
export default Memo;
