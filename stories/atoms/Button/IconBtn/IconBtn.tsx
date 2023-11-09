import { ComponentProps, FC } from "react";
import { twMerge } from "tailwind-merge";

export interface IconBtnProps extends ComponentProps<"button"> {
    svg: string;
    alt: string;
    label: string;
    iconClassName?: string;
    labelClassName?: string;
    onClick?: () => void;
}

export const IconBtn: FC<IconBtnProps> = ({
    svg,
    alt,
    label,
    className,
    iconClassName,
    labelClassName,
    onClick,
}) => {
    return (
        <button
            onClick={onClick}
            className={twMerge(`flex items-center ${className ?? ""}`)}
        >
            <img src={svg} alt={alt} className={iconClassName} />
            <span className={twMerge("whitespace-nowrap", labelClassName)}>
                {label}
            </span>
        </button>
    );
};
