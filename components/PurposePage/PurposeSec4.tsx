import styled from "styled-components";
import { Commas } from "./data";
import Image from "next/image";
import { Sboy, bgGrad } from "@/stories/assets/pictures";

const Root = styled.section`
`;

const Container = styled.div`
    max-width: 1440px;
    margin: 0 auto;
    position: relative;

`;

const ImgContainer = styled.div`
    position: relative; 
    width: 100%;
    background: url(${bgGrad.src}) no-repeat center center;});

    img {
        height: 100%;
        width: 100%;
        object-fit: cover;
        // position: absolute;
    }

    @media (max-width : 1024px) {
        height: 600px;
    }

    @media (max-width : 768px) {
        height: 951px;
    }

`;

const Overlay = styled.div`
    padding: 100px;
    display: flex;
    flex-direction: row;
    gap: 75px;
    justify-content: space-between;
    position: relative;

    @media (max-width : 1024px) {
        padding: 40px;
        gap: 40px;
    }

    @media (max-width : 768px) {
        padding: 40px 20px;
        flex-direction: column;
        align-items: flex-start;
    }

`;

const ImageWrapper = styled.div`
    width: 50%;

    img {
        width: 100%;
        height: 100%;
        object-fit: cover;
        object-position: center;
    }

    // @media (max-width : 1024px) {
    //     height: 508px;
    // }

    @media (max-width : 768px) {
        width: 100%;
        height: 353px;
    }
`;

const TextWrapper = styled.div`
    display: flex;
    flex-direction: column;
    color: #3d4160;
    width: 50%;

    p {
        color : #3d4160;
        font-weight: 500;
        font-size: 30px;
        line-height: 41px;
        margin-top: 20px;
    }

    @media (max-width : 1024px) {
        p {
            font-size: 22px;
            line-height: 30px;
        }

        svg {
            width: 88px;
            height: 70px;
        }
    }

    @media (max-width : 768px) {
        width: 100%;
    }
`;

const Bottom = styled.div`
    margin-top: 50px;

    h4 {
        font-weight: 700;
        font-size: 18px;
        line-height: 24.4px;
        color: #3d4160;
    }
    
    p {
        font-weight: 400;
        font-size: 18px;
        line-height: 24.4px;
        color: #3d4160;
    }

    @media (max-width : 1024px) {
        margin-top: 40px;
        
        p {
            font-size: 15px;
            line-height: 20px;
        }
    }
`;

const PurposeSectionFour = () => (
    <Root>
        <Container>
            <ImgContainer>
                <Overlay>
                    <ImageWrapper>
                        <Image src={Sboy} alt="" />
                    </ImageWrapper>
                    <TextWrapper>
                        <Commas />
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla id blandit odio. Mauris convallis pharetra gravida. Nullam malesuada ligula lacus, quis malesuada nisi pellentesque et. Praesent quis tincidunt dolor, quis luctus nunc. Nulla ut mauris eget arcu suscipit tristique vitae ut ante.Praesent quis tincidunt dolor, quis luctus nunc. Nulla ut mauris eget arcu suscipit tristique vitae ut ante.Praesent quis tincidunt dolor, quis luctus nunc. Nulla ut mauris eget arcu suscipit tristique vitae ut ante.</p>
                        <Bottom>
                            <h4>First & Last Name</h4>
                            <span>Global Leader</span>
                        </Bottom>
                    </TextWrapper>
                </Overlay>
            </ImgContainer>
        </Container>
    </Root>
)

export default PurposeSectionFour;