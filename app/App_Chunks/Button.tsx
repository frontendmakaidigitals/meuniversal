"use client";
import React, { ReactNode } from "react";
import { motion } from "framer-motion";
// Define the types for the props
interface ButtonProps {
  onClick?: React.MouseEventHandler<HTMLButtonElement>; // onClick is a function that handles the mouse click event
  className?: string; // className is optional and is a string
  children: ReactNode;
  type?: "button" | "submit" | "reset";
  loading?: boolean;
  disabled?: boolean;
}

const Button: React.FC<ButtonProps> = ({
  onClick,
  className,
  children,
  type = "button",
  loading = false,
  disabled = false,
}) => {
  return (
    <motion.button
      type={type}
      onClick={onClick}
      transition={{ duration: 0.1, ease: "easeIn" }}
      disabled={loading || disabled}
      className={`xl:px-3 py-2 px-2 text-[.9rem] xl:text-[.88rem] xxl:text-md flex items-center ${
        loading
          ? "w-28 flex justify-center "
          : "bg-gradient-to-tr hover:bg-gradient-to-br"
      } gap-2    transition-all duration-300 ${
        disabled ? "bg-slate-400" : "from-primary text-gray-50  to-amber-400"
      } font-[600] font-Satoshi rounded-lg ${className}`}
    >
      {!loading && children}
      {loading && (
        <div>
          <div className="buttonContainer">
            <div className="dot"></div>
            <div className="dot"></div>
            <div className="dot"></div>
          </div>

          <style>
            {` .buttonContainer {
              --uib-size: 25px;
              --uib-color: black;
              --uib-speed: 1.3s;
              --uib-dot-size: 25%;
              position: relative;
              display: inline-block;
              height: var(--uib-size);
              width: var(--uib-size);
              animation: spin var(--uib-speed) infinite linear;
            }

            .dot {
              position: absolute;
              left: calc(50% - var(--uib-dot-size) / 2);
              height: 100%;
              width: var(--uib-dot-size);
            }

            .dot:after {
              content: '';
              position: absolute;
              top: 0;
              left: 0;
              height: 0%;
              width: 100%;
              padding-bottom: 100%;
              background-color: var(--uib-color);
              border-radius: 50%;
              transition: background-color 0.3s ease;
            }

            .dot:nth-child(1) {
              transform: rotate(120deg);
            }

            .dot:nth-child(1)::after {
              animation: wobble var(--uib-speed) infinite ease-in-out;
            }

            .dot:nth-child(2) {
              transform: rotate(-120deg);
            }

            .dot:nth-child(2)::after {
              animation: wobble var(--uib-speed) infinite ease-in-out;
            }

            .dot:nth-child(3)::after {
              animation: wobble var(--uib-speed) infinite ease-in-out;
            }

            @keyframes spin {
              0% {
                transform: rotate(0deg);
              }
              100% {
                transform: rotate(360deg);
              }
            }

            @keyframes wobble {
              0%,
              100% {
                transform: translateY(0%);
              }
              50% {
                transform: translateY(65%);
              }
  }`}
          </style>
        </div>
      )}
    </motion.button>
  );
};

export default Button;
