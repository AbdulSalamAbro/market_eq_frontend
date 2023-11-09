import styled from "styled-components";
import { PageRoot } from "../pageLayer";
import Image from "next/image";
import { os11, os22 } from "@/stories/assets/pictures";
import { H1 } from "./whatWeSection5";
import { ReadMore } from "@/stories/cards";
import { FC } from "react";

const Root = styled.section`
    background-color: #f7f7f7;
`;

type StyleProps = {
    reverse?: boolean;
}

const Flex = styled.div<StyleProps>`
    display: flex;
    flex-direction: ${({ reverse }) => reverse ? "row-reverse" : "row"};
    align-items: center;
    gap: 100px;
    position: relative;

    @media (max-width: 1024px) {
        gap: 40px;
    }
    @media (max-width: 768px) {
        flex-direction: column;
        gap: 20px;
    }
`;

const style = `
    width: 100%;
    height: 100%;
    object-fit: cover;
`

const ImgWrapp1 = styled.div`
    
    width: 570px;
    height: 511px;
    position: relative;

    img {
        ${style}
    }

    @media (max-width: 1024px) {
        width: 40%;
        height: 456px;
    }

    @media (max-width: 768px) {
        width: 100%;
        height: 392px;
    }
`;

const ImgWrapp2 = styled.div`
    
    width: 570px;
    height: 430px;

    img {
        ${style}
    }

    @media (max-width: 1024px) {
        width: 50%;
    }

    @media (max-width: 768px) {
        width: 100%;
        height: 325px;
    }
`;

const TextWrapp = styled.div`
    width: 50%;

    .top {
        font-size: 18px;
        font-weight: 400;
        line-height: 24px;
        color: #3d4160;
        margin-bottom: 20px;
    }
    p {
        margin-top: 20px;
    }

    .row {
        display: flex;
        flex-direction: row;
        align-items: center;
        gap: 20px;
        margin-top: 50px;
        margin-bottom: 50px;
    }

    @media (max-width: 1024px) {
        .row {    
            margin-bottom: 30px;
            margin-top: 20px;
        }
    }
    
    @media (max-width: 768px) {
        width: 100%;
    }
`;

const TextWrapp1 = styled.div`
    width: 50%;

    p {
        margin-bottom: 20px;
        margin-top: 20px;
    }
    
    @media (max-width: 768px) {
        width: 100%;
    }
`;

const P = styled.p`
    font-size: 20px;
    font-weight: 300;
    line-height: 27px;
    color: #3d4160;

    @media (max-width: 1024px) {
        font-size: 14px;
        line-height: 19px;
        margin-bottom: 20px;
    }
`;

const FLex = styled.div`
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    gap: 12px;
    margin-top: 20px;
    margin-bottom: 50px;
    width: 90%;

    strong {
        padding : 7px 14px;
        border : 1px solid rgba(61, 65, 96, 0.17);
        border-radius : 4px;
        font-size: 16px;
        font-weight: 600;
        line-height: 22px;
        color: #3d4160;
    }

    @media (max-width: 1024px) {
        gap: 10px;
        margin-bottom: 30px;

        strong {
            font-size: 12px;
            line-height: 16px;
            padding : 10px;
        }
    }
`;

const UL = styled.ul`
    
    display: flex;
    flex-direction: column;
    gap: 27px;
    max-width: 280px;
    
    li {
        font-size: 20px;
        font-weight: 600;
        line-height: 27px;
        color: #3d4160;
    }

    @media (max-width: 1024px) {
        gap: 40px;
        max-width: 100%;

        li {
            font-size: 15px;
            line-height: 20px;
        }
    }
`;

const Button = styled.button`
    padding: 20px 30px;
    border : 1px solid rgba(61, 65, 96, 0.07);
    color: #3d4160;
    font-size: 14px;
    font-weight: 400;
    
    @media (max-width: 768px) {
        padding: 15px 22.5px;
    }

`;

const tags = ["Technology","Risk", "Metaverse", "Governance", "Metaverse", "Governance", "Technology", "Cybersecurity"]

const list = ["Product Strategy","Market Strategy", "Digital Strategy", "Customer Strategy"]

type ListMapProps = {
    list: string[];
}

const ListMap:FC<ListMapProps> = ({list}) => (
    <UL>
        {list.map((item, index) => (
            <li 
                aes-label="list"
                key={index}>{item}</li>
        ))}
    </UL>
)

const WhatWeSectionSix = () => (
    <Root
        id = "strategy"
    >
        <PageRoot padding>
            <Flex>
                <ImgWrapp1>
                    <Image
                        src={os11}
                        alt="Picture of the author"
                    />
                </ImgWrapp1>
                <TextWrapp>
                    <div className="top">Go beyond the expected</div>
                    <H1>Our Strategy</H1>
                    <P>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut pharetra diam quis velit suscipit</P>
                    <div className="row">
                        <ListMap list={list}/>
                        <ListMap list={list}/>
                    </div>
                    <Button>Learn More</Button>
                </TextWrapp>

            </Flex>
        </PageRoot>
        <PageRoot padding>
            <Flex reverse>
                <ImgWrapp2>
                    <Image
                        src={os22}
                        alt="Picture of the author"
                    />
                </ImgWrapp2>
                <TextWrapp1>
                    <H1>Our Solutions</H1>
                    <P>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam laoreet scelerisque risus suscipit suscipit. Nunc ipsum augue, rhoncus ac laoreet vel.</P>
                    <FLex>
                        {tags.map((item, index) => (
                            <strong
                                key={index}
                                aria-label="tags"
                            >
                                {item}
                            </strong>
                        ))}
                    </FLex>
                    <ReadMore
                        color="#3D4160"
                        lable="Explore our Solutions "
                            chnageColor={true}
                    />
                </TextWrapp1>

            </Flex>
        </PageRoot>
    </Root>
)

export default WhatWeSectionSix;