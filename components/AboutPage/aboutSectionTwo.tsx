"use client";

import styled from "styled-components";
import { PageRoot } from "../pageLayer";
import { ReadMore } from "@/stories/cards";
import { group } from "@/stories/assets/pictures";
import Image from "next/image";

const Root = styled.section`
    background : #306CFE0D;

`

const MainContainer = styled.div`
    padding : 100px;

    @media (max-width : 1024px) {
        padding : 40px;
    }
    
    @media (max-width : 768px) {
        padding : 40px 20px;
    }
`;

const Flex = styled.div`
    display : flex;
    flex-direction : row;
    gap : 50px;

    @media (max-width : 1024px) {
        gap : 20px;
        align-items : center;
    }

    @media (max-width : 768px) {
        flex-direction : column;
    }
`;

const ImgWrapper = styled.div`
    width : 50%;
    height : 428px;

    img {
        width : 100%;
        height : 100%;
        object-fit : cover;
    }

    @media (max-width : 1024px) {
        height : 335px;
    }

    @media (max-width : 768px) {
        width : 100%;
    }
`;

const TextContainer = styled.div`
    
    width : 50%;

    p {
        color : #3D4160;
        font-size : 25px;
        line-height : 34px;
        font-weight : 300;
        margin-bottom : 40px;
    }

    @media (max-width : 1024px) {
        p {
            font-size : 14px;
            line-height : 19.07px;
        }
    }

    @media (max-width : 768px) {
        width : 100%;

        p {
            margin-bottom : 30px;
        }
    }
`;

const H1 = styled.h1`
    color : #3D4160;
    font-size : 36px;
    font-weight : 700;
    margin-bottom : 45px;

    @media (max-width : 1024px) {
        font-size : 26px;
    }
    
    @media (max-width : 768px) {
        margin-bottom : 26px;
    }
`;

const AboutPageSectionTwo = () =>{
    return (
        <Root>
            <PageRoot>
                <MainContainer>
                    <H1>Our Purpose</H1>
                    <Flex>
                        <ImgWrapper>
                            <Image src={group} alt="group"/>
                        </ImgWrapper>
                        <TextContainer>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed at mi sodales, congue dui a, pretium est. Ut vitae lacus vel erat vulputate tempor. Proin rhoncus nulla ac diam aliquam, a rutrum massa faucibus. Praesent vulputate imperdiet turpis eu euismod. Ut lectus turpis, dictum accumsan ultrices nec, tempus et justo. Morbi tempus quis lectus at aliquam. Nulla tempor eleifend arcu et tristique. </p>
                            <ReadMore color="#3D4160"/>
                        </TextContainer>
                    </Flex>

                </MainContainer>
            </PageRoot>
        </Root>
    )
}

export default AboutPageSectionTwo;