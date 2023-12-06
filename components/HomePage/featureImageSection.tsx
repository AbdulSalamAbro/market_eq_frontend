import styled from "styled-components";
import { ReadMore } from "@/stories/cards";
import { illusion } from "@/stories/assets/pictures";
import { FC } from "react";

interface StyleProps {
    smallCard?: boolean;
}

export const FeatureWrapper = styled.section<StyleProps>`
    padding: ${({ smallCard }) => smallCard ? "0px 100px 100px 100px" : "0px 100px 20px 100px"};
    position: relative;
    background-color: #0E204C;

    @media (max-width: 1024px) {
        padding: ${({ smallCard }) => smallCard ? "0px 40px 40px 40px" : "0px 40px 20px 40px"};
    }

    @media (max-width: 768px) {
        padding: ${({ smallCard }) => smallCard ? "0px 20px 40px 20px" : "40px 20px 40px 20px"};
    }
`;

const ImagWrapper = styled.div<StyleProps>`
    position: relative;
    width: 100%;
    min-height: 566px;
    display: flex;

    img {
        width: 100%;
        height: 100%;
        object-fit: cover;
        position: absolute;
    }

    @media (max-width: 768px) {
        height: ${({ smallCard }) => smallCard ? "417px" : "385px"};
    }

`;
const AbsoluteContainer = styled.div`
    position: relative;

    display: flex;
    flex-direction: column;
    justify-content: space-between;
    padding: 50px;
    color: #fff;

    .tag {
        font-size: 14px;
        font-weight: 500;
        text-transform: capitalize;
    }

    @media (max-width: 1024px) {
        padding: 20px;
    }
`;

const TextContainer = styled.div<StyleProps>`
    margin-top: 50px;
   h1 {
        color: #fff;
        font-size: ${({ smallCard }) => smallCard ? "32px" : "42px"};
        font-style: normal;
        font-weight: 400;
        margin-bottom: 50px;
        width: 80%;
    }

    @media (max-width: 1024px) {
        h1 {
            font-size: 22px;
            margin-bottom: 30px;
            width: 55%;
        }
    }

    @media (max-width: 768px) {
        h1 {
            width: 80%;
        }
    }

    @media (max-width: 425px) {
        h1 {
            width: 100%;
        }
    }
`;

type FeatureImagSectionProps = {
    imgSrc?: string;
    Title?: string;
    tag?: string;
    smallCrad?: boolean;
    buttonLabel: string;
}

export const ImageCard: FC<FeatureImagSectionProps> = ({
    imgSrc,
    Title,
    tag,
    smallCrad,
    buttonLabel
}) => {
    return (
        <ImagWrapper 
            smallCard={smallCrad}
            aria-label="image card"
        >
            <img src={imgSrc} alt="stock market" />
            <AbsoluteContainer>
                <span className="tag">{tag}</span>
                <TextContainer smallCard={smallCrad}>
                    <h1>{Title}</h1>
                    <ReadMore 
                    label={buttonLabel}
                        chnageColor={true}
                        color = "#fff"
                    />
                </TextContainer>
            </AbsoluteContainer>
        </ImagWrapper>
    )
}



const FeatureImagSection: FC<any> = ({data}) => {

   const title = data.title
   const imgSrc = data.bannerImage.asset.url
   const primaryTag = data.PrimaryTag.title
   const readMoreLabel =  data.readMore.label
   
    return (
        <FeatureWrapper>
            <ImageCard Title={title} buttonLabel={readMoreLabel} imgSrc={imgSrc} tag={primaryTag}/>
        </FeatureWrapper>
    )
}

export default FeatureImagSection;

ImageCard.defaultProps = {
    imgSrc: illusion.src,
    tag: "Artificial Intelligence",
    Title: "How to optimize your pages to get more traffic on mobile devices",
    smallCrad: false
}