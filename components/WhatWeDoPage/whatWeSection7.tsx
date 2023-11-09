import styled from "styled-components"
import { PageRoot } from "../pageLayer"
import { imgArray } from "./data";
import Image from "next/image";

const Root = styled.section`

`
const Container = styled.div`

    display: flex;
    flex-direction: column;
    gap: 100px;

    @media (max-width: 1024px) {
        flex-direction: row;
        gap: 40px;
    }

    @media (max-width: 768px) {
        flex-direction: column;
    }
`;
const TextContainer  = styled.div`

    h1 {
        margin-bottom: 20px;
        color: #3D4160;
        font-size: 53px;
        font-weight: 600;
    }
    p {
        color: #3D4160;
        font-size: 20px;
        font-weight: 300;
    }

    @media (max-width: 1024px) {
        width: 50%;

        h1 {
            font-size: 26px;
            margin-bottom: 12px;
        }
        p {
            font-size: 14px;
        }
    }
    @media (max-width: 768px) {
        width: 100%;
    }
`;

const Row = styled.div`
    display: grid;
    grid-template-columns: repeat(5, 1fr);
    grid-gap: 50px;

    @media (max-width: 1024px) {
        grid-template-columns: repeat(2, 1fr);
        grid-gap: 40px;
    }

    @media (max-width: 768px) {
        grid-gap: 40px 20px;

        #Salesforce {
            height: 55px;
        }
    }

`;
const ImgWrapper = styled.div`

    width: 100%;
    height: 51px;

    img {
        width: 100%;
        height: 100%;
        object-fit: contain;
    }
    
    @media (max-width: 1024px) {
        height: 38px;
    }

    @media (max-width: 768px) {
        width: max-content;
    }

`;

const WhatWeSectionSeven = () => (
    <Root
        id ="partners"
    >
        <PageRoot padding>
            <Container>
            <TextContainer>
                <h1>Our Partner Ecosystem</h1>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam laoreet scelerisque risus suscipit suscipit. Nunc ipsum augue, rhoncus ac laoreet vel, venenatis ac dui. Integer tincidunt erat ac leo luctus condimentum</p>
            </TextContainer>
            <Row>
                {
                    imgArray.map((item, index) => (
                        <ImgWrapper key={index}
                            id = {item.title}
                        >
                            <Image
                                src={item.img}
                                alt={item.title}
                            />
                        </ImgWrapper>
                    ))
                }
            </Row>
            </Container>
        </PageRoot>
    </Root>
)

export default WhatWeSectionSeven