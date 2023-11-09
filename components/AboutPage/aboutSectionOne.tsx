import styled from "styled-components"
import { PageRoot } from "../pageLayer";
import { FC } from "react";
import { ReadMore } from "@/stories/cards";

// used 3 times
const Root = styled.section`
    background-color : rgba(61, 65, 96, 0.03);
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

const TextConatiner = styled.div`

    padding-right : 50px;

    h1 {
        color : rgba(61, 65, 96, 1);
        font-size : 53px;
        line-height : 72px;
        font-weight : 400;
        margin-bottom : 20px;
        width : 70%;

        strong {
            font-weight : 800;
        }
    }

    p {
        color : #3D4160;
        font-size : 25px;
        line-height : 31px;
        font-weight : 300;
        margin-bottom : 40px;

        &:nth-child(2) {
            margin-bottom : 40px;
        }
    }

    @media (max-width : 1024px) {
        
        h1 {
            font-size : 32px;
            line-height : 38px;
        }

        p {
            font-size : 14px;
            line-height : 19px;
            margin-bottom : 20px;

            &:nth-child(2) {
                margin-bottom : 30px;
            }
        }
    }

    @media (max-width : 768px) {
        padding-right : 0px;
    }

    @media (max-width : 480px) {
        h1 {
            width : 80%;
        }
    }

`;

type SectionOneProps = {
    title?: {
        bold: string,
        normal: string,
    }
    desc1?: string,
    desc2?: string,
    link?: string,
}

const AboutSectionOne: FC<SectionOneProps> = ({
    title,
    desc1,
    desc2,
    link
}) => (
    <Root id="sectionOne">
        <PageRoot>
            <Main>
                <TextConatiner>
                    <h1><strong>{title.bold}</strong> {title.normal}</h1>
                    <p>{desc1}</p>
                    <p>{desc2}</p>
                    <ReadMore lable="Learn More" color="#3D4160"/>
                </TextConatiner>
            </Main>
        </PageRoot>
    </Root>
)

AboutSectionOne.defaultProps = {
    title: {
        bold: "We accelerate",
        normal: "sustainable and inclusive growth"
    },
    desc1 : 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed at mi sodales, congue dui a, pretium est. Ut vitae lacus vel erat vulputate tempor. Proin rhoncus nulla ac diam aliquam, a rutrum massa faucibus. Praesent vulputate imperdiet turpis eu euismod. Ut lectus turpis, dictum accumsan ultrices nec, tempus et justo. Morbi tempus quis lectus at aliquam. Nulla tempor eleifend arcu et tristique. Nulla magna magna, lacinia quis velit sed, volutpat posuere velit.',
    desc2 : "Integer sollicitudin magna sed augue pellentesque, sit amet sagittis magna pharetra. Donec varius, augue ac finibus iaculis, purus dui luctus erat, eu malesuada lacus odio eu velit. Fusce nec leo eu ipsum cursus tincidunt sed scelerisque sem. Vestibulum pellentesque sem ac risus blandit rhoncus. Pellentesque quis velit tincidunt, egestas libero et, mollis augue. Aenean eu posuere metus, posuere tempus est. Donec tristique sapien eget egestas consectetur. Morbi vulputate lacinia luctus.",
    link : "#"
}



export default AboutSectionOne