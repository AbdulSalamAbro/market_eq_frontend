// // sanityClient.js

// // import { createClient } from '@sanity/client';
// import { createClient } from "next-sanity";
// // import sanityClient from "@sanity/client";

// // const client = sanityClient({
// //   projectId: '4c82yffk',
// //   dataset: 'production',
// //   apiVersion: "2022-03-10",
// //   useCdn: false,
// // });


// const client = createClient({
//   projectId: '4c82yffk',
//   dataset: 'production',
//   apiVersion: "2021-10-21",
//   // apiVersion: "2022-03-25",
//   useCdn: false
// });

// export default client;

let date = new Date();
date = date.toISOString().substring(0, 10);

console.log("the ggg", process.env.REACT_APP_SANITY_TOKEN);


const config = {
  projectId: 'dn5f7kgx',
  dataset: "production",
  apiVersion: `${date}`,
  useCdn: false,
  token: process.env.REACT_APP_SANITY_TOKEN,
}

export default config