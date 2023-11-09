import styled from "styled-components";
import { PageRoot } from "../pageLayer";
import { FC } from "react";
import Image, { StaticImageData } from "next/image";
import { Comma, Left, Right, peopleArray } from "./data";

const Root = styled.section`

`;

const TextContainer = styled.div`

    h1 {
        color : #3D4160;
        font-weight : 600;
        font-size : 36px;
        line-height: 49px;
        margin-bottom: 20px;
    }

    p {
        color : #3D4160;
        font-weight : 300;
        font-size : 20px;
        line-height: 27px;
    }

    @media (max-width: 1024px) {
        h1 {
            font-size : 26px;
            line-height: 35px;
            margin-bottom: 12px;
        }

        p {
            font-size : 14px;
            line-height: 19px;
        }
    }
`;

const PeopleCarousel = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    gap: 40px;
    margin-top: 50px;
    position : relative;

    @media (max-width: 1024px) {
        gap : 15px;
        margin-top: 30px;
    }

    @media (max-width: 768px) {
        flex-direction: column;
        gap: 15px;
    }
`;

type StyleProps = {
    isCentered?: boolean;
}

const ImgWrapper = styled.div<StyleProps>`
    position: relative;
    width: 100%;
    height: ${({ isCentered }) => isCentered ? "428px" : "290px"};

    &:hover {
        cursor: pointer;
    }

    img {
        width: 100%;
        height: 100%;
        object-fit: cover;
    }

    @media (max-width: 1024px) {
        height: ${({ isCentered }) => isCentered ? "307px" : "220px"};
    }

    @media (max-width: 768px) {
        height: ${({ isCentered }) => isCentered ? "335px" : "220px"};
    }
`;

const OverLayText = styled.div`
    position: absolute;
    bottom: 0;
    left: 0;
    width: 100%;
    height: 100%;

    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: end;
    padding: 19px 17px;

    p {
        margin-top: 6px;
        color: white;
        font-size: 16px;
        font-weight: 400;
        line-height : 21.7px;
        margin-bottom : 6px;
    }
    h3 {
        color: white;
        font-size: 16px;
        font-weight: 600;
        line-height : 19px;
    }

    @media (max-width: 1024px) {
        p {
            font-size: 14px;
            line-height : 19px;
            margin-bottom : 12px;
            margin-top : 12px;
        }
        h3 {
            font-size: 12px;
            line-height : 14px;
        }
    }
`;

type PeopleCardProps = {
    image: StaticImageData;
    title: string;
    desc: string;
    isCentered?: boolean;
}

const PeopleCard: FC<PeopleCardProps> = ({ image, title, desc, isCentered }) => (
    <ImgWrapper aria-label={title} isCentered={isCentered}>
        <Image src={image} alt={title} />
        <OverLayText>
            <Comma />
            <p>{desc}</p>
            <h3>{title}</h3>
        </OverLayText>
    </ImgWrapper>
)

const IconRow = styled.div`
    position : absolute;
    bottom : 50%;
    left : 0;
    width : 100%;

    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
    padding: 0 20px;

    svg {
        cursor: pointer;
    }

    @media (max-width: 1024px) {
        display : none;
    }

`;
const Relative = styled.div`
    position : relative;
    width : 100%;
    height : 100%;
`;

const WhoWeAreSectionTwo = () => (
    <Root id="our-people">
        <PageRoot padding>
            <TextContainer>
                <h1>Our People</h1>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed at mi sodales, congue dui a, pretium est. Ut vitae lacus vel erat vulputate tempor. Proin rhoncus nulla ac diam aliquam, a rutrum massa faucibus. Praesent vulputate imperdiet turpis eu euismod. Ut lectus turpis, dictum accumsan ultrices nec, tempus et justo. Morbi tempus quis lectus at aliquam. </p>
            </TextContainer>
            <Relative>
                <PeopleCarousel>
                    {
                        peopleArray.map((item, index) => (
                            <PeopleCard
                                key={index}
                                image={item.image}
                                title={item.title}
                                desc={item.desc}
                                // second item
                                isCentered={index === 1}
                            />
                        ))
                    }
                </PeopleCarousel>
                {/* <IconRow>
                    <Left />
                    <Right />
                </IconRow> */}
            </Relative>

        </PageRoot>
    </Root>
)

export default WhoWeAreSectionTwo;