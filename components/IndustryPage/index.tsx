"use client";

import { Hero } from "@/stories/sections/Header/Hero";
import React, { useState, useEffect } from 'react';
import PageLayer from "../pageLayer";
import {ins7, ins0 } from "@/stories/assets/pictures";
import { HeroContentVariant } from "@/stories/sections/Header/Hero/components";
import { SecondaryNavBar } from "@/stories/molecules/SecondaryNav";
import { talkUsArray } from "./data";
import OverviewSection from "./OverviewSection";
import ContactSection from "./ContactSection";
import TopIndustriesSection from "./TopIndustriesSection";
import IndustriesSection from "./IndustriesSection";
import NewsletterSection from "./NewsletterSection";
import ErrorBoundary from "../handleError";



const IndustryPage = ({data}) => {

    const secondaryNav = data.secondaryNavbar.map((item)=>(
        {href: item.href,
        label: item.label,
        id: item.id}
        ))
       
console.log("indus",data)

    return (
        <ErrorBoundary>
            <PageLayer bg imgHeight>
                <Hero
                  label="test"
                  description={data?.heroSection.hero.heroDescription}
               
                  buttonTxt="test"
                  title={data?.heroSection.hero.heroHeader}
                    href="#"
                    image={{
                        blurDataURL: ins0.src,
                        height: 1920,
                        src: data.heroSection.hero.heroImage.asset.url,
                        width: 2880,
                    }}
                    intent={HeroContentVariant.SECOND}
                    pathnames={["Industries"]}
                    showBreadcrumbs
                   
                    sectionData={{
                        title: "",
                        items: []
                    }}
                />
            </PageLayer>

            <SecondaryNavBar
                variation="one"
                pageLinks={[
                    ...secondaryNav
                ]}
            />
            <OverviewSection banner={data?.bannerSection}/>
            <IndustriesSection data={data?.Industries}/>
            <NewsletterSection data={data?.Newsletter}/>
            <TopIndustriesSection data={data?.InsightCards} />
            <ContactSection img={data?.talkWithUsSection.image.asset.url}
                title={data?.talkWithUsSection.title}
                list={data?.talkWithUsSection.features}
                link="#"
                reverse
            />
           
        </ErrorBoundary>
    )
}

export default IndustryPage;