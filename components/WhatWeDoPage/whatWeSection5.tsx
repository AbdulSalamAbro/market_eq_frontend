import styled from "styled-components"
import { PageRoot } from "../pageLayer";
import { FC } from "react";
import Link from "next/link";
import { Cloud, TabArrow } from "./data";
const Root = styled.section`
    background-color: #f7f7f7;
`;

// 2 times used
export const H1 = styled.h1`
    font-size: 36px;
    font-weight: 600;
    line-height: 49px;
    color: #3d4160;
    text-transform: capitalize;
 
    @media (max-width: 1024px) {
        font-size: 26px;
        line-height: 35px;
    }
`;

const CardWrapper = styled.div`

    padding : 15px 25px;
    border : 4px solid rgba(61, 65, 96, 0.07);
    background-color: #fff;

    a {
        text-decoration: none;
        color: #3d4160;
        font-size: 20px;
        font-weight: 600;
        display: flex;
        justify-content: space-between;
        align-items: center;
        gap: 20px;
    }

    .row {
        display: flex;
        flex-direction: row;
        align-items: center;
        gap: 20px;
    }

    @media (max-width: 1024px) {
        a {
            font-size: 15px;
        }
        .row {
            gap: 15px;

            svg {
                width: 38px;
                height: 38px;
            }
        }
    }

    @media (max-width: 768px) {
        padding : 11px 18px;
    }
`;

const Grid = styled.div`
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    gap: 20px;
    margin-top: 50px;


    @media (max-width: 1024px) {
        gap : 15px;
    }
    @media (max-width: 768px) {
        grid-template-columns: repeat(1, 1fr);
        margin-top: 20px;
    }
`;

type Props = {
    title: string;
    tabArray: Array<IndustryTabProps>;
}

type IndustryTabProps = {
    title: string;
    link: string;
}

const InsdustryTab: FC<IndustryTabProps> = ({ title, link }) => (
    <CardWrapper>
        <Link href={link}>
            <div className="row">
                <Cloud />
                {title}
            </div>
            <TabArrow />
        </Link>
    </CardWrapper>
)

const WhatWeSectionFive: FC<Props> = ({ title, tabArray }) => (
    <Root>
        <PageRoot padding={true}>
            <H1>{title}</H1>
            <Grid>
                {
                    tabArray.map((item) => (
                        <InsdustryTab
                            title={item.title}
                            link={item.link}
                            key={item.title}
                        />
                    ))
                }
            </Grid>

        </PageRoot>
    </Root>
)

export default WhatWeSectionFive;