import styled from "styled-components";
import { PageRoot } from "../pageLayer";
import Image, { StaticImageData } from "next/image";
import { boss } from "@/stories/assets/pictures";
import commas from "@/stories/assets/icons/comma.svg";
import { FC } from "react";
import { ReadMore } from "@/stories/cards";

const MainContainer = styled.div`
    position: relative;
`;

const ImgWrapper = styled.div`
    position: relative;
    width: 100%;
    display: flex;

    img {
        width: 100%;
        height: 100%;
        object-fit: cover;
        position: absolute;
    }

`;
type LayerProps = {
    variation?: "one" | "two";
};

const OverlayContainer = styled.div<LayerProps>`
    position: absolute;
    width: 100%;
    height: 100%;
    top: 0;
    left: 0;
    background: ${(props) =>
        props.variation === "two"
            ? "rgba(0, 0, 0, 0.4)"
            : "rgba(14, 32, 76, 0.2)"
    };
`;

type StyleProps = {
    variation?: "one" | "two";
};

const Absolute = styled.div<StyleProps>`
    padding: 100px;
    position: relative;
    max-width: ${(props) => (props.variation === "one" ? "742px" : "100%")};
    height: 100%;

    display: flex;
    flex-direction: column;
    gap: 40px;
    justify-content: center;

    @media (max-width : 1024px) {
        padding : 40px;
    }
    
    @media (max-width : 768px) {
        padding : 40px 20px;
    }
`;

const ButtonWrapper = styled.div`
    padding: 20px 30px;
    max-width: fit-content;
    cursor: pointer;

    display: flex;
    flex-direction: row;
    gap: 25px;
    align-items: center;
  
    button {
        font-size: 14px;
        font-weight: 300;
        line-height: 19px;
        color: #fff;
    }

    @media (max-width : 1024px) {
        padding : 15px 22px;
        gap: 18px;
    }
`;
const Arr = () => (
    <svg
        width="7"
        height="13"
        viewBox="0 0 7 13"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
    >
        <path
            d="M0.116699 12.5176L6.1167 6.51758L0.116699 0.517578V12.5176Z"
            fill="white"
        />
    </svg>
);
const FullStoryButton = ({ onClick }) => {
    return (
        <ButtonWrapper className="bg-white/20 ">
            <button onClick={onClick}>Read Full Story</button>
            <Arr />
        </ButtonWrapper>
    );
};

type Props = {
    description?: string;
    name?: string;
    position?: string;
    image?: StaticImageData;
    onClick?: () => void;
    variation?: "one" | "two";
    leadName?: string;
};

const VariTwoWrapp = styled.div`
    display: flex;
    flex-direction: row;
    gap: 31px;

    .imgWrap {
        width: 86px;
        height: 72px;
        margin-right: 31px;
        position: relative;
    }

    .var-two-txt {
        max-width: 656px;

        p {
            margin-bottom: 28px;
            font-size: 25px;
            font-weight: 400;
            line-height: 34px;
        }

        h4 {
            color: white;
            font-size: 25px;
            font-weight: 700;
            margin-bottom: 58px;
        }
    }

    @media (max-width : 1024px) {
        .var-two-txt {
            p {
                font-size: 19px;
                line-height: 26px;
            }
            h4 {
                font-size: 19px;
                line-height: 25px;
                margin-bottom: 40px;
            }
        }
    }

    @media (max-width : 768px) {
        flex-direction: column;
        gap: 40px;

        .imgWrap {
            margin-right: 0;
        }
    }
`;

const VariOneWrapp = styled.div`
    display: flex;
    flex-direction: column;
    gap: 40px;
    width: 742px;

    .img-one {
        width: 111px;
        height: auto;
        position: relative;
    }

    p {
        font-size: 25px;
        font-weight: 300;
        line-height: 34px;
    }
   
    .text-b {
        h2 {
            font-size: 25px;
            font-weight: 500;
            line-height: 34px;
        }
        span {
            font-size: 20px;
            font-weight: 300;
            line-height: 27px;
        }
    }

    @media (max-width : 1024px) {
        gap: 30px;
        width: 100%;

        .img-one {
            width: 84px;
            height: 70px;
        }
        
        p {
            font-size: 18px;
            line-height: 24.54px;
        }
        .text-b {
            h2 {
                font-size: 18px;
                line-height: 24.5px;
            }
            span {
                font-size: 15px;
                line-height: 20.5px;
            }
        }
    }

`;

const AboutImageSection: FC<Props> = ({
    description,
    name,
    position,
    image,
    onClick,
    variation,
    leadName,
}) => (
    <PageRoot>
        <MainContainer>
            <ImgWrapper className="imgwrapper">
                <Image src={image} alt="boss" />
                <OverlayContainer variation={variation}/>
                    <Absolute variation={variation}>
                        {variation === "one" && (
                            <VariOneWrapp>
                                <img className="img-one" src={commas.src} />
                                <p>{description}</p>
                                <div className="text-b">
                                    <h2>{name}</h2>
                                    <span>{position}</span>
                                </div>
                                <FullStoryButton onClick={onClick} />
                            </VariOneWrapp>
                        )}
                        {variation === "two" && (
                            <VariTwoWrapp>
                                <img className="imgWrap" src={commas.src} />
                                <div className="var-two-txt">
                                    <p>{description}</p>
                                    <h4>{leadName}</h4>

                                    <ReadMore  lable="Join The Team" chnageColor/>
                                </div>
                            </VariTwoWrapp>
                        )}
                    </Absolute>
            </ImgWrapper>
        </MainContainer>
    </PageRoot>
);

AboutImageSection.defaultProps = {
    description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed at mi sodales, congue dui a, pretium est. Ut vitae lacus vel erat vulputate tempor. Proin rhoncus nulla ac diam aliquam, a rutrum massa faucibus. Praesent vulputate imperdiet turpis eu euismod.",
    name: "Christopher Torres",
    position: "Global Chairman & CEO",
    image: boss,
    onClick: () => { },
    variation: "one",
    leadName: "Lorem Ipsum, Team Leader",
};

// used in 4 places thi section
export default AboutImageSection;
