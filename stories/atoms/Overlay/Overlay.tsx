import { OverlayVariant } from "./Overlay.types";
import {  FC } from "react";

export type OverlayProps = {
  overlayVariant: string;
  dark?: boolean;
}

export const Overlay: FC<OverlayProps> = ({ overlayVariant, dark }) => {
  const baseClass = "absolute top-0 from-[#0E204C] bg-[#0E204C] w-full h-full inset-0"

  const variantClass = overlayVariant === "first" ? "bg-opacity-75" : "bg-opacity-50"

  const darkClass = dark ? "bg-gradient-to-t" : ""
  return(
    <div className={`${baseClass} ${variantClass} ${darkClass}`} />
  )
};
