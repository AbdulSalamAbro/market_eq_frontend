import styled from "styled-components";
import { PageRoot } from "../pageLayer";
import { CardContentOvrlay, SectionText } from "./whoWeSectionFive";
import { sectionSixArray } from "./data";
import { FC } from "react";
import Image, { StaticImageData } from "next/image";
import { ReadMore } from "@/stories/cards";
const Root = styled.section`

`;

// Grid crads

const Grid = styled.div`
   display : flex;
   flex-direction : row;
    height : 685px;

    .first {
        width : 50%;
    }

    .second {
        width : 50%;
    }

    @media screen and (max-width : 1024px) {
        height : auto;
    }

    @media screen and (max-width : 768px) {
        flex-direction : column;
        height : auto;

        .first {
            width : 100%;
        }

        .second {
            width : 100%;
        }
    }
`;

const CardWrapper = styled.div`
    position : relative;

    #overlay {
        background : rgba(0,0,0,0.2);
    }
`;

type StyleProps = {
    first?: boolean
}

const ImgWrapper = styled.div<StyleProps>`
    
    position : relative;
    width : 100%;
    height : ${({ first }) => first ? "685px" : "342.5px"};
    background : #F6F6F6;

    img {
        width : 100%;
        height : 100%;
        object-fit : cover;
    }

    @media screen and (max-width : 1024px) {
        height : ${({ first }) => first ? "414px" : "207px"};
    }

    @media screen and (max-width : 768px) {
        height : ${({ first }) => first ? "300px" : "300px"};
    }
`

type SixCrad = {
    title: string
    desc: string
    img: StaticImageData
    link: string
    first?: boolean
}

const SecSixCard: FC<SixCrad> = ({ title, desc, img, link, first }) => (
    <CardWrapper>
        <ImgWrapper first={first}>
            <Image src={img} alt={title} />
        </ImgWrapper>
        <CardContentOvrlay id="overlay">
            <h3>{title}</h3>
            <p>{desc}</p>
            <ReadMore lable="Learn More" chnageColor={true} />
        </CardContentOvrlay>

    </CardWrapper>
)

const WhoWeSectionSix = () => (
    <Root>
        <PageRoot padding>
            <SectionText
                title="What we do"
                description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. In lacus dui, pharetra et turpis sed, blandit mattis velit. Fusce hendrerit purus ac purus convallis, sed efficitur quam congue."
                width
            />
            <Grid>
                <div className="first">
                    {
                        sectionSixArray.slice(0, 1).map((item, index) => (
                            <SecSixCard
                                title={item.title}
                                desc={item.desc}
                                img={item.img}
                                link={item.link}
                                key={index}
                                first 
                            />
                        ))
                    }
                </div>
                <div className="second">
                    {
                        sectionSixArray.slice(1, 3).map((item, index) => (
                            <SecSixCard
                                title={item.title}
                                desc={item.desc}
                                img={item.img}
                                link={item.link}
                                key={index}
                            />
                        ))

                    }
                </div>
            </Grid>

        </PageRoot>

    </Root>
)

export default WhoWeSectionSix;