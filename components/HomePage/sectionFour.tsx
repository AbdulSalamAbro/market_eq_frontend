import { cash } from "@/stories/assets/pictures";
import { ReadMore } from "@/stories/cards";
import styled from "styled-components";

const Root = styled.section`
    
    padding: 100px;

    @media (max-width: 1024px) {
        padding: 40px;
    }

    @media (max-width: 768px) {
        padding: 20px;
    }
`;

const FlexContainer = styled.div`
    display: flex;
    flex-direction: row;
    gap: 50px;
    justify-content: space-between;
    height: 390px;

    @media (max-width: 1024px) {
        height: 322px;
        gap: 40px;
    }

    @media (max-width: 768px) {
        flex-direction: column;
        height: auto;
        gap: 20px;
    }
`;

const ImgWrap = styled.div`
    width: 50%;
    height: 100%;

    img {
        width: 100%;
        height: 100%;
        object-fit: cover;
    }

    @media (max-width: 768px) {
        width: 100%;
        height: 322px;
    }

    @media (max-width: 425px) {
        height: auto;
    }
`;

const TextBox = styled.div`
    padding: 35px 0px;
    width: 50%;
    display: flex;
    flex-direction: column;
    gap: 22px;

    .spa {
        font-size: 12px;
        font-weight: 500;
        color: #3D4160;
    }

    h2 {
        font-size: 37.7px;
        font-weight: 400;
        color: #3D4160;
        line-height: 42px;
        width: 80%;
    }

    p {
        font-size: 16px;
        font-weight: 300;
        line-height: 22px;
        color: #3D4160;
    }

    @media (max-width: 1024px) {
        gap: 20px;

        .spa {
            font-size: 12px;
        }
        h2 {
            font-size: 26px;
            line-height: 29.17px;
            width: 100%;
        }
        p {
            font-size: 14px;
            line-height: 19.7px;
        }
    }

    @media (max-width: 768px) {
        padding: 0px;
        width: 100%;
    }
`;

const SectionFour = ({data}) => {
    console.log("section four",data)
    const primaryTag = data.featuredInsight.PrimaryTag.title
    const title = data.featuredInsight.title
    const buttonLabel= data.featuredInsight.readMore.label
    const coverImage= data.featuredInsight.bannerImage.asset.url
    const shortText= data.featuredInsight.shortText
    return (
        <Root>
            <FlexContainer>
                <ImgWrap>
                    <img src={coverImage} alt="" />
                </ImgWrap>

                <TextBox>
                    <span className="spa">Egestas ac hac quam laoreet.</span>
                    <h2>{title}</h2>
                    <p>{shortText}</p>
                    <ReadMore label={buttonLabel} color="#306CFE" />
                </TextBox>
            </FlexContainer>
        </Root>
    )
}

export default SectionFour;