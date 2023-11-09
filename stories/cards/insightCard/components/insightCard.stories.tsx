import { Meta, StoryObj } from "@storybook/react";
import { InsightCard, InsightCardProps } from ".";
import { ai } from "@/stories/assets/pictures";

const meta: Meta<InsightCardProps> = {
    title: "Insight Card",
    component: InsightCard,
    argTypes: {},
  } as Meta;
  

export default meta;
 
export const Default: StoryObj<InsightCardProps> = {
    args: {
        title: "Why wavering customer confidence could stall",
        description: "The Energy Consumer Confidence Index reveals that the impact of the energy transition is hitting home. How can we boost customer confidence?",
        image: ai,
        link: "/",
        imgHeading: "Artificial Intelligence"
    },
    decorators: [
        (Story) => (
            <div className="flex flex-col justify-center items-center gap-4 pt-2">
                <Story />
            </div>
        ),
    ],
    render: (props: InsightCardProps) => <InsightCard {...props} />,
};
