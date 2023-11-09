import styled from "styled-components"
import BackgroundContent from "../bgContent"
import { MainWe, TextWrapperWe } from "./whatWeSection9"
import { board } from "@/stories/assets/pictures"

const Root = styled.section`

    #bg-img {
        height: auto !important;
    }

    #prnt {
        justify-content: center;
    }

    @media (max-width: 1024px) {
        
        #txt-89 {
            max-width : 60% !important;
        }
    }

    @media (max-width: 768px) {

        #txt-89 {
            max-width : 100% !important;
            padding : 30px !important;
        }
    }
`;
const TextContainer = styled.div`
    h2 {
        color: #3D4160;
        font-size: 25px;
        font-weight: 600;
        margin-bottom: 20px;
    }
    p {
        color : rgba(61, 65, 96, 0.6);
        font-size: 20px;
        font-weight: 400;
    }

    @media (max-width: 1024px) {
        h2 {
            font-size: 20px;
        }
        p {
            font-size: 14px;
        }
    }

    @media (max-width: 768px) {
        h2 {
            width: 50%;
        }
    }
`;
const WhatWeSectionTwo = () => (
    <Root>
        <BackgroundContent Imag={board}>
            <MainWe id="prnt">
                <TextWrapperWe id="txt-89">
                    <TextContainer>
                        <h2>Strategy and Transformation</h2>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse pellentesque euismod leo quis egestas. Donec ac eros molestie, sagittis justo sit amet, eleifend quam. Suspendisse tincidunt consequat ultrices. Integer malesuada augue id finibus ornare. Integer at varius ante.</p>

                    </TextContainer>
                </TextWrapperWe>
            </MainWe>
        </BackgroundContent>
    </Root>
)

export default WhatWeSectionTwo