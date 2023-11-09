import Image , {StaticImageData} from "next/image";
import React, {FC} from "react";
import styled from "styled-components";

const Root = styled.div`
    position: relative;
    max-width: 1440px;
    margin: 0 auto;
`;

const ImageContainer = styled.div`
    position: relative;
    width: 100%;

    img {
        width: 100%;
        height: 100%;
        object-fit: cover;
        position: absolute;
    }

`;

const Overlay = styled.div`

    position: relative;
    padding: 100px;

    @media (max-width: 1024px) {
        padding: 40px;
    }

    @media (max-width: 768px) {
        padding: 40px 20px;
    }

`;

type RootProps = {
    children: React.ReactNode;
    Imag : StaticImageData;
}

const BackgroundContent:FC<RootProps> = ({ children, Imag }) => {
  return (
    <Root className="bg-content">
        <ImageContainer id="bg-img">
            <Image
                src={Imag}
                alt="bg-content"
            />
            <Overlay>
                {children}
            </Overlay>
        </ImageContainer>
    </Root>
  );
}

// // used 9 times only main childer with different props
export default BackgroundContent;