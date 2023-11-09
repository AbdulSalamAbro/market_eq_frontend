import { AnimatePresence, motion } from "framer-motion";
import useHover from "@/hooks/useHover";
import { FC, useRef } from "react";
import Link from "next/link";
import styled from "styled-components";

export type RightItemProps = {
    lable?: string;
    link?: string;
    children?: React.ReactNode;
    isActive?: string;
    id?: string;
    onClick?: () => void;
};

type RightNavStyleProps = {
    isHovered?: boolean;
};
const RightItemWrapper = styled.div<RightNavStyleProps>`
    color: ${(props) => (props.isHovered ? "#306CFE" : "#3D4160")};
    font-weight: 400;
    font-size: 14px;
    padding: 0px 10px;
    cursor: pointer;
    position: relative;
    transition: all 0.3s ease-in-out;

    &:hover {
        color: #306cfe;
    }

    @media (max-width: 1024px) {
        padding: 0px 7px;
        font-size: 11px;
        line-height: 14px;
    }
`;

export const RightItemSNav: FC<RightItemProps> = ({
    lable,
    link,
    children,
    isActive,
    id,
    onClick,
}) => {

    const ref = useRef(null);
    const isHovered = useHover(ref);
    const active = id === isActive;

    return (
        <RightItemWrapper
            isHovered={isHovered || active}
            ref={ref}
            aeria-label={lable}
            onClick={onClick}
        >
            <Link href={link} aria-label={lable}>
                {children}
            </Link>
            {(isHovered || active) && (
                <AnimatePresence>
                    <motion.div
                        className="absolute top-[43px] left-0 w-full h-[4px] bg-[#306CFE]"
                        aria-hidden="true"
                        style={{
                            width: "100%",
                        }}
                        transition={{
                            type: "spring",
                            bounce: 0.25,
                            stiffness: 130,
                            damping: 10,
                            duration: 0.3,
                        }}
                    />
                </AnimatePresence>
            )}
        </RightItemWrapper>
    );
};
