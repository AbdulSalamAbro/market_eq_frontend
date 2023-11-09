import styled from "styled-components";
import PageLayer from "../pageLayer";
import { FC } from "react";
import Link from "next/link";
import { LeftArrow, industriesCardArray } from "./data";

const Root = styled.section`
    color: #3D4160;
`;




const Flex = styled.div<{ gap?: string; direction?: string }>`
    display: flex;
    flex-direction: ${({ direction }) => direction || "column"};
    gap: ${({ gap }) => gap || "20px"};

    @media (max-width: 1024px) {
        gap: ${({ gap }) => gap || "15px"};
    } 
`;

const IndustryCardContainer = styled.div`
    border: 0.753px solid rgba(61, 65, 96, 0.07);
    background:  rgba(61, 65, 96, 0.03);
    height: max-content;
    width: 100%;
    padding: 40px;
    height: auto;
    @media (max-width: 1024px) {
        svg{
            width: 8.287px;
            height: 14.315px;
        } 
    }
    @media (max-width: 768px) {
        padding: 20px;
      
    }
`;


type IndustryCardProps = {
    link: string;
    industry: string;
    desc?: string;
    subIndustry?: Array<string>;
    info?: string;
}

const IndustryCard: FC<IndustryCardProps> = ({ link, industry, subIndustry, desc, info }) => (
    <>
        <IndustryCardContainer>

            {!info ?
                <div className="flex flex-col gap-5 xlTablet:gap-[30px] items-start self-stretch">
                    <div className="flex flex-col gap-[7.534px] items-start self-stretch">
                        <Link href={"#"}>
                        <h3 className="text-xl xlTablet:text-[27.708px]  font-semibold flex items-center underline gap-[7.534px]">{industry}
                            {" "}
                            <LeftArrow />
                        </h3>
                        </Link>
                        <p className="text-xs xlTablet:text-base">{desc}</p>
                    </div>
                    <div className="flex flex-col gap-[32.397px] xlTablet:gap-[43px] items-start self-start">
                        {
                            subIndustry.map((item, index) => (
                                <Link
                                    key={index}
                                    href={link}
                                    aeria-label={item}
                                    aria-current="page"
                                    className="text-[15px] xlTablet:text-xl underline"
                                >
                                    {item}
                                </Link>
                            ))
                        }
                    </div>
                </div>
                :
                <div>
                    <div className="flex flex-col gap-5 xlTablet:gap-[30px] items-start self-stretch">
                        <h3 className="text-xl xlTablet:text-[27.708px] font-semibold flex items-center underline gap-[7.534px]">{industry}
                            {" "}
                            <LeftArrow />
                        </h3>
                        <p className="text-[15px] xlTablet:text-xl">test</p>
                    </div>
                </div>
            }

        </IndustryCardContainer>
    </>
)

const IndustriesSection = ({data}) => {
   

    const subIndustries = data?.Industry.map((item)=>{

       const subindus = item?.buttons?.map((btn)=>(
               btn.text
       ))

     return   {link: item.titleLink,
            industry: item.title,
            desc: item.description,
            subIndustry: subindus
        }
    })

    console.log("theehehheheh",subIndustries)
return (
    <Root id="industries">
        <PageLayer padding={false} bg={false}>
            <div className="py-10 px-5 desktop:p-10 xlTablet:p-[100px]">
                <div className="flex flex-col gap-[30px] xlTablet:gap-[68px]">
                    <div className="space-y-3">
                        <h2 className="xlTablet:text-[53px] text-[32px] font-semibold text-center">{data.Title}</h2>
                        <p className="xlTablet:text-xl text-sm text-center">{data.Description}</p>
                    </div>

                    <div className="grid grid-cols-1 desktop:grid-cols-2 gap-[15px] xlTablet:gap-5">
                        <Flex >
                            {
                                subIndustries?.slice(0, 4).map((item, index) => (
                                    <IndustryCard
                                        key={index}
                                        {...item}
                                    />
                                ))
                            }
                        </Flex>
                        <Flex>
                            {
                                subIndustries?.slice(4, 7).map((item, index) => (
                                    <IndustryCard
                                        key={index}
                                        {...item}
                                    />
                                ))
                            }
                        </Flex>

                    </div>
                </div>
            </div>

        </PageLayer>
    </Root>
)
}

export default IndustriesSection;