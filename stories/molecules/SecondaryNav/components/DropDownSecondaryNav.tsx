import styled from "styled-components";
import { FC, useEffect, useRef, useState } from "react";
import Link from "next/link";
import useWindows from "@/hooks/useWindows";

const Down = () => (
    <svg width="12" height="13" viewBox="0 0 12 13" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M6 8.52344L2.25 4.77344L2.775 4.24844L6 7.47344L9.225 4.24844L9.75 4.77344L6 8.52344Z" fill="black" />
    </svg>
)

const Trigger = styled.button`
    border: none;
    background-color: transparent;
    cursor: pointer;
    font-size: 13px;
    font-weight: 400;
    line-height: 17px;
    color: #3d4160;
    position: relative;
    z-index: 1000;

    display: flex;
    flex-direction: row;
    align-items: center;
    gap: 10px;
    height: -webkit-fill-available;

`;
type StyleProps = {
    width?: number;
}

const Modal = styled.dialog<StyleProps>`
    position: absolute;
    top: 100%;
    left: -22%;
    top: 34px;
    width: ${(props) => props.width}px;
    background-color: #fff;
    z-index: 1000;
    box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.05);
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 4px;
    padding: 4px 0px;

    a {
        width: 100%;
        padding: 12px 20px; 
        color: #3d4160;
        font-size: 14px;
        line-height: 26px;
    }
`;


type DropDownSecondaryNavProps = {
    variation?: "one" | "two";
    pageLinks?: {
        label: string;
        href: string;
        id?: string;
    }[];
}

export const DropDownSecondaryNav: FC<DropDownSecondaryNavProps> = ({
    variation,
    pageLinks,
}) => {
    const ref = useRef(null);
    const [showItems, setShowItems] = useState(false);
    const windowSize = useWindows();
    const width = windowSize.width;

    const handle = () => {
        setShowItems(!showItems)
    }

    // if click outside of the dropdown, close the dropdown
    useEffect(() => {
        const handleClickOutside = (event) => {
            if (ref.current && !ref.current.contains(event.target)) {
                setShowItems(false);
            }
        };
        document.addEventListener("mousedown", handleClickOutside);
        return () => {
            document.removeEventListener("mousedown", handleClickOutside);
        };
    }, [ref]);

    return (
        <div
            ref={ref}
            style={{
                display: "flex",
                flexDirection: "row",
                justifyContent: "space-between",
                alignItems: "center",
                position: "relative",
                height: "auto"
            }}
        >
            <Trigger
                onClick={handle}
            >
                Catergory <i><Down /></i>
            </Trigger>

            {
                showItems && (
                    <Modal
                        width={width}
                    >
                        {
                            pageLinks.map((item) => (
                                <Link
                                    key={item.id}
                                    href={item.href}
                                    onClick={() => setShowItems(false)}
                                >{item.label}</Link>
                            ))
                        }
                    </Modal>
                )
            }

        </div>)
}