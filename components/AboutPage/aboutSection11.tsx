import styled from "styled-components"
import { PageRoot } from "../pageLayer";
import Image from "next/image";
import { butter } from "@/stories/assets/pictures";

const Root = styled.section`
    background-color : rgba(61, 65, 96, 0.03);
`;
const Main = styled.div`
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
    gap : 80px;

    @media (max-width : 1024px) {
        gap : 20px;
    }

    @media (max-width : 768px) {
        flex-direction : column-reverse;
    }
`;

const TextContainer = styled.div`
    width : 50%;
    
    h1 {
        font-size : 53px;
        line-height : 59px;
        font-weight : 400;
        color : #3D4160;
        margin-bottom : 20px;
        width : 85%;

        strong {
            font-weight : 800;
        }
    }
    p {
        color : rgba(61, 65, 96, 0.6);
        font-size : 25px;
        font-weight : 400;
        line-height : 31px;
    }

    @media (max-width : 1024px) {
        h1 {
            font-size : 32px;
            line-height : 35px;
            width : 100%;
        }
        p {
            font-size : 14px;
            line-height : 23px;
            font-weight : 300;
        }
    }

    @media (max-width : 768px) {
        width : 100%;
    }
    
`;

const ImgWrapper = styled.div`
    width : 50%;
    height : 538px;

    img {
        width : 100%;
        height : 100%;
        object-fit : cover;
    }

    @media (max-width : 1024px) {
        height : 336px;
    }

    @media (max-width : 768px) {
        width : 100%;
        height : 230px;
    }
`;

const AboutSectionEleven = () => (
    <Root>
        <PageRoot>
            <Main>
                <Flex>
                    <TextContainer>
                        <h1>We Accelerate <strong>sustainable and inclusive growth</strong></h1>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed at mi sodales, congue dui a, pretium est. Ut vitae lacus vel erat vulputate tempor. Proin rhoncus nulla ac diam aliquam, a rutrum massa faucibus. Praesent vulputate imperdiet turpis eu euismod. Ut lectus turpis, dictum accumsan ultrices nec, tempus et justo. Morbi tempus quis lectus at aliquam. Nulla tempor eleifend arcu et tristique. Nulla magna magna, lacinia quis velit sed, volutpat posuere velit.</p>
                    </TextContainer>
                    <ImgWrapper>
                        <Image src={butter} alt="group" />
                    </ImgWrapper>
                </Flex>
            </Main>
        </PageRoot>
    </Root>
)

export default AboutSectionEleven;