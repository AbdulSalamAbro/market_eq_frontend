"use client";

import { Hero } from "@/stories/sections/Header/Hero";
import PageLayer from "../pageLayer";
import { code, party, whatWeDo } from "@/stories/assets/pictures";
import { HeroContentVariant } from "@/stories/sections/Header/Hero/components";
import { SecondaryNavBar } from "@/stories/molecules/SecondaryNav";
import AboutPageSectionTwelve from "../AboutPage/aboutSection12";
import AboutImageSection from "../AboutPage/aboutImgSection";
import AboutSectionOne from "../AboutPage/aboutSectionOne";
import AboutSectionTen from "../AboutPage/aboutSection10";
import WhatWeSectionFive from "./whatWeSection5";
import { TabArray } from "./data";
import WhatWeSectionSix from "./whatWeSection6";
import WhatWeSectionSeven from "./whatWeSection7";
import WhatWeSection8 from "./whatWeSection8";
import WhatWeSectionNine from "./whatWeSection9";
import WhatWeSectionTwo from "./whatWeSection2";
import WhatWeSectionThree from "./whatWeSection3";
import WhatWeSectionFour from "./whatWeSection4";

const obj = {
    bold : "Helping clients",
    normal : "to build trust, transform, operate and grow"
}

const WhatWeDoPage = () => {
    return (
        <>
            <PageLayer bg imgHeight>
                <Hero
                    description="Transforming Businesses through Technology"
                    href="#"
                    image={{
                        blurDataURL: whatWeDo.src,
                        height: 1920,
                        src: whatWeDo.src,
                        width: 2880,
                    }}
                    intent={HeroContentVariant.SECOND}
                    pathnames={["what we do"]}
                    showBreadcrumbs
                    title="what we do"
                    sectionData={{
                        title: "",
                        items: []
                    }}
                    label="what we do"
                />
            </PageLayer>
            <SecondaryNavBar
                variation="one"
                pageLinks={[
                    {
                        label: "Services",
                        href: "/what-we-do#services",
                        id : "services"
                    },
                    {
                        label: "Strategy",
                        href: "/what-we-do#strategy",
                        id : "strategy"
                    },
                    {
                        label: "Partners",
                        href: "/what-we-do#partners",
                        id : "partners"
                    }
                ]}
            />
            <AboutSectionOne 
                title={obj}
            />
            <WhatWeSectionTwo />
            <WhatWeSectionThree />
            <WhatWeSectionFour />
            <WhatWeSectionFive
                title="Select your industry. Discover our impact"
                tabArray={TabArray}
            />
            <AboutImageSection variation="one" image={code} />
            <WhatWeSectionSix />
            <WhatWeSectionSeven />
            <WhatWeSection8 />
            <WhatWeSectionNine />
            <AboutSectionTen title="Learn More About Us" hideExplore />
            <AboutPageSectionTwelve
                img={party}
                title="transformation starts here"
                description="Lorem ipsum dolor sit amet consectetur adipiscing elit, urna consequat felis vehicula"
                link="#"
                bg={true}
            />
        </>
    )
}

export default WhatWeDoPage;