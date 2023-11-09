import { crossImg } from "@/stories/assets/pictures";
import { ReadMore } from "@/stories/cards";
import styled from "styled-components";
import CrossImageCard from "../crosImgCard";

const Root = styled.div`

    padding: 100px 100px 0px 100px;

    @media screen and (max-width: 1024px) {
        padding: 40px 40px 0px 40px;
    }

    @media screen and (max-width: 768px) {
        padding: 40px 20px 0px 20px;
    }
`;

//  this section will be used again agsin in the future

const TextContainer = styled.div`
    h1 {
        font-size: 26.43px;
        color: #FFFFFF;
        font-weight: 400;
        margin-bottom: 50px;
        width: 40%;
    }

    @media screen and (max-width: 768px) {
        h1 {
            width: 100%;
        }
    }
`;
const InRow = styled.div`

    display: flex;
    align-items: center;
    flex-direction: row;
    margin-bottom: 14px;
    
    p {
        font-size: 14px;
        color: #FFFFFF;
        font-weight: 500;
        margin-right: 10px;
        text-transform: capitalize;
    }

    .dot {
        width: 4px;
        height: 4px;
        border-radius: 50%;
        background-color: #FFFFFF;
        margin-right: 10px;
        margin-left: 10px;
    }

    span {
        font-size: 12px;
        color: #FFFFFF;
        font-weight: 400;
    }

`;

const SectionThree = ({data}) => {
    console.log("section theree",data)
    const primaryTag = data.featuredInsights.PrimaryTag.title
    const title = data.featuredInsights.title
    const buttonLabel= data.featuredInsights.readMore.label
    const coverImage= data.featuredInsights.bannerImage.asset.url
    return (
        <Root>
            <CrossImageCard imgUrl={coverImage} overLay={true}>
                <TextContainer>
                    <InRow className="in-row">
                        <p>{primaryTag}</p>
                        <div className="dot"/>
                        <span>123 min read</span>
                    </InRow>
                    <h1>{title}</h1>
                    <ReadMore 
                        label={buttonLabel}
                        chnageColor={true}
                    />
                </TextContainer>

            </CrossImageCard>
        </Root>
    )
}

export default SectionThree;