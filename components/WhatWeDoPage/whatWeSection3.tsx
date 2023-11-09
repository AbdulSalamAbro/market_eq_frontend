import { bgGrad } from "@/stories/assets/pictures";
import Image from "next/image";
import styled from "styled-components"
import { Commas } from "../PurposePage/data";

const Root = styled.section`

`;

const Main = styled.div`
    position: relative;
    max-width: 1440px;
    margin: 0 auto;
`;

const ImgContainer = styled.div`
    position: relative; 
    width: 100%;

    img {
        height: 100%;
        width: 100%;
        object-fit: cover;
        position: absolute;
    }

`;

const Overlay = styled.div`

    padding: 100px;
    position: relative;
    display: flex;

    @media (max-width: 1024px) {
        padding: 40px;
    }

    @media (max-width: 768px) {
        padding: 40px 20px;
    }

`;

const Flex = styled.div`

    display: flex;
    flex-direction: row;
    gap: 34px;
    width: 100%;
    height: 100%;

    svg {
        min-width: 111px;
    }

    @media (max-width: 1024px) {
        flex-direction: column;
        gap: 30px;
        justify-content: center;

        svg {
            min-width: 85px;
            width: 85px;
        }
    }
`;

const TextContainer = styled.div`
    color: #fff;

    h1 {
        font-size: 45px;
        font-weight: 600;
        margin-bottom: 34px;
    }
    h3 {
        font-size: 20px;
        font-weight: 600;
        margin-bottom: 8px;
    }
    span {
        font-size: 16px;
        font-weight: 300;

    }

    @media (max-width: 1200px) {
        h1 {
            font-size: 38px;
        }
    }

    @media (max-width: 1024px) {
        h1 {
            font-size: 32px;
            margin-bottom: 30px;
            line-height: 43px;
        }
        h3 {
            font-size: 16px;
            line-height: 19px;
        }
        span {
            font-size: 12px;
            line-height: 14px;
        }
    }
`;


const WhatWeSectionThree = () => (
    <Root>
        <Main>
            <ImgContainer>
                <Image
                    src={bgGrad}
                    alt="bg"
                />
                <Overlay
                      className="bg-[linear-gradient(rgba(0,_0,_0,_0.2),_rgba(0,_0,_0,_0.2))]"
                >
                    <Flex>
                        <Commas />
                        <TextContainer>
                            <h1>We’re able to show our leadership team what we’ve delivered. It’s a testament to the way that we’ve been working with Marketeq. We’re not just talking agile; we’re proving it through delivery. </h1>
                            <h3>Name of the leader</h3>
                            <span>Title of the leader</span>

                        </TextContainer>
                    </Flex>
                </Overlay>
            </ImgContainer>

        </Main>

    </Root>
)

export default WhatWeSectionThree