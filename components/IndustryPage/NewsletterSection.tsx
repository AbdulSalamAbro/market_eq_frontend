import styled from "styled-components";
import PageLayer from "../pageLayer";
import { Arrow } from "./data";

const Root = styled.section`
`;

const GridContainer = styled.div`
    background:  linear-gradient(0deg, #0E204C 0%, #0E204C 100%);
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    grid-gap: 50px;
    margin: 0 100px;
    padding: 50px;
    @media (max-width: 1024px) {
        padding:20px;
        margin: 0 40px;
        grid-gap: 40px;
    }
    @media (max-width: 768px) {
         grid-template-columns: repeat(1, 1fr);
         margin: 0 20px;
    }
`;

const TextContainer = styled.div`
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: flex-start;
        gap: 7px;
        flex: 1 0 0;
        align-self: stretch;
    h3 {
        font-size: 38px;
        font-weight: 700;
        line-height: 44.346px;
    }
    p {
        color: #FFF;
        font-size: 20px;
        font-weight: 300;
    }
    @media (max-width: 1024px) {
    gap: 5.323px;

        h3 {
            font-size: 24px;
            line-height: 28px;
        }
        p {
            font-size: 15px;
        }
    }

  
    @media (max-width: 768px) {
 
        p {
            font-size: 15px;
            line-height: 20.21px;
        }
        h3 {
            font-size: 24px;
            line-height: 28px;
        }
    }
`;



const EmailInputContainer = styled.div`
    height: 78px;
    display: flex;
    padding: 20px 14px 20px 30px;
    justify-content: space-between;
    align-items: center;
    flex: 1 0 0;
    align-self: stretch;
    background: rgba(255, 255, 255, 0.10);
    /* input filed style */
    input {
        width: 100%;
        height: 100%;
        border: none;
        outline: none;
        background: transparent;
        font-size: 20px;
        line-height: 27px;
        color: rgba(255, 255, 255, 0.50);
    }
    &::placeholder {
        color: rgba(255, 255, 255, 0.50);
        font-size: 20px;
    }
    /* button style */
    button {
        padding: 12px 24px;
        background: 'transparent';
        border: 2px solid rgba(255, 255, 255, 0.20);
        display: flex;
        align-items: center;
        gap: 13px;
        span{
            color: #fff;
            font-size: 16px;
            line-height: 22px;
            text-transform: capitalize;
        }
        svg{
            width: 15.61px;
        }
    }
    @media (max-width: 1024px) {
        height: 100%;
        flex-direction:column ;
        gap: 20px;
        padding: 20px;
        button{
            padding: 8.646px  19px;
            gap: 9.885px;
            width: 100%;
            display: flex;
            justify-content: center;
            align-items: center;
            span{
                font-size: 12px;
                line-height: 16px;
            }

            svg{
                width: 11.87px;
            }
        }
        input{
            
            font-size: 15px;
            line-height: 20px;
        }
     
    }
`;



const NewsletterSection = ({data}) => (
    <Root id="newsletter">
        <PageLayer padding={false} bg={false}>

            <GridContainer>

                <TextContainer>
                    <h3>{data?.title}</h3>
                    <p>{data?.description}</p>
                </TextContainer>
                <EmailInputContainer>
                    <input type="email" placeholder={data.newsletterForm.placeholder} />
                    <button><span>{data.newsletterForm.submitButton}</span><Arrow /></button>
                </EmailInputContainer>

            </GridContainer>

        </PageLayer>
    </Root>
)

export default NewsletterSection;