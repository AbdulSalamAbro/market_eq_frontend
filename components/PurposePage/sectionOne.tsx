import styled from "styled-components"
import { PageRoot } from "../pageLayer";
import { ReadMore } from "@/stories/cards";

const Root = styled.section`
    background : #F5F5F5;
`;

const H1 = styled.h1`
    color : #3D4160;
    font-weight : 800;
    font-size : 53px;
    line-height : 63px;
    margin-bottom : 35px;

    @media (max-width : 1024px) {
        font-size : 32px;
        line-height : 38px;
        margin-bottom : 20px;
    }
`;

const Text = styled.div`
    display : flex;
    flex-direction : row;
    gap : 35px;
    margin-bottom : 35px;

    p {
        color : rgba(61, 65, 96, 0.6);
        font-size : 20px;
        line-height : 27px;
        font-weight : 400;
    }

    @media (max-width : 1024px) {
        gap : 27px;
        margin-bottom : 30px;

        p {
            font-size : 14px;
            line-height : 19px;
        }
    }

    @media (max-width : 768px) {
        flex-direction : column;
        margin-bottom : 20px;

    }
`;

const SectionOne = () => (
    <Root id="overview">
        <PageRoot padding>
            <H1>Our Purpose</H1>
            <Text>
                <p>Our experience spans every industry and challenge, which gives us a unique perspective that we bring to every client relationship. We help you see the world differently, discover opportunities you may never have imagined and achieve results that bridge what is with what can be.</p>
                <p>Our experience spans every industry and challenge, which gives us a unique perspective that we bring to every client relationship. We help you see the world differently, discover opportunities you may never have imagined and achieve results that bridge what is with what can be.</p>
            </Text>
            <ReadMore color="#306CFE"/>

        </PageRoot>
    </Root>
)

export default SectionOne;