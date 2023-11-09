import styled from "styled-components";
import { PageRoot } from "../pageLayer";
import { articlesData } from "../HomePage/data";
import { InsightCard } from "@/stories/cards";

const Root = styled.div`
    background-color: #f9fafe;
`;

const TextContainer = styled.div`
    display : flex;
    flex-direction: row;
    gap : 50px;
    justify-content: space-between;
    align-items: center;

    h1 {
        color : #3D4160;
        font-weight: 600;
        font-size: 52px;
        line-height: 70px;
        width : 35%;
    }

    p {
        color : #3D4160;
        font-weight: 300;
        font-size: 20px;
        line-height: 27px;
        width : 60%;
    }

    @media (max-width: 1024px) {
        gap : 12px;
        flex-direction: column;

        h1 {
            width : 100%;
            font-size: 26px;
            line-height: 35px;
        }
        p {
            width : 100%;
            font-size: 14px;
            line-height: 19px;
        }
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

const WhoWeSectionFour = () => (
    <Root>
        <PageRoot padding>
            <TextContainer>
                <h1>Diversity Equity & Inclusion</h1>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed at mi sodales, congue dui a, pretium est. Ut vitae lacus vel erat vulputate tempor. Proin rhoncus nulla ac diam aliquam, a rutrum massa faucibus. Praesent vulputate imperdiet turpis eu euismod. Ut lectus turpis, dictum accumsan ultrices nec, tempus et justo. Morbi tempus quis lectus at aliquam. </p>
            </TextContainer>
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
                            readMore={true}
                            readMoreColor="#306CFE"
                        />
                    ))
                }
            </Flex>
        </PageRoot>

    </Root>
)

export default WhoWeSectionFour;