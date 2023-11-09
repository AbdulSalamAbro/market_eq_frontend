import styled from "styled-components"
import { PageRoot } from "../pageLayer";
import TabContainer from "../Tab";
import { teamG } from "@/stories/assets/pictures";
import Image from "next/image";
import { ReadMore } from "@/stories/cards";

const Root = styled.section`
    background-color : #3D416008;
`;

const Main = styled.div`
    padding : 100px;
    color : #3D4160;

    @media (max-width : 1024px) {
        padding : 40px;
    }
    
    @media (max-width : 768px) {
        padding : 40px 20px;
    }
`;

const H1 = styled.h1`
    color : #3D4160;
    font-size : 36px;
    font-weight : 600;
    line-height : 49px;
    margin-bottom : 69px;

    @media (max-width : 1024px) {
        font-size : 26px;
        line-height : 35px;
        margin-bottom : 52px;
    }
    
    @media (max-width : 768px) {
        margin-bottom : 40px;
    }
`;

const DiversityWrapper = styled.div`
    display : flex;
    flex-direction : row;
    gap : 76px;

    @media (max-width : 1024px) {
        gap : 40px;
    }

    @media (max-width : 768px) {
        flex-direction : column;
        gap : 20px;
    }
`;

const ImgWrapper = styled.div`
    width : 50%;
    height : 407px;

    img {
        width : 100%;
        height : 100%;
        object-fit : cover;
    }

    @media (max-width : 1024px) {
        height : 244px;
    }

    @media (max-width : 768px) {
        height : 310px;
        width : 100%;
    }
`;

const TextWrapper = styled.div`
    color : #3D4160;

    h2 {
        font-size : 30px;
        font-weight : 600;
        line-height : 34px;
        margin-bottom : 20px;
    }

    ul {
        list-style-type : disc;
        margin-left : 40px;
        margin-bottom : 40px;
        
        li {
            font-size : 25px;
            font-weight : 300;
            line-height : 34px;
            margin-bottom : 21px;
            
            &:last-child {
                margin-bottom : 0px;
            }
        }
    }

    @media (max-width : 1024px) {
        h2 {
            font-size : 22px;
            line-height : 30px;
        }

        ul {
            li {
                font-size : 16px;
                line-height : 21.6px;
            }
        }
    }

`;

const Diversity = () => (
    <DiversityWrapper>
        <ImgWrapper>
            <Image src={teamG} alt="teamG" />
        </ImgWrapper>
        <TextWrapper>
            <h2>Lorem ipsum dolor sit amet consectetur. </h2>
            <ul>
                <li>Integer sollicitudin magna sed augue</li>
                <li>Integer sollicitudin magna sed augue</li>
                <li>Integer sollicitudin magna sed augue</li>
            </ul>
            <ReadMore lable="Read More" color="#3D4160" />
        </TextWrapper>
    </DiversityWrapper>
)

const componentTab = [
    {
        title: "Diversity",
        content: <Diversity />
    },
    {
        title: "Make a difference",
        content: <Diversity />
    },
    {
        title: "Do the right thing",
        content: <Diversity />
    },
    {
        title: "Work as one",
        content: <Diversity />
    },
    {
        title: "Act with Integrity",
        content: <Diversity />
    },
]

const AboutSectionFour = () => {
    return (
        <Root id="our-team">
            <PageRoot>
                <Main>
                    <H1>Values Headline Here</H1>

                    <TabContainer tabs={componentTab} />
                </Main>
            </PageRoot>
        </Root>
    )
}

export default AboutSectionFour;