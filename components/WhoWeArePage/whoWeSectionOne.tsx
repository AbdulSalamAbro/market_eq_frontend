import styled from "styled-components";
import { PageRoot } from "../pageLayer";
import { FC } from "react";
import Image, { StaticImageData } from "next/image";
import { ReadMore } from "@/stories/cards";
import { storyArray } from "./data";

const Root = styled.section`
    background-color: #f9fafe;
    color: #3d4160;
`;

const H1 = styled.h1`
    color: #3d4160;
    font-size: 53px;
    line-height: 64px;
    font-weight: 800;

    @media (max-width: 1024px) {
        font-size: 32px;
        line-height: 38px;
        font-weight: 600;
    }

    @media (max-width: 768px) {
        font-size: 24px;
        line-height: 29px;
        font-weight: 600;
    }
`;

type StypeProps = {
    reverse: boolean;
};

const StoryCardRoot = styled.div<StypeProps>`
    display: flex;
    flex-direction: ${({ reverse }) => (reverse ? "row-reverse" : "row")};
    justify-content: space-between;
    gap: 100px;
    align-items: center;
    margin-top: 50px;

    @media (max-width: 1024px) {
        margin-top: 40px;
        gap: 40px;
    }

    @media (max-width: 768px) {
        flex-direction: ${({ reverse }) => (reverse ? "column-reverse" : "column-reverse")};
        gap: 20px;
    }
`;

const TextContainer = styled.div<StypeProps>`
    width: 50%;

    h2 {
        font-size: 25px;
        line-height: 30px;
        font-weight: 600;
        color: #3d4160;
        margin-bottom: 20px;
    }

    p {
        color: rgba(61, 65, 96, 0.6);
        font-size: 20px;
        line-height: 27px;
        font-weight: 400;
        margin-bottom: ${({ reverse }) => (reverse ? "40px" : "0px")};
    }

    @media (max-width: 1024px) {
        h2 {
            font-size: 18px;
            line-height: 22px;
        }
        p {
            font-size: 14px;
            line-height: 19px;
        }
    }

    @media (max-width: 768px) {
        width: 100%;
        
        p {
            margin-bottom: ${({ reverse }) => (reverse ? "30px" : "0px")};
        }

    }
`;

const ImgWrapper = styled.div`
    width: 50%;
    height: 428px;

    img {
        width: 100%;
        height: 100%;
        object-fit: cover;
    }

    @media (max-width: 1024px) {
        height: 250px;
    }
    
    @media (max-width: 768px) {
        width: 100%;
        height : 325px
    }
`;
// Story Card
type StoryCardProps = {
    title: string;
    desc: string;
    img: StaticImageData;
    reverse: boolean;
};

const StoryCard: FC<StoryCardProps> = ({ title, desc, img, reverse }) => (
    <StoryCardRoot reverse={reverse}>
        <TextContainer reverse={reverse}>
            <h2>{title}</h2>
            <p>{desc}</p>
            {reverse && <ReadMore color="#306CFE" />}
        </TextContainer>
        <ImgWrapper>
            <Image src={img} alt="story" />
        </ImgWrapper>
    </StoryCardRoot>
);


const WhoWeAreSectionOne = () => (
    <Root id='overview'>
        <PageRoot padding>
            <H1>Our Story</H1>
            {
                storyArray.map((story, index) => (
                    <StoryCard
                        key={index}
                        title={story.title}
                        desc={story.desc}
                        img={story.img}
                        reverse={story.reverse}
                    />
                ))
            }
        </PageRoot>
    </Root>
);


export default WhoWeAreSectionOne;
