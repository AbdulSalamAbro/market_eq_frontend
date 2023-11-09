import { gpt } from "@/stories/assets/pictures";
import BackgroundContent from "../bgContent";
import styled from "styled-components";
import { ReadMore } from "@/stories/cards";

export const MainWe = styled.div`
    display: flex;
    flex-direction: column;
    align-items: end;
    width: 100%;
    height: 100%;

    @media (max-width: 768px) {
        align-items: center;
    }
`;

export const TextWrapperWe = styled.div`
    background-color: #fff;
    color: #000;
    max-width: 612px;
    padding: 40px;
    height: auto;

    .head-tag {
        font-size: 14px;
        line-height: 19px;
        font-weight: 500;
        text-transform: capitalize;
        color: #3D4160;
    }

    @media (max-width: 1024px) {
        padding : 40px 20px;
        max-width: 344px;

        .head-tag {
            font-size: 12px;
        }
    }
`;

const TextContent = styled.div`
    margin-top: 40px;
    margin-bottom: 40px;

    h2 {
        font-size: 25px;
        line-height: 35px;
        font-weight: 600;
        margin-bottom: 5px;
        color: #3D4160;
    }
    p {
        color : rgba(61, 65, 96, 0.6);
        font-size: 20px;
        line-height: 27px;
        font-style: italic;
        font-weight: 400;
    }

    @media (max-width: 1024px) {
        margin-top: 30px;
        margin-bottom: 30px;

        h2 {
            font-size: 19px;
            line-height: 26px;
            margin-bottom: 12px;
        }
        p {
            font-size: 15.23px;
            line-height: 20.74px;
        }
    }
`;
const WhatWeSectionNine = () => (
    <>
        <BackgroundContent Imag={gpt}>
            <MainWe>
                <TextWrapperWe>
                    <div className="head-tag">Featured insight</div>
                    <TextContent>
                        <h2>Ready for Launch: How Gen AI Is Already Transforming Marketing</h2>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse pellentesque euismod leo quis egestas. Donec ac eros molestie, sagittis justo sit amet, eleifend quam.</p>

                    </TextContent>
                    <ReadMore color="#306CFE"/>

                </TextWrapperWe>
            </MainWe>

        </BackgroundContent>
    </>
)

export default WhatWeSectionNine;