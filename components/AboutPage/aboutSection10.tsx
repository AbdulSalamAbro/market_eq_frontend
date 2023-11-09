import styled from "styled-components";
import { PageRoot } from "../pageLayer";
import { FC } from "react";
import { ReadMore } from "@/stories/cards";
import { cardArray } from "./data";

const Root = styled.section``;
const Main = styled.div`
    padding: 100px;
        
    @media (max-width : 1024px) {
        padding : 40px;
    }
    
    @media (max-width : 768px) {
        padding : 40px 20px;
    }
`;

// use Two Times
const ExploreMoreWrapper = styled.div`
    color: #3d4160;

    h3 {
        font-size: 36px;
        font-weight: 400;
        line-height: 49px;
        margin-bottom: 20px;
    }

    .row {
        display: flex;
        flex-direction: row;
        gap: 12px;

    }
    a {
        text-decoration: none;
        color: #3d4160;
        padding: 7px 14px;
        font-size: 16px;
        font-weight: 600;
        border : 1px solid rgba(61, 65, 96, 0.17);
        border-radius : 4px;
    }

    @media (max-width : 1024px) {
        h3 {
            font-size: 26px;
            line-height: 35px;
        }
        a {
            font-size: 12px;
            line-height: 16px;
        }
    }

    @media (max-width : 768px) {
        .row {
            flex-wrap : wrap;
        }
    }
`;

type ExploreMoreProps = {
    title?: string;
    tags?: {
        title: string;
        link: string;
    }[];

}
const ExploreMore: FC<ExploreMoreProps> = ({ title, tags }) => {
    return (
        <ExploreMoreWrapper>
            <h3>{title}</h3>
            <div className="row">
                {
                    tags.map((item) => (
                        <a href={item.link}>{item.title}</a>
                    ))
                }
            </div>
        </ExploreMoreWrapper>
    );
};

ExploreMore.defaultProps = {
    title: "Explore more",
    tags: [
        {
            title: "Make a difference",
            link: "#",
        },
        {
            title: "Work as one",
            link: "#",
        },
        {
            title: "Act with Integrity",
            link: "#",
        },
        {
            title: "Client needs come first",
            link: "#",
        },
    ]
}

// 3 one version
// 2 second version

const FlexLayer = styled.div`
    margin-top: 50px;
    margin-bottom: 50px;

    display: flex;
    flex-direction: row;
    gap: 20px;

    > div {
        flex: 1;
    }

    @media (max-width : 1024px) {
        margin-top: 20px;
        margin-bottom: 40px;
        gap : 15px;
    }

    @media (max-width : 768px) {
        flex-direction: column;
        margin-bottom: 0px;
    }
`;

const CardWrapper = styled.div`
    position: relative;
`;

const CardImg = styled.div`
    position: relative;
    width: 100%;
    min-height: 414px;
    height: 100%;
    display: flex;

    img {
        width: 100%;
        height: 100%;
        object-fit: cover;
        position: absolute;
    }

    @media (max-width : 768px) {
        min-height: 314px;
    }

`;

const CardText = styled.div`
    position: relative;
    width: 100%;
    background: rgba(48, 108, 254, 0.13);

    padding: 25px;
    display: flex;
    flex-direction: column;
    justify-content: flex-end;

    h2 {
        color: #fff;
        font-size: 26px;
        font-weight: 400;
        line-height: 35px;
        margin-bottom: 14px;
    }
    p {
        color: #fff;
        font-size: 21px;
        font-weight: 300;
        line-height: 28px;
        margin-bottom: 40px;
    }
    
    @media (max-width : 1024px) {
        padding: 20px;

        h2 {
            font-size: 20px;
            line-height: 27px;
            margin-bottom: 10px;
        }

        p {
            font-size: 16px;
            line-height: 21px;
            margin-bottom: 30px;
        }
    }

    @media (max-width : 768px) {
        p {
            margin-bottom: 20px;
        }
        h2 {
            margin-bottom: 6px;
        }
    }

`;

type PurposeCardProps = {
    img: string;
    title: string;
    des: string;
    link: string;
};

const PurposeCrad: FC<PurposeCardProps> = ({ img, title, des, link }) => {
    return (
        <CardWrapper>
            <CardImg>
                <img src={img} alt={title} />
                <CardText>
                    <h2>{title}</h2>
                    <p>{des}</p>
                    {/* <ReadMore href = {link} /> */}
                    <ReadMore chnageColor={true}/>
                </CardText>
            </CardImg>
        </CardWrapper>
    );
};

const H2 = styled.h2`
    font-size: 36px;
    font-weight: 600;
    line-height: 49px;
    color: #3d4160;

    @media (max-width : 1024px) {
        font-size: 26px;
        line-height: 35px;
    }
`;
type KnowProps = {
    title ?: string
    hideExplore ?: boolean
}

export const GetToKnowUs : FC <KnowProps> = ({title}) => (
    <div>
        <H2>{title}</H2>
        <FlexLayer>
            {cardArray.map((item) => (
                <PurposeCrad
                    key={item.id}
                    img={item.img}
                    title={item.title}
                    des={item.des}
                    link={item.link}
                />
            ))}
        </FlexLayer>
    </div>
);


const AboutSectionTen : FC<KnowProps> = ({title, hideExplore}) => (
    <Root>
        <PageRoot>
            <Main>
                <GetToKnowUs title={title}/>
                {!hideExplore && <ExploreMore />}
            </Main>
        </PageRoot>
    </Root>
);
AboutSectionTen.defaultProps = {
    title : "Get to know us",
    hideExplore : false
}

export default AboutSectionTen;
