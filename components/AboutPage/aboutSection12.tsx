import styled from "styled-components";
import { PageRoot } from "../pageLayer";
import { atom } from "@/stories/assets/pictures";
import Image , {StaticImageData} from "next/image";
import Link from "next/link";
import {FC} from "react";

type RootProps = {
    bg ?: boolean
}

const Root = styled.section<RootProps>`
    background-color : ${({bg}) => bg ? "#F5F5F5" : "transparent"};
`;

const ImagWrapper = styled.div`
    width : 50%;
    height : 417px;

    img {
        width : 100%;
        height : 100%;
        object-fit : cover;
    }

    @media (max-width : 1024px) {
        height : 235px;
    }

    @media (max-width : 650px) {
        width : 100%;
    }
`;
const MainContainer = styled.div`
    padding : 100px;
        
    @media (max-width : 1024px) {
        padding : 40px;
    }
    
    @media (max-width : 768px) {
        padding : 40px 20px;
    }

`;

const TextContainer = styled.div`
    width : 50%;
    padding : 50px;

    h1 {
        color : #3D4160;
        font-size : 53px;
        font-weight : 700;
        margin-bottom : 20px;
        text-transform : capitalize;
        line-height : 54px;
    }
    p {
        color : #3D4160;
        font-size : 20px;
        line-height : 27px;
        font-weight : 300;
        margin-bottom : 50px;
    }
    a {
        color : #3D4160;
        font-size : 14px;
        line-height : 19px;
        font-weight : 400;
        padding : 20px 30px;
        border : 2px solid #3D416012;

        svg {
            display : none;
        }
    }

    @media (max-width : 1024px) {
        padding : 20px;

        h1 {
            font-size : 32px;
            line-height : 33px;
            font-weight : 600;
            margin-bottom : 12px;
        }

        p {
            font-size : 14px;
            line-height : 19px;
            margin-bottom : 30px;
        }

        a {
            padding : 0px 0px;
            border : none;

            svg {
                display : inline-block;
                margin-left : 10px;
            }
        }
    }

    @media (max-width : 650px) {
        width : 100%;
        padding : 40px 20px;

      
    }

`;
type StyleProps = {
    reverse ?: boolean
}

const Flex = styled.div<StyleProps>`
    display : flex;
     flex-direction: ${({ reverse }) => reverse ? "row-reverse" : "row"};

    gap : 50px;

    @media (max-width : 1024px) {
        gap : 20px;
    }

    @media (max-width : 650px) {
        flex-direction : column;
        gap : 0px;
    }
`;

const Arrow = () => (
    <svg width="13" height="10" viewBox="0 0 13 10" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M12.7663 5.69648C13.0042 5.45853 13.0042 5.07272 12.7663 4.83477L8.88855 0.957053C8.65059 0.719097 8.26479 0.719097 8.02684 0.957053C7.78888 1.19501 7.78888 1.58081 8.02684 1.81877L11.4737 5.26562L8.02684 8.71248C7.78888 8.95044 7.78888 9.33624 8.02684 9.5742C8.26479 9.81215 8.65059 9.81215 8.88855 9.5742L12.7663 5.69648ZM0.148926 5.87495H12.3354V4.6563H0.148926V5.87495Z" fill="#3D4160"/>
</svg>
)

// used 8 times
type SectionProps = {
    img ?: StaticImageData
    title? : string
    description? : string
    link? : string
    reverse?: boolean
    bg?: boolean
}

const AboutPageSectionTwelve : FC <SectionProps> = ({img , title, description, link, reverse, bg}) => (
    <Root bg={bg}>
        <PageRoot>
            <MainContainer>
                <Flex reverse={reverse}>
                    <ImagWrapper>
                        <Image src={img} alt={title} />
                    </ImagWrapper>
                    <TextContainer>
                        <h1>{title}</h1>
                        <p>{description}</p>
                        <Link href={link}>
                            Contact with us
                            <Arrow />
                        </Link>
                    </TextContainer>

                </Flex>
            </MainContainer>
        </PageRoot>
    </Root>
)

AboutPageSectionTwelve.defaultProps = {
    img : atom,
    title : "transformation starts here",
    description : "Lorem ipsum dolor sit amet consectetur adipiscing elit, urna consequat felis vehicula",
    link : "#"
}

export default AboutPageSectionTwelve;