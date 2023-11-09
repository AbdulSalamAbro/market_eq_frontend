import styled from "styled-components"
import { PageRoot } from "../pageLayer";
import { InsightCard } from "@/stories/cards";
import { articlesData } from "../HomePage/data";

const Root = styled.section`
    background : #F5F5F5;
`;

const H1 = styled.h1`
    color : #3D4160;
    font-size : 52px;
    line-height : 70px;
    font-weight : 600;

    @media (max-width : 1024px) {
        font-size: 26px;
        line-height: 35px;
    }
`;

const Flex = styled.div`
    display : flex;
    flex-direction: row;
    gap : 20px;
    margin-top: 50px;

    @media (max-width: 1024px) {
        margin-top: 30px;
        gap : 30px;
    }

    @media (max-width: 768px) {
        flex-direction: column;
    }
`;

const WhoWeSectionSeven = () => {
    return (
        <Root>
            <PageRoot padding>
                <H1>Get to know us better</H1>
                <Flex>
                    {
                        articlesData.map((card) => (
                            <InsightCard
                                key={card.id}
                                title={card.title}
                                image={card.image}
                                link={card.link}
                                imgHeading={card.imgHeading}
                                description={card.desc}
                                underlineHover
                            />
                        ))
                    }

                </Flex>
            </PageRoot>
        </Root>
    )
}

export default WhoWeSectionSeven;