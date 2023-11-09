import styled from "styled-components"
import { PageRoot } from "../pageLayer";
import TabContainer from "../Tab";
import Link from "next/link";
import Image from "next/image";
import { teamG } from "@/stories/assets/pictures";

const Root = styled.section`
    background-color: #F9F9F9;
`;

const TextContainer = styled.div`
    width: 70%;
    margin-bottom: 70px;

    h1 {
        color: #3D4160;
        font-size: 36px;
        font-weight: 600;
        margin-bottom: 20px;
    }

    p {
        color: #3D4160;
        font-size: 20px;
        font-weight: 300;
        line-height: 31px;
    }

    @media (max-width: 1024px) {
        margin-bottom: 40px;

        h1 {
            font-size: 26px;
            margin-bottom: 12px;
        }
        p {
            font-size: 14px;
        }
    }

    @media (max-width: 768px) {
        width: 100%;
    }
`;

const TechTabContainer = styled.div`
    display: flex;
    flex-direction: row;
    gap: 76px;

    @media (max-width: 1024px) {
        gap: 40px;
    }

    @media (max-width: 768px) {
        flex-direction: column-reverse;
        gap: 20px;
    }

`;

const TechText = styled.div`
    width: 50%;
    color: #3D4160;

    h3 {
        font-size: 30px;
        font-weight: 600;
        margin-bottom: 20px;
    }

    p {
        font-size: 20px;
        font-weight: 300;
        line-height: 31px;
    }

    a {
        padding : 20px 30px;
        border : 2px solid rgba(61, 65, 96, 0.07);
        font-size: 14px;
        font-weight: 400;
    }

    @media (max-width: 1024px) {
        h3 {
            font-size: 26px;
            margin-bottom: 12px;
        }
        p {
            font-size: 14px;
        }
        a {
            padding : 15px 22.8px;
            font-size: 12px;
        }
    }

    @media (max-width: 768px) {
        width: 100%;

        .a-wrap {
            padding: 20px 0px;
        }
    }
`;

const TechImage = styled.div`
    width: 50%;
    height: 483px;

    img {
        width: 100%;
        height: 100%;
        object-fit: cover;
    }

    @media (max-width: 1024px) {
        height: 408px;
    }

    @media (max-width: 768px) {
        height: 388px;
        width: 100%;
    }
`;

const Grid = styled.div`
    display: grid;
    grid-template-columns: 1fr 1fr;
    grid-gap: 27px;
    margin-bottom: 50px;
    margin-top: 50px;

    strong {
        font-size: 20px;
        font-weight: 600;
        color: #3D4160;
    }

    @media (max-width: 1024px) {
        margin-bottom: 40px;
        margin-top: 40px;
        strong {
            font-size: 14px;
        }
    }
`;

const tags = [
    "UX/UI Design",
    "UX/UI Design",
    "Product Engineering",
    "Product Engineering",
    "SEO",
    "SEO"
]

const TechnologyTab = () => (
    <TechTabContainer>
        <TechText>
            <h3>Analyze, architect, and co-create</h3>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam laoreet scelerisque risus suscipit suscipit. Nunc ipsum augue, rhoncus ac laoreet vel, venenatis ac dui. Integer tincidunt erat ac leo luctus condimentum</p>
            <Grid>
                {tags.map((tag, index) => (
                    <strong 
                        key={index}
                        aeria-label={tag}
                        id = {tag + index}
                    >{tag}</strong>
                ))}
            </Grid>
            <div className="a-wrap">
                <Link href="#">Explore more</Link>
            </div>
        </TechText>

        <TechImage>
            <Image src={teamG} alt="teamG" />
        </TechImage>
    </TechTabContainer>
)

const tabComponents = [
    {
        title : "Technology",
        content : <TechnologyTab/>
    },
    {
        title : "Transformation",
        content : <TechnologyTab/>
    },
    {
        title : "Customer Experience",
        content : <TechnologyTab/>
    },
    {
        title : "Partners",
        content : <TechnologyTab/>
    }
]

const WhatWeSection8 = () => (
    <Root>
        <PageRoot padding>
            <TextContainer>
                <h1>How we can help ?</h1>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam laoreet scelerisque risus suscipit suscipit. Nunc ipsum augue, rhoncus ac laoreet vel, venenatis ac dui. Integer tincidunt erat ac leo luctus condimentum</p>
            </TextContainer>
            <TabContainer tabs={tabComponents} id="SegmentedControlActive"/>
        </PageRoot>
    </Root>
)

export default WhatWeSection8