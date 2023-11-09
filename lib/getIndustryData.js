import { createClient, groq } from "next-sanity";
import config from '@/lib/sanityConfig';

export async function getIndustryData() {
  return createClient(config).fetch(
    groq`*[_type == 'IndustriesPage'][0] {
    
  
        heroSection-> {
                 hero {..., 
                  heroImage {
                  asset -> {
                  url}
                   }}
              },
              secondaryNavbar,
              bannerSection->{
                ...
              },
              Industries {
                ...,
               Industry[]->{
                 ...
               }
             },
             Newsletter->{
                ...
              },

  


InsightCards {
    ...,
    InsightCard[]->{
   ...,
       bannerImage {
    asset -> {
       url
             }
                  },
 PrimaryTag->{
            ...,
      },
      
        }
     },


     talkWithUsSection->{
        ...,
        image {
        asset->{
          url
        }
        }
      }




    }`
    ,
    { caches: 'no-store' }
  );
}

