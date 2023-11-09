"use client";

import React, { FC, useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import styled from "styled-components"

// tabs and each Tab Component
type Tab = {
    title: string,
    content: React.ReactNode,
}

type TabProps = {
    tabs: Tab[],
    spaceBetween?: boolean,
    id?: string,
}

const TabWrapper = styled.div`
    display : flex;
    flex-direction : column;
    gap : 37px;

    @media (max-width : 768px) {
        gap : 28px;
    }

`;
type ULProps = {
    spaceBetween?: boolean,
}

const UL = styled.ul<ULProps>`

    position : relative;
    display : flex;
    flex-direction : row;
    gap : 57px;
    justify-content : ${({ spaceBetween }) => spaceBetween ? "space-between" : "flex-start"};
    align-items : center;
    border-bottom : 2px solid rgba(217, 217, 217, 1);

    @media (max-width : 1024px) {
        gap : 43px;
    }

    @media (max-width : 820px) {
        overflow-x : scroll;

        // hide scrollbar
        &::-webkit-scrollbar {
            display : none;
            width : 0px;
            background : transparent;
        }

        // hide scrollbar
        &::-webkit-scrollbar-thumb {
            // display : none;
            width : 0px;
            background : transparent;
        }

    }

`;

type LiProps = {
    isActive?: boolean,
}

const Li = styled.li<LiProps>`

    padding-bottom : 25px;
    position : relative;
    min-width : max-content;

    button {
        color : ${({ isActive }) => isActive ? "rgba(61, 65, 96, 1)" : "rgba(61, 65, 96, 0.6)"};
        font-size : 18px;
        font-weight : 600;
        line-height : 27px;
        background : none;
        border : none;
        cursor : pointer;
    }

    @media (max-width : 1024px) {
        
        button {    
            font-size : 14px;
            line-height : 20.56px;
        }
    }

    @media (max-width : 1024px) {
        
        #ani-span {
            top : 45px !important;
        }
    }

`;

const TabContainer: FC<TabProps> = ({ tabs, spaceBetween, id }) => {

    const [activeTab, setActiveTab] = useState(0);

    useEffect(() => {
        const tab = document.getElementById(`tab-${tabs[activeTab].title}`);
        console.log(tab, "tabs");
        // trigger click event
        tab?.click();
        setActiveTab(0);

    }, [])

    const handleTabClick = (index: number) => {
        setActiveTab(index);
    }

    return (
        <TabWrapper>
            <UL spaceBetween={spaceBetween}>
                {
                    tabs.map((tab, index) => (
                        <Li
                            key={index}
                            isActive={index === activeTab}
                            aria-selected={index === activeTab}
                            role="tab"
                            id={`tab-${tab.title}`}
                            onClick={() => handleTabClick(index)}
                        >
                            <button>{tab.title}</button>

                            {index === activeTab && (
                                <AnimatePresence>
                                    <motion.span
                                        // layoutId={id}
                                        className="absolute top-[49px] left-0 w-full h-[4px] bg-[#3D4160]"
                                        aria-hidden="true"
                                        id="ani-span"
                                        style={{
                                            width: "100%",
                                        }}
                                        transition={{
                                            bounce: 0.25,
                                            stiffness: 130,
                                            damping: 10,
                                            duration: 0.3,
                                        }}
                                    />
                                </AnimatePresence>
                            )}
                        </Li>
                    ))
                }
            </UL>
            <div>
                {tabs[activeTab].content}
            </div>
        </TabWrapper>
    )
}

TabContainer.defaultProps = {
    tabs: [
        {
            title: "Diversity",
            content: <div>Tab 1 Content</div>
        },
        {
            title: "Make a difference",
            content: <div>Tab 2 Content</div>
        },
        {
            title: "Do the right thing",
            content: <div>Tab 3 Content</div>
        },
        {
            title: "Work as one",
            content: <div>Tab 4 Content</div>
        },
        {
            title: "Act with Integrity",
            content: <div>Tab 5 Content</div>
        },
    ],
    spaceBetween: false,
}

export default TabContainer;