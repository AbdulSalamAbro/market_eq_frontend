'use client'
import styled from "styled-components";
import PageLayer from "../pageLayer";
import { industryCardArray } from "./data";
import { InsightCard } from "@/stories/cards";
import { useState } from "react";

const Root = styled.section`

`;



const TextContainer = styled.div`


color: #3D4160;

    
    h2{
        font-size: 53px;
        font-weight: 700;
        text-align: center;
    }
    @media (max-width: 1024px) {
        h2{
            color: #3D4160;
            font-size: 26px;
            font-weight: 700;
            text-align: left;
        }
    }
    @media (max-width: 768px) {
        h2{
            color: #3D4160;
            font-size: 26px;
            font-weight: 700;
            text-align: left;
        }
    }
`;

const GridContainer = styled.div`
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    grid-column-gap: 20px;
    grid-row-gap: 50px;
    margin-top: 50px;
    margin-bottom: 100px;

    @media (max-width: 1024px) {
        grid-gap: 30px;
        margin-top: 30px;  
        margin-bottom: 40px;
        grid-template-columns: repeat(2, 1fr);
    }

    @media (max-width: 768px) {
        grid-template-columns: repeat(1, 1fr);
    }
`;

// declear a usestate hook to limit the number of cards to be displayed 
// type Limit = number | undefined;
// const [limit, setLimit] = useState<Limit>(6);

const TopIndustriesSection = ({data}) => {

    console.log("ffff",data)

    const [limit, setLimit] = useState(6); // Initial limit

    const handleSeeMoreClick = () => {
        // Increase the limit by 6 to load the next 6 cards
        setLimit(prevLimit => prevLimit + 6);
    };
    return (

        <Root id="Insights">
            <PageLayer padding={false} bg={false}>
                <div className="pt-10 pb-[30px] px-5 desktop:p-10 xlTablet:p-[100px]">
                    <TextContainer>
                        <h2>{data.title}</h2>
                    </TextContainer>
                    <GridContainer>
                        {
                   
                          
                            data?.InsightCard?.slice(0, limit).map((card, index) => (
                                <InsightCard
                                key={card._id}
                                title={card.title}
                                image={{
                                    height: 2880,
                                    src: card.bannerImage.asset.url,
                                    width: 1920,
                                  }}
                                    link={card.link}
                                    imgHeading={card.imgHeading} 
                                    description={card.content}
                                    underlineHover
                                />
                            ))
                        }
                    </GridContainer>
                    <div className="flex justify-center items-center">
                        <button onClick={handleSeeMoreClick}  className="px-[22px] py-3 xlTablet:px-[30px] xlTablet:py-5 border-2 border-[#3D416012] text-dark text-xs xlTablet:text-sm">See More Insights</button>
                    </div>
                </div>
            </PageLayer>
        </Root>
    )
}

export default TopIndustriesSection;