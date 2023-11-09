import insta from "@/stories/assets/icons/instagram.svg";
import twitter from "@/stories/assets/icons/twitter.svg";
import linked from "@/stories/assets/icons/linked.svg";
import facebook from "@/stories/assets/icons/facebook.svg";


const socilLinks = {
    links: [
        {
            label: "Facebook",
            href: "/",
            active: true,
            icon : facebook
        },
        {
            label: "Twitter",
            href: "/about",
            active: false,
            icon : twitter
        },
        {
            label: "Instagram",
            href: "/contact",
            active: false,
            icon : insta
        },
        {
            label: "Linkedin",
            href: "/blog",
            active: false,
            icon : linked
        },
    ],
}

const servicesLinks = [
    {
        id : 1,
        label: "Consulting",
        href: "/",  
    },
    {
        id : 1,
        label: "Cloud",
        href: "/",  
    },
    {
        id : 1,
        label: "Security",
        href: "/",  
    },
    {
        id : 1,
        label: "Digital",
        href: "/",  
    },
]


const links = {
    links: [
        {
            label: "Terms of Use",
            href: "/",
            active: true,
        },
        {
            label: "Privacy",
            href: "/about",
            active: false,
        },
        {
            label: "Cookies",
            href: "/contact",
            active: false,
        },
        {
            label: "Career Opportunities",
            href: "/blog",
            active: false,
        },
    ],
}

export {socilLinks, servicesLinks, links}