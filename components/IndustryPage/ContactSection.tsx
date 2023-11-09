import styled from "styled-components";
// import { PageRoot } from "../pageLayer";
import { ins2 } from "@/stories/assets/pictures";
import Image, { StaticImageData } from "next/image";
import Link from "next/link";
import { FC } from "react";
import { CheckLine } from "./data";
import { PageRoot } from "../pageLayer";

type RootProps = {
    bg?: boolean
}

const Root = styled.section<RootProps>`
    background-color : ${({ bg }) => bg ? "#F5F5F5" : "transparent"};
`;

const ImagWrapper = styled.div`
    width : 50%;
    height : 383px;

    img {
        width : 100%;
        height : 100%;
        object-fit : cover;
    }

    @media (max-width : 1024px) {
        height : auto;
    }

    @media (max-width : 768px) {
        width : 100%;
        height :auto;
    }
    @media (max-width : 650px) {
        width : 100%;
        height :188px;
    }
`;


const TextContainer = styled.div`
    width : 50%;
    padding : 50px;
    display: flex;
    flex-direction: column;
    justify-content: center;

    h1 {
        color : #3D4160;
        font-size : 36px;
        font-weight : 600;
        line-height : normal;
    }
    p {
        color : #3D4160;
        font-size : 16px;
        font-weight : 400;
       
    }
    button{
        border: 1.521px solid rgba(61, 65, 96, 0.12);
        background: #FFF;
    }

    @media (max-width : 1024px) {
        padding : 0 20px;

        h1 {
            font-size : 32px;
            line-height : 33px;
            font-weight : 600;
        }

        p {
            font-size : 14px;
            line-height : 19px;
           
        }
    }

    @media (max-width : 768px) {
        width : 100%;
        padding :  0px 20px ;
        h1 {
                font-size : 26px;
            }
        svg{
            width: 18.737px;
            height: 18.737px;
        }
        p{
            font-size: 12px;
        }
    }
    @media (max-width : 650px) {
         padding :  20px 20px 0px;
    }

`;

const List = styled.div`
    display : flex;
    flex-direction : column;
    gap : 20px;
    padding-bottom: 40px;
    svg{
        width: 24px;
        height: 24px;
    }
    @media (max-width : 1024px) {
        padding-bottom: 30px;
        svg{
            width: 18.737px;
            height: 18.737px;
        }
    }
    
`;

type StyleProps = {
    reverse?: boolean
}

const Flex = styled.div<StyleProps>`
    display : flex;
     flex-direction: ${({ reverse }) => reverse ? "row-reverse" : "row"};


    @media (max-width : 1024px) {
        gap : 20px;
    }

    @media (max-width : 650px) {
        flex-direction : column;
        gap : 0px;
        flex-direction: column-reverse;
    }
`;

// used 8 times
type SectionProps = {
    img?: StaticImageData
    title?: string
    list?: Array<string>
    link?: string
    reverse?: boolean
    bg?: boolean
}

const ContactSection: FC<SectionProps> = ({ img, title, list, link, reverse }) => (
    <Root bg>
        <PageRoot>
        <div className="py-10 px-5 desktop:p-10 xlTablet:p-[100px]">
            <Flex reverse={reverse}>
                <TextContainer>
                    <div className="pb-5">
                        <h1>{title}</h1>
                    </div>
                    <List>
                        {
                            list.map((item, index) => (
                                <div className="flex items-center  lg:row-auto gap-[15px]" key={index}>
                                    <CheckLine />
                                    <p className="p-0 !m-0">{item}</p>
                                </div>
                            ))
                        }
                    </List>
                    <div>
                        <button className="px-[22px] py-3 xlTablet:px-[30px] xlTablet:py-5 border border-[#3D416012] text-dark text-xs xlTablet:text-sm">Contact us</button>
                    </div>
                </TextContainer>
              
                <ImagWrapper>
                    <Image src={img}  height={2880} width={2880} alt={title} className="" />
                </ImagWrapper>

            </Flex>
        </div>
        </PageRoot>
    </Root>
)

ContactSection.defaultProps = {
    img: ins2,
    title: "transformation starts here",
    list: ["Lorem ipsum dolor sit amet", "Lorem ipsum dolor sit amet", "Lorem ipsum dolor sit amet"],
    link: "#"
}

export default ContactSection;