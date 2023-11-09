import { scBG } from "@/stories/assets/pictures";
import styled from "styled-components";
import { PageRoot } from "../pageLayer";
import Image, { StaticImageData } from "next/image";
import { FC } from "react";
import { ReadMore } from "@/stories/cards";
import { weCardArray } from "./data";

const Root = styled.section``;

const Main = styled.div`
    position: relative;
`;

const ImgWrapper = styled.div`
    position: relative;
    width: 100%;
    height: 1190px;

    img {
        width: 100%;
        height: 100%;
        object-fit: cover;
    }

    .OVERLAY {
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        background-color: rgba(14, 32, 76, 0.7);
    }

    @media (max-width : 1200px) {
        height : auto;
    }
`;

const AbsoluteContainer = styled.div`
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;

    display: flex;
    flex-direction: column;
    padding: 100px;

    @media (max-width : 1200px) {
        padding : 40px;
        position : relative;
    }
    
    @media (max-width : 768px) {
        padding : 40px 20px;
    }
`;

const TextContainer = styled.div`
    position: relative;
    width: 80%;

    h1 {
        color: #fff;
        font-size: 43px;
        font-weight: 600;
        line-height: 58px;
        margin-bottom: 21px;
    }
    p {
        color: #fff;
        font-size: 20px;
        font-weight: 300;
        line-height: 27px;
    }

    @media (max-width : 1024px) {
        h1 {
            font-size : 32px;
            line-height : 43px;
            margin-bottom : 12px;
        }
        p {
            font-size : 14px;
            line-height : 21px;
        }
    }
`;

const CardGrid = styled.div`
    margin-top : 56px;
    display: flex;
    flex-direction: row;
    gap: 30px;

    @media (max-width : 768px) {
        flex-direction : column;
        gap : 22px;
        margin-top : 40px;
    }
`;

type WeDoCardProps = {
    title: string;
    description: string;
    image: StaticImageData;
    link: string;
};

const CardWrapper = styled.div`
    position: relative;
`;

const ImageWrapper = styled.div`
    width: 100%;
    height: 390px;
    position: relative;

    img {
        width: 100%;
        height: 100%;
        object-fit: cover;
    }

    @media (max-width : 1024px) {
        height : 220px
    }
    
`;

const TextWrapper = styled.div`
    padding: 40px;
    color: #3d4160;
    background-color: #fff;

    h2 {
        font-size: 28px;
        font-weight: 600;
        line-height: 38px;
        margin-bottom: 14px;
    }
    p {
        font-size: 20px;
        font-weight: 300;
        line-height: 27px;
        margin-bottom: 21px;
    }

    @media (max-width : 1024px) {
        padding : 20px;

        h2 {
            font-size : 20px;
            line-height : 27px;
            margin-bottom : 8px;
        }

        p {
            font-size : 14px;
            line-height : 19px;
        }
    }
`;

const Relative = styled.div`
    position: relative;
    width: 100%;
    height: 100%;
`;

const WeDoCard: FC<WeDoCardProps> = ({ title, description, image, link }) => {
    return (
        <CardWrapper
            aeria-label={title}
        >
            <ImageWrapper>
                <Image src={image} alt="image" layout="fill" />
            </ImageWrapper>
            <TextWrapper>
                <h2>{title}</h2>
                <p>{description}</p>
                <ReadMore lable="Learn More" color="#306CFE" />
            </TextWrapper>
        </CardWrapper>
    );
};

const AboutSectionSeven = () => (
    <Root>
        <PageRoot>
            <Main>
                <ImgWrapper>
                    <Image src={scBG} alt="scBG" layout="fill" />
                    <div className="OVERLAY" />
                    <AbsoluteContainer>
                        <Relative>
                            <TextContainer>
                                <h1>What we do</h1>
                                <p>
                                    Lorem ipsum dolor sit amet, consectetur
                                    adipiscing elit. In lacus dui, pharetra et
                                    turpis sed, blandit mattis velit. Fusce
                                    hendrerit purus ac purus convallis, sed
                                    efficitur quam congue.
                                </p>
                            </TextContainer>
                            <CardGrid>
                                {weCardArray.map((item, index) => (
                                    <WeDoCard
                                        key={index}
                                        title={item.title}
                                        description={item.description}
                                        image={item.image}
                                        link={item.link}
                                    />
                                ))}
                            </CardGrid>
                        </Relative>
                    </AbsoluteContainer>
                </ImgWrapper>
            </Main>
        </PageRoot>
    </Root>
);

export default AboutSectionSeven;
