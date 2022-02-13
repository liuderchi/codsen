import * as React from "react";
import { useTheme, Theme } from "remix-themes";
import { motion } from "framer-motion";

const transition = {
  type: "spring",
  stiffness: 200,
  damping: 10,
};

function LightIcon() {
  const whileTap = { scale: 0.95, rotate: 15 };
  const raysVariants = {
    initial: { rotate: 45 },
    animate: { rotate: 0, transition },
  };
  const sunCoreVariants = {
    initial: { scale: 1.5 },
    animate: { scale: 1, transition },
  };

  return (
    <motion.svg
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className="feather feather-sun"
      whileTap={whileTap}
      // centers the rotation anchor point:
      style={{ originX: "50%", originY: "50%" }}
    >
      <motion.circle
        cx="12"
        cy="12"
        r="5"
        initial="initial"
        animate="animate"
        variants={sunCoreVariants}
      />
      <motion.g initial="initial" animate="animate" variants={raysVariants}>
        <line x1="12" y1="1" x2="12" y2="3"></line>
        <line x1="12" y1="21" x2="12" y2="23"></line>
        <line x1="4.22" y1="4.22" x2="5.64" y2="5.64"></line>
        <line x1="18.36" y1="18.36" x2="19.78" y2="19.78"></line>
        <line x1="1" y1="12" x2="3" y2="12"></line>
        <line x1="21" y1="12" x2="23" y2="12"></line>
        <line x1="4.22" y1="19.78" x2="5.64" y2="18.36"></line>
        <line x1="18.36" y1="5.64" x2="19.78" y2="4.22"></line>
      </motion.g>
    </motion.svg>
  );
}

function DarkIcon() {
  const variants = {
    initial: { scale: 0.6, rotate: 90 },
    animate: { scale: 1, rotate: 0, transition },
    whileTap: { scale: 0.95, rotate: 15 },
  };

  return (
    <motion.svg
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      key="moon"
      className="feather feather-moon"
    >
      <motion.path
        d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"
        fill="none"
        initial="initial"
        animate="animate"
        whileTap="whileTap"
        variants={variants}
      />
    </motion.svg>
  );
}

export const useLoaded = () => {
  const [loaded, setLoaded] = React.useState(false);
  React.useEffect(() => setLoaded(true), []);
  return loaded;
};

export default function ThemeToggle() {
  const [theme, setTheme] = useTheme();

  const loaded = useLoaded();

  const raysVariants = {
    initial: { rotate: 45 },
    animate: { rotate: 0, transition },
  };
  const moonVariants = {
    initial: { scale: 0.6, rotate: 90 },
    animate: { scale: 1, rotate: 0, transition },
    whileTap: { scale: 0.95, rotate: 15 },
  };
  const sunCoreVariants = {
    initial: { scale: 1.5 },
    animate: { scale: 1, transition },
  };
  const whileTap = { scale: 0.95, rotate: 15 };
  const outlineMotion = {
    rest: { pathLength: 0, ease: "easeOut", duration: 0.2, type: "tween" },
    hover: {
      pathLength: 1,
      transition: {
        duration: 0.5,
        // type: "tween",
        ease: "easeOut",
      },
    },
  };

  return (
    <motion.button
      aria-label="Toggle Theme"
      type="button"
      onClick={() => setTheme(theme === Theme.DARK ? Theme.LIGHT : Theme.DARK)}
      initial="rest"
      whileHover="hover"
      animate="rest"
    >
      <motion.svg
        id="svg-theme-toggle"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 44 44"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        key="toggle-container"
        whileTap={whileTap}
        // centers the rotation anchor point:
        style={{ originX: "50%", originY: "50%" }}
      >
        {theme === Theme.DARK && loaded ? (
          <motion.path
            id="svg-feather-moon"
            d="M30.84,22.36c-0.46,4.95-4.84,8.59-9.79,8.13c-4.95-0.46-8.59-4.84-8.13-9.79c0.4-4.32,3.82-7.73,8.13-8.13
	c-2.3,3.11-1.64,7.49,1.47,9.79C24.99,24.19,28.36,24.19,30.84,22.36z"
            initial="initial"
            animate="animate"
            whileTap="whileTap"
            variants={moonVariants}
          />
        ) : (
          <>
            <motion.circle
              cx="21.85"
              cy="21.55"
              r="5"
              initial="initial"
              animate="animate"
              variants={sunCoreVariants}
              id="svg-feather-sun-core"
            />
            <motion.g
              initial="initial"
              animate="animate"
              variants={raysVariants}
              id="svg-feather-sun-rays"
            >
              <line x1="21.85" y1="10.55" x2="21.85" y2="12.55" />
              <line x1="21.85" y1="30.55" x2="21.85" y2="32.55" />
              <line x1="14.07" y1="13.77" x2="15.49" y2="15.19" />
              <line x1="28.21" y1="27.91" x2="29.63" y2="29.33" />
              <line x1="10.85" y1="21.55" x2="12.85" y2="21.55" />
              <line x1="30.85" y1="21.55" x2="32.85" y2="21.55" />
              <line x1="14.07" y1="29.33" x2="15.49" y2="27.91" />
              <line x1="28.21" y1="15.19" x2="29.63" y2="13.77" />
            </motion.g>
          </>
        )}

        <motion.path
          d="M18.38,3.66C9.05,7.05,3,14.99,3,23.39c0,0.81,0.13,9.17,6.73,14.09c8.25,6.16,22.98,4.21,28.84-5.64
	c4.49-7.53,2.5-17.52-3.85-23.49C26.5,0.6,15.09,3.51,14.54,3.66"
          strokeWidth="5"
          id="svg-feather-outline"
          stroke="var(--c-color-semantic-link-hover-bg)"
          variants={outlineMotion}
        />
      </motion.svg>
    </motion.button>
  );
}
