import styled from "styled-components";
import { PageRoot } from "../pageLayer";
import { InsightCard } from "@/stories/cards";
import { articlesData } from "../HomePage/data";

const Root = styled.section`
    background : #F5F5F5;
`;

const H1 = styled.h1`
    color : #3D4160;
    font-weight : 600;
    font-size : 36px;
    line-height : 49px;
    margin-bottom : 50px;

    @media (max-width : 1024px) {
        font-size : 26px;
        line-height : 35px;
        margin-bottom : 30px;
    }
`;

const Flex = styled.div`
    display : flex;
    flex-direction : row;
    gap : 20px;

    @media (max-width : 1024px) {
        gap : 40px;
    }

    @media (max-width : 768px) {
        flex-direction : column-reverse;
        gap : 20px;
    }
`;

const Button = styled.button`
    padding : 20px 30px;
    border: 2px solid rgba(61, 65, 96, 0.07);

    font-size : 14px;
    font-weight : 400;
    line-height : 19px;
    color : #3D4160;
    text-transform : capitalize;

    @media (max-width : 768px) {
        padding : 15px 22px;
    }
`;

const Center = styled.div`
    display : flex;
    justify-content : center;
    align-items : center;
    flex-direction : column;
    margin-top : 100px;

    @media (max-width : 1024px) {
        margin-top : 50px;
    }

    @media (max-width : 768px) {
        margin-top : 40px;
        display : block;
    }

`;


const PurposeInsightSection = () => (
    <Root>
        <PageRoot padding>
            <H1>Related Insights</H1>
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
            <Center>
                <Button> see more insights</Button>
            </Center>
        </PageRoot>
    </Root>
)

export default PurposeInsightSection;