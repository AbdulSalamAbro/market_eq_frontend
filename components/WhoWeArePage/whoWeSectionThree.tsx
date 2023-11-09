import styled from "styled-components";
import { PageRoot } from "../pageLayer";
import { FC } from "react";
import { Book, valuesArray } from "./data";

const Root = styled.section`
    background-color: #F5F5F5;
`;

const TextHeader = styled.div`
    h1 {
        color: #3d4160;
        font-weight: 800;
        font-size: 52px;
        line-height: 70px;
        margin-bottom: 56px;
    }

    p {
        color: #3d4160;
        font-weight: 600;
        font-size: 40px;
        line-height: 50px;
        margin-bottom: 56px;
    }

    @media (max-width: 1024px) {
        h1 {
            font-size: 32px;
            line-height: 43px;
            margin-bottom: 20px;
            font-weight: 600;
        }

        p {
            font-size: 32px;
            line-height: 38px;
            font-weight: 400;
            margin-bottom: 40px;
        }
    }
`;

const Grid = styled.div`
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    column-gap: 50px;
    row-gap: 46px;

    @media (max-width: 1024px) {
        grid-template-columns: repeat(3, 1fr);
        column-gap: 40px;
        row-gap: 40px;
    }

    @media (max-width: 768px) {
        grid-template-columns: repeat(1, 1fr);
    }
`;

const CardWrapper = styled.div`
    display: flex;
    flex-direction: column;
`;

const Text = styled.div`
    margin-top: 19px;

    h3 {
        color : #3D4160;
        font-size: 25px;
        line-height: 34px;
        font-weight: 600;
        margin-bottom: 10px;
    }
    p {
        color :rgba(61, 65, 96, 1);
        font-size: 25px;
        line-height: 31px;
        font-weight: 300;
    }

    @media (max-width: 1024px) {
        margin-top: 12px;
        
        h3 {
            font-size : 18px;
            line-height: 24px;
            margin-bottom: 8px;
        }
        p {
            font-size : 15px;
            line-height: 23px;
        }
    }
`;

type ValueCardProps = {
    title: string;
    description: string;
};

const ValueCrad: FC<ValueCardProps> = ({ title, description }) => (
    <CardWrapper
        aria-label="value card"
        aria-roledescription="value card"
    >
        <Book />
        <Text>
            <h3>{title}</h3>
            <p>{description}</p>
        </Text>
    </CardWrapper>
);

type WhoWeSectionThreeProps = {
    title?: string;
    description?: string;
    id ?: string;
};
// used two times
const WhoWeSectionThree: FC<WhoWeSectionThreeProps> = ({ title, description , id }) => (
    <Root id={id}>
        <PageRoot padding>
            <TextHeader>
                {title && <h1>{title}</h1>}
                {description && <p>{description}</p>}
            </TextHeader>
            <Grid>
                {valuesArray.map((value, index) => (
                    <ValueCrad
                        key={index}
                        title={value.title}
                        description={value.desc}
                    />
                ))}
            </Grid>
        </PageRoot>
    </Root>
);

WhoWeSectionThree.defaultProps = {
    title: "Our Values",
    description:
        "Our Values form the bedrock of our culture and define how we work together to serve out stakeholders.",
};

export default WhoWeSectionThree;
