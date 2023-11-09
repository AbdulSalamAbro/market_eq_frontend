import styled from "styled-components";
import { PageRoot } from "../pageLayer";
import TabContainer from "../Tab";
import { ReadMore } from "@/stories/cards";
import { diversity } from "@/stories/assets/pictures";
import Image from "next/image";

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

const SectionHead = styled.div`

    color : #3D4160;
    margin-bottom : 46px;

    h1 {
        font-size : 53px;
        font-weight : 700;
        line-height : 72px;
        margin-bottom : 46px;
    }

    p {
        font-size : 25px;
        font-weight : 300;
        line-height : 34px;
    }

    @media (max-width : 1024px) {
        h1 {
            font-size : 26px;
            line-height : 35.41px;
            margin-bottom : 12px;
        }
        p {
            font-size : 14px;
            line-height : 19px;
        }
    }
`;

const Flex = styled.div`
    display : flex;
    flex-direction : row;
    width : 100%;
    justify-content : space-between;
    align-items : center;
    gap : 40px;

    @media (max-width : 768px) {
        flex-direction : column-reverse;
        gap : 20px;
    }
`;

const ImgWrapper = styled.div`
    max-width : 654px;
    height : 375px; 
    
    img {
        width : 100%;
        height : 100%;
        object-fit : cover;
    }

    @media (max-width : 1024px) {
        height : 300px;
        max-width : 50%;
    }

    @media (max-width : 768px) {
        max-width : 100%;
    }
`;

const TextContainer = styled.div`
    
    max-width : 438px;

    h2 {
        color : #1E1E1E;
        font-size : 30px;
        font-weight : 600;
        line-height : 44px;
        margin-bottom : 23px;
    }
    p {
        color : #3D4160;
        font-size : 18.37px;
        font-weight : 300;
        line-height : 27px;
        margin-bottom : 23px;
    }

    @media (max-width : 1024px) {
        max-width : 50%;

        h2 {
            font-size : 22px;
            line-height : 33px;
            margin-bottom : 12px;
        }
        p {
            font-size : 14px;
            line-height : 21px;
        }
    }

    @media (max-width : 768px) {
        max-width : 100%;
    }
`;

const DiversityEquilty = () => (
    <Flex>
        <TextContainer>
            <h2>Diversity, Equity & Inclusion</h2>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed at mi sodales, congue dui a, pretium est. Proin rhoncus nulla ac diam aliquam, a rutrum massa faucibus. Praesent vulputate imperdiet turpis eu euismod.</p>
            <ReadMore lable="Learn More" color="#3D4160" chnageColor={true}/>
        </TextContainer>
        <ImgWrapper>
            <Image src={diversity} alt="diversity" />
        </ImgWrapper>
    </Flex>
)

const componentTab = [
    {
        title: "Diversity, Equity & Inclusion",
        content: <DiversityEquilty />
    },
    {
        title: "Social Responsibility",
        content: <DiversityEquilty />
    },
    {
        title: "Environmental Sustainability ",
        content: <DiversityEquilty />
    },
    {
        title: "Responsible Business",
        content: <DiversityEquilty />
    }
]

const AboutSectionSix = () => {
    return (
        <Root id="about-us" className="bg-[#f8f8f8] ">
            <PageRoot>
                <Main>
                    <SectionHead>
                        <h1>Our Commitments</h1>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed at mi sodales, congue dui a, pretium est. Ut vitae lacus vel erat vulputate tempor. Proin rhoncus nulla ac diam aliquam, a rutrum massa faucibus. Praesent vulputate imperdiet turpis eu euismod. Ut lectus turpis, dictum accumsan ultrices nec, tempus et justo.</p>
                    </SectionHead>
                    <TabContainer tabs={componentTab} spaceBetween={true} id="underline-11"/>
                </Main>
            </PageRoot>
        </Root>
    )
}

export default AboutSectionSix;