import styled from "styled-components"
import { PageRoot } from "../pageLayer";
import Image from "next/image";
import { Award } from "@/stories/assets/pictures";

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

const Header = styled.div`
    display : flex;
    flex-direction : column;
    justify-content : center;
    align-items : center;
    color : #3d4160;

    h2 {
        font-size : 40px;
        font-weight : 700;
        line-height : 60px;
        margin-bottom : 4px;
        taext-align : center;
    }
    p {
        font-size : 16px;
        font-weight : 400;
        line-height : 23px;
        text-align : center;
    }

    @media (max-width : 1024px) {
        h2 {
            font-size : 26px;
            font-weight : 600;
            line-height : 39px;
            margin-bottom : 8px;
        }
        p {
            font-size : 14px;
            font-weight : 300;
            line-height : 21px;
        }
    }

    @media (max-width : 768px) {
        
        align-items : flex-start;
        
        h2 {
            text-align : start;
        }

        p {
            text-align : start;
        }
    }
`;

const AwardCardWrapper = styled.div`
    
    display : flex;
    flex-direction : row;
    gap : 50px;
    margin-top : 50px;
    margin-bottom : 50px;

    @media (max-width : 1024px) {
        margin-bottom : 30px;
        gap : 20px;
    }

    @media (max-width : 768px) {
        flex-direction : column;
        margin-top : 30px;
    }
`;

const ImgWrapper = styled.div`
    width : 50%;
    position : relative;

    img {
        width : 100%;
        height : 100%;
        object-fit : cover;
        position : absolute;
    }

    @media (max-width : 768px) {
        width : 100%;
        height : 410px;
    }
`;

const Description = styled.div`
    width : 50%;
    color : #3d4160;

    @media (max-width : 768px) {
        width : 100%;
    }
`;

const AwardTitle = styled.div`
    background-color : rgba(255, 255, 255, 1);
    padding : 20px;
    color : rgba(61, 65, 96, 1);
    margin-bottom : 30px;
    border : 1px solid rgba(61, 65, 96, 0.07);  

    &:last-child {
        margin-bottom : 0px;
    }

    h2 {
        font-size : 18.65px;
        font-weight : 400;
        line-height : 28px;

        strong {
            font-weight : 600;
        }
    }

    p {
        margin-top : 13.6x;
        font-weight : 500;
        font-size : 18.65px;
        line-height : 28px;
    }

    @media (max-width : 1024px) {
        margin-bottom : 15px;
    
        h2 {
            font-size : 14px;
            line-height : 21px;
        }

        p {
            font-size : 14px;
            line-height : 21px;
        }
    }

`;
const AwardCard = () => (
    <AwardCardWrapper>
        <ImgWrapper>
            <Image src={Award} alt="award" />
        </ImgWrapper>

        <Description>
            <AwardTitle>
                <h2>2023 <strong>Award Title / Name</strong></h2>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed at mi sodales, congue dui a, pretium est. Ut vitae lacus vel erat vulputate tempor. </p>
            </AwardTitle>
            <AwardTitle>
                <h2>2023 <strong>Award Title / Name</strong></h2>
            </AwardTitle>
            <AwardTitle>
                <h2>2023 <strong>Award Title / Name</strong></h2>
            </AwardTitle>
            <AwardTitle>
                <h2>2023 <strong>Award Title / Name</strong></h2>
            </AwardTitle>
            <AwardTitle>
                <h2>2023 <strong>Award Title / Name</strong></h2>
            </AwardTitle>

        </Description>
    </AwardCardWrapper>
)

const ViewAll = styled.div`
    display : flex;
    justify-content : center;
    align-items : center;
    width : 100%;

    button {
        color : #3d4160;
        font-size : 14px;
        font-weight : 400;
        line-height : 19px;
        padding : 20px 30px;
        text-transform : uppercase;
        border : 1px solid rgba(61, 65, 96, 0.17);

        display : inline-flex;
        justify-content : center;
        align-items : center;

        i {
            margin-left : 25px;
        }
    }

    @media (max-width : 1024px) {
        button {
            padding : 15px 23px;
        }
    }
`;

const Arr = () => (
    <svg width="7" height="13" viewBox="0 0 7 13" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M0.499512 12.6621L6.49951 6.66211L0.499512 0.662109V12.6621Z" fill="#3D4160" />
    </svg>

)
const AboutSectionNine = () => (
    <Root id="our-awards">
        <PageRoot>
            <Main>
                <Header>
                    <h2>Awards and Accolades</h2>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed at mi sodales, congue dui a, pretium est. Ut vitae lacus vel erat </p>
                </Header>
                <AwardCard />
                <ViewAll>
                    <button>
                        View All Awards
                        <i><Arr /></i>
                    </button>

                </ViewAll>

            </Main>
        </PageRoot>
    </Root>
)

export default AboutSectionNine