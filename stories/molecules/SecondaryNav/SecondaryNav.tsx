import styled from "styled-components";
import { FC, useState } from "react";
import {  DropDownSecondaryNav, LeftItemSNav, RightItemSNav } from "./components";
import useWindows from "@/hooks/useWindows";
import useSticky from "@/hooks/useSticky";

type RootProps = {
    isSticky?: boolean;
};

const Root = styled.header<RootProps>`
    position: ${(props) => (props.isSticky ? "fixed" : "relative")};
    top: 0;
    left: 0;
    width: 100%;
    background: #fff;
    z-index: 1000;
    border-bottom: 1px solid #ECEDF0;

    @media (max-width: 768px) {
        position: relative;
    }
`;

const Main = styled.div`
    padding: 0px 100px;
    max-width: 1440px;
    margin: 0 auto;
    color: rgb(61, 65, 96);
    // overflow: hidden;

    @media (max-width: 1024px) {
        padding: 0px 40px;
    }

    @media (max-width: 768px) {
        padding: 0px 20px;
    }
`;

type StyleProps = {
    variation?: "one" | "two";
};
const VarOneWrapper = styled.div<StyleProps>`
    display: flex;
    flex-direction: row;
    justify-content: ${(props) =>
        props.variation === "one" ? "space-between" : "space-around"};
    align-items: center;
    width: 100%;
    height: 70px;

    @media (max-width: 1024px) {
        height: 53px;
    }
`;

const style = `
    display : flex;
    flex-direction : row;
    gap : 10px;
`;

const RightNavWrapper = styled.div`
    ${style}
    height : inherit;
    align-items : center;
`;

const LeftNavWrapper = styled.div`
    ${style}
`;

// have two main veritiosn and
type SecondaryNavBarProps = {
    variation?: "one" | "two";
    pageLinks?: {
        label: string;
        href: string;
        id?: string;
    }[];
    leftNavLinks?: {
        label: string;
        link: string;
        icon: string;
        id: number;
    }[];
};

export const SecondaryNavBar: FC<SecondaryNavBarProps> = ({
    variation,
    pageLinks,
    leftNavLinks,
}) => {
    const windowSize = useWindows();
    const isMobile = windowSize.width < 768;

    const { sticky, stickyRef } = useSticky();
    const [active, setActive] = useState("");

    // if scroll to other section active link will change
    // useEffect(() => {
    //     const handleScroll = () => {
    //         const currentScrollPos = window.pageYOffset;
    //         const sections = document.querySelectorAll("section");
    //         sections.forEach((section) => {
    //             const sectionTop = section.offsetTop;
    //             const sectionHeight = section.clientHeight;
    //             if (
    //                 currentScrollPos >= sectionTop - sectionHeight * 0.25 &&
    //                 currentScrollPos < sectionTop + sectionHeight * 0.75
    //             ) {
    //                 setActive(`${section.id}`);
    //             }
    //         });
    //     };
    //     window.addEventListener("scroll", handleScroll);
    //     return () => {
    //         window.removeEventListener("scroll", handleScroll);
    //     };
    // }, []);

    return (
        <Root 
            ref={stickyRef} 
            isSticky={sticky}
            id="AnchorTextScrollBarRoot"
        >
            <Main>
                {variation === "one" && (
                    <VarOneWrapper variation={variation}>
                        <RightNavWrapper>
                            {isMobile ? (
                                <>
                                    <DropDownSecondaryNav 
                                        pageLinks={pageLinks}
                                        // variation={variation}
                                    />
                                </>
                            ) : (
                                <>
                                    {pageLinks.map((link) => (
                                        <RightItemSNav
                                            link={link.href}
                                            key={link.href}
                                            isActive={active}
                                            id={link.id}
                                            onClick={() => setActive(link.id)}
                                        >
                                            {link.label}
                                        </RightItemSNav>
                                    ))}
                                </>
                            )}
                        </RightNavWrapper>

                        <LeftNavWrapper>
                            {leftNavLinks.map((link, index) => (
                                <LeftItemSNav
                                    key={index}
                                    icon={link.icon}
                                    link={link.link}
                                    lable={link.label}
                                />
                            ))}
                        </LeftNavWrapper>
                    </VarOneWrapper>
                )}

                {variation === "two" && (
                    <VarOneWrapper variation={variation}>
                        {/* single map work on next time */}
                    </VarOneWrapper>
                )}
            </Main>
        </Root>
    );
};

SecondaryNavBar.defaultProps = {
    variation: "one",
    leftNavLinks: [
        {
            id: 1,
            icon: "phone",
            link: "#",
            label: "Contact Us",
        },
        {
            id: 2,
            icon: "message",
            link: "#",
            label: "Book a call",
        },
    ],
};
