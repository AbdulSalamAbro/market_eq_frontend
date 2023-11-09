import styled from "styled-components";
import { PageRoot } from "../pageLayer";
import { FC } from "react";
import Image, { StaticImageData } from "next/image";
import { impactCardsData } from "./data";

const Root = styled.section`

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
    color : rgba(61, 65, 96, 1);
    display : flex;
    flex-direction : column;
    gap : 20px;
    padding : 0 64px;

    h1 {
        font-size : 42px;
        font-weight : 600;
        line-height : 63px;
        text-align : center;
    }

    p {
        text-align : center;
        font-size : 25px;
        line-height : 34px;
        font-weight : 300;
    }

    @media (max-width : 1024px) {
        gap : 8px;

        h1 {
            font-size : 26px;
            line-height : 39px;
        }

        p {
            font-size : 14px;
            line-height : 19px;
        }
    }

    @media (max-width : 768px) {
        padding : 0 0px;
    }
`;

const SectionHeader = () => (
    <TextWrapper>
        <h1>Our Impact</h1>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed consectetur pretium tortor at maximus. Duis nibh elit, pellentesque a cursus sed, varius ut dui vivamus faucibus.</p>
    </TextWrapper>
)


const Grid = styled.div`

    display : grid;
    grid-template-columns : repeat(3, 1fr);
    gap : 20px;
    margin-top : 74px;

    @media (max-width : 1024px) {
        margin-top : 30px;
    }

    @media (max-width : 1024px) {
        grid-template-columns : repeat(1, 1fr);
    }
`;
// cards and Data
const CardWrapper = styled.div`
    display : flex;
    flex-direction : column;
    border : 2px solid rgba(61, 65, 96, 0.07);
`;

const ImgWrapper = styled.div`
    height : 440px;
    width : 100%;

    img {
        width : 100%;
        height : 100%;
        object-fit : cover;
    }

    @media (max-width : 1024px) {
        height : 220px;
    }
`;

const TextWrapp = styled.div`
    padding : 25px;

    h3 {
        color : #3D4160;
        font-size : 26px;
        font-weight : 600;
        line-height : 35px;
        margin-bottom : 20px;
    }

    p {
        color : #3D4160;
        font-size : 18px;
        font-weight : 300;
        line-height : 27px;
    }

    @media (max-width : 1024px) {
        padding : 20px;

        h3 {
            font-size : 20px;
            line-height : 27px;
        }

        p {
            font-size : 14px;
            line-height : 19px;
        }
    }

`;
type ImpactCardProps = {
    imgSrc: StaticImageData,
    title: string,
    text: string
}
const ImpactCard: FC<ImpactCardProps> = ({ imgSrc, title, text }) => {
    return (
        <CardWrapper 
            aria-label="Impact Card"
            role="group"
            aria-labelledby="Impact Card"
        >
            <ImgWrapper>
                <Image src={imgSrc} alt={title} />
            </ImgWrapper>
            <TextWrapp>
                <h3>{title}</h3>
                <p>{text}</p>
            </TextWrapp>
        </CardWrapper>
    )
}



const SectionCards = () => (
    <Grid>
        {
            impactCardsData.map((card, index) => (
                <ImpactCard key={index} {...card} />
            ))
        }
    </Grid>
)

const AboutSectionEight = () => (
    <Root id="our-impact">
        <PageRoot>
            <Main>
                <SectionHeader />
                <SectionCards />
            </Main>
        </PageRoot>
    </Root>
)


export default AboutSectionEight;