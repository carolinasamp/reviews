import * as React from "react";
import { SVGProps, memo } from "react";
interface SVGRProps {
  title?: string;
  titleId?: string;
  desc?: string;
  descId?: string;
}
const AudioPlay = ({
  title,
  titleId,
  desc,
  descId,
  ...props
}: SVGProps<SVGSVGElement> & SVGRProps) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    xmlSpace="preserve"
    width="1em"
    height="1em"
    viewBox="0 0 32 32"
    aria-labelledby={titleId}
    aria-describedby={descId}
    {...props}
  >
    {desc ? <desc id={descId}>{desc}</desc> : null}
    {title ? <title id={titleId}>{title}</title> : null}
    <path d="M4.993 2.496C4.516 2.223 4 2.45 4 3v26c0 .55.516.777.993.504l22.826-13.008c.478-.273.446-.719-.031-.992L4.993 2.496z" />
    <path d="M4.585 30.62C3.681 30.62 3 29.923 3 29V3c0-.923.681-1.62 1.585-1.62.309 0 .621.085.904.248l22.794 13.007c.559.319.878.823.878 1.382 0 .548-.309 1.039-.847 1.347L5.488 30.373a1.829 1.829 0 0 1-.903.247zM5 3.651v24.698l21.655-12.34L5 3.651z" />
  </svg>
);
const Memo = memo(AudioPlay);
export default Memo;
