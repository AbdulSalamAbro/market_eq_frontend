import styled from "styled-components";
import { articlesData } from "./data";
import { InsightCard } from "@/stories/cards";

const Root = styled.section`
    padding: 0px 100px 100px 100px;

    h1 {
        color : #3D4160;
        font-size: 37.7px;
        line-height: 42px;
        font-weight: 400;
    }

    @media (max-width: 1024px) {
        padding: 0px 40px 40px 40px;

        h1 {
            font-size: 26.43px;
            line-height: 29.17px;
        }
    }

    @media (max-width: 768px) {
        padding: 0px 20px 40px 20px;
    }

`;
type CardWrapperProps = {
    reverse?: boolean;
}
const CardWrapper = styled.div<CardWrapperProps>`
    margin-top: 50px;
    display: flex;
    flex-direction: ${({ reverse }) => reverse ? "row-reverse" : "row"};
    gap: 20px;

    h3 {
        width: 92%;
    }

    @media (max-width: 1024px) {
        margin-top: 30px;
        justify-content: center;
    }

    @media (max-width: 768px) {
        gap: 30px;
        flex-direction: column;

        #in-card {
            max-width: 100%;
        }
    }
`;

const GridArticles = ({data}) => {
    console.log("grid data",data)
    return (
        <Root>
            <h1>{data.title}</h1>
            <CardWrapper>
                {
                    data?.InsightCards?.map((card) => (
                        <InsightCard
                            key={card._id}
                            title={card.title}
                            image={{
                                height: 2880,
                                src: card.bannerImage.asset.url,
                                width: 1920,
                              }}
                            imgHeading={card.PrimaryTag.title}
                            description={card.content}
                            underlineHover
                        />
                    )) 
                }
            </CardWrapper>
            <CardWrapper reverse>
            {
                    data?.InsightCards?.map((card) => (
                        <InsightCard
                            key={card._id}
                            title={card.title}
                            image={{
                                height: 2880,
                                src: card.bannerImage.asset.url,
                                width: 1920,
                              }}
                            imgHeading={card.PrimaryTag.title}
                            description={card.shortText}
                            underlineHover
                        />
                    )) 
                }
            </CardWrapper>
        </Root>
    )
}

export default GridArticles;