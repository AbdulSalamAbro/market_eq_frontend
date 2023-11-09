import styled from "styled-components";
import { PageRoot } from "../pageLayer";
import Image, {StaticImageData} from "next/image";
import { office } from "@/stories/assets/pictures";
import { FC } from "react";
import Link from "next/link";

const Root = styled.section`
`;

const PageContainer = styled.div`
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
    gap : 100px;

    @media (max-width : 1024px) {
        gap : 40px;
    }
    
    @media (max-width : 768px) {
        flex-direction : column-reverse;
        gap : 20px;
    }
`;

const ImagWrapper = styled.div`
    width : 50%;
    height : 428px;

    img {
        width : 100%;
        height : 100%;
        object-fit : cover;
    }

    @media (max-width : 1024px) {
        height : 240px;
    }
    
    @media (max-width : 768px) {
        height : 325px;
        width : 100%;
    }
`;

const TextContainer = styled.div`
    color : #3D4160;
    width : 50%;

    h1 {
        font-size : 36px;
        font-weight : 600;
        line-height : 49px;
        text-transform : capitalize;
        margin-bottom : 20px;
    }

    p {
        font-size : 20px;
        font-weight : 300;
        line-height : 27px;
        margin-bottom : 50px;
    }

    a {
        border : 2px solid #3D416012;
        padding : 20px 30px;
        font-size : 14px;
        font-weight : 400;
        text-transform : capitalize;
    }

    @media (max-width : 1024px) {
        h1 {
            font-size : 26px;
            line-height : 35px;
        }
        p {
            font-size : 14px;
            line-height : 19px;
            margin-bottom : 30px;
        }
        .link {
            margin-top : 40px;
            margin-bottom : 15px;   
        }
        a {
            padding : 10px 22px;
        }
    }

    @media (max-width : 768px) {
        width : 100%;

        h1 {
            margin-bottom : 12px;
        }

        p {
            margin-bottom : 0px;
        }
    }
`;

// 3 time
type SectionProps = {
    img ?: StaticImageData
    title ?: string
    desc ?: string
    joinUs ?: boolean
    link ? : string
    id ?: string
}

const AboutPageSectionThree:FC<SectionProps> = ({img, title, desc, joinUs, link, id}) => (
    <Root
        id = {id}
    >
        <PageRoot>
            <PageContainer>
                <Flex>
                    <TextContainer>
                        <h1>{title}</h1>
                        <p>{desc}</p>
                        {joinUs && 
                            <div className="link">
                                <Link href={link}>work with us</Link>
                            </div>
                        }
                    </TextContainer>
                    <ImagWrapper>
                        <Image src={img} alt={title} />
                    </ImagWrapper>
                </Flex>
            </PageContainer>
        </PageRoot>
    </Root>
)

AboutPageSectionThree.defaultProps = {
    img : office,
    title : "Our values",
    desc : "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed at mi sodales, congue dui a, pretium est. Ut vitae lacus vel erat vulputate tempor. Proin rhoncus nulla ac diam aliquam, a rutrum massa faucibus. Praesent vulputate imperdiet turpis eu euismod. Ut lectus turpis, dictum accumsan ultrices nec, tempus et justo. Morbi tempus quis lectus at aliquam. Nulla tempor eleifend arcu et tristique. Nulla magna magna, lacinia quis velit sed, volutpat posuere velit.",
    joinUs : false,
    link : "#"
}

export default AboutPageSectionThree;