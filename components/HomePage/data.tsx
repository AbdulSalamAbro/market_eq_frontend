import {stockMarket, bot, auRelity, auPlay, boxes, doctor, team } from "@/stories/assets/pictures";

const cardData = [
    {
        id : 1,
        title: "How to optimize your pages to get more traffic on mobile devices",
        image: stockMarket,
        link: "/",
        imgHeading: "Fintech",
    },
    {
        id : 2,
        title: "How to optimize your pages to get more traffic on mobile devices",
        image: auRelity,
        link: "/",
        imgHeading: "Augmented Reality",
    },
    {
        id : 3,
        title: "How to optimize your pages to get more traffic on mobile devices",
        image: bot,
        link: "/",
        imgHeading: "Artificial Intelligence",
    },
]

const cardSectionData = [
    {
        id: 1,
        title: "What's behind tesla's latest self-driving vehicle updates",
        image: auPlay.src,
        link: "#",
        imgHeading: "Blockchain",
    },
    {
        id: 2,
        title: "What's behind tesla's latest self-driving vehicle updates",
        image: boxes.src,
        link: "#",
        imgHeading: "Virtual Reality",
    },
]

const articlesData = [
    {
        id : 1,
        title: "Why wavering customer confidence could stall",
        desc : "The Energy Consumer Confidence Index reveals that the impact of the energy transition is hitting home. How can we boost customer confidence?",
        image: doctor,
        link: "/",
        imgHeading: "Fintech",
    },
    {
        id : 2,
        title: "The PHE is ending: What it means for COVID-19",
        desc : "The end of the Public Health Emergency (PHE) will have real financial, operational and compliance impacts for consumers, providers, and manufacturers.",
        image: bot,
        link: "/",
        imgHeading: "Augmented Reality",
    },
    {
        id : 3,
        title: "Why automotive OEMs need to adapt",
        desc : "As technology continues to expand what’s possible, the original automotive franchise model has remained largely unchanged.",
        image: team,
        link: "/",
        imgHeading: "Artificial Intelligence",
    },   
]

export { cardData, cardSectionData, articlesData };