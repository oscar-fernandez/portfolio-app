import { useState } from 'react';
import { motion } from 'framer-motion';
import LogoS from '../../assets/images/o-logo.png';
import './Logo.scss';

const Logo = () => {
  const [show, setShow] = useState(true);

  const icon = {
    hidden: {
      opacity: 0,
      pathLength: 0,
    },
    visible: {
      opacity: 1,
      pathLength: 1,
    },
  };

  const showIcon = {
    hidden: {
      opacity: 0,
    },
    visible: {
      opacity: 1,
    },
  };

  return (
    <div className="logo-container">
      <motion.img
        className="solid-logo"
        src={LogoS}
        variants={showIcon}
        initial="hidden"
        animate="visible"
        alt="JavaScript,  Developer"
        transition={{
          default: { delay: 8, duration: 1, ease: 'easeInOut' },
        }}
      />
      <svg
        version="1.1"
        viewBox="0 0 1029 1029"
        xmlns="http://www.w3.org/2000/svg"
      >
        <g fill="none" stroke="#000" stroke-width="3" className="svg-container">
          <motion.path
            variants={icon}
            initial="hidden"
            animate="visible"
            transition={{
              default: { duration: 8, ease: 'easeInOut' },
            }}
            d="m244.4 148.45-26.901 18.733-22.436 17.862-30.495 28.862s-29.733 28.753-48.793 58.595l-19.06 29.842s-15.465 28.753-29.188 68.832c-13.723 40.08-18.079 84.516-18.079 84.516s-4.5743 53.802 1.7426 108.69c6.3169 54.892 29.842 108.04 29.842 108.04s23.961 54.238 55.327 90.179 50.535 54.238 50.535 54.238 35.287 33.981 90.615 62.515c55.327 28.535 134.4 43.129 134.4 43.129s48.793 4.7921 92.357 1.9604c43.565-2.8317 64.04-7.1882 64.04-7.1882l15.683-3.4852 21.782-6.3169 26.575-8.713 28.535-12.416s33.763-13.723 78.852-49.664 82.337-87.347 82.337-87.347 40.951-54.892 59.248-121.11c18.297-66.218 16.337-104.12 16.337-104.12s1.307-47.486-8.713-105.64-47.921-121.98-47.921-121.98-26.575-48.575-81.466-99.546c-54.892-50.971-125.47-81.684-125.47-81.684s-54.02-22.872-124.16-27.01c-70.139-4.1387-113.7 3.9208-113.7 3.9208s-82.555 11.762-151.82 56.307zm220.66-61.317s104.77 2.6139 204.1 29.188c99.328 26.575 153.78 74.931 153.78 74.931s55.327 37.03 103.25 107.17 57.941 142.89 57.941 142.89 4.3565 10.456 8.2773 73.624c3.9208 63.169-16.99 138.97-16.99 138.97s-11.762 42.693-33.109 83.209c-21.347 40.515-64.912 85.823-64.912 85.823s-40.951 42.693-78.417 66.218c-37.466 23.525-76.674 38.773-76.674 38.773s-50.535 18.733-104.56 25.268-112.83-0.43565-112.83-0.43565-39.208-5.6634-113.7-25.703c-74.496-20.04-120.24-43.565-120.24-43.565s-44.872-29.188-77.981-60.119"
          />
          <motion.path
            variants={icon}
            initial="hidden"
            animate="visible"
            transition={{
              default: { duration: 8, ease: 'easeInOut' },
            }}
            d="m401.23 330.22s-75.803 32.674-101.94 106.3c-26.139 73.624 0 135.92 0 135.92s9.1486 26.575 40.08 62.298c30.931 35.723 76.674 47.921 76.674 47.921s70.575 16.99 119.8 1.307 82.773-59.684 82.773-59.684 30.931-36.594 38.337-104.56c7.406-67.961-33.545-120.24-33.545-120.24s-38.773-53.585-107.17-73.624-115.01 4.3565-115.01 4.3565z"
          />
          <motion.path
            variants={icon}
            initial="hidden"
            animate="visible"
            transition={{
              default: { duration: 8, ease: 'easeInOut' },
            }}
            d="m556.49 353.49s-34.193 0.92415-61.61 15.711c-27.416 14.786-30.343 18.791-53.293 41.279-22.95 22.488-32.653 48.98-41.125 81.479s-1.0782 76.704-1.0782 76.704 3.6966 27.262 22.95 59.608 53.755 54.833 53.755 54.833 20.793 1.8483 65.152-17.713c44.359-19.561 71.005-67.309 76.242-77.32s16.943-35.888 18.175-69.465c1.2322-33.577-2.7724-52.83-2.7724-52.83s-8.3173-37.736-26.338-64.382c-18.021-26.646-44.359-46.67-50.058-47.902z"
          />
        </g>
      </svg>
    </div>
  );
};

export default Logo;
