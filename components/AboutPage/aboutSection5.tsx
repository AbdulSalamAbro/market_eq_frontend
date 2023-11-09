import styled from "styled-components";
import { PageRoot } from "../pageLayer";
import { FC } from "react";
import { ReadMore } from "@/stories/cards";
import { textCardData } from "./data";

const Root = styled.section`
    // background : #F6F8FB;
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

const TextWrapper = styled.div`
    width : 60%;

    h1 {
        color : rgba(61, 65, 96, 1);
        font-size : 53px;
        font-weight : 600;
        line-height : 72px;
    }

    p {
        color : rgba(61, 65, 96, 0.6);
        font-size : 25px;
        font-weight : 300;
        line-height : 34px;
    }

    @media (max-width : 1024px) {

        h1 {
            font-size : 42px;
            line-height : 63px;
        }

        p {
            font-size : 20px;
            line-height : 27px;
        }
    }

    @media (max-width : 768px) {

        width : 100%;

        h1 {
            font-size : 26px;
            line-height : 35px;
        }

        p {
            font-size : 14px;
            line-height : 19px;
        }
    }

`;

const TextCardWrapper = styled.div`
    
    h3 {
        color : rgba(61, 65, 96, 1);
        font-size : 25px;
        line-height : 34px;
        font-weight : 600;
        margin-bottom : 10px;
    }
    p {
        color : rgba(61, 65, 96, 0.6);
        font-size : 20px;
        line-height : 27px;
        font-weight : 400;
        margin-bottom : 20px;
    }

    @media (max-width : 1024px) {
        h3 {
            font-size : 18px;
            line-height : 24.5px;
        }
        p {
            font-size : 14px;
            line-height : 19px;
        }
    }
`;

type TextCardProps = {
    title: string,
    description: string,
    linkText: string,
    link: string,
}

const TextCard: FC<TextCardProps> = ({ title, description, linkText, link }) => (
    <TextCardWrapper
        aeia-label="Text Card"
        role="group"
    >
        <h3>{title}</h3>
        <p>{description}</p>
        <ReadMore lable={linkText} color="#3D4160" chnageColor={true} />
    </TextCardWrapper>
)

const CardGrid = styled.div`
    margin-top : 50px;
    display : grid;
    grid-template-columns : repeat(3, 1fr);
    gap : 50px;

    @media (max-width : 1024px) {
        margin-top : 40px;
        gap : 40px;
    }

    @media (max-width : 768px) {
        grid-template-columns : repeat(1, 1fr);
    }
`;

const AboutSectionFive = () => (
    <Root id="our-culture">
        <PageRoot>
            <Main>
                <TextWrapper>
                    <h1>Who we are</h1>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed consectetur pretium tortor at maximus. Duis nibh elit, pellentesque a cursus sed, varius ut dui. Vivamus faucibus augue velit, ac varius risus tempus vel.</p>
                </TextWrapper>
                <CardGrid>
                    {
                        textCardData.map((item, index) => (
                            <TextCard
                                key={index}
                                title={item.title}
                                description={item.description}
                                link={item.link}
                                linkText={item.linkText}
                            />
                        ))
                    }
                </CardGrid>
            </Main>
        </PageRoot>
    </Root>
)


export default AboutSectionFive;