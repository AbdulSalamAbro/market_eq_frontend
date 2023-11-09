"use client"
import { Navbar } from "@/stories/molecules";
import Link from "next/link";
import styled from "styled-components";

import { socilLinks, servicesLinks, links } from "./data";
import { Logo } from "@/stories/atoms";

const Root = styled.footer`

    background-color: #0E204C;
    color: #FFFFFF;

`;

const FooterTop = styled.div`
    max-width: 1440px;
    margin: 0 auto;
    display: flex;
    flex-direction: column;

    header {
        border-bottom: 1px solid rgba(255, 255, 255, 0.1);
        height: 65px;

        nav {    
            a {
                span {
                    transition: all 0.3s ease-in-out;
                    &:hover {
                        text-decoration: underline;
                    }
                }
            }
        }
    }

    .mbl-head2 {
        display: none;
    }

    @media (max-width: 550px) {
        header {
            height: 59px;
            display: none;
        }

        .mbl-head2 {
            height: 59px;
            padding: 0 20px;
            font-size: 14px;
            font-weight: 400;
            line-height: 19px;
            color: #FFFFFF;
            border-bottom: 1px solid rgba(255, 255, 255, 0.1);
            
            display: flex;
            align-items: center;

        }
    }
`;

const FooterBottom = styled.div`
    padding: 50px ;
    display: flex;
    flex-direction: column;
    gap: 50px;

    .in-row {
        display: flex;
        flex-direction: row;
        justify-content: space-between;
    }

    .ser-links {
        display: flex;
        gap: 30px;
        
        a {
            width: fit-content;
            transition: all 0.3s ease-in-out;

            &:hover {
                text-decoration: underline;
            }
        }
    }

    .soc-links {
        display: flex;
        flex-direction: row;
        gap: 16px;

        a {
            font-size: 14px;
            font-weight: 600;
            line-height: 19.07px;
            background: rgba(61, 65, 96, 0.1);
            border-radius: 8.3px;
        }
    }

    .soc-txt {
        display: none;
    }

    .mbl-flex {
        display: none;
    }

    .mbl-logo {
        display: none;
    }

    @media (max-width: 1024px) {
        padding: 40px;
        gap : 79px;

        .soc-txt {
            display: block;
            font-size: 12px;
            font-weight: 400;
            line-height: 16.43px;
            color: rgba(255, 255, 255, 0.6);
            width: 80%;
            margin-bottom: 20px;
        }
    }

    @media (max-width: 768px) {
        padding: 40px 20px;
        gap: 79px;
        
        .ser-links {
            display: grid;
            grid-template-columns: repeat(2, 1fr);
            gap: 20px;
        }
    }

    @media (max-width: 550px) {
        .ser-links {
            grid-template-columns: repeat(1, 1fr);
            gap: 50px;
        }
        .in-row {
            flex-direction: column;
            gap: 50px;
        }
        .mbl-flex {
            display: flex;
            flex-direction: row;
            gap: 50px;
            font-size: 14px;
            font-weight: 500;
            line-height: 19px;
            color: #FFFFFF;
            margin-top: 20px;
        }
        .mbl-logo {
            display: block;
            margin-bottom: 20px;
        }
    }
`;

const TextWrapper = styled.div`

    h2 {
        margin-bottom: 10px;
        color: #FFFFFF;
        font-size: 14px;
        font-weight: 400;
    }

    p {
        font-size: 12px;
        color: rgba(255, 255, 255, 0.6);
        font-weight: 400;
        line-height: 16.43px;
    }
`;

const FooterText = () => (
    <>
        <TextWrapper>
            <h2>© 2022 Marketeq. All Rights Reserved.</h2>
            <p>Eget tortor, commodo massa faucibus cursus. Mi orci neque, lectus sagittis. Phasellus nec viverra facilisis nam senectus. Aenean pulvinar quis magnis magna praesent mattis tempor. At eu, eu volutpat neque. Urna risus, sed habitant commodo imperdiet nulla nec. Vitae malesuada mi sed vitae mattis ultrices scelerisque eu ut. Eget vel vitae diam quis. In sed justo dolor in sagittis. Egestas mattis id in neque, porttitor. Sem mauris sed eu ornare nibh. Pretium augue enim euismod eget amet, blandit lorem molestie neque. Eget tortor, commodo massa faucibus cursus. Mi orci neque, lectus sagittis. Phasellus nec viverra facilisis nam senectus. Aenean pulvinar quis magnis magna praesent mattis tempor. At eu, eu volutpat neque. Urna risus, sed habitant commodo imperdiet nulla nec. Vitae malesuada mi sed vitae mattis ultrices scelerisque eu ut. Eget vel vitae diam quis. In sed justo dolor in sagittis. Egestas mattis id in neque, porttitor. Sem mauris sed eu ornare nibh. Pretium augue enim euismod eget amet, blandit lorem molestie neque.</p>
            {/* mbl 550px only*/}
            <div className="mbl-flex">
                <span>Terms of Use</span>
                <span>Privacy</span>
                <span>Cookies</span>
            </div>
        </TextWrapper>
    </>
)

const IconWrapp = styled.div`

    padding: 6.64px;
    background-color: hsla(0,0%,100%,.06);
    opacity: 0.9;
    border-radius: 8.3px;
    display: flex;
    align-items: center;
    justify-content: center;

    img {
        width: 16px;
        height: 16px;
    }
`;

const FooterContent = () => (
    <FooterBottom className="in-foot">
        <div className="in-row">
            <div>
                <div className="mbl-logo">
                    <Logo isFooter={true}/>
                </div>
                <p className="soc-txt">Marketeq specializes in digital growth strategy and conversion focused web design.</p>
                <div className="soc-links">
                    {
                        socilLinks.links.map((link) => (
                            <Link
                                href={link.href}
                                key={link.label}
                                className="link"
                            >
                                <IconWrapp>
                                    <img src={link.icon.src} alt={link.label} />
                                </IconWrapp>
                            </Link>
                        ))
                    }
                </div>
            </div>

            <div className="ser-links">
                {
                    servicesLinks.map((link) => (
                        <>
                        <Link
                            key={link.label}
                            aeria-label={link.label}
                            className="link"
                            href={link.href}
                        >
                            {link.label}
                        </Link>
                        </>
                    ))
                }
            </div>
        </div>
        <FooterText />
    </FooterBottom>
)

const MainFooter = () => (
    <Root>
        <FooterTop className="in-foot">
            <Navbar
                links={links.links}
                isFooter={true}
            />
            <div className="mbl-head2">888.456.5609</div>
            <FooterContent />
        </FooterTop>
    </Root>
)
export default MainFooter;