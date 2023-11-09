import React, { FC } from "react";
import styled from "styled-components";

const CrossimgWrapper = styled.div`
    position: relative;
    width: 100%;
    min-height: 542px;
    display: flex;

    img {
        width: 100%;
        height: 100%;
        object-fit: cover;
        position: absolute;
    }

    @media screen and (max-width: 1024px) {
        height: 402px;
    }
`;

const style = `
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
`

const OverLay = styled.div`
    ${style}
    background:linear-gradient(0deg, rgba(14, 32, 76, 0.70) 0%, rgba(14, 32, 76, 0.70) 100%);
    opacity: 0.5;
`;

const ImgTxtContainer = styled.div`
    position: relative;
    width: 100%;
    
    display: flex;
    flex-direction: column;
    justify-content: center;
    color: white;
    padding: 100px;

    @media screen and (max-width: 1024px) {
        padding: 0 40px 0 40px;
    }

    @media screen and (max-width: 768px) {
        padding: 0 20px 20px 20px;
        justify-content: flex-end;
    }
`;

type CrossImageCardProps = {
    imgUrl: string;
    children: React.ReactNode;
    overLay?: boolean;
    // style types
}

const CrossImageCard: FC<CrossImageCardProps> = ({ imgUrl, children, overLay }) => (
    <>
        <CrossimgWrapper
            aeria-label="cross image card"
        >
            <img src={imgUrl} alt="cross image" />
            {
                overLay && <OverLay />
            }
            <ImgTxtContainer>
                {children}
            </ImgTxtContainer>
        </CrossimgWrapper>
    </>
)

export default CrossImageCard;