import { SVGProps, memo } from "react";
interface SVGRProps {
  title?: string;
  titleId?: string;
  desc?: string;
  descId?: string;
}
const AudioOn = ({
  title,
  titleId,
  desc,
  descId,
  ...props
}: SVGProps<SVGSVGElement> & SVGRProps) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    xmlSpace="preserve"
    viewBox="0 0 286.374 286.374"
    aria-labelledby={titleId}
    aria-describedby={descId}
    {...props}
  >
    {desc ? <desc id={descId}>{desc}</desc> : null}
    {title ? <title id={titleId}>{title}</title> : null}
    <path
      d="m233.636 26.767-33.372 28.5c25.659 21.07 42.006 52.616 42.006 87.92 0 35.305-16.347 66.851-42.006 87.921l33.372 28.499c32.324-28.869 52.738-70.268 52.738-116.421 0-46.152-20.414-87.551-52.738-116.419zm-55.899 47.746-34.69 29.64c15.14 6.818 27.19 21.681 27.19 39.034s-12.05 32.216-27.19 39.034l34.69 29.64c21.294-15.717 36.051-40.586 36.051-68.674 0-28.088-14.758-52.957-36.051-68.674zm-69.065-26.196L44.746 98.441H17.898C4.671 98.441 0 103.268 0 116.34v53.695c0 13.072 4.951 17.898 17.898 17.898h26.848l63.926 50.068c7.668 4.948 16.558 6.505 16.558-7.365V55.683c0-13.87-8.89-12.313-16.558-7.366z"
      style={{
        fillRule: "evenodd",
        clipRule: "evenodd",
      }}
    />
  </svg>
);
const Memo = memo(AudioOn);
export default Memo;
