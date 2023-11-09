import { do1, do2, do3, os1, os2, os3, p1, p2, p3, plant, stachu } from "@/stories/assets/pictures";

export const storyArray = [
    {
        title: "Lorem ipsum dolor sit amet",
        desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed et neque ipsum. Duis malesuada aliquam odio eget suscipit. Donec convallis urna et neque tristique, id varius dolor suscipit. Pellentesque at neque urna. Fusce posuere velit et ex porta volutpat. Nunc interdum dictum nibh quis vehicula. Quisque scelerisque scelerisque lorem, sit amet sodales dui interdum a. In scelerisque vestibulum pellentesque. Etiam eu est imperdiet, facilisis risus id, tincidunt dolor. Cras nec ultricies odio.",
        img: plant,
        reverse: false
    },
    {
        title: "Lorem ipsum dolor sit amet",
        desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed et neque ipsum. Duis malesuada aliquam odio eget suscipit. Donec convallis urna et neque tristique, id varius dolor suscipit. Pellentesque at neque urna. Fusce posuere velit et ex porta volutpat. Nunc interdum dictum nibh quis vehicula. Quisque scelerisque scelerisque lorem, sit amet sodales dui interdum a. In scelerisque vestibulum pellentesque. Etiam eu est imperdiet, facilisis risus id, tincidunt dolor. Cras nec ultricies odio.",
        img: stachu,
        reverse: true
    },
]

export const peopleArray = [
    {
        image: p1,
        title: "Hannah Morrill",
        desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed et neque ipsum. Duis malesuada aliquam odio eget suscipit."
    },
    {
        image: p2,
        title: "Melinda Thompson",
        desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed et neque ipsum. Duis malesuada aliquam odio eget suscipit."
    },
    {
        image: p3,
        title: "Daniel Dines",
        desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed et neque ipsum. Duis malesuada aliquam odio eget suscipit."
    },
]

export const valuesArray = [
    {
        title: "Start with a point of view",
        desc: "Lorem ipsum dolor sit amet, consectetur adipiscing  ipsum dolor sit amet, consectetur adipiscing elit",
    },
    {
        title: "Make a Difference",
        desc: "Lorem ipsum dolor sit amet, consectetur adipiscing  ipsum dolor sit amet, consectetur adipiscing elit",
    }, 
    {
        title: "Act with Integrity",
        desc: "Lorem ipsum dolor sit amet, consectetur adipiscing  ipsum dolor sit amet, consectetur adipiscing elit",
    }, 
    {
        title: "Work as one",
        desc: "Lorem ipsum dolor sit amet, consectetur adipiscing  ipsum dolor sit amet, consectetur adipiscing elit",
    }, 
    {
        title: "Always Strive, never settle",
        desc: "Lorem ipsum dolor sit amet, consectetur adipiscing  ipsum dolor sit amet, consectetur adipiscing elit",
    },
    {
        title: "Do the right thing",
        desc: "Lorem ipsum dolor sit amet, consectetur adipiscing  ipsum dolor sit amet, consectetur adipiscing elit",
    },
]

export const ourStoryArray = [
    {
        title : "Title of the Story",
        desc : "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed et neque ipsum.",
        img : os3,
        link: "#"   
    },
    {
        title : "Making better workplaces",
        desc : "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed et neque ipsum.",
        img : os2,
        link: "#"   
    },    
    {
        title : "Title of the Story",
        img : os1,
        desc : "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed et neque ipsum.",
        link: "#"   
    },
]


export const sectionSixArray = [
    {
        title : "Alliances",
        desc : "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed et neque ipsum.",
        img : do1,
        link: "#"   
    },
    {
        title : "Our Solutions",
        desc : "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed et neque ipsum.",
        img : do2,
        link: "#"   
    },    
    {
        title : "Case Studies",
        img : do3,
        desc : "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed et neque ipsum.",
        link: "#"   
    },
]

export const Comma = () => (
    <svg width="30" height="26" viewBox="0 0 30 26" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path opacity="0.5" fill-rule="evenodd" clip-rule="evenodd" d="M10.8309 0.78289C4.39817 4.91421 0.824699 9.72212 0.109663 15.2092C-1.00347 23.7495 6.63383 27.9295 10.5037 24.174C14.3736 20.4178 12.0543 15.6508 9.25221 14.3472C6.45016 13.0444 4.73647 13.4981 5.03547 11.7562C5.33446 10.0151 9.32055 5.18672 12.8231 2.93825C12.9472 2.8327 13.0264 2.68379 13.0445 2.52187C13.0626 2.35995 13.0183 2.19722 12.9205 2.06688L12.0543 0.940078C11.6784 0.451428 11.3179 0.470222 10.8309 0.782035V0.78289ZM27.768 0.78289C21.3352 4.91421 17.7609 9.72297 17.0467 15.2092C15.9336 23.7495 23.5709 27.9295 27.4408 24.174C31.3107 20.4178 28.9913 15.6508 26.1884 14.3472C23.3863 13.0444 21.6726 13.4981 21.9716 11.7562C22.2706 10.0151 26.2576 5.18672 29.7602 2.93825C29.8841 2.83259 29.9632 2.68361 29.9811 2.52169C29.999 2.35978 29.9545 2.19712 29.8567 2.06688L28.9904 0.940078C28.6146 0.451428 28.254 0.470222 27.768 0.782035V0.78289Z" fill="white" />
    </svg>
)

export const Left = () => (
    <svg width="37" height="38" viewBox="0 0 37 38" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M18.5 32.875C26.163 32.875 32.375 26.663 32.375 19C32.375 11.337 26.163 5.125 18.5 5.125C10.837 5.125 4.625 11.337 4.625 19C4.625 26.663 10.837 32.875 18.5 32.875Z" stroke="white" stroke-linecap="round" stroke-linejoin="round" />
        <path d="M20.042 14.375L15.417 19L20.042 23.625" stroke="white" stroke-linecap="round" stroke-linejoin="round" />
    </svg>
)


export const Right = () => (
    <svg width="38" height="38" viewBox="0 0 38 38" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M18.833 32.875C26.496 32.875 32.708 26.663 32.708 19C32.708 11.337 26.496 5.125 18.833 5.125C11.1701 5.125 4.95801 11.337 4.95801 19C4.95801 26.663 11.1701 32.875 18.833 32.875Z" stroke="white" stroke-linecap="round" stroke-linejoin="round" />
        <path d="M17.291 23.625L21.916 19L17.291 14.375" stroke="white" stroke-linecap="round" stroke-linejoin="round" />
    </svg>
)

export const Book = () => (
    <svg width="50" height="50" viewBox="0 0 50 50" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M25 40C22.1116 38.3318 18.8352 37.4536 15.5 37.4536C12.1648 37.4536 8.88837 38.3318 6 40V12.5464C8.88837 10.8782 12.1648 10 15.5 10C18.8352 10 22.1116 10.8782 25 12.5464M25 40C27.8884 38.3318 31.1648 37.4536 34.5 37.4536C37.8352 37.4536 41.1116 38.3318 44 40V12.5464C41.1116 10.8782 37.8352 10 34.5 10C31.1648 10 27.8884 10.8782 25 12.5464M25 40V12.5464" stroke="#3D4160" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
    </svg>
)