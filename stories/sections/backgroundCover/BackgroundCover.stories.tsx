import AboutPageSectionTwelve from "@/components/AboutPage/aboutSection12";
import { party } from "@/stories/assets/pictures";
import { StoryObj, Meta } from "@storybook/react";

const meta:  Meta<typeof AboutPageSectionTwelve> = {
    title: "sections/AboutPageSectionTwelve",
    component: AboutPageSectionTwelve,
    args: {
        img: party,
        title: "transformation starts here",
        description: "Lorem ipsum dolor sit amet consectetur adipiscing elit, urna consequat felis vehicula",
        link: "#",
        bg: true
    },
    decorators: [
        (Story) => (
            <div className="h-[617px] tablet:h-[372px] desktop:h-[704px]">
                <Story />
            </div>
        ),
    ],
}

export default meta;

export const Default: StoryObj<typeof AboutPageSectionTwelve> = {
    render: (props) => <AboutPageSectionTwelve {...props} />
}