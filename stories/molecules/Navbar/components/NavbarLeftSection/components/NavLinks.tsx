"use client";

import { ComponentProps, FC, useState } from "react";
import { LinkDataType } from "..";
import Link from "next/link";
import { AnimatePresence, motion } from "framer-motion";

export interface NavLinksProps extends ComponentProps<"nav"> {
  links: ReadonlyArray<LinkDataType>;
  isFooter?: boolean;
}

export const NavLinks: FC<NavLinksProps> = ({ links, isFooter }) => {
  const [hoveredPath, setHoveredPath] = useState("");

  const handleMouseOver = (href: string) => {
    setHoveredPath(href);
    console.log(href);
  };

  const handleMouseLeave = () => {
    setHoveredPath("");
  };

  const hoverClass = isFooter ? "" : "hover:text-[#306CFE] transition-colors duration-300";
  const commanClass = 'relative mr-[10px] whitespace-nowrap px-[10px] text-sm desktop:py-5'
  
  return (
    <nav className="hidden desktop:flex  ml-[50px] items-center ">
      {links.map(({ href, label }) => {
        return (
          <Link
            key={`${label}${href}`}
            href={href}
            className={`${commanClass} ${hoverClass}`}
            onMouseOver={() => handleMouseOver(href)}
            onMouseLeave={handleMouseLeave}
          >
            <span>{label}</span>
            {
              isFooter ? null : (
                <AnimatePresence>
                  {href === hoveredPath && (
                    <motion.span
                      className="absolute bottom-0 left-0 w-full h-[4px] bg-[#306CFE]"
                      // layoutId="underline"
                      aria-hidden="true"
                      style={{
                        width: "100%",
                      }}
                      transition={{
                        type: "spring",
                        bounce: 0.25,
                        stiffness: 130,
                        damping: 9,
                        duration: 0.3,
                      }}
                    />
                  )}
                </AnimatePresence>
              )
            }
          </Link>
        );
      })}
    </nav>
  );
};
