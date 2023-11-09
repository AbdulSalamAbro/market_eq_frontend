import styled from "styled-components";
import { PageRoot } from "../pageLayer";
import Image, { StaticImageData } from "next/image";
import { FC } from "react";
import { cultureArray } from "./data";

const Root = styled.section``;

const H1 = styled.h1`
    color: #3d4160;
    font-weight: 700;
    font-size: 50px;
    line-height: 68px;
    margin-bottom: 50px;

    @media (max-width: 1024px) {
        font-size: 34px;
        line-height: 46px;
        margin-bottom: 30px;
    }
`;

const CardWrapper = styled.div`
    display: flex;
    flex-direction: row;
    gap: 50px;

    @media (max-width: 1024px) {
        gap: 20px;
    }

    @media (max-width: 768px) {
        flex-direction: column;
        gap: 20px;
    }
`;

const ImgWrapper = styled.div`
    min-width: 435px;
    height: 302px;

    img {
        width: 100%;
        height: 100%;
        object-fit: cover;
    }

    @media (max-width: 1024px) {
        min-width: 334px;
        height: 230px;
    }

    @media (max-width: 768px) {
        min-width: 100%;
        height: 200px;
    }
`;

const TextWrapper = styled.div`
    display: flex;
    flex-direction: column;

    h3 {
        color: #3d4160;
        font-weight: 600;
        font-size: 40px;
        line-height: 54px;
        margin-bottom: 30px;
    }

    p {
        color: rgba(61, 65, 96, 1);
        font-size: 22px;
        line-height: 29px;
        font-weight: 400;
        margin-bottom: 20px;
    }

    .margin {
        margin-bottom: 20px;
    }

    @media (max-width: 1024px) {
        h3 {
            font-size: 26px;
            line-height: 35px;
            margin-bottom: 20px;
        }

        p {
            font-size: 14px;
            line-height: 19px;
        }
    }

`;

const Flex = styled.div`
    display: flex;
    flex-direction: column;
    gap: 50px;

    @media (max-width: 1024px) {
        gap: 40px;
    }
`;

type CultureCardProps = {
    image: StaticImageData;
    title: string;
    p1: string;
    p2: string;
};

const CultureCard: FC<CultureCardProps> = ({ image, title, p1, p2 }) => (
    <CardWrapper
        role="card"
        aria-label={title}
    >
        <ImgWrapper>
            <Image src={image} alt={title} />
        </ImgWrapper>
        <TextWrapper>
            <h3>{title}</h3>
            <p className="margin">{p1}</p>
            <p>{p2}</p>
        </TextWrapper>
    </CardWrapper>
);

const OurCulture = () => (
    <Root id={"our-people"}>
        <PageRoot padding>
            <H1>Our Culture</H1>
            <Flex>
                {cultureArray.map((item, index) => (
                    <CultureCard
                        key={index}
                        image={item.image}
                        title={item.title}
                        p1={item.p1}
                        p2={item.p2}
                    />
                ))}
            </Flex>
        </PageRoot>
    </Root>
);

export default OurCulture;
