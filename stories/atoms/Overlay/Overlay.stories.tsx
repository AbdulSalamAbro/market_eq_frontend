// story for Overlay
import React from "react";
import Image from "next/image";
import { StoryObj, Meta } from "@storybook/react";
import { Overlay } from ".";
import { tesla } from "@/stories/assets/pictures";
import { OverlayVariant } from "./Overlay.types";

const meta: Meta<typeof Overlay> = {
  title: "atoms/Overlay",
  component: Overlay,
};

export default meta;

type Story = StoryObj<typeof Overlay>;

export const Default: Story = {
  render: () => (
    <div className="relative h-screen w-full">
      <Image src={tesla} alt="tesla" className="object-cover h-full w-full" />
      <Overlay overlayVariant={OverlayVariant.FIRST} />
    </div>
  ),
};
