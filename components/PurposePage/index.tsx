"use client";

import { Hero } from "@/stories/sections/Header/Hero";
import PageLayer from "../pageLayer";
import { PurVal, girl, hand } from "@/stories/assets/pictures";
import { HeroContentVariant } from "@/stories/sections/Header/Hero/components";
import { SecondaryNavBar } from "@/stories/molecules/SecondaryNav";
import AboutPageSectionTwelve from "../AboutPage/aboutSection12";
import AboutSectionTen from "../AboutPage/aboutSection10";
import WhoWeSectionThree from "../WhoWeArePage/whoWeSectionThree";
import AboutImageSection from "../AboutPage/aboutImgSection";
import AboutPageSectionThree from "../AboutPage/aboutSectionThree";
import PurposeInsightSection from "./PurposeInsight";
import SectionOne from "./sectionOne";
import OurCulture from "./OurCulture";
import PurposeSectionFour from "./PurposeSec4";
import { OverlayVariant } from "@/stories/atoms";

const PurposePage = () => {
    return (
        <>
            <PageLayer bg imgHeight>
                <Hero
                    description="Discover more about our values, purpose and what makes us different"
                    href="#"
                    image={{
                        blurDataURL: PurVal.src,
                        height: 1920,
                        src: PurVal.src,
                        width: 2880,
                    }}
                    intent={HeroContentVariant.SECOND}
                    overlayVariant={OverlayVariant.FIRST}
                    pathnames={["Purpose & Values"]}
                    showBreadcrumbs
                    title="Purpose & Values"
                    sectionData={{
                        title: "",
                        items: []
                    }}
                    label="Purpose & Values"
                />
            </PageLayer>
            <SecondaryNavBar
                variation="one"
                pageLinks={[
                    {
                        label: "Overview",
                        href: "/purpose#overview",
                        id : "overview"
                    },
                    {
                        label: "Our Culture",
                        href: "/purpose#our-people",
                        id : "our-people"
                    },
                    {
                        label: "Our Values",
                        href: "/purpose#our-values",
                        id : "our-values"
                    }
                ]}
            />
            <SectionOne />
            <AboutPageSectionThree joinUs/>
            <WhoWeSectionThree title=""/>
            <PurposeSectionFour />
            <OurCulture />
            <AboutImageSection variation="one" image={girl}/>
            <AboutPageSectionThree joinUs id="our-values"/>
            <PurposeInsightSection />
            <AboutSectionTen title="Learn More About Us"/>
            <AboutPageSectionTwelve 
                img={hand}
                title="transformation starts here"
                description="Lorem ipsum dolor sit amet consectetur adipiscing elit, urna consequat felis vehicula"
                link="#"
                bg={true}
            />
        </>
    )
}

export default PurposePage