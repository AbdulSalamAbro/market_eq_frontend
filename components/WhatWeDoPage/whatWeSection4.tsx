import styled from "styled-components";
import PageLayer from "../pageLayer";
import {FC} from "react";
import Image, {StaticImageData} from "next/image";
import Link from "next/link";
import { servicCardArray } from "./data";

const Root = styled.section`
`;

const TextContainer = styled.div`

    color : white;

    h1 {
        font-size: 36px;
        font-weight: 600;
        margin-bottom: 10px;
    }
    p {
        font-size: 16px;
        font-weight: 300;
        line-height: 22px;
        width: 60%;
    }

    @media (max-width: 1024px) {
        p {
            width: 95%;
            font-size: 14px;
            line-height: 19px;
        }
        h1 {
            font-size: 26px;
            margin-bottom: 12px;
        }
    }
`;

const GridContainer = styled.div`
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    grid-gap: 20px;
    margin-top: 50px;

    @media (max-width: 1024px) {
        grid-gap: 15px;
        margin-top: 30px;            
    }

    @media (max-width: 768px) {
        grid-template-columns: repeat(1, 1fr);
    }
`;

const ServiceCardContainer = styled.div`

    position: relative;
    height: 252px;
    width: 100%;

    img {
        height: 100%;
        width: 100%;
        object-fit: cover;
    }

    @media (max-width: 1024px) {
        height: 150px;
    }

    @media (max-width: 768px) {
        height: 252px;
    }
`;

const TextOverlay = styled.div`
    position: absolute;
    bottom: 0;
    left: 0;

    padding: 25px;
    width: 100%;
    height: 100%;
    background: linear-gradient(223.8deg, rgba(14, 32, 76, 0.71) 23.83%, rgba(14, 32, 76, 0) 100%);

    h3 {
        color: white;
        font-size: 14px;
        font-weight: 500;
    }
`;

type ServiceCardProps = {
    link : string;
    title : string;
    Img : StaticImageData;
}

const ServiceCard:FC<ServiceCardProps> = ({link, title, Img}) => (
        <Link 
            href={link}
            aeria-label={title}
            aria-current="page"
        >
            <ServiceCardContainer>
                <Image src={Img} alt="service card image" />
                <TextOverlay>
                    <h3>{title}</h3>
                </TextOverlay>
            </ServiceCardContainer>
        </Link>
)

const WhatWeSectionFour = () => (
    <Root 
        id="services"
        aria-label="What we do section four"
    >
        <PageLayer padding bg>
            <TextContainer>
                <h1>Explore our Services</h1>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. In eleifend accumsan leo, ac ultricies orci porta a. Vivamus mi purus, ultricies et magna nec, blandit ultricies lectus.</p>
            </TextContainer>
            <GridContainer>
                {
                    servicCardArray.map((item, index) => (
                        <ServiceCard
                            key={index}
                            link={item.link}
                            title={item.title}
                            Img={item.Img}
                        />
                    ))
                }
            </GridContainer>
        </PageLayer>
    </Root>
)

export default WhatWeSectionFour;