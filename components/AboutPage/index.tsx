"use client";

import { Hero } from "@/stories/sections/Header/Hero";
import { HeroContentVariant } from "@/stories/sections/Header/Hero/components";
import PageLayer from "../pageLayer";
import { meet, meeting } from "@/stories/assets/pictures";
import AboutPageSectionTwo from "./aboutSectionTwo";
import AboutPageSectionThree from "./aboutSectionThree";
import AboutImageSection from "./aboutImgSection";
import AboutPageSectionTwelve from "./aboutSection12";
import AboutSectionEleven from "./aboutSection11";
import AboutSectionTen from "./aboutSection10";
import AboutSectionNine from "./aboutSection9";
import AboutSectionEight from "./aboutSection8";
import AboutSectionFive from "./aboutSection5";
import AboutSectionOne from "./aboutSectionOne";
import { SecondaryNavBar } from "@/stories/molecules/SecondaryNav";
import AboutSectionFour from "./aboutSection4";
import AboutSectionSix from "./aboutSection6";
import AboutSectionSeven from "./aboutSection7";

const AboutPage = () => {
  return (
    <>
      <PageLayer bg imgHeight>
        <Hero
          description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed at mi sodales, congue dui a, pretium est"
          href="#"
          image={{
            blurDataURL: meeting.src,
            height: 1920,
            src: meeting.src,
            width: 2880,
          }}
          intent={HeroContentVariant.SECOND}
          overlayVariant="first"
          pathnames={["About"]}
          showBreadcrumbs
          title="about us"
          sectionData={{
            title: "",
            items: []
          }}
          label="About us"
        />
      </PageLayer>

      <SecondaryNavBar
        variation="one"
        pageLinks={[
          {
            label: "About Us",
            href: "/about-us#sectionOne",
            id : "sectionOne"
          },
          {
            label: "Our Team",
            href: "/about-us#our-team",
            id : "our-team"
          },
          {
            label: "Our Culture",
            href: "/about-us#our-culture",
            id : "our-culture"
          },
          {
            label: "Our Impact",
            href: "/about-us#our-impact",
            id : "our-impact"
          },
          {
            label: "Our Awards",
            href: "/about-us#our-awards",
            id : "our-awards"
          }
        ]}
      />

      <AboutSectionOne />
      <AboutImageSection variation="two" image={meet} />
      <AboutPageSectionTwo />
      <AboutPageSectionThree />
      <AboutSectionFour />
      <AboutImageSection />
      <AboutSectionFive />
      <AboutSectionSix />
      <AboutSectionSeven />
      <AboutSectionEight />
      <AboutSectionNine />
      <AboutSectionTen />
      <AboutSectionEleven />
      <AboutPageSectionTwelve />
    </>
  );
};

export default AboutPage;
