import styled from "styled-components"
import { ImageCard, FeatureWrapper } from "./featureImageSection";
import { FC } from "react";

const Flex = styled.div`

    display: flex;
    justify-content: space-between;
    flex-direction: row;
    gap: 20px;
    
    @media (max-width: 768px) {
        flex-direction: column;
    }
`;

// interface cardDataType {
//     id: number;
//     title: string;
//     image: string;
//     link: string;
//     imgHeading: string;
// }



const FeatureCardSection: FC<any> = ({ cardData }) => {
    return (
        <FeatureWrapper smallCard={true}>
            <Flex className="flex">
                {cardData?.map((card) => (
                    <ImageCard
                        key={card._id}
                        buttonLabel={card.readMore.label}
                        imgSrc={card.bannerImage.asset.url}
                        tag={card.PrimaryTag.title}
                        Title={card.title}
                        smallCrad={true}
                    />
                ))}
            </Flex>
        </FeatureWrapper>
    );
};

export default FeatureCardSection


