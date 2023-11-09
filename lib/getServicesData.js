import { createClient, groq } from "next-sanity";
import config from '@/lib/sanityConfig';

export async function getServicePageData() {
  return createClient(config).fetch(
    groq`*[_type == 'servicesPage'][0] {
   
        heroSection-> {
                 hero {..., 
                  heroImage {
                  asset -> {
                  url}
                   }}
              },

    }`
    ,
    { caches: 'no-store' }
  );
}

