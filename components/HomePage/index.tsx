"use client";

import { Hero } from "@/stories/sections/Header/Hero";
import ErrorBoundary from "../handleError";
import { CardWrapper, HeroSectionWrap } from "./styled";
import { InsightCard } from "@/stories/cards";
import { tesla } from "@/stories/assets/pictures";
import React, from 'react';
import FeatureImagSection from "./featureImageSection";
import { HeroContentVariant } from "@/stories/sections/Header/Hero/components";
import FeatureCardSection from "./featureCardSection";
import { cardData, cardSectionData } from "./data";
import SectionThree from "./sectionThree";
import SectionFour from "./sectionFour";
import GridArticles from "./gridArticles";
import PageLayer, { PageRoot } from "../pageLayer";


const HomePage = ({data}) => {



  return (
    <ErrorBoundary>
      <div
        style={{
          backgroundColor: "rgb(14, 32, 76)",
        }}
      >

        <HeroSectionWrap>

          <Hero
            label={data?.heroSection?.hero?.heroHeader}
            description={data?.heroSection?.hero?.heroDescription}
            href="#"
            image={{
              blurDataURL: data?.heroSection?.hero?.heroImage.asset.url,
              height: 2880,
              src: data?.heroSection?.hero?.heroImage.asset.url,
              width: 1920,
            }}

            dark
          
            showLinkWithArrowIcon
            buttonTxt={data?.heroSection?.hero?.heroButton}
            title={data?.heroSection?.hero?.heroHeader}
            intent={HeroContentVariant.FIRST}
            sectionData={{
              title: "",
              items: [],
            }}
          />
        </HeroSectionWrap>
      </div>

      <PageLayer bg>
        <CardWrapper>
          {data.ThreeInsightCards.Insights.map((card) => (
            <InsightCard
              key={card._id}
              title={card.title}
              // image={card.bannerImage.asset.url}
              image={{
                height: 2880,
                src: card.bannerImage.asset.url,
                width: 1920,
              }}
              link='/'
              imgHeading={card.imgHeading} 
              hideDescription
              readMore
              underlineHover
            />
          ))}
        </CardWrapper>
      </PageLayer>

     
      <PageLayer bg>
        <FeatureImagSection data={data?.FeaturedInsightCardFullWidth?.featuredInsights}/>
      </PageLayer>


      <PageLayer bg>
        <FeatureCardSection cardData={data?.FeaturedInsightCardsFiftyWidth.featuredInsights} />
      </PageLayer>

      <PageRoot>
        <SectionThree data={data?.StyledFeaturedInsightCard}/>
        <SectionFour data={data?.StyledFeaturedInsightCard2}/>
        <GridArticles data={data?.InsightsPostGrid} />
      </PageRoot>
    </ErrorBoundary>
  );
};

export default HomePage;
