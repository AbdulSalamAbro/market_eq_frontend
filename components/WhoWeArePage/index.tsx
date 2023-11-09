"use client";

import { Hero } from "@/stories/sections/Header/Hero";
import PageLayer from "../pageLayer";
import { code, party, walk, whoWeAre } from "@/stories/assets/pictures";
import { HeroContentVariant } from "@/stories/sections/Header/Hero/components";
import { SecondaryNavBar } from "@/stories/molecules/SecondaryNav";
import WhoWeAreSectionOne from "./whoWeSectionOne";
import WhoWeAreSectionTwo from "./whoWeSectionTwo";
import WhoWeSectionThree from "./whoWeSectionThree";
import AboutImageSection from "../AboutPage/aboutImgSection";
import WhoWeSectionFour from "./whoWeSectionFour";
import WhoWeSectionFive from "./whoWeSectionFive";
import { ourStoryArray } from "./data";
import WhoWeSectionSix from "./whoWeSectionSix";
import WhoWeSectionSeven from "./whoWeSectionSeven";
import AboutPageSectionTwelve from "../AboutPage/aboutSection12";

const WhoWeArePage = () => {
    return (
        <>
            <PageLayer bg imgHeight>
                <Hero
                    description="Discover more about our values, purpose and what makes us different"
                    href="#"
                    image={{
                        blurDataURL: whoWeAre.src,
                        height: 1920,
                        src: whoWeAre.src,
                        width: 2880,
                    }}
                    intent={HeroContentVariant.SECOND}
                    pathnames={["who we are"]}
                    showBreadcrumbs
                    title="who we are"
                    sectionData={{
                        title: "",
                        items: []
                    }}
                    label="who we are"
                />
            </PageLayer>
            <SecondaryNavBar
                variation="one"
                pageLinks={[
                    {
                        label: "Overview",
                        href: "/who-we-are#overview",
                        id: "overview"
                    },
                    {
                        label: "Our People",
                        href: "/who-we-are#our-people",
                        id: "our-people"
                    },
                    {
                        label: "Our Values",
                        href: "/who-we-are#our-values",
                        id: "our-values"
                    }
                ]}
            />

            <WhoWeAreSectionOne />
            <WhoWeAreSectionTwo />
            <WhoWeSectionThree id="our-values" />
            <AboutImageSection  variation="one" image={code} />
            <WhoWeSectionFour />
            <WhoWeSectionFive dataArray={ourStoryArray}/>
            <WhoWeSectionSix />
            <WhoWeSectionSeven />
            <AboutPageSectionTwelve 
                img={walk}
                title="Find the right career opportunity"
                description="Lorem ipsum dolor sit amet consectetur adipiscing elit, urna consequat felis vehicula"
                link="#"
                reverse
            />
            <WhoWeSectionFive 
                title="Learn More About Us"
                description = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed et neque ipsum. Duis malesuada aliquam odio eget suscipit. Donec convallis urna et neque tristique, id varius dolor suscipit."
                dataArray={ourStoryArray}
            />
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

export default WhoWeArePage;