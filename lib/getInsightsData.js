import { createClient, groq } from "next-sanity";
import config from '@/lib/sanityConfig';

export async function getInsightsData() {
  return createClient(config).fetch(
    groq`*[_type == 'InsightsPage'][0] {
        ...,
  
        heroSection-> {
                 hero {..., 
                  heroImage {
                  asset -> {
                  url}
                   }}
              },

              Industries {
                ...,
               Industry[]->{
                 ...
               }
             }

    }`
    ,
    { caches: 'no-store' }
  );
}

