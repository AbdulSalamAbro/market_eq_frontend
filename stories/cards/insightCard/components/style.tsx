import styled from "styled-components";

const Wrapper = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  gap: 14px;
  max-width: 400px;

  @media (max-width: 1024px) {
    gap: 15px;
    max-width: 100%;
  }

`;

const ImgWrapper = styled.div`
  position: relative;
  width: 100%;
  height: 383px;
  overflow: hidden;

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }

  @media (max-width: 1024px) {
    height: 216px;
  }

  @media (max-width: 768px) {
    height: 291px;
  }
`;

type StyleProps = {
  margin?: string;
  underLine?: boolean;
  readMore?: boolean;
}

const TextWrapper = styled.div<StyleProps>`
  display: flex;
  flex-direction: column;
  gap: 4px;

  h3 {
    color: #3d4160;
    font-size: 18px;
    font-style: normal;
    font-weight: 500;
    width : 94%;
    transition: all 0.3s ease-in-out;

  ${({ readMore }) => readMore ? `
    margin-bottom : 11px;
  ` : null}
    
  &:hover {
    cursor: pointer;
    text-decoration: ${({ underLine }) => underLine ? "underline" : "none"};
  }
  }

  p {
    color: rgba(61, 65, 96, 0.6);
    font-size: 14px;
    font-weight: 400; 
    margin-bottom : ${({ margin }) => margin ? "16px" : "0px"};
  }
  
  @media (max-width: 1024px) {
    gap: 3px;

    h3 {
      font-size: 14px;
      width : 100%;
    }
    
    p {
      font-size: 12px;
      margin-bottom : ${({ margin }) => margin ? "4px" : "0px"};
    }
  }
`;

const AbsoluteWrapper = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  padding: 25px;

  span {
    color: #fff;
    font-size: 14px;
    font-style: normal;
    font-weight: 500;
    line-height: 32px;
    text-transform: capitalize;
  }

  @media (max-width: 1024px) {
 padding: 20px;
    span {
      font-size: 12px;
      line-height: 16px;
    }

  }
`;

const OverlayWrapper = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  opacity: 0.4;
  background: linear-gradient(
      0deg,
      rgba(0, 0, 0, 0.1) 0%,
      rgba(0, 0, 0, 0.1) 100%
    ),
    #0e204c;
`;
type ReadMoreProps = {
  color?: string;
}

const ReadMoreWrapper = styled.div<ReadMoreProps>`
    display: flex;
    flex-direction: row;
    gap : 13px;
    align-items: center;
    cursor: pointer;

    span {
        color: ${({ color }) => color ? color : "#fff"};
        font-size: 16px;
        font-style: normal;
        font-weight: 400;
        transition: all 0.3s ease-in-out;

        &:hover {
            text-decoration: underline;
        }
    }

    svg {
        transition: all 0.3s ease-in-out;
        color: ${({ color }) => color ? color : "#fff"};
    }

    @media (max-width: 1024px) {
        span {
            font-size: 14px;
        }
    }
`;

export { Wrapper, ImgWrapper, TextWrapper, AbsoluteWrapper, OverlayWrapper, ReadMoreWrapper }