import { FC, useRef } from "react";
import Image, { StaticImageData } from "next/image";

import { Wrapper, ImgWrapper, TextWrapper, AbsoluteWrapper, OverlayWrapper, ReadMoreWrapper } from "./style";

import { Arrow } from "./Arrow";
import useHover from "@/hooks/useHover";

type ReadMoreProps = {
    label?: string;
    color?: string;
    chnageColor?: boolean;
}

export const ReadMore: FC<ReadMoreProps> = ({ label = "Read More", color, chnageColor }) => {
    const ref = useRef(null);
    const isHovering = useHover(ref);

    const hoverColor = (isHovering && !chnageColor) ? "#306CFE" : color;

    return (
        <ReadMoreWrapper as="button" color={hoverColor} ref={ref}>
            <span>{label}</span>
            <Arrow color={hoverColor} />
        </ReadMoreWrapper>
    )
}
ReadMore.defaultProps = {
    color: "#fff",
    lable: "Read More",
    chnageColor: false
}

export type InsightCardProps = {
    title?: string;
    key?: string;
    description?: string;
    image?: StaticImageData;
    link?: string;
    imgHeading?: string;
    hideDescription?: boolean;
    readMore?: boolean;
    readMoreColor?: string;
    underlineHover ?: boolean;
};

export const InsightCard: FC<InsightCardProps> = ({
    title,
    key,
    description,
    image,
    link,
    imgHeading = "Artificial Intelligence",
    hideDescription,
    readMore,
    readMoreColor,
    underlineHover
}) => {

    return (
        <Wrapper id="in-card"
            aria-label="insight card"
            aeia-roledescription="insight card"
        >
            <ImgWrapper>
                <Image src={image} alt={imgHeading} />
                <OverlayWrapper />
                <AbsoluteWrapper>
                    <span>{imgHeading}</span>
                </AbsoluteWrapper>
            </ImgWrapper>
            <TextWrapper 
                margin={readMoreColor} 
                underLine={underlineHover}
                readMore={readMore}
            >
                <h3>{title}</h3>
                {hideDescription ? null : (
                    <p>{description}</p>
                )}
                {readMore ? <ReadMore color={readMoreColor}/> : null}
            </TextWrapper>
        </Wrapper>
    );
};

InsightCard.defaultProps = {
    title: "Integer maecenas commodo fermentum",
    description: "Lorem ipsum dolor sit amet consectetur adipiscing elit, urna consequat felis vehicula",
    link: "#",
    imgHeading: "Artificial Intelligence",
    hideDescription: false,
    readMore: false,
    readMoreColor: "#fff",
    underlineHover: true
}