"use client";

import { Hero } from "@/stories/sections/Header/Hero";
import img from "../../stories/assets/pictures/services.jpeg";
import { HeroContentVariant } from "@/stories/sections/Header/Hero/components";


const ServicesPage = ({data}) => {
  console.log("servciee",data)
  return (
    <>
      <Hero
         description={data?.heroSection.hero.heroDescription}
        href="#"
        image={{
          blurDataURL: img.src,
          height: 1920,
          src: data?.heroSection.hero.heroImage.asset.url,
          width: 2880,
        }}
        intent={HeroContentVariant.SECOND}
        pathnames={["Services"]}
        showBreadcrumbs
        title={data?.heroSection.hero.heroHeader} label={""} sectionData={{
          title: "",
          items: []
        }} />
    </>
  )
}

export default ServicesPage;