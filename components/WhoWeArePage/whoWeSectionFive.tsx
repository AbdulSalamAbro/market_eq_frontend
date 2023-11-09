import styled from "styled-components";
import { PageRoot } from "../pageLayer";
import { FC } from "react";
import Image, { StaticImageData } from "next/image";
import { ReadMore } from "@/stories/cards";

const Root = styled.section``;

type StyleProps = {
    width? : boolean
}
const TextContainer = styled.div<StyleProps>`
    margin-bottom: 50px;

    h1 {
        color: #3d4160;
        font-size: 36px;
        line-height: 49px;
        font-weight: 600;
        margin-bottom: 20px;
    }

    p {
        color: #3d4160;
        font-size: 20px;
        line-height: 27px;
        font-weight: 300;
        width: ${({ width }) => (width ? "70%" : "auto")};
    }

    @media (max-width: 1024px) {
        margin-bottom: 30px;

        h1 {
            font-size: 26px;
            line-height: 35px;
            margin-bottom: 12px;
        }

        p {
            font-size: 14px;
            line-height: 19px;
            width: ${({ width }) => (width ? "auto" : "auto")};
        }

    }
`;

type SectionTextProps = {
    title : string
    description : string
    width? : boolean
}

export const SectionText:FC<SectionTextProps> = ({title, description, width}) => (
    <TextContainer width={width}>
         <h1>{title}</h1>
        <p>{description}</p>
    </TextContainer>
)

const CardWrapper = styled.div`
    position: relative;
    width: 100%;
    height: 685px;

    img {
        width: 100%;
        height: 100%;
        object-fit: cover;
    }

    @media (max-width: 1024px) {
        height : 385px;
    }

    @media (max-width: 768px) {
        height : 477px;
    }
`;

export const CardContentOvrlay = styled.div`
    position: absolute;
    bottom: 0;
    left: 0;
    width: 100%;
    height: 100%;

    padding: 20px;
    display: flex;
    flex-direction: column;
    justify-content: flex-end;
    color: white;

    h3 {
        font-size: 26px;
        font-weight: 500;
        line-height: 35px;
        margin-bottom: 14px;
    }

    p {
        font-size: 20px;
        font-weight: 400;
        line-height: 27px;
        margin-bottom: 40px;
    }

    @media (max-width: 1024px) {
        
        h3 {
            font-size: 20px;
            line-height: 27px;
            margin-bottom: 8px;
        }

        p {
            font-size: 16px;
            line-height: 21px;
            margin-bottom: 30px;
        }
    }
`;

const Flex = styled.div`
    display: flex;
    gap: 20px;
    flex-direction: row;

    @media (max-width: 1024px) {
        gap : 15px
    }
    
    @media (max-width: 1024px) {
        flex-direction : column;
    }
`;

type OutStoryProps = {
    title: string;
    desc: string;
    img: StaticImageData | string;
    link: string;
};

const OurStoryCard: FC<OutStoryProps> = ({ title, desc, img, link }) => (
    <CardWrapper
        aeria-label="Our Story Card"
        className="bg-[linear-gradient(0deg,_rgba(0,_0,_0,_0.5)_0%,rgba(0,_0,_0,_0.21)_25%,rgba(0,_0,_0,_0)_51%) 0% 0% / cover]"
    >
        <Image src={img} alt={title} />
        <CardContentOvrlay>
            <h3>{title}</h3>
            <p>{desc}</p>
            <ReadMore 
                chnageColor={true}
            />
        </CardContentOvrlay>
    </CardWrapper>
);

// use Two Times
type SecFiveProps = {
    title?: string;
    description?: string;
    dataArray?: OutStoryProps[];
};

const WhoWeSectionFive: FC<SecFiveProps> = ({
    title,
    description,
    dataArray,
}) => (
    <Root>
        <PageRoot padding>

            <SectionText
                title={title}
                description={description}
            />
           
            <Flex>
                {dataArray.map((item, index) => (
                    <OurStoryCard
                        key={index}
                        title={item.title}
                        desc={item.desc}
                        img={item.img}
                        link={item.link}
                    />
                ))}
            </Flex>
        </PageRoot>
    </Root>
);

WhoWeSectionFive.defaultProps = {
    title: "We are the authors of our story",
    description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed at mi sodales, congue dui a, pretium est. Ut vitae lacus vel erat vulputate tempor. Proin rhoncus nulla ac diam aliquam, a rutrum massa faucibus. Praesent vulputate imperdiet turpis eu euismod. Ut lectus turpis, dictum accumsan ultrices nec, tempus et justo. Morbi tempus quis lectus at aliquam.",
};

export default WhoWeSectionFive;
