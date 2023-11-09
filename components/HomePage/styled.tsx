import styled from "styled-components";

const CardWrapper = styled.section`

    display: flex;
    flex-direction: row;
    gap: 20px;
    padding: 0px 100px 100px 100px;
    background-color: #0E204C;

    #in-card{
        h3  {
            color: #fff !important;
            width: 98%;
        }
    }

    @media (max-width: 1024px) {
        padding: 0px 40px 40px 40px;
        justify-content: center;
    }

    @media (max-width: 768px) {
        padding: 0px 20px 20px 20px;
        flex-direction: column;
        gap: 30px;
        align-items: center;

        #in-card{
            max-width: 100%;
        }
    }
`;

const HeroSectionWrap = styled.section`
    max-width: 1440px;
    margin: 0 auto;
    font-family: Noto Sans;
    height: 704px;

    #fist-sec{
        padding-bottom: 100px;
    }

    @media (max-width: 1024px) {
        #fist-sec{
            width: 100%;
        }
    }

    @media (max-width: 768px) {
        height: 700px;

        #fist-sec{
            padding-left: 20px !important;
            padding-right: 20px !important;
            padding-bottom: 40px;
        }
    }
    
`;

export { CardWrapper, HeroSectionWrap }