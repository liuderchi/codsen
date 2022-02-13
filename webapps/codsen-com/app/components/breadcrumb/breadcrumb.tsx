import { Link } from "remix";
import { motion } from "framer-motion";
import { pathNameToBreadcrumbs } from "~/utils/misc";

function GenerateBreadcrumbChain({ location }: { location: string }) {
  function labelMapper(str: string) {
    if (str === "os") {
      return "Open Source";
    }
    return str;
  }
  return (
    <>
      {pathNameToBreadcrumbs(location).map(({ label, url }, i, arr) => (
        <>
          <Link to={`/${url}`}>{labelMapper(label)}</Link>
          {arr[i + 1] ? <>&rarr;</> : null}
        </>
      ))}
    </>
  );
}

interface BreadcrumbProps {
  prevLabel?: string;
  prevAriaLabel?: string;
  prevUrl?: string;
  nextLabel?: string;
  nextAriaLabel?: string;
  nextUrl?: string;
  currentPath?: string;
}
export const Breadcrumb = ({
  prevLabel,
  prevAriaLabel,
  prevUrl,
  nextLabel,
  nextAriaLabel,
  nextUrl,
  currentPath,
}: BreadcrumbProps) => {
  const arrowFillMotion = {
    rest: { pathLength: 0, ease: "easeOut", duration: 0.2, type: "tween" },
    hover: {
      pathLength: 1,
      transition: {
        duration: 0.5,
        ease: "easeOut",
      },
    },
  };

  return (
    <div className="breadcrumb">
      {prevLabel && prevUrl && (
        <motion.span
          className="arrowContainer"
          initial="rest"
          whileHover="hover"
          animate="rest"
        >
          <Link className="leftArrow" to={prevUrl} aria-label={prevAriaLabel}>
            <span>{prevLabel}</span>
            {/* encode using https://svg2jsx.com/ */}
            <motion.svg
              width="128"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 128 80"
              key="left-arrow"
            >
              <path
                fill="none"
                stroke="var(--c-color-semantic-border)"
                strokeWidth="1"
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M31.13 2.19c10.69 4.54 10.52 16.22 6.26 23.69h68.82c13.53 0 6.18-25.67-3.1-18.18 6 1.62 5.55 10.59-.75 10.59-7.85-.16-10.32-16.1 6.7-16.1s27 28.83 2 37.81l.74.28c24 9.27 14.09 37.53-2.76 37.53-17 0-14.55-15.94-6.7-16.1 6.3 0 6.7 9 .75 10.59 9.28 7.49 16.63-18.18 3.1-18.18h-68.8c4.26 7.47 4.43 19.15-6.26 23.69Q31.13 55 1.8 40.09a.1.1 0 010-.18Q31.13 25 31.13 2.19z"
              ></path>
              <defs>
                <clipPath id="clip-path-left">
                  <path d="M31.13 2.19c10.69 4.54 10.52 16.22 6.26 23.69h68.82c13.53 0 6.18-25.67-3.1-18.18 6 1.62 5.55 10.59-.75 10.59-7.85-.16-10.32-16.1 6.7-16.1s27 28.83 2 37.81l.74.28c24 9.27 14.09 37.53-2.76 37.53-17 0-14.55-15.94-6.7-16.1 6.3 0 6.7 9 .75 10.59 9.28 7.49 16.63-18.18 3.1-18.18h-68.8c4.26 7.47 4.43 19.15-6.26 23.69Q31.13 55 1.8 40.09a.1.1 0 010-.18Q31.13 25 31.13 2.19z"></path>
                </clipPath>
              </defs>
              <g clipPath="url(#clip-path-left)">
                <motion.path
                  fill="none"
                  fillRule="evenodd"
                  stroke="var(--c-color-semantic-svg-green)"
                  strokeMiterlimit="10"
                  strokeWidth="30"
                  d="M109.88 89c5-23 37-106.18 8.5-106.5-28-.32-24 108-24 108s-.57-109.82-28-105C40.22-9.9 64.88 84 64.88 84s-2.33-101.82-29.5-96.5C8.62-7.26 39.88 86 39.88 86l-35-57"
                  variants={arrowFillMotion}
                ></motion.path>
              </g>
            </motion.svg>
          </Link>
        </motion.span>
      )}
      <span className="breadcrumb">
        {currentPath && (
          <span>
            <GenerateBreadcrumbChain location={currentPath} />
          </span>
        )}
      </span>
      {nextLabel && nextUrl && (
        <motion.span
          className="arrowContainer"
          initial="rest"
          whileHover="hover"
          animate="rest"
        >
          <Link className="rightArrow" to={nextUrl} aria-label={nextAriaLabel}>
            <span>{nextLabel}</span>
            <motion.svg
              width="128"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 128 80"
              key="right-arrow"
            >
              <path
                fill="none"
                stroke="var(--c-color-semantic-border)"
                strokeWidth="1"
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M96.75 2.19c-10.68 4.54-10.52 16.22-6.26 23.69H21.67c-13.53 0-6.18-25.67 3.1-18.18-5.95 1.62-5.55 10.59.75 10.59 7.85-.16 10.32-16.1-6.7-16.1S-8.17 31 16.8 40l-.74.28C-8 49.55 2 77.81 18.82 77.81c17 0 14.55-15.94 6.7-16.1-6.3 0-6.7 9-.75 10.59-9.28 7.49-16.63-18.18-3.1-18.18h68.82c-4.26 7.47-4.42 19.15 6.26 23.69q0-22.81 29.33-37.72a.1.1 0 000-.18Q96.76 25 96.75 2.19z"
              ></path>
              <defs>
                <clipPath id="clip-path-right">
                  <path d="M96.75 2.19c-10.68 4.54-10.52 16.22-6.26 23.69H21.67c-13.53 0-6.18-25.67 3.1-18.18-5.95 1.62-5.55 10.59.75 10.59 7.85-.16 10.32-16.1-6.7-16.1S-8.17 31 16.8 40l-.74.28C-8 49.55 2 77.81 18.82 77.81c17 0 14.55-15.94 6.7-16.1-6.3 0-6.7 9-.75 10.59-9.28 7.49-16.63-18.18-3.1-18.18h68.82c-4.26 7.47-4.42 19.15 6.26 23.69q0-22.81 29.33-37.72a.1.1 0 000-.18Q96.76 25 96.75 2.19z"></path>
                </clipPath>
              </defs>
              <g clipPath="url(#clip-path-right)">
                <motion.path
                  fill="none"
                  fillRule="evenodd"
                  stroke="var(--c-color-semantic-svg-green)"
                  strokeMiterlimit="10"
                  strokeWidth="30"
                  d="M18 89C13 66-19-17.18 9.5-17.5c28-.32 24 108 24 108s.57-109.82 28-105C87.66-9.9 63 84 63 84s2.34-101.82 29.5-96.5C119.26-7.26 88 86 88 86l35-57"
                  variants={arrowFillMotion}
                ></motion.path>
              </g>
            </motion.svg>
          </Link>
        </motion.span>
      )}
    </div>
  );
};
