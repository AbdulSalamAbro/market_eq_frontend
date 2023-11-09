import { createClient, groq } from "next-sanity";
import config from '@/lib/sanityConfig';

export async function getHomeData() {
  return createClient(config).fetch(
    groq`*[_type == 'homePage'][0] {
      heroSection-> {
         hero {..., 
          heroImage {
          asset -> {
          url}
           }}
      },

      ThreeInsightCards   {
        Insights[]->{
          ...,
          bannerImage {
              asset -> {
                url
                       }
                      }
                   }       },


      FeaturedInsightCardFullWidth {
        featuredInsights->{
          ...,
         bannerImage {
              asset -> {
                url
              }
              },
              PrimaryTag->{
                ...,
          },
          readMore
        }
      },
    
      


      FeaturedInsightCardsFiftyWidth {
        featuredInsights[]->{
          ...,
         bannerImage {
              asset -> {
                url
                       }
                     },
        PrimaryTag->{
              ...,
        },
          readMore
        
                           }
                                   },


                                   StyledFeaturedInsightCard {
                                    featuredInsights->{
                                      ...,
                                     bannerImage {
                                          asset -> {
                                            url
                                                   }
                                                 },
                                    PrimaryTag->{
                                          ...,
                                    },
                                      readMore
                                    
                                                       }
                                                               },   
                                                               
                                                               
                                                               StyledFeaturedInsightCard2 {
                                                                featuredInsight->{
                                                                  ...,
                                                                 bannerImage {
                                                                      asset -> {
                                                                        url
                                                                               }
                                                                             },
                                                                PrimaryTag->{
                                                                      ...,
                                                                },
                                                                  readMore
                                                                
   }
         },

                   InsightsPostGrid {
                       ...,
                      InsightCards[]->{
                    ...,
                    bannerImage {
                    asset -> {
                    url
                          }
                                  },
                   PrimaryTag->{
                       ...,
                             },
                  readMore
             
                               }
                                                                                                                       },                                                                                   
                                                                                                                   


    }`
    ,
    { caches: 'no-store' }
  );
}

// heroSection->{
//   heroImage {
//     asset->{
//       url
//     }
//   },
//   heroButton,
//   heroButtonLink,
//   heroDescription,
//   heroHeader
// },
// ThreeBlogCards->{
//   show,
//   blogs[]->{
//     _id,
//     title,
//     shortText,
//     bannerImage {
//       asset->{
//         url
//       }
//     },
//     tags[]->title
//   }
// },
// FeaturedBlogCardFullWidth->{
//   show,
//   featuredBlogs->{
//     _id,
//     title,
//     shortText,
//     bannerImage {
//       asset->{
//         url
//       }
//     },
//     tags[]->title
//   }
// },
// FeaturedBlogCardsFiftyWidth->{
//   show,
//   featuredBlogs[]->{
//     _id,
//     title,
//     shortText,
//     bannerImage {
//       asset->{
//         url
//       }
//     },
//     tags[]->title
//   }
// },
// StyledFeaturedBlogCard->{
//   show,
//   featuredBlogs->{
//     _id,
//     title,
//     shortText,
//     bannerImage {
//       asset->{
//         url
//       }
//     },
//     tags[]->title
//   }
// },
// StyledFeaturedBlogCard2->{
//   show,
//   featuredBlog->{
//     _id,
//     title,
//     shortText,
//     bannerImage {
//       asset->{
//         url
//       }
//     },
//     tags[]->title
//   }
// },
// BlogPostGrid->{
//   show,
//   title,
//   BlogCards[]->{
//     _id,
//     title,
//     shortText,
//     bannerImage {
//       asset->{
//         url
//       }
//     },
//     tags[]->title
//   }
// },
// slug